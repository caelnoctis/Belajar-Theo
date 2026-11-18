// KELAS 8 – tambahan bab dan soal. Pakai EXT(8, "idMapel", { add, more, order }), lihat js/subjects.js.

// ===================== MATEMATIKA =====================
EXT(8, "mtk", {
  more: {
    "pola-bilangan": {
      pts: [
        "<b>Barisan geometri:</b> rasio tetap (r). Un = a × r^(n − 1).",
        "<b>Jumlah n suku aritmetika:</b> Sn = n/2 × (2a + (n − 1)b).",
        "<b>Pola persegi panjang:</b> 2, 6, 12, 20, … rumus Un = n(n + 1)."
      ],
      ex2: { q: "Pada barisan aritmetika, U3 = 11 dan U7 = 23. Tentukan U15.", a: "Langkah 1: U7 − U3 = 4b, jadi 23 − 11 = 4b dan b = 3. Langkah 2: U3 = a + 2b → 11 = a + 6, jadi a = 5. Langkah 3: U15 = a + 14b = 5 + 42 = 47." },
      q: [
        ["Suku ke-8 dari barisan 3, 6, 12, 24, … adalah …", ["384", "192", "768", "48"], 0, "a = 3, r = 2: U8 = 3 × 2⁷ = 384."],
        ["Jumlah 20 suku pertama barisan 2, 5, 8, 11, … adalah …", ["610", "590", "620", "400"], 0, "S20 = 10 × (4 + 19 × 3) = 10 × 61 = 610."],
        ["Suku ke-5 pola persegi panjang 2, 6, 12, 20, … adalah …", ["30", "25", "28", "36"], 0, "5 × 6 = 30."],
        ["Di sebuah gedung, baris pertama berisi 12 kursi dan setiap baris berikutnya bertambah 2 kursi. Banyak kursi di baris ke-15 adalah …", ["40", "42", "38", "30"], 0, "U15 = 12 + 14 × 2 = 40."],
        ["Dua suku berikutnya dari 1, 1, 2, 3, 5, 8, … adalah …", ["13 dan 21", "11 dan 14", "13 dan 18", "12 dan 20"], 0, "Pola Fibonacci: tiap suku = jumlah dua suku sebelumnya."]
      ]
    },
    "kartesius": {
      pts: [
        "<b>Garis sejajar sumbu-y</b> punya nilai x yang sama untuk semua titiknya.",
        "<b>Pergeseran titik:</b> ke kanan tambah x, ke kiri kurangi x, ke atas tambah y, ke bawah kurangi y.",
        "<b>Titik pada sumbu-y</b> punya koordinat x = 0, misalnya (0, −5)."
      ],
      ex2: { q: "Titik A(2, −1) digeser 3 satuan ke kiri lalu 5 satuan ke atas. Tentukan posisi akhirnya dan kuadrannya.", a: "Langkah 1: ke kiri 3 berarti x = 2 − 3 = −1. Langkah 2: ke atas 5 berarti y = −1 + 5 = 4. Langkah 3: titik akhir (−1, 4). x negatif dan y positif, jadi di kuadran II." },
      q: [
        ["Jarak titik P(4, −7) ke sumbu-x adalah …", ["7 satuan", "4 satuan", "11 satuan", "3 satuan"], 0, "Jarak ke sumbu-x = |y| = 7."],
        ["Titik A(1, 2), B(1, 6), dan C(1, −3) terletak pada garis yang …", ["sejajar sumbu-y", "sejajar sumbu-x", "berimpit dengan sumbu-x", "melalui titik asal"], 0, "Nilai x ketiganya sama, yaitu 1."],
        ["Posisi titik C(5, 1) terhadap titik D(2, 4) adalah …", ["3 satuan ke kanan dan 3 satuan ke bawah", "3 satuan ke kiri dan 3 satuan ke atas", "7 satuan ke kanan dan 5 satuan ke atas", "2 satuan ke kanan dan 4 satuan ke bawah"], 0, "x: 5 − 2 = 3 (kanan), y: 1 − 4 = −3 (bawah)."],
        ["Persegi ABCD dengan A(1, 1), B(4, 1), dan C(4, 4). Koordinat titik D adalah …", ["(1, 4)", "(4, 1)", "(1, 1)", "(−1, 4)"], 0, "D sejajar A secara tegak dan sejajar C secara mendatar."],
        ["Titik di kuadran III yang berjarak 3 satuan dari sumbu-x dan 2 satuan dari sumbu-y adalah …", ["(−2, −3)", "(−3, −2)", "(2, −3)", "(−2, 3)"], 0, "|x| = 2, |y| = 3, keduanya negatif."]
      ]
    },
    "fungsi": {
      pts: [
        "<b>Korespondensi satu-satu:</b> setiap anggota A berpasangan dengan tepat satu anggota B, dan n(A) = n(B).",
        "<b>Grafik fungsi linear</b> f(x) = ax + b berbentuk garis lurus.",
        "<b>Banyak korespondensi satu-satu</b> dari himpunan dengan n anggota = n! (contoh 3! = 6)."
      ],
      ex2: { q: "Fungsi f(x) = ax + b dengan f(1) = 5 dan f(3) = 11. Tentukan f(6).", a: "Langkah 1: a + b = 5 dan 3a + b = 11. Langkah 2: kurangkan, 2a = 6, jadi a = 3. Langkah 3: b = 5 − 3 = 2, jadi f(x) = 3x + 2. Langkah 4: f(6) = 18 + 2 = 20." },
      q: [
        ["A = {1, 2, 3} dan f(x) = x + 4. Range fungsi f adalah …", ["{5, 6, 7}", "{1, 2, 3}", "{4, 5, 6}", "{5, 7, 9}"], 0, "f(1) = 5, f(2) = 6, f(3) = 7."],
        ["Relasi “kurang dari” dari A = {2, 3} ke B = {1, 4} dalam pasangan berurutan adalah …", ["{(2, 4), (3, 4)}", "{(2, 1), (3, 1)}", "{(2, 1), (3, 4)}", "{(4, 2), (4, 3)}"], 0, "2 < 4 dan 3 < 4."],
        ["Banyak korespondensi satu-satu dari A = {a, b, c} ke B = {1, 2, 3} adalah …", ["6", "9", "3", "27"], 0, "3! = 3 × 2 × 1 = 6."],
        ["Tarif taksi dinyatakan f(x) = 4.000x + 7.000 dengan x = jarak (km). Biaya perjalanan 8 km adalah …", ["Rp39.000", "Rp32.000", "Rp36.000", "Rp43.000"], 0, "32.000 + 7.000 = 39.000."],
        ["Diketahui f(x) = 10 − 3x. Nilai f(−2) adalah …", ["16", "4", "−16", "13"], 0, "10 − 3(−2) = 10 + 6 = 16."]
      ]
    },
    "garis-lurus": {
      pts: [
        "<b>Garis melalui titik asal:</b> persamaannya y = mx.",
        "<b>Garis mendatar</b> (y = k) bergradien 0. Garis tegak (x = k) tidak punya gradien.",
        "<b>Titik potong sumbu:</b> dengan sumbu-x saat y = 0, dengan sumbu-y saat x = 0."
      ],
      ex2: { q: "Tentukan persamaan garis yang melalui (2, 4) dan sejajar garis y = 3x − 5.", a: "Langkah 1: garis sejajar punya gradien sama, jadi m = 3. Langkah 2: y − 4 = 3(x − 2). Langkah 3: y − 4 = 3x − 6. Langkah 4: y = 3x − 2." },
      q: [
        ["Titik potong garis 2x + 5y = 10 dengan sumbu-x adalah …", ["(5, 0)", "(0, 2)", "(2, 0)", "(0, 5)"], 0, "y = 0 → 2x = 10 → x = 5."],
        ["Persamaan garis melalui (1, 2) dengan gradien 3 adalah …", ["y = 3x − 1", "y = 3x + 2", "y = 3x + 1", "y = 2x + 3"], 0, "y − 2 = 3(x − 1) → y = 3x − 1."],
        ["Garis y = 5 memiliki gradien …", ["0", "5", "1", "tidak terdefinisi"], 0, "Garis mendatar."],
        ["Garis k melalui (0, 0) dan (4, 2). Persamaan garis k adalah …", ["y = ½x", "y = 2x", "y = 4x", "y = x + 2"], 0, "m = 2/4 = ½ dan melalui titik asal."],
        ["Biaya sewa sepeda ditulis y = 5.000x + 10.000 (x = lama sewa dalam jam). Gradien garis ini menyatakan …", ["biaya tambahan per jam", "biaya awal", "lama sewa", "total biaya"], 0, "Gradien = perubahan y untuk setiap kenaikan 1 satuan x."]
      ]
    },
    "spldv": {
      s: 1,
      pts: [
        "<b>Ciri SPLDV:</b> ada dua variabel, misalnya x dan y, dengan pangkat tertinggi 1.",
        "<b>Cek jawaban:</b> masukkan nilai x dan y ke kedua persamaan. Hasilnya harus benar semua.",
        "<b>Dua garis sejajar</b> tidak berpotongan, jadi SPLDV-nya tidak punya penyelesaian."
      ],
      ex2: { q: "Umur ayah 3 kali umur Theo. Jumlah umur mereka 52 tahun. Berapa umur masing-masing?", a: "Langkah 1: misalkan umur ayah a dan umur Theo t, jadi a = 3t dan a + t = 52. Langkah 2: substitusi, 3t + t = 52, 4t = 52, t = 13. Langkah 3: a = 3 × 13 = 39. Umur Theo 13 tahun, ayah 39 tahun." },
      q: [
        ["Penyelesaian dari y = 2x dan x + y = 12 adalah …", ["x = 4, y = 8", "x = 8, y = 4", "x = 6, y = 6", "x = 3, y = 9"], 0, "x + 2x = 12 → x = 4, y = 8."],
        ["Jika 2x + 3y = 13 dan x − y = −1, nilai x + y adalah …", ["5", "6", "4", "7"], 0, "x = y − 1 → 2y − 2 + 3y = 13 → y = 3, x = 2."],
        ["Harga 3 kg apel dan 2 kg jeruk Rp80.000. Harga 1 kg apel dan 2 kg jeruk Rp40.000. Harga 1 kg apel adalah …", ["Rp20.000", "Rp10.000", "Rp15.000", "Rp25.000"], 0, "Kurangkan: 2 kg apel = Rp40.000."],
        ["Di parkiran ada 30 kendaraan berupa motor dan mobil. Jumlah rodanya 80. Banyak mobil adalah …", ["10", "20", "15", "12"], 0, "m + b = 30, 2m + 4b = 80 → 2b = 20 → b = 10."],
        ["Manakah yang merupakan persamaan linear dua variabel?", ["3x − 2y = 7", "x² + y = 4", "2x + 5 = 9", "xy = 6"], 0, "Dua variabel, masing-masing berpangkat 1."]
      ]
    },
    "pythagoras": {
      pts: [
        "<b>Mencari sisi tegak:</b> a² = c² − b².",
        "<b>Jarak dua titik:</b> d = √((x₂ − x₁)² + (y₂ − y₁)²), turunan dari teorema Pythagoras.",
        "<b>Kelipatan tripel</b> tetap tripel, misalnya 9-12-15 dan 10-24-26."
      ],
      ex2: { q: "Tentukan jarak titik A(1, 2) dan B(7, 10).", a: "Langkah 1: selisih x = 7 − 1 = 6, selisih y = 10 − 2 = 8. Langkah 2: d² = 6² + 8² = 36 + 64 = 100. Langkah 3: d = √100 = 10 satuan." },
      q: [
        ["Layar TV berukuran 24 inci × 18 inci. Panjang diagonalnya …", ["30 inci", "42 inci", "36 inci", "32 inci"], 0, "√(576 + 324) = √900 = 30."],
        ["Segitiga siku-siku 30°-60°-90° dengan sisi terpendek 4 cm. Panjang sisi miringnya …", ["8 cm", "4√3 cm", "4√2 cm", "6 cm"], 0, "Sisi miring = 2 × sisi terpendek."],
        ["Seorang anak berjalan 12 m ke timur lalu 5 m ke utara. Jarak terpendek dari titik awal adalah …", ["13 m", "17 m", "7 m", "15 m"], 0, "√(144 + 25) = √169 = 13."],
        ["Jarak titik P(−2, 1) dan Q(1, 5) adalah …", ["5 satuan", "7 satuan", "4 satuan", "25 satuan"], 0, "√(3² + 4²) = 5."],
        ["Segitiga dengan sisi 6 cm, 7 cm, dan 9 cm termasuk segitiga …", ["lancip", "siku-siku", "tumpul", "sama kaki"], 0, "9² = 81 < 6² + 7² = 85."]
      ]
    },
    "bangun-ruang-datar": {
      pts: [
        "<b>Kubus dan balok</b> sama-sama punya 6 sisi, 12 rusuk, dan 8 titik sudut.",
        "<b>Limas segi-n</b> punya n + 1 sisi dan 2n rusuk. <b>Prisma segi-n</b> punya n + 2 sisi dan 3n rusuk.",
        "<b>Satuan volume:</b> 1 liter = 1 dm³ = 1.000 cm³."
      ],
      ex2: { q: "Prisma tegak beralas segitiga siku-siku dengan sisi 6 cm, 8 cm, dan 10 cm. Tinggi prisma 15 cm. Tentukan volume dan luas permukaannya.", a: "Langkah 1: luas alas = ½ × 6 × 8 = 24 cm². Langkah 2: V = 24 × 15 = 360 cm³. Langkah 3: keliling alas = 6 + 8 + 10 = 24 cm. Langkah 4: L = 2 × 24 + 24 × 15 = 48 + 360 = 408 cm²." },
      q: [
        ["Kubus bervolume 343 cm³. Panjang rusuknya …", ["7 cm", "6 cm", "8 cm", "49 cm"], 0, "7³ = 343."],
        ["Luas permukaan balok 10 cm × 6 cm × 4 cm adalah …", ["248 cm²", "240 cm²", "124 cm²", "480 cm²"], 0, "2(60 + 40 + 24) = 248."],
        ["Banyak rusuk limas segilima adalah …", ["10", "6", "15", "5"], 0, "2n = 2 × 5 = 10."],
        ["Bak mandi berbentuk kubus dengan rusuk 80 cm diisi penuh. Volume airnya …", ["512 liter", "640 liter", "51,2 liter", "5.120 liter"], 0, "80³ = 512.000 cm³ = 512 liter."],
        ["Limas persegi dengan sisi alas 10 cm dan tinggi segitiga sisi tegak 13 cm. Luas permukaannya …", ["360 cm²", "260 cm²", "460 cm²", "100 cm²"], 0, "100 + 4 × ½ × 10 × 13 = 100 + 260 = 360."]
      ]
    }
  },
  add: [
    {
      id: "lingkaran", t: "Lingkaran", s: 2,
      sum: "Lingkaran adalah kumpulan titik yang jaraknya sama dari satu titik pusat. Jarak itu disebut jari-jari. Roda, jam dinding, dan tutup gelas di sekitarmu berbentuk lingkaran.\nDi bab ini kamu belajar unsur-unsur lingkaran, menghitung keliling dan luas, serta panjang busur dan luas juring. Kuncinya ada pada perbandingan sudut pusat dengan 360°.",
      pts: [
        "<b>Unsur lingkaran:</b> titik pusat, jari-jari (r), diameter (d = 2r), busur, tali busur, juring, tembereng, apotema.",
        "<b>Keliling:</b> K = 2πr = πd. Pakai π = 22/7 kalau r kelipatan 7, selain itu π = 3,14.",
        "<b>Luas:</b> L = πr².",
        "<b>Panjang busur:</b> (sudut pusat / 360°) × 2πr.",
        "<b>Luas juring:</b> (sudut pusat / 360°) × πr².",
        "<b>Sudut keliling</b> besarnya setengah sudut pusat yang menghadap busur yang sama."
      ],
      ex: { q: "Sebuah taman berbentuk lingkaran berdiameter 28 m. Tentukan keliling dan luasnya.", a: "r = 14 m. K = 22/7 × 28 = 88 m. L = 22/7 × 14 × 14 = 616 m²." },
      tip: "Hafalkan pasangan jari-jari 7, 14, 21 dengan π = 22/7 supaya hitunganmu cepat dan hasilnya bulat.",
      q: [
        ["Keliling lingkaran berjari-jari 7 cm adalah …", ["44 cm", "22 cm", "154 cm", "49 cm"], 0, "2 × 22/7 × 7 = 44."],
        ["Luas lingkaran berjari-jari 10 cm (π = 3,14) adalah …", ["314 cm²", "62,8 cm²", "31,4 cm²", "628 cm²"], 0, "3,14 × 100 = 314."],
        ["Daerah yang dibatasi dua jari-jari dan satu busur disebut …", ["juring", "tembereng", "apotema", "tali busur"], 0, "Juring."],
        ["Garis yang menghubungkan dua titik pada lingkaran tanpa melalui pusat disebut …", ["tali busur", "jari-jari", "diameter", "apotema"], 0, "Tali busur."],
        ["Sudut pusat 90° pada lingkaran berjari-jari 14 cm. Panjang busurnya …", ["22 cm", "44 cm", "88 cm", "154 cm"], 0, "K = 88 cm, busur = ¼ × 88 = 22."],
        ["Luas juring dengan sudut pusat 60° dan jari-jari 21 cm adalah …", ["231 cm²", "1.386 cm²", "462 cm²", "66 cm²"], 0, "⅙ × 22/7 × 441 = ⅙ × 1.386 = 231."],
        ["Sudut pusat AOB = 100°. Sudut keliling ACB yang menghadap busur AB adalah …", ["50°", "100°", "200°", "80°"], 0, "Setengah sudut pusat."],
        ["Roda sepeda berdiameter 70 cm berputar 100 kali. Jarak yang ditempuh …", ["220 m", "22 m", "2.200 m", "154 m"], 0, "K = 22/7 × 70 = 220 cm. 100 × 220 cm = 22.000 cm = 220 m."],
        ["Keliling sebuah lingkaran 62,8 cm (π = 3,14). Jari-jarinya …", ["10 cm", "20 cm", "5 cm", "31,4 cm"], 0, "2 × 3,14 × r = 62,8 → r = 10."],
        ["Sudut keliling yang menghadap diameter besarnya …", ["90°", "180°", "45°", "60°"], 0, "Sudut pusatnya 180°, setengahnya 90°."]
      ]
    },
    {
      id: "statistika", t: "Statistika", s: 2,
      sum: "Statistika membantu kamu mengumpulkan, menyajikan, dan membaca data. Data nilai ulangan, tinggi badan, atau jumlah pengunjung bisa diringkas menjadi satu angka yang mewakili.\nUkuran pemusatan data ada tiga: mean, median, dan modus. Ukuran penyebaran, seperti jangkauan dan kuartil, menunjukkan seberapa jauh data tersebar.",
      pts: [
        "<b>Mean (rata-rata):</b> jumlah semua data dibagi banyak data.",
        "<b>Median:</b> nilai tengah setelah data diurutkan. Kalau banyak data genap, median = rata-rata dua data tengah.",
        "<b>Modus:</b> data yang paling sering muncul.",
        "<b>Jangkauan:</b> data terbesar dikurangi data terkecil.",
        "<b>Kuartil:</b> Q1 (kuartil bawah), Q2 = median, Q3 (kuartil atas). Jangkauan interkuartil = Q3 − Q1.",
        "<b>Penyajian data:</b> tabel, diagram batang, diagram garis, diagram lingkaran."
      ],
      ex: { q: "Nilai 7 siswa: 70, 85, 60, 90, 85, 75, 80. Tentukan mean, median, dan modus.", a: "Urutkan: 60, 70, 75, 80, 85, 85, 90. Jumlah = 545, mean = 545 : 7 ≈ 77,9. Median = data ke-4 = 80. Modus = 85." },
      tip: "Selalu urutkan data dulu sebelum mencari median dan kuartil. Lupa mengurutkan adalah kesalahan paling sering.",
      q: [
        ["Rata-rata dari 6, 8, 7, 9, 10 adalah …", ["8", "7", "9", "40"], 0, "40 : 5 = 8."],
        ["Median dari 4, 9, 2, 7, 5 adalah …", ["5", "7", "2", "9"], 0, "Urutkan: 2, 4, 5, 7, 9. Data tengahnya 5."],
        ["Modus dari 3, 5, 5, 6, 7, 7, 7, 8 adalah …", ["7", "5", "6", "8"], 0, "7 muncul tiga kali."],
        ["Median dari 10, 12, 14, 16, 18, 20 adalah …", ["15", "14", "16", "17"], 0, "(14 + 16) : 2 = 15."],
        ["Jangkauan dari 15, 22, 9, 30, 18 adalah …", ["21", "30", "9", "15"], 0, "30 − 9 = 21."],
        ["Rata-rata nilai 5 siswa 80. Seorang siswa baru bernilai 92 bergabung. Rata-ratanya sekarang …", ["82", "86", "81", "84"], 0, "(400 + 92) : 6 = 82."],
        ["Diagram batang penjualan roti: Senin 20, Selasa 35, Rabu 25, Kamis 40. Hari dengan penjualan paling sedikit adalah …", ["Senin", "Selasa", "Rabu", "Kamis"], 0, "20 adalah nilai terkecil."],
        ["Data terurut: 2, 4, 5, 6, 8, 9, 11. Kuartil bawahnya (Q1) adalah …", ["4", "5", "6", "9"], 0, "Median 6. Separuh bawah 2, 4, 5, tengahnya 4."],
        ["Pada diagram lingkaran, 25% siswa memilih basket. Besar sudut juring basket adalah …", ["90°", "25°", "45°", "120°"], 0, "25% × 360° = 90°."],
        ["Rata-rata 4 bilangan adalah 15. Tiga di antaranya 12, 14, dan 16. Bilangan keempat …", ["18", "15", "20", "17"], 0, "4 × 15 = 60, 60 − 42 = 18."]
      ]
    }
  ],
  order: ["pola-bilangan", "kartesius", "fungsi", "garis-lurus", "spldv", "pythagoras", "lingkaran", "bangun-ruang-datar", "statistika"]
});

