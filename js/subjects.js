// Daftar mapel (dari jadwal 7F) + jadwal mingguan
window.MATERI = { 7: {}, 8: {}, 9: {} };

window.SUBJECTS = [
  { id: "mtk",     name: "Matematika",          code: "MTK", sym: "π" },
  { id: "ipa",     name: "IPA",                 code: "IPA", sym: "H₂O", full: "Ilmu Pengetahuan Alam" },
  { id: "ips",     name: "IPS",                 code: "IPS", sym: "⌖",  full: "Ilmu Pengetahuan Sosial" },
  { id: "indo",    name: "Bahasa Indonesia",    code: "BIN", sym: "Aa" },
  { id: "inggris", name: "Bahasa Inggris",      code: "BIG", sym: "Hi!" },
  { id: "ppkn",    name: "Pendidikan Pancasila", code: "PKN", sym: "★" },
  { id: "info",    name: "Informatika",         code: "TIK", sym: "</>" },
  { id: "pai",     name: "Pendidikan Agama Islam", code: "PAI", sym: "ق" },
  { id: "senbud",  name: "Seni Budaya",         code: "SBD", sym: "♪" },
  { id: "pjok",    name: "PJOK",                code: "OR",  sym: "◎", full: "Pendidikan Jasmani, Olahraga, dan Kesehatan" }
];

// Jadwal 7F semester 1 dan 2 (jadwal baru). Format: [jam, nama, id mapel]. Jam kosong = urutan saja.
window.JADWAL_LABEL = "Semester 1 dan 2";
window.JADWAL = {
  1: [ ["", "PJOK", "pjok"], ["", "Seni Budaya", "senbud"], ["", "BK", null], ["", "Bahasa Indonesia", "indo"] ],
  2: [ ["", "IPA", "ipa"], ["", "TIK", "info"], ["", "PAI", "pai"] ],
  3: [ ["", "Bahasa Inggris", "inggris"], ["", "Bahasa Indonesia", "indo"], ["", "Matematika", "mtk"], ["", "IPS", "ips"], ["", "PKN", "ppkn"] ],
  4: [ ["", "IPA", "ipa"], ["", "Matematika", "mtk"], ["", "Bahasa Indonesia", "indo"], ["", "IPS", "ips"] ],
  5: [ ["", "PKN", "ppkn"], ["", "Bahasa Inggris", "inggris"] ]
};

// Tambahan materi. Dipanggil dari file data tambahan (g7c.js, dst).
//   add:   bab baru (objek bab lengkap, boleh pakai `after: "id-bab"` untuk menentukan posisi)
//   more:  { idBab: { pts: [...], q: [...], ex2: {q, a}, s: 1 } } untuk menambah isi bab yang sudah ada
//   order: daftar id bab untuk mengatur urutan akhir (opsional)
window.EXT = function (g, sid, o) {
  const list = (MATERI[g][sid] = MATERI[g][sid] || []);
  const byId = (id) => list.find((c) => c.id === id);
  Object.entries(o.more || {}).forEach(([id, m]) => {
    const c = byId(id); if (!c) return;
    if (m.pts) c.pts = c.pts.concat(m.pts);
    if (m.q) c.q = c.q.concat(m.q);
    if (m.ex2) c.ex2 = m.ex2;
    if (m.s) c.s = m.s;
    if (m.sum2) c.sum = c.sum + "\n" + m.sum2;
  });
  (o.add || []).forEach((c) => {
    if (byId(c.id)) return;
    const at = c.after ? list.findIndex((x) => x.id === c.after) : -1;
    if (at >= 0) list.splice(at + 1, 0, c); else list.push(c);
  });
  if (o.order) list.sort((a, b) => {
    const ia = o.order.indexOf(a.id), ib = o.order.indexOf(b.id);
    return (ia < 0 ? 999 : ia) - (ib < 0 ? 999 : ib);
  });
};
window.HARI = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
