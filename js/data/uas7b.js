// SIMULASI UAS KELAS 7 (lanjutan) — Matematika dan Seni Budaya, dari kisi-kisi guru.
// Format soal: [topik kisi-kisi, soal, [opsi benar, ...opsi lain], indexBenar, pembahasan]
window.UAS = window.UAS || {};
UAS[7] = UAS[7] || {};

(function () {
  // tabel suhu kecil untuk soal no. 1
  const tabelSuhu = '<table class="qtab"><tr><th>Kota</th><th>Pukul 04.00</th><th>Pukul 13.00</th></tr><tr><td>Moskow</td><td>−8 °C</td><td>3 °C</td></tr><tr><td>Tokyo</td><td>4 °C</td><td>12 °C</td></tr><tr><td>London</td><td>−1 °C</td><td>9 °C</td></tr></table>';
  // persegi panjang 8 bagian, 3 diarsir, untuk soal no. 8
  let cells = "";
  for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++) {
    const on = r === 0 && c < 3;
    cells += `<rect x="${c * 50 + 1}" y="${r * 50 + 1}" width="48" height="48" fill="${on ? "#2E8FD6" : "#ffffff"}" stroke="#0D1015" stroke-width="2"/>`;
  }
  const gambarArsir = `<svg class="qimg" viewBox="0 0 202 102" width="202" height="102" role="img" aria-label="Persegi panjang dibagi 8 bagian sama besar, 3 bagian diarsir">${cells}</svg>`;
  // garis bilangan −5 sampai 5, untuk contoh jawaban esai no. 1
  let ticks = "";
  for (let n = -5; n <= 5; n++) {
    const x = 20 + (n + 5) * 30;
    ticks += `<line x1="${x}" y1="22" x2="${x}" y2="38" stroke="#0D1015" stroke-width="2"/><text x="${x}" y="56" text-anchor="middle" font-size="13" font-family="Space Mono, monospace" fill="#0D1015">${n < 0 ? "−" + -n : n}</text>`;
  }
  const garisBilangan = `<svg class="qimg" viewBox="0 0 340 64" width="340" height="64" role="img" aria-label="Garis bilangan dari −5 sampai 5"><line x1="4" y1="30" x2="336" y2="30" stroke="#0D1015" stroke-width="2"/><path d="M4 30l8-5v10zM336 30l-8-5v10z" fill="#0D1015"/>${ticks}</svg>`;

  UAS[7].mtk = {
    title: "Simulasi UAS Matematika",
    note: "30 soal pilihan ganda urut sesuai kisi-kisi guru, plus 5 latihan esai.",
    essayNote: "Kisi-kisi guru juga memuat 5 soal esai: garis bilangan, operasi bilangan bulat, pecahan, menyederhanakan aljabar, serta KPK dan FPB bentuk aljabar.",
    q: [
      ["Bilangan bulat · kenaikan suhu dari tabel", "Perhatikan tabel suhu berikut.\n" + tabelSuhu + "\nKenaikan suhu di Moskow dari pukul 04.00 ke pukul 13.00 adalah …", ["11 °C", "5 °C", "−11 °C", "−5 °C"], 0, "3 − (−8) = 3 + 8 = 11 °C."],
      ["Bilangan bulat · penjumlahan", "Hasil dari −15 + 8 + (−6) adalah …", ["−13", "−1", "13", "−29"], 0, "−15 + 8 = −7, lalu −7 + (−6) = −13."],
      ["Bilangan bulat · perkalian", "Hasil dari (−7) × 6 × (−2) adalah …", ["84", "−84", "26", "−26"], 0, "(−7) × 6 = −42, lalu −42 × (−2) = 84 (negatif kali negatif = positif)."],
      ["Bilangan bulat · mengurutkan", "Urutan bilangan 3, −5, 0, −2, 7 dari yang terkecil adalah …", ["−5, −2, 0, 3, 7", "−2, −5, 0, 3, 7", "0, −2, −5, 3, 7", "7, 3, 0, −2, −5"], 0, "Pada garis bilangan, −5 paling kiri lalu −2."],
      ["Bilangan bulat · operasi campuran", "Hasil dari 18 − 24 : (−4) × 2 adalah …", ["30", "6", "−30", "3"], 0, "Bagi dan kali dulu dari kiri: 24 : (−4) = −6, −6 × 2 = −12. Lalu 18 − (−12) = 30."],
      ["Bilangan bulat · masalah sehari-hari", "Theo punya tabungan Rp50.000. Ia mengambil Rp12.000 sebanyak 3 kali, lalu menabung lagi Rp20.000. Sisa tabungannya sekarang …", ["Rp34.000", "Rp26.000", "Rp58.000", "Rp14.000"], 0, "50.000 − 3 × 12.000 + 20.000 = 50.000 − 36.000 + 20.000 = 34.000."],
      ["Bilangan bulat · bilangan negatif", "Seorang penyelam berada 12 m di bawah permukaan laut. Ia turun lagi 7 m, lalu naik 5 m. Posisinya sekarang …", ["14 m di bawah permukaan laut", "10 m di bawah permukaan laut", "24 m di bawah permukaan laut", "14 m di atas permukaan laut"], 0, "−12 − 7 + 5 = −14."],
      ["Pecahan · daerah yang diarsir", "Pecahan yang menunjukkan daerah berwarna biru pada gambar adalah …\n" + gambarArsir, ["3/8", "3/5", "5/8", "3/4"], 0, "Ada 8 bagian sama besar, 3 bagian diarsir."],
      ["Pecahan · membandingkan", "Pernyataan yang benar adalah …", ["3/5 < 5/8", "3/5 > 5/8", "3/5 = 5/8", "3/5 dan 5/8 tidak bisa dibandingkan"], 0, "Samakan penyebut 40: 3/5 = 24/40, 5/8 = 25/40. Jadi 3/5 lebih kecil."],
      ["Pecahan · campuran ke biasa", "Bentuk pecahan biasa dari 3 2/5 adalah …", ["17/5", "15/5", "32/5", "6/5"], 0, "(3 × 5 + 2)/5 = 17/5."],
      ["Pecahan · penjumlahan", "Hasil dari 2/3 + 3/4 adalah …", ["1 5/12", "5/7", "5/12", "6/7"], 0, "8/12 + 9/12 = 17/12 = 1 5/12."],
      ["Pecahan · pengurangan", "Hasil dari 5/6 − 1/4 adalah …", ["7/12", "4/2", "1/3", "2/3"], 0, "10/12 − 3/12 = 7/12."],
      ["Pecahan · operasi campuran", "Hasil dari 1/2 + 2/3 × 3/4 adalah …", ["1", "7/8", "5/4", "2/3"], 0, "Kali dulu: 2/3 × 3/4 = 1/2. Lalu 1/2 + 1/2 = 1. (7/8 muncul kalau salah menjumlah duluan.)"],
      ["Pecahan · pengurangan sehari-hari", "Ibu punya 2 1/2 kg tepung. Sebanyak 1 3/4 kg dipakai untuk membuat kue. Sisa tepung ibu …", ["3/4 kg", "1 1/4 kg", "1 3/4 kg", "4 1/4 kg"], 0, "5/2 − 7/4 = 10/4 − 7/4 = 3/4 kg."],
      ["Pecahan · perkalian", "Hasil dari 4/5 × 15/16 adalah …", ["3/4", "19/21", "60/16", "4/3"], 0, "60/80 = 3/4."],
      ["Pecahan · masalah perkalian", "Kelas 7F berisi 36 siswa. Sebanyak 2/3 di antaranya ikut ekskul pramuka. Banyak siswa yang ikut pramuka …", ["24 siswa", "12 siswa", "18 siswa", "30 siswa"], 0, "2/3 × 36 = 24."],
      ["Pecahan · pembagian", "Hasil dari 5/6 : 10/9 adalah …", ["3/4", "50/54", "4/3", "25/27"], 0, "5/6 × 9/10 = 45/60 = 3/4."],
      ["Bentuk aljabar · variabel", "Variabel pada bentuk aljabar 4p − 3q + 7 adalah …", ["p dan q", "4 dan −3", "7", "4p dan −3q"], 0, "Variabel adalah huruf pengganti bilangan."],
      ["Bentuk aljabar · koefisien", "Koefisien y pada bentuk 5x² − 8y + 2 adalah …", ["−8", "8", "5", "2"], 0, "Koefisien ikut tandanya: −8."],
      ["Bentuk aljabar · konstanta", "Konstanta pada bentuk 3a + 2b − 9 adalah …", ["−9", "9", "3", "2"], 0, "Konstanta = suku tanpa variabel, beserta tandanya."],
      ["Bentuk aljabar · suku sejenis", "Pasangan suku sejenis adalah …", ["3x² dan −5x²", "3x² dan 3x", "2xy dan 2x", "4y dan 4y²"], 0, "Suku sejenis punya variabel dan pangkat yang sama."],
      ["Bentuk aljabar · banyak suku", "Banyak suku pada bentuk 6a² − 2ab + 5b − 4 adalah …", ["4", "3", "5", "2"], 0, "Suku: 6a², −2ab, 5b, −4."],
      ["Bentuk aljabar · menyederhanakan", "Bentuk sederhana dari 7m + 3n − 2m + 5n adalah …", ["5m + 8n", "9m + 8n", "5m − 2n", "13mn"], 0, "7m − 2m = 5m, 3n + 5n = 8n."],
      ["Bentuk aljabar · penjumlahan", "Hasil dari (4x + 3y) + (2x − 5y) adalah …", ["6x − 2y", "6x + 8y", "2x − 2y", "6x + 2y"], 0, "4x + 2x = 6x, 3y − 5y = −2y."],
      ["Bentuk aljabar · sifat distributif", "Hasil dari −3(2a − 5) adalah …", ["−6a + 15", "−6a − 15", "6a − 15", "−6a − 5"], 0, "−3 × 2a = −6a, −3 × (−5) = +15."],
      ["Bentuk aljabar · perkalian dua bentuk", "Hasil dari (2x + 3)(x − 4) adalah …", ["2x² − 5x − 12", "2x² + 5x − 12", "2x² − 11x − 12", "2x² − 5x + 12"], 0, "2x² − 8x + 3x − 12 = 2x² − 5x − 12."],
      ["Bentuk aljabar · menyederhanakan", "Bentuk sederhana dari 3(x + 2) + 2(x − 1) adalah …", ["5x + 4", "5x + 8", "5x + 1", "6x + 4"], 0, "3x + 6 + 2x − 2 = 5x + 4."],
      ["Bentuk aljabar · operasi", "Hasil dari 2x(3x − 1) + x² adalah …", ["7x² − 2x", "6x² − 2x", "7x² − x", "6x² + x²"], 0, "6x² − 2x + x² = 7x² − 2x."],
      ["Bentuk aljabar · pengurangan", "Hasil dari (9p − 4) − (3p + 2) adalah …", ["6p − 6", "6p − 2", "12p − 6", "6p + 6"], 0, "9p − 3p = 6p, −4 − 2 = −6. Tanda minus di depan kurung mengubah +2 jadi −2."],
      ["Bentuk aljabar · operasi pengurangan", "Hasil pengurangan 2a − 3b + c dari 5a + b − 2c adalah …", ["3a + 4b − 3c", "3a − 2b − c", "−3a − 4b + 3c", "7a − 2b − c"], 0, "“Kurangkan A dari B” berarti B − A: (5a + b − 2c) − (2a − 3b + c) = 3a + 4b − 3c."]
    ],
    essays: [
      { q: "Gambarlah garis bilangan dari −5 sampai 5 dengan benar!", a: "Tarik garis lurus dengan panah di kedua ujung. Beri jarak yang sama untuk tiap bilangan, letakkan 0 di tengah, bilangan negatif di kiri dan positif di kanan.<br>" + garisBilangan },
      { q: "Hitunglah: −8 + 15 − (−6) − 9", a: "−8 + 15 = 7<br>7 − (−6) = 7 + 6 = 13<br>13 − 9 = <b>4</b>" },
      { q: "Hitunglah: 2/3 + 5/6 − 1/4", a: "KPK 3, 6, 4 = 12.<br>8/12 + 10/12 − 3/12 = 15/12 = <b>1 1/4</b>" },
      { q: "Sederhanakan: 4x² + 3x − 2x² + 5 − 7x + 1", a: "Kelompokkan suku sejenis:<br>(4x² − 2x²) + (3x − 7x) + (5 + 1)<br>= <b>2x² − 4x + 6</b>" },
      { q: "Tentukan FPB dan KPK dari 12a²b dan 18ab³!", a: "Angka: 12 = 2² × 3, 18 = 2 × 3². FPB = 2 × 3 = 6, KPK = 2² × 3² = 36.<br>Variabel: FPB ambil pangkat terkecil (a dan b), KPK ambil pangkat terbesar (a² dan b³).<br>FPB = <b>6ab</b>, KPK = <b>36a²b³</b>" }
    ]
  };

  UAS[7].senbud = {
    title: "Simulasi UAS Seni Budaya",
    note: "30 soal dari 3 materi kisi-kisi: mendesain, menggambar, serta tipografi dan logo. Ada 3 latihan esai praktik.",
    essayNote: "Materi SBK banyak berupa praktik. Latihan ini membantu kamu menjelaskan langkah kerjanya.",
    q: [
      ["Mendesain", "Desain grafis adalah …", ["seni menyampaikan pesan lewat gambar, huruf, dan warna", "seni membuat patung dari tanah liat", "seni memainkan alat musik", "seni gerak tubuh yang berirama"], 0, "Desain grafis termasuk desain komunikasi visual."],
      ["Mendesain", "Berikut yang termasuk unsur desain adalah …", ["garis, bidang, warna, dan tekstur", "melodi, irama, dan harmoni", "wiraga, wirama, dan wirasa", "naskah, sutradara, dan pemain"], 0, "Unsur desain sama dengan unsur seni rupa."],
      ["Mendesain", "Prinsip desain yang membuat semua bagian karya terlihat menyatu disebut …", ["kesatuan (unity)", "irama", "kontras", "proporsi"], 0, "Unity: elemen-elemen terasa saling berhubungan."],
      ["Mendesain", "Bagian poster yang dibuat paling besar dan mencolok supaya dilihat pertama kali menerapkan prinsip …", ["penekanan (center of interest)", "kesatuan", "irama", "keseimbangan simetris"], 0, "Penekanan menarik mata ke bagian terpenting."],
      ["Mendesain", "Agar tulisan pada poster mudah dibaca, warna huruf dan latar sebaiknya …", ["kontras, misalnya hitam di atas kuning", "mirip, misalnya kuning di atas putih", "sama persis", "selalu abu-abu"], 0, "Kontras meningkatkan keterbacaan."],
      ["Mendesain", "Warna merah, jingga, dan kuning termasuk warna …", ["panas", "dingin", "netral", "pastel"], 0, "Memberi kesan hangat dan semangat."],
      ["Mendesain", "Ruang kosong di sekitar teks dan gambar dalam desain disebut …", ["white space", "tipografi", "kerning", "watermark"], 0, "White space membuat desain lega dan rapi."],
      ["Mendesain", "Desain yang bagian kiri dan kanannya berbeda tetapi tetap terasa seimbang disebut keseimbangan …", ["asimetris", "simetris", "radial", "sentral"], 0, "Asimetris."],
      ["Mendesain", "Komponen yang wajib ada pada poster adalah …", ["judul/pesan utama, gambar, dan informasi singkat", "daftar pustaka dan catatan kaki", "tabel nilai dan grafik", "naskah dialog"], 0, "Poster harus cepat dipahami."],
      ["Mendesain", "Urutan langkah mendesain yang tepat adalah …", ["menentukan tujuan – membuat sketsa – menyusun desain – mengevaluasi", "mengevaluasi – sketsa – tujuan – mencetak", "mencetak – sketsa – tujuan – evaluasi", "sketsa – mencetak – tujuan – evaluasi"], 0, "Tentukan tujuan dan sasaran dulu, baru sketsa."],
      ["Menggambar", "Langkah awal menggambar objek adalah …", ["membuat sketsa bentuk dasar", "mewarnai seluruh bidang", "memberi bayangan", "membingkai gambar"], 0, "Bentuk dasar: lingkaran, kotak, segitiga."],
      ["Menggambar", "Teknik memberi bayangan dengan garis sejajar atau menyilang disebut …", ["arsir", "dussel", "pointilis", "blok"], 0, "Arsir."],
      ["Menggambar", "Teknik menggambar dengan titik-titik disebut …", ["pointilis", "arsir", "dussel", "aquarel"], 0, "Pointilis."],
      ["Menggambar", "Garis khayal sejajar mata pengamat dalam gambar perspektif disebut …", ["garis horizon (cakrawala)", "garis kontur", "garis diagonal", "garis arsir"], 0, "Horizon = batas langit dan bumi di mata pengamat."],
      ["Menggambar", "Titik tempat garis-garis perspektif bertemu disebut …", ["titik hilang", "titik tengah", "titik api", "titik awal"], 0, "Vanishing point."],
      ["Menggambar", "Gambar jalan raya yang makin jauh makin menyempit ke satu titik memakai perspektif …", ["satu titik hilang", "dua titik hilang", "tiga titik hilang", "tanpa titik hilang"], 0, "Satu titik hilang di garis horizon."],
      ["Menggambar", "Perbandingan ukuran yang sesuai antarbagian gambar, misalnya kepala dan badan, disebut …", ["proporsi", "irama", "kontras", "tekstur"], 0, "Proporsi."],
      ["Menggambar", "Pensil yang paling cocok untuk membuat bayangan gelap adalah …", ["6B", "2H", "4H", "HB"], 0, "Makin besar angka B makin lunak dan gelap."],
      ["Menggambar", "Gambar yang dibuat untuk memperjelas isi cerita atau teks disebut gambar …", ["ilustrasi", "teknik", "denah", "potret diri"], 0, "Ilustrasi."],
      ["Menggambar", "Gambar sekelompok benda mati seperti vas, buah, dan botol disebut gambar …", ["bentuk (still life)", "pemandangan", "karikatur", "komik"], 0, "Gambar bentuk / alam benda."],
      ["Tipografi dan logo", "Tipografi adalah …", ["seni menata huruf agar mudah dibaca dan menarik", "seni membuat patung", "seni mencampur warna cat", "seni memotret"], 0, "Typography = seni dan teknik menata huruf."],
      ["Tipografi dan logo", "Huruf yang memiliki kait kecil di ujung batangnya disebut huruf …", ["serif", "sans serif", "script", "dekoratif"], 0, "Serif = berkait. Contoh: Times New Roman."],
      ["Tipografi dan logo", "Contoh jenis huruf sans serif adalah …", ["Arial", "Times New Roman", "Georgia", "Garamond"], 0, "Sans serif = tanpa kait."],
      ["Tipografi dan logo", "Huruf yang meniru tulisan tangan bersambung disebut huruf …", ["script", "serif", "sans serif", "monospace"], 0, "Script."],
      ["Tipografi dan logo", "Jarak antarhuruf dalam satu kata disebut …", ["kerning", "leading", "margin", "alignment"], 0, "Kerning."],
      ["Tipografi dan logo", "Jarak antarbaris tulisan disebut …", ["leading", "kerning", "tracking", "bleed"], 0, "Leading (spasi baris)."],
      ["Tipografi dan logo", "Logo adalah …", ["tanda gambar atau tulisan yang menjadi identitas suatu lembaga, produk, atau orang", "gambar pemandangan untuk hiasan", "tulisan panjang berisi sejarah perusahaan", "foto pemilik perusahaan"], 0, "Logo = identitas visual."],
      ["Tipografi dan logo", "Logo yang hanya berupa tulisan nama, seperti logo Google, disebut …", ["logotype (wordmark)", "logogram (simbol)", "maskot", "emblem"], 0, "Wordmark."],
      ["Tipografi dan logo", "Logo yang hanya berupa gambar atau simbol tanpa tulisan disebut …", ["logogram", "logotype", "lettermark", "slogan"], 0, "Contoh: logo apel tergigit."],
      ["Tipografi dan logo", "Ciri logo yang baik adalah …", ["sederhana, mudah diingat, dan unik", "rumit dan penuh detail", "memakai banyak jenis huruf", "mirip logo terkenal lain"], 0, "Logo harus mudah dikenali dan tetap jelas saat dikecilkan."]
    ],
    essays: [
      { q: "Jelaskan langkah-langkah membuat logo untuk kelas 7F!", a: "1) Tentukan identitas: kelas 7F itu seperti apa (kompak, ceria, berprestasi).<br>2) Cari ide dan kumpulkan referensi.<br>3) Buat beberapa sketsa kasar.<br>4) Pilih satu sketsa terbaik, rapikan bentuknya.<br>5) Pilih warna dan jenis huruf yang cocok.<br>6) Uji logo dalam ukuran kecil dan hitam-putih, lalu perbaiki." },
      { q: "Apa perbedaan huruf serif dan sans serif? Berikan masing-masing satu contoh dan kegunaannya!", a: "Serif punya kait kecil di ujung huruf, contohnya Times New Roman. Biasa dipakai di buku dan koran karena nyaman dibaca dalam paragraf panjang.<br>Sans serif tanpa kait, contohnya Arial. Biasa dipakai di layar HP, poster, dan papan petunjuk karena terlihat bersih dan jelas." },
      { q: "Jelaskan cara menggambar jalan raya dengan perspektif satu titik hilang!", a: "1) Tarik garis horizon mendatar.<br>2) Tentukan satu titik hilang di garis horizon.<br>3) Tarik dua garis tepi jalan dari bawah kertas menuju titik hilang.<br>4) Tambahkan benda seperti tiang atau pohon. Makin dekat ke titik hilang, gambar makin kecil.<br>5) Beri gelap-terang supaya terasa ada kedalaman." }
    ]
  };
})();