// ===================== IPA =====================
EXT(8, "ipa", {
  more: {
    "sistem-gerak": {
      pts: [
        "<b>Rangka aksial</b> (tengkorak, tulang belakang, rusuk) dan <b>rangka apendikular</b> (tulang anggota gerak).",
        "<b>Osifikasi:</b> proses pembentukan tulang keras dari tulang rawan, dibantu sel osteoblas.",
        "<b>Menjaga kesehatan rangka:</b> makanan berkalsium dan vitamin D, olahraga teratur, posisi duduk tegak."
      ],
      ex2: { q: "Saat kamu mengangkat tas dengan menekuk siku, otot mana yang berkontraksi dan mana yang berelaksasi?", a: "Langkah 1: gerak menekuk siku disebut fleksi. Langkah 2: otot bisep (lengan atas bagian depan) berkontraksi dan memendek, menarik tulang lengan bawah ke atas. Langkah 3: otot trisep (bagian belakang) berelaksasi. Langkah 4: karena kerjanya berlawanan, bisep dan trisep disebut otot antagonis." },
      q: [
        ["Sendi pada bahu termasuk sendi …", ["peluru", "engsel", "putar", "geser"], 0, "Bisa bergerak ke segala arah."],
        ["Tulang rusuk termasuk rangka …", ["aksial", "apendikular", "anggota gerak atas", "anggota gerak bawah"], 0, "Bagian dari sumbu tubuh."],
        ["Sel pembentuk tulang keras adalah …", ["osteoblas", "eritrosit", "neuron", "leukosit"], 0, "Osteoblas."],
        ["Kebiasaan duduk membungkuk dapat menyebabkan tulang punggung melengkung ke belakang yang disebut …", ["kifosis", "lordosis", "osteoporosis", "rakhitis"], 0, "Kifosis (bungkuk)."],
        ["Kekurangan vitamin D pada anak dapat membuat tulang kaki berbentuk O atau X. Kelainan ini disebut …", ["rakhitis", "skoliosis", "artritis", "fraktur"], 0, "Rakhitis."]
      ]
    },
    "pesawat-sederhana": {
      pts: [
        "<b>Rumus tuas:</b> beban × lengan beban = kuasa × lengan kuasa.",
        "<b>Roda berporos:</b> setir mobil, gerinda, roda sepeda. KM = jari-jari roda / jari-jari poros.",
        "<b>Pesawat sederhana tidak mengurangi usaha</b>, tetapi memperkecil gaya atau mengubah arahnya."
      ],
      ex2: { q: "Batu seberat 600 N diungkit dengan linggis. Lengan beban 0,5 m dan lengan kuasa 1,5 m. Berapa gaya yang diperlukan dan berapa keuntungan mekanisnya?", a: "Langkah 1: w × lb = F × lk → 600 × 0,5 = F × 1,5. Langkah 2: 300 = 1,5F, jadi F = 200 N. Langkah 3: KM = lk / lb = 1,5 / 0,5 = 3." },
      q: [
        ["Beban 400 N diangkat dengan satu katrol bebas. Gaya minimal yang diperlukan …", ["200 N", "400 N", "800 N", "100 N"], 0, "KM katrol bebas = 2."],
        ["Pinset termasuk tuas jenis …", ["ketiga", "pertama", "kedua", "katrol"], 0, "Kuasa di tengah."],
        ["Usaha 600 J dilakukan dalam 20 sekon. Dayanya …", ["30 W", "12.000 W", "580 W", "620 W"], 0, "P = W/t = 600 : 20."],
        ["Tuas dengan lengan kuasa 2 m dan lengan beban 0,5 m dipakai mengangkat beban 1.000 N. Gaya kuasanya …", ["250 N", "500 N", "2.000 N", "4.000 N"], 0, "1.000 × 0,5 = F × 2 → F = 250 N."],
        ["Jalan di pegunungan dibuat berkelok-kelok karena menerapkan prinsip …", ["bidang miring", "katrol", "roda berporos", "tuas"], 0, "Lintasan lebih panjang, gaya lebih kecil."]
      ]
    },
    "fotosintesis": {
      pts: [
        "<b>Jaringan tumbuhan:</b> meristem (terus membelah), epidermis (pelindung), parenkim (pengisi), kolenkim dan sklerenkim (penguat).",
        "<b>Faktor fotosintesis:</b> intensitas cahaya, kadar CO₂, air, suhu, dan klorofil.",
        "<b>Transpirasi:</b> penguapan air lewat stomata yang membantu menarik air dari akar."
      ],
      ex2: { q: "Dalam percobaan Ingenhousz, tanaman Hydrilla dalam air diletakkan di tempat terang dan di tempat gelap. Di tempat terang muncul banyak gelembung. Apa kesimpulannya?", a: "Langkah 1: gelembung itu adalah gas oksigen hasil fotosintesis. Langkah 2: di tempat gelap gelembung sedikit atau tidak ada karena cahaya kurang. Langkah 3: kesimpulannya, fotosintesis menghasilkan oksigen dan membutuhkan cahaya." },
      q: [
        ["Bagian sel tumbuhan tempat fotosintesis berlangsung adalah …", ["kloroplas", "mitokondria", "vakuola", "ribosom"], 0, "Mengandung klorofil."],
        ["Jaringan yang sel-selnya terus membelah dan terdapat di ujung akar serta batang adalah …", ["meristem", "epidermis", "parenkim", "xilem"], 0, "Jaringan muda."],
        ["Hydrilla diletakkan di bawah lampu yang makin terang. Yang terjadi pada gelembung oksigen …", ["makin banyak", "makin sedikit", "tetap", "hilang"], 0, "Cahaya naik, laju fotosintesis naik."],
        ["Daun yang terkena cahaya ditetesi iodin dan berubah biru kehitaman. Ini menunjukkan daun mengandung …", ["amilum", "protein", "lemak", "oksigen"], 0, "Uji amilum."],
        ["Floem berfungsi mengangkut …", ["hasil fotosintesis", "air dari akar", "oksigen ke akar", "mineral dari tanah"], 0, "Zat makanan ke seluruh tubuh."]
      ]
    },
    "pencernaan": {
      s: 1,
      pts: [
        "<b>Zat gizi:</b> karbohidrat (energi), protein (pertumbuhan), lemak (cadangan energi), vitamin, mineral, air.",
        "<b>Kelenjar pencernaan:</b> hati menghasilkan empedu (mengemulsi lemak), pankreas menghasilkan amilase, tripsin, dan lipase.",
        "<b>Uji makanan:</b> iodin untuk amilum, Benedict untuk glukosa, biuret untuk protein, kertas buram untuk lemak."
      ],
      ex2: { q: "Roti yang kamu kunyah lama di mulut terasa manis. Mengapa?", a: "Langkah 1: roti mengandung amilum (karbohidrat kompleks) yang tidak terasa manis. Langkah 2: air liur mengandung enzim ptialin (amilase). Langkah 3: ptialin memecah amilum menjadi maltosa, sejenis gula. Langkah 4: maltosa terasa manis, jadi makin lama dikunyah, roti makin manis." },
      q: [
        ["Getah empedu dihasilkan oleh …", ["hati", "pankreas", "lambung", "usus besar"], 0, "Disimpan di kantong empedu."],
        ["Zat makanan yang berfungsi utama sebagai sumber energi adalah …", ["karbohidrat", "vitamin", "mineral", "air"], 0, "Sumber energi utama."],
        ["Makanan ditetesi Benedict lalu dipanaskan dan berubah merah bata. Makanan itu mengandung …", ["glukosa", "protein", "lemak", "amilum"], 0, "Uji gula."],
        ["Enzim pepsin mengubah protein menjadi …", ["pepton", "maltosa", "asam lemak", "glukosa"], 0, "Terjadi di lambung."],
        ["Peradangan pada umbai cacing disebut …", ["apendisitis", "gastritis", "diare", "sembelit"], 0, "Usus buntu."]
      ]
    },
    "peredaran-darah": {
      s: 1,
      pts: [
        "<b>Golongan darah sistem ABO:</b> A, B, AB, O. Golongan O donor universal, AB resipien universal.",
        "<b>Tekanan darah normal</b> orang dewasa sekitar 120/80 mmHg.",
        "<b>Pembekuan darah:</b> trombosit pecah, protrombin menjadi trombin, fibrinogen menjadi benang fibrin."
      ],
      ex2: { q: "Urutkan perjalanan darah pada peredaran darah kecil, mulai dari bilik kanan.", a: "Langkah 1: darah kaya CO₂ dari bilik kanan dipompa lewat arteri pulmonalis. Langkah 2: di paru-paru CO₂ dilepas dan O₂ diikat. Langkah 3: darah kaya O₂ kembali lewat vena pulmonalis. Langkah 4: darah masuk ke serambi kiri." },
      q: [
        ["Pembuluh yang membawa darah kaya oksigen dari paru-paru ke jantung adalah …", ["vena pulmonalis", "arteri pulmonalis", "aorta", "vena kava"], 0, "Satu-satunya vena yang kaya O₂."],
        ["Golongan darah yang dapat mendonorkan darah ke semua golongan adalah …", ["O", "AB", "A", "B"], 0, "Donor universal."],
        ["Keping darah (trombosit) berfungsi dalam …", ["pembekuan darah", "mengangkut oksigen", "melawan kuman", "mengangkut sari makanan"], 0, "Trombosit."],
        ["Pembuluh darah terbesar yang keluar dari bilik kiri adalah …", ["aorta", "vena kava", "kapiler", "arteri pulmonalis"], 0, "Aorta."],
        ["Penyakit darah sukar membeku yang bersifat menurun adalah …", ["hemofilia", "anemia", "leukemia", "hipertensi"], 0, "Hemofilia."]
      ]
    },
    "tekanan": {
      pts: [
        "<b>Rumus Pascal:</b> F₁/A₁ = F₂/A₂.",
        "<b>Gaya apung:</b> Fa = ρ × g × V (V = volume benda yang tercelup).",
        "<b>Kondisi benda:</b> terapung (ρ benda < ρ zat cair), melayang (sama), tenggelam (lebih besar)."
      ],
      ex2: { q: "Dongkrak hidrolik punya pengisap kecil 10 cm² dan pengisap besar 500 cm². Berapa gaya di pengisap kecil untuk mengangkat mobil 10.000 N?", a: "Langkah 1: F₁/A₁ = F₂/A₂. Langkah 2: F₁/10 = 10.000/500 = 20. Langkah 3: F₁ = 20 × 10 = 200 N." },
      q: [
        ["Balok berat 600 N dengan alas 3 m² diletakkan di lantai. Tekanannya …", ["200 Pa", "1.800 Pa", "603 Pa", "597 Pa"], 0, "600 : 3 = 200."],
        ["Benda yang massa jenisnya lebih kecil dari massa jenis air akan …", ["terapung", "tenggelam", "melayang", "larut"], 0, "ρ benda < ρ air."],
        ["Penyelam berada di kedalaman 5 m (ρ air = 1.000 kg/m³, g = 10 m/s²). Tekanan hidrostatisnya …", ["50.000 Pa", "5.000 Pa", "500 Pa", "500.000 Pa"], 0, "1.000 × 10 × 5."],
        ["Pengisap kecil 0,02 m² diberi gaya 50 N. Pengisap besar 0,4 m² menghasilkan gaya …", ["1.000 N", "100 N", "2,5 N", "500 N"], 0, "50 × 0,4 / 0,02 = 1.000."],
        ["Telinga terasa sakit saat menyelam makin dalam karena …", ["tekanan hidrostatis makin besar", "tekanan udara turun", "air makin dingin", "massa jenis air berkurang"], 0, "Tekanan bertambah seiring kedalaman."]
      ]
    },
    "getaran-bunyi": {
      pts: [
        "<b>Amplitudo</b> adalah simpangan terjauh. Makin besar amplitudo, makin keras bunyi.",
        "<b>Tinggi rendah nada</b> ditentukan frekuensi. Makin besar frekuensi, makin tinggi nada.",
        "<b>Mengukur kedalaman laut:</b> d = v × t / 2, karena bunyi pergi lalu kembali."
      ],
      ex2: { q: "Kapal memancarkan bunyi ke dasar laut dan pantulannya diterima 4 sekon kemudian. Cepat rambat bunyi di air 1.500 m/s. Berapa kedalaman laut?", a: "Langkah 1: bunyi menempuh jarak pergi-pulang, jadi d = v × t / 2. Langkah 2: d = 1.500 × 4 / 2. Langkah 3: d = 3.000 m." },
      q: [
        ["Periode getaran yang frekuensinya 50 Hz adalah …", ["0,02 s", "50 s", "0,5 s", "2 s"], 0, "T = 1/f = 1/50."],
        ["Pantulan bunyi kapal diterima 2 sekon kemudian, v = 1.400 m/s. Kedalaman laut …", ["1.400 m", "2.800 m", "700 m", "5.600 m"], 0, "1.400 × 2 / 2."],
        ["Bunyi makin keras jika …", ["amplitudonya makin besar", "frekuensinya makin kecil", "periodenya makin kecil", "mediumnya hampa"], 0, "Kuat bunyi bergantung amplitudo."],
        ["Kelelawar menggunakan bunyi ultrasonik untuk …", ["menentukan lokasi mangsa dan benda", "berkomunikasi dengan manusia", "menghangatkan tubuh", "menghasilkan cahaya"], 0, "Ekolokasi."],
        ["Gelombang bercepat rambat 340 m/s dan berfrekuensi 170 Hz memiliki panjang gelombang …", ["2 m", "0,5 m", "510 m", "57.800 m"], 0, "λ = v/f = 340 : 170."]
      ]
    }
  },
  add: [
    {
      id: "pernapasan", t: "Sistem Pernapasan Manusia", s: 2,
      sum: "Setiap sel di tubuhmu butuh oksigen untuk mengubah makanan menjadi energi. Sistem pernapasan bertugas memasukkan oksigen dan mengeluarkan karbon dioksida.\nUdara masuk lewat hidung, lalu menuju paru-paru. Di alveolus, oksigen berpindah ke darah dan karbon dioksida keluar dari darah. Pertukaran ini terjadi secara difusi.",
      pts: [
        "<b>Saluran pernapasan:</b> hidung → faring → laring → trakea → bronkus → bronkiolus → alveolus.",
        "<b>Alveolus:</b> gelembung paru-paru berdinding tipis, tempat pertukaran O₂ dan CO₂.",
        "<b>Pernapasan dada:</b> otot antartulang rusuk berkontraksi, rongga dada membesar, udara masuk.",
        "<b>Pernapasan perut:</b> otot diafragma berkontraksi dan mendatar, rongga dada membesar.",
        "<b>Volume udara:</b> udara tidal (napas biasa) sekitar 500 mL. Kapasitas total paru-paru orang dewasa sekitar 4.500–5.000 mL.",
        "<b>Gangguan:</b> asma (penyempitan saluran), bronkitis (radang bronkus), pneumonia (radang paru), TBC (bakteri Mycobacterium tuberculosis)."
      ],
      ex: { q: "Mengapa kamu dianjurkan bernapas lewat hidung, bukan lewat mulut?", a: "Di hidung ada rambut dan lendir yang menyaring debu, serta pembuluh darah yang menghangatkan dan melembapkan udara. Udara yang masuk ke paru-paru jadi lebih bersih." },
      tip: "Ingat urutan saluran dengan singkatan H-F-L-T-B-B-A: hidung, faring, laring, trakea, bronkus, bronkiolus, alveolus.",
      q: [
        ["Pertukaran oksigen dan karbon dioksida terjadi di …", ["alveolus", "trakea", "bronkus", "laring"], 0, "Dinding alveolus tipis."],
        ["Saluran pernapasan tempat pita suara berada adalah …", ["laring", "faring", "trakea", "bronkiolus"], 0, "Pangkal tenggorok."],
        ["Saat menarik napas pada pernapasan perut, diafragma …", ["berkontraksi dan mendatar", "berelaksasi dan melengkung", "tidak bergerak", "naik ke rongga dada"], 0, "Rongga dada membesar."],
        ["Penyakit TBC disebabkan oleh …", ["bakteri", "virus", "jamur", "alergi debu"], 0, "Mycobacterium tuberculosis."],
        ["Urutan masuknya udara yang benar adalah …", ["hidung – faring – laring – trakea", "hidung – laring – faring – trakea", "faring – hidung – trakea – laring", "hidung – trakea – faring – laring"], 0, "Urutan saluran pernapasan."],
        ["Fungsi rambut hidung adalah …", ["menyaring debu", "menghasilkan suara", "mengikat oksigen", "menghangatkan darah"], 0, "Penyaring udara."],
        ["Penyempitan saluran pernapasan yang sering kambuh karena alergi disebut …", ["asma", "pneumonia", "bronkitis", "influenza"], 0, "Asma."],
        ["Gas yang kadarnya lebih tinggi pada udara yang diembuskan dibandingkan udara yang dihirup adalah …", ["karbon dioksida", "oksigen", "nitrogen", "hidrogen"], 0, "Sisa respirasi sel."],
        ["Udara yang keluar-masuk paru-paru saat bernapas biasa disebut udara …", ["tidal", "residu", "komplementer", "suplementer"], 0, "Sekitar 500 mL."],
        ["Saat kamu berlari, napasmu makin cepat karena …", ["sel butuh lebih banyak oksigen untuk energi", "paru-paru mengecil", "darah berhenti mengalir", "kadar oksigen di udara turun"], 0, "Kebutuhan energi naik."]
      ]
    },
    {
      id: "cahaya", t: "Cahaya dan Alat Optik", s: 2,
      sum: "Kamu bisa melihat benda karena cahaya yang dipantulkan benda itu masuk ke matamu. Cahaya merambat lurus, bisa dipantulkan, dan bisa dibiaskan saat melewati medium yang berbeda.\nSifat cahaya dimanfaatkan dalam alat optik seperti kacamata, lup, mikroskop, dan kamera. Mata sendiri adalah alat optik alami yang bekerja mirip kamera.",
      pts: [
        "<b>Sifat cahaya:</b> merambat lurus, dapat dipantulkan, dapat dibiaskan, dan termasuk gelombang elektromagnetik sehingga bisa merambat di ruang hampa.",
        "<b>Cermin datar:</b> bayangan maya, tegak, sama besar. <b>Cermin cekung</b> mengumpulkan cahaya. <b>Cermin cembung</b> menyebarkan cahaya, dipakai di spion.",
        "<b>Rumus cermin dan lensa:</b> 1/f = 1/s + 1/s′. Perbesaran M = s′/s.",
        "<b>Lensa cembung</b> (positif) mengumpulkan cahaya. <b>Lensa cekung</b> (negatif) menyebarkan cahaya. Kekuatan lensa P = 100/f (f dalam cm).",
        "<b>Cacat mata:</b> miopi (rabun jauh, lensa cekung), hipermetropi (rabun dekat, lensa cembung), presbiopi (mata tua, lensa rangkap).",
        "<b>Alat optik:</b> lup (satu lensa cembung), mikroskop (lensa objektif dan okuler), kamera, teropong."
      ],
      ex: { q: "Benda diletakkan 30 cm di depan cermin cekung berfokus 10 cm. Di mana bayangannya?", a: "1/s′ = 1/f − 1/s = 1/10 − 1/30 = 2/30. s′ = 15 cm di depan cermin. Bayangannya nyata, terbalik, dan diperkecil (M = 15/30 = 0,5)." },
      tip: "Hafalkan: miopi tidak bisa melihat jauh, dibantu lensa cekung (minus). Hipermetropi tidak bisa melihat dekat, dibantu lensa cembung (plus).",
      q: [
        ["Bayangan pada cermin datar bersifat …", ["maya, tegak, sama besar", "nyata, terbalik, diperkecil", "maya, terbalik, diperbesar", "nyata, tegak, sama besar"], 0, "Sifat cermin datar."],
        ["Spion kendaraan memakai cermin cembung karena …", ["bidang pandangnya luas", "bayangannya diperbesar", "bayangannya nyata", "mengumpulkan cahaya"], 0, "Menyebarkan cahaya, jangkauan pandang luas."],
        ["Sedotan di gelas berisi air tampak patah. Peristiwa ini disebut …", ["pembiasan", "pemantulan", "difraksi", "dispersi"], 0, "Cahaya berpindah medium."],
        ["Penderita rabun jauh (miopi) dibantu kacamata berlensa …", ["cekung", "cembung", "rangkap", "silinder"], 0, "Lensa negatif."],
        ["Lensa cembung berfokus 20 cm memiliki kekuatan …", ["5 dioptri", "20 dioptri", "0,05 dioptri", "2 dioptri"], 0, "P = 100/20 = 5."],
        ["Benda 20 cm di depan lensa cembung berfokus 10 cm. Jarak bayangannya …", ["20 cm", "10 cm", "30 cm", "5 cm"], 0, "1/s′ = 1/10 − 1/20 = 1/20."],
        ["Bagian mata yang mengatur banyaknya cahaya masuk adalah …", ["iris yang mengatur pupil", "retina", "lensa mata", "saraf optik"], 0, "Pupil membesar atau mengecil."],
        ["Alat optik yang memakai satu lensa cembung untuk melihat benda kecil adalah …", ["lup", "teropong", "periskop", "kamera"], 0, "Kaca pembesar."],
        ["Cahaya matahari bisa sampai ke Bumi melewati ruang hampa karena cahaya termasuk gelombang …", ["elektromagnetik", "mekanik", "longitudinal", "bunyi"], 0, "Tidak butuh medium."],
        ["Benda 15 cm di depan cermin cekung membentuk bayangan 30 cm di depan cermin. Perbesarannya …", ["2 kali", "0,5 kali", "15 kali", "45 kali"], 0, "M = s′/s = 30/15."]
      ]
    }
  ],
  order: ["sistem-gerak", "pesawat-sederhana", "fotosintesis", "pencernaan", "peredaran-darah", "pernapasan", "tekanan", "getaran-bunyi", "cahaya"]
});

