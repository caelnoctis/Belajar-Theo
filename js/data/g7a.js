// KELAS 7 — Matematika, IPA, IPS, Bahasa Indonesia
// Format soal: [soal, [opsi], indexJawabanBenar, pembahasan]
MATERI[7].mtk = [
  {
    id: "bilangan-bulat", t: "Bilangan Bulat", s: 1,
    sum: "Bilangan bulat terdiri dari bilangan negatif, nol, dan bilangan positif: …, −3, −2, −1, 0, 1, 2, 3, …. Di garis bilangan, makin ke kanan nilainya makin besar. Jadi −2 lebih besar dari −5.\nKamu pakai bilangan negatif tiap hari: suhu di bawah nol, utang, atau kedalaman di bawah permukaan laut.",
    pts: [
      "<b>Penjumlahan:</b> tanda sama dijumlah, tanda beda dikurangi lalu ikut tanda bilangan yang nilai mutlaknya lebih besar. Contoh: −7 + 3 = −4.",
      "<b>Pengurangan</b> sama dengan menjumlah lawannya: a − b = a + (−b). Contoh: 5 − (−2) = 5 + 2 = 7.",
      "<b>Perkalian dan pembagian:</b> tanda sama hasilnya positif, tanda beda hasilnya negatif. (−4) × (−3) = 12, (−12) : 4 = −3.",
      "<b>Urutan operasi:</b> kurung dulu, lalu pangkat, lalu kali/bagi dari kiri, terakhir tambah/kurang dari kiri.",
      "<b>Nilai mutlak</b> |a| adalah jarak a dari nol, selalu positif atau nol. |−9| = 9."
    ],
    ex: { q: "Suhu di puncak gunung pagi hari −4 °C. Siang hari suhunya naik 11 °C. Berapa suhu siang hari?", a: "−4 + 11 = 7. Suhu siang hari 7 °C." },
    tip: "Bayangkan garis bilangan. Tambah berarti jalan ke kanan, kurang berarti jalan ke kiri.",
    q: [
      ["Hasil dari −8 + 5 adalah …", ["−3", "3", "−13", "13"], 0, "Tanda beda: 8 − 5 = 3, ikut tanda −8 karena nilai mutlaknya lebih besar."],
      ["Hasil dari 6 − (−4) adalah …", ["10", "2", "−2", "−10"], 0, "6 − (−4) = 6 + 4 = 10."],
      ["Hasil dari (−5) × (−6) adalah …", ["30", "−30", "11", "−11"], 0, "Negatif kali negatif hasilnya positif."],
      ["Urutan dari yang terkecil: −1, 4, −7, 0", ["−7, −1, 0, 4", "−1, −7, 0, 4", "0, −1, −7, 4", "4, 0, −1, −7"], 0, "Di garis bilangan, −7 paling kiri."],
      ["Hasil dari 20 − 4 × (−3) adalah …", ["32", "−48", "8", "48"], 0, "Kali dulu: 4 × (−3) = −12. Lalu 20 − (−12) = 32."],
      ["Ikan berada 15 m di bawah permukaan laut, lalu naik 6 m. Posisinya sekarang …", ["9 m di bawah permukaan", "21 m di bawah permukaan", "9 m di atas permukaan", "6 m di bawah permukaan"], 0, "−15 + 6 = −9."]
    ]
  },
  {
    id: "pecahan", t: "Bilangan Rasional dan Pecahan", s: 1,
    sum: "Bilangan rasional adalah bilangan yang bisa ditulis sebagai a/b dengan a dan b bulat dan b ≠ 0. Pecahan biasa, pecahan campuran, desimal, dan persen termasuk di dalamnya.\nSupaya bisa menjumlah atau membandingkan pecahan, samakan dulu penyebutnya pakai KPK.",
    pts: [
      "<b>Menyamakan penyebut:</b> 1/3 + 1/4 = 4/12 + 3/12 = 7/12.",
      "<b>Perkalian pecahan:</b> pembilang kali pembilang, penyebut kali penyebut. 2/3 × 3/5 = 6/15 = 2/5.",
      "<b>Pembagian pecahan:</b> kalikan dengan kebalikannya. 3/4 : 1/2 = 3/4 × 2/1 = 3/2.",
      "<b>Mengubah bentuk:</b> 3/4 = 0,75 = 75%. Persen artinya per seratus.",
      "<b>Pecahan campuran:</b> 2 1/3 = (2 × 3 + 1)/3 = 7/3."
    ],
    ex: { q: "Theo makan 1/4 pizza, kakaknya makan 2/5 pizza. Berapa bagian pizza yang sudah dimakan?", a: "KPK 4 dan 5 adalah 20. 1/4 = 5/20, 2/5 = 8/20. Total 13/20 bagian." },
    q: [
      ["Hasil dari 1/2 + 1/3 adalah …", ["5/6", "2/5", "1/6", "2/6"], 0, "3/6 + 2/6 = 5/6."],
      ["Bentuk desimal dari 3/8 adalah …", ["0,375", "0,38", "0,83", "3,8"], 0, "3 : 8 = 0,375."],
      ["Hasil dari 2/3 : 4/9 adalah …", ["3/2", "8/27", "2/3", "6/4"], 0, "2/3 × 9/4 = 18/12 = 3/2."],
      ["Pecahan yang paling besar adalah …", ["3/4", "2/3", "5/8", "7/12"], 0, "Samakan penyebut 24: 18/24, 16/24, 15/24, 14/24."],
      ["40% dari 250 adalah …", ["100", "40", "60", "150"], 0, "40/100 × 250 = 100."],
      ["2 1/2 diubah ke pecahan biasa menjadi …", ["5/2", "3/2", "4/2", "21/2"], 0, "(2 × 2 + 1)/2 = 5/2."]
    ]
  },
  {
    id: "aljabar", t: "Bentuk Aljabar", s: 1,
    sum: "Bentuk aljabar memakai huruf (variabel) untuk mewakili bilangan yang belum diketahui. Pada 3x + 5, angka 3 disebut koefisien, x variabel, dan 5 konstanta.\nKamu hanya boleh menjumlah atau mengurangi suku sejenis, yaitu suku dengan variabel dan pangkat yang sama.",
    pts: [
      "<b>Suku sejenis:</b> 4a dan −2a sejenis. 4a dan 4a² tidak sejenis.",
      "<b>Menyederhanakan:</b> 5x + 3y − 2x + y = 3x + 4y.",
      "<b>Sifat distributif:</b> 3(2x − 4) = 6x − 12.",
      "<b>Perkalian dua suku dua:</b> (x + 2)(x + 3) = x² + 3x + 2x + 6 = x² + 5x + 6.",
      "<b>Substitusi:</b> kalau x = 2, maka 3x + 5 = 3 × 2 + 5 = 11."
    ],
    ex: { q: "Sederhanakan 2(3a + 4) − (a − 5).", a: "6a + 8 − a + 5 = 5a + 13. Hati-hati: tanda minus di depan kurung mengubah −5 jadi +5." },
    q: [
      ["Koefisien x pada bentuk 7x − 4y + 9 adalah …", ["7", "−4", "9", "x"], 0, "Koefisien adalah angka di depan variabel."],
      ["Bentuk sederhana dari 6p − 2q + 3p + 5q adalah …", ["9p + 3q", "9p + 7q", "3p + 3q", "9p − 7q"], 0, "6p + 3p = 9p, −2q + 5q = 3q."],
      ["Hasil dari 4(2x − 3) adalah …", ["8x − 12", "8x − 3", "6x − 7", "8x + 12"], 0, "4 × 2x = 8x, 4 × (−3) = −12."],
      ["Jika a = 3, nilai dari 2a² − a adalah …", ["15", "33", "9", "12"], 0, "2 × 9 − 3 = 15."],
      ["Hasil dari (x + 4)(x − 2) adalah …", ["x² + 2x − 8", "x² − 2x − 8", "x² + 6x − 8", "x² + 2x + 8"], 0, "x² − 2x + 4x − 8 = x² + 2x − 8."],
      ["Keliling persegi panjang dengan panjang (2x + 1) dan lebar x adalah …", ["6x + 2", "3x + 1", "4x + 2", "2x² + x"], 0, "2 × (2x + 1 + x) = 2(3x + 1) = 6x + 2."]
    ]
  },
  {
    id: "rasio", t: "Rasio dan Perbandingan", s: 2,
    sum: "Rasio membandingkan dua besaran sejenis, misalnya 2 : 3. Ada dua jenis perbandingan yang sering muncul di soal.\nPerbandingan senilai: kalau satu naik, yang lain ikut naik (jumlah barang dan harga). Perbandingan berbalik nilai: kalau satu naik, yang lain turun (jumlah pekerja dan lama kerja).",
    pts: [
      "<b>Menyederhanakan rasio:</b> bagi kedua angka dengan FPB. 12 : 18 = 2 : 3.",
      "<b>Senilai:</b> a₁/b₁ = a₂/b₂. 3 buku Rp15.000, maka 5 buku Rp25.000.",
      "<b>Berbalik nilai:</b> a₁ × b₁ = a₂ × b₂. 4 orang selesai 6 hari, maka 8 orang selesai 3 hari.",
      "<b>Skala peta:</b> skala = jarak di peta : jarak sebenarnya. Skala 1 : 100.000 berarti 1 cm di peta = 1 km.",
      "<b>Laju:</b> kecepatan = jarak : waktu. 120 km dalam 2 jam berarti 60 km/jam."
    ],
    ex: { q: "Jarak dua kota di peta 4 cm. Skalanya 1 : 2.500.000. Berapa jarak sebenarnya?", a: "4 × 2.500.000 = 10.000.000 cm = 100 km." },
    q: [
      ["Bentuk sederhana dari rasio 24 : 36 adalah …", ["2 : 3", "3 : 4", "4 : 6", "6 : 9"], 0, "FPB 24 dan 36 adalah 12."],
      ["Harga 4 pensil Rp10.000. Harga 10 pensil adalah …", ["Rp25.000", "Rp20.000", "Rp40.000", "Rp14.000"], 0, "Senilai: 10.000 : 4 × 10 = 25.000."],
      ["Sebuah pekerjaan selesai 12 hari oleh 6 orang. Jika dikerjakan 9 orang, selesai dalam …", ["8 hari", "18 hari", "9 hari", "6 hari"], 0, "Berbalik nilai: 6 × 12 = 72, 72 : 9 = 8."],
      ["Contoh perbandingan berbalik nilai adalah …", ["Kecepatan mobil dan waktu tempuh", "Jumlah liter bensin dan harganya", "Jumlah kue dan banyak tepung", "Jam kerja dan upah"], 0, "Makin cepat, makin sebentar waktunya."],
      ["Skala 1 : 500.000, jarak di peta 3 cm. Jarak sebenarnya …", ["15 km", "1,5 km", "150 km", "5 km"], 0, "3 × 500.000 = 1.500.000 cm = 15 km."],
      ["Uang Theo dan adiknya berbanding 5 : 3. Jumlah uang mereka Rp64.000. Uang Theo …", ["Rp40.000", "Rp24.000", "Rp32.000", "Rp38.000"], 0, "5/8 × 64.000 = 40.000."]
    ]
  },
  {
    id: "plsv", t: "Persamaan dan Pertidaksamaan Linear Satu Variabel", s: 2,
    sum: "Persamaan linear satu variabel (PLSV) punya satu variabel berpangkat satu dan tanda sama dengan, misalnya 2x + 3 = 11. Menyelesaikannya berarti mencari nilai x yang membuat kalimat itu benar.\nPertidaksamaan memakai tanda <, >, ≤, atau ≥. Caranya mirip, dengan satu aturan khusus soal tanda.",
    pts: [
      "<b>Prinsip seimbang:</b> apa yang kamu lakukan di ruas kiri, lakukan juga di ruas kanan.",
      "<b>Contoh:</b> 2x + 3 = 11 → 2x = 8 → x = 4.",
      "<b>Pertidaksamaan:</b> 3x − 2 > 7 → 3x > 9 → x > 3.",
      "<b>Aturan khusus:</b> kalau kedua ruas dikali atau dibagi bilangan negatif, balik tandanya. −2x < 6 → x > −3.",
      "<b>Cek jawaban:</b> masukkan lagi nilai x ke soal awal."
    ],
    ex: { q: "Umur Theo 3 tahun lebih tua dari adiknya. Jumlah umur mereka 23 tahun. Berapa umur Theo?", a: "Misal umur adik = x, umur Theo = x + 3. x + x + 3 = 23 → 2x = 20 → x = 10. Umur Theo 13 tahun." },
    q: [
      ["Penyelesaian dari 3x − 5 = 16 adalah …", ["x = 7", "x = 11/3", "x = 21", "x = 3"], 0, "3x = 21, x = 7."],
      ["Penyelesaian dari 2(x + 4) = 18 adalah …", ["x = 5", "x = 7", "x = 9", "x = 11"], 0, "2x + 8 = 18 → 2x = 10."],
      ["Penyelesaian dari 4x + 1 ≤ 13 adalah …", ["x ≤ 3", "x ≥ 3", "x ≤ 14/4", "x < 3"], 0, "4x ≤ 12 → x ≤ 3."],
      ["Penyelesaian dari −3x > 12 adalah …", ["x < −4", "x > −4", "x > 4", "x < 4"], 0, "Bagi −3, tanda dibalik."],
      ["Jumlah tiga bilangan berurutan 48. Bilangan terkecilnya …", ["15", "16", "14", "17"], 0, "x + (x+1) + (x+2) = 48 → 3x = 45."],
      ["Nilai x yang memenuhi x/2 + 3 = 7 adalah …", ["8", "2", "20", "4"], 0, "x/2 = 4 → x = 8."]
    ]
  },
  {
    id: "garis-sudut", t: "Garis, Sudut, dan Bangun Datar", s: 2,
    sum: "Sudut diukur dalam derajat. Sudut lancip kurang dari 90°, siku-siku tepat 90°, tumpul antara 90° dan 180°, dan lurus 180°.\nDua garis sejajar yang dipotong garis lain membentuk pasangan sudut yang ukurannya saling berhubungan. Bagian kedua bab ini membahas keliling dan luas bangun datar.",
    pts: [
      "<b>Berpelurus:</b> jumlahnya 180°. <b>Berpenyiku:</b> jumlahnya 90°.",
      "<b>Garis sejajar:</b> sudut sehadap dan sudut dalam berseberangan sama besar.",
      "<b>Jumlah sudut segitiga</b> 180°, segiempat 360°.",
      "<b>Luas:</b> persegi s², persegi panjang p × l, segitiga ½ × a × t, jajargenjang a × t, trapesium ½ × (a + b) × t.",
      "<b>Keliling</b> adalah jumlah panjang semua sisi."
    ],
    ex: { q: "Segitiga punya dua sudut 48° dan 67°. Berapa sudut ketiga?", a: "180° − 48° − 67° = 65°." },
    q: [
      ["Penyiku sudut 35° adalah …", ["55°", "145°", "65°", "35°"], 0, "90° − 35° = 55°."],
      ["Pelurus sudut 120° adalah …", ["60°", "240°", "30°", "80°"], 0, "180° − 120° = 60°."],
      ["Sudut 135° termasuk sudut …", ["tumpul", "lancip", "siku-siku", "refleks"], 0, "Di antara 90° dan 180°."],
      ["Luas segitiga dengan alas 10 cm dan tinggi 6 cm adalah …", ["30 cm²", "60 cm²", "16 cm²", "36 cm²"], 0, "½ × 10 × 6 = 30."],
      ["Trapesium dengan sisi sejajar 8 cm dan 12 cm, tinggi 5 cm. Luasnya …", ["50 cm²", "100 cm²", "40 cm²", "60 cm²"], 0, "½ × 20 × 5 = 50."],
      ["Dua garis sejajar dipotong garis lain. Sudut sehadap besarnya 70°. Pasangannya …", ["70°", "110°", "20°", "140°"], 0, "Sudut sehadap sama besar."]
    ]
  },
  {
    id: "data", t: "Data dan Diagram", s: 2,
    sum: "Statistika membantu kamu membaca kumpulan data. Data bisa kamu sajikan dalam tabel, diagram batang, diagram garis, atau diagram lingkaran.\nTiga ukuran pemusatan yang wajib kamu kuasai: mean, median, dan modus.",
    pts: [
      "<b>Mean (rata-rata):</b> jumlah semua data dibagi banyak data.",
      "<b>Median:</b> nilai tengah setelah data diurutkan. Kalau banyak data genap, ambil rata-rata dua nilai tengah.",
      "<b>Modus:</b> nilai yang paling sering muncul.",
      "<b>Diagram lingkaran:</b> sudut juring = (nilai/total) × 360°.",
      "<b>Diagram garis</b> cocok untuk data yang berubah dari waktu ke waktu."
    ],
    ex: { q: "Nilai ulangan: 7, 8, 6, 9, 8, 10, 8. Tentukan mean, median, modus.", a: "Urut: 6, 7, 8, 8, 8, 9, 10. Mean = 56/7 = 8. Median = 8 (data ke-4). Modus = 8." },
    q: [
      ["Rata-rata dari 4, 6, 8, 10, 12 adalah …", ["8", "6", "10", "40"], 0, "40 : 5 = 8."],
      ["Median dari 3, 9, 5, 7, 1, 8 adalah …", ["6", "5", "7", "5,5"], 0, "Urut: 1,3,5,7,8,9. (5 + 7) : 2 = 6."],
      ["Modus dari 2, 4, 4, 5, 6, 6, 6, 7 adalah …", ["6", "4", "5", "5,5"], 0, "6 muncul tiga kali."],
      ["Dari 40 siswa, 10 suka voli. Sudut juring voli pada diagram lingkaran …", ["90°", "40°", "25°", "120°"], 0, "10/40 × 360° = 90°."],
      ["Diagram yang paling cocok untuk menunjukkan suhu harian selama seminggu adalah …", ["diagram garis", "diagram lingkaran", "piktogram", "tabel frekuensi"], 0, "Data berubah terhadap waktu."]
    ]
  }
];

