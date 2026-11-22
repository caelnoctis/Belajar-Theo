(function () {
  "use strict";

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const main = $("#main");
  const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const subj = (id) => SUBJECTS.find((s) => s.id === id);
  const chaptersOf = (g, sid) => (MATERI[g] && MATERI[g][sid]) || [];
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------------- penyimpanan progres ---------------- */
  const KEY = "theo-belajar-v1";
  // done: nilai latihan terbaik per bab · tests: nilai tes · read: bab yang sudah dibuka
  // hist: jawaban terakhir (buat review) · draft: kuis yang belum selesai (buat dilanjut)
  const EMPTY = () => ({ done: {}, tests: {}, read: {}, hist: {}, draft: {}, last: null });
  let DB = EMPTY();
  try { DB = Object.assign(DB, JSON.parse(localStorage.getItem(KEY)) || {}); } catch (e) {}
  ["done", "tests", "read", "hist", "draft"].forEach((k) => { if (!DB[k] || typeof DB[k] !== "object") DB[k] = {}; });
  let saveFailed = false;
  const save = () => {
    try { localStorage.setItem(KEY, JSON.stringify(DB)); saveFailed = false; }
    catch (e) {
      // penuh: buang draft lama dulu, lalu coba sekali lagi
      DB.draft = {};
      try { localStorage.setItem(KEY, JSON.stringify(DB)); } catch (e2) { saveFailed = true; }
    }
  };
  // minta browser jangan menghapus data ini saat memori HP penuh
  try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist(); } catch (e) {}
  const fmtDate = (t) => { try { return new Date(t).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" }); } catch (e) { return ""; } };

  function subjectProgress(g, sid) {
    const ch = chaptersOf(g, sid);
    if (!ch.length) return 0;
    const n = ch.filter((c) => DB.done[`${g}.${sid}.${c.id}`]).length;
    return Math.round((n / ch.length) * 100);
  }

  /* ---------------- util ---------------- */
  function rng(seed) { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

  // bintang bergerigi tidak rata, seperti stiker di referensi
  function burst({ n = 13, seed = 7, size = 120, cls = "", style = "" } = {}) {
    const r = rng(seed); let d = "";
    for (let i = 0; i < n * 2; i++) {
      const ang = (Math.PI * i) / n;
      const rad = i % 2 ? 22 + r() * 14 : 62 + r() * 38;
      d += (i ? "L" : "M") + (Math.cos(ang) * rad).toFixed(1) + " " + (Math.sin(ang) * rad).toFixed(1);
    }
    return `<svg class="burst ${cls}" style="width:${size}px;height:${size}px;${style}" viewBox="-102 -102 204 204" aria-hidden="true"><path d="${d}Z"/></svg>`;
  }

  const doodle = `<svg class="doodle" viewBox="0 0 40 40" aria-hidden="true"><path d="M20 3l3.6 10.4L34 12l-8 7.6 6 9.4-11-3.6L15 36l-1.2-11L3 22l10.2-4.6L10 7l7.4 5.6z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="20" cy="20" r="3" fill="currentColor"/></svg>`;

  /* ---------------- header & footer ---------------- */
  function renderChrome(route) {
    const cur = (h) => (route.startsWith(h) ? ' aria-current="page"' : "");
    $("#top").innerHTML = `
      <nav aria-label="Menu utama">
        ${doodle}
        <ul class="mono">
          <li><a href="#/"${route === "#/" ? ' aria-current="page"' : ""}>Beranda</a></li>
          <li><a href="#/kelas/7"${cur("#/kelas/7")}>Kelas 7</a></li>
          <li><a href="#/kelas/8"${cur("#/kelas/8")}>Kelas 8</a></li>
          <li><a href="#/kelas/9"${cur("#/kelas/9")}>Kelas 9</a></li>
          <li><a href="#/jadwal"${cur("#/jadwal")}>Jadwal 7F</a></li>
          <li><a href="#/rapor"${cur("#/rapor")}>Rapor</a></li>
        </ul>
      </nav>
      <a class="pill" href="${DB.last || "#/kelas/7"}">${DB.last ? "Lanjut belajar" : "Mulai belajar"}</a>`;
    $("#foot").innerHTML = `
      <span class="tilt">Kelas 7F</span>
      <span class="mono">Materi, latihan, pretest, posttest</span>
      <span class="pills"><a class="pill" href="#/kelas/7">Kelas 7</a><a class="pill" href="#/kelas/8">Kelas 8</a><a class="pill" href="#/kelas/9">Kelas 9</a></span>`;
  }

  /* ---------------- BERANDA ---------------- */
  function Home() {
    const total = [7, 8, 9].reduce((a, g) => a + SUBJECTS.reduce((b, s) => b + chaptersOf(g, s.id).length, 0), 0);
    const qs = [7, 8, 9].reduce((a, g) => a + SUBJECTS.reduce((b, s) => b + chaptersOf(g, s.id).reduce((c, ch) => c + ch.q.length, 0), 0), 0);
    const done = Object.keys(DB.done).length;
    const day = new Date().getDay();
    const list = JADWAL[day];
    const slots = list
      ? list.map(([t, n, sid], i) => sid
          ? `<a class="slot" href="#/kelas/7/${sid}"><span class="t">${t || String(i + 1).padStart(2, "0")}</span><span class="n">${esc(n)}</span><span class="tag">${chaptersOf(7, sid).length} bab</span></a>`
          : `<div class="slot off"><span class="t">${t || String(i + 1).padStart(2, "0")}</span><span class="n">${esc(n)}</span></div>`).join("")
      : `<p class="cond" style="font-size:30px;margin:0">${HARI[day]}. Libur.</p><p style="margin:6px 0 0;color:#C9D3DE">Kerjakan satu kuis aja biar otaknya tetap panas.</p><a class="pill lemon" style="align-self:flex-start;margin-top:12px" href="#/kelas/7">Pilih kuis</a>`;

    return `
    <section class="panel hero">
      <div class="hero-row mono"><span>Baca</span><span>Kerjakan</span><span>Ulangi</span><span></span></div>
      <div class="hero-mid"><h1>Ruang belajar<br>punya Theodore</h1></div>
      <div class="wordmark" aria-label="THEO">
        <svg class="orbit" viewBox="0 0 1000 400" preserveAspectRatio="none" aria-hidden="true">
          <ellipse cx="500" cy="210" rx="470" ry="150" transform="rotate(-6 500 210)"/>
          <ellipse cx="520" cy="200" rx="300" ry="190" transform="rotate(14 520 200)"/>
          <path d="M60 320 C 260 120, 420 380, 610 160 S 900 80, 960 260"/>
        </svg>
        <div class="letters" aria-hidden="true"><span>T</span><span>H</span><span>E</span><span>O</span></div>
        <span class="tiny" style="left:16%;top:12%">t</span><span class="tiny" style="left:44%;top:4%">h</span>
        <span class="tiny" style="left:63%;top:86%">e</span><span class="tiny" style="right:10%;top:20%">o</span>
      </div>
      <div class="hero-row mono"><span>Kelas 7<br>Kelas 8 · Kelas 9</span><span>${SUBJECTS.length} mapel<br>sesuai jadwal 7F</span><span>Pretest &<br>posttest</span><span>${total} bab<br>${qs} soal latihan</span></div>
      <button class="bigbar" data-scroll="pilih" style="width:100%;border:0;cursor:pointer"><span class="arr r"></span>Pilih kelas<span class="arr l"></span></button>
    </section>

    <section class="panel ink">
      <div class="intro">
        <div class="collage rv">
          <figure class="polaroid p1"><img src="assets/img/theo-kuda.jpg" alt="Theo naik kuda kayu"><figcaption>Theo, mode santai</figcaption></figure>
          <figure class="polaroid p2"><img src="assets/img/theo-polisi.jpg" alt="Theo kecil pakai seragam polisi"><figcaption>Theo versi mini</figcaption></figure>
          <figure class="polaroid p3"><img src="assets/img/theo-malam.jpg" alt="Theo di malam hari"><figcaption>Theo malam-malam</figcaption></figure>
          ${burst({ seed: 3, size: 120, cls: "spin ice", style: "left:52%;top:-20px" })}
          ${burst({ seed: 11, size: 80, cls: "spin rev", style: "left:-18px;bottom:60px" })}
          <div class="note" style="right:0;bottom:30px">Theo kecil udah jaga ketertiban kelas pakai peluit. Sekarang gilirannya jaga nilai UAS.</div>
        </div>
        <div class="rv">
          <h2>Halo, Theo</h2>
          <p class="lead">Belajar di sini tanpa buru-buru. Baca materinya, kerjakan latihan, lihat nilaimu naik.</p>
          <p>Mulai tiap mapel dengan <b>pretest</b> buat ngecek seberapa paham kamu. Baca materinya bab per bab, kerjakan latihan di akhir bab, lalu tutup dengan <b>posttest</b>. Rapor nyimpen dua nilai itu supaya kamu bisa bandingkan.</p>
          <div class="statrow">
            <div class="stat"><b>${done}</b><span class="mono">Bab selesai</span></div>
            <div class="stat"><b>${Object.keys(DB.tests).length}</b><span class="mono">Tes dikerjakan</span></div>
            <div class="stat"><b>7F</b><span class="mono">Kelas sekarang</span></div>
          </div>
        </div>
      </div>
    </section>

    <section class="panel" id="pilih">
      <div class="sec-head"><h2>Pilih</h2><span class="mono">Klik salah satu kelas</span><h2>Kelas</h2></div>
      <div class="path-wrap">
        <svg class="trail" viewBox="0 0 1000 400" preserveAspectRatio="none" aria-hidden="true"><path d="M-20 80 C 180 -20, 260 300, 500 200 S 820 20, 1020 140"/></svg>
        <div class="grades">
          ${gradeCard(7, "theo-kuda.jpg", "Semester 1 lagi jalan. UAS sebentar lagi.", "center 30%")}
          ${gradeCard(8, "theo-becak.jpg", "Buat nyicil duluan.", "center 40%")}
          ${gradeCard(9, "theo-malam.jpg", "Persiapan ujian akhir SMP.", "center 45%", true)}
        </div>
        ${burst({ seed: 21, size: 110, cls: "spin", style: "right:-20px;top:-40px" })}
      </div>
    </section>

    <section class="panel ink">
      <div class="today">
        <div class="rv">
          <p class="mono" style="color:var(--sky)">Jadwal 7F · ${HARI[day]}</p>
          <h2>Hari ini<br>di kelas</h2>
          <p style="color:#C9D3DE;max-width:38ch">Klik mapel yang tadi dipelajari di sekolah, lalu ulangi materinya selagi masih ingat.</p>
          <a class="pill lemon" href="#/jadwal">Jadwal seminggu</a>
        </div>
        <div class="blob rv" style="background:var(--sky);color:var(--ink)">
          <div style="display:flex;flex-direction:column;gap:4px" class="today-list">${slots}</div>
        </div>
      </div>
    </section>`;
  }

  function gradeCard(g, img, cap, pos, bright) {
    const n = SUBJECTS.reduce((a, s) => a + chaptersOf(g, s.id).length, 0);
    return `<a class="grade" href="#/kelas/${g}">
      <span class="num">0${g - 6}</span>
      <div class="ph"><img src="assets/img/${img}" alt="" style="object-position:${pos};${bright ? "filter:brightness(1.7) contrast(1.05)" : ""}"></div>
      <span class="lbl">Kelas<br>${g}</span>
      <div class="cap">${n} bab · ${cap}</div>
    </a>`;
  }

  /* ---------------- HALAMAN KELAS ---------------- */
  function Grade(g) {
    const sem = Number(sessionStorageGet("sem") || 0);
    const cards = SUBJECTS.map((s) => {
      const ch = chaptersOf(g, s.id).filter((c) => !sem || c.s === sem);
      const p = subjectProgress(g, s.id);
      return `<a class="subj" href="#/kelas/${g}/${s.id}">
        <div><span class="sym">${s.sym}</span><div class="nm">${esc(s.name)}</div></div>
        <div class="meta"><span class="bar"><i style="--w:${p}%"></i></span><span class="mono">${ch.length} bab</span></div>
      </a>`;
    }).join("");
    const uasSem = g === 7 ? 1 : 0;
    return `
    <section class="panel">
      <div class="crumbs mono"><a href="#/">Beranda</a><span>/</span><span>Kelas ${g}</span></div>
      <div class="pagehead"><h1>Kelas ${g}</h1>
        <p class="side">${g === 7 ? "Kelas Theo sekarang. Bab bertanda S1 masuk UAS semester ganjil." : g === 8 ? "Materi kelas 8 buat dicicil. Pelan-pelan aja." : "Materi kelas 9, termasuk bekal buat ujian akhir SMP."}</p>
      </div>
      <div class="tabs" role="group" aria-label="Filter semester">
        ${semTabs(sem, g, typeof sid === "string" ? sid : null)}
      </div>
      ${window.UAS && UAS[g] ? `<div class="uasbox">
        ${burst({ seed: 9, size: 96, cls: "spin", style: "right:-24px;top:-30px" })}
        <span class="mono">Post test dari kisi-kisi guru</span>
        <h2 class="cond">Simulasi UAS</h2>
        <p>Soalnya disusun dari kisi-kisi UAS yang dikasih guru, urut sesuai nomornya. Kerjakan seperti ujian beneran, nilai dan pembahasan muncul di akhir.</p>
        <div class="uasgrid">${uasCards(g)}</div>
      </div>` : ""}
      ${uasSem ? `<div class="callout"><p><b>UAS semester 1 udah dekat.</b> Tes campuran ambil 20 soal acak dari semua mapel bab S1. Kerjakan beberapa kali, soalnya beda-beda.</p><a class="pill lemon" href="#/tes/${g}/semua/uas1">Tes campuran UAS</a></div>` : `<div class="callout"><p><b>Tes campuran:</b> 20 soal acak dari semua mapel kelas ${g}. Cocok buat pemanasan sebelum ujian.</p><a class="pill lemon" href="#/tes/${g}/semua/campur">Mulai tes campuran</a></div>`}
      <div class="subjects">${cards}</div>
    </section>`;
  }

  // filter semester disimpan per sesi
  function sessionStorageGet(k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } }
  function sessionStorageSet(k, v) { try { sessionStorage.setItem(k, v); } catch (e) {} }
  // tab semester dengan jumlah bab, biar kelihatan kalau filter sedang aktif
  function semTabs(sem, g, sid) {
    const subs = sid ? [sid] : SUBJECTS.map((s) => s.id);
    const count = (v) => subs.reduce((a, s) => a + chaptersOf(g, s).filter((c) => !v || c.s === v).length, 0);
    return [0, 1, 2].map((v) => `<button class="tab" data-sem="${v}" aria-pressed="${sem === v}">${v ? "Semester " + v : "Semua bab"} · ${count(v)}</button>`).join("");
  }
  // tanda "kerjakan ulang" disimpan di memori juga, jaga-jaga sessionStorage diblokir
  let freshMem = null;
  const sessGet = (k) => sessionStorageGet(k) || (k === "fresh" ? freshMem : null);
  const sessDel = (k) => { try { sessionStorage.removeItem(k); } catch (e) {} if (k === "fresh") freshMem = null; };
  function bindFresh(scope) {
    $$("[data-fresh]", scope).forEach((b) => b.addEventListener("click", () => {
      const hk = b.dataset.fresh;
      if ((DB.hist[hk] || DB.done[hk]) && !confirm("Kerjakan ulang? Hasil lama tetap disimpan sampai kamu menyelesaikan yang baru.")) return;
      sessionStorageSet("fresh", hk); freshMem = hk;
      const go = b.dataset.go;
      if (go && location.hash !== go) location.hash = go; else route(true);
    }));
  }

  /* ---------------- HALAMAN MAPEL ---------------- */
  function Subject(g, sid) {
    const s = subj(sid); if (!s) return NotFound();
    const sem = Number(sessionStorageGet("sem") || 0);
    const all = chaptersOf(g, sid);
    const ch = all.filter((c) => !sem || c.s === sem);
    const pre = DB.tests[`${g}.${sid}.pre`], post = DB.tests[`${g}.${sid}.post`];
    const items = ch.map((c) => {
      const i = all.indexOf(c) + 1;
      const d = DB.done[`${g}.${sid}.${c.id}`];
      return `<li><a class="chap" href="#/kelas/${g}/${sid}/${c.id}">
        <span class="no">${String(i).padStart(2, "0")}</span>
        <span><div class="tt">${esc(c.t)}</div><div class="sm">Semester ${c.s} · ${c.q.length} soal latihan</div></span>
        ${d ? `<span class="chip done">Selesai · ${d.score}</span>`
          : DB.draft[`L.${g}.${sid}.${c.id}`] ? `<span class="chip s">Latihan belum selesai</span>`
          : DB.read[`${g}.${sid}.${c.id}`] ? `<span class="chip read">Sudah dibaca</span>`
          : `<span class="chip ${c.s === 1 && g === 7 ? "s" : ""}">S${c.s}</span>`}
      </a></li>`;
    }).join("");
    const delta = pre && post ? post.score - pre.score : null;
    return `
    <section class="panel">
      <div class="crumbs mono"><a href="#/">Beranda</a><span>/</span><a href="#/kelas/${g}">Kelas ${g}</a><span>/</span><span>${esc(s.name)}</span></div>
      <div class="pagehead"><h1>${esc(s.name)}</h1><p class="side mono">${s.full ? esc(s.full) + "<br>" : ""}Kelas ${g} · ${all.length} bab</p></div>
      <div class="tabs" role="group" aria-label="Filter semester">
        ${semTabs(sem, g, typeof sid === "string" ? sid : null)}
      </div>
      <div class="layout">
        <ol class="chapters">${items || `<li class="mono">Belum ada bab untuk semester ini.</li>`}</ol>
        <aside>
          <div class="testcard tc-pre">
            ${burst({ seed: 5, size: 90, cls: "spin", style: "right:-28px;top:-28px" })}
            <span class="mono">Langkah 1</span><h3>Pretest</h3>
            <p>10 soal sebelum belajar. Salah itu wajar, tujuannya buat tahu bab mana yang perlu dibaca.</p>
            ${pre ? `<div class="score-big">${pre.score}</div><p class="mono">${pre.right}/${pre.total} benar · ${fmtDate(pre.at)}</p>` : ""}
            ${testButtons(g, sid, "pre", pre, "pretest")}
          </div>
          <div class="testcard tc-post">
            <span class="mono">Langkah 3</span><h3>Posttest</h3>
            <p>10 soal setelah semua bab dibaca. Bandingkan dengan nilai pretest.</p>
            ${post ? `<div class="score-big">${post.score} ${delta !== null ? `<span class="delta ${delta < 0 ? "neg" : ""}">${delta >= 0 ? "+" : ""}${delta} dari pretest</span>` : ""}</div><p class="mono">${post.right}/${post.total} benar · ${fmtDate(post.at)}</p>` : ""}
            ${testButtons(g, sid, "post", post, "posttest")}
          </div>
          ${uasOf(g, sid) ? `<div class="tc-uas">${uasCards(g, sid)}</div>` : ""}
          <p class="mono tc-note">Langkah 2: baca tiap bab dan kerjakan latihannya.</p>
        </aside>
      </div>
    </section>`;
  }

  // tombol tes: kalau sudah pernah, buka hasil tersimpan + opsi kerjakan ulang
  function testButtons(g, sid, kind, rec, label) {
    const go = `#/tes/${g}/${sid}/${kind}`, hk = `T.${g}.${sid}.${kind}`;
    if (DB.draft[hk]) return `<a class="pill lemon" href="${go}">Lanjutkan ${label}</a>`;
    if (!rec) return `<a class="pill" href="${go}">Mulai ${label}</a>`;
    return `<span class="btnrow"><a class="pill" href="${go}">Lihat hasil</a><button class="pill light" data-fresh="${hk}" data-go="${go}">Kerjakan ulang</button></span>`;
  }

  /* ---------------- HALAMAN MATERI ---------------- */
  function Lesson(g, sid, cid) {
    const s = subj(sid); const all = chaptersOf(g, sid);
    const idx = all.findIndex((c) => c.id === cid); if (idx < 0) return NotFound();
    const c = all[idx]; const next = all[idx + 1];
    const toc = all.map((x, i) => `<li><a href="#/kelas/${g}/${sid}/${x.id}" class="${i === idx ? "cur" : ""}">${esc(x.t)}</a></li>`).join("");
    return `
    <section class="panel">
      <div class="crumbs mono"><a href="#/kelas/${g}">Kelas ${g}</a><span>/</span><a href="#/kelas/${g}/${sid}">${esc(s.name)}</a><span>/</span><span>Bab ${idx + 1}</span></div>
      <div class="pagehead"><h1>${esc(c.t)}</h1><p class="side mono">Semester ${c.s} · Bab ${idx + 1} dari ${all.length}</p></div>
    </section>
    <section class="panel paper">
      <div class="lesson">
        <article class="read">
          <h2>Intinya</h2>
          ${c.sum.split("\n").map((p) => `<p>${p}</p>`).join("")}
          <h2>Poin penting</h2>
          <ul>${c.pts.map((p) => `<li>${p}</li>`).join("")}</ul>
          ${c.ex ? `<h2>Contoh</h2><div class="example"><span class="mono">Coba dulu sebelum lihat jawaban</span><div>${c.ex.q}</div>
            <button class="pill light reveal-btn" data-reveal>Lihat jawaban</button><div class="ans" hidden>${c.ex.a}</div></div>` : ""}
          ${c.ex2 ? `<div class="example"><span class="mono">Contoh lain</span><div>${c.ex2.q}</div>
            <button class="pill light reveal-btn" data-reveal>Lihat jawaban</button><div class="ans" hidden>${c.ex2.a}</div></div>` : ""}
          ${c.tip ? `<div class="tip"><span class="mono">Tips</span><br>${c.tip}</div>` : ""}
          <h2>Latihan</h2>
          ${latihanBlock(g, sid, c)}
          ${next ? `<p style="margin-top:20px" class="mono">Berikutnya: <a href="#/kelas/${g}/${sid}/${next.id}">${esc(next.t)}</a></p>` : `<p style="margin-top:20px" class="mono">Bab terakhir. Lanjut ke <a href="#/tes/${g}/${sid}/post">posttest</a>.</p>`}
        </article>
        <aside class="toc"><div class="box"><span class="mono" style="color:var(--sky)">Daftar bab</span><ol>${toc}</ol></div></aside>
      </div>
    </section>`;
  }

  function latihanBlock(g, sid, c) {
    const go = `#/latihan/${g}/${sid}/${c.id}`, hk = `L.${g}.${sid}.${c.id}`;
    const d = DB.done[`${g}.${sid}.${c.id}`];
    if (DB.draft[hk]) return `<p>Latihan ini belum selesai. Jawabanmu sudah tersimpan, tinggal lanjut.</p>
      <a class="bigbar" href="${go}"><span class="arr r"></span>Lanjutkan latihan<span class="arr l"></span></a>`;
    if (d) return `<div class="savedbox"><span class="mono">Sudah dikerjakan · ${fmtDate(d.at)}</span>
      <div class="score-big">${d.score}</div><p style="margin:2px 0 12px">${d.right} dari ${d.total} benar. Jawaban dan pembahasannya tersimpan, jadi kamu bisa review tanpa mengulang.</p>
      <span class="btnrow"><a class="pill" href="${go}">Review jawaban</a><button class="pill light" data-fresh="${hk}" data-go="${go}">Kerjakan ulang</button></span></div>`;
    return `<p>${c.q.length} soal. Langsung ada pembahasan tiap kamu jawab.</p>
      <a class="bigbar" href="${go}"><span class="arr r"></span>Kerjakan latihan<span class="arr l"></span></a>`;
  }

  /* ---------------- KUIS ---------------- */
  // q mentah: [soal, [opsi...], indexBenar, pembahasan]
  function prep(raw, meta) {
    const opts = raw[1].map((t, i) => ({ t, ok: i === raw[2] }));
    return { text: raw[0], opts: shuffle(opts), why: raw[3] || "", meta };
  }

  function poolFor(g, sid, semFilter) {
    const out = [];
    const subs = sid === "semua" ? SUBJECTS.map((s) => s.id) : [sid];
    subs.forEach((s) => chaptersOf(g, s).forEach((c) => {
      if (semFilter && c.s !== semFilter) return;
      c.q.forEach((q, i) => out.push({ raw: q, key: `${s}.${c.id}.${i}`, sid: s, ch: c.t }));
    }));
    return out;
  }

  function QuizPage(mode, g, sid, extra) {
    const s = sid === "semua" ? { name: "Semua mapel" } : subj(sid);
    if (!s) return NotFound();
    let title, back, storeKey, instant, hk, build;
    if (mode === "latihan") {
      const c = chaptersOf(g, sid).find((x) => x.id === extra); if (!c) return NotFound();
      title = "Latihan: " + c.t; instant = true; hk = `L.${g}.${sid}.${c.id}`;
      storeKey = { type: "done", key: `${g}.${sid}.${c.id}` };
      build = () => shuffle(c.q).map((q) => prep(q, { sid, ch: c.t }));
      back = `#/kelas/${g}/${sid}/${c.id}`;
    } else if (mode === "uas") {
      const U = uasOf(g, sid); if (!U) return NotFound();
      title = U.title; instant = false; hk = `U.${g}.${sid}`;
      storeKey = { type: "test", key: `${g}.${sid}.uas`, keys: [] };
      back = `#/kelas/${g}/${sid}`;
      // urutan soal tetap sesuai nomor kisi-kisi, hanya opsi yang diacak
      build = () => U.q.map((x, i) => prep([x[1], x[2], x[3], x[4]], { sid, ch: `No. ${i + 1} · ${x[0]}`, topic: x[0] }));
    } else {
      const kind = extra;
      if (!["pre", "post", "uas1", "campur"].includes(kind)) return NotFound();
      hk = `T.${g}.${sid}.${kind}`;
      title = { pre: "Pretest", post: "Posttest", uas1: "Tes campuran UAS S1", campur: "Tes campuran" }[kind];
      instant = false; storeKey = { type: "test", key: `${g}.${sid}.${kind}`, keys: [] };
      back = sid === "semua" ? `#/kelas/${g}` : `#/kelas/${g}/${sid}`;
      build = () => {
        let pool = shuffle(poolFor(g, sid, kind === "uas1" ? 1 : 0));
        if (kind === "post") {
          const used = (DB.tests[`${g}.${sid}.pre`] || {}).keys || [];
          pool = pool.filter((p) => !used.includes(p.key)).concat(pool.filter((p) => used.includes(p.key)));
        }
        return pool.slice(0, sid === "semua" ? 20 : 10).map((p) => prep(p.raw, { sid: p.sid, ch: p.ch, key: p.key }));
      };
    }
    const o = { instant, storeKey, back, g, sid, hk, title, uas: mode === "uas" };

    // kerjakan ulang: tombol menaruh tanda "fresh" sebelum pindah halaman
    const fresh = sessGet("fresh") === hk;
    if (fresh) { sessDel("fresh"); delete DB.draft[hk]; save(); }
    const draft = DB.draft[hk];
    const hist = DB.hist[hk];
    let mount, sub;
    if (!fresh && draft && Array.isArray(draft.qs) && draft.qs.length) {
      mount = () => runQuiz($("#quiz"), draft.qs, o, draft.ans, draft.i);
      sub = "Lanjut dari soal terakhir yang kamu kerjakan";
    } else if (!fresh && hist && Array.isArray(hist.items)) {
      mount = () => showResult($("#quiz"), hist, o, false);
      sub = "Hasil tersimpan · " + fmtDate(hist.at);
    } else {
      const qs = build();
      if (!qs.length) return NotFound();
      DB.draft[hk] = { qs, ans: new Array(qs.length).fill(-1), i: 0, at: Date.now() }; save();
      mount = () => runQuiz($("#quiz"), qs, o);
      sub = instant ? "Pembahasan muncul tiap kamu jawab" : "Nilai dan pembahasan muncul di akhir";
    }
    setTimeout(mount, 0);
    return `
    <section class="panel">
      <div class="crumbs mono"><a href="#/kelas/${g}">Kelas ${g}</a><span>/</span>${sid !== "semua" ? `<a href="#/kelas/${g}/${sid}">${esc(s.name)}</a><span>/</span>` : ""}<span>${esc(title)}</span></div>
      <div class="pagehead"><h1>${esc(title)}</h1><p class="side mono">${esc(s.name)} · Kelas ${g}<br>${sub}</p></div>
    </section>
    <section class="panel ice"><div class="quiz" id="quiz"></div></section>
    ${o.uas ? essaySection(uasOf(g, sid)) : ""}`;
  }

  function uasOf(g, sid) { return (window.UAS && UAS[g] && UAS[g][sid]) || null; }

  // latihan esai: soal + contoh jawaban yang bisa dibuka-tutup
  function essaySection(U) {
    if (!U || !U.essays || !U.essays.length) return "";
    return `<section class="panel paper"><div class="read" style="max-width:760px;margin:0 auto">
      <h2>Latihan esai</h2>
      <p>Materi sujud syukur dan sujud sahwi keluar sebagai soal esai. Jawab dulu di kertas atau dalam hati, baru buka contoh jawabannya.</p>
      ${U.essays.map((e, i) => `<div class="example"><span class="mono">Esai ${i + 1}</span><div><b>${e.q}</b></div>
        <button type="button" class="pill light reveal-btn" data-reveal>Lihat contoh jawaban</button><div class="ans" hidden>${e.a}</div></div>`).join("")}
    </div></section>`;
  }

  function uasCards(g, only) {
    if (!window.UAS || !UAS[g]) return "";
    return Object.keys(UAS[g]).filter((sid) => !only || sid === only).map((sid) => {
      const U = UAS[g][sid], s = subj(sid), hk = `U.${g}.${sid}`, go = `#/uas/${g}/${sid}`;
      const rec = DB.tests[`${g}.${sid}.uas`];
      const btn = DB.draft[hk] ? `<a class="pill lemon" href="${go}">Lanjutkan</a>`
        : rec ? `<span class="btnrow"><a class="pill" href="${go}">Lihat hasil</a><button type="button" class="pill light" data-fresh="${hk}" data-go="${go}">Kerjakan ulang</button></span>`
        : `<a class="pill" href="${go}">Mulai simulasi</a>`;
      return `<div class="testcard uascard"><span class="mono">Kisi-kisi guru · ${U.q.length} soal${U.essays ? " + esai" : ""}</span>
        <h3>${esc(s.name)}</h3>
        ${rec ? `<div class="score-big">${rec.score}</div><p class="mono">${rec.right}/${rec.total} benar · ${fmtDate(rec.at)}</p>` : `<p>${esc(U.note)}</p>`}
        ${btn}</div>`;
    }).join("");
  }

  function runQuiz(root, qs, o, savedAns, savedI) {
    if (!root) return;
    const ans = Array.isArray(savedAns) && savedAns.length === qs.length ? savedAns.slice() : new Array(qs.length).fill(-1);
    let i = Math.min(Math.max(savedI | 0, 0), qs.length - 1);
    let busy = false, navOpen = false;
    const L = "ABCDE";
    const keep = () => { DB.draft[o.hk] = { qs, ans, i, at: Date.now() }; save(); };
    const toTop = () => {
      const r = root.getBoundingClientRect();
      if (r.top < 0 || r.top > window.innerHeight * 0.5) root.scrollIntoView({ behavior: REDUCED ? "auto" : "smooth", block: "start" });
    };

    function draw() {
      const q = qs[i]; const a = ans[i]; const locked = o.instant && a >= 0;
      const answered = ans.filter((x) => x >= 0).length;
      root.innerHTML = `
        <div class="qhead mono"><span>Soal ${i + 1} / ${qs.length}</span><span class="qch">${o.sid === "semua" ? esc(subj(q.meta.sid).name) + " · " : ""}${esc(q.meta.ch)}</span></div>
        <div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="${qs.length}" aria-valuenow="${answered}"><i style="width:${(answered / qs.length) * 100}%"></i></div>
        ${qs.length > 15 ? `<details class="qgrid" ${navOpen ? "open" : ""}><summary class="mono">Daftar soal · ${answered}/${qs.length} terjawab</summary>
          <div class="qgrid-in">${qs.map((_, k) => `<button type="button" data-jump="${k}" class="${ans[k] >= 0 ? "done" : ""}${k === i ? " cur" : ""}" aria-label="Soal ${k + 1}${ans[k] >= 0 ? ", sudah dijawab" : ""}">${k + 1}</button>`).join("")}</div></details>` : ""}
        <div class="qcard">
          <div class="qtext">${q.text}</div>
          <div class="opts">${q.opts.map((op, k) => {
            let c = "";
            if (locked) c = op.ok ? "right" : k === a ? "wrong" : "";
            else if (k === a) c = "picked";
            return `<button type="button" class="opt ${c}" data-k="${k}" ${locked ? "disabled" : ""}><span class="k">${L[k]}</span><span>${op.t}</span></button>`;
          }).join("")}</div>
          ${locked ? `<div class="explain"><span class="mono">${q.opts[a].ok ? "Benar" : "Belum tepat. Jawabannya: " + q.opts.find((x) => x.ok).t}</span>${q.why ? "<br>" + q.why : ""}</div>` : ""}
          <div class="qnav">
            <button type="button" class="pill light" data-prev ${i === 0 ? "disabled" : ""}>Sebelumnya</button>
            <button type="button" class="pill" data-next ${a < 0 ? "disabled" : ""}>${i === qs.length - 1 ? "Selesai" : "Lanjut"}</button>
          </div>
          <p class="mono saved-note">Jawaban tersimpan otomatis. Boleh tutup dan lanjut nanti.</p>
        </div>`;
      $$(".opt", root).forEach((b) => b.addEventListener("click", (e) => {
        if (busy) return;
        ans[i] = Number(b.dataset.k); keep();
        if (o.instant && qs[i].opts[ans[i]].ok) spark(e.clientX, e.clientY, true);
        draw();
        if (!o.instant && i < qs.length - 1) {
          busy = true;
          setTimeout(() => { busy = false; i++; keep(); draw(); toTop(); }, 280);
        }
      }));
      const grid = $(".qgrid", root);
      if (grid) {
        grid.addEventListener("toggle", () => { navOpen = grid.open; });
        $$("[data-jump]", grid).forEach((b) => b.addEventListener("click", () => { if (busy) return; i = Number(b.dataset.jump); keep(); draw(); toTop(); }));
      }
      $("[data-prev]", root).addEventListener("click", () => { if (busy || i === 0) return; i--; keep(); draw(); toTop(); });
      $("[data-next]", root).addEventListener("click", () => {
        if (busy || ans[i] < 0) return;
        if (i < qs.length - 1) { i++; keep(); draw(); toTop(); return; }
        const empty = ans.findIndex((x) => x < 0);
        if (empty >= 0) { i = empty; keep(); draw(); toTop(); return; }
        finish();
      });
    }

    function finish() {
      const right = qs.filter((q, k) => q.opts[ans[k]] && q.opts[ans[k]].ok).length;
      const score = Math.round((right / qs.length) * 100);
      const rec = { score, right, total: qs.length, at: Date.now() };
      let prev = null;
      if (o.storeKey.type === "done") {
        prev = DB.done[o.storeKey.key];
        if (!prev || score >= prev.score) DB.done[o.storeKey.key] = rec;
      } else {
        prev = DB.tests[o.storeKey.key];
        DB.tests[o.storeKey.key] = Object.assign({}, rec, { keys: qs.map((q) => q.meta.key).filter(Boolean) });
      }
      const hist = Object.assign({}, rec, {
        prev: prev ? prev.score : null,
        items: qs.map((q, k) => {
          const pick = q.opts[ans[k]], good = q.opts.find((x) => x.ok);
          return { t: q.text, ch: q.meta.ch, sid: q.meta.sid, pick: pick ? pick.t : "", right: good.t, ok: !!(pick && pick.ok), why: q.why };
        })
      });
      DB.hist[o.hk] = hist;
      delete DB.draft[o.hk];
      save();
      showResult(root, hist, o, true);
    }
    draw();
  }

  function showResult(root, h, o, justNow) {
    if (!root) return;
    const pre = DB.tests[`${o.g}.${o.sid}.pre`];
    const isPost = o.hk.endsWith(".post");
    const C = 2 * Math.PI * 86;
    const sc = h.score;
    const msg = sc >= 90 ? "Mantap. Hampir sempurna." : sc >= 75 ? "Bagus. Tinggal rapikan yang salah." : sc >= 50 ? "Lumayan. Baca lagi bab yang soalnya salah." : "Santai, ini buat latihan. Baca materinya lalu coba lagi.";
    const best = o.storeKey.type === "done" ? DB.done[o.storeKey.key] : null;
    const wrong = h.items.filter((x) => !x.ok).length;
    root.innerHTML = `
      <div class="result qcard">
        <span class="mono">${justNow ? "Hasil · tersimpan" : "Hasil tersimpan · " + fmtDate(h.at)}</span>
        <div class="ring"><svg width="200" height="200" viewBox="0 0 200 200"><circle class="bg" cx="100" cy="100" r="86"/><circle class="fg" cx="100" cy="100" r="86" stroke-dasharray="${C}" stroke-dashoffset="${C}"/></svg><b>${sc}</b></div>
        <p class="cond" style="font-size:clamp(24px,6vw,30px);margin:4px 0">${msg}</p>
        <p class="mono">${h.right} dari ${h.total} benar${isPost && pre ? ` · pretest ${pre.score} → posttest ${sc}` : ""}${!isPost && h.prev !== null && h.prev !== undefined ? ` · sebelumnya ${h.prev}` : ""}${best && best.score > sc ? ` · nilai terbaik ${best.score}` : ""}</p>
        <div class="btnrow center" style="margin-top:14px">
          <button type="button" class="pill" data-fresh="${o.hk}">Kerjakan ulang</button>
          <a class="pill light" href="${o.back}">Kembali</a>
          ${wrong ? `<button type="button" class="pill light" data-only-wrong>Lihat yang salah (${wrong})</button>` : ""}
        </div>
        ${o.uas && wrong ? `<div class="savedbox" style="text-align:left;margin-top:20px"><span class="mono">Topik kisi-kisi yang perlu diulang</span>
          <ul class="topics">${[...new Set(h.items.filter((x) => !x.ok).map((x) => x.ch.replace(/^No\. \d+ · /, "")))].map((t) => `<li>${esc(t)}</li>`).join("")}</ul></div>` : ""}
        <div class="review">${h.items.map((x, k) => `
          <div class="it ${x.ok ? "ok" : "no"}"><span class="mono">${k + 1}. ${x.ok ? "Benar" : "Salah"} · ${esc(x.ch)}</span>
            <p><b>${x.t}</b></p>
            ${x.ok ? "" : `<p>Jawabanmu: ${x.pick || "–"}</p>`}<p>Jawaban benar: <b>${x.right}</b></p>${x.why ? `<p style="color:var(--ink-soft)">${x.why}</p>` : ""}</div>`).join("")}</div>
      </div>`;
    requestAnimationFrame(() => setTimeout(() => { const fg = $(".fg", root); if (fg) fg.style.strokeDashoffset = C * (1 - sc / 100); }, 80));
    bindFresh(root);
    const ow = $("[data-only-wrong]", root);
    if (ow) ow.addEventListener("click", () => {
      const on = root.classList.toggle("only-wrong");
      ow.textContent = on ? "Tampilkan semua" : `Lihat yang salah (${wrong})`;
    });
    if (justNow) {
      if (sc >= 75) confetti();
      root.scrollIntoView({ behavior: REDUCED ? "auto" : "smooth", block: "start" });
    }
  }

  /* ---------------- JADWAL ---------------- */
  function Jadwal() {
    const today = new Date().getDay();
    const days = [1, 2, 3, 4, 5].map((d) => `
      <div class="blob" style="${d === today ? "background:var(--ink)" : "background:var(--paper);color:var(--ink);border:1.5px solid var(--ink)"};min-height:0;border-radius:24px;animation:none">
        <p class="cond" style="font-size:32px;margin:0 0 6px">${HARI[d]}${d === today ? ' <span class="stamp" style="font-size:11px">hari ini</span>' : ""}</p>
        ${JADWAL[d].map(([t, n, sid], i) => sid
          ? `<a class="slot" href="#/kelas/7/${sid}"><span class="t" style="${d === today ? "" : "color:var(--sky-deep)"}">${t || String(i + 1).padStart(2, "0")}</span><span class="n" style="font-size:20px">${esc(n)}</span></a>`
          : `<div class="slot off"><span class="t">${t || String(i + 1).padStart(2, "0")}</span><span class="n" style="font-size:20px">${esc(n)}</span></div>`).join("")}
      </div>`).join("");
    return `
    <section class="panel">
      <div class="crumbs mono"><a href="#/">Beranda</a><span>/</span><span>Jadwal</span></div>
      <div class="pagehead"><h1>Jadwal 7F</h1><p class="side mono">${JADWAL_LABEL}<br>Klik mapel untuk buka materinya</p></div>
      <div class="subjects" style="grid-template-columns:repeat(auto-fill,minmax(260px,1fr))">${days}</div>
    </section>`;
  }

  /* ---------------- RAPOR ---------------- */
  function Rapor() {
    const rows = [];
    [7, 8, 9].forEach((g) => SUBJECTS.forEach((s) => {
      const pre = DB.tests[`${g}.${s.id}.pre`], post = DB.tests[`${g}.${s.id}.post`];
      const p = subjectProgress(g, s.id);
      if (!pre && !post && !p) return;
      const d = pre && post ? post.score - pre.score : null;
      rows.push(`<tr><td>${g}</td><td><a href="#/kelas/${g}/${s.id}">${esc(s.name)}</a></td><td>${p}%</td><td>${pre ? pre.score : "–"}</td><td>${post ? post.score : "–"}</td><td>${d === null ? "–" : `<span class="delta ${d < 0 ? "neg" : ""}">${d >= 0 ? "+" : ""}${d}</span>`}</td></tr>`);
    }));
    const uasRows = Object.entries(DB.tests).filter(([k]) => k.endsWith(".uas")).map(([k, v]) => { const [g, sid] = k.split("."); const s = subj(sid); return `<tr><td>${g}</td><td><a href="#/uas/${g}/${sid}">Simulasi UAS ${esc(s ? s.name : sid)}</a></td><td colspan="4">${v.score} (${v.right}/${v.total}) · ${fmtDate(v.at)}</td></tr>`; }).join("");
    const mixed = uasRows + Object.entries(DB.tests).filter(([k]) => k.includes(".semua.")).map(([k, v]) => `<tr><td>${k.split(".")[0]}</td><td>${k.endsWith("uas1") ? "Tes campuran UAS S1" : "Tes campuran"}</td><td colspan="4">${v.score} (${v.right}/${v.total})</td></tr>`).join("");
    return `
    <section class="panel">
      <div class="crumbs mono"><a href="#/">Beranda</a><span>/</span><span>Rapor</span></div>
      <div class="pagehead"><h1>Rapor Theo</h1><p class="side">Progres bab, nilai pretest, dan nilai posttest tiap mapel. Data tersimpan di browser ini saja.</p></div>
      <div class="table-wrap" style="margin-top:26px">
        ${rows.length || mixed ? `<table class="table"><thead><tr><th>Kelas</th><th>Mapel</th><th>Bab selesai</th><th>Pretest</th><th>Posttest</th><th>Naik</th></tr></thead><tbody>${rows.join("")}${mixed}</tbody></table>`
          : `<div class="callout"><p><b>Rapor masih kosong.</b> Kerjakan pretest salah satu mapel dulu.</p><a class="pill lemon" href="#/kelas/7">Ke kelas 7</a></div>`}
      </div>
      <div class="savedbox" style="margin-top:26px">
        <span class="mono">Penyimpanan</span>
        <p style="margin:6px 0 4px">Semua yang dikerjakan tersimpan otomatis di HP ini: ${Object.keys(DB.read).length} bab dibaca, ${Object.keys(DB.done).length} latihan selesai, ${Object.keys(DB.tests).length} tes.${saveFailed ? " <b style='color:var(--bad)'>Penyimpanan penuh atau diblokir browser.</b>" : ""}</p>
        <p style="margin:0 0 12px;font-size:16px;color:var(--ink-soft)">Data hilang kalau riwayat browser dihapus atau ganti HP. Simpan cadangan sesekali, lalu pulihkan di HP baru.</p>
        <span class="btnrow">
          <button type="button" class="pill" data-export>Simpan cadangan</button>
          <label class="pill light" for="importFile" style="cursor:pointer">Pulihkan cadangan</label>
          <input type="file" id="importFile" accept="application/json,.json" hidden>
          ${Object.keys(DB.read).length || Object.keys(DB.done).length || Object.keys(DB.tests).length ? `<button type="button" class="pill light" data-reset>Hapus semua progres</button>` : ""}
        </span>
      </div>
    </section>`;
  }

  function exportProgress() {
    try {
      const blob = new Blob([JSON.stringify({ app: "theo-belajar", v: 1, savedAt: Date.now(), data: DB })], { type: "application/json" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `progres-theo-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    } catch (e) { alert("Gagal membuat file cadangan."); }
  }
  function importProgress(e) {
    const f = e.target.files && e.target.files[0]; if (!f) return;
    const rd = new FileReader();
    rd.onload = () => {
      try {
        const j = JSON.parse(rd.result);
        if (!j || j.app !== "theo-belajar" || !j.data) throw new Error("bukan file cadangan");
        if (!confirm("Pulihkan progres dari file ini? Progres di HP ini akan digabung dengan isi file.")) return;
        ["done", "tests", "read", "hist"].forEach((k) => {
          const src = j.data[k] || {};
          Object.keys(src).forEach((key) => {
            const cur = DB[k][key], inc = src[key];
            if (!cur || (inc && inc.at && cur.at && inc.at > cur.at) || (k === "done" && inc.score > cur.score)) DB[k][key] = inc;
          });
        });
        save(); alert("Progres berhasil dipulihkan."); route();
      } catch (err) { alert("File tidak bisa dibaca. Pastikan itu file progres-theo-....json."); }
    };
    rd.readAsText(f);
  }

  function NotFound() {
    return `<section class="panel"><div class="pagehead"><h1>Halaman<br>nggak ada</h1></div><p><a class="pill" href="#/">Ke beranda</a></p></section>`;
  }

  /* ---------------- ROUTER ---------------- */
  function route(force) {
    const h = location.hash || "#/";
    const p = h.replace(/^#\/?/, "").split("/").filter(Boolean);
    let html;
    if (!p.length) html = Home();
    else if (p[0] === "kelas" && [7, 8, 9].includes(+p[1])) {
      const g = +p[1];
      if (p[3]) html = Lesson(g, p[2], p[3]);
      else if (p[2]) html = Subject(g, p[2]);
      else html = Grade(g);
    } else if (p[0] === "latihan") html = QuizPage("latihan", +p[1], p[2], p[3]);
    else if (p[0] === "tes") html = QuizPage("tes", +p[1], p[2], p[3]);
    else if (p[0] === "uas") html = QuizPage("uas", +p[1], p[2]);
    else if (p[0] === "jadwal") html = Jadwal();
    else if (p[0] === "rapor") html = Rapor();
    else html = NotFound();

    if (p[0] === "kelas" && p[3] && chaptersOf(+p[1], p[2]).some((c) => c.id === p[3])) {
      DB.last = h; DB.read[`${p[1]}.${p[2]}.${p[3]}`] = DB.read[`${p[1]}.${p[2]}.${p[3]}`] || Date.now(); save();
    }
    renderChrome(h);
    main.classList.remove("enter");
    main.innerHTML = html;
    void main.offsetWidth;
    main.classList.add("enter");
    if (!force || force === true) window.scrollTo({ top: 0, behavior: "auto" });
    afterRender();
  }

  function afterRender() {
    // bar progres animasi
    requestAnimationFrame(() => $$(".bar i").forEach((b) => (b.style.width = b.style.getPropertyValue("--w"))));
    // filter semester
    $$("[data-sem]").forEach((b) => b.addEventListener("click", () => { sessionStorageSet("sem", b.dataset.sem); route("keep"); }));
    $$("[data-scroll]").forEach((b) => b.addEventListener("click", () => document.getElementById(b.dataset.scroll).scrollIntoView({ behavior: REDUCED ? "auto" : "smooth" })));
    // jawaban contoh
    $$("[data-reveal]").forEach((b) => b.addEventListener("click", () => { b.nextElementSibling.hidden = false; b.remove(); }));
    // huruf THEO
    $$(".wordmark .letters span").forEach((s) => s.addEventListener("click", () => { s.classList.remove("boing"); void s.offsetWidth; s.classList.add("boing"); }));
    // reset rapor
    const r = $("[data-reset]"); if (r) r.addEventListener("click", () => { if (confirm("Hapus semua nilai dan progres? Ini tidak bisa dibatalkan.")) { DB = EMPTY(); save(); route(); } });
    bindFresh(main);
    // cadangan progres
    const ex = $("[data-export]"); if (ex) ex.addEventListener("click", exportProgress);
    const im = $("#importFile"); if (im) im.addEventListener("change", importProgress);
    // reveal saat scroll
    const els = $$(".rv");
    if ("IntersectionObserver" in window && !REDUCED) {
      const io = new IntersectionObserver((en) => en.forEach((x) => { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } }), { threshold: 0.15 });
      els.forEach((e) => io.observe(e));
    } else els.forEach((e) => e.classList.add("in"));
  }

  /* ---------------- EFEK KLIK ---------------- */
  const fx = $("#fx");
  function spark(x, y, light) {
    if (REDUCED) return;
    const s = document.createElement("div");
    s.className = "spark" + (light ? " light" : "");
    s.style.left = x + "px"; s.style.top = y + "px";
    for (let k = 0; k < 8; k++) { const i = document.createElement("i"); i.style.setProperty("--a", k * 45 + "deg"); s.appendChild(i); }
    fx.appendChild(s); setTimeout(() => s.remove(), 600);
  }
  document.addEventListener("pointerdown", (e) => {
    const t = e.target.closest("a, button");
    if (!t) return;
    const dark = t.closest(".ink, .pill:not(.light):not(.lemon), .bigbar, .callout, .blob, .foot");
    spark(e.clientX, e.clientY, !!dark);
  });
  function confetti() {
    if (REDUCED) return;
    const cols = ["#8ED1FC", "#FFE45C", "#0D1015", "#2E8FD6", "#ffffff"];
    for (let k = 0; k < 70; k++) {
      const c = document.createElement("i"); c.className = "confetti";
      c.style.left = Math.random() * 100 + "vw";
      c.style.background = cols[k % cols.length];
      c.style.animationDuration = 1.8 + Math.random() * 1.8 + "s";
      c.style.animationDelay = Math.random() * 0.4 + "s";
      c.style.borderRadius = k % 3 ? "2px" : "50%";
      fx.appendChild(c); setTimeout(() => c.remove(), 4200);
    }
  }

  window.addEventListener("hashchange", () => route());
  route();
})();