// ===================== IPS =====================
EXT(8, "ips", {
  more: {
    "penduduk": {
      pts: [
        "<b>Letak astronomis Indonesia:</b> 6° LU – 11° LS dan 95° BT – 141° BT, sehingga beriklim tropis.",
        "<b>Letak geografis:</b> di antara Benua Asia dan Australia, serta di antara Samudra Hindia dan Pasifik.",
        "<b>Sensus penduduk</b> di Indonesia dilakukan BPS setiap 10 tahun. Sensus terakhir tahun 2020."
      ],
      ex2: { q: "Sebuah daerah punya 30.000 penduduk usia 0–14 tahun, 60.000 usia 15–64 tahun, dan 6.000 usia 65 tahun ke atas. Hitung angka beban ketergantungannya.", a: "Langkah 1: penduduk tidak produktif = 30.000 + 6.000 = 36.000. Langkah 2: ABK = 36.000 / 60.000 × 100 = 60. Langkah 3: artinya setiap 100 penduduk produktif menanggung 60 penduduk tidak produktif." },
      q: [
        ["Secara astronomis Indonesia terletak di antara …", ["6° LU – 11° LS dan 95° BT – 141° BT", "6° LS – 11° LU dan 95° BB – 141° BB", "11° LU – 6° LS dan 90° BT – 150° BT", "0° – 11° LS dan 95° BT – 141° BT"], 0, "Letak astronomis Indonesia."],
        ["Akibat letak astronomisnya, Indonesia memiliki iklim …", ["tropis", "subtropis", "sedang", "kutub"], 0, "Dilalui garis khatulistiwa."],
        ["Perpindahan penduduk dari Pulau Jawa ke Kalimantan yang diatur pemerintah disebut …", ["transmigrasi", "urbanisasi", "ruralisasi", "emigrasi"], 0, "Program pemerintah."],
        ["Penduduk usia 0–14 tahun 40.000, usia 65 tahun ke atas 10.000, usia produktif 100.000. Angka beban ketergantungannya …", ["50", "40", "10", "150"], 0, "50.000 / 100.000 × 100 = 50."],
        ["Lembaga yang melaksanakan sensus penduduk di Indonesia adalah …", ["BPS", "BMKG", "BNPB", "Bappenas"], 0, "Badan Pusat Statistik."]
      ]
    },
    "islam-nusantara": {
      pts: [
        "<b>Akulturasi budaya:</b> atap masjid bertingkat seperti Masjid Agung Demak, menara Masjid Kudus yang mirip candi.",
        "<b>Kerajaan Islam di luar Jawa:</b> Gowa-Tallo (Sultan Hasanuddin, “Ayam Jantan dari Timur”), Ternate (Sultan Baabullah), Aceh (Sultan Iskandar Muda).",
        "<b>Sumber sejarah:</b> makam Fatimah binti Maimun di Leran, Gresik (1082 M) dan catatan Marco Polo (1292) tentang Perlak."
      ],
      ex2: { q: "Jelaskan mengapa Islam mudah diterima masyarakat Nusantara.", a: "Langkah 1: Islam disebarkan dengan cara damai, lewat perdagangan dan perkawinan. Langkah 2: Islam tidak mengenal kasta, semua manusia sama di hadapan Allah. Langkah 3: para wali memakai budaya lokal seperti wayang dan gamelan sehingga ajarannya terasa dekat. Langkah 4: syarat masuk Islam sederhana, cukup mengucapkan dua kalimat syahadat." },
      q: [
        ["Sultan Hasanuddin dari Gowa-Tallo dijuluki …", ["Ayam Jantan dari Timur", "Singa dari Utara", "Macan Asia", "Harimau Jawa"], 0, "Julukan dari Belanda."],
        ["Kerajaan Aceh mencapai puncak kejayaan pada masa …", ["Sultan Iskandar Muda", "Sultan Malik as-Saleh", "Raden Patah", "Sultan Agung"], 0, "Memerintah 1607–1636."],
        ["Bukti tertua keberadaan Islam di Jawa adalah …", ["makam Fatimah binti Maimun di Gresik", "Masjid Istiqlal", "Candi Borobudur", "Prasasti Yupa"], 0, "Bertarikh 1082 M."],
        ["Atap masjid bertingkat seperti Masjid Agung Demak menunjukkan …", ["akulturasi budaya Islam dengan budaya lokal", "pengaruh budaya Eropa", "budaya asli Arab", "pengaruh Cina modern"], 0, "Mirip bangunan meru."],
        ["Penyebaran Islam melalui pondok pesantren termasuk saluran …", ["pendidikan", "perdagangan", "perkawinan", "politik"], 0, "Pesantren."]
      ]
    },
    "kolonialisme": {
      pts: [
        "<b>Daendels</b> (1808–1811) membangun Jalan Raya Pos Anyer–Panarukan dengan kerja rodi.",
        "<b>Raffles</b> (masa Inggris, 1811–1816) menerapkan sistem sewa tanah (landrent).",
        "<b>Politik Etis</b> (1901): irigasi, edukasi, emigrasi, digagas Van Deventer."
      ],
      ex2: { q: "Mengapa perlawanan rakyat Nusantara sebelum abad ke-20 sering gagal?", a: "Langkah 1: perlawanan bersifat kedaerahan, tidak ada persatuan antardaerah. Langkah 2: perlawanan bergantung pada pemimpin. Kalau pemimpinnya ditangkap, perlawanan melemah. Langkah 3: persenjataan kalah modern. Langkah 4: Belanda memakai politik adu domba (devide et impera)." },
      q: [
        ["Jalan Raya Pos Anyer–Panarukan dibangun pada masa …", ["Daendels", "Raffles", "Van den Bosch", "Van Deventer"], 0, "Dengan kerja rodi."],
        ["Sistem sewa tanah (landrent) diterapkan oleh …", ["Thomas Stamford Raffles", "Daendels", "J.P. Coen", "Van den Bosch"], 0, "Masa pemerintahan Inggris."],
        ["Isi Politik Etis adalah …", ["irigasi, edukasi, emigrasi", "gold, glory, gospel", "tanam paksa, rodi, pajak", "monopoli, ekstirpasi, pelayaran hongi"], 0, "Trilogi Van Deventer."],
        ["Politik memecah belah yang dilakukan Belanda disebut …", ["devide et impera", "cultuurstelsel", "pelayaran hongi", "ekstirpasi"], 0, "Adu domba."],
        ["Perang Padri di Sumatra Barat dipimpin oleh …", ["Tuanku Imam Bonjol", "Pattimura", "Teuku Umar", "Sultan Hasanuddin"], 0, "Minangkabau."]
      ]
    },
    "pergerakan": {
      pts: [
        "<b>PNI</b> didirikan Ir. Soekarno tahun 1927 di Bandung.",
        "<b>Taman Siswa</b> didirikan Ki Hajar Dewantara tahun 1922 di Yogyakarta.",
        "<b>Ciri pergerakan nasional:</b> memakai organisasi modern, bersifat nasional, berjuang lewat pendidikan dan politik."
      ],
      ex2: { q: "Apa perbedaan perjuangan sebelum dan sesudah tahun 1908?", a: "Langkah 1: sebelum 1908 perjuangan bersifat kedaerahan dan memakai senjata. Langkah 2: sesudah 1908 perjuangan bersifat nasional dan memakai organisasi. Langkah 3: sebelum 1908 perjuangan bergantung pada tokoh karismatik. Sesudahnya dipimpin kaum terpelajar dengan tujuan jelas, yaitu Indonesia merdeka." },
      q: [
        ["Partai Nasional Indonesia (PNI) didirikan oleh …", ["Ir. Soekarno", "Mohammad Hatta", "Sutan Syahrir", "dr. Sutomo"], 0, "1927, Bandung."],
        ["Taman Siswa didirikan oleh …", ["Ki Hajar Dewantara", "K.H. Ahmad Dahlan", "Dewi Sartika", "R.A. Kartini"], 0, "1922, Yogyakarta."],
        ["Golongan yang memelopori pergerakan nasional adalah …", ["kaum terpelajar", "bangsawan kolonial", "pedagang Eropa", "tentara KNIL"], 0, "Hasil pendidikan."],
        ["Faktor dari luar negeri yang mendorong pergerakan nasional adalah …", ["kemenangan Jepang atas Rusia tahun 1905", "Perang Diponegoro", "berdirinya VOC", "tanam paksa"], 0, "Bangsa Asia terbukti bisa mengalahkan bangsa Eropa."],
        ["Kongres Pemuda II diselenggarakan di kota …", ["Batavia (Jakarta)", "Bandung", "Surabaya", "Yogyakarta"], 0, "27–28 Oktober 1928."]
      ]
    },
    "pasar": {
      pts: [
        "<b>Faktor permintaan:</b> harga, pendapatan, selera, harga barang lain, jumlah penduduk.",
        "<b>Faktor penawaran:</b> harga, biaya produksi, teknologi, harga bahan baku.",
        "<b>Pelaku ekonomi:</b> rumah tangga konsumen, rumah tangga produsen, pemerintah, masyarakat luar negeri."
      ],
      ex2: { q: "Data cabai: harga Rp40.000/kg, diminta 100 kg dan ditawarkan 60 kg. Harga Rp50.000/kg, diminta 80 kg dan ditawarkan 80 kg. Harga Rp60.000/kg, diminta 60 kg dan ditawarkan 100 kg. Tentukan harga keseimbangannya.", a: "Langkah 1: harga keseimbangan terjadi saat jumlah diminta sama dengan jumlah ditawarkan. Langkah 2: cari baris yang angkanya sama, yaitu Rp50.000 (80 kg dan 80 kg). Langkah 3: jadi harga keseimbangannya Rp50.000/kg dengan jumlah 80 kg. Perhatikan juga: saat harga naik, permintaan turun dan penawaran naik." },
      q: [
        ["Harga mi instan naik, sementara pendapatan masyarakat tetap. Permintaan mi instan akan …", ["turun", "naik", "tetap", "berlipat ganda"], 0, "Hukum permintaan."],
        ["Pasar oligopoli ditandai dengan …", ["beberapa penjual menguasai pasar", "hanya satu penjual", "hanya satu pembeli", "banyak penjual dan pembeli dengan barang sama"], 0, "Oligo = sedikit."],
        ["Contoh pasar monopoli di Indonesia adalah …", ["PLN dalam penyaluran listrik", "pasar sayur tradisional", "warung makan", "toko pakaian"], 0, "Hanya satu penyedia."],
        ["Biaya produksi turun karena teknologi baru. Penawaran barang akan …", ["naik", "turun", "tetap", "hilang"], 0, "Produsen bisa memproduksi lebih banyak."],
        ["Peran pemerintah sebagai pelaku ekonomi adalah …", ["memungut pajak dan menyediakan fasilitas umum", "hanya membeli barang", "hanya menjual barang ke luar negeri", "menentukan selera konsumen"], 0, "Peran pemerintah."]
      ]
    }
  },
  add: [
    {
      id: "mobilitas-sosial", t: "Interaksi Sosial dan Mobilitas Sosial", s: 1,
      sum: "Setiap hari kamu berinteraksi dengan orang lain: keluarga, teman, guru, pedagang. Interaksi sosial terjadi kalau ada kontak sosial dan komunikasi. Dari interaksi itu bisa muncul kerja sama, persaingan, atau konflik.\nMobilitas sosial adalah perpindahan kedudukan seseorang atau kelompok dalam masyarakat. Misalnya anak petani yang tekun belajar lalu menjadi dokter. Pendidikan adalah salah satu jalan utama untuk naik kedudukan.",
      pts: [
        "<b>Syarat interaksi sosial:</b> kontak sosial (langsung atau tidak langsung) dan komunikasi.",
        "<b>Bentuk asosiatif:</b> kerja sama, akomodasi (meredakan konflik), asimilasi (melebur menjadi budaya baru), akulturasi (budaya baru tanpa menghilangkan budaya lama).",
        "<b>Bentuk disosiatif:</b> persaingan, kontravensi (rasa tidak suka yang tersembunyi), konflik.",
        "<b>Mobilitas vertikal:</b> naik (social climbing) atau turun (social sinking). <b>Horizontal:</b> pindah ke posisi yang setara.",
        "<b>Mobilitas antargenerasi:</b> perbedaan kedudukan orang tua dan anak. <b>Intragenerasi:</b> perubahan dalam satu generasi.",
        "<b>Saluran mobilitas:</b> pendidikan, pekerjaan, organisasi, perkawinan, ekonomi."
      ],
      ex: { q: "Pak Budi awalnya guru honorer, lalu menjadi kepala sekolah. Termasuk mobilitas apa?", a: "Kedudukannya naik dalam satu generasi, jadi termasuk mobilitas vertikal naik dan intragenerasi." },
      tip: "Bedakan asimilasi dan akulturasi: asimilasi melebur sampai ciri lama hilang, akulturasi memadukan tanpa menghilangkan budaya asal.",
      q: [
        ["Syarat terjadinya interaksi sosial adalah …", ["kontak sosial dan komunikasi", "persaingan dan konflik", "pendidikan dan pekerjaan", "asimilasi dan akulturasi"], 0, "Dua syarat interaksi."],
        ["Gotong royong membersihkan lingkungan termasuk interaksi …", ["kerja sama", "persaingan", "kontravensi", "konflik"], 0, "Bentuk asosiatif."],
        ["Seorang karyawan pindah dari bagian keuangan ke bagian pemasaran dengan jabatan setara. Ini mobilitas …", ["horizontal", "vertikal naik", "vertikal turun", "antargenerasi"], 0, "Posisi setara."],
        ["Ayahnya buruh, anaknya menjadi pengusaha sukses. Ini mobilitas …", ["antargenerasi naik", "intragenerasi turun", "horizontal", "lateral"], 0, "Beda generasi, kedudukan naik."],
        ["Pengusaha yang bangkrut lalu menjadi pedagang kecil mengalami …", ["social sinking", "social climbing", "mobilitas horizontal", "asimilasi"], 0, "Kedudukan turun."],
        ["Menara Kudus yang memadukan unsur candi dan Islam adalah contoh …", ["akulturasi", "asimilasi", "konflik", "kontravensi"], 0, "Unsur lama tetap tampak."],
        ["Upaya meredakan pertentangan agar tercipta keseimbangan disebut …", ["akomodasi", "persaingan", "kontravensi", "konflik"], 0, "Akomodasi."],
        ["Saluran mobilitas sosial yang paling dekat dengan pelajar adalah …", ["pendidikan", "perkawinan", "militer", "warisan"], 0, "Sekolah membuka peluang kerja."],
        ["Rasa tidak suka yang disembunyikan terhadap seseorang termasuk …", ["kontravensi", "kerja sama", "akulturasi", "akomodasi"], 0, "Di antara persaingan dan konflik."],
        ["Contoh kontak sosial tidak langsung adalah …", ["berkirim pesan lewat media sosial", "berjabat tangan", "mengobrol di kelas", "bermain bola bersama"], 0, "Memakai perantara."]
      ]
    },
    {
      id: "keunggulan-ruang", t: "Potensi dan Keunggulan Antarruang", s: 1,
      sum: "Setiap daerah di Indonesia punya kondisi alam yang berbeda. Ada yang subur untuk pertanian, kaya tambang, atau punya laut yang luas. Perbedaan ini disebut keunggulan dan keterbatasan antarruang.\nKarena tidak ada daerah yang bisa memenuhi semua kebutuhannya sendiri, terjadilah interaksi antarruang: daerah saling bertukar barang, jasa, dan tenaga kerja. Sumber daya alam perlu dikelola dengan bijak supaya tetap ada untuk generasi berikutnya.",
      pts: [
        "<b>SDA dapat diperbarui:</b> air, tanah, hutan, hewan, tumbuhan. <b>Tidak dapat diperbarui:</b> minyak bumi, batu bara, gas alam, emas.",
        "<b>SDA menurut asal:</b> hayati (biotik, dari makhluk hidup) dan nonhayati (abiotik).",
        "<b>Contoh potensi daerah:</b> nikel di Sulawesi, batu bara di Kalimantan, emas dan tembaga di Papua (Grasberg), kelapa sawit di Sumatra dan Kalimantan.",
        "<b>Kegiatan ekonomi:</b> pertanian, perkebunan, peternakan, perikanan, kehutanan, pertambangan, industri, jasa.",
        "<b>Faktor interaksi antarruang:</b> wilayah saling melengkapi, kesempatan berintervensi, dan kemudahan perpindahan (transportasi).",
        "<b>Pembangunan berkelanjutan:</b> memanfaatkan SDA tanpa mengorbankan kebutuhan generasi mendatang, misalnya dengan reboisasi dan tebang pilih."
      ],
      ex: { q: "Daerah A penghasil beras tetapi kekurangan ikan. Daerah B penghasil ikan tetapi tanahnya kurang subur. Apa yang terjadi?", a: "Kedua daerah saling melengkapi (regional complementarity). Daerah A mengirim beras ke B dan menerima ikan, sehingga terjadi interaksi antarruang." },
      tip: "Ingat kata kunci “diperbarui”: kalau bisa tumbuh atau terisi lagi dalam waktu yang tidak terlalu lama, berarti dapat diperbarui.",
      q: [
        ["Yang termasuk SDA tidak dapat diperbarui adalah …", ["batu bara", "hutan", "air", "ikan"], 0, "Terbentuk selama jutaan tahun."],
        ["Pulau penghasil nikel terbesar di Indonesia adalah …", ["Sulawesi", "Jawa", "Bali", "Lombok"], 0, "Misalnya Morowali dan Sorowako."],
        ["Tambang emas dan tembaga Grasberg terletak di …", ["Papua", "Kalimantan Timur", "Bangka Belitung", "Aceh"], 0, "Pegunungan Papua."],
        ["Penanaman kembali hutan yang gundul disebut …", ["reboisasi", "deforestasi", "urbanisasi", "erosi"], 0, "Reboisasi."],
        ["Ikan, hutan, dan hewan ternak termasuk SDA …", ["hayati", "nonhayati", "abiotik", "mineral"], 0, "Berasal dari makhluk hidup."],
        ["Interaksi antarruang lebih mudah terjadi jika …", ["transportasi lancar", "jaraknya sangat jauh", "biaya angkut mahal", "kedua daerah menghasilkan barang yang sama"], 0, "Kemudahan perpindahan."],
        ["Kalimantan Timur dikenal sebagai penghasil …", ["batu bara", "nikel", "teh", "cengkih"], 0, "Tambang batu bara."],
        ["Kegiatan ekonomi yang mengolah bahan mentah menjadi barang jadi disebut …", ["industri", "pertanian", "pertambangan", "perikanan"], 0, "Industri."],
        ["Prinsip pembangunan berkelanjutan berarti …", ["memenuhi kebutuhan sekarang tanpa merugikan generasi mendatang", "menghabiskan SDA secepatnya", "melarang semua penambangan", "hanya memakai SDA impor"], 0, "Berkelanjutan."],
        ["Penebangan hanya pada pohon yang sudah cukup umur disebut …", ["tebang pilih", "tebang habis", "reboisasi", "ladang berpindah"], 0, "Menjaga kelestarian hutan."]
      ]
    },
    {
      id: "perdagangan", t: "Perdagangan Antardaerah dan Antarnegara", s: 2,
      sum: "Perdagangan terjadi karena setiap daerah dan negara punya keunggulan yang berbeda. Indonesia menjual batu bara dan minyak sawit, lalu membeli gandum dan mesin dari negara lain.\nPerdagangan antardaerah terjadi di dalam satu negara, sedangkan perdagangan internasional melibatkan dua negara atau lebih. Menjual barang ke luar negeri disebut ekspor, membeli dari luar negeri disebut impor.",
      pts: [
        "<b>Ekspor:</b> menjual barang ke luar negeri. <b>Impor:</b> membeli barang dari luar negeri.",
        "<b>Neraca perdagangan:</b> surplus jika ekspor lebih besar dari impor, defisit jika impor lebih besar dari ekspor.",
        "<b>Komoditas ekspor Indonesia:</b> batu bara, minyak sawit (CPO), karet, nikel, tekstil. <b>Impor:</b> gandum, mesin, kedelai, bahan bakar.",
        "<b>Faktor pendorong:</b> perbedaan SDA, iklim, teknologi, dan kebutuhan.",
        "<b>Hambatan:</b> tarif (bea masuk), kuota (pembatasan jumlah), perbedaan mata uang.",
        "<b>Kerja sama ekonomi:</b> ASEAN, AFTA (kawasan perdagangan bebas ASEAN), APEC, WTO."
      ],
      ex: { q: "Sebuah negara mengekspor barang senilai 250 miliar dolar dan mengimpor 220 miliar dolar dalam setahun. Bagaimana neraca perdagangannya?", a: "250 − 220 = 30 miliar dolar. Ekspor lebih besar, jadi neraca perdagangan surplus 30 miliar dolar." },
      tip: "Ingat “ekspor = keluar”. Huruf e pada ekspor seperti exit.",
      q: [
        ["Kegiatan menjual barang ke luar negeri disebut …", ["ekspor", "impor", "distribusi", "produksi"], 0, "Ekspor."],
        ["Neraca perdagangan dikatakan surplus jika …", ["nilai ekspor lebih besar dari impor", "nilai impor lebih besar dari ekspor", "ekspor sama dengan impor", "tidak ada ekspor"], 0, "Surplus."],
        ["Contoh komoditas yang banyak diimpor Indonesia adalah …", ["gandum", "batu bara", "minyak sawit", "karet"], 0, "Gandum sulit tumbuh di iklim tropis."],
        ["Pajak yang dikenakan pada barang impor disebut …", ["tarif bea masuk", "kuota", "subsidi", "dumping"], 0, "Tarif."],
        ["Pembatasan jumlah barang yang boleh diimpor disebut …", ["kuota", "tarif", "devisa", "subsidi"], 0, "Kuota."],
        ["Kawasan perdagangan bebas negara-negara ASEAN disebut …", ["AFTA", "NATO", "OPEC", "UNICEF"], 0, "ASEAN Free Trade Area."],
        ["Kopi dari Lampung dijual ke Jakarta. Ini termasuk perdagangan …", ["antardaerah", "internasional", "ekspor", "impor"], 0, "Masih di dalam satu negara."],
        ["Ekspor 180 miliar dolar dan impor 200 miliar dolar. Neraca perdagangannya …", ["defisit 20 miliar dolar", "surplus 20 miliar dolar", "seimbang", "surplus 380 miliar dolar"], 0, "180 − 200 = −20."],
        ["Penyebab utama terjadinya perdagangan internasional adalah …", ["perbedaan SDA dan kebutuhan tiap negara", "semua negara punya SDA yang sama", "larangan produksi", "tidak adanya mata uang"], 0, "Saling melengkapi."],
        ["Mata uang asing yang diterima negara dari kegiatan ekspor disebut …", ["devisa", "pajak penghasilan", "retribusi", "kuota"], 0, "Devisa."]
      ]
    }
  ],
  order: ["penduduk", "mobilitas-sosial", "islam-nusantara", "keunggulan-ruang", "pasar", "perdagangan", "kolonialisme", "pergerakan"]
});