MATERI[7].ipa = [
  {
    id: "metode-ilmiah", t: "Hakikat Sains dan Metode Ilmiah", s: 1,
    sum: "Ilmuwan memakai metode ilmiah untuk menjawab pertanyaan tentang alam secara teratur. Kamu juga bisa memakainya, misalnya untuk menguji apakah tanaman tumbuh lebih cepat kalau disiram air cucian beras.\nBab ini juga membahas besaran, satuan, dan alat ukur di laboratorium.",
    pts: [
      "<b>Langkah metode ilmiah:</b> merumuskan masalah, membuat hipotesis, melakukan percobaan, menganalisis data, menyimpulkan.",
      "<b>Hipotesis</b> adalah dugaan sementara yang akan diuji.",
      "<b>Variabel bebas</b> sengaja diubah, <b>variabel terikat</b> diukur hasilnya, <b>variabel kontrol</b> dibuat tetap.",
      "<b>Besaran pokok</b> (SI): panjang (m), massa (kg), waktu (s), suhu (K), kuat arus (A), jumlah zat (mol), intensitas cahaya (cd).",
      "<b>Alat ukur:</b> mistar dan jangka sorong untuk panjang, neraca untuk massa, stopwatch untuk waktu, termometer untuk suhu."
    ],
    ex: { q: "Theo menguji pengaruh banyak cahaya terhadap tinggi tanaman kacang hijau. Sebutkan variabel bebas, terikat, dan kontrolnya.", a: "Bebas: banyak cahaya. Terikat: tinggi tanaman. Kontrol: jenis tanaman, jumlah air, jenis tanah, ukuran pot." },
    q: [
      ["Dugaan sementara dalam percobaan disebut …", ["hipotesis", "kesimpulan", "variabel", "teori"], 0, "Hipotesis diuji lewat percobaan."],
      ["Satuan SI untuk massa adalah …", ["kilogram", "gram", "newton", "ons"], 0, "Massa dalam SI memakai kilogram."],
      ["Alat untuk mengukur diameter dalam cincin dengan teliti adalah …", ["jangka sorong", "mistar", "meteran kain", "neraca"], 0, "Jangka sorong punya rahang atas untuk diameter dalam."],
      ["Berikut yang termasuk besaran turunan adalah …", ["kecepatan", "panjang", "waktu", "suhu"], 0, "Kecepatan diturunkan dari panjang dan waktu."],
      ["Dalam percobaan, variabel yang sengaja diubah-ubah disebut variabel …", ["bebas", "terikat", "kontrol", "tetap"], 0, "Variabel bebas memengaruhi variabel terikat."],
      ["Langkah setelah melakukan percobaan adalah …", ["menganalisis data", "membuat hipotesis", "merumuskan masalah", "mengamati masalah"], 0, "Data hasil percobaan diolah sebelum menyimpulkan."]
    ]
  },
  {
    id: "zat", t: "Zat dan Perubahannya", s: 1,
    sum: "Zat adalah segala sesuatu yang punya massa dan menempati ruang. Zat ada dalam tiga wujud utama: padat, cair, dan gas.\nZat bisa berubah wujud karena menerima atau melepas kalor. Ada juga perubahan yang menghasilkan zat baru, disebut perubahan kimia.",
    pts: [
      "<b>Padat:</b> bentuk dan volume tetap. <b>Cair:</b> volume tetap, bentuk ikut wadah. <b>Gas:</b> bentuk dan volume berubah.",
      "<b>Menerima kalor:</b> mencair (es jadi air), menguap (air jadi uap), menyublim (kapur barus jadi gas).",
      "<b>Melepas kalor:</b> membeku, mengembun, mengkristal (deposisi).",
      "<b>Perubahan fisika</b> tidak menghasilkan zat baru (es mencair). <b>Perubahan kimia</b> menghasilkan zat baru (besi berkarat, kayu terbakar).",
      "<b>Massa jenis</b> ρ = m/V. Benda dengan massa jenis lebih kecil dari air akan terapung."
    ],
    ex: { q: "Sebuah balok massanya 600 g dan volumenya 750 cm³. Apakah balok itu terapung di air (ρ air = 1 g/cm³)?", a: "ρ = 600/750 = 0,8 g/cm³. Lebih kecil dari air, jadi terapung." },
    q: [
      ["Kapur barus yang lama-lama habis di lemari mengalami …", ["menyublim", "menguap", "mencair", "mengembun"], 0, "Padat langsung menjadi gas."],
      ["Embun di daun pada pagi hari terjadi karena peristiwa …", ["mengembun", "menguap", "membeku", "menyublim"], 0, "Uap air melepas kalor dan menjadi cair."],
      ["Contoh perubahan kimia adalah …", ["nasi menjadi basi", "lilin meleleh", "air membeku", "gula larut"], 0, "Nasi basi menghasilkan zat baru (bau, rasa berubah)."],
      ["Zat yang bentuknya berubah tetapi volumenya tetap adalah zat …", ["cair", "padat", "gas", "plasma"], 0, "Cairan mengikuti bentuk wadah."],
      ["Benda bermassa 200 g dengan volume 50 cm³ memiliki massa jenis …", ["4 g/cm³", "0,25 g/cm³", "250 g/cm³", "10.000 g/cm³"], 0, "200 : 50 = 4."],
      ["Perubahan wujud yang membutuhkan kalor adalah …", ["mencair", "membeku", "mengembun", "mengkristal"], 0, "Es butuh kalor untuk mencair."]
    ]
  },
  {
    id: "suhu-kalor", t: "Suhu, Kalor, dan Pemuaian", s: 1,
    sum: "Suhu menunjukkan derajat panas atau dingin suatu benda. Kalor adalah energi panas yang berpindah dari benda bersuhu tinggi ke benda bersuhu rendah.\nKebanyakan benda memuai saat dipanaskan. Karena itu rel kereta dipasang dengan celah kecil.",
    pts: [
      "<b>Skala termometer:</b> Celsius 0–100, Reamur 0–80, Fahrenheit 32–212, Kelvin 273–373 (titik beku sampai titik didih air).",
      "<b>Konversi:</b> C : R : (F − 32) = 5 : 4 : 9, dan K = C + 273.",
      "<b>Rumus kalor:</b> Q = m × c × ΔT (m massa, c kalor jenis, ΔT perubahan suhu).",
      "<b>Perpindahan kalor:</b> konduksi (lewat zat padat, sendok panas), konveksi (aliran zat cair/gas, air mendidih), radiasi (tanpa perantara, panas matahari).",
      "<b>Pemuaian:</b> contohnya celah sambungan rel, kabel listrik dipasang kendur, dan bimetal pada setrika."
    ],
    ex: { q: "Ubah 50 °C ke Fahrenheit dan Kelvin.", a: "F = 9/5 × 50 + 32 = 122 °F. K = 50 + 273 = 323 K." },
    q: [
      ["Suhu 30 °C sama dengan … K", ["303", "243", "86", "24"], 0, "30 + 273 = 303."],
      ["Suhu 20 °C sama dengan … °F", ["68", "36", "52", "16"], 0, "9/5 × 20 + 32 = 68."],
      ["Panas matahari sampai ke bumi melalui …", ["radiasi", "konduksi", "konveksi", "isolasi"], 0, "Radiasi tidak butuh perantara."],
      ["Gagang panci dibuat dari plastik karena plastik …", ["isolator panas", "konduktor panas", "mudah memuai", "ringan"], 0, "Isolator menghambat kalor sampai ke tangan."],
      ["Kalor untuk memanaskan 2 kg air (c = 4.200 J/kg°C) dari 20 °C ke 30 °C adalah …", ["84.000 J", "8.400 J", "42.000 J", "840 J"], 0, "2 × 4.200 × 10 = 84.000 J."],
      ["Celah pada sambungan rel kereta api berfungsi untuk …", ["memberi ruang saat rel memuai", "menghemat besi", "mengurangi suara", "memudahkan perbaikan"], 0, "Rel memuai saat siang yang panas."]
    ]
  },
  {
    id: "gerak-gaya", t: "Gerak dan Gaya", s: 2,
    sum: "Benda dikatakan bergerak kalau posisinya berubah terhadap titik acuan. Gerak lurus beraturan (GLB) punya kecepatan tetap, sedangkan gerak lurus berubah beraturan (GLBB) punya kecepatan yang berubah secara teratur.\nGaya adalah tarikan atau dorongan. Isaac Newton merumuskan tiga hukum tentang gaya dan gerak.",
    pts: [
      "<b>Kecepatan</b> v = s/t. Satuan m/s atau km/jam.",
      "<b>Hukum I Newton (kelembaman):</b> benda diam tetap diam, benda bergerak tetap bergerak lurus, kalau resultan gayanya nol. Contoh: badan terdorong ke depan saat mobil mengerem.",
      "<b>Hukum II Newton:</b> F = m × a. Gaya besar menghasilkan percepatan besar.",
      "<b>Hukum III Newton:</b> aksi = −reaksi. Contoh: dayung mendorong air ke belakang, perahu maju ke depan.",
      "<b>Gaya gesek</b> melawan arah gerak. Gaya berat w = m × g, dengan g ≈ 10 m/s²."
    ],
    ex: { q: "Theo bersepeda 6 km dalam 20 menit. Berapa kecepatannya dalam km/jam?", a: "20 menit = 1/3 jam. v = 6 : 1/3 = 18 km/jam." },
    q: [
      ["Mobil menempuh 150 km dalam 3 jam. Kecepatan rata-ratanya …", ["50 km/jam", "450 km/jam", "45 km/jam", "153 km/jam"], 0, "150 : 3 = 50."],
      ["Penumpang terdorong ke depan saat bus mengerem mendadak. Ini contoh hukum Newton …", ["I", "II", "III", "gravitasi"], 0, "Kelembaman: tubuh cenderung tetap bergerak."],
      ["Gaya 20 N bekerja pada benda 4 kg. Percepatannya …", ["5 m/s²", "80 m/s²", "24 m/s²", "16 m/s²"], 0, "a = F/m = 20/4."],
      ["Roket meluncur karena gas disemburkan ke bawah. Ini contoh hukum Newton …", ["III", "I", "II", "kekekalan energi"], 0, "Aksi-reaksi."],
      ["Berat benda bermassa 6 kg (g = 10 m/s²) adalah …", ["60 N", "6 N", "0,6 N", "16 N"], 0, "w = m × g."],
      ["Contoh gaya gesek yang menguntungkan adalah …", ["gesekan rem sepeda", "gesekan mesin yang aus", "gesekan udara pada pesawat", "gesekan ban yang cepat gundul"], 0, "Rem bekerja karena gesekan."]
    ]
  },
  {
    id: "klasifikasi", t: "Klasifikasi Makhluk Hidup", s: 2,
    sum: "Klasifikasi adalah pengelompokan makhluk hidup berdasarkan persamaan dan perbedaan cirinya. Dengan klasifikasi, kamu lebih mudah mempelajari jutaan jenis makhluk hidup.\nCarolus Linnaeus memperkenalkan tata nama ganda (binomial nomenklatur) yang masih dipakai sampai sekarang.",
    pts: [
      "<b>Ciri makhluk hidup:</b> bernapas, bergerak, makan, tumbuh, berkembang biak, peka rangsang, mengeluarkan zat sisa.",
      "<b>Urutan takson:</b> kingdom, filum/divisi, kelas, ordo, famili, genus, spesies.",
      "<b>Binomial nomenklatur:</b> dua kata, kata pertama genus (huruf besar), kata kedua penunjuk spesies (huruf kecil), dicetak miring. Contoh: <i>Oryza sativa</i> (padi).",
      "<b>Lima kingdom (Whittaker):</b> Monera, Protista, Fungi, Plantae, Animalia.",
      "<b>Kunci determinasi</b> membantu mengidentifikasi makhluk hidup lewat pilihan ciri berpasangan."
    ],
    ex: { q: "Penulisan nama ilmiah harimau Sumatra yang benar: <i>Panthera tigris sumatrae</i> atau panthera Tigris?", a: "<i>Panthera tigris sumatrae</i>. Genus diawali huruf besar, nama spesies dan subspesies huruf kecil, dicetak miring." },
    q: [
      ["Urutan takson dari yang paling umum adalah …", ["kingdom – filum – kelas – ordo", "spesies – genus – famili – ordo", "kelas – kingdom – ordo – filum", "filum – kingdom – kelas – ordo"], 0, "Makin ke bawah makin spesifik."],
      ["Penulisan nama ilmiah yang benar adalah …", ["Zea mays", "zea mays", "Zea Mays", "ZEA MAYS"], 0, "Genus huruf besar, spesies huruf kecil (ditulis miring)."],
      ["Jamur termasuk kingdom …", ["Fungi", "Plantae", "Monera", "Protista"], 0, "Jamur tidak berklorofil dan punya kingdom sendiri."],
      ["Bakteri termasuk kingdom Monera karena …", ["tidak punya membran inti", "bisa berfotosintesis", "bersel banyak", "punya akar"], 0, "Sel prokariotik."],
      ["Tokoh yang memperkenalkan binomial nomenklatur adalah …", ["Carolus Linnaeus", "Charles Darwin", "Robert Whittaker", "Gregor Mendel"], 0, "Linnaeus, abad ke-18."],
      ["Takson paling rendah yang anggotanya bisa kawin dan menghasilkan keturunan subur adalah …", ["spesies", "genus", "famili", "kelas"], 0, "Spesies."]
    ]
  },
  {
    id: "ekologi", t: "Ekologi dan Keanekaragaman Hayati", s: 2,
    sum: "Ekologi mempelajari hubungan makhluk hidup dengan lingkungannya. Ekosistem terdiri dari komponen biotik (makhluk hidup) dan abiotik (tanah, air, cahaya, suhu).\nIndonesia punya keanekaragaman hayati sangat tinggi, dan manusia ikut bertanggung jawab menjaganya.",
    pts: [
      "<b>Tingkatan:</b> individu → populasi → komunitas → ekosistem → biosfer.",
      "<b>Rantai makanan:</b> produsen (tumbuhan) → konsumen I → konsumen II → … → pengurai (bakteri, jamur).",
      "<b>Simbiosis:</b> mutualisme (lebah dan bunga), komensalisme (anggrek di pohon), parasitisme (benalu di pohon).",
      "<b>Keanekaragaman hayati</b> ada di tingkat gen, jenis, dan ekosistem.",
      "<b>Pelestarian:</b> in situ di habitat asli (taman nasional), ex situ di luar habitat (kebun binatang, kebun raya)."
    ],
    ex: { q: "Rantai makanan: padi → tikus → ular → elang. Apa yang terjadi kalau ular diburu sampai habis?", a: "Tikus bertambah banyak dan merusak padi. Elang kekurangan makanan." },
    q: [
      ["Kumpulan individu sejenis di satu tempat disebut …", ["populasi", "komunitas", "ekosistem", "biosfer"], 0, "Populasi = satu jenis."],
      ["Contoh komponen abiotik adalah …", ["cahaya matahari", "rumput", "jamur", "cacing"], 0, "Abiotik = tidak hidup."],
      ["Hubungan benalu dengan pohon inangnya disebut …", ["parasitisme", "mutualisme", "komensalisme", "netralisme"], 0, "Benalu untung, pohon rugi."],
      ["Dalam rantai makanan, tumbuhan hijau berperan sebagai …", ["produsen", "konsumen I", "pengurai", "konsumen puncak"], 0, "Tumbuhan membuat makanan sendiri."],
      ["Taman Nasional Komodo adalah contoh pelestarian …", ["in situ", "ex situ", "buatan", "genetik"], 0, "Di habitat aslinya."],
      ["Organisme yang menguraikan sisa makhluk hidup adalah …", ["bakteri dan jamur", "rumput dan alga", "ulat dan belalang", "elang dan ular"], 0, "Pengurai (dekomposer)."]
    ]
  },
  {
    id: "tata-surya", t: "Bumi dan Tata Surya", s: 2,
    sum: "Tata surya terdiri dari Matahari sebagai pusat, delapan planet, satelit, asteroid, dan komet. Bumi berputar pada porosnya (rotasi) dan mengelilingi Matahari (revolusi).\nGerakan bumi dan bulan menyebabkan siang-malam, musim, dan gerhana.",
    pts: [
      "<b>Urutan planet:</b> Merkurius, Venus, Bumi, Mars, Jupiter, Saturnus, Uranus, Neptunus.",
      "<b>Rotasi bumi</b> (± 24 jam) menyebabkan siang-malam dan gerak semu harian matahari.",
      "<b>Revolusi bumi</b> (± 365¼ hari) menyebabkan pergantian musim dan perbedaan lama siang-malam.",
      "<b>Gerhana matahari:</b> bulan di antara matahari dan bumi. <b>Gerhana bulan:</b> bumi di antara matahari dan bulan.",
      "<b>Lapisan bumi:</b> kerak, mantel, inti luar, inti dalam."
    ],
    ex: { q: "Mengapa Jakarta sudah siang saat London masih dini hari?", a: "Bumi berotasi dari barat ke timur, jadi wilayah di timur lebih dulu menghadap matahari." },
    q: [
      ["Planet terbesar di tata surya adalah …", ["Jupiter", "Saturnus", "Bumi", "Neptunus"], 0, "Jupiter."],
      ["Akibat rotasi bumi adalah …", ["terjadinya siang dan malam", "pergantian musim", "gerhana bulan", "pasang surut tahunan"], 0, "Rotasi = berputar pada porosnya."],
      ["Gerhana bulan terjadi ketika …", ["bumi berada di antara matahari dan bulan", "bulan di antara matahari dan bumi", "matahari di antara bumi dan bulan", "bulan menjauhi bumi"], 0, "Bayangan bumi menutupi bulan."],
      ["Planet yang paling dekat dengan matahari adalah …", ["Merkurius", "Venus", "Mars", "Bumi"], 0, "Urutan pertama."],
      ["Waktu bumi mengelilingi matahari satu kali adalah sekitar …", ["365¼ hari", "24 jam", "29½ hari", "12 bulan 10 hari"], 0, "Revolusi."],
      ["Lapisan bumi tempat kita tinggal adalah …", ["kerak bumi", "mantel", "inti luar", "inti dalam"], 0, "Kerak = lapisan terluar."]
    ]
  }
];