// ===================== BAHASA INDONESIA =====================
EXT(8, "indo", {
  more: {
    "berita": {
      pts: [
        "<b>Kalimat langsung ke tidak langsung:</b> “Kami akan membantu,” kata Lurah. → Lurah mengatakan bahwa mereka akan membantu.",
        "<b>Judul berita</b> singkat, padat, menarik, dan mencerminkan isi.",
        "<b>Fakta dalam berita</b> bisa dicek: nama, angka, waktu, dan tempat."
      ],
      ex2: { q: "Ubah kalimat langsung ini menjadi kalimat tidak langsung: Kepala sekolah berkata, “Besok semua siswa wajib memakai batik.”", a: "Langkah 1: hilangkan tanda petik dan ganti dengan kata penghubung bahwa. Langkah 2: sesuaikan kata ganti dan keterangan waktu jika perlu. Langkah 3: hasilnya: Kepala sekolah berkata bahwa besok semua siswa wajib memakai batik." },
      q: [
        ["Unsur berita yang menjelaskan penyebab peristiwa adalah …", ["why", "how", "what", "when"], 0, "Mengapa."],
        ["Bagian berita yang berisi penjelasan rinci peristiwa disebut …", ["tubuh berita", "kepala berita", "ekor berita", "judul"], 0, "Rincian peristiwa."],
        ["Kalimat tidak langsung dari: Ani berkata, “Saya sudah selesai.” adalah …", ["Ani berkata bahwa dia sudah selesai.", "Ani berkata, saya sudah selesai.", "Saya berkata bahwa Ani sudah selesai.", "Ani bertanya apakah dia sudah selesai."], 0, "Pakai bahwa dan ganti kata ganti."],
        ["“Banjir setinggi 1 meter merendam 200 rumah di Desa Sukamaju, Senin (12/2).” Unsur when pada kalimat itu adalah …", ["Senin (12/2)", "Desa Sukamaju", "200 rumah", "banjir setinggi 1 meter"], 0, "Keterangan waktu."],
        ["Judul berita yang baik adalah …", ["singkat dan mencerminkan isi", "panjang dan berisi semua detail", "berisi pendapat penulis", "memakai bahasa gaul"], 0, "Ciri judul berita."]
      ]
    },
    "iklan": {
      pts: [
        "<b>Media iklan:</b> cetak (koran, majalah, baliho), elektronik (televisi, radio), digital (media sosial, situs web).",
        "<b>Struktur iklan:</b> judul atau slogan yang menarik, isi (keunggulan produk), ajakan, dan informasi kontak.",
        "<b>Majas dalam iklan:</b> hiperbola, personifikasi, dan rima sering dipakai agar mudah diingat."
      ],
      ex2: { q: "Buat slogan ajakan hemat air dan jelaskan cirinya.", a: "Langkah 1: tentukan pesan utama, yaitu hemat air. Langkah 2: buat kalimat pendek yang berima: “Hemat air hari ini, hidup lestari nanti.” Langkah 3: slogan ini singkat, berima (ini dan nanti sama-sama berakhiran i), dan mudah diingat." },
      q: [
        ["Iklan yang ditayangkan di televisi termasuk iklan media …", ["elektronik", "cetak", "luar ruang", "lisan langsung"], 0, "Televisi."],
        ["Tujuan utama iklan komersial adalah …", ["mendorong orang membeli produk", "memberi informasi cuaca", "mengajak menjaga lingkungan", "menyampaikan berita"], 0, "Mencari keuntungan."],
        ["“Harga bersahabat untuk kantong pelajar.” Frasa “harga bersahabat” memakai majas …", ["personifikasi", "simile", "litotes", "ironi"], 0, "Harga diberi sifat manusia."],
        ["Iklan ajakan membuang sampah pada tempatnya biasanya dibuat oleh …", ["pemerintah atau lembaga sosial", "perusahaan minuman", "pedagang pakaian", "toko elektronik"], 0, "Iklan layanan masyarakat."],
        ["Iklan yang menyatakan “Satu-satunya obat yang menyembuhkan semua penyakit” melanggar prinsip …", ["kejujuran", "kreativitas", "keindahan", "kesantunan bahasa"], 0, "Klaimnya menyesatkan."]
      ]
    },
    "eksposisi": {
      pts: [
        "<b>Jenis eksposisi:</b> definisi, proses, ilustrasi, perbandingan, laporan.",
        "<b>Kata rujukan:</b> ini, itu, tersebut, hal ini dipakai untuk merujuk gagasan sebelumnya.",
        "<b>Menulis tesis:</b> satu kalimat pendapat yang jelas, misalnya “Sekolah perlu menyediakan tempat sampah terpilah.”"
      ],
      ex2: { q: "Susun kerangka teks eksposisi bertopik “Sarapan sebelum sekolah”.", a: "Langkah 1, tesis: sarapan penting agar siswa fokus belajar. Langkah 2, argumen: (a) sarapan memberi energi setelah tubuh tidak makan semalaman, (b) siswa yang sarapan lebih mudah berkonsentrasi, (c) sarapan mencegah jajan sembarangan. Langkah 3, penegasan ulang: biasakan sarapan bergizi setiap pagi." },
      q: [
        ["Kalimat opini biasanya ditandai kata …", ["menurut saya", "pada tahun 2020", "sebanyak 30%", "terletak di"], 0, "Pendapat pribadi."],
        ["Bagian eksposisi yang berisi alasan dan bukti adalah …", ["argumentasi", "tesis", "penegasan ulang", "orientasi"], 0, "Argumen."],
        ["“Hal tersebut menunjukkan bahwa …” Kata “tersebut” berfungsi sebagai …", ["kata rujukan", "kata kerja mental", "konjungsi waktu", "kata seru"], 0, "Merujuk gagasan sebelumnya."],
        ["Yang termasuk kata kerja mental adalah …", ["meyakini", "berlari", "menulis", "membeli"], 0, "Aktivitas pikiran."],
        ["Tujuan teks eksposisi adalah …", ["meyakinkan pembaca dengan argumen", "menghibur dengan cerita", "menjelaskan cara membuat sesuatu", "menceritakan pengalaman"], 0, "Gagasan dan argumen."]
      ]
    },
    "puisi": {
      s: 1,
      pts: [
        "<b>Rima:</b> persamaan bunyi, misalnya rima akhir a-a-a-a atau a-b-a-b.",
        "<b>Metafora</b> membandingkan langsung tanpa kata pembanding: “Dia bintang kelas.”",
        "<b>Membaca puisi:</b> perhatikan lafal, intonasi, jeda, ekspresi, dan penghayatan."
      ],
      ex2: { q: "Tentukan majas dalam kalimat: “Wajahnya bagai bulan purnama.”", a: "Langkah 1: ada dua hal yang dibandingkan, yaitu wajah dan bulan purnama. Langkah 2: perbandingan memakai kata bagai. Langkah 3: perbandingan dengan kata seperti, bagai, atau laksana disebut majas simile (perumpamaan)." },
      q: [
        ["“Dia adalah buaya darat.” Majas kalimat ini adalah …", ["metafora", "simile", "personifikasi", "hiperbola"], 0, "Perbandingan langsung."],
        ["“Matanya seperti bintang kejora.” Majas ini disebut …", ["simile", "metafora", "litotes", "sinekdoke"], 0, "Memakai kata seperti."],
        ["Imaji yang membuat pembaca seolah mendengar sesuatu disebut imaji …", ["pendengaran", "penglihatan", "perabaan", "penciuman"], 0, "Imaji auditif."],
        ["Sikap atau perasaan penyair terhadap pokok persoalan dalam puisi disebut …", ["rasa", "tema", "amanat", "rima"], 0, "Rasa (feeling)."],
        ["Rima akhir berpola a-b-a-b disebut rima …", ["silang", "kembar", "patah", "terus"], 0, "Bersilang."]
      ]
    },
    "eksplanasi": {
      pts: [
        "<b>Langkah menulis:</b> tentukan fenomena, kumpulkan informasi, susun kerangka sebab-akibat, kembangkan menjadi paragraf.",
        "<b>Istilah ilmiah</b> contohnya evaporasi, kondensasi, dan presipitasi pada proses hujan.",
        "<b>Ulasan</b> berisi komentar atau simpulan penulis tentang fenomena."
      ],
      ex2: { q: "Susun rangkaian kejadian proses terjadinya hujan.", a: "Langkah 1: panas matahari menguapkan air laut, sungai, dan danau (evaporasi). Langkah 2: uap air naik dan mendingin, lalu berubah menjadi titik-titik air yang membentuk awan (kondensasi). Langkah 3: titik air makin banyak dan berat. Langkah 4: titik air jatuh sebagai hujan (presipitasi)." },
      q: [
        ["Proses penguapan air karena panas matahari disebut …", ["evaporasi", "kondensasi", "presipitasi", "infiltrasi"], 0, "Penguapan."],
        ["Yang termasuk konjungsi kronologis adalah …", ["kemudian", "karena", "tetapi", "atau"], 0, "Menyatakan urutan waktu."],
        ["Bagian teks eksplanasi yang berisi tahapan proses disebut …", ["deretan penjelas", "identifikasi fenomena", "ulasan", "tesis"], 0, "Rangkaian kejadian."],
        ["“Tanah longsor terjadi karena hutan gundul.” Kalimat ini menunjukkan hubungan …", ["sebab-akibat", "waktu", "pertentangan", "tujuan"], 0, "Kausalitas."],
        ["Yang termasuk fenomena sosial adalah …", ["kemacetan lalu lintas", "gempa bumi", "gerhana bulan", "pelangi"], 0, "Berkaitan dengan kegiatan manusia."]
      ]
    },
    "drama": {
      pts: [
        "<b>Konflik</b> adalah inti drama, bisa antartokoh atau di dalam diri tokoh.",
        "<b>Babak</b> adalah bagian besar drama. <b>Adegan</b> adalah bagian kecil yang ditandai pergantian tokoh atau suasana.",
        "<b>Unsur pementasan:</b> sutradara, pemain, naskah, panggung, tata cahaya, tata suara, penonton."
      ],
      ex2: { q: "Perhatikan dialog: Rani: (membanting buku) “Aku capek disalahkan terus!” Tentukan petunjuk lakuan dan perasaan tokoh.", a: "Langkah 1: petunjuk lakuan adalah teks dalam kurung, yaitu (membanting buku). Langkah 2: membanting buku dan kalimat berseru menunjukkan Rani sedang marah. Langkah 3: dari dialog itu tergambar Rani merasa diperlakukan tidak adil." },
      q: [
        ["Orang yang memimpin dan mengarahkan pementasan drama disebut …", ["sutradara", "aktor", "penulis naskah", "penata rias"], 0, "Pemimpin pementasan."],
        ["Bagian akhir drama yang berisi simpulan atau pesan disebut …", ["epilog", "prolog", "komplikasi", "orientasi"], 0, "Penutup."],
        ["Bagian drama ketika masalah mulai muncul disebut …", ["komplikasi", "orientasi", "resolusi", "epilog"], 0, "Konflik mulai muncul."],
        ["Ekspresi wajah saat bermain drama berguna untuk …", ["menunjukkan perasaan tokoh", "menghafal naskah", "mengatur cahaya", "memilih kostum"], 0, "Penghayatan."],
        ["Bagian kecil dalam babak yang ditandai pergantian tokoh disebut …", ["adegan", "prolog", "dialog", "epilog"], 0, "Adegan."]
      ]
    }
  },
  add: [
    {
      id: "ulasan", t: "Teks Ulasan", s: 2,
      sum: "Teks ulasan berisi penilaian terhadap sebuah karya, misalnya buku, film, lagu, atau drama. Penulis ulasan menjelaskan isi karya, lalu menunjukkan kelebihan dan kekurangannya.\nUlasan membantu pembaca memutuskan apakah karya itu layak dibaca atau ditonton. Ulasan yang baik bersikap adil: memuji yang bagus dan mengkritik yang kurang dengan alasan yang jelas.",
      pts: [
        "<b>Struktur:</b> identitas karya, orientasi (gambaran umum), tafsiran isi (sinopsis), evaluasi (kelebihan dan kekurangan), rangkuman.",
        "<b>Identitas karya:</b> judul, penulis atau sutradara, penerbit, tahun terbit, jumlah halaman.",
        "<b>Evaluasi</b> adalah bagian inti yang berisi penilaian.",
        "<b>Kebahasaan:</b> konjungsi penerang (bahwa, yaitu, yakni), konjungsi pertentangan (namun, tetapi), kata sifat penilaian (menarik, membosankan).",
        "<b>Fakta dan opini:</b> ulasan memadukan fakta tentang karya dan opini penulis.",
        "<b>Sikap kritis:</b> penilaian harus disertai alasan, bukan sekadar suka atau tidak suka."
      ],
      ex: { q: "Kalimat “Sayangnya, alur film ini terlalu lambat di bagian tengah” termasuk bagian ulasan apa?", a: "Kalimat itu menunjukkan kekurangan karya, jadi termasuk bagian evaluasi." },
      tip: "Saat menulis ulasan, catat dulu dua kelebihan dan satu kekurangan beserta alasannya. Catatan itu menjadi tulang punggung bagian evaluasi.",
      q: [
        ["Bagian ulasan yang berisi kelebihan dan kekurangan karya disebut …", ["evaluasi", "orientasi", "tafsiran isi", "rangkuman"], 0, "Penilaian."],
        ["Judul buku, nama penulis, dan penerbit termasuk bagian …", ["identitas karya", "evaluasi", "rangkuman", "tafsiran isi"], 0, "Data karya."],
        ["Tujuan teks ulasan adalah …", ["memberi penilaian terhadap suatu karya", "menceritakan pengalaman pribadi", "menjelaskan proses alam", "membujuk membeli produk"], 0, "Menilai karya."],
        ["Konjungsi “namun” dalam ulasan biasanya dipakai untuk …", ["menyampaikan kekurangan setelah kelebihan", "menjelaskan urutan waktu", "menambahkan contoh", "menyebut identitas"], 0, "Konjungsi pertentangan."],
        ["Ringkasan jalan cerita dalam ulasan termasuk bagian …", ["tafsiran isi", "evaluasi", "identitas", "rangkuman"], 0, "Sinopsis."],
        ["Kalimat yang merupakan opini dalam ulasan adalah …", ["Ilustrasi buku ini sangat memikat.", "Buku ini terbit tahun 2021.", "Buku ini berisi 150 halaman.", "Penulisnya lahir di Medan."], 0, "Penilaian pribadi."],
        ["Bagian penutup ulasan yang berisi simpulan disebut …", ["rangkuman", "orientasi", "identitas", "evaluasi"], 0, "Rangkuman."],
        ["Yang termasuk konjungsi penerang adalah …", ["yaitu", "tetapi", "kemudian", "jika"], 0, "Menjelaskan."],
        ["Ulasan yang baik ditandai dengan …", ["penilaian yang disertai alasan", "hanya berisi pujian", "hanya berisi kritik", "tidak menyebut judul karya"], 0, "Adil dan beralasan."],
        ["Gambaran umum karya, seperti genre dan latar belakang penulisan, ada di bagian …", ["orientasi", "evaluasi", "rangkuman", "tafsiran isi"], 0, "Pengantar."]
      ]
    },
    {
      id: "persuasi", t: "Teks Persuasi", s: 2,
      sum: "Teks persuasi berisi ajakan atau bujukan agar pembaca melakukan sesuatu. Contohnya ajakan menjaga kebersihan, gemar membaca, atau hemat energi.\nBedanya dengan eksposisi, persuasi tidak berhenti pada pendapat. Persuasi diakhiri ajakan yang jelas. Supaya ajakannya diterima, penulis memberi alasan kuat, fakta, dan menunjukkan manfaatnya bagi pembaca.",
      pts: [
        "<b>Struktur:</b> pengenalan isu, rangkaian argumen, pernyataan ajakan, penegasan kembali.",
        "<b>Kata ajakan:</b> ayo, mari, marilah, hendaknya, sebaiknya, jangan.",
        "<b>Kata teknis</b> sesuai topik, misalnya “emisi” pada topik polusi udara.",
        "<b>Kata kerja mental:</b> memahami, meyakini, menyadari, mengetahui.",
        "<b>Ajakan santun:</b> memakai kata mohon, hendaknya, atau sebaiknya, bukan memaksa.",
        "<b>Bukti pendukung:</b> data, pendapat ahli, contoh nyata."
      ],
      ex: { q: "Tulis satu kalimat ajakan bertopik membaca buku.", a: "“Marilah kita sisihkan 15 menit setiap hari untuk membaca buku agar wawasan kita makin luas.” Kalimat ini memakai kata ajakan marilah dan menyebut manfaatnya." },
      tip: "Cek teks persuasimu: apakah sudah ada alasan, bukti, dan kalimat ajakan? Kalau ajakannya belum muncul, teksmu masih eksposisi.",
      q: [
        ["Tujuan teks persuasi adalah …", ["mengajak pembaca melakukan sesuatu", "menghibur pembaca", "menjelaskan proses", "melaporkan berita"], 0, "Ajakan."],
        ["Kata yang menandai ajakan adalah …", ["marilah", "kemarin", "namun", "sehingga"], 0, "Kata ajakan."],
        ["Bagian teks persuasi yang berisi dorongan untuk bertindak disebut …", ["pernyataan ajakan", "pengenalan isu", "rangkaian argumen", "orientasi"], 0, "Ajakan."],
        ["Perbedaan persuasi dan eksposisi adalah …", ["persuasi memuat ajakan, eksposisi tidak harus", "eksposisi memuat ajakan, persuasi tidak", "persuasi tidak memakai argumen", "keduanya sama persis"], 0, "Ada atau tidaknya ajakan."],
        ["Kalimat ajakan yang santun adalah …", ["Hendaknya kita mematikan lampu saat tidak dipakai.", "Matikan lampu sekarang juga!", "Kalian semua boros!", "Pokoknya harus hemat listrik."], 0, "Memakai hendaknya."],
        ["Kata “menyadari” termasuk kata …", ["kerja mental", "kerja fisik", "sifat", "seru"], 0, "Aktivitas pikiran."],
        ["Bagian awal teks persuasi berisi …", ["pengenalan isu", "pernyataan ajakan", "penegasan kembali", "resolusi"], 0, "Isu yang dibahas."],
        ["Argumen persuasi lebih meyakinkan jika didukung …", ["data dan pendapat ahli", "ancaman", "kata kasar", "cerita khayalan"], 0, "Bukti."],
        ["Judul yang cocok untuk teks persuasi adalah …", ["Ayo Kurangi Penggunaan Plastik", "Proses Terjadinya Gerhana", "Liburanku ke Bali", "Sejarah Candi Borobudur"], 0, "Berisi ajakan."],
        ["“Jangan membuang sampah ke sungai.” Kalimat ini termasuk ajakan berbentuk …", ["larangan", "pertanyaan", "pujian", "berita"], 0, "Memakai kata jangan."]
      ]
    }
  ],
  order: ["berita", "iklan", "eksposisi", "puisi", "eksplanasi", "ulasan", "persuasi", "drama"]
});

// ===================== BAHASA INGGRIS =====================
EXT(8, "inggris", {
  more: {
    "opinion": {
      pts: [
        "<b>Asking agreement:</b> Do you agree? Don’t you think so?",
        "<b>Partly agree:</b> I partly agree with you. You may be right, but …",
        "<b>Strong opinion:</b> I strongly believe … I’m sure that …"
      ],
      ex2: { q: "Tanggapi pendapat ini dengan setuju sebagian: “Homework should be banned.”", a: "Langkah 1: tunjukkan bagian yang kamu setujui: “I partly agree with you. Too much homework makes students tired.” Langkah 2: sampaikan keberatan dengan but: “But some homework helps us practice.” Langkah 3: jawaban ini sopan karena tetap menghargai pendapat lawan bicara." },
      q: [
        ["“I’m afraid I don’t agree with you.” The speaker is …", ["disagreeing politely", "agreeing", "asking for an opinion", "giving a suggestion"], 0, "Tidak setuju dengan sopan."],
        ["A: “I think we should plant more trees at school.” B: “___. Trees make the school cooler.”", ["I couldn’t agree more", "I strongly disagree", "That’s nonsense", "I don’t think so"], 0, "Sangat setuju."],
        ["Which sentence asks for someone’s opinion?", ["How do you feel about the new rule?", "I think the rule is fair.", "I agree with the rule.", "The rule starts tomorrow."], 0, "How do you feel about …?"],
        ["“You may be right, but I think the price is too high.” This shows …", ["partial agreement", "full agreement", "an invitation", "an apology"], 0, "Setuju sebagian."],
        ["Choose the correct word: I ___ that reading every day is good for us.", ["believe", "believes", "believing", "am believe"], 0, "I + V1."]
      ]
    },
    "modals": {
      pts: [
        "<b>Will / won’t:</b> kemauan atau kesediaan. I will help you. Will you open the door, please?",
        "<b>Be able to:</b> artinya sama dengan can, dipakai di tenses lain. She will be able to come tomorrow.",
        "<b>Should:</b> saran. You should sleep early."
      ],
      ex2: { q: "Lengkapi dan jelaskan: “You ___ bring a dictionary. The teacher will lend you one.” (must / don’t have to)", a: "Langkah 1: kalimat kedua menyebut guru akan meminjamkan kamus. Langkah 2: artinya membawa kamus tidak wajib. Langkah 3: jawabannya don’t have to, karena don’t have to berarti tidak perlu, bukan dilarang." },
      q: [
        ["When I was three, I ___ swim. Now I can swim well.", ["couldn’t", "can’t", "mustn’t", "won’t"], 0, "Masa lalu: couldn’t."],
        ["A: “___ you help me carry this box?” B: “Sure.”", ["Will", "Must", "Should", "Have"], 0, "Meminta kesediaan."],
        ["You look tired. You ___ take a rest.", ["should", "mustn’t", "can’t", "don’t"], 0, "Memberi saran."],
        ["Tomorrow is a holiday. We ___ wear uniforms.", ["don’t have to", "mustn’t", "has to", "must"], 0, "Tidak wajib."],
        ["My sister ___ able to drive next year.", ["will be", "is", "can be", "must"], 0, "Will be able to."]
      ]
    },
    "simple-past": {
      s: 2,
      pts: [
        "<b>Time signals:</b> yesterday, last week, two days ago, in 2019.",
        "<b>Was / were:</b> untuk kalimat tanpa kata kerja utama. I was sick. They were at home.",
        "<b>Language features recount:</b> kata ganti orang (I, we) dan time connectives (first, then, after that, finally)."
      ],
      ex2: { q: "Ubah ke simple past dengan keterangan yesterday: “We go to the museum and see many old statues.”", a: "Langkah 1: tambahkan keterangan waktu yesterday. Langkah 2: go berubah menjadi went (irregular). Langkah 3: see berubah menjadi saw. Hasilnya: Yesterday, we went to the museum and saw many old statues." },
      q: [
        ["They ___ at the library two hours ago.", ["were", "was", "are", "been"], 0, "They + were."],
        ["The past form of “eat” is …", ["ate", "eated", "eaten", "eats"], 0, "Irregular verb."],
        ["“After that, we had lunch at a small restaurant.” The words “after that” are a …", ["time connective", "noun", "adjective", "pronoun"], 0, "Penanda urutan."],
        ["The last part of a recount text that gives the writer’s feeling is …", ["reorientation", "orientation", "events", "complication"], 0, "Penutup."],
        ["Choose the negative form of “She cooked fried rice.”", ["She didn’t cook fried rice.", "She didn’t cooked fried rice.", "She doesn’t cook fried rice.", "She not cooked fried rice."], 0, "didn’t + V1."]
      ]
    },
    "comparison": {
      pts: [
        "<b>Less … than:</b> kurang … dibanding. This bag is less expensive than that one.",
        "<b>Ejaan:</b> hot → hotter, thin → thinner (konsonan digandakan), large → larger.",
        "<b>Few / many:</b> fewer → the fewest, more → the most."
      ],
      ex2: { q: "Data tinggi badan: Andi 150 cm, Budi 160 cm, Caca 155 cm. Buat kalimat comparative dan superlative.", a: "Langkah 1: bandingkan dua orang. Budi (160 cm) lebih tinggi dari Caca (155 cm): Budi is taller than Caca. Langkah 2: cari yang paling tinggi dari tiga orang: Budi is the tallest of the three. Langkah 3: yang paling pendek Andi: Andi is the shortest." },
      q: [
        ["Today is ___ than yesterday. (hot)", ["hotter", "hoter", "more hot", "hottest"], 0, "Konsonan digandakan."],
        ["This is ___ movie I have ever seen. (bad)", ["the worst", "the baddest", "worse", "the most bad"], 0, "Irregular."],
        ["Jakarta is ___ city in Indonesia. (large)", ["the largest", "larger", "the most large", "largest than"], 0, "Superlative."],
        ["Andi has 5 books. Budi has 8 books. Andi has ___ books than Budi.", ["fewer", "more", "most", "much"], 0, "Lebih sedikit (benda terhitung)."],
        ["A motorbike is ___ expensive than a car.", ["less", "least", "more less", "much"], 0, "Less … than."]
      ]
    },
    "narrative-fable": {
      pts: [
        "<b>Legend</b> adalah narrative tentang asal-usul tempat atau peristiwa, contohnya “Malin Kundang” dan “Sangkuriang”.",
        "<b>Direct speech</b> sering muncul: “Help me!” cried the mouse.",
        "<b>Adjectives</b> menggambarkan watak tokoh: clever, greedy, lazy, kind."
      ],
      ex2: { q: "Baca: “Once upon a time, a lion caught a mouse. The mouse begged, ‘Please let me go. One day I will help you.’ The lion laughed and let it go.” Tentukan bagian strukturnya, arti “begged”, dan rujukan kata “it”.", a: "Langkah 1: kalimat itu memperkenalkan tokoh dan masalah awal, jadi termasuk orientation. Langkah 2: begged adalah bentuk lampau dari beg, artinya memohon. Langkah 3: kata it pada kalimat terakhir merujuk pada the mouse." },
      q: [
        ["“The greedy dog lost its bone.” The word “greedy” means …", ["serakah", "rajin", "pintar", "baik hati"], 0, "Greedy = serakah."],
        ["The part of a narrative where the problem is solved is called …", ["resolution", "orientation", "complication", "reorientation"], 0, "Penyelesaian."],
        ["“Malin Kundang” is an example of a …", ["legend", "fable", "biography", "report"], 0, "Cerita rakyat Sumatra Barat."],
        ["“Once upon a time, there lived a clever mouse deer.” This sentence is part of the …", ["orientation", "complication", "resolution", "coda"], 0, "Pengenalan tokoh."],
        ["The moral value of “The Ant and the Grasshopper” is …", ["prepare for the future", "play all the time", "never help others", "sleep a lot"], 0, "Semut menyiapkan makanan untuk musim dingin."]
      ]
    }
  },
  add: [
    {
      id: "invitation", t: "Invitations: Accepting and Declining", s: 1,
      sum: "Mengundang teman ke pesta ulang tahun atau mengajak belajar bersama butuh ungkapan yang tepat. Di bab ini kamu belajar cara mengundang, menerima, dan menolak undangan dalam bahasa Inggris.\nMenolak undangan harus tetap sopan. Biasanya kamu berterima kasih, meminta maaf, lalu memberi alasan. Undangan tertulis juga perlu memuat informasi acara yang lengkap.",
      pts: [
        "<b>Inviting:</b> Would you like to come to …? Let’s … How about …? I’d like to invite you to …",
        "<b>Accepting:</b> Sure, I’d love to. That sounds great. Okay, see you there.",
        "<b>Declining:</b> I’m sorry, I can’t. I’d love to, but … Thanks, but I have to …",
        "<b>Invitation card:</b> nama acara, waktu (date, time), tempat (venue), pengundang, dan RSVP (konfirmasi kehadiran).",
        "<b>Would you like to + V1:</b> setelah to selalu kata kerja bentuk dasar.",
        "<b>Let’s + V1:</b> ajakan yang ikut melibatkan pembicara. Let’s go to the library."
      ],
      ex: { q: "A: “Would you like to come to my birthday party on Saturday?” B: “I’d love to, but I have to visit my grandma.” Apakah B menerima atau menolak?", a: "B menolak dengan sopan. Ungkapan “I’d love to, but …” menunjukkan ia ingin datang tetapi punya alasan tidak bisa." },
      tip: "Kalau menolak, pakai pola: terima kasih + maaf + alasan. Contoh: “Thanks for inviting me. I’m sorry I can’t come because I’m sick.”",
      q: [
        ["“Would you like to join our study group?” This is an expression of …", ["inviting", "declining", "apologizing", "complaining"], 0, "Mengundang."],
        ["Which expression accepts an invitation?", ["Sure, I’d love to.", "I’m sorry, I can’t.", "Thanks, but I’m busy.", "Maybe next time."], 0, "Menerima undangan."],
        ["A: “Let’s play badminton this afternoon.” B: “___. I have to finish my homework.”", ["I’m sorry, I can’t", "That sounds great", "Okay, see you there", "Sure, why not"], 0, "Menolak dengan alasan."],
        ["“RSVP” on an invitation card asks you to …", ["confirm whether you will come", "bring a present", "wear a uniform", "buy a ticket"], 0, "Konfirmasi kehadiran."],
        ["Would you like ___ dinner with us?", ["to have", "having", "has", "had"], 0, "Would like + to + V1."],
        ["Let’s ___ to the school library.", ["go", "going", "to go", "went"], 0, "Let’s + V1."],
        ["Read: “Dear Sinta, please come to my party on Sunday, 5 May, at 4 p.m. at Jl. Melati 10. Love, Rara.” Where is the party?", ["at Jl. Melati 10", "at Sinta’s house", "at school", "on Sunday"], 0, "Tempat acara."],
        ["Based on the card above, who sends the invitation?", ["Rara", "Sinta", "Melati", "Sinta’s mother"], 0, "Nama pengirim di akhir kartu."],
        ["“I’d love to, but I have a piano lesson.” The speaker …", ["declines the invitation", "accepts the invitation", "gives an invitation", "asks for an opinion"], 0, "Menolak."],
        ["“How about going to the beach tomorrow?” has the same function as …", ["Let’s go to the beach tomorrow.", "I went to the beach yesterday.", "The beach is beautiful.", "I don’t like the beach."], 0, "Sama-sama ajakan."]
      ]
    },
    {
      id: "present-continuous", t: "Present Continuous Tense", s: 1,
      sum: "Present continuous tense dipakai untuk kegiatan yang sedang berlangsung saat ini. Misalnya kamu menceritakan apa yang sedang dilakukan orang-orang di jalan atau di kelas.\nPolanya: subjek + am/is/are + kata kerja berakhiran -ing. Keterangan seperti now, right now, at the moment, dan Look! sering muncul sebagai penanda.",
      pts: [
        "<b>Positif:</b> S + am/is/are + V-ing. I am reading. She is cooking. They are playing.",
        "<b>Negatif:</b> S + am/is/are + not + V-ing. He isn’t sleeping.",
        "<b>Tanya:</b> Am/Is/Are + S + V-ing? Are you listening?",
        "<b>Aturan -ing:</b> write → writing (buang e), swim → swimming (gandakan konsonan), play → playing.",
        "<b>Time signals:</b> now, right now, at the moment, Look!, Listen!",
        "<b>Stative verbs</b> seperti know, like, dan want biasanya tidak memakai -ing."
      ],
      ex: { q: "Lengkapi: “Look! The children ___ (run) in the field.”", a: "Penanda Look! menunjukkan kegiatan sedang terjadi. Subjek the children jamak, jadi pakai are. run menjadi running. Jawaban: are running." },
      tip: "Ingat pasangan to be: I → am, he/she/it → is, you/we/they → are.",
      q: [
        ["Listen! Someone ___ the piano.", ["is playing", "are playing", "plays", "played"], 0, "Someone dianggap tunggal."],
        ["We ___ English right now.", ["are studying", "is studying", "studying", "studies"], 0, "We + are."],
        ["The -ing form of “swim” is …", ["swimming", "swiming", "swimmeing", "swims"], 0, "Huruf m digandakan."],
        ["___ your brother sleeping now?", ["Is", "Are", "Does", "Do"], 0, "Brother tunggal."],
        ["My mother isn’t ___ at the moment. She is reading.", ["cooking", "cook", "cooks", "cooked"], 0, "to be + V-ing."],
        ["Which sentence is in the present continuous tense?", ["They are watching a movie.", "They watched a movie.", "They watch movies every week.", "They will watch a movie."], 0, "to be + V-ing."],
        ["The -ing form of “write” is …", ["writing", "writting", "writeing", "wroting"], 0, "Buang huruf e."],
        ["In a picture, a man holds an umbrella. What is the man doing?", ["He is holding an umbrella.", "He holds an umbrella yesterday.", "He held an umbrella.", "He is hold an umbrella."], 0, "Sedang berlangsung."],
        ["I ___ my homework now, so I can’t go out.", ["am doing", "is doing", "are doing", "do"], 0, "I + am."],
        ["Choose the correct sentence.", ["I know the answer.", "I am knowing the answer.", "I knowing the answer.", "I am know the answer."], 0, "Know adalah stative verb."]
      ]
    },
    {
      id: "descriptive", t: "Descriptive Text", s: 2,
      sum: "Descriptive text menggambarkan ciri-ciri orang, hewan, benda, atau tempat tertentu secara rinci. Tujuannya supaya pembaca bisa membayangkan apa yang dideskripsikan.\nTeks ini memakai simple present tense karena ciri-ciri yang dijelaskan berlaku umum. Kamu juga akan banyak bertemu kata sifat (adjectives) seperti tall, friendly, dan beautiful.",
      pts: [
        "<b>Generic structure:</b> identification (memperkenalkan objek) dan description (ciri fisik, sifat, kebiasaan).",
        "<b>Simple present tense:</b> She has long hair. He is kind. It lives in the forest.",
        "<b>Adjectives:</b> fisik (tall, slim, curly) dan sifat (friendly, diligent, humble).",
        "<b>Has / have:</b> I/you/we/they have, he/she/it has.",
        "<b>Urutan adjective:</b> opinion – size – age – shape – color – origin. Contoh: a cute little white cat.",
        "<b>Contoh topik:</b> my idol, my best friend, my pet cat, Borobudur Temple."
      ],
      ex: { q: "Baca: “My cat, Milo, is two years old. He has soft orange fur and big green eyes. He is very playful.” Mana bagian identification?", a: "Kalimat pertama, “My cat, Milo, is two years old,” memperkenalkan objek. Kalimat berikutnya adalah description." },
      tip: "Saat menjawab soal descriptive, cari kata sifat dan kata has atau is. Di situlah ciri-cirinya.",
      q: [
        ["The purpose of a descriptive text is to …", ["describe a particular person, place, or thing", "tell a past experience", "entertain with a conflict", "explain how to make something"], 0, "Menggambarkan."],
        ["The first part of a descriptive text is …", ["identification", "description", "orientation", "resolution"], 0, "Memperkenalkan objek."],
        ["Descriptive text mostly uses the … tense.", ["simple present", "simple past", "present continuous", "simple future"], 0, "Ciri berlaku umum."],
        ["My best friend ___ curly hair.", ["has", "have", "having", "is"], 0, "He/she + has."],
        ["“Rina is diligent. She always finishes her homework on time.” “Diligent” means …", ["rajin", "malas", "pemalu", "sombong"], 0, "Diligent = rajin."],
        ["Choose the correct order: a ___ cat.", ["cute little white", "white little cute", "little white cute", "white cute little"], 0, "Opinion – size – color."],
        ["Read: “Borobudur is a Buddhist temple in Magelang, Central Java. It has 72 stupas on its round terraces.” What does “It” refer to?", ["Borobudur", "Magelang", "Central Java", "the stupas"], 0, "Kata ganti untuk candi."],
        ["Based on the text above, where is Borobudur?", ["in Magelang, Central Java", "in Yogyakarta city", "in Bali", "in East Java"], 0, "Disebut di kalimat pertama."],
        ["Which word describes personality, not appearance?", ["humble", "tall", "slim", "curly"], 0, "Humble = rendah hati."],
        ["The elephant ___ a long trunk and big ears.", ["has", "have", "is", "are"], 0, "It + has."]
      ]
    },
    {
      id: "greeting-card", t: "Greeting Cards and Short Messages", s: 2,
      sum: "Kartu ucapan (greeting card) dipakai untuk menyampaikan selamat, simpati, atau harapan baik, misalnya saat ulang tahun, hari raya, atau ketika teman sakit. Pesannya singkat, tetapi harus tepat dengan situasinya.\nSelain kartu ucapan, kamu juga perlu memahami pesan singkat (short message). Bacalah dengan teliti: siapa pengirimnya, untuk siapa, dan apa tujuannya.",
      pts: [
        "<b>Bagian kartu:</b> penerima (To/Dear …), isi ucapan, pengirim (From/Love, …).",
        "<b>Birthday:</b> Happy birthday! Many happy returns of the day. Wish you all the best.",
        "<b>Congratulations:</b> Congratulations on your success! Well done!",
        "<b>Get well soon:</b> I hope you get well soon. Get better quickly!",
        "<b>Sympathy:</b> I’m sorry to hear that. My deepest condolences.",
        "<b>Hari raya:</b> Happy Eid al-Fitr! Merry Christmas! Happy New Year!"
      ],
      ex: { q: "Temanmu juara lomba pidato. Ucapan apa yang tepat?", a: "Ucapan selamat atas keberhasilan: “Congratulations on winning the speech contest! I’m proud of you.”" },
      tip: "Cocokkan ucapan dengan situasi. Sakit: get well soon. Berhasil: congratulations. Berduka: condolences.",
      q: [
        ["Your friend is in the hospital. You write: “___”", ["Get well soon!", "Congratulations!", "Happy birthday!", "Have a nice trip!"], 0, "Semoga cepat sembuh."],
        ["“Congratulations on your graduation!” This card is for someone who …", ["has finished school", "is sick", "is moving house", "lost a pet"], 0, "Lulus sekolah."],
        ["Read: “Dear Anton, Happy 14th birthday! Wish you all the best. From, Dimas.” Who receives the card?", ["Anton", "Dimas", "Anton’s mother", "Dimas’s friend"], 0, "Dear Anton."],
        ["Based on the card above, how old is Anton now?", ["14 years old", "13 years old", "15 years old", "4 years old"], 0, "14th birthday."],
        ["Which expression shows sympathy?", ["I’m sorry to hear about your loss.", "Well done!", "Happy holiday!", "See you soon!"], 0, "Simpati."],
        ["“Many happy returns of the day” is usually said on …", ["a birthday", "a funeral", "a graduation day", "a sick day"], 0, "Ucapan ulang tahun."],
        ["Read: “Mom, I’m at Dina’s house doing a project. I’ll be home at 5. Theo.” Why is Theo at Dina’s house?", ["to do a project", "to have a party", "to visit a sick friend", "to watch a movie"], 0, "Isi pesan."],
        ["Based on the message above, what time will Theo be home?", ["at 5", "at 4", "at 6", "at 3"], 0, "I’ll be home at 5."],
        ["The best reply to “Congratulations on winning the match!” is …", ["Thank you very much.", "Get well soon.", "I’m sorry to hear that.", "You’re welcome to come."], 0, "Membalas ucapan selamat."],
        ["The purpose of a greeting card is to …", ["express feelings on a special occasion", "explain a process", "describe a place", "report news"], 0, "Menyampaikan ucapan."]
      ]
    }
  ],
  order: ["opinion", "modals", "invitation", "present-continuous", "comparison", "descriptive", "simple-past", "narrative-fable", "greeting-card"]
});