MATERI[7].ips = [
  {
    id: "interaksi", t: "Interaksi Sosial dan Lingkungan Sekitar", s: 1,
    sum: "Manusia adalah makhluk sosial. Kamu butuh orang lain untuk belajar, bermain, dan memenuhi kebutuhan. Hubungan timbal balik antarindividu atau kelompok disebut interaksi sosial.\nInteraksi bisa mendekatkan (asosiatif) atau menjauhkan (disosiatif).",
    pts: [
      "<b>Syarat interaksi sosial:</b> kontak sosial dan komunikasi.",
      "<b>Asosiatif:</b> kerja sama, akomodasi (meredakan konflik), asimilasi (pembauran jadi budaya baru), akulturasi (budaya baru diterima tanpa menghilangkan budaya lama).",
      "<b>Disosiatif:</b> persaingan, kontravensi (sikap tidak suka tersembunyi), konflik.",
      "<b>Lembaga sosial:</b> keluarga, pendidikan, ekonomi, agama, politik.",
      "<b>Sosialisasi</b> adalah proses belajar nilai dan norma. Agennya keluarga, sekolah, teman sebaya, dan media massa."
    ],
    ex: { q: "Bangunan Masjid Menara Kudus memadukan gaya Hindu dan Islam. Termasuk bentuk interaksi apa?", a: "Akulturasi, karena unsur budaya lama (Hindu) tetap terlihat berdampingan dengan unsur baru (Islam)." },
    q: [
      ["Dua syarat terjadinya interaksi sosial adalah …", ["kontak sosial dan komunikasi", "kerja sama dan persaingan", "norma dan nilai", "keluarga dan sekolah"], 0, "Tanpa kontak dan komunikasi, interaksi tidak terjadi."],
      ["Gotong royong membersihkan kampung termasuk interaksi …", ["kerja sama", "persaingan", "kontravensi", "konflik"], 0, "Bentuk asosiatif."],
      ["Lomba antarkelas untuk merebut juara termasuk interaksi …", ["persaingan", "akulturasi", "akomodasi", "asimilasi"], 0, "Persaingan tanpa kekerasan."],
      ["Agen sosialisasi pertama yang dikenal anak adalah …", ["keluarga", "sekolah", "media massa", "teman sebaya"], 0, "Anak belajar pertama kali di rumah."],
      ["Upaya meredakan pertentangan agar tercipta keseimbangan disebut …", ["akomodasi", "asimilasi", "kontravensi", "akulturasi"], 0, "Contoh: mediasi, kompromi."],
      ["Musik dangdut yang memadukan unsur Melayu, India, dan Arab adalah contoh …", ["akulturasi", "konflik", "persaingan", "kontravensi"], 0, "Unsur budaya asal masih terlihat."]
    ]
  },
  {
    id: "letak-indonesia", t: "Letak Geografis dan Peta Indonesia", s: 1,
    sum: "Indonesia terletak di antara 6° LU – 11° LS dan 95° BT – 141° BT. Posisinya juga diapit dua benua (Asia dan Australia) serta dua samudra (Hindia dan Pasifik).\nPeta membantu kamu membaca lokasi, jarak, dan bentuk permukaan bumi.",
    pts: [
      "<b>Letak astronomis</b> (garis lintang dan bujur) membuat Indonesia beriklim tropis dan punya tiga zona waktu: WIB, WITA, WIT.",
      "<b>Letak geografis</b> di persimpangan dunia membuat Indonesia ramai jalur perdagangan dan punya iklim muson.",
      "<b>Komponen peta:</b> judul, skala, orientasi (mata angin), legenda, garis astronomis, sumber, dan inset.",
      "<b>Selisih waktu:</b> WIB ke WITA +1 jam, WIB ke WIT +2 jam.",
      "<b>Indonesia</b> berada di pertemuan lempeng Eurasia, Indo-Australia, dan Pasifik, sehingga banyak gunung api dan gempa."
    ],
    ex: { q: "Theo di Jakarta menelepon saudara di Jayapura pukul 19.00 WIB. Pukul berapa di Jayapura?", a: "Jayapura memakai WIT, selisih +2 jam. Jadi pukul 21.00 WIT." },
    q: [
      ["Letak astronomis Indonesia menyebabkan Indonesia beriklim …", ["tropis", "subtropis", "sedang", "kutub"], 0, "Dilalui garis khatulistiwa."],
      ["Indonesia diapit oleh Samudra …", ["Hindia dan Pasifik", "Atlantik dan Hindia", "Pasifik dan Atlantik", "Arktik dan Pasifik"], 0, "Letak geografis."],
      ["Komponen peta yang menjelaskan arti simbol disebut …", ["legenda", "skala", "inset", "orientasi"], 0, "Legenda berisi keterangan simbol."],
      ["Pukul 10.00 WITA sama dengan pukul … WIB", ["09.00", "11.00", "08.00", "12.00"], 0, "WITA lebih cepat 1 jam dari WIB."],
      ["Banyaknya gunung api di Indonesia disebabkan oleh …", ["pertemuan tiga lempeng tektonik", "letak di khatulistiwa", "diapit dua benua", "angin muson"], 0, "Pertemuan lempeng membentuk jalur gunung api."],
      ["Bali dan Nusa Tenggara memakai zona waktu …", ["WITA", "WIB", "WIT", "GMT"], 0, "Waktu Indonesia Tengah."]
    ]
  },
  {
    id: "ekonomi", t: "Kegiatan Ekonomi dan Kebutuhan Manusia", s: 1,
    sum: "Kebutuhan manusia banyak, sedangkan alat pemuas kebutuhan terbatas. Keadaan ini disebut kelangkaan, dan kelangkaan memaksa kamu memilih.\nKegiatan ekonomi utama ada tiga: produksi, distribusi, dan konsumsi.",
    pts: [
      "<b>Kebutuhan menurut intensitas:</b> primer (pangan, sandang, papan), sekunder (televisi, sepeda), tersier (barang mewah).",
      "<b>Biaya peluang</b> adalah nilai pilihan terbaik yang kamu korbankan. Belajar untuk ujian berarti mengorbankan waktu main game.",
      "<b>Produksi</b> membuat atau menambah nilai guna barang. <b>Distribusi</b> menyalurkan barang ke konsumen. <b>Konsumsi</b> memakai barang.",
      "<b>Faktor produksi:</b> alam, tenaga kerja, modal, kewirausahaan.",
      "<b>Prinsip ekonomi:</b> dengan pengorbanan tertentu mendapat hasil maksimal."
    ],
    ex: { q: "Theo punya Rp50.000. Pilihannya: beli buku latihan UAS atau tiket bioskop. Dia memilih buku. Apa biaya peluangnya?", a: "Kesenangan menonton bioskop yang dia korbankan." },
    q: [
      ["Kebutuhan pokok yang harus dipenuhi agar bisa hidup layak disebut kebutuhan …", ["primer", "sekunder", "tersier", "jasmani"], 0, "Pangan, sandang, papan."],
      ["Keadaan ketika alat pemuas kebutuhan terbatas dibanding kebutuhan disebut …", ["kelangkaan", "inflasi", "konsumsi", "distribusi"], 0, "Inti masalah ekonomi."],
      ["Pedagang yang mengirim sayur dari desa ke pasar kota melakukan kegiatan …", ["distribusi", "produksi", "konsumsi", "investasi"], 0, "Menyalurkan barang."],
      ["Mesin dan peralatan pabrik termasuk faktor produksi …", ["modal", "alam", "tenaga kerja", "kewirausahaan"], 0, "Barang modal."],
      ["Penjahit mengubah kain menjadi baju. Ini menambah nilai guna …", ["bentuk", "tempat", "waktu", "kepemilikan"], 0, "Bentuk barang berubah."],
      ["Contoh kebutuhan tersier adalah …", ["mobil mewah", "beras", "seragam sekolah", "rumah sederhana"], 0, "Barang mewah."]
    ]
  },
  {
    id: "praaksara", t: "Kehidupan Masa Praaksara", s: 2,
    sum: "Masa praaksara adalah masa sebelum manusia mengenal tulisan. Para ahli mempelajarinya lewat fosil dan artefak, misalnya kapak batu dan perhiasan.\nPara ahli membagi masa ini menurut cara hidup dan menurut bahan alat yang dipakai.",
    pts: [
      "<b>Berdasarkan geologi:</b> arkaikum, paleozoikum, mesozoikum, neozoikum (manusia muncul di zaman kuarter).",
      "<b>Zaman batu:</b> paleolitikum (batu tua, kapak genggam), mesolitikum (batu madya, kjokkenmoddinger), neolitikum (batu muda, kapak persegi, mulai bercocok tanam), megalitikum (batu besar: menhir, dolmen, sarkofagus).",
      "<b>Zaman logam:</b> perunggu (nekara, kapak corong) dan besi.",
      "<b>Manusia purba Indonesia:</b> <i>Meganthropus paleojavanicus</i>, <i>Pithecanthropus erectus</i> (ditemukan Eugene Dubois di Trinil), <i>Homo soloensis</i>, <i>Homo wajakensis</i>.",
      "<b>Pola hidup:</b> berburu dan meramu (nomaden), lalu bercocok tanam dan menetap (revolusi neolitik)."
    ],
    ex: { q: "Mengapa zaman neolitikum disebut masa revolusi kehidupan?", a: "Manusia mulai bercocok tanam, beternak, dan tinggal menetap. Cara hidup berubah besar dari berburu-meramu." },
    q: [
      ["Masa praaksara berakhir ketika manusia mulai mengenal …", ["tulisan", "api", "logam", "bercocok tanam"], 0, "Praaksara = sebelum aksara."],
      ["Fosil Pithecanthropus erectus ditemukan di Trinil oleh …", ["Eugene Dubois", "Von Koenigswald", "Teuku Jacob", "Charles Darwin"], 0, "Tahun 1891."],
      ["Menhir adalah peninggalan zaman …", ["megalitikum", "paleolitikum", "mesolitikum", "perunggu"], 0, "Tugu batu untuk pemujaan roh nenek moyang."],
      ["Kjokkenmoddinger adalah …", ["tumpukan sampah kulit kerang", "kapak genggam", "gua tempat tinggal", "peti mayat batu"], 0, "Peninggalan mesolitikum."],
      ["Manusia mulai hidup menetap dan bercocok tanam pada zaman …", ["neolitikum", "paleolitikum", "mesolitikum", "megalitikum"], 0, "Revolusi neolitik."],
      ["Nekara adalah peninggalan zaman …", ["perunggu", "batu tua", "batu muda", "besi"], 0, "Genderang perunggu."]
    ]
  },
  {
    id: "hindu-buddha", t: "Masa Hindu-Buddha di Indonesia", s: 2,
    sum: "Agama dan budaya Hindu-Buddha masuk ke Nusantara lewat jalur perdagangan dengan India sekitar abad ke-4. Pengaruhnya terlihat pada kerajaan, candi, dan sastra.\nBeberapa kerajaan besar dari masa ini masih menjadi kebanggaan bangsa, seperti Sriwijaya dan Majapahit.",
    pts: [
      "<b>Teori masuknya:</b> Brahmana (dibawa kaum pendeta), Ksatria (prajurit), Waisya (pedagang), Arus Balik (orang Nusantara belajar ke India).",
      "<b>Kerajaan tertua:</b> Kutai di Kalimantan Timur (prasasti Yupa) dan Tarumanegara di Jawa Barat.",
      "<b>Sriwijaya</b> (Palembang): kerajaan maritim Buddha, pusat belajar agama Buddha.",
      "<b>Majapahit:</b> puncak kejayaan masa Hayam Wuruk dengan patih Gajah Mada dan Sumpah Palapa.",
      "<b>Peninggalan:</b> Candi Borobudur (Buddha), Candi Prambanan (Hindu), kitab Negarakertagama (Mpu Prapanca), Sutasoma (Mpu Tantular, memuat “Bhinneka Tunggal Ika”)."
    ],
    ex: { q: "Dari mana semboyan Bhinneka Tunggal Ika berasal?", a: "Dari kitab Sutasoma karya Mpu Tantular pada masa Majapahit." },
    q: [
      ["Kerajaan Hindu tertua di Indonesia adalah …", ["Kutai", "Majapahit", "Sriwijaya", "Mataram Kuno"], 0, "Bukti: prasasti Yupa."],
      ["Candi Borobudur adalah candi bercorak …", ["Buddha", "Hindu", "Islam", "megalitik"], 0, "Dibangun masa Dinasti Syailendra."],
      ["Patih Majapahit yang mengucapkan Sumpah Palapa adalah …", ["Gajah Mada", "Hayam Wuruk", "Ken Arok", "Raden Wijaya"], 0, "Bertekad mempersatukan Nusantara."],
      ["Sriwijaya dikenal sebagai kerajaan …", ["maritim", "agraris", "pedalaman", "kecil"], 0, "Menguasai Selat Malaka."],
      ["Semboyan Bhinneka Tunggal Ika berasal dari kitab …", ["Sutasoma", "Negarakertagama", "Arjunawiwaha", "Pararaton"], 0, "Karya Mpu Tantular."],
      ["Teori yang menyatakan agama Hindu dibawa para pedagang disebut teori …", ["Waisya", "Brahmana", "Ksatria", "Arus Balik"], 0, "Waisya = kasta pedagang."]
    ]
  }
];