// ===================== PENDIDIKAN PANCASILA =====================
EXT(8, "ppkn", {
  more: {
    "ideologi": {
      pts: [
        "<b>Pancasila sebagai pandangan hidup:</b> pedoman bersikap dan bertingkah laku sehari-hari.",
        "<b>Sejarah perumusan:</b> sidang BPUPKI 29 Mei–1 Juni 1945, Piagam Jakarta 22 Juni 1945, disahkan PPKI 18 Agustus 1945.",
        "<b>Ideologi tertutup</b> memaksakan nilai dari penguasa, berbeda dengan Pancasila yang terbuka."
      ],
      ex2: { q: "Theo ikut kerja bakti membersihkan masjid dan gereja di kampungnya bersama warga. Sila mana yang ia amalkan?", a: "Langkah 1: membersihkan tempat ibadah agama lain menunjukkan toleransi antarumat beragama, sesuai sila ke-1. Langkah 2: bekerja bersama warga mencerminkan gotong royong dan persatuan, sesuai sila ke-3. Langkah 3: jadi Theo mengamalkan sila ke-1 dan ke-3 sekaligus." },
      q: [
        ["Pancasila disahkan sebagai dasar negara oleh PPKI pada tanggal …", ["18 Agustus 1945", "1 Juni 1945", "17 Agustus 1945", "22 Juni 1945"], 0, "Sidang PPKI pertama."],
        ["Rumusan dasar negara yang disusun Panitia Sembilan dikenal sebagai …", ["Piagam Jakarta", "Dekrit Presiden", "Sumpah Pemuda", "Supersemar"], 0, "22 Juni 1945."],
        ["Contoh nilai praksis Pancasila adalah …", ["siswa bergiliran piket membersihkan kelas", "isi Pembukaan UUD 1945", "rumusan lima sila", "undang-undang pendidikan"], 0, "Pelaksanaan sehari-hari."],
        ["Bangga memakai produk dalam negeri mencerminkan sila ke …", ["3", "1", "2", "4"], 0, "Cinta tanah air dan persatuan."],
        ["Ciri ideologi tertutup adalah …", ["nilainya dipaksakan oleh penguasa", "nilainya digali dari budaya masyarakat", "terbuka pada perkembangan zaman", "menghargai musyawarah"], 0, "Kebalikan ideologi terbuka."]
      ]
    },
    "lembaga-negara": {
      pts: [
        "<b>Presiden dan Wakil Presiden</b> dipilih langsung oleh rakyat untuk masa jabatan 5 tahun dan dapat dipilih kembali satu kali.",
        "<b>DPD</b> mewakili daerah. Setiap provinsi diwakili 4 anggota.",
        "<b>Komisi Yudisial</b> mengusulkan pengangkatan hakim agung dan menjaga kehormatan hakim."
      ],
      ex2: { q: "Sebuah undang-undang dianggap bertentangan dengan UUD 1945. Ke mana warga bisa mengajukan permohonan, dan apa nama prosesnya?", a: "Langkah 1: menguji undang-undang terhadap UUD adalah wewenang Mahkamah Konstitusi. Langkah 2: proses ini disebut uji materi (judicial review). Langkah 3: putusan MK bersifat final, tidak ada upaya banding." },
      q: [
        ["Masa jabatan presiden di Indonesia adalah …", ["5 tahun dan dapat dipilih kembali satu kali", "7 tahun", "seumur hidup", "4 tahun tanpa batas periode"], 0, "Pasal 7 UUD 1945."],
        ["Setiap provinsi diwakili oleh … anggota DPD.", ["4", "2", "5", "10"], 0, "Jumlahnya sama untuk tiap provinsi."],
        ["Lembaga yang mengusulkan pengangkatan hakim agung adalah …", ["Komisi Yudisial", "DPR", "MPR", "BPK"], 0, "KY."],
        ["Lembaga yang melantik presiden dan wakil presiden adalah …", ["MPR", "DPR", "MK", "MA"], 0, "Pasal 3 UUD 1945."],
        ["Teori pembagian kekuasaan menjadi eksekutif, legislatif, dan yudikatif (trias politika) dikemukakan oleh …", ["Montesquieu", "Plato", "Soekarno", "Aristoteles"], 0, "Montesquieu."]
      ]
    },
    "perundangan": {
      s: 1,
      pts: [
        "<b>Undang-undang</b> dibuat DPR bersama Presiden.",
        "<b>Peraturan Pemerintah</b> ditetapkan Presiden untuk menjalankan undang-undang.",
        "<b>Peraturan desa</b> ditetapkan kepala desa bersama Badan Permusyawaratan Desa (BPD)."
      ],
      ex2: { q: "Sebuah Perda melarang warga beribadah sesuai agamanya. Apakah Perda ini sah?", a: "Langkah 1: Pasal 29 ayat 2 UUD 1945 menjamin kemerdekaan tiap penduduk untuk beribadah menurut agamanya. Langkah 2: Perda berada di bawah UUD dalam hierarki. Langkah 3: peraturan yang lebih rendah tidak boleh bertentangan dengan yang lebih tinggi. Langkah 4: jadi Perda itu tidak sah dan dapat dibatalkan." },
      q: [
        ["Undang-undang dibentuk oleh …", ["DPR bersama Presiden", "MPR", "MA", "DPD sendiri"], 0, "Fungsi legislasi."],
        ["Peraturan yang ditetapkan untuk menjalankan undang-undang adalah …", ["Peraturan Pemerintah", "Perda", "Tap MPR", "UUD"], 0, "PP."],
        ["Peraturan desa ditetapkan oleh kepala desa bersama …", ["Badan Permusyawaratan Desa", "camat", "bupati", "DPRD"], 0, "BPD."],
        ["Hierarki peraturan perundang-undangan saat ini diatur dalam UU Nomor …", ["12 Tahun 2011", "10 Tahun 2004", "1 Tahun 1945", "20 Tahun 2003"], 0, "Sudah diubah dua kali, tetapi hierarkinya tetap."],
        ["Contoh sikap taat aturan di sekolah adalah …", ["datang tepat waktu dan memakai seragam lengkap", "mencontek saat ujian", "membolos", "mencoret tembok"], 0, "Taat tata tertib."]
      ]
    },
    "sumpah-pemuda": {
      pts: [
        "<b>Kongres Pemuda I</b> berlangsung 30 April–2 Mei 1926 di Batavia. Kongres Pemuda II berlangsung 27–28 Oktober 1928.",
        "<b>Tokoh Kongres Pemuda II:</b> Soegondo Djojopoespito (ketua) dan Mohammad Yamin (perumus teks Sumpah Pemuda).",
        "<b>Bhinneka Tunggal Ika:</b> berbeda-beda tetapi tetap satu, semboyan yang sejalan dengan semangat Sumpah Pemuda."
      ],
      ex2: { q: "Di kelasmu, siswa dari suku Batak, Jawa, dan Bugis sering berkelompok sesuai sukunya. Bagaimana menerapkan semangat Sumpah Pemuda?", a: "Langkah 1: sadari bahwa semua siswa sama-sama bangsa Indonesia. Langkah 2: bentuk kelompok belajar campuran dari berbagai suku. Langkah 3: pakai bahasa Indonesia saat berdiskusi supaya semua paham. Langkah 4: hargai budaya teman, misalnya saling mengenalkan makanan daerah." },
      q: [
        ["Ketua Kongres Pemuda II adalah …", ["Soegondo Djojopoespito", "Mohammad Yamin", "W.R. Supratman", "Soekarno"], 0, "Ketua kongres."],
        ["Perumus teks Sumpah Pemuda adalah …", ["Mohammad Yamin", "Soegondo Djojopoespito", "Ki Hajar Dewantara", "Mohammad Hatta"], 0, "Yamin."],
        ["Semboyan Bhinneka Tunggal Ika berarti …", ["berbeda-beda tetapi tetap satu", "bersatu kita teguh", "satu nusa satu bangsa", "merdeka atau mati"], 0, "Dari kitab Sutasoma."],
        ["Kongres Pemuda I diadakan pada tahun …", ["1926", "1928", "1908", "1945"], 0, "30 April–2 Mei 1926."],
        ["Sikap yang bertentangan dengan semangat Sumpah Pemuda adalah …", ["mengejek suku lain", "memakai bahasa Indonesia dengan baik", "bekerja sama dengan teman berbeda suku", "bangga dengan budaya bangsa"], 0, "Memecah belah."]
      ]
    }
  },
  add: [
    {
      id: "uud-1945", t: "Kedudukan dan Fungsi UUD 1945", s: 1,
      sum: "UUD Negara Republik Indonesia Tahun 1945 adalah konstitusi atau hukum dasar tertulis negara kita. Semua peraturan lain harus bersumber padanya dan tidak boleh bertentangan dengannya.\nUUD 1945 disahkan PPKI pada 18 Agustus 1945. Setelah reformasi, UUD 1945 diamandemen empat kali (1999–2002) supaya lebih demokratis, tetapi Pembukaannya tidak diubah.",
      pts: [
        "<b>Konstitusi:</b> hukum dasar tertulis yang mengatur penyelenggaraan negara.",
        "<b>Sistematika setelah amandemen:</b> Pembukaan (4 alinea) dan pasal-pasal.",
        "<b>Pembukaan alinea ke-4</b> memuat tujuan negara dan rumusan Pancasila.",
        "<b>Amandemen:</b> I (1999), II (2000), III (2001), IV (2002), dilakukan oleh MPR.",
        "<b>Kesepakatan amandemen:</b> tidak mengubah Pembukaan, tetap NKRI, mempertegas sistem presidensial, isi penjelasan yang normatif dimasukkan ke pasal.",
        "<b>Fungsi konstitusi:</b> membatasi kekuasaan pemerintah, menjamin hak warga negara, menjadi dasar hukum."
      ],
      ex: { q: "Sebutkan empat tujuan negara menurut Pembukaan UUD 1945 alinea ke-4.", a: "Melindungi segenap bangsa dan seluruh tumpah darah Indonesia, memajukan kesejahteraan umum, mencerdaskan kehidupan bangsa, dan ikut melaksanakan ketertiban dunia." },
      tip: "Ingat angka amandemen: empat kali, empat tahun berturut-turut, 1999 sampai 2002.",
      q: [
        ["UUD 1945 disahkan oleh PPKI pada tanggal …", ["18 Agustus 1945", "17 Agustus 1945", "1 Juni 1945", "22 Juni 1945"], 0, "Sehari setelah proklamasi."],
        ["Amandemen UUD 1945 dilakukan sebanyak …", ["4 kali", "2 kali", "3 kali", "5 kali"], 0, "1999–2002."],
        ["Lembaga yang berwenang mengubah UUD 1945 adalah …", ["MPR", "DPR", "Presiden", "MK"], 0, "Pasal 3 dan Pasal 37."],
        ["Bagian UUD 1945 yang disepakati tidak diubah adalah …", ["Pembukaan", "Pasal 1", "Bab XIV", "Aturan Peralihan"], 0, "Memuat dasar negara."],
        ["Tujuan negara “mencerdaskan kehidupan bangsa” terdapat dalam Pembukaan UUD 1945 alinea …", ["keempat", "pertama", "kedua", "ketiga"], 0, "Alinea ke-4."],
        ["Pembukaan UUD 1945 terdiri atas … alinea.", ["4", "3", "5", "6"], 0, "Empat alinea."],
        ["Konstitusi berfungsi untuk …", ["membatasi kekuasaan pemerintah", "menambah kekuasaan presiden", "menghapus hak warga", "mengganti dasar negara"], 0, "Mencegah kesewenang-wenangan."],
        ["Alinea pertama Pembukaan UUD 1945 berisi …", ["pernyataan bahwa kemerdekaan adalah hak segala bangsa", "rumusan Pancasila", "tujuan negara", "proklamasi kemerdekaan Indonesia"], 0, "Penjajahan harus dihapuskan."],
        ["Pasal 1 ayat 3 UUD 1945 menyatakan Indonesia adalah negara …", ["hukum", "kekuasaan", "federal", "kerajaan"], 0, "Negara hukum."],
        ["Salah satu kesepakatan dasar amandemen adalah mempertegas sistem pemerintahan …", ["presidensial", "parlementer", "monarki", "federal"], 0, "Kesepakatan MPR."]
      ]
    },
    {
      id: "kebangkitan-nasional", t: "Semangat Kebangkitan Nasional 1908", s: 2,
      sum: "Pada 20 Mei 1908, para pelajar STOVIA di Batavia mendirikan Budi Utomo. Peristiwa ini dianggap awal kebangkitan nasional karena perjuangan mulai memakai organisasi modern, bukan lagi senjata dan bersifat kedaerahan.\nSemangat kebangkitan nasional adalah semangat untuk maju, bersatu, dan berjuang lewat pendidikan. Semangat itu bisa kamu terapkan sekarang dengan belajar tekun dan berprestasi untuk Indonesia.",
      pts: [
        "<b>Budi Utomo:</b> didirikan Sutomo dan pelajar STOVIA atas gagasan dr. Wahidin Sudirohusodo, 20 Mei 1908.",
        "<b>Hari Kebangkitan Nasional</b> diperingati setiap 20 Mei.",
        "<b>Faktor dalam negeri:</b> penderitaan akibat penjajahan, munculnya kaum terpelajar, kenangan kejayaan masa lalu (Sriwijaya, Majapahit).",
        "<b>Faktor luar negeri:</b> kemenangan Jepang atas Rusia (1905), paham nasionalisme, pergerakan di India, Filipina, dan Cina.",
        "<b>Nilai kebangkitan nasional:</b> cinta tanah air, rela berkorban, persatuan, semangat belajar.",
        "<b>Penerapan masa kini:</b> berprestasi, berinovasi, memakai teknologi untuk hal positif, bangga dengan budaya bangsa."
      ],
      ex: { q: "Mengapa berdirinya Budi Utomo disebut kebangkitan nasional, padahal sebelumnya sudah banyak perlawanan?", a: "Karena sejak Budi Utomo, perjuangan memakai organisasi yang teratur dan dipimpin kaum terpelajar. Perlawanan sebelumnya bersifat kedaerahan dan mudah dipatahkan." },
      tip: "Bedakan tanggalnya: 20 Mei 1908 Kebangkitan Nasional, 28 Oktober 1928 Sumpah Pemuda, 17 Agustus 1945 Proklamasi.",
      q: [
        ["Budi Utomo didirikan oleh para pelajar …", ["STOVIA", "Taman Siswa", "Muhammadiyah", "Perhimpunan Indonesia"], 0, "Sekolah dokter di Batavia."],
        ["Gagasan pendirian Budi Utomo berasal dari …", ["dr. Wahidin Sudirohusodo", "Soekarno", "Ki Hajar Dewantara", "Mohammad Hatta"], 0, "Diwujudkan bersama Sutomo."],
        ["Hari Kebangkitan Nasional diperingati setiap tanggal …", ["20 Mei", "28 Oktober", "10 November", "2 Mei"], 0, "Hari lahir Budi Utomo."],
        ["Faktor luar negeri yang menumbuhkan semangat kebangkitan nasional adalah …", ["kemenangan Jepang atas Rusia", "tanam paksa", "kerja rodi", "berdirinya VOC"], 0, "Tahun 1905."],
        ["Perjuangan setelah tahun 1908 ditandai dengan …", ["penggunaan organisasi modern", "perang kedaerahan", "bergantung pada satu raja", "senjata tradisional"], 0, "Organisasi."],
        ["Contoh penerapan semangat kebangkitan nasional bagi pelajar adalah …", ["belajar tekun dan berprestasi", "membolos sekolah", "menyebarkan hoaks", "meremehkan budaya sendiri"], 0, "Semangat maju."],
        ["Kaum terpelajar pribumi muncul antara lain karena kebijakan …", ["Politik Etis bidang edukasi", "tanam paksa", "kerja rodi", "monopoli VOC"], 0, "Sekolah untuk pribumi."],
        ["Kenangan kejayaan masa lalu yang membangkitkan semangat adalah kejayaan …", ["Sriwijaya dan Majapahit", "VOC", "Portugis", "Jepang"], 0, "Kerajaan Nusantara."],
        ["Nilai rela berkorban dapat ditunjukkan dengan …", ["menyisihkan waktu dan tenaga untuk kepentingan bersama", "mementingkan diri sendiri", "menolak kerja bakti", "menunggu imbalan setiap membantu"], 0, "Mendahulukan kepentingan bersama."],
        ["Urutan peristiwa yang benar adalah …", ["Budi Utomo – Sumpah Pemuda – Proklamasi", "Sumpah Pemuda – Budi Utomo – Proklamasi", "Proklamasi – Budi Utomo – Sumpah Pemuda", "Budi Utomo – Proklamasi – Sumpah Pemuda"], 0, "1908, 1928, 1945."]
      ]
    },
    {
      id: "ketahanan-nasional", t: "Bela Negara dan Ketahanan Nasional", s: 2,
      sum: "Ketahanan nasional adalah kondisi dinamis bangsa yang ulet dan tangguh dalam menghadapi ancaman, tantangan, hambatan, dan gangguan. Ancaman bisa datang dari luar maupun dari dalam negeri.\nBela negara bukan hanya tugas tentara. Kamu sebagai pelajar juga ikut bela negara dengan belajar sungguh-sungguh, menjaga persatuan, dan menolak hoaks. Hak dan kewajiban bela negara diatur dalam Pasal 27 ayat 3 dan Pasal 30 UUD 1945.",
      pts: [
        "<b>Ancaman militer:</b> agresi, pelanggaran wilayah, terorisme bersenjata. <b>Nonmiliter:</b> bidang ideologi, politik, ekonomi, sosial budaya (narkoba, hoaks).",
        "<b>Pasal 27 ayat 3:</b> setiap warga negara berhak dan wajib ikut serta dalam upaya pembelaan negara.",
        "<b>Pasal 30 ayat 1:</b> setiap warga negara berhak dan wajib ikut serta dalam usaha pertahanan dan keamanan negara.",
        "<b>Sishankamrata:</b> sistem pertahanan dan keamanan rakyat semesta, melibatkan TNI, Polri, dan rakyat.",
        "<b>Astagatra:</b> trigatra (geografi, kekayaan alam, penduduk) dan pancagatra (ideologi, politik, ekonomi, sosial budaya, pertahanan keamanan).",
        "<b>Bela negara pelajar:</b> disiplin, cinta produk dalam negeri, ikut Pramuka atau PMR, menjaga nama baik sekolah."
      ],
      ex: { q: "Kamu menerima pesan berantai berisi provokasi antarsuku. Apa tindakan bela negara yang tepat?", a: "Jangan langsung menyebarkan. Cek kebenarannya lewat sumber resmi. Kalau terbukti hoaks, hapus dan beri tahu pengirimnya. Tindakan ini membantu menangkal ancaman nonmiliter di bidang sosial budaya." },
      tip: "Ingat: ancaman militer memakai kekuatan bersenjata, ancaman nonmiliter tidak. Hoaks dan narkoba termasuk ancaman nonmiliter.",
      q: [
        ["Hak dan kewajiban warga negara dalam upaya pembelaan negara diatur dalam UUD 1945 Pasal …", ["27 ayat 3", "28 ayat 1", "29 ayat 2", "31 ayat 1"], 0, "Pasal 27 ayat 3."],
        ["Penyebaran narkoba termasuk ancaman …", ["nonmiliter", "militer", "agresi", "pemberontakan bersenjata"], 0, "Tidak memakai senjata."],
        ["Sistem pertahanan negara Indonesia disebut …", ["Sishankamrata", "trias politika", "astagatra", "otonomi daerah"], 0, "Pertahanan rakyat semesta."],
        ["Contoh bela negara oleh pelajar adalah …", ["belajar dengan sungguh-sungguh", "ikut tawuran", "menyebarkan hoaks", "merusak fasilitas umum"], 0, "Sesuai kemampuan pelajar."],
        ["Unsur trigatra dalam ketahanan nasional meliputi …", ["geografi, kekayaan alam, penduduk", "ideologi, politik, ekonomi", "TNI, Polri, rakyat", "DPR, MPR, DPD"], 0, "Aspek alamiah."],
        ["Pelanggaran wilayah udara oleh pesawat militer asing termasuk ancaman …", ["militer", "nonmiliter", "ekonomi", "sosial budaya"], 0, "Kekuatan bersenjata."],
        ["Ketahanan nasional bersifat dinamis, artinya …", ["dapat meningkat atau menurun sesuai keadaan", "tidak pernah berubah", "hanya ada saat perang", "hanya urusan TNI"], 0, "Dinamis."],
        ["Membeli produk dalam negeri membantu ketahanan di bidang …", ["ekonomi", "militer", "ideologi", "geografi"], 0, "Memperkuat ekonomi."],
        ["Alat negara yang bertugas mempertahankan kedaulatan negara adalah …", ["TNI", "BPK", "KPU", "Komnas HAM"], 0, "Pertahanan negara."],
        ["Masuknya paham yang ingin mengganti Pancasila termasuk ancaman di bidang …", ["ideologi", "ekonomi", "geografi", "kesehatan"], 0, "Ideologi."]
      ]
    }
  ],
  order: ["ideologi", "uud-1945", "lembaga-negara", "perundangan", "sumpah-pemuda", "kebangkitan-nasional", "ketahanan-nasional"]
});

// ===================== INFORMATIKA =====================
EXT(8, "info", {
  more: {
    "spreadsheet": {
      pts: [
        "<b>Referensi absolut:</b> tanda $ mengunci sel, misalnya $B$1, supaya tidak bergeser saat rumus disalin.",
        "<b>COUNTIF:</b> menghitung sel yang memenuhi syarat, contoh =COUNTIF(C2:C30;\"Tuntas\").",
        "<b>Jenis grafik:</b> batang (membandingkan), garis (perubahan dari waktu ke waktu), lingkaran (proporsi)."
      ],
      ex2: { q: "Nilai 5 siswa ada di B2:B6, yaitu 80, 65, 90, 70, 75. Berapa hasil =AVERAGE(B2:B6) dan =COUNTIF(B2:B6;\">=75\")?", a: "Langkah 1: jumlah = 80 + 65 + 90 + 70 + 75 = 380. Langkah 2: rata-rata = 380 : 5 = 76. Langkah 3: nilai yang ≥ 75 adalah 80, 90, dan 75, jadi COUNTIF menghasilkan 3." },
      q: [
        ["Sel A1 berisi 10 dan A2 berisi 15. Hasil =A1*A2 adalah …", ["150", "25", "5", "1015"], 0, "10 × 15."],
        ["Hasil =MIN(4;9;2;7) adalah …", ["2", "4", "7", "9"], 0, "Nilai terkecil."],
        ["Agar alamat sel B1 tidak bergeser saat rumus disalin, ditulis …", ["$B$1", "B1$", "#B1", "B:1"], 0, "Referensi absolut."],
        ["Grafik yang paling cocok untuk menunjukkan perubahan suhu dari hari ke hari adalah grafik …", ["garis", "lingkaran", "tabel teks", "peta"], 0, "Perubahan waktu."],
        ["Sel C2 berisi 60. Hasil =IF(C2>=75;\"Tuntas\";\"Remedial\") adalah …", ["Remedial", "Tuntas", "60", "FALSE"], 0, "60 < 75."]
      ]
    },
    "pemrograman-8": {
      pts: [
        "<b>Variabel</b> adalah tempat menyimpan nilai yang bisa berubah, misalnya skor ← 0.",
        "<b>Operator perbandingan:</b> == (sama dengan), != (tidak sama), >, <, >=, <=.",
        "<b>Operator logika:</b> AND (benar jika keduanya benar), OR (benar jika salah satu benar), NOT (kebalikan)."
      ],
      ex2: { q: "Telusuri pseudocode: x ← 1; total ← 0; ULANGI selama x <= 4: total ← total + x; x ← x + 1. Berapa nilai total di akhir?", a: "Langkah 1: x = 1, total = 1. Langkah 2: x = 2, total = 3. Langkah 3: x = 3, total = 6. Langkah 4: x = 4, total = 10. Langkah 5: x menjadi 5, kondisi x <= 4 salah, perulangan berhenti. Jadi total = 10." },
      q: [
        ["Pseudocode: nilai ← 80; JIKA nilai >= 75 MAKA tulis \"Lulus\" SELAIN ITU tulis \"Ulang\". Keluarannya …", ["Lulus", "Ulang", "80", "75"], 0, "80 ≥ 75."],
        ["Hasil (5 > 3) AND (2 > 4) adalah …", ["salah (false)", "benar (true)", "5", "error"], 0, "Salah satu kondisi salah."],
        ["Hasil (5 > 3) OR (2 > 4) adalah …", ["benar (true)", "salah (false)", "2", "error"], 0, "Cukup satu yang benar."],
        ["Perulangan for i dari 1 sampai 5 mencetak \"Halo\" di setiap putaran. Banyak \"Halo\" yang tercetak …", ["5", "4", "6", "1"], 0, "i = 1, 2, 3, 4, 5."],
        ["Simbol jajargenjang pada flowchart dipakai untuk …", ["input atau output", "keputusan", "mulai", "proses hitung"], 0, "Data masuk atau keluar."]
      ]
    },
    "biner": {
      pts: [
        "<b>Bilangan heksadesimal</b> (basis 16) memakai 0–9 dan A–F, sering dipakai untuk kode warna, misalnya #FF0000 (merah).",
        "<b>Penjumlahan biner:</b> 0 + 0 = 0, 0 + 1 = 1, 1 + 1 = 10 (tulis 0, simpan 1).",
        "<b>Perangkat:</b> input (keyboard, mouse), proses (CPU), output (monitor, printer), penyimpanan (SSD, flashdisk)."
      ],
      ex2: { q: "Ubah bilangan desimal 25 ke bilangan biner.", a: "Langkah 1: 25 : 2 = 12 sisa 1. Langkah 2: 12 : 2 = 6 sisa 0. Langkah 3: 6 : 2 = 3 sisa 0. Langkah 4: 3 : 2 = 1 sisa 1. Langkah 5: 1 : 2 = 0 sisa 1. Langkah 6: baca sisa dari bawah ke atas: 11001₂. Cek: 16 + 8 + 1 = 25." },
      q: [
        ["Bilangan desimal 13 dalam biner adalah …", ["1101", "1011", "1110", "1001"], 0, "8 + 4 + 1."],
        ["Hasil 1 + 1 dalam bilangan biner adalah …", ["10", "2", "11", "0"], 0, "Tulis 0, simpan 1."],
        ["Biner 10010₂ dalam desimal adalah …", ["18", "10", "20", "9"], 0, "16 + 2."],
        ["Perangkat yang termasuk output adalah …", ["printer", "keyboard", "mouse", "scanner"], 0, "Mengeluarkan hasil."],
        ["Bilangan desimal terbesar yang bisa ditulis dengan 8 bit adalah …", ["255", "256", "128", "8"], 0, "11111111₂ = 255."]
      ]
    },
    "keamanan-jaringan": {
      pts: [
        "<b>Jenis jaringan:</b> LAN (satu gedung), MAN (satu kota), WAN (antarkota atau antarnegara, contohnya internet).",
        "<b>Kata sandi kuat:</b> minimal 8–12 karakter, campuran huruf besar, huruf kecil, angka, dan simbol.",
        "<b>Firewall</b> menyaring lalu lintas data yang masuk dan keluar jaringan."
      ],
      ex2: { q: "Kamu mendapat pesan: “Selamat! Kamu menang HP. Klik link ini dan masukkan kata sandi akunmu.” Apa yang harus kamu lakukan?", a: "Langkah 1: kenali ciri phishing: hadiah tiba-tiba, mendesak, dan meminta kata sandi. Langkah 2: jangan klik link dan jangan memasukkan data apa pun. Langkah 3: hapus pesan, lalu blokir dan laporkan pengirimnya. Langkah 4: beri tahu orang tua atau guru." },
      q: [
        ["Jaringan komputer dalam satu laboratorium sekolah disebut …", ["LAN", "WAN", "MAN", "internet"], 0, "Jaringan area lokal."],
        ["Kata sandi yang paling kuat adalah …", ["T3o!Bel4jar#25", "12345678", "theodore", "password"], 0, "Campuran berbagai karakter."],
        ["Sistem yang menyaring lalu lintas data jaringan disebut …", ["firewall", "browser", "spreadsheet", "compiler"], 0, "Firewall."],
        ["Internet termasuk jenis jaringan …", ["WAN", "LAN", "MAN", "PAN"], 0, "Mencakup seluruh dunia."],
        ["Malware yang menyamar sebagai program berguna disebut …", ["trojan", "worm", "firewall", "cookie"], 0, "Seperti kuda Troya."]
      ]
    }
  },
  add: [
    {
      id: "berpikir-komputasional", t: "Berpikir Komputasional", s: 1,
      sum: "Berpikir komputasional adalah cara memecahkan masalah seperti seorang ilmuwan komputer. Cara ini tidak hanya untuk membuat program, tetapi juga untuk masalah sehari-hari seperti menyusun jadwal atau mencari rute tercepat.\nAda empat fondasinya: dekomposisi, pengenalan pola, abstraksi, dan algoritma. Di kelas 8 kamu berlatih memakainya pada soal seperti mencari data, mengurutkan, dan menyusun tumpukan.",
      pts: [
        "<b>Dekomposisi:</b> memecah masalah besar menjadi bagian kecil yang lebih mudah.",
        "<b>Pengenalan pola:</b> mencari kesamaan atau keteraturan antarbagian masalah.",
        "<b>Abstraksi:</b> mengambil informasi penting dan membuang yang tidak perlu.",
        "<b>Algoritma:</b> langkah-langkah berurutan untuk menyelesaikan masalah.",
        "<b>Searching:</b> linear search (memeriksa satu per satu) dan binary search (membagi dua data yang sudah terurut).",
        "<b>Struktur data:</b> stack atau tumpukan (masuk terakhir keluar pertama, LIFO) dan queue atau antrean (masuk pertama keluar pertama, FIFO)."
      ],
      ex: { q: "Kamu mencari angka 37 di daftar terurut 1 sampai 100 dengan binary search. Apa langkah pertamanya?", a: "Lihat nilai tengah, misalnya 50. Karena 37 < 50, buang separuh atas dan cari di 1–49. Ulangi dengan nilai tengah berikutnya sampai angka 37 ketemu." },
      tip: "Ingat contoh nyata: tumpukan piring adalah stack, antrean di kasir adalah queue.",
      q: [
        ["Memecah tugas “membuat pentas seni” menjadi acara, dekorasi, dan konsumsi adalah contoh …", ["dekomposisi", "abstraksi", "pengenalan pola", "algoritma"], 0, "Memecah masalah."],
        ["Mengabaikan warna mobil saat menghitung waktu tempuh adalah contoh …", ["abstraksi", "dekomposisi", "pengenalan pola", "debugging"], 0, "Membuang detail yang tidak penting."],
        ["Struktur data yang mengikuti prinsip LIFO adalah …", ["stack", "queue", "antrean", "tabel"], 0, "Tumpukan."],
        ["Antrean di loket tiket mengikuti prinsip …", ["FIFO", "LIFO", "acak", "terbalik"], 0, "Masuk pertama keluar pertama."],
        ["Binary search hanya dapat dipakai jika data …", ["sudah terurut", "berjumlah ganjil", "berupa huruf", "acak"], 0, "Syarat binary search."],
        ["Mencari nama di daftar acak dengan memeriksa satu per satu dari awal disebut …", ["linear search", "binary search", "sorting", "stack"], 0, "Pencarian berurutan."],
        ["Tumpukan buku berisi (dari bawah ke atas) A, B, C, D. Buku yang diambil pertama adalah …", ["D", "A", "B", "C"], 0, "Yang paling atas."],
        ["Menyadari bahwa kantin selalu ramai setiap hari Senin adalah contoh …", ["pengenalan pola", "dekomposisi", "abstraksi", "enkripsi"], 0, "Menemukan keteraturan."],
        ["Data terurut berisi 64 angka. Dengan binary search, berapa kali pembagian dua sampai tersisa satu angka?", ["6", "64", "32", "8"], 0, "64 → 32 → 16 → 8 → 4 → 2 → 1."],
        ["Resep nasi goreng yang ditulis langkah demi langkah adalah contoh …", ["algoritma", "abstraksi", "dekomposisi", "pola"], 0, "Langkah berurutan."]
      ]
    },
    {
      id: "tik-kolaborasi", t: "TIK: Dokumen, Presentasi, dan Kolaborasi Daring", s: 1,
      sum: "Aplikasi perkantoran membantu kamu membuat laporan, presentasi, dan tabel. Sekarang banyak aplikasi berbasis cloud, misalnya Google Docs dan Microsoft 365, sehingga satu dokumen bisa dikerjakan bersama dari rumah masing-masing.\nDi bab ini kamu belajar fitur penting pengolah kata dan presentasi, serta etika saat berkolaborasi secara daring.",
      pts: [
        "<b>Pengolah kata:</b> Microsoft Word, Google Docs, LibreOffice Writer. Fitur: heading, daftar isi otomatis, tabel, gambar, header dan footer.",
        "<b>Presentasi:</b> PowerPoint, Google Slides, Canva. Prinsipnya: sedikit teks, huruf besar, gambar mendukung isi.",
        "<b>Cloud storage:</b> Google Drive, OneDrive. File tersimpan di internet dan bisa dibuka dari perangkat mana pun.",
        "<b>Hak akses berbagi:</b> viewer (melihat), commenter (memberi komentar), editor (mengubah).",
        "<b>Riwayat versi</b> (version history) untuk melihat dan memulihkan versi lama dokumen.",
        "<b>Etika kolaborasi:</b> jangan menghapus bagian teman tanpa izin, gunakan komentar untuk saran, cantumkan sumber."
      ],
      ex: { q: "Kamu ingin guru bisa membaca laporan kelompok tetapi tidak bisa mengubahnya. Hak akses apa yang kamu berikan?", a: "Berikan hak akses viewer. Guru bisa membuka dan membaca dokumen tanpa bisa mengedit isinya." },
      tip: "Aturan presentasi 6×6: usahakan paling banyak 6 baris per slide dan 6 kata per baris supaya mudah dibaca.",
      q: [
        ["Aplikasi pengolah kata berbasis cloud adalah …", ["Google Docs", "Paint", "Calculator", "Notepad"], 0, "Bekerja secara daring."],
        ["Hak akses yang memungkinkan teman mengubah isi dokumen adalah …", ["editor", "viewer", "commenter", "guest"], 0, "Bisa mengedit."],
        ["Fitur untuk memulihkan versi dokumen sebelumnya adalah …", ["version history", "spell check", "word count", "page break"], 0, "Riwayat versi."],
        ["Slide presentasi yang baik memiliki …", ["teks singkat dan huruf mudah dibaca", "paragraf panjang", "huruf sangat kecil", "animasi berlebihan"], 0, "Prinsip presentasi."],
        ["Layanan penyimpanan file di internet disebut …", ["cloud storage", "hard disk", "RAM", "flashdisk"], 0, "Penyimpanan awan."],
        ["Daftar isi otomatis di pengolah kata dibuat dari …", ["heading", "font berwarna", "tabel", "gambar"], 0, "Gaya judul."],
        ["Saat ingin memberi saran pada tulisan teman dalam dokumen bersama, sebaiknya kamu …", ["memakai fitur komentar", "menghapus tulisannya", "mengganti semua isinya", "menutup dokumen"], 0, "Etika kolaborasi."],
        ["Bagian halaman yang muncul di atas setiap halaman disebut …", ["header", "footer", "margin", "footnote"], 0, "Kepala halaman."],
        ["Keuntungan kolaborasi daring adalah …", ["bisa mengerjakan bersama dari tempat berbeda", "tidak butuh internet", "file tidak bisa dibuka orang lain", "dokumen tidak bisa diedit"], 0, "Fleksibel."],
        ["Aplikasi presentasi buatan Microsoft adalah …", ["PowerPoint", "Excel", "Word", "Outlook"], 0, "Presentasi."]
      ]
    },
    {
      id: "dampak-sosial", t: "Dampak Sosial Informatika", s: 2,
      sum: "Teknologi informasi mengubah cara kita belajar, berkomunikasi, dan bekerja. Kamu bisa belajar dari video, berdiskusi lewat grup, dan berbelanja secara daring. Namun, teknologi juga membawa masalah baru seperti kecanduan gawai, perundungan siber, dan hoaks.\nSebagai warga digital, kamu perlu memakai teknologi dengan bijak, menghargai karya orang lain, dan menjaga data pribadi.",
      pts: [
        "<b>Dampak positif:</b> akses informasi cepat, belajar jarak jauh, komunikasi mudah, peluang usaha daring.",
        "<b>Dampak negatif:</b> kecanduan gawai, cyberbullying, hoaks, kurang gerak, kesenjangan digital.",
        "<b>Hak Kekayaan Intelektual (HKI):</b> hak cipta melindungi karya seperti lagu, tulisan, dan program komputer.",
        "<b>Lisensi perangkat lunak:</b> proprietary (berbayar, kode tertutup), freeware (gratis), open source (kode terbuka, contohnya Linux).",
        "<b>Jejak digital:</b> semua yang kamu unggah meninggalkan rekam jejak yang sulit dihapus.",
        "<b>UU ITE</b> (UU No. 11 Tahun 2008 beserta perubahannya) mengatur informasi dan transaksi elektronik di Indonesia."
      ],
      ex: { q: "Temanmu dihina di grup kelas dan fotonya diedit untuk ditertawakan. Apa yang sebaiknya kamu lakukan?", a: "Itu perundungan siber. Jangan ikut menyebarkan atau memberi tanda suka. Dukung temanmu, simpan tangkapan layar sebagai bukti, lalu laporkan ke guru atau orang tua." },
      tip: "Sebelum mengunggah, tanyakan pada dirimu: apakah ini benar, bermanfaat, dan tidak menyakiti orang lain?",
      q: [
        ["Perundungan yang terjadi di media sosial disebut …", ["cyberbullying", "phishing", "hacking", "streaming"], 0, "Perundungan siber."],
        ["Contoh dampak positif teknologi informasi adalah …", ["belajar jarak jauh lewat video", "kecanduan game", "penyebaran hoaks", "kurang tidur"], 0, "Akses belajar."],
        ["Perangkat lunak yang kode sumbernya terbuka dan boleh dimodifikasi disebut …", ["open source", "proprietary", "shareware", "trial"], 0, "Contohnya Linux."],
        ["Rekam jejak aktivitas seseorang di internet disebut …", ["jejak digital", "kata sandi", "firewall", "antivirus"], 0, "Digital footprint."],
        ["Mengunduh film bajakan melanggar …", ["hak cipta", "hak pilih", "hak asuh", "hak suara"], 0, "HKI."],
        ["Undang-undang yang mengatur informasi dan transaksi elektronik di Indonesia adalah …", ["UU ITE", "UU Sisdiknas", "UU Lalu Lintas", "UU Perkawinan"], 0, "UU No. 11 Tahun 2008."],
        ["Kesenjangan digital artinya …", ["perbedaan akses teknologi antarwilayah atau kelompok", "kecepatan internet yang sama di semua tempat", "kerusakan komputer", "penghapusan data"], 0, "Digital divide."],
        ["Cara bijak menggunakan gawai adalah …", ["membatasi waktu layar dan tetap berolahraga", "bermain sampai larut malam", "membagikan data pribadi", "membalas komentar dengan kasar"], 0, "Seimbang."],
        ["Mencantumkan sumber saat memakai gambar orang lain berarti kamu …", ["menghargai karya orang lain", "melanggar hak cipta", "menyebarkan hoaks", "meretas akun"], 0, "Etika digital."],
        ["Informasi bohong yang sengaja disebarkan disebut …", ["hoaks", "fakta", "opini ahli", "berita resmi"], 0, "Hoaks."]
      ]
    }
  ],
  order: ["berpikir-komputasional", "tik-kolaborasi", "spreadsheet", "pemrograman-8", "biner", "keamanan-jaringan", "dampak-sosial"]
});