MATERI[7].indo = [
  {
    id: "deskripsi", t: "Teks Deskripsi", s: 1,
    sum: "Teks deskripsi menggambarkan objek (tempat, orang, benda, hewan) secara rinci sehingga pembaca seolah ikut melihat, mendengar, atau merasakannya.\nKuncinya ada pada detail yang melibatkan pancaindra.",
    pts: [
      "<b>Struktur:</b> identifikasi (gambaran umum objek), deskripsi bagian (rincian), simpulan/kesan (boleh ada, boleh tidak).",
      "<b>Kaidah kebahasaan:</b> kata sifat, kata konkret, majas, dan kalimat yang melibatkan pancaindra.",
      "<b>Kata konkret</b> bisa kamu tangkap dengan indra: dingin, harum, bergemuruh.",
      "<b>Majas perbandingan</b> seperti “ombaknya bergulung seperti gulungan permadani” bikin deskripsi lebih hidup.",
      "<b>Objektif vs subjektif:</b> deskripsi objektif menyampaikan apa adanya, subjektif menambahkan perasaan penulis."
    ],
    ex: { q: "Ubah kalimat “Pantainya bagus” menjadi kalimat deskripsi yang melibatkan indra.", a: "Contoh: “Pasir putihnya terasa hangat di telapak kaki, dan angin membawa bau asin laut.”" },
    q: [
      ["Bagian awal teks deskripsi yang memperkenalkan objek disebut …", ["identifikasi", "deskripsi bagian", "simpulan", "orientasi"], 0, "Identifikasi = gambaran umum."],
      ["Kalimat yang melibatkan indra pendengaran adalah …", ["Suara gemericik air terdengar dari balik batu.", "Air terjun itu tinggi sekali.", "Bunga melati berwarna putih.", "Batu itu terasa licin."], 0, "Gemericik = bunyi."],
      ["Ciri kebahasaan teks deskripsi adalah banyak memakai …", ["kata sifat", "kata perintah", "kata bilangan urutan", "kata kerja imperatif"], 0, "Untuk menggambarkan sifat objek."],
      ["“Matanya bersinar seperti bintang kejora.” Kalimat ini memakai majas …", ["perbandingan (simile)", "personifikasi", "hiperbola", "ironi"], 0, "Ada kata pembanding “seperti”."],
      ["Teks deskripsi bertujuan untuk …", ["menggambarkan objek secara rinci", "membujuk pembaca", "menjelaskan langkah-langkah", "menceritakan pengalaman"], 0, "Pembaca seolah melihat sendiri."]
    ]
  },
  {
    id: "narasi", t: "Teks Narasi dan Cerita Fantasi", s: 1,
    sum: "Teks narasi menceritakan rangkaian peristiwa berdasarkan urutan waktu. Cerita fantasi adalah narasi yang memuat hal-hal ajaib atau mustahil terjadi di dunia nyata, seperti pintu ke dunia lain atau hewan yang bisa bicara.",
    pts: [
      "<b>Struktur:</b> orientasi (pengenalan tokoh, latar), komplikasi (masalah muncul dan memuncak), resolusi (penyelesaian).",
      "<b>Unsur intrinsik:</b> tema, tokoh dan penokohan, alur, latar, sudut pandang, amanat.",
      "<b>Ciri fantasi:</b> ada keajaiban, latar bisa berpindah antar dunia, tokoh punya kekuatan khusus.",
      "<b>Kebahasaan:</b> kata kerja tindakan, kata keterangan waktu (kemudian, setelah itu), dialog, kalimat langsung.",
      "<b>Alur</b> bisa maju, mundur (flashback), atau campuran."
    ],
    ex: { q: "Penggalan: “Saat Theo membuka laci, sebuah peta bercahaya membawanya ke kota tanpa gravitasi.” Bagian ini termasuk unsur fantasi apa?", a: "Keajaiban dan latar yang berpindah ke dunia lain." },
    q: [
      ["Bagian cerita yang berisi masalah yang dihadapi tokoh adalah …", ["komplikasi", "orientasi", "resolusi", "koda"], 0, "Masalah memuncak di komplikasi."],
      ["Pesan moral dalam cerita disebut …", ["amanat", "tema", "alur", "latar"], 0, "Amanat."],
      ["Cerita yang memakai kata “aku” sebagai tokoh utama menggunakan sudut pandang …", ["orang pertama", "orang kedua", "orang ketiga serba tahu", "orang ketiga terbatas"], 0, "“Aku” = orang pertama."],
      ["Ciri utama cerita fantasi adalah …", ["ada unsur keajaiban", "berdasarkan fakta sejarah", "berisi langkah-langkah", "selalu berlatar sekolah"], 0, "Keajaiban/kemustahilan."],
      ["Alur yang menceritakan kejadian masa lalu di tengah cerita disebut alur …", ["mundur (flashback)", "maju", "lurus", "tunggal"], 0, "Kembali ke masa lalu."]
    ]
  },
  {
    id: "prosedur", t: "Teks Prosedur", s: 1,
    sum: "Teks prosedur berisi langkah-langkah untuk melakukan sesuatu supaya hasilnya benar. Contohnya resep masakan, cara memakai aplikasi, atau cara membuat kerajinan.\nUrutan langkahnya tidak boleh tertukar.",
    pts: [
      "<b>Struktur:</b> tujuan (judul), bahan/alat, langkah-langkah, penutup (opsional).",
      "<b>Kalimat perintah (imperatif):</b> potonglah, tuangkan, tekan.",
      "<b>Kata penghubung urutan:</b> pertama, kemudian, setelah itu, terakhir.",
      "<b>Kata teknis</b> sesuai bidangnya, misalnya “tumis” pada resep atau “klik” pada komputer.",
      "<b>Keterangan cara dan jumlah:</b> aduk perlahan, 200 ml air."
    ],
    ex: { q: "Susun langkah membuat teh: (a) tuang air panas, (b) siapkan gelas dan kantong teh, (c) tambahkan gula dan aduk, (d) masukkan kantong teh.", a: "b – d – a – c." },
    q: [
      ["Kalimat yang paling khas pada teks prosedur adalah kalimat …", ["perintah", "tanya", "seru", "langsung"], 0, "Imperatif: lakukan, tekan, aduk."],
      ["Kata yang menunjukkan urutan langkah adalah …", ["kemudian", "karena", "tetapi", "meskipun"], 0, "Konjungsi temporal."],
      ["Bagian teks prosedur yang memuat daftar keperluan adalah …", ["bahan dan alat", "tujuan", "langkah-langkah", "simpulan"], 0, "Disebut juga materials."],
      ["Contoh teks prosedur adalah …", ["cara mencuci tangan yang benar", "laporan hasil pengamatan kupu-kupu", "cerita Malin Kundang", "berita banjir"], 0, "Berisi langkah-langkah."],
      ["Mengapa urutan langkah teks prosedur penting?", ["Agar hasilnya sesuai tujuan", "Agar teks lebih panjang", "Agar pembaca terhibur", "Agar memakai banyak majas"], 0, "Langkah tertukar bisa membuat gagal."]
    ]
  },
  {
    id: "lho", t: "Teks Laporan Hasil Observasi", s: 2,
    sum: "Teks laporan hasil observasi (LHO) menyampaikan informasi umum tentang suatu objek berdasarkan pengamatan. Isinya faktual dan objektif, tanpa pendapat pribadi penulis.",
    pts: [
      "<b>Struktur:</b> pernyataan umum (definisi/klasifikasi), deskripsi bagian, simpulan (opsional).",
      "<b>Kebahasaan:</b> kata istilah (ilmiah), kalimat definisi (adalah, merupakan), kalimat fakta, kata kerja relasional.",
      "<b>Bedanya dengan teks deskripsi:</b> LHO bersifat umum (kucing pada umumnya), deskripsi bersifat khusus (kucing peliharaan Theo).",
      "<b>Sumber data:</b> pengamatan langsung, wawancara, studi pustaka.",
      "<b>Objektif:</b> hindari kata seperti “menurut saya” atau “sangat lucu”."
    ],
    ex: { q: "Kalimat mana yang cocok di LHO? (1) “Kupu-kupu merupakan serangga bersayap sisik.” (2) “Kupu-kupu di taman rumahku cantik sekali.”", a: "Kalimat (1). Kalimat (2) subjektif dan menunjuk objek khusus." },
    q: [
      ["Bagian awal teks LHO berisi …", ["pernyataan umum atau klasifikasi", "langkah-langkah", "orientasi tokoh", "argumentasi"], 0, "Definisi objek."],
      ["Ciri kebahasaan teks LHO adalah …", ["memakai istilah ilmiah", "banyak kalimat perintah", "memakai dialog", "memakai majas hiperbola"], 0, "Sifatnya ilmiah dan faktual."],
      ["Kalimat yang objektif adalah …", ["Kelelawar adalah mamalia yang aktif di malam hari.", "Kelelawar itu menyeramkan.", "Aku takut melihat kelelawar.", "Kelelawar paling jelek di dunia."], 0, "Berisi fakta."],
      ["Perbedaan LHO dan teks deskripsi terletak pada …", ["LHO umum, deskripsi khusus", "LHO fiksi, deskripsi nyata", "LHO pendek, deskripsi panjang", "LHO memakai dialog"], 0, "Cakupan objek."],
      ["Kata “merupakan” dalam LHO berfungsi sebagai kata kerja …", ["relasional", "material", "mental", "perintah"], 0, "Menghubungkan subjek dengan pelengkap."]
    ]
  },
  {
    id: "puisi-rakyat", t: "Puisi Rakyat: Pantun, Syair, Gurindam", s: 2,
    sum: "Puisi rakyat adalah puisi lama yang diwariskan turun-temurun secara lisan. Tiga jenis yang paling sering dipelajari di kelas 7 adalah pantun, syair, dan gurindam.\nCiri utamanya terletak pada jumlah baris, rima, dan isi.",
    pts: [
      "<b>Pantun:</b> 4 baris, rima a-b-a-b, baris 1–2 sampiran, baris 3–4 isi, 8–12 suku kata per baris.",
      "<b>Syair:</b> 4 baris, rima a-a-a-a, semua baris adalah isi, biasanya bercerita atau menasihati.",
      "<b>Gurindam:</b> 2 baris, rima a-a, baris pertama sebab/syarat, baris kedua akibat. Gurindam Dua Belas karya Raja Ali Haji terkenal.",
      "<b>Jenis pantun:</b> nasihat, jenaka, teka-teki, agama, kasih sayang.",
      "<b>Fungsi:</b> menasihati, menghibur, dan menjaga nilai budaya."
    ],
    ex: { q: "“Apabila terpelihara lidah, / niscaya dapat daripadanya faedah.” Ini termasuk puisi rakyat jenis apa?", a: "Gurindam: dua baris, rima a-a, baris pertama syarat dan baris kedua akibat." },
    q: [
      ["Rima pantun yang benar adalah …", ["a-b-a-b", "a-a-a-a", "a-a", "a-b-b-a"], 0, "Rima silang."],
      ["Bagian pantun yang berisi maksud adalah baris …", ["ketiga dan keempat", "pertama dan kedua", "pertama dan ketiga", "kedua dan keempat"], 0, "Baris 3–4 = isi."],
      ["Puisi lama yang semua barisnya merupakan isi dan berima a-a-a-a adalah …", ["syair", "pantun", "gurindam", "talibun"], 0, "Syair."],
      ["Gurindam terdiri dari … baris setiap bait.", ["2", "4", "6", "8"], 0, "Dua baris."],
      ["Penulis Gurindam Dua Belas adalah …", ["Raja Ali Haji", "Hamzah Fansuri", "Chairil Anwar", "Mpu Tantular"], 0, "Sastrawan Riau abad ke-19."]
    ]
  },
  {
    id: "surat", t: "Surat Pribadi dan Surat Dinas", s: 2,
    sum: "Surat adalah sarana komunikasi tertulis. Surat pribadi ditulis untuk teman atau keluarga dengan bahasa santai. Surat dinas ditulis untuk urusan resmi lembaga dengan bahasa baku.",
    pts: [
      "<b>Bagian surat pribadi:</b> tempat dan tanggal, salam pembuka, pembuka, isi, penutup, salam penutup, nama pengirim.",
      "<b>Bagian surat dinas:</b> kop surat, nomor, lampiran, hal (perihal), tanggal, alamat tujuan, salam pembuka, isi, penutup, tanda tangan, nama dan jabatan.",
      "<b>Bahasa surat dinas:</b> baku, lugas, sopan, tidak bertele-tele.",
      "<b>Salam pembuka resmi:</b> “Dengan hormat,”. <b>Salam penutup resmi:</b> “Hormat kami,”.",
      "<b>Penulisan tanggal</b> yang benar: Jakarta, 18 November 2026 (tanpa titik di akhir)."
    ],
    ex: { q: "Mana yang cocok untuk surat izin ke wali kelas: “Hai Bu, aku gak masuk ya” atau “Dengan hormat, saya memberitahukan bahwa …”?", a: "Yang kedua. Surat ke guru bersifat semi-resmi, jadi gunakan bahasa baku." },
    q: [
      ["Bagian surat dinas yang memuat identitas lembaga di bagian atas disebut …", ["kop surat", "perihal", "lampiran", "alamat tujuan"], 0, "Kepala surat."],
      ["Salam pembuka yang tepat untuk surat dinas adalah …", ["Dengan hormat,", "Hai, apa kabar?", "Salam kangen,", "Halo Pak!"], 0, "Baku dan sopan."],
      ["Bahasa yang digunakan dalam surat pribadi umumnya …", ["santai dan akrab", "baku dan kaku", "ilmiah", "teknis"], 0, "Untuk orang dekat."],
      ["Penulisan tanggal surat yang benar adalah …", ["Bandung, 5 Januari 2027", "Bandung 5-Januari-2027.", "bandung, 5 januari 2027", "Bandung, Januari 5 2027"], 0, "Nama kota, tanggal bulan tahun."],
      ["“Hal” pada surat dinas berisi …", ["pokok isi surat", "jumlah lampiran", "nama pengirim", "alamat lembaga"], 0, "Perihal."]
    ]
  }
];