// ===================== PAI =====================
EXT(8, "pai", {
  more: {
    "kitab": {
      pts: [
        "<b>Isi pokok Al-Qur’an:</b> akidah, ibadah, akhlak, hukum, dan kisah umat terdahulu.",
        "<b>Al-Qur’an</b> terdiri atas 114 surah dan 30 juz, diturunkan berangsur-angsur selama sekitar 23 tahun.",
        "<b>Fungsi Al-Qur’an:</b> petunjuk (hudan), pembeda yang benar dan salah (al-furqān), penyempurna kitab sebelumnya."
      ],
      ex2: { q: "Mengapa Al-Qur’an disebut penyempurna kitab-kitab sebelumnya?", a: "Langkah 1: Al-Qur’an membenarkan pokok ajaran kitab sebelumnya, yaitu tauhid. Langkah 2: Al-Qur’an berlaku untuk seluruh umat manusia sampai akhir zaman, sedangkan kitab sebelumnya untuk kaum tertentu. Langkah 3: keaslian Al-Qur’an dijaga oleh Allah, sesuai Q.S. Al-Ḥijr ayat 9." },
      q: [
        ["Jumlah surah dalam Al-Qur’an adalah …", ["114", "30", "99", "40"], 0, "114 surah."],
        ["Kitab Injil diturunkan kepada Nabi …", ["Isa a.s.", "Musa a.s.", "Daud a.s.", "Muhammad saw."], 0, "Injil."],
        ["Al-Qur’an disebut al-furqān karena berfungsi sebagai …", ["pembeda antara yang benar dan yang salah", "bacaan saat salat saja", "hiasan rumah", "catatan sejarah"], 0, "Furqan berarti pembeda."],
        ["Al-Qur’an diturunkan secara berangsur-angsur selama kurang lebih …", ["23 tahun", "10 tahun", "40 tahun", "5 tahun"], 0, "Masa kenabian."],
        ["Ayat yang menyatakan Allah menjaga Al-Qur’an terdapat dalam Q.S. …", ["Al-Ḥijr: 9", "Al-Fātiḥah: 1", "An-Nās: 1", "Al-Ikhlāṣ: 1"], 0, "Q.S. Al-Ḥijr ayat 9."]
      ]
    },
    "puasa": {
      pts: [
        "<b>Syarat wajib puasa:</b> Islam, balig, berakal, dan mampu.",
        "<b>Sunah puasa:</b> makan sahur dan mengakhirkannya, menyegerakan berbuka, berdoa saat berbuka.",
        "<b>Haram berpuasa:</b> pada dua hari raya (Idulfitri dan Iduladha) dan hari tasyrik (11, 12, 13 Zulhijah)."
      ],
      ex2: { q: "Theo lupa sedang berpuasa lalu minum segelas air. Setelah ingat, ia berhenti. Apakah puasanya batal?", a: "Langkah 1: yang membatalkan puasa adalah makan atau minum dengan sengaja. Langkah 2: Theo minum karena lupa, tidak sengaja. Langkah 3: menurut hadis, orang yang lupa lalu makan atau minum hendaknya menyempurnakan puasanya. Langkah 4: jadi puasa Theo tidak batal." },
      q: [
        ["Hari tasyrik jatuh pada tanggal …", ["11, 12, 13 Zulhijah", "1, 2, 3 Syawal", "13, 14, 15 Ramadan", "9, 10, 11 Muharam"], 0, "Haram berpuasa."],
        ["Puasa sunah pada tanggal 10 Muharam disebut puasa …", ["Asyura", "Arafah", "Tarwiyah", "Syawal"], 0, "Asyura."],
        ["Orang yang boleh tidak berpuasa Ramadan tetapi wajib menggantinya di hari lain adalah …", ["musafir", "anak kecil", "orang gila", "nonmuslim"], 0, "Orang dalam perjalanan jauh."],
        ["Hukum berpuasa pada hari raya Idulfitri adalah …", ["haram", "sunah", "wajib", "makruh"], 0, "Hari raya."],
        ["Menyegerakan berbuka puasa hukumnya …", ["sunah", "wajib", "makruh", "haram"], 0, "Sunah puasa."]
      ]
    },
    "halal": {
      pts: [
        "<b>Penyembelihan hewan</b> harus menyebut nama Allah dan memotong saluran napas serta saluran makanan.",
        "<b>Ikan dan belalang</b> halal dimakan walaupun sudah menjadi bangkai.",
        "<b>Khamr</b> diharamkan dalam Q.S. Al-Mā’idah ayat 90 karena memabukkan dan merusak akal."
      ],
      ex2: { q: "Mengapa makanan yang halal belum tentu ṭayyib? Beri contoh.", a: "Langkah 1: halal berarti diizinkan syariat. Langkah 2: ṭayyib berarti baik dan menyehatkan bagi tubuh. Langkah 3: contohnya gorengan itu halal, tetapi kalau dimakan berlebihan bisa merusak kesehatan. Langkah 4: jadi pilihlah makanan yang halal sekaligus ṭayyib." },
      q: [
        ["Bangkai hewan yang halal dimakan adalah …", ["ikan dan belalang", "ayam dan kambing", "sapi dan kerbau", "burung dan kelinci"], 0, "Pengecualian bangkai."],
        ["Larangan meminum khamr terdapat dalam Q.S. …", ["Al-Mā’idah: 90", "Al-Baqarah: 255", "Al-Kahf: 10", "Yāsīn: 1"], 0, "Al-Mā’idah ayat 90."],
        ["Alasan utama khamr diharamkan adalah …", ["memabukkan dan merusak akal", "harganya mahal", "rasanya pahit", "warnanya gelap"], 0, "Memabukkan."],
        ["Saat menyembelih hewan, seorang muslim wajib …", ["menyebut nama Allah", "memakai pisau tumpul", "menyembelih di malam hari", "memotong ekornya dulu"], 0, "Membaca basmalah."],
        ["Makanan yang bergizi dan tidak membahayakan tubuh disebut …", ["ṭayyib", "syubhat", "makruh", "khabīṡ"], 0, "Baik."]
      ]
    },
    "umayyah": {
      pts: [
        "<b>Masa kekuasaan:</b> sekitar 90 tahun (661–750 M) dengan 14 khalifah.",
        "<b>Kemajuan:</b> perluasan wilayah, penataan administrasi (diwan), layanan pos, mata uang dinar, ilmu tafsir dan hadis.",
        "<b>Penyebab runtuh:</b> perebutan kekuasaan di keluarga, gaya hidup mewah sebagian khalifah, pemberontakan, lalu dikalahkan Bani Abbasiyah tahun 750 M."
      ],
      ex2: { q: "Teladan apa yang bisa kamu ambil dari Umar bin Abdul Aziz?", a: "Langkah 1: ia dikenal adil dan hidup sederhana walaupun berkuasa. Langkah 2: ia memerintahkan pengumpulan hadis agar tidak hilang. Langkah 3: teladannya untukmu: bersikap adil kepada teman, tidak boros, dan menghargai ilmu." },
      q: [
        ["Dinasti Bani Umayyah berkuasa dari tahun …", ["661–750 M", "750–1258 M", "632–661 M", "1299–1924 M"], 0, "Sekitar 90 tahun."],
        ["Bani Umayyah runtuh karena dikalahkan oleh …", ["Bani Abbasiyah", "Turki Usmani", "bangsa Mongol", "Romawi"], 0, "Tahun 750 M."],
        ["Khalifah yang memerintahkan pembukuan hadis adalah …", ["Umar bin Abdul Aziz", "Muawiyah bin Abu Sufyan", "Abdul Malik bin Marwan", "Yazid bin Muawiyah"], 0, "Umar bin Abdul Aziz."],
        ["Kubah Batu (Qubbah aṣ-Ṣakhrah) terletak di …", ["Yerusalem", "Damaskus", "Mekah", "Baghdad"], 0, "Dibangun masa Abdul Malik bin Marwan."],
        ["Salah satu penyebab runtuhnya Bani Umayyah adalah …", ["perebutan kekuasaan di dalam keluarga", "terlalu banyak ulama", "wilayah terlalu sempit", "tidak punya tentara"], 0, "Konflik internal."]
      ]
    }
  },
  add: [
    {
      id: "iman-rasul", t: "Iman kepada Rasul Allah", s: 1,
      sum: "Iman kepada rasul adalah rukun iman keempat. Kamu meyakini bahwa Allah mengutus manusia pilihan untuk menyampaikan wahyu dan membimbing umatnya. Rasul yang wajib diketahui ada 25, dimulai Nabi Adam a.s. dan diakhiri Nabi Muhammad saw.\nNabi menerima wahyu untuk dirinya, sedangkan rasul menerima wahyu dan wajib menyampaikannya kepada umat. Jadi setiap rasul pasti nabi, tetapi tidak setiap nabi adalah rasul.",
      pts: [
        "<b>Sifat wajib rasul:</b> ṣiddīq (jujur), amānah (dapat dipercaya), tablīg (menyampaikan), faṭānah (cerdas).",
        "<b>Sifat mustahil:</b> każib (dusta), khiyānah (khianat), kitmān (menyembunyikan), balādah (bodoh).",
        "<b>Sifat jaiz:</b> a‘rāḍul basyariyyah, yaitu sifat manusiawi seperti makan, minum, tidur, dan sakit.",
        "<b>Ulul ‘azmi:</b> rasul dengan ketabahan luar biasa: Nuh, Ibrahim, Musa, Isa, dan Muhammad.",
        "<b>Mukjizat:</b> keistimewaan dari Allah untuk membuktikan kerasulan, misalnya tongkat Nabi Musa dan Al-Qur’an bagi Nabi Muhammad.",
        "<b>Nabi Muhammad saw.:</b> khātamun nabiyyīn (penutup para nabi), diutus untuk seluruh umat manusia."
      ],
      ex: { q: "Sifat rasul apa yang kamu teladani kalau kamu mengembalikan uang kembalian yang berlebih kepada penjual?", a: "Kamu meneladani sifat amānah (dapat dipercaya) dan ṣiddīq (jujur), karena tidak mengambil yang bukan hakmu." },
      tip: "Hafalkan sifat wajib rasul dengan singkatan SATF: ṣiddīq, amānah, tablīg, faṭānah.",
      q: [
        ["Iman kepada rasul adalah rukun iman ke …", ["4", "3", "5", "6"], 0, "Setelah iman kepada kitab."],
        ["Jumlah rasul yang wajib diketahui adalah …", ["25", "10", "5", "313"], 0, "Disebut dalam Al-Qur’an."],
        ["Sifat rasul yang berarti menyampaikan wahyu adalah …", ["tablīg", "ṣiddīq", "amānah", "faṭānah"], 0, "Tablig."],
        ["Sifat mustahil bagi rasul yang berarti bodoh adalah …", ["balādah", "każib", "kitmān", "khiyānah"], 0, "Lawan dari faṭānah."],
        ["Yang termasuk rasul ulul ‘azmi adalah …", ["Nabi Ibrahim a.s.", "Nabi Yusuf a.s.", "Nabi Sulaiman a.s.", "Nabi Yunus a.s."], 0, "Nuh, Ibrahim, Musa, Isa, Muhammad."],
        ["Mukjizat terbesar Nabi Muhammad saw. adalah …", ["Al-Qur’an", "tongkat menjadi ular", "membelah lautan", "berbicara dengan semut"], 0, "Mukjizat yang abadi."],
        ["Perbedaan nabi dan rasul adalah …", ["rasul wajib menyampaikan wahyu kepada umat", "nabi lebih tinggi derajatnya dari rasul", "rasul tidak menerima wahyu", "nabi tidak menerima wahyu"], 0, "Kewajiban menyampaikan."],
        ["Sifat jaiz rasul berarti rasul …", ["memiliki sifat manusiawi seperti makan dan tidur", "tidak pernah makan", "tidak bisa sakit", "hidup selamanya"], 0, "A‘rāḍul basyariyyah."],
        ["Rasul pertama dari 25 rasul yang wajib diketahui adalah …", ["Nabi Adam a.s.", "Nabi Nuh a.s.", "Nabi Ibrahim a.s.", "Nabi Idris a.s."], 0, "Manusia pertama."],
        ["Mengerjakan tugas dengan jujur dan tidak menyalin hasil orang lain meneladani sifat …", ["ṣiddīq", "kitmān", "każib", "balādah"], 0, "Jujur."]
      ]
    },
    {
      id: "sujud", t: "Sujud Syukur, Sujud Sahwi, dan Sujud Tilawah", s: 1,
      sum: "Sujud adalah meletakkan dahi di tempat salat sebagai tanda tunduk kepada Allah. Selain sujud di dalam salat, ada tiga sujud khusus: sujud syukur, sujud sahwi, dan sujud tilawah.\nSujud syukur dilakukan saat mendapat nikmat atau terhindar dari musibah. Sujud sahwi dilakukan karena lupa dalam salat. Sujud tilawah dilakukan ketika membaca atau mendengar ayat sajdah.",
      pts: [
        "<b>Sujud syukur:</b> sekali sujud di luar salat ketika mendapat nikmat atau selamat dari bahaya.",
        "<b>Sujud sahwi:</b> dua kali sujud sebelum salam karena lupa dalam salat.",
        "<b>Penyebab sujud sahwi:</b> kelebihan atau kekurangan rakaat, lupa tasyahud awal, ragu tentang jumlah rakaat.",
        "<b>Bacaan sujud sahwi:</b> subḥāna man lā yanāmu wa lā yashū (Mahasuci Allah yang tidak tidur dan tidak lupa).",
        "<b>Sujud tilawah:</b> sekali sujud saat membaca atau mendengar ayat sajdah, bisa di dalam atau di luar salat.",
        "<b>Ayat sajdah</b> diberi tanda khusus di mushaf, contohnya Q.S. Al-A‘rāf ayat 206 dan Q.S. Al-‘Alaq ayat 19."
      ],
      ex: { q: "Saat salat Zuhur, Theo ragu apakah sudah tiga atau empat rakaat. Apa yang harus ia lakukan?", a: "Ia mengambil jumlah yang lebih sedikit dan yakin, yaitu tiga, lalu menambah satu rakaat. Sebelum salam, ia melakukan sujud sahwi dua kali." },
      tip: "Kata kuncinya: syukur = nikmat, sahwi = lupa, tilawah = bacaan ayat sajdah.",
      q: [
        ["Sujud yang dilakukan karena lupa dalam salat disebut sujud …", ["sahwi", "syukur", "tilawah", "takbir"], 0, "Sahwi berarti lupa."],
        ["Theo diumumkan juara olimpiade sains, lalu ia bersujud. Sujud ini disebut sujud …", ["syukur", "sahwi", "tilawah", "salat"], 0, "Mendapat nikmat."],
        ["Sujud tilawah dilakukan ketika …", ["membaca atau mendengar ayat sajdah", "lupa jumlah rakaat", "mendapat hadiah", "selesai wudu"], 0, "Ayat sajdah."],
        ["Sujud sahwi dilakukan sebanyak …", ["dua kali sebelum salam", "satu kali setelah wudu", "tiga kali setelah takbir", "empat kali setelah zikir"], 0, "Dua sujud."],
        ["Lupa membaca tasyahud awal dalam salat Asar diganti dengan …", ["sujud sahwi", "sujud syukur", "sujud tilawah", "mengulang wudu"], 0, "Karena lupa."],
        ["Arti bacaan “subḥāna man lā yanāmu wa lā yashū” adalah …", ["Mahasuci Allah yang tidak tidur dan tidak lupa", "Mahasuci Tuhanku Yang Mahatinggi", "Allah Mahabesar", "Segala puji bagi Allah"], 0, "Bacaan sujud sahwi."],
        ["Jika ragu apakah sudah 2 atau 3 rakaat, yang diambil adalah …", ["jumlah yang lebih sedikit, yaitu 2", "jumlah yang lebih banyak, yaitu 3", "jumlah mana saja", "langsung salam"], 0, "Ambil yang yakin."],
        ["Selamat dari kecelakaan termasuk alasan melakukan sujud …", ["syukur", "sahwi", "tilawah", "jenazah"], 0, "Terhindar dari bahaya."],
        ["Ayat Al-Qur’an yang dianjurkan sujud ketika membaca atau mendengarnya disebut ayat …", ["sajdah", "kursi", "muḥkamāt", "makkiyah"], 0, "Ayat sajdah."],
        ["Sujud tilawah dapat dilakukan …", ["di dalam maupun di luar salat", "hanya saat salat Jumat", "hanya di masjid", "hanya pada bulan Ramadan"], 0, "Tidak terbatas tempat dan waktu tertentu."]
      ]
    },
    {
      id: "abbasiyah", t: "Sejarah Bani Abbasiyah", s: 2,
      sum: "Bani Abbasiyah berkuasa setelah Bani Umayyah runtuh, dari tahun 750 sampai 1258 M. Pendirinya Abul Abbas as-Saffah. Pusat pemerintahannya dipindahkan ke Baghdad, kota yang dibangun Khalifah Abu Ja‘far al-Manṣūr.\nMasa ini dikenal sebagai zaman keemasan ilmu pengetahuan Islam. Para ilmuwan muslim menerjemahkan buku Yunani, Persia, dan India, lalu mengembangkan matematika, kedokteran, astronomi, dan filsafat.",
      pts: [
        "<b>Pendiri:</b> Abul Abbas as-Saffah. <b>Ibu kota:</b> Baghdad, dibangun oleh Abu Ja‘far al-Manṣūr.",
        "<b>Puncak kejayaan:</b> masa Khalifah Harun ar-Rasyid dan al-Ma’mun.",
        "<b>Baitul Ḥikmah:</b> pusat penerjemahan, perpustakaan, dan penelitian di Baghdad.",
        "<b>Ilmuwan:</b> al-Khawarizmi (aljabar, asal kata algoritma), Ibnu Sina (kedokteran, kitab al-Qānūn fī aṭ-Ṭibb), ar-Razi (kedokteran), al-Kindi (filsafat).",
        "<b>Ulama:</b> empat imam mazhab (Hanafi, Maliki, Syafi‘i, Hanbali) serta Imam Bukhari dan Imam Muslim (hadis).",
        "<b>Runtuh:</b> Baghdad dihancurkan pasukan Mongol pimpinan Hulagu Khan tahun 1258 M."
      ],
      ex: { q: "Mengapa kata “algoritma” di pelajaran informatika berhubungan dengan sejarah Islam?", a: "Kata algoritma berasal dari nama al-Khawarizmi, ilmuwan muslim masa Abbasiyah yang menulis tentang cara berhitung dan aljabar." },
      tip: "Pasangkan tokoh dan bidangnya: Khawarizmi dengan matematika, Ibnu Sina dengan kedokteran, al-Kindi dengan filsafat, Bukhari dengan hadis.",
      q: [
        ["Pendiri Bani Abbasiyah adalah …", ["Abul Abbas as-Saffah", "Harun ar-Rasyid", "Muawiyah bin Abu Sufyan", "al-Ma’mun"], 0, "Tahun 750 M."],
        ["Ibu kota Bani Abbasiyah adalah …", ["Baghdad", "Damaskus", "Kordoba", "Kairo"], 0, "Dibangun al-Manṣūr."],
        ["Lembaga penerjemahan dan perpustakaan terkenal pada masa Abbasiyah adalah …", ["Baitul Ḥikmah", "Baitul Mal", "Darul Arqam", "Al-Azhar"], 0, "Rumah kebijaksanaan."],
        ["Ilmuwan muslim yang dikenal sebagai bapak aljabar adalah …", ["al-Khawarizmi", "Ibnu Sina", "al-Kindi", "ar-Razi"], 0, "Penulis kitab al-Jabr."],
        ["Kitab al-Qānūn fī aṭ-Ṭibb tentang kedokteran ditulis oleh …", ["Ibnu Sina", "al-Khawarizmi", "Imam Bukhari", "al-Farabi"], 0, "Dikenal di Barat sebagai Avicenna."],
        ["Puncak kejayaan Bani Abbasiyah terjadi pada masa …", ["Harun ar-Rasyid", "Abul Abbas as-Saffah", "al-Musta‘ṣim", "Hulagu Khan"], 0, "Zaman keemasan."],
        ["Baghdad dihancurkan oleh pasukan Mongol pada tahun …", ["1258 M", "750 M", "1453 M", "661 M"], 0, "Dipimpin Hulagu Khan."],
        ["Imam Syafi‘i dikenal sebagai ulama di bidang …", ["fikih", "astronomi", "kedokteran", "matematika"], 0, "Salah satu imam mazhab."],
        ["Penyusun kitab hadis Ṣaḥīḥ al-Bukhārī adalah …", ["Imam Bukhari", "Imam Malik", "Ibnu Sina", "al-Kindi"], 0, "Ahli hadis."],
        ["Sikap yang dapat kamu teladani dari ilmuwan muslim masa Abbasiyah adalah …", ["semangat belajar dan meneliti", "hidup bermewah-mewahan", "malas membaca", "menolak ilmu dari bangsa lain"], 0, "Cinta ilmu."]
      ]
    }
  ],
  order: ["kitab", "iman-rasul", "sujud", "puasa", "halal", "umayyah", "abbasiyah"]
});

// ===================== SENI BUDAYA =====================
EXT(8, "senbud", {
  more: {
    "ilustrasi": {
      pts: [
        "<b>Teknik ilustrasi:</b> arsir (garis sejajar), dussel (digosok), pointilis (titik-titik), aquarel (cat air transparan), plakat (cat tebal menutup).",
        "<b>Alat dan bahan:</b> pensil 2B–6B, drawing pen, cat air, krayon, atau aplikasi gambar digital.",
        "<b>Ekspresi tokoh komik</b> ditunjukkan lewat bentuk mata, alis, dan mulut."
      ],
      ex2: { q: "Kamu diminta membuat ilustrasi untuk cerpen tentang hujan di desa. Apa saja langkahnya?", a: "Langkah 1: baca cerpen dan pilih adegan paling penting, misalnya anak berlari di bawah hujan. Langkah 2: buat sketsa ringan dengan pensil. Langkah 3: pertegas garis dengan drawing pen. Langkah 4: beri warna, misalnya dengan cat air agar kesan basah terasa. Langkah 5: cek apakah gambar sesuai isi cerita." },
      q: [
        ["Teknik menggambar dengan titik-titik disebut …", ["pointilis", "arsir", "dussel", "aquarel"], 0, "Titik-titik."],
        ["Teknik mewarnai dengan cat air tipis dan transparan disebut …", ["aquarel", "plakat", "arsir", "mozaik"], 0, "Cat air."],
        ["Tulisan “DOR!” atau “BRAK!” dalam komik disebut …", ["efek suara (onomatope)", "narasi", "panel", "gang"], 0, "Tiruan bunyi."],
        ["Jarak antara dua panel komik disebut …", ["gang", "balon kata", "narasi", "sketsa"], 0, "Gang."],
        ["Fungsi utama gambar ilustrasi adalah …", ["memperjelas isi teks", "menggantikan seluruh teks", "mengisi halaman kosong saja", "menambah jumlah halaman"], 0, "Memperjelas."],
        ["Pensil yang paling cocok untuk membuat bayangan gelap adalah …", ["6B", "HB", "2H", "4H"], 0, "Makin besar angka B, makin gelap."]
      ]
    },
    "ansambel": {
      pts: [
        "<b>Unsur musik:</b> irama, melodi, harmoni, tempo, dinamika (keras-lembut).",
        "<b>Tanda dinamika:</b> p (piano, lembut), mf (mezzo forte, agak keras), f (forte, keras).",
        "<b>Partitur</b> adalah catatan notasi musik untuk setiap alat dalam ansambel."
      ],
      ex2: { q: "Sebuah grup memakai recorder, pianika, gitar, dan tamborin. Kelompokkan alat-alatnya dan tentukan jenis ansambelnya.", a: "Langkah 1: recorder dan pianika memainkan melodi, jadi alat melodis. Langkah 2: gitar memainkan akor, jadi alat harmonis. Langkah 3: tamborin mengatur irama, jadi alat ritmis. Langkah 4: karena jenis alatnya berbeda-beda, ini ansambel campuran." },
      q: [
        ["Tanda dinamika f (forte) berarti dimainkan …", ["keras", "lembut", "cepat", "lambat"], 0, "Forte."],
        ["Ansambel yang hanya memakai recorder disebut ansambel …", ["sejenis", "campuran", "perkusi", "orkestra"], 0, "Satu jenis alat."],
        ["Gitar yang memainkan akor berfungsi sebagai alat musik …", ["harmonis", "ritmis", "melodis", "perkusi"], 0, "Memainkan akor."],
        ["Cepat lambatnya lagu disebut …", ["tempo", "dinamika", "melodi", "harmoni"], 0, "Tempo."],
        ["Catatan notasi musik untuk setiap pemain disebut …", ["partitur", "lirik", "birama", "solmisasi"], 0, "Partitur."],
        ["Gamelan termasuk ansambel musik …", ["tradisional", "modern Barat", "elektronik", "orkestra simfoni"], 0, "Alat musik Nusantara."]
      ]
    },
    "tari-kreasi": {
      pts: [
        "<b>Unsur utama tari:</b> wiraga (gerak), wirama (irama), wirasa (penghayatan).",
        "<b>Tari kreasi Nusantara:</b> Jaipong (Jawa Barat, Gugum Gumbira), Tari Merak (Jawa Barat, Raden Tjetje Somantri), Tari Yapong (Jakarta, Bagong Kussudiardjo).",
        "<b>Level gerak:</b> tinggi (berdiri, melompat), sedang, rendah (duduk, berlutut)."
      ],
      ex2: { q: "Rancang pola lantai untuk tari kreasi lima penari bertema “ombak laut”.", a: "Langkah 1: pilih pola garis lengkung karena ombak bergerak meliuk dan berkesan lembut. Langkah 2: susun penari membentuk huruf S di awal. Langkah 3: ubah ke lingkaran di bagian tengah untuk menggambarkan pusaran air. Langkah 4: akhiri dengan barisan lurus sebagai ombak yang sampai ke pantai." },
      q: [
        ["Penghayatan dalam menari disebut …", ["wirasa", "wiraga", "wirama", "wirupa"], 0, "Rasa."],
        ["Kesesuaian gerak dengan iringan musik disebut …", ["wirama", "wiraga", "wirasa", "wirupa"], 0, "Irama."],
        ["Tari Merak berasal dari daerah …", ["Jawa Barat", "Bali", "Aceh", "Papua"], 0, "Karya Raden Tjetje Somantri."],
        ["Gerak tari sambil duduk atau berlutut termasuk level …", ["rendah", "tinggi", "sedang", "melayang"], 0, "Level rendah."],
        ["Tari Yapong diciptakan oleh …", ["Bagong Kussudiardjo", "Gugum Gumbira", "Raden Tjetje Somantri", "Didik Nini Thowok"], 0, "Untuk ulang tahun Jakarta."],
        ["Pola lantai garis lengkung memberi kesan …", ["lembut", "tegas", "kaku", "keras"], 0, "Lengkung terasa lembut."]
      ]
    },
    "teater": {
      pts: [
        "<b>Tahap pementasan:</b> pemilihan naskah, casting (memilih pemain), latihan, gladi resik, pentas, evaluasi.",
        "<b>Olah tubuh, olah vokal, olah rasa</b> adalah latihan dasar pemain teater.",
        "<b>Ketoprak</b> banyak mengangkat cerita sejarah Jawa dan diiringi gamelan."
      ],
      ex2: { q: "Kelasmu akan mementaskan Lenong. Apa saja yang perlu disiapkan?", a: "Langkah 1: pilih cerita khas Betawi, misalnya Si Pitung. Langkah 2: lakukan casting untuk memilih pemain sesuai watak tokoh. Langkah 3: latih olah vokal dengan logat Betawi dan sisipkan humor. Langkah 4: siapkan musik gambang kromong sebagai pengiring. Langkah 5: lakukan gladi resik sebelum pentas." },
      q: [
        ["Latihan terakhir sebelum pementasan disebut …", ["gladi resik", "casting", "evaluasi", "improvisasi"], 0, "Gladi resik."],
        ["Proses memilih pemain sesuai tokoh disebut …", ["casting", "blocking", "gladi", "properti"], 0, "Casting."],
        ["Lenong biasanya diiringi musik …", ["gambang kromong", "gamelan Bali", "talempong", "sasando"], 0, "Musik Betawi."],
        ["Latihan pernapasan dan artikulasi bagi pemain teater disebut olah …", ["vokal", "tubuh", "rasa", "pikir"], 0, "Olah suara."],
        ["Makyong adalah teater tradisional dari …", ["Riau", "Betawi", "Jawa Tengah", "Kalimantan Selatan"], 0, "Melayu Riau."],
        ["Orang yang memimpin dan mengatur jalannya pementasan teater disebut …", ["sutradara", "penonton", "penata rias", "pemusik"], 0, "Sutradara."]
      ]
    }
  },
  add: [
    {
      id: "vokal", t: "Teknik Vokal dan Bernyanyi", s: 1,
      sum: "Bernyanyi dengan baik bukan cuma soal suara bagus. Ada teknik yang bisa dilatih, mulai dari cara bernapas, membuka mulut, sampai menjaga nada tetap tepat.\nDi kelas 8 kamu berlatih bernyanyi lagu pop, lagu daerah, dan lagu wajib secara unisono (satu suara) maupun berkelompok. Perhatikan juga tanda birama saat membaca notasi lagu.",
      pts: [
        "<b>Pernapasan diafragma:</b> napas terbaik untuk bernyanyi. Perut mengembang saat menarik napas, bahu tidak naik.",
        "<b>Artikulasi:</b> pengucapan kata yang jelas. <b>Intonasi:</b> ketepatan tinggi-rendah nada.",
        "<b>Resonansi:</b> pemantulan suara di rongga kepala dan dada agar suara bulat dan nyaring.",
        "<b>Phrasering:</b> pemenggalan kalimat lagu yang tepat sesuai makna lirik.",
        "<b>Jenis suara:</b> sopran (wanita tinggi), alto (wanita rendah), tenor (pria tinggi), bas (pria rendah).",
        "<b>Unisono</b> berarti bernyanyi bersama dengan satu suara. <b>Paduan suara</b> memakai beberapa jenis suara."
      ],
      ex: { q: "Saat bernyanyi, bahumu terangkat ketika menarik napas. Apa yang salah dan bagaimana memperbaikinya?", a: "Itu pernapasan dada yang kurang tepat untuk bernyanyi. Latih pernapasan diafragma: tarik napas lewat hidung, rasakan perut mengembang, bahu tetap rileks, lalu keluarkan perlahan sambil mendesis “sss”." },
      tip: "Sebelum bernyanyi, lakukan pemanasan: humming (bersenandung dengan mulut tertutup) dan latihan “ma-me-mi-mo-mu” untuk melatih artikulasi.",
      q: [
        ["Pernapasan yang paling baik untuk bernyanyi adalah pernapasan …", ["diafragma", "dada", "bahu", "mulut"], 0, "Stabil dan panjang."],
        ["Kejelasan pengucapan kata saat bernyanyi disebut …", ["artikulasi", "intonasi", "resonansi", "dinamika"], 0, "Pengucapan."],
        ["Ketepatan tinggi rendah nada disebut …", ["intonasi", "artikulasi", "phrasering", "tempo"], 0, "Nada tepat."],
        ["Jenis suara pria yang tinggi adalah …", ["tenor", "bas", "alto", "sopran"], 0, "Tenor."],
        ["Bernyanyi bersama dengan satu suara disebut …", ["unisono", "kanon", "paduan suara", "duet"], 0, "Satu suara."],
        ["Pemenggalan kalimat lagu yang tepat disebut …", ["phrasering", "resonansi", "vibrato", "improvisasi"], 0, "Frasa lagu."],
        ["Jenis suara wanita yang rendah adalah …", ["alto", "sopran", "tenor", "bariton"], 0, "Alto."],
        ["Bersenandung dengan mulut tertutup untuk pemanasan disebut …", ["humming", "belting", "falsetto", "scat"], 0, "Humming."],
        ["Tanda birama 4/4 berarti dalam satu birama ada …", ["4 ketukan", "2 ketukan", "3 ketukan", "8 ketukan"], 0, "Angka atas = jumlah ketukan."],
        ["Pemantulan suara di rongga kepala dan dada agar suara terdengar bulat disebut …", ["resonansi", "artikulasi", "intonasi", "ekspresi"], 0, "Resonansi."]
      ]
    },
    {
      id: "seni-lukis", t: "Seni Lukis", s: 2,
      sum: "Seni lukis adalah karya seni rupa dua dimensi yang dibuat dengan cat di atas bidang datar, misalnya kanvas atau kertas. Pelukis menuangkan ide dan perasaannya lewat warna, garis, dan bentuk.\nIndonesia punya banyak pelukis terkenal, seperti Raden Saleh, Affandi, dan Basuki Abdullah. Di bab ini kamu mengenal aliran seni lukis, unsur dan prinsipnya, serta langkah membuat lukisan sendiri.",
      pts: [
        "<b>Unsur seni rupa:</b> titik, garis, bidang, bentuk, warna, tekstur, ruang.",
        "<b>Prinsip seni rupa:</b> kesatuan, keseimbangan, irama, proporsi, dan pusat perhatian.",
        "<b>Aliran:</b> naturalisme (sesuai alam), realisme (kenyataan apa adanya), ekspresionisme (luapan perasaan), surealisme (seperti mimpi), kubisme (bentuk geometris), abstrak.",
        "<b>Pelukis Indonesia:</b> Raden Saleh (romantisme, “Penangkapan Pangeran Diponegoro”), Affandi (ekspresionisme), Basuki Abdullah (naturalisme).",
        "<b>Alat dan bahan:</b> kanvas, kuas, palet, cat minyak, cat akrilik, cat air.",
        "<b>Warna primer:</b> merah, kuning, biru. Campuran dua warna primer menghasilkan warna sekunder (jingga, hijau, ungu)."
      ],
      ex: { q: "Warna apa yang kamu dapat kalau mencampur biru dan kuning? Termasuk warna apa?", a: "Biru + kuning = hijau. Hijau adalah warna sekunder karena berasal dari campuran dua warna primer." },
      tip: "Hubungkan pelukis dengan alirannya: Affandi dengan ekspresionisme (sering memencet cat langsung dari tube), Basuki Abdullah dengan naturalisme.",
      q: [
        ["Affandi dikenal sebagai pelukis beraliran …", ["ekspresionisme", "kubisme", "surealisme", "naturalisme"], 0, "Luapan emosi."],
        ["Lukisan “Penangkapan Pangeran Diponegoro” karya Raden Saleh beraliran …", ["romantisme", "kubisme", "abstrak", "pop art"], 0, "Raden Saleh."],
        ["Aliran lukisan yang menggambarkan objek seperti dalam mimpi adalah …", ["surealisme", "realisme", "naturalisme", "impresionisme"], 0, "Surealisme."],
        ["Campuran merah dan kuning menghasilkan warna …", ["jingga", "hijau", "ungu", "cokelat"], 0, "Warna sekunder."],
        ["Yang termasuk warna primer adalah …", ["biru", "hijau", "ungu", "jingga"], 0, "Merah, kuning, biru."],
        ["Alat untuk mencampur cat saat melukis disebut …", ["palet", "kanvas", "easel", "spons"], 0, "Palet."],
        ["Aliran yang menampilkan objek dalam bentuk geometris seperti kubus disebut …", ["kubisme", "naturalisme", "romantisme", "ekspresionisme"], 0, "Kubisme."],
        ["Prinsip seni rupa yang berkaitan dengan perbandingan ukuran disebut …", ["proporsi", "irama", "kesatuan", "kontras"], 0, "Proporsi."],
        ["Lukisan pemandangan alam yang dibuat sangat mirip aslinya termasuk aliran …", ["naturalisme", "abstrak", "kubisme", "surealisme"], 0, "Sesuai alam."],
        ["Kesan halus atau kasar pada permukaan karya disebut …", ["tekstur", "warna", "ruang", "garis"], 0, "Tekstur."]
      ]
    }
  ],
  order: ["ilustrasi", "ansambel", "vokal", "seni-lukis", "tari-kreasi", "teater"]
});

// ===================== PJOK =====================
EXT(8, "pjok", {
  more: {
    "basket": {
      pts: [
        "<b>Ukuran lapangan FIBA:</b> 28 m × 15 m. Tinggi ring 3,05 m.",
        "<b>Shot clock:</b> tim penyerang harus melakukan tembakan dalam 24 detik.",
        "<b>Lay-up</b> dilakukan dengan dua langkah, lalu melompat dan meletakkan bola ke ring."
      ],
      ex2: { q: "Tim A mencetak 8 tembakan dua angka, 3 tembakan tiga angka, dan 5 lemparan bebas yang masuk. Berapa total poinnya?", a: "Langkah 1: 8 × 2 = 16. Langkah 2: 3 × 3 = 9. Langkah 3: 5 × 1 = 5. Langkah 4: total = 16 + 9 + 5 = 30 poin." },
      q: [
        ["Tinggi ring basket standar adalah …", ["3,05 m", "2,43 m", "2,24 m", "3,50 m"], 0, "Sekitar 10 kaki."],
        ["Gerakan dua langkah lalu melompat dan memasukkan bola disebut …", ["lay-up", "dribble", "pivot", "rebound"], 0, "Lay-up."],
        ["Menangkap bola pantulan dari ring atau papan disebut …", ["rebound", "traveling", "jump ball", "assist"], 0, "Rebound."],
        ["Memantulkan bola dengan dua tangan sekaligus termasuk pelanggaran …", ["double dribble", "traveling", "offside", "pivot"], 0, "Pelanggaran dribel."],
        ["Ukuran lapangan basket standar FIBA adalah …", ["28 m × 15 m", "18 m × 9 m", "40 m × 20 m", "13,4 m × 6,1 m"], 0, "Standar FIBA."],
        ["Gerakan memutar badan dengan satu kaki sebagai poros disebut …", ["pivot", "lay-up", "shooting", "bounce"], 0, "Pivot."]
      ]
    },
    "lompat-jauh": {
      pts: [
        "<b>Awalan</b> dilakukan dengan lari secepat mungkin agar lompatan jauh.",
        "<b>Tumpuan</b> memakai kaki terkuat dengan tolakan ke depan atas.",
        "<b>Atletik</b> meliputi nomor jalan, lari, lompat (jauh, tinggi, jangkit), dan lempar (lembing, cakram, tolak peluru)."
      ],
      ex2: { q: "Theo melompat. Bekas tumitnya 4,20 m dari papan tumpu, tetapi tangannya menyentuh pasir di belakang pada jarak 3,90 m. Berapa jarak lompatan yang dicatat?", a: "Langkah 1: jarak diukur dari papan tumpu ke bekas pendaratan terdekat. Langkah 2: bekas terdekat adalah tangan, 3,90 m. Langkah 3: jadi lompatan dicatat 3,90 m. Pelajarannya: condongkan badan ke depan saat mendarat agar tangan tidak menyentuh pasir di belakang." },
      q: [
        ["Kaki yang dipakai untuk menumpu sebaiknya …", ["kaki terkuat", "kaki terlemah", "kedua kaki bersamaan", "kaki mana saja"], 0, "Agar tolakan maksimal."],
        ["Gaya lompat jauh dengan posisi seperti jongkok di udara disebut gaya …", ["jongkok", "schnepper", "berjalan di udara", "flop"], 0, "Gaya paling dasar."],
        ["Lompat jauh termasuk cabang olahraga …", ["atletik", "senam", "permainan bola besar", "bela diri"], 0, "Nomor lompat."],
        ["Tujuan awalan lari yang cepat adalah …", ["menambah kecepatan agar lompatan lebih jauh", "menghemat tenaga", "menghindari papan tumpuan", "supaya mendarat di luar bak"], 0, "Momentum."],
        ["Nomor atletik yang termasuk lempar adalah …", ["tolak peluru", "lari gawang", "lompat jangkit", "jalan cepat"], 0, "Nomor lempar."],
        ["Lompatan dinyatakan gagal jika pelompat …", ["menginjak melewati batas papan tumpuan", "mendarat dengan dua kaki", "berlari cepat", "condong ke depan"], 0, "Diskualifikasi."]
      ]
    },
    "senam-lantai": {
      pts: [
        "<b>Handstand:</b> berdiri dengan kedua tangan, tubuh lurus ke atas.",
        "<b>Komponen yang dilatih:</b> kelenturan, kekuatan, keseimbangan, koordinasi.",
        "<b>Guling belakang:</b> awali dari jongkok membelakangi matras, dagu menempel dada, telapak tangan di samping telinga."
      ],
      ex2: { q: "Jelaskan urutan gerakan guling depan yang benar.", a: "Langkah 1: jongkok di ujung matras, kedua telapak tangan menempel matras selebar bahu. Langkah 2: angkat pinggul dan masukkan kepala di antara kedua tangan, dagu menempel dada. Langkah 3: tolak dengan kaki sehingga tengkuk lalu punggung menyentuh matras. Langkah 4: berguling ke depan dan akhiri dengan posisi jongkok, tangan lurus ke depan." },
      q: [
        ["Gerakan bertumpu pada kedua tangan dengan tubuh lurus ke atas disebut …", ["handstand", "kayang", "sikap lilin", "split"], 0, "Handstand."],
        ["Bagian tubuh yang pertama menyentuh matras pada guling depan adalah …", ["tengkuk", "dahi", "pinggang", "lutut"], 0, "Kepala dimasukkan, tengkuk lebih dulu."],
        ["Senam lantai terutama melatih …", ["kelenturan dan keseimbangan", "kecepatan lari", "daya tahan renang", "ketepatan menembak"], 0, "Komponen kebugaran."],
        ["Orang yang membantu dan menjaga keamanan pesenam disebut …", ["spotter", "wasit", "pelatih kepala", "penonton"], 0, "Spotter."],
        ["Gerakan membuka kaki lurus ke depan dan belakang hingga menempel lantai disebut …", ["split", "kayang", "meroda", "roll"], 0, "Split."],
        ["Sebelum melakukan senam lantai, sebaiknya kamu …", ["melakukan pemanasan", "langsung melakukan gerakan sulit", "makan sangat banyak", "tidur dulu"], 0, "Mencegah cedera."]
      ]
    },
    "narkoba": {
      pts: [
        "<b>Karbon monoksida</b> dalam asap rokok mengikat hemoglobin sehingga darah kekurangan oksigen.",
        "<b>Perokok pasif</b> (orang yang menghirup asap rokok orang lain) juga terkena dampaknya.",
        "<b>UU Narkotika</b> No. 35 Tahun 2009 mengatur sanksi bagi penyalah guna dan pengedar."
      ],
      ex2: { q: "Seorang teman menawarimu rokok elektrik dan bilang itu aman. Bagaimana menanggapinya?", a: "Langkah 1: ingat bahwa rokok elektrik umumnya tetap mengandung nikotin yang membuat kecanduan. Langkah 2: tolak dengan tegas tetapi sopan: “Nggak, makasih. Aku mau jaga paru-paruku.” Langkah 3: alihkan ke kegiatan lain, misalnya mengajak main bola. Langkah 4: kalau terus dipaksa, menjauh dan ceritakan ke orang tua atau guru." },
      q: [
        ["Orang yang tidak merokok tetapi menghirup asap rokok orang lain disebut perokok …", ["pasif", "aktif", "berat", "ringan"], 0, "Perokok pasif."],
        ["Zat dalam asap rokok yang mengikat hemoglobin adalah …", ["karbon monoksida", "nikotin", "tar", "oksigen"], 0, "CO."],
        ["Undang-undang tentang narkotika di Indonesia adalah UU No. …", ["35 Tahun 2009", "20 Tahun 2003", "11 Tahun 2008", "12 Tahun 2011"], 0, "UU Narkotika."],
        ["Ganja termasuk golongan …", ["narkotika", "vitamin", "antibiotik", "obat batuk"], 0, "Narkotika golongan I."],
        ["Dampak merokok bagi pelajar adalah …", ["menurunkan kesehatan dan prestasi", "menambah kecerdasan", "membuat paru-paru sehat", "menambah tinggi badan"], 0, "Merugikan."],
        ["Kegiatan positif untuk menghindari narkoba adalah …", ["aktif berolahraga dan berorganisasi", "bergaul dengan pengedar", "menyendiri terus", "mencoba sedikit untuk tahu rasanya"], 0, "Sibukkan diri dengan hal positif."]
      ]
    }
  },
  add: [
    {
      id: "sepak-bola", t: "Permainan Sepak Bola", s: 1,
      sum: "Sepak bola dimainkan dua tim berisi 11 pemain, termasuk satu penjaga gawang. Tujuannya memasukkan bola ke gawang lawan sebanyak mungkin dan menjaga gawang sendiri.\nDi kelas 8 kamu memperdalam teknik dasar: menendang, menghentikan, menggiring, menyundul, dan lemparan ke dalam. Kerja sama tim sama pentingnya dengan kemampuan pribadi.",
      pts: [
        "<b>Menendang (passing):</b> kaki bagian dalam untuk umpan pendek yang akurat, punggung kaki untuk tendangan keras dan jauh.",
        "<b>Menghentikan bola (stopping):</b> dengan telapak kaki, kaki bagian dalam, paha, atau dada.",
        "<b>Menggiring (dribbling):</b> bola dibawa dekat kaki sambil berlari, pandangan sesekali ke depan.",
        "<b>Menyundul (heading):</b> memakai dahi dengan mata tetap terbuka.",
        "<b>Lemparan ke dalam:</b> dengan dua tangan dari belakang kepala, kedua kaki menapak tanah.",
        "<b>Aturan:</b> waktu 2 × 45 menit, offside, tendangan bebas, penalti, kartu kuning dan merah."
      ],
      ex: { q: "Kamu ingin memberi umpan pendek yang akurat ke teman berjarak 5 meter. Bagian kaki mana yang paling tepat?", a: "Kaki bagian dalam. Permukaannya lebar sehingga arah bola lebih terkontrol untuk umpan pendek." },
      tip: "Saat menggiring, sentuh bola pelan dan sering supaya bola tidak terlalu jauh dari kakimu.",
      q: [
        ["Jumlah pemain satu tim sepak bola di lapangan adalah …", ["11", "10", "9", "7"], 0, "Termasuk penjaga gawang."],
        ["Untuk umpan pendek yang akurat, bola ditendang dengan kaki bagian …", ["dalam", "luar", "tumit", "ujung jari"], 0, "Permukaannya lebar."],
        ["Bagian kepala untuk menyundul bola adalah …", ["dahi", "ubun-ubun", "belakang kepala", "pelipis"], 0, "Dahi."],
        ["Lama waktu pertandingan sepak bola resmi adalah …", ["2 × 45 menit", "2 × 30 menit", "4 × 10 menit", "2 × 40 menit"], 0, "90 menit."],
        ["Saat melakukan lemparan ke dalam, bola dilempar …", ["dengan dua tangan dari belakang kepala", "dengan satu tangan", "sambil melompat", "dari bawah pinggang"], 0, "Aturan lemparan ke dalam."],
        ["Pelanggaran oleh pemain bertahan di kotak penaltinya sendiri dihukum …", ["tendangan penalti", "lemparan ke dalam", "tendangan sudut", "tendangan gawang"], 0, "Penalti."],
        ["Kartu yang menyebabkan pemain dikeluarkan dari lapangan adalah kartu …", ["merah", "kuning", "hijau", "biru"], 0, "Kartu merah."],
        ["Membawa bola sambil berlari disebut …", ["dribbling", "heading", "passing", "stopping"], 0, "Menggiring."],
        ["Pemain yang boleh memegang bola dengan tangan di kotak penaltinya sendiri adalah …", ["penjaga gawang", "kapten", "penyerang", "bek"], 0, "Kiper."],
        ["Bola lambung yang datang setinggi dada sebaiknya dihentikan dengan …", ["dada", "telapak kaki", "tumit", "lutut"], 0, "Sesuaikan dengan tinggi bola."]
      ]
    },
    {
      id: "bola-voli", t: "Permainan Bola Voli", s: 1,
      sum: "Bola voli dimainkan dua tim berisi 6 pemain yang dipisahkan net. Setiap tim berusaha menjatuhkan bola di daerah lawan dan mencegah bola jatuh di daerah sendiri.\nTeknik dasarnya adalah servis, passing bawah, passing atas, smash, dan block. Setiap tim boleh menyentuh bola paling banyak tiga kali sebelum mengembalikannya ke lawan.",
      pts: [
        "<b>Servis:</b> servis bawah (lebih mudah untuk pemula), servis atas, dan jump serve.",
        "<b>Passing bawah:</b> dengan kedua lengan bawah yang dirapatkan, untuk menerima servis atau bola rendah.",
        "<b>Passing atas:</b> dengan jari-jari kedua tangan di atas dahi, untuk mengumpan.",
        "<b>Smash:</b> pukulan keras menukik ke daerah lawan. <b>Block:</b> menghadang smash di depan net.",
        "<b>Sistem skor:</b> rally point. Satu set sampai 25 poin (set kelima 15 poin) dengan selisih minimal 2.",
        "<b>Ukuran lapangan:</b> 18 m × 9 m. Tinggi net putra 2,43 m, putri 2,24 m."
      ],
      ex: { q: "Skor 24–23 untuk tim A. Tim A mendapat poin berikutnya. Apakah set selesai?", a: "Ya. Skor menjadi 25–23. Tim A mencapai 25 poin dengan selisih 2, jadi tim A memenangkan set itu." },
      tip: "Saat passing bawah, gerakkan kaki dan tubuh, jangan mengayun lengan terlalu tinggi. Lengan cukup menjadi papan pantul.",
      q: [
        ["Jumlah pemain satu tim bola voli di lapangan adalah …", ["6", "5", "7", "11"], 0, "Enam pemain."],
        ["Teknik menerima servis dengan lengan bawah yang dirapatkan disebut …", ["passing bawah", "passing atas", "smash", "block"], 0, "Passing bawah."],
        ["Pukulan keras menukik ke daerah lawan disebut …", ["smash", "servis bawah", "block", "passing atas"], 0, "Smash (spike)."],
        ["Tinggi net bola voli putra adalah …", ["2,43 m", "2,24 m", "3,05 m", "1,55 m"], 0, "Net putra."],
        ["Dalam set pertama, tim dinyatakan menang jika mencapai … poin dengan selisih 2.", ["25", "21", "15", "30"], 0, "Rally point."],
        ["Banyak sentuhan maksimal satu tim sebelum bola dikembalikan ke lawan adalah …", ["3 kali", "2 kali", "4 kali", "5 kali"], 0, "Tiga sentuhan."],
        ["Usaha menghadang smash lawan di depan net disebut …", ["block", "servis", "passing", "receive"], 0, "Bendungan."],
        ["Ukuran lapangan bola voli adalah …", ["18 m × 9 m", "28 m × 15 m", "13,4 m × 6,1 m", "20 m × 10 m"], 0, "Ukuran standar."],
        ["Skor 25–24 dalam set pertama. Set itu …", ["belum selesai karena selisih belum 2", "selesai, tim dengan 25 poin menang", "diulang dari awal", "dinyatakan seri"], 0, "Harus selisih 2."],
        ["Passing atas dilakukan dengan …", ["jari-jari tangan di atas dahi", "kepalan tangan", "lengan bawah yang dirapatkan", "kaki"], 0, "Untuk mengumpan."]
      ]
    },
    {
      id: "kebugaran", t: "Aktivitas Kebugaran Jasmani", s: 2,
      sum: "Kebugaran jasmani adalah kemampuan tubuh melakukan kegiatan sehari-hari tanpa merasa terlalu lelah, dan masih punya tenaga untuk kegiatan lain. Tubuh yang bugar membantumu belajar lebih fokus.\nKebugaran bisa ditingkatkan dengan latihan teratur. Ada komponen yang berhubungan dengan kesehatan, seperti daya tahan dan kekuatan, dan komponen yang berhubungan dengan keterampilan, seperti kelincahan dan kecepatan.",
      pts: [
        "<b>Daya tahan jantung-paru:</b> lari jarak jauh, bersepeda, lompat tali.",
        "<b>Kekuatan otot:</b> push-up (lengan dan dada), sit-up (perut), back-up (punggung), squat (tungkai).",
        "<b>Kelenturan:</b> peregangan, sit and reach.",
        "<b>Kelincahan:</b> lari zig-zag, shuttle run (lari bolak-balik).",
        "<b>Prinsip latihan FITT:</b> frequency (seberapa sering), intensity (seberapa berat), time (berapa lama), type (jenis latihan).",
        "<b>Denyut nadi maksimal (DNM)</b> kira-kira 220 dikurangi usia. Zona latihan sekitar 60–80% dari DNM."
      ],
      ex: { q: "Theo berusia 13 tahun. Berapa denyut nadi maksimal dan zona latihannya?", a: "DNM = 220 − 13 = 207 kali/menit. Zona latihan 60–80%: 0,6 × 207 ≈ 124 sampai 0,8 × 207 ≈ 166 kali/menit." },
      tip: "Latihan teratur 3–5 kali seminggu selama 20–60 menit lebih berguna daripada latihan berat sesekali.",
      q: [
        ["Push-up terutama melatih kekuatan otot …", ["lengan dan dada", "perut", "punggung", "tungkai"], 0, "Lengan dan dada."],
        ["Sit-up melatih kekuatan otot …", ["perut", "lengan", "leher", "betis"], 0, "Perut."],
        ["Lari zig-zag melatih …", ["kelincahan", "kelenturan", "kekuatan lengan", "keseimbangan statis"], 0, "Mengubah arah dengan cepat."],
        ["Denyut nadi maksimal anak berusia 14 tahun kira-kira …", ["206 kali/menit", "234 kali/menit", "200 kali/menit", "180 kali/menit"], 0, "220 − 14 = 206."],
        ["Latihan untuk meningkatkan daya tahan jantung dan paru-paru adalah …", ["lari jarak jauh", "push-up", "sit and reach", "lari 30 meter"], 0, "Latihan aerobik."],
        ["Dalam prinsip FITT, huruf I berarti …", ["intensity (seberapa berat)", "interval", "istirahat", "ide latihan"], 0, "Intensitas."],
        ["Tes sit and reach mengukur …", ["kelenturan", "kecepatan", "kekuatan otot lengan", "daya tahan"], 0, "Kelenturan."],
        ["Squat terutama melatih otot …", ["tungkai", "lengan", "leher", "jari"], 0, "Otot kaki."],
        ["Frekuensi latihan kebugaran yang dianjurkan adalah …", ["3–5 kali seminggu", "sekali sebulan", "setiap jam", "sekali setahun"], 0, "Teratur."],
        ["Back-up adalah latihan untuk menguatkan otot …", ["punggung", "perut", "lengan", "betis"], 0, "Punggung."]
      ]
    }
  ],
  order: ["sepak-bola", "bola-voli", "basket", "lompat-jauh", "kebugaran", "senam-lantai", "narkoba"]
});
