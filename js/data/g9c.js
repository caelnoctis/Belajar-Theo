// KELAS 9 – tambahan bab dan soal. Pakai EXT(9, "idMapel", { add, more, order }), lihat js/subjects.js.

// ================= MATEMATIKA =================
EXT(9, "mtk", {
  more: {
    "pangkat-akar": {
      pts: [
        "<b>Pangkat pecahan:</b> a^(m/n) = ⁿ√(aᵐ). Contoh: 8^(2/3) = (∛8)² = 2² = 4.",
        "<b>Operasi akar:</b> hanya akar sejenis yang bisa dijumlah, misalnya 3√2 + 5√2 = 8√2. Untuk perkalian berlaku √a × √b = √(ab)."
      ],
      ex2: { q: "Rasionalkan penyebut dari 4/(√5 − 1).", a: "Kalikan pembilang dan penyebut dengan bentuk sekawan (√5 + 1). Pembilang menjadi 4(√5 + 1). Penyebut menjadi (√5)² − 1² = 5 − 1 = 4. Hasilnya 4(√5 + 1)/4 = √5 + 1." },
      q: [
        ["Hasil dari 2⁻³ adalah …", ["1/8", "−8", "−6", "1/6"], 0, "2⁻³ = 1/2³ = 1/8."],
        ["Hasil dari 3√5 + 2√5 − √5 adalah …", ["4√5", "5√5", "6√5", "4√15"], 0, "(3 + 2 − 1)√5 = 4√5."],
        ["Nilai dari 27^(2/3) adalah …", ["9", "18", "3", "6"], 0, "(∛27)² = 3² = 9."],
        ["Hasil dari √8 × √2 adalah …", ["4", "√10", "16", "2√2"], 0, "√16 = 4."],
        ["Sebuah bakteri membelah menjadi 2 setiap 20 menit. Dari 1 bakteri, banyak bakteri setelah 2 jam adalah …", ["64", "32", "128", "12"], 0, "2 jam = 6 kali membelah, jadi 2⁶ = 64."],
        ["Bentuk rasional dari 10/√5 adalah …", ["2√5", "5√2", "10√5", "√5/2"], 0, "10√5/5 = 2√5."]
      ]
    },
    "persamaan-kuadrat": {
      pts: [
        "<b>Menyusun persamaan kuadrat</b> dari akar p dan q: x² − (p + q)x + pq = 0.",
        "<b>Soal cerita</b> sering tentang luas persegi panjang. Buat permisalan, susun persamaan, lalu pilih akar yang masuk akal (panjang tidak mungkin negatif)."
      ],
      ex2: { q: "Panjang sebuah persegi panjang 3 cm lebih dari lebarnya. Luasnya 40 cm². Tentukan ukurannya.", a: "Misalkan lebar = x, maka panjang = x + 3. Luas: x(x + 3) = 40 → x² + 3x − 40 = 0 → (x + 8)(x − 5) = 0. Nilai x = −8 tidak mungkin, jadi lebar 5 cm dan panjang 8 cm." },
      q: [
        ["Persamaan kuadrat yang akar-akarnya 2 dan 5 adalah …", ["x² − 7x + 10 = 0", "x² + 7x + 10 = 0", "x² − 3x + 10 = 0", "x² − 7x − 10 = 0"], 0, "x² − (2 + 5)x + 2 × 5 = 0."],
        ["Hasil kali akar-akar 3x² + 6x − 12 = 0 adalah …", ["−4", "4", "−2", "2"], 0, "c/a = −12/3 = −4."],
        ["Akar-akar dari x² − 5x = 0 adalah …", ["0 dan 5", "0 dan −5", "5 saja", "1 dan 5"], 0, "x(x − 5) = 0."],
        ["Diskriminan dari x² + 4x + 5 = 0 adalah …", ["−4", "4", "36", "−16"], 0, "D = 16 − 20 = −4."],
        ["Hasil kali dua bilangan asli berurutan adalah 56. Bilangan yang lebih besar adalah …", ["8", "7", "9", "14"], 0, "x(x + 1) = 56 → x = 7, jadi bilangannya 7 dan 8."],
        ["Akar-akar dari 2x² − 7x + 3 = 0 adalah …", ["3 dan 1/2", "−3 dan −1/2", "3 dan 2", "1 dan 3/2"], 0, "(2x − 1)(x − 3) = 0."]
      ]
    },
    "fungsi-kuadrat": {
      pts: [
        "<b>Membaca a dan D sekaligus:</b> jika a > 0 dan D < 0, parabola selalu berada di atas sumbu-x (definit positif).",
        "<b>Nilai optimum</b> (maksimum atau minimum) adalah koordinat y titik puncak, yaitu −D/4a atau langsung f(−b/2a)."
      ],
      ex2: { q: "Tentukan titik puncak grafik f(x) = x² − 8x + 12.", a: "Sumbu simetri x = −b/2a = 8/2 = 4. Nilai f(4) = 16 − 32 + 12 = −4. Titik puncaknya (4, −4). Karena a > 0, titik ini adalah titik minimum." },
      q: [
        ["Titik potong grafik f(x) = x² − 5x + 6 dengan sumbu-x adalah …", ["(2, 0) dan (3, 0)", "(−2, 0) dan (−3, 0)", "(0, 6)", "(1, 0) dan (6, 0)"], 0, "x² − 5x + 6 = (x − 2)(x − 3)."],
        ["Titik puncak grafik f(x) = x² + 2x − 3 adalah …", ["(−1, −4)", "(1, 0)", "(−1, 4)", "(2, 5)"], 0, "x = −1, f(−1) = 1 − 2 − 3 = −4."],
        ["Nilai maksimum f(x) = −x² + 6x adalah …", ["9", "6", "3", "−9"], 0, "x = 3, f(3) = −9 + 18 = 9."],
        ["Bola dilempar ke atas dengan tinggi h(t) = 20t − 5t² meter. Tinggi maksimum bola adalah …", ["20 m", "10 m", "15 m", "25 m"], 0, "t = 20/10 = 2 detik, h(2) = 40 − 20 = 20 m."],
        ["Grafik f(x) = x² − 4x + 4 menyinggung sumbu-x di titik …", ["(2, 0)", "(−2, 0)", "(4, 0)", "(0, 4)"], 0, "D = 0, akar kembar x = 2."],
        ["Fungsi kuadrat yang grafiknya memotong sumbu-y di (0, −3) dan terbuka ke atas adalah …", ["f(x) = 2x² + x − 3", "f(x) = −x² + 2x − 3", "f(x) = x² + 3", "f(x) = −2x² − 3"], 0, "a > 0 dan c = −3."]
      ]
    },
    "transformasi": {
      pts: [
        "<b>Rotasi 90° searah jarum jam</b> (−90°) pusat O: (x, y) → (y, −x).",
        "<b>Refleksi terhadap garis x = h:</b> (x, y) → (2h − x, y). <b>Terhadap garis y = k:</b> (x, y) → (x, 2k − y).",
        "<b>Luas bayangan dilatasi</b> = k² × luas semula."
      ],
      ex2: { q: "Titik P(3, −2) dicerminkan terhadap garis y = x, lalu hasilnya ditranslasi (−1, 4). Tentukan bayangan akhirnya.", a: "Refleksi terhadap y = x menukar koordinat: (3, −2) → (−2, 3). Translasi (−1, 4): (−2 − 1, 3 + 4) = (−3, 7). Jadi bayangan akhirnya P″(−3, 7)." },
      q: [
        ["Bayangan titik (5, 2) dirotasi 90° berlawanan arah jarum jam pusat O adalah …", ["(−2, 5)", "(2, −5)", "(−5, −2)", "(5, −2)"], 0, "(x, y) → (−y, x)."],
        ["Bayangan titik (−3, 4) dicerminkan terhadap sumbu-y adalah …", ["(3, 4)", "(−3, −4)", "(3, −4)", "(4, −3)"], 0, "Nilai x berubah tanda."],
        ["Titik A(1, 3) dicerminkan terhadap garis x = 4. Bayangannya adalah …", ["(7, 3)", "(−7, 3)", "(1, 5)", "(4, 3)"], 0, "x′ = 2(4) − 1 = 7."],
        ["Segitiga dengan luas 6 cm² didilatasi dengan faktor 2. Luas bayangannya …", ["24 cm²", "12 cm²", "8 cm²", "36 cm²"], 0, "Luas dikali k² = 4."],
        ["Titik B ditranslasi (2, −3) menghasilkan B′(5, 1). Koordinat B adalah …", ["(3, 4)", "(7, −2)", "(3, −2)", "(−3, 4)"], 0, "x = 5 − 2 = 3, y = 1 + 3 = 4."],
        ["Bayangan titik (6, −4) didilatasi dengan faktor −½ pusat O adalah …", ["(−3, 2)", "(3, −2)", "(−12, 8)", "(3, 2)"], 0, "Kedua koordinat dikali −½."]
      ]
    },
    "kesebangunan": {
      pts: [
        "<b>Segitiga siku-siku dengan garis tinggi:</b> jika CD adalah tinggi ke sisi miring AB, maka CD² = AD × DB.",
        "<b>Perbandingan luas</b> dua bangun sebangun sama dengan kuadrat perbandingan sisinya. Sisi 1 : 2 berarti luas 1 : 4."
      ],
      ex2: { q: "Segitiga ABC sebangun dengan segitiga PQR. AB = 6 cm, BC = 8 cm, dan PQ = 9 cm. Tentukan panjang QR.", a: "Sisi yang bersesuaian: AB dengan PQ, BC dengan QR. Perbandingannya AB/PQ = 6/9 = 2/3. Maka BC/QR = 2/3 → 8/QR = 2/3 → QR = 8 × 3/2 = 12 cm." },
      q: [
        ["Segitiga ABC sebangun dengan DEF. AB = 4 cm, DE = 10 cm, dan BC = 6 cm. Panjang EF adalah …", ["15 cm", "12 cm", "2,4 cm", "16 cm"], 0, "Faktor skala 10/4 = 2,5, jadi EF = 6 × 2,5."],
        ["Segitiga ABC siku-siku di C. Garis tinggi CD jatuh di AB dengan AD = 4 cm dan DB = 9 cm. Panjang CD adalah …", ["6 cm", "13 cm", "36 cm", "5 cm"], 0, "CD² = 4 × 9 = 36."],
        ["Dua persegi panjang sebangun dengan perbandingan sisi 1 : 3. Perbandingan luasnya …", ["1 : 9", "1 : 3", "1 : 6", "3 : 1"], 0, "Kuadrat dari perbandingan sisi."],
        ["Pada segitiga ABC, DE sejajar BC dengan D pada AB dan E pada AC. AD = 3 cm, DB = 6 cm, dan DE = 4 cm. Panjang BC adalah …", ["12 cm", "8 cm", "6 cm", "18 cm"], 0, "AD/AB = 3/9 = 1/3, jadi BC = 3 × 4."],
        ["Maket gedung berskala 1 : 200 memiliki tinggi 15 cm. Tinggi gedung sebenarnya …", ["30 m", "3 m", "300 m", "15 m"], 0, "15 × 200 = 3.000 cm = 30 m."],
        ["Pasangan bangun yang belum tentu sebangun adalah …", ["dua persegi panjang", "dua persegi", "dua lingkaran", "dua segitiga sama sisi"], 0, "Perbandingan panjang dan lebarnya bisa berbeda."]
      ]
    },
    "bangun-ruang-lengkung": {
      pts: [
        "<b>Luas selimut:</b> tabung 2πrt, kerucut πrs. Tabung tanpa tutup: πr² + 2πrt.",
        "<b>Belahan bola:</b> V = ⅔πr³. Luas permukaan belahan bola pejal = 3πr².",
        "<b>Satuan volume:</b> 1 liter = 1 dm³ = 1.000 cm³."
      ],
      ex2: { q: "Sebuah kaleng berbentuk tabung berdiameter 14 cm dan tinggi 20 cm. Berapa liter isinya jika penuh? (π = 22/7)", a: "Jari-jari r = 14 : 2 = 7 cm. V = πr²t = 22/7 × 7 × 7 × 20 = 22 × 7 × 20 = 3.080 cm³. Karena 1 liter = 1.000 cm³, isinya 3,08 liter." },
      q: [
        ["Luas selimut tabung dengan r = 7 cm dan t = 15 cm adalah … (π = 22/7)", ["660 cm²", "330 cm²", "1.320 cm²", "462 cm²"], 0, "2 × 22/7 × 7 × 15 = 660."],
        ["Volume bola berjari-jari 3 cm adalah … (π = 3,14)", ["113,04 cm³", "37,68 cm³", "28,26 cm³", "339,12 cm³"], 0, "4/3 × 3,14 × 27 = 113,04."],
        ["Luas selimut kerucut dengan r = 6 cm dan s = 10 cm adalah … (π = 3,14)", ["188,4 cm²", "301,44 cm²", "113,04 cm²", "376,8 cm²"], 0, "3,14 × 6 × 10."],
        ["Jika jari-jari bola diperbesar 2 kali, volumenya menjadi … kali semula.", ["8", "2", "4", "6"], 0, "Volume sebanding dengan r³, jadi 2³ = 8."],
        ["Tabung bervolume 600 cm³. Kerucut dengan alas dan tinggi yang sama memiliki volume …", ["200 cm³", "300 cm³", "600 cm³", "1.800 cm³"], 0, "Volume kerucut = ⅓ volume tabung."],
        ["Topi ulang tahun berbentuk kerucut dengan r = 7 cm dan s = 20 cm. Luas kertas yang diperlukan (tanpa alas) adalah … (π = 22/7)", ["440 cm²", "594 cm²", "880 cm²", "154 cm²"], 0, "Luas selimut = 22/7 × 7 × 20 = 440."]
      ]
    },
    "peluang": {
      pts: [
        "<b>Dua dadu</b> memiliki 6 × 6 = 36 titik sampel. Jumlah mata dadu 7 muncul 6 kali, jadi peluangnya 6/36 = 1/6.",
        "<b>Kejadian saling lepas:</b> P(A atau B) = P(A) + P(B) jika A dan B tidak bisa terjadi bersamaan."
      ],
      ex2: { q: "Dua dadu dilempar bersamaan. Tentukan peluang muncul mata dadu berjumlah 10.", a: "Ruang sampel ada 6 × 6 = 36. Pasangan berjumlah 10: (4, 6), (5, 5), (6, 4), ada 3 pasangan. Peluangnya 3/36 = 1/12." },
      q: [
        ["Dua dadu dilempar. Peluang muncul mata dadu kembar adalah …", ["1/6", "1/36", "1/12", "1/3"], 0, "(1,1) sampai (6,6) ada 6 dari 36."],
        ["Kotak berisi 4 bola merah, 6 kuning, dan 10 hijau. Peluang terambil bola bukan hijau adalah …", ["1/2", "3/10", "1/5", "2/5"], 0, "10 bola bukan hijau dari 20 bola."],
        ["Satu huruf dipilih acak dari kata MATEMATIKA. Peluang terpilih huruf A adalah …", ["3/10", "2/10", "1/10", "3/7"], 0, "Huruf A ada 3 dari 10 huruf."],
        ["Koin dilempar 50 kali dan muncul gambar 28 kali. Peluang empiris muncul angka adalah …", ["22/50", "28/50", "1/2", "22/28"], 0, "Angka muncul 50 − 28 = 22 kali."],
        ["Tiga koin dilempar bersama. Banyak titik sampelnya …", ["8", "6", "9", "3"], 0, "2³ = 8."],
        ["Peluang seorang siswa lulus ujian 0,85. Dari 200 siswa, banyak siswa yang diperkirakan tidak lulus adalah …", ["30", "170", "15", "85"], 0, "(1 − 0,85) × 200 = 30."]
      ]
    }
  },
  add: [
    {
      id: "barisan-deret", t: "Pola Bilangan, Barisan, dan Deret", s: 1,
      sum: "Pola bilangan adalah susunan angka yang mengikuti aturan tertentu, seperti 2, 4, 6, 8 atau 1, 4, 9, 16. Kalau kamu menemukan aturannya, kamu bisa menentukan suku ke berapa pun tanpa menulis semuanya.\nBarisan aritmetika punya selisih tetap, sedangkan barisan geometri punya rasio (perbandingan) tetap. Deret adalah jumlah suku-suku barisan. Materi ini sering muncul dalam soal cerita tentang tabungan, susunan kursi, atau pertumbuhan bakteri.",
      pts: [
        "<b>Barisan aritmetika:</b> Uₙ = a + (n − 1)b, dengan a suku pertama dan b beda.",
        "<b>Deret aritmetika:</b> Sₙ = n/2 × (2a + (n − 1)b) atau Sₙ = n/2 × (a + Uₙ).",
        "<b>Barisan geometri:</b> Uₙ = a × rⁿ⁻¹, dengan r rasio.",
        "<b>Deret geometri:</b> Sₙ = a(rⁿ − 1)/(r − 1) untuk r > 1.",
        "<b>Pola khusus:</b> bilangan persegi 1, 4, 9, 16 (n²), bilangan segitiga 1, 3, 6, 10 (n(n + 1)/2), bilangan ganjil (2n − 1).",
        "<b>Suku tengah</b> barisan aritmetika = (suku pertama + suku terakhir) : 2."
      ],
      ex: { q: "Tentukan suku ke-20 dan jumlah 20 suku pertama barisan 3, 7, 11, 15, …", a: "a = 3 dan b = 4. U₂₀ = 3 + 19 × 4 = 79. S₂₀ = 20/2 × (3 + 79) = 10 × 82 = 820." },
      tip: "Cek dulu apakah selisihnya tetap (aritmetika) atau perbandingannya tetap (geometri). Kalau dua-duanya tidak, cari pola khusus seperti n² atau selisih bertingkat.",
      q: [
        ["Suku ke-10 barisan 5, 8, 11, 14, … adalah …", ["32", "35", "30", "29"], 0, "5 + 9 × 3 = 32."],
        ["Dua suku berikutnya dari 1, 4, 9, 16, … adalah …", ["25 dan 36", "20 dan 24", "25 dan 34", "24 dan 32"], 0, "Bilangan persegi 5² dan 6²."],
        ["Suku ke-6 barisan geometri 2, 6, 18, … adalah …", ["486", "162", "1.458", "54"], 0, "2 × 3⁵ = 2 × 243 = 486."],
        ["Jumlah 10 suku pertama deret 2 + 4 + 6 + … adalah …", ["110", "100", "120", "55"], 0, "U₁₀ = 20, S₁₀ = 10/2 × (2 + 20) = 110."],
        ["Barisan aritmetika memiliki U₃ = 10 dan U₇ = 22. Bedanya adalah …", ["3", "4", "12", "2"], 0, "U₇ − U₃ = 4b = 12, jadi b = 3."],
        ["Baris pertama gedung berisi 15 kursi dan tiap baris berikutnya bertambah 2 kursi. Banyak kursi di baris ke-12 adalah …", ["37", "39", "35", "24"], 0, "15 + 11 × 2 = 37."],
        ["Baris pertama gedung berisi 15 kursi dan tiap baris bertambah 2 kursi. Banyak kursi pada 12 baris pertama adalah …", ["312", "444", "300", "324"], 0, "U₁₂ = 37, S₁₂ = 12/2 × (15 + 37) = 6 × 52 = 312."],
        ["Rasio barisan 81, 27, 9, 3, … adalah …", ["1/3", "3", "−3", "1/9"], 0, "27 : 81 = 1/3."],
        ["Bilangan segitiga ke-5 adalah …", ["15", "10", "21", "25"], 0, "5 × 6 : 2 = 15."],
        ["Amoeba membelah menjadi 2 setiap 15 menit. Jika mula-mula ada 5 amoeba, setelah 1 jam banyaknya …", ["80", "40", "160", "20"], 0, "1 jam = 4 kali membelah: 5 × 2⁴ = 80."],
        ["Jumlah 6 suku pertama deret 1 + 2 + 4 + … adalah …", ["63", "64", "32", "31"], 0, "(2⁶ − 1)/(2 − 1) = 63."]
      ]
    },
    {
      id: "statistika-9", t: "Statistika: Pemusatan dan Penyebaran Data", s: 2,
      sum: "Statistika membantu kamu meringkas sekumpulan data menjadi beberapa angka penting, misalnya nilai rata-rata ulangan kelas atau tinggi badan yang paling sering muncul.\nUkuran pemusatan (mean, median, modus) menunjukkan nilai tengah data. Ukuran penyebaran (jangkauan dan kuartil) menunjukkan seberapa jauh data menyebar. Soal jenis ini hampir selalu muncul di ujian akhir SMP.",
      pts: [
        "<b>Mean (rata-rata):</b> jumlah semua data dibagi banyak data.",
        "<b>Median:</b> nilai tengah setelah data diurutkan. Jika banyak data genap, median adalah rata-rata dua data tengah.",
        "<b>Modus:</b> data yang paling sering muncul. Satu kumpulan data bisa punya lebih dari satu modus.",
        "<b>Jangkauan:</b> data terbesar dikurangi data terkecil.",
        "<b>Kuartil:</b> Q₁, Q₂ (median), dan Q₃ membagi data terurut menjadi empat bagian sama banyak. Jangkauan interkuartil = Q₃ − Q₁.",
        "<b>Rata-rata gabungan:</b> (n₁ × x̄₁ + n₂ × x̄₂) / (n₁ + n₂)."
      ],
      ex: { q: "Data nilai: 7, 8, 6, 9, 8, 5, 8. Tentukan mean, median, dan modus.", a: "Urutkan dulu: 5, 6, 7, 8, 8, 8, 9. Jumlahnya 51, jadi mean = 51 : 7 ≈ 7,29. Median adalah data ke-4, yaitu 8. Modus = 8 karena muncul 3 kali." },
      tip: "Selalu urutkan data sebelum mencari median dan kuartil. Banyak siswa salah karena langsung mengambil angka di tengah daftar yang belum urut.",
      q: [
        ["Rata-rata dari 4, 6, 8, 10, 12 adalah …", ["8", "6", "10", "40"], 0, "40 : 5 = 8."],
        ["Median dari 3, 9, 5, 7, 1, 8 adalah …", ["6", "5", "7", "5,5"], 0, "Urutkan: 1, 3, 5, 7, 8, 9. Median = (5 + 7) : 2 = 6."],
        ["Modus dari data 2, 4, 4, 5, 6, 6, 6, 7 adalah …", ["6", "4", "5", "7"], 0, "6 muncul 3 kali."],
        ["Jangkauan data 12, 15, 9, 20, 17 adalah …", ["11", "8", "20", "9"], 0, "20 − 9 = 11."],
        ["Rata-rata nilai 5 siswa adalah 70. Setelah satu siswa bergabung, rata-ratanya menjadi 72. Nilai siswa baru itu adalah …", ["82", "72", "80", "74"], 0, "6 × 72 − 5 × 70 = 432 − 350 = 82."],
        ["Rata-rata nilai 20 siswa putra adalah 75 dan 30 siswa putri adalah 80. Rata-rata gabungannya …", ["78", "77,5", "77", "79"], 0, "(1.500 + 2.400) : 50 = 78."],
        ["Tabel nilai: 6 (3 siswa), 7 (5 siswa), 8 (8 siswa), 9 (4 siswa). Modusnya adalah …", ["8", "7", "9", "6"], 0, "Frekuensi terbesar ada pada nilai 8."],
        ["Tabel nilai: 6 (3 siswa), 7 (5 siswa), 8 (8 siswa), 9 (4 siswa). Rata-ratanya adalah …", ["7,65", "7,5", "8", "7,75"], 0, "(18 + 35 + 64 + 36) : 20 = 153 : 20 = 7,65."],
        ["Kuartil bawah (Q₁) dari data 2, 4, 5, 7, 8, 10, 12 adalah …", ["4", "5", "2", "7"], 0, "Median = 7. Q₁ adalah median dari 2, 4, 5, yaitu 4."],
        ["Jika setiap data ditambah 5, rata-ratanya …", ["bertambah 5", "tetap", "menjadi 5 kali lipat", "berkurang 5"], 0, "Semua data bergeser 5, rata-rata ikut bergeser 5."]
      ]
    }
  ],
  order: ["pangkat-akar", "barisan-deret", "persamaan-kuadrat", "fungsi-kuadrat", "transformasi", "kesebangunan", "bangun-ruang-lengkung", "statistika-9", "peluang"]
});

// ================= IPA =================
EXT(9, "ipa", {
  more: {
    "reproduksi": {
      pts: [
        "<b>Siklus menstruasi</b> rata-rata 28 hari. Ovulasi (pelepasan sel telur dari ovarium) terjadi sekitar hari ke-14.",
        "<b>Penyakit pada sistem reproduksi:</b> AIDS disebabkan virus HIV dan merusak kekebalan tubuh, sifilis dan gonore disebabkan bakteri.",
        "<b>Reproduksi hewan:</b> ovipar (bertelur, contoh ayam), vivipar (melahirkan, contoh kucing), ovovivipar (telur menetas di dalam tubuh, contoh hiu)."
      ],
      ex2: { q: "Serbuk sari dari sebuah bunga jatuh ke kepala putik bunga yang sama. Penyerbukan jenis apa ini?", a: "Penyerbukan yang terjadi pada satu bunga yang sama disebut penyerbukan sendiri (autogami). Jika serbuk sari berasal dari bunga lain pada tanaman yang sama disebut geitonogami. Jika berasal dari tanaman lain yang sejenis disebut penyerbukan silang (alogami)." },
      q: [
        ["Tempat terjadinya fertilisasi pada manusia adalah …", ["tuba falopi (oviduk)", "rahim", "ovarium", "vagina"], 0, "Pembuahan terjadi di oviduk, lalu zigot menempel di rahim."],
        ["Sel sperma dihasilkan di …", ["testis", "ovarium", "kelenjar prostat", "uretra"], 0, "Testis."],
        ["Hewan yang berkembang biak secara ovovivipar adalah …", ["hiu", "ayam", "kucing", "katak"], 0, "Telurnya menetas di dalam tubuh induk."],
        ["Penyerbukan yang dibantu angin disebut …", ["anemogami", "entomogami", "hidrogami", "ornitogami"], 0, "Anemo berarti angin."],
        ["Penyakit yang menyerang sistem kekebalan tubuh akibat virus HIV adalah …", ["AIDS", "sifilis", "gonore", "keputihan"], 0, "AIDS."],
        ["Hydra berkembang biak secara aseksual dengan cara …", ["tunas", "membelah diri", "spora", "fragmentasi buatan"], 0, "Tunas tumbuh di tubuh Hydra lalu lepas."]
      ]
    },
    "pewarisan-sifat": {
      pts: [
        "<b>Intermediet:</b> sifat kedua induk sama kuat. Bunga merah (MM) × putih (mm) menghasilkan merah muda (Mm). Rasio fenotipe F2 = 1 : 2 : 1.",
        "<b>Golongan darah</b> diwariskan lewat alel Iᴬ, Iᴮ, dan i. Iᴬ dan Iᴮ sama kuat (kodominan), i resesif.",
        "<b>Penyakit menurun:</b> buta warna dan hemofilia terpaut kromosom X, sehingga lebih sering diderita laki-laki."
      ],
      ex2: { q: "Kacang ercis biji bulat (BB) disilangkan dengan biji kisut (bb). Bulat dominan. Tentukan F1 dan rasio fenotipe F2.", a: "P: BB × bb. Gametnya B dan b, jadi F1 semuanya Bb (bulat). F1 × F1: Bb × Bb menghasilkan BB, Bb, Bb, bb. Fenotipe F2: bulat 3 : kisut 1." },
      q: [
        ["Persilangan Tt × tt menghasilkan perbandingan fenotipe tinggi : pendek sebesar …", ["1 : 1", "3 : 1", "1 : 2 : 1", "semua tinggi"], 0, "Tt dan tt masing-masing 50%."],
        ["Bunga merah (MM) disilangkan dengan bunga putih (mm) secara intermediet. Warna F1 adalah …", ["merah muda", "merah", "putih", "ungu"], 0, "Kedua sifat sama kuat sehingga tercampur."],
        ["Individu bergenotipe AaBb menghasilkan macam gamet sebanyak …", ["4", "2", "8", "16"], 0, "2ⁿ dengan n = 2 pasang heterozigot."],
        ["Pada F2 persilangan dihibrid, peluang muncul fenotipe resesif ganda adalah …", ["1/16", "9/16", "3/16", "4/16"], 0, "Rasio 9 : 3 : 3 : 1."],
        ["Buta warna lebih banyak diderita laki-laki karena gennya terpaut kromosom …", ["X", "Y", "autosom", "nomor 21"], 0, "Laki-laki hanya punya satu kromosom X."],
        ["Ayah bergolongan darah AB dan ibu O. Kemungkinan golongan darah anaknya adalah …", ["A atau B", "AB atau O", "O saja", "AB saja"], 0, "IᴬIᴮ × ii menghasilkan Iᴬi (A) atau Iᴮi (B)."]
      ]
    },
    "listrik": {
      pts: [
        "<b>Dua hambatan paralel:</b> R total = (R₁ × R₂)/(R₁ + R₂). Contoh: 6 Ω dan 3 Ω paralel = 18/9 = 2 Ω.",
        "<b>Daya listrik:</b> P = V × I. Muatan listrik: Q = I × t.",
        "<b>Biaya listrik</b> = energi (kWh) × tarif per kWh."
      ],
      ex2: { q: "Rumah memakai 4 lampu 25 W yang menyala 10 jam per hari dan TV 100 W yang menyala 5 jam per hari. Tarifnya Rp1.500/kWh. Berapa biaya listrik selama 30 hari?", a: "Lampu: 4 × 25 × 10 = 1.000 Wh = 1 kWh per hari. TV: 100 × 5 = 500 Wh = 0,5 kWh per hari. Total 1,5 kWh per hari, jadi 30 hari = 45 kWh. Biaya = 45 × Rp1.500 = Rp67.500." },
      q: [
        ["Hambatan 6 Ω dan 3 Ω dirangkai paralel. Hambatan totalnya …", ["2 Ω", "9 Ω", "18 Ω", "0,5 Ω"], 0, "(6 × 3)/(6 + 3) = 2."],
        ["Lampu 220 V dialiri arus 0,5 A. Dayanya …", ["110 W", "440 W", "220 W", "0,5 W"], 0, "P = 220 × 0,5."],
        ["Benda bermuatan negatif karena …", ["kelebihan elektron", "kekurangan elektron", "kelebihan neutron", "kekurangan proton"], 0, "Elektron bermuatan negatif."],
        ["Alat untuk mengukur kuat arus listrik adalah …", ["amperemeter", "voltmeter", "ohmmeter", "barometer"], 0, "Amperemeter dipasang seri."],
        ["Arus 2 A mengalir selama 1 menit. Muatan listrik yang mengalir sebesar …", ["120 C", "2 C", "60 C", "30 C"], 0, "Q = 2 × 60 = 120 C."],
        ["Setrika 300 W dipakai 2 jam setiap hari selama 30 hari. Energi yang terpakai …", ["18 kWh", "600 kWh", "9 kWh", "180 kWh"], 0, "300 × 2 × 30 = 18.000 Wh = 18 kWh."]
      ]
    },
    "magnet": {
      pts: [
        "<b>Garis gaya magnet</b> keluar dari kutub utara dan masuk ke kutub selatan.",
        "<b>Transformator:</b> Vp/Vs = Np/Ns. Trafo step-up menaikkan tegangan (Ns > Np), trafo step-down menurunkan tegangan (Ns < Np).",
        "<b>Magnet bisa hilang sifatnya</b> jika dipanaskan, dipukul-pukul, atau dialiri arus bolak-balik."
      ],
      ex2: { q: "Trafo memiliki 1.000 lilitan primer dan 100 lilitan sekunder. Tegangan primernya 220 V. Tentukan tegangan sekunder dan jenis trafonya.", a: "Vs = Vp × Ns/Np = 220 × 100/1.000 = 22 V. Karena tegangan turun dari 220 V menjadi 22 V, trafo ini adalah trafo step-down." },
      q: [
        ["Trafo dengan Np = 200 dan Ns = 800 dihubungkan ke tegangan 50 V. Tegangan sekundernya …", ["200 V", "12,5 V", "800 V", "50 V"], 0, "50 × 800/200 = 200 V."],
        ["Ciri trafo step-up adalah …", ["lilitan sekunder lebih banyak dari primer", "tegangan sekunder lebih kecil", "lilitan primer lebih banyak", "tidak memiliki inti besi"], 0, "Ns > Np."],
        ["Saat membuat magnet dengan cara menggosok, arah gosokan harus …", ["searah", "bolak-balik", "melingkar", "acak"], 0, "Supaya magnet elementer searah."],
        ["Jarum kompas selalu menunjuk arah utara-selatan karena …", ["pengaruh medan magnet bumi", "tiupan angin", "gravitasi bulan", "arus laut"], 0, "Bumi berperilaku seperti magnet raksasa."],
        ["Di luar magnet, garis gaya magnet berarah dari …", ["kutub utara ke kutub selatan", "kutub selatan ke kutub utara", "tengah ke ujung", "ujung ke tengah"], 0, "U ke S."],
        ["Alat yang mengubah energi gerak menjadi energi listrik dengan prinsip induksi elektromagnetik adalah …", ["generator", "motor listrik", "bel listrik", "setrika"], 0, "Generator; motor listrik justru sebaliknya."]
      ]
    },
    "bioteknologi": {
      pts: [
        "<b>Fermentasi:</b> mikroorganisme mengubah zat makanan, misalnya gula menjadi alkohol atau asam laktat.",
        "<b>Tanaman transgenik:</b> tanaman yang disisipi gen dari organisme lain, contohnya jagung Bt yang tahan hama.",
        "<b>Kloning:</b> menghasilkan individu yang identik secara genetik dengan induknya, contohnya domba Dolly (1996)."
      ],
      ex2: { q: "Mengapa tempe yang terlalu lama disimpan berbau amonia?", a: "Jamur dan bakteri terus menguraikan protein kedelai. Penguraian protein yang berlanjut menghasilkan amonia, sehingga tempe berbau menyengat. Karena itu tempe sebaiknya dimasak sebelum terlalu matang." },
      q: [
        ["Mikroorganisme yang membuat adonan roti mengembang adalah …", ["Saccharomyces cerevisiae", "Rhizopus oryzae", "Lactobacillus casei", "Acetobacter xylinum"], 0, "Ragi menghasilkan gas CO₂."],
        ["Nata de coco dibuat dengan bantuan bakteri …", ["Acetobacter xylinum", "Lactobacillus bulgaricus", "Aspergillus oryzae", "Streptococcus thermophilus"], 0, "Acetobacter membentuk lapisan selulosa."],
        ["Domba hasil kloning pertama yang terkenal bernama …", ["Dolly", "Molly", "Polly", "Daisy"], 0, "Dolly, lahir 1996 di Skotlandia."],
        ["Jagung yang disisipi gen agar tahan hama termasuk …", ["tanaman transgenik", "kultur jaringan", "hidroponik", "fermentasi"], 0, "Rekayasa genetika."],
        ["Penguraian gula oleh mikroorganisme menjadi alkohol atau asam disebut …", ["fermentasi", "fotosintesis", "transpirasi", "respirasi aerob"], 0, "Fermentasi."],
        ["Oncom merah dibuat dengan bantuan jamur …", ["Neurospora sitophila", "Rhizopus oryzae", "Penicillium notatum", "Saccharomyces cerevisiae"], 0, "Neurospora berwarna jingga."]
      ]
    },
    "tanah": {
      pts: [
        "<b>Organisme tanah:</b> cacing tanah menggemburkan tanah dan membuat rongga udara, bakteri pengurai mengubah sisa makhluk hidup menjadi humus.",
        "<b>Tekstur tanah:</b> pasir (butir besar, mudah meloloskan air), debu, dan liat (butir halus, menahan air).",
        "<b>Tanah pertanian ideal</b> adalah tanah lempung berpasir yang gembur dan kaya humus."
      ],
      ex2: { q: "Tiga pot berisi pasir, tanah liat, dan humus disiram air dengan jumlah sama. Pot mana yang airnya paling cepat keluar dari lubang bawah? Mengapa?", a: "Pot berisi pasir. Butiran pasir besar sehingga ruang antarbutirnya lebar dan air mudah lolos. Tanah liat berbutir sangat halus sehingga menahan air paling lama. Humus berada di antaranya dan menyimpan air cukup baik untuk tanaman." },
      q: [
        ["Hewan yang membantu menggemburkan tanah adalah …", ["cacing tanah", "belalang", "kupu-kupu", "nyamuk"], 0, "Cacing membuat lubang dan rongga udara."],
        ["Jenis tanah yang paling mudah meloloskan air adalah …", ["pasir", "liat", "humus", "lempung"], 0, "Ruang antarbutirnya besar."],
        ["Humus terbentuk dari …", ["pelapukan sisa makhluk hidup", "letusan gunung api", "endapan laut dalam", "pelapukan batuan beku saja"], 0, "Bahan organik yang diuraikan."],
        ["Pelapukan batuan akibat perubahan suhu siang dan malam termasuk pelapukan …", ["fisika", "kimia", "biologi", "organik"], 0, "Batuan memuai dan menyusut lalu retak."],
        ["Menanam jenis tanaman berbeda secara bergiliran pada satu lahan disebut …", ["rotasi tanaman", "terasering", "reboisasi", "irigasi"], 0, "Menjaga kesuburan tanah."],
        ["Penyebab utama erosi di lereng yang gundul adalah …", ["tidak ada akar tumbuhan yang menahan tanah", "tanah terlalu subur", "terlalu banyak cacing", "pemberian pupuk organik"], 0, "Akar mengikat butiran tanah."]
      ]
    }
  },
  add: [
    {
      id: "koordinasi", t: "Sistem Koordinasi: Saraf, Hormon, dan Indra", s: 1,
      sum: "Tanganmu bisa langsung menjauh dari panci panas dalam sekejap karena ada sistem koordinasi. Sistem ini mengatur kerja semua organ supaya serasi.\nSistem koordinasi terdiri atas sistem saraf (cepat, lewat impuls listrik), sistem hormon (lebih lambat tetapi tahan lama, lewat darah), dan alat indra yang menerima rangsang dari lingkungan.",
      pts: [
        "<b>Neuron:</b> sel saraf yang terdiri atas badan sel, dendrit (menerima impuls), dan akson atau neurit (meneruskan impuls).",
        "<b>Saraf pusat:</b> otak dan sumsum tulang belakang. Otak besar untuk berpikir dan mengingat, otak kecil untuk keseimbangan, batang otak mengatur detak jantung dan napas.",
        "<b>Gerak refleks:</b> gerak cepat tanpa disadari karena impuls tidak melewati otak besar. Jalurnya: reseptor → saraf sensorik → sumsum tulang belakang → saraf motorik → efektor.",
        "<b>Hormon:</b> insulin (pankreas, menurunkan gula darah), tiroksin (kelenjar tiroid, mengatur metabolisme), adrenalin (anak ginjal, saat tegang atau takut), hormon pertumbuhan (hipofisis).",
        "<b>Alat indra:</b> mata (retina berisi sel batang untuk cahaya redup dan sel kerucut untuk warna), telinga (koklea untuk mendengar, saluran setengah lingkaran untuk keseimbangan), hidung, lidah, kulit.",
        "<b>Gangguan:</b> miopi atau rabun jauh (lensa cekung), hipermetropi atau rabun dekat (lensa cembung), diabetes melitus (kekurangan insulin)."
      ],
      ex: { q: "Saat kakimu menginjak paku, kakimu langsung terangkat sebelum kamu merasa sakit. Jelaskan jalur impulsnya.", a: "Ini gerak refleks. Rangsang tusukan diterima reseptor di kulit kaki, lalu diteruskan saraf sensorik ke sumsum tulang belakang. Dari sana impuls langsung dikirim lewat saraf motorik ke otot kaki (efektor), sehingga kaki terangkat. Otak besar baru menerima informasi rasa sakit sesudahnya." },
      tip: "Hafalkan pasangan bagian otak dan fungsinya: otak besar untuk berpikir, otak kecil untuk keseimbangan, batang otak untuk napas dan detak jantung. Soal ujian sering bertanya bagian otak mana yang terganggu jika seseorang sulit menjaga keseimbangan.",
      q: [
        ["Bagian neuron yang berfungsi menerima impuls adalah …", ["dendrit", "akson", "selubung mielin", "sinapsis"], 0, "Dendrit menerima, akson meneruskan."],
        ["Bagian otak yang mengatur keseimbangan tubuh adalah …", ["otak kecil", "otak besar", "sumsum lanjutan", "hipotalamus"], 0, "Otak kecil (serebelum)."],
        ["Contoh gerak refleks adalah …", ["mata berkedip saat terkena debu", "menulis surat", "menendang bola", "membaca buku"], 0, "Terjadi tanpa disadari."],
        ["Hormon yang menurunkan kadar gula darah adalah …", ["insulin", "adrenalin", "tiroksin", "estrogen"], 0, "Insulin dari pankreas."],
        ["Hormon adrenalin dihasilkan oleh kelenjar …", ["anak ginjal (adrenal)", "tiroid", "pankreas", "hipofisis"], 0, "Adrenal."],
        ["Penderita rabun jauh (miopi) dibantu dengan kacamata berlensa …", ["cekung (negatif)", "cembung (positif)", "silinder", "rangkap"], 0, "Lensa cekung menyebarkan cahaya."],
        ["Bagian telinga yang berfungsi menjaga keseimbangan adalah …", ["saluran setengah lingkaran", "daun telinga", "gendang telinga", "tulang martil"], 0, "Ada di telinga dalam."],
        ["Sel pada retina yang peka terhadap warna adalah sel …", ["kerucut", "batang", "saraf motorik", "darah merah"], 0, "Sel batang peka cahaya redup."],
        ["Urutan jalur gerak refleks yang benar adalah …", ["reseptor – saraf sensorik – sumsum tulang belakang – saraf motorik – efektor", "reseptor – otak besar – saraf motorik – efektor", "efektor – saraf motorik – otak – reseptor", "reseptor – saraf motorik – otak – saraf sensorik – efektor"], 0, "Tidak melewati otak besar."],
        ["Kekurangan hormon insulin menyebabkan penyakit …", ["diabetes melitus", "gondok", "kretinisme", "anemia"], 0, "Kadar gula darah tinggi."],
        ["Kelenjar yang disebut kelenjar induk (master of gland) adalah …", ["hipofisis", "tiroid", "pankreas", "adrenal"], 0, "Hipofisis mengatur kelenjar lain."]
      ]
    },
    {
      id: "teknologi-ramah", t: "Teknologi Ramah Lingkungan dan Energi Terbarukan", s: 2,
      sum: "Bahan bakar fosil seperti minyak bumi dan batu bara bisa habis dan menghasilkan gas rumah kaca saat dibakar. Karena itu manusia mengembangkan teknologi yang hemat sumber daya dan tidak merusak lingkungan.\nDi bab ini kamu mengenal sumber energi terbarukan, cara kerja sel surya dan biogas, serta prinsip mengurangi sampah. Semuanya berhubungan dengan pemanasan global yang sedang kita hadapi.",
      pts: [
        "<b>Energi tak terbarukan:</b> minyak bumi, gas alam, batu bara. Terbentuk selama jutaan tahun dan bisa habis.",
        "<b>Energi terbarukan:</b> matahari, angin, air, panas bumi (geotermal), biomassa, gelombang laut.",
        "<b>Sel surya:</b> mengubah energi cahaya matahari langsung menjadi energi listrik.",
        "<b>Biogas:</b> gas metana hasil penguraian kotoran ternak atau sampah organik tanpa oksigen (anaerob).",
        "<b>Efek rumah kaca:</b> gas CO₂, metana, dan CFC memerangkap panas di atmosfer sehingga suhu bumi naik (pemanasan global).",
        "<b>Prinsip 3R:</b> reduce (mengurangi), reuse (memakai ulang), recycle (mendaur ulang)."
      ],
      ex: { q: "Sebuah desa punya banyak peternakan sapi tetapi warganya sering kekurangan gas untuk memasak. Teknologi apa yang cocok dan apa keuntungannya?", a: "Biogas. Kotoran sapi dimasukkan ke tangki tertutup (digester), lalu bakteri menguraikannya tanpa oksigen sehingga menghasilkan gas metana untuk kompor. Keuntungannya: kotoran tidak mencemari lingkungan, warga hemat biaya, dan ampasnya bisa dipakai sebagai pupuk organik." },
      tip: "Perhatikan perubahan energinya: sel surya cahaya → listrik, PLTA energi potensial air → kinetik → listrik, kincir angin energi gerak → listrik. Soal sering meminta urutan perubahan energi ini.",
      q: [
        ["Contoh sumber energi terbarukan adalah …", ["cahaya matahari", "batu bara", "minyak bumi", "gas alam"], 0, "Tidak akan habis."],
        ["Panel surya mengubah energi …", ["cahaya menjadi listrik", "listrik menjadi cahaya", "kimia menjadi panas", "gerak menjadi bunyi"], 0, "Sel fotovoltaik."],
        ["Gas utama yang dihasilkan biogas adalah …", ["metana", "oksigen", "nitrogen", "helium"], 0, "CH₄."],
        ["Pembangkit listrik yang memanfaatkan uap panas dari dalam bumi adalah …", ["PLTP (panas bumi)", "PLTA", "PLTB (bayu)", "PLTD (diesel)"], 0, "Geotermal."],
        ["Gas buang kendaraan yang paling banyak menyebabkan efek rumah kaca adalah …", ["karbon dioksida", "oksigen", "nitrogen", "argon"], 0, "CO₂."],
        ["Mengolah botol plastik bekas menjadi bahan baku produk baru termasuk prinsip …", ["recycle", "reduce", "reuse", "replace"], 0, "Daur ulang."],
        ["Pembentukan biogas terjadi pada kondisi …", ["anaerob (tanpa oksigen)", "aerob (dengan oksigen)", "suhu sangat dingin", "di bawah sinar matahari langsung"], 0, "Bakteri anaerob."],
        ["Perubahan energi pada PLTA adalah …", ["energi potensial → energi kinetik → energi listrik", "energi listrik → energi kinetik", "energi kimia → energi listrik", "energi panas → energi cahaya"], 0, "Air jatuh memutar turbin."],
        ["Dampak pemanasan global adalah …", ["es di kutub mencair dan permukaan laut naik", "suhu bumi turun drastis", "hutan bertambah luas", "musim menjadi makin teratur"], 0, "Suhu naik."],
        ["Bahan bakar nabati dari minyak kelapa sawit disebut …", ["biodiesel", "bensin", "avtur", "LPG"], 0, "Bahan bakar nabati."],
        ["Mobil listrik dianggap lebih ramah lingkungan karena …", ["tidak mengeluarkan gas buang dari knalpot", "tidak memerlukan energi", "bobotnya lebih berat", "memakai bensin lebih sedikit"], 0, "Tidak ada pembakaran bahan bakar di mesinnya."]
      ]
    }
  ],
  order: ["reproduksi", "koordinasi", "pewarisan-sifat", "listrik", "magnet", "bioteknologi", "tanah", "teknologi-ramah"]
});

// ================= IPS =================
EXT(9, "ips", {
  more: {
    "proklamasi": {
      pts: [
        "<b>BPUPKI</b> (dibentuk 1 Maret 1945, diketuai dr. Radjiman Wedyodiningrat) merumuskan dasar negara. <b>PPKI</b> (diketuai Soekarno) mengesahkan UUD 1945.",
        "<b>Sidang PPKI 18 Agustus 1945:</b> mengesahkan UUD 1945, memilih Soekarno dan Hatta sebagai presiden dan wakil presiden, serta membentuk Komite Nasional untuk membantu presiden."
      ],
      ex2: { q: "Mengapa golongan tua dan golongan muda berbeda pendapat menjelang proklamasi?", a: "Golongan muda (Sukarni, Wikana, Chaerul Saleh) ingin proklamasi segera dilakukan tanpa campur tangan Jepang, karena Jepang sudah menyerah kepada Sekutu pada 15 Agustus 1945. Golongan tua (Soekarno, Hatta) ingin membahasnya lewat PPKI dulu agar tidak terjadi pertumpahan darah. Perbedaan ini memicu Peristiwa Rengasdengklok." },
      q: [
        ["Jepang menyerah kepada Sekutu setelah kota … dibom atom.", ["Hiroshima dan Nagasaki", "Tokyo dan Osaka", "Kyoto dan Kobe", "Okinawa dan Nagoya"], 0, "6 dan 9 Agustus 1945."],
        ["UUD 1945 disahkan oleh PPKI pada tanggal …", ["18 Agustus 1945", "17 Agustus 1945", "1 Juni 1945", "22 Juni 1945"], 0, "Sehari setelah proklamasi."],
        ["Ketua BPUPKI adalah …", ["dr. Radjiman Wedyodiningrat", "Soekarno", "Mohammad Hatta", "Ki Hajar Dewantara"], 0, "Radjiman."],
        ["Peristiwa Bandung Lautan Api terjadi karena …", ["rakyat membakar kota agar tidak dikuasai Sekutu", "Belanda mengebom Bandung", "gunung meletus", "kebakaran hutan"], 0, "Maret 1946."],
        ["Perjanjian Renville ditandatangani di atas kapal perang milik …", ["Amerika Serikat", "Belanda", "Inggris", "Australia"], 0, "USS Renville."],
        ["Bendera Merah Putih yang dikibarkan saat proklamasi dijahit oleh …", ["Fatmawati", "R.A. Kartini", "Cut Nyak Dhien", "Dewi Sartika"], 0, "Bendera Pusaka."]
      ]
    },
    "orde": {
      pts: [
        "<b>Supersemar</b> (Surat Perintah Sebelas Maret 1966) menjadi awal peralihan kekuasaan dari Soekarno ke Soeharto.",
        "<b>Presiden masa Reformasi:</b> B.J. Habibie, Abdurrahman Wahid (Gus Dur), Megawati Soekarnoputri, Susilo Bambang Yudhoyono, Joko Widodo, dan Prabowo Subianto (sejak 2024).",
        "<b>Peristiwa G30S tahun 1965</b> memicu krisis politik di akhir masa Orde Lama."
      ],
      ex2: { q: "Sebutkan tiga ciri pemerintahan Orde Baru beserta contohnya.", a: "Pertama, pembangunan ekonomi terencana lewat Repelita, contohnya swasembada beras tahun 1984. Kedua, stabilitas politik yang ketat, contohnya peserta pemilu dibatasi menjadi tiga (PPP, Golkar, PDI). Ketiga, kekuasaan terpusat dengan masa jabatan presiden yang sangat panjang (32 tahun), yang akhirnya menyuburkan praktik KKN." },
      q: [
        ["Supersemar dikeluarkan pada tahun …", ["1966", "1965", "1959", "1998"], 0, "11 Maret 1966."],
        ["Indonesia mencapai swasembada beras pada masa Orde Baru tahun …", ["1984", "1974", "1994", "1966"], 0, "1984."],
        ["Pada masa Orde Baru, jumlah peserta pemilu disederhanakan menjadi …", ["3", "5", "10", "48"], 0, "PPP, Golkar, PDI."],
        ["Presiden yang menggantikan Soeharto pada tahun 1998 adalah …", ["B.J. Habibie", "Abdurrahman Wahid", "Megawati Soekarnoputri", "Amien Rais"], 0, "Wakil presiden saat itu."],
        ["Presiden perempuan pertama Indonesia adalah …", ["Megawati Soekarnoputri", "Fatmawati", "Sri Mulyani", "Khofifah Indar Parawansa"], 0, "2001–2004."],
        ["Salah satu ciri masa Demokrasi Liberal (1950–1959) adalah …", ["kabinet sering berganti", "presiden menjabat 32 tahun", "hanya ada tiga partai", "tidak pernah ada pemilu"], 0, "Sistem parlementer yang tidak stabil."]
      ]
    },
    "perdagangan-internasional": {
      pts: [
        "<b>Devisa:</b> alat pembayaran luar negeri, misalnya dolar AS. Ekspor dan pariwisata menambah devisa.",
        "<b>Kurs</b> adalah nilai tukar mata uang. Jika rupiah melemah, harga barang impor menjadi lebih mahal.",
        "<b>Istilah lain:</b> dumping (menjual ke luar negeri lebih murah daripada di dalam negeri), embargo (larangan dagang dengan negara tertentu)."
      ],
      ex2: { q: "Sebuah negara mengekspor barang senilai 250 miliar dolar dan mengimpor senilai 230 miliar dolar dalam setahun. Bagaimana neraca perdagangannya?", a: "Selisihnya 250 − 230 = 20 miliar dolar. Karena ekspor lebih besar dari impor, neraca perdagangannya surplus 20 miliar dolar. Kondisi ini menambah cadangan devisa negara." },
      q: [
        ["Alat pembayaran yang berlaku dalam perdagangan internasional disebut …", ["devisa", "tarif", "kuota", "dumping"], 0, "Devisa."],
        ["Menjual barang di luar negeri dengan harga lebih murah daripada di dalam negeri disebut …", ["dumping", "embargo", "kuota", "proteksi"], 0, "Dumping."],
        ["Pembatasan jumlah barang yang boleh diimpor disebut …", ["kuota", "tarif", "subsidi", "devisa"], 0, "Kuota."],
        ["Larangan berdagang dengan negara tertentu disebut …", ["embargo", "dumping", "ekspor", "barter"], 0, "Embargo."],
        ["Jika kurs rupiah terhadap dolar melemah, maka …", ["harga barang impor naik", "harga barang impor turun", "barang ekspor menjadi lebih mahal bagi pembeli luar negeri", "devisa pasti berkurang"], 0, "Butuh rupiah lebih banyak untuk membeli satu dolar."],
        ["Sebuah negara mengekspor senilai 180 miliar dolar dan mengimpor senilai 195 miliar dolar. Neraca perdagangannya …", ["defisit 15 miliar dolar", "surplus 15 miliar dolar", "seimbang", "surplus 375 miliar dolar"], 0, "Impor lebih besar dari ekspor."]
      ]
    },
    "globalisasi": {
      pts: [
        "<b>Westernisasi:</b> meniru budaya Barat secara berlebihan tanpa menyaring. <b>Modernisasi:</b> perubahan ke arah yang lebih maju sesuai kebutuhan.",
        "<b>Bidang globalisasi:</b> ekonomi (perusahaan multinasional), sosial budaya (gaya hidup), politik (kerja sama antarnegara), teknologi (internet).",
        "<b>Akulturasi:</b> perpaduan dua budaya tanpa menghilangkan ciri budaya aslinya."
      ],
      ex2: { q: "Sebutkan satu contoh globalisasi di bidang ekonomi beserta dampak positif dan negatifnya.", a: "Contohnya masuknya waralaba makanan cepat saji dari luar negeri. Dampak positifnya: membuka lapangan kerja dan memberi pilihan produk. Dampak negatifnya: usaha makanan lokal bisa kalah bersaing dan sebagian keuntungan mengalir ke luar negeri." },
      q: [
        ["Meniru gaya hidup Barat secara berlebihan disebut …", ["westernisasi", "modernisasi", "akulturasi", "asimilasi"], 0, "Westernisasi."],
        ["Perusahaan yang beroperasi di banyak negara disebut perusahaan …", ["multinasional", "koperasi", "BUMDes", "perseorangan"], 0, "Multinasional."],
        ["Contoh globalisasi di bidang teknologi adalah …", ["belajar daring bersama guru dari negara lain", "membajak sawah dengan kerbau", "berkirim kabar lewat merpati", "berbelanja di pasar desa"], 0, "Internet."],
        ["Perpaduan dua budaya tanpa menghilangkan ciri budaya aslinya disebut …", ["akulturasi", "asimilasi", "westernisasi", "sekularisasi"], 0, "Contohnya bangunan Masjid Menara Kudus."],
        ["Contoh sikap selektif terhadap budaya asing adalah …", ["memakai teknologi dari luar untuk belajar sambil tetap menjaga sopan santun", "meniru semua gaya berpakaian artis luar negeri", "menolak semua produk impor", "meninggalkan bahasa daerah"], 0, "Ambil yang baik, saring yang buruk."]
      ]
    },
    "asean": {
      pts: [
        "<b>Prinsip ASEAN:</b> tidak campur tangan urusan dalam negeri anggota dan menyelesaikan masalah secara damai.",
        "<b>Tiga pilar Komunitas ASEAN:</b> politik-keamanan, ekonomi (MEA), dan sosial budaya.",
        "<b>Ibu kota negara ASEAN:</b> Kuala Lumpur, Manila, Bangkok, Hanoi, Vientiane (Laos), Naypyidaw (Myanmar), Phnom Penh (Kamboja), Bandar Seri Begawan (Brunei), Dili (Timor-Leste)."
      ],
      ex2: { q: "Mengapa negara-negara Asia Tenggara perlu bekerja sama dalam ASEAN?", a: "Letaknya berdekatan, sehingga masalah satu negara mudah berdampak ke tetangganya, misalnya asap kebakaran hutan atau penyelundupan. Dengan bekerja sama, negara-negara ini bisa memperluas perdagangan, menjaga keamanan kawasan, dan saling membantu saat bencana." },
      q: [
        ["Ibu kota Vietnam adalah …", ["Hanoi", "Ho Chi Minh", "Vientiane", "Phnom Penh"], 0, "Hanoi."],
        ["Negara ASEAN yang tidak pernah dijajah bangsa Barat adalah …", ["Thailand", "Malaysia", "Filipina", "Myanmar"], 0, "Thailand."],
        ["Mata uang Filipina adalah …", ["peso", "ringgit", "baht", "dong"], 0, "Peso."],
        ["Negara yang paling akhir bergabung dengan ASEAN adalah …", ["Timor-Leste", "Kamboja", "Brunei Darussalam", "Laos"], 0, "Anggota ke-11 tahun 2025."],
        ["Benua terkecil di dunia adalah …", ["Australia", "Eropa", "Antarktika", "Afrika"], 0, "Australia."],
        ["Masyarakat Ekonomi ASEAN (MEA) termasuk pilar Komunitas ASEAN bidang …", ["ekonomi", "politik-keamanan", "sosial budaya", "pertahanan militer"], 0, "MEA."]
      ]
    }
  },
  add: [
    {
      id: "kondisi-benua", t: "Kondisi Alam dan Penduduk Benua di Dunia", s: 1,
      sum: "Setiap benua punya kondisi alam yang berbeda. Ada yang sebagian besar gurun, ada yang tertutup es, dan ada yang dilalui garis khatulistiwa sehingga beriklim tropis.\nPerbedaan kondisi alam ini memengaruhi jumlah penduduk, mata pencaharian, dan hasil bumi tiap negara. Dari situlah muncul kebutuhan untuk saling berinteraksi dan bekerja sama.",
      pts: [
        "<b>Asia:</b> benua terluas dan berpenduduk terbanyak. Ada gunung tertinggi (Everest, sekitar 8.849 m) dan daratan terendah (Laut Mati).",
        "<b>Afrika:</b> dilalui khatulistiwa, memiliki Gurun Sahara (gurun panas terluas) dan Sungai Nil (salah satu sungai terpanjang di dunia).",
        "<b>Amerika:</b> terbagi menjadi Amerika Utara, Tengah, dan Selatan. Ada Pegunungan Rocky, Pegunungan Andes, dan Sungai Amazon.",
        "<b>Eropa:</b> sebagian besar beriklim sedang dengan empat musim, industrinya maju.",
        "<b>Australia:</b> benua terkecil, sebagian besar wilayahnya gurun, penduduknya terpusat di pesisir timur dan tenggara.",
        "<b>Antarktika:</b> tertutup es, tidak punya penduduk tetap, hanya ada stasiun penelitian."
      ],
      ex: { q: "Mengapa sebagian besar penduduk Australia tinggal di pesisir timur dan tenggara?", a: "Bagian tengah Australia berupa gurun yang kering dan panas, sehingga sulit untuk pertanian dan permukiman. Pesisir timur dan tenggara punya curah hujan cukup, iklim lebih sejuk, dan pelabuhan, sehingga kota besar seperti Sydney dan Melbourne tumbuh di sana." },
      tip: "Ingat satu ciri khas tiap benua: Asia terluas, Australia terkecil, Afrika punya Sahara, Amerika Selatan punya Amazon, Antarktika tertutup es.",
      q: [
        ["Gunung Everest terletak di benua …", ["Asia", "Eropa", "Afrika", "Amerika"], 0, "Di Pegunungan Himalaya."],
        ["Gurun panas terluas di dunia adalah Gurun …", ["Sahara", "Gobi", "Kalahari", "Atacama"], 0, "Sahara di Afrika utara."],
        ["Sungai Amazon terletak di benua …", ["Amerika Selatan", "Afrika", "Asia", "Australia"], 0, "Melintasi Brasil."],
        ["Benua yang tidak memiliki penduduk tetap adalah …", ["Antarktika", "Australia", "Eropa", "Afrika"], 0, "Hanya peneliti yang tinggal sementara."],
        ["Negara dengan jumlah penduduk terbanyak di dunia saat ini adalah …", ["India", "Tiongkok", "Amerika Serikat", "Indonesia"], 0, "India melampaui Tiongkok sejak 2023."],
        ["Wilayah yang dilalui garis khatulistiwa umumnya beriklim …", ["tropis", "kutub", "sedang", "gurun dingin"], 0, "Panas dan lembap."],
        ["Benua yang dijuluki Benua Hitam adalah …", ["Afrika", "Asia", "Australia", "Amerika"], 0, "Afrika."],
        ["Pegunungan Andes terdapat di benua …", ["Amerika Selatan", "Eropa", "Asia", "Afrika"], 0, "Membentang di sisi barat Amerika Selatan."],
        ["Hewan khas Australia adalah …", ["kanguru", "panda", "unta", "jerapah"], 0, "Hewan berkantung."],
        ["Perbedaan sumber daya alam antarnegara mendorong terjadinya …", ["interaksi dan kerja sama antarnegara", "isolasi negara", "penurunan jumlah penduduk", "berhentinya perdagangan"], 0, "Negara saling membutuhkan."]
      ]
    },
    {
      id: "perubahan-sosial", t: "Perubahan Sosial Budaya", s: 1,
      sum: "Masyarakat selalu berubah. Dulu orang berkirim kabar lewat surat, sekarang cukup lewat pesan singkat di ponsel. Perubahan cara hidup, nilai, dan kebiasaan seperti ini disebut perubahan sosial budaya.\nPerubahan bisa terjadi cepat atau lambat, kecil atau besar, direncanakan atau tidak. Kamu perlu mengenali penyebabnya dan menyikapinya dengan bijak supaya tidak kehilangan jati diri.",
      pts: [
        "<b>Evolusi:</b> perubahan lambat dan bertahap. <b>Revolusi:</b> perubahan cepat dan mendasar, misalnya Revolusi Industri.",
        "<b>Direncanakan:</b> sengaja dibuat, seperti program KB. <b>Tidak direncanakan:</b> akibat bencana atau perang.",
        "<b>Faktor internal:</b> pertambahan penduduk, penemuan baru, konflik dalam masyarakat.",
        "<b>Faktor eksternal:</b> pengaruh budaya lain, bencana alam, perang.",
        "<b>Pendorong:</b> pendidikan maju, sikap terbuka, toleransi. <b>Penghambat:</b> sikap tradisional yang berlebihan, takut terjadi kegoyahan, kurang berhubungan dengan masyarakat lain.",
        "<b>Dampak negatif:</b> kenakalan remaja, lunturnya gotong royong, kesenjangan sosial."
      ],
      ex: { q: "Sebuah desa mulai memakai traktor untuk membajak sawah. Apa dampak positif dan negatifnya?", a: "Dampak positifnya: pekerjaan lebih cepat, petani hemat tenaga, dan hasil panen bisa meningkat. Dampak negatifnya: buruh tani yang biasa membajak dengan kerbau kehilangan pekerjaan, dan tradisi gotong royong mengolah sawah bisa berkurang." },
      tip: "Lambat berarti evolusi, cepat berarti revolusi. Kalau soal menanyakan faktor internal, cari penyebab yang berasal dari dalam masyarakat itu sendiri.",
      q: [
        ["Perubahan sosial yang terjadi secara cepat dan mendasar disebut …", ["revolusi", "evolusi", "regresi", "stagnasi"], 0, "Revolusi."],
        ["Program Keluarga Berencana (KB) termasuk perubahan …", ["yang direncanakan", "yang tidak direncanakan", "revolusi", "regresi"], 0, "Sengaja dirancang pemerintah."],
        ["Contoh faktor internal penyebab perubahan sosial adalah …", ["penemuan baru di masyarakat", "pengaruh budaya asing", "perang dengan negara lain", "bencana tsunami"], 0, "Berasal dari dalam masyarakat."],
        ["Sikap yang mendorong perubahan sosial adalah …", ["terbuka terhadap hal baru", "takut pada hal baru", "fanatik berlebihan pada tradisi", "menutup diri dari masyarakat lain"], 0, "Keterbukaan."],
        ["Peralihan dari surat pos ke pesan singkat di ponsel adalah perubahan di bidang …", ["teknologi komunikasi", "pertanian", "agama", "politik"], 0, "Komunikasi."],
        ["Revolusi Industri pertama kali terjadi di …", ["Inggris", "Prancis", "Amerika Serikat", "Jepang"], 0, "Abad ke-18, ditandai mesin uap."],
        ["Dampak negatif perubahan sosial bagi remaja adalah …", ["meningkatnya kenakalan remaja", "informasi lebih cepat", "kesempatan belajar lebih luas", "layanan kesehatan membaik"], 0, "Dampak negatif."],
        ["Masyarakat yang sulit menerima perubahan karena sangat memegang tradisi disebut masyarakat …", ["tradisional", "modern", "terbuka", "industri"], 0, "Cenderung konservatif."],
        ["Penyebaran unsur budaya dari satu masyarakat ke masyarakat lain disebut …", ["difusi", "inovasi", "akomodasi", "stratifikasi"], 0, "Difusi."],
        ["Bencana alam yang memaksa penduduk pindah ke daerah lain termasuk penyebab perubahan dari faktor …", ["eksternal", "internal", "pendidikan", "penemuan baru"], 0, "Lingkungan alam di luar masyarakat."]
      ]
    },
    {
      id: "kerja-sama-internasional", t: "Kerja Sama Internasional dan Peran Indonesia", s: 2,
      sum: "Indonesia tidak berdiri sendiri di dunia. Sejak merdeka, Indonesia aktif menjalin hubungan dengan negara lain berdasarkan politik luar negeri bebas aktif.\nBebas berarti tidak memihak blok kekuatan mana pun, aktif berarti ikut berperan menjaga perdamaian dunia. Peran itu terlihat dari Konferensi Asia Afrika, Gerakan Non-Blok, dan pengiriman Pasukan Garuda.",
      pts: [
        "<b>Politik luar negeri bebas aktif</b> dicetuskan Mohammad Hatta lewat pidato “Mendayung di Antara Dua Karang” (1948).",
        "<b>Konferensi Asia Afrika (KAA)</b> pada 18–24 April 1955 di Bandung menghasilkan Dasasila Bandung.",
        "<b>Gerakan Non-Blok (GNB)</b> mengadakan KTT pertama tahun 1961 di Beograd. Tokoh pendirinya antara lain Soekarno, Nehru, Tito, Nasser, dan Nkrumah.",
        "<b>PBB</b> berdiri 24 Oktober 1945. Indonesia menjadi anggota ke-60 pada 28 September 1950.",
        "<b>Pasukan Garuda</b> adalah pasukan perdamaian Indonesia di bawah PBB, pertama kali dikirim ke Mesir tahun 1957.",
        "<b>Bentuk kerja sama:</b> bilateral (dua negara), regional (satu kawasan, seperti ASEAN), multilateral (banyak negara, seperti PBB)."
      ],
      ex: { q: "Mengapa Indonesia memilih politik luar negeri bebas aktif saat Perang Dingin?", a: "Saat itu dunia terbelah menjadi Blok Barat (Amerika Serikat) dan Blok Timur (Uni Soviet). Jika memihak salah satu, Indonesia bisa terseret konflik dan kehilangan kemandiriannya. Dengan bebas aktif, Indonesia tetap bisa bekerja sama dengan semua negara sambil mengupayakan perdamaian, misalnya lewat KAA dan GNB." },
      tip: "Hafalkan pasangan tahun dan tempat: KAA 1955 di Bandung, GNB 1961 di Beograd, ASEAN 1967 di Bangkok, Indonesia masuk PBB 1950.",
      q: [
        ["Konferensi Asia Afrika diselenggarakan di kota …", ["Bandung", "Jakarta", "Bogor", "Yogyakarta"], 0, "Gedung Merdeka, Bandung."],
        ["Hasil Konferensi Asia Afrika disebut …", ["Dasasila Bandung", "Deklarasi Bangkok", "Piagam PBB", "Dekrit Presiden"], 0, "Sepuluh prinsip."],
        ["Politik luar negeri Indonesia adalah …", ["bebas aktif", "memihak Blok Barat", "memihak Blok Timur", "menutup diri"], 0, "Bebas aktif."],
        ["Pidato “Mendayung di Antara Dua Karang” disampaikan oleh …", ["Mohammad Hatta", "Soekarno", "Sutan Sjahrir", "Adam Malik"], 0, "Tahun 1948."],
        ["Pasukan perdamaian Indonesia di bawah PBB disebut …", ["Pasukan Garuda", "Divisi Siliwangi", "Kopassus", "Brimob"], 0, "Kontingen Garuda."],
        ["Kerja sama yang hanya melibatkan Indonesia dan Jepang termasuk kerja sama …", ["bilateral", "regional", "multilateral", "global"], 0, "Dua negara."],
        ["KTT pertama Gerakan Non-Blok diadakan di kota …", ["Beograd", "Bandung", "Kairo", "New Delhi"], 0, "Yugoslavia, 1961."],
        ["Indonesia menjadi anggota PBB pada tahun …", ["1950", "1945", "1955", "1967"], 0, "Anggota ke-60."],
        ["Organisasi Kerja Sama Islam (OKI) beranggotakan banyak negara dari berbagai benua, sehingga termasuk kerja sama …", ["multilateral", "bilateral", "nasional", "daerah"], 0, "Banyak negara."],
        ["Indonesia sempat keluar dari PBB pada tahun 1965 karena …", ["Malaysia diterima menjadi anggota tidak tetap Dewan Keamanan PBB", "Indonesia kalah perang", "PBB pindah ke Asia", "Indonesia bergabung dengan Blok Barat"], 0, "Saat konfrontasi dengan Malaysia. Indonesia kembali tahun 1966."]
      ]
    }
  ],
  order: ["kondisi-benua", "perubahan-sosial", "proklamasi", "orde", "asean", "kerja-sama-internasional", "perdagangan-internasional", "globalisasi"]
});

// ================= BAHASA INDONESIA =================
EXT(9, "indo", {
  more: {
    "laporan-percobaan": {
      pts: [
        "<b>Variabel percobaan:</b> variabel bebas (sengaja diubah), variabel terikat (yang diamati), variabel kontrol (dibuat sama).",
        "<b>Kalimat simpulan yang baik</b> berdasarkan data, misalnya “Air garam membeku lebih lambat daripada air tawar.”"
      ],
      ex2: { q: "Tujuan percobaan: mengetahui pengaruh cahaya terhadap pertumbuhan kecambah. Tentukan variabel bebas, terikat, dan kontrolnya.", a: "Variabel bebas adalah yang sengaja dibedakan, yaitu ada atau tidaknya cahaya. Variabel terikat adalah yang diamati, yaitu tinggi kecambah. Variabel kontrol dibuat sama, misalnya jenis biji, jumlah air, dan jenis tanah." },
      q: [
        ["Bagian laporan percobaan yang berisi daftar benda yang dipakai disebut …", ["alat dan bahan", "tujuan", "hasil", "simpulan"], 0, "Alat dan bahan."],
        ["Kalimat berikut yang merupakan kalimat pasif adalah …", ["Larutan diaduk selama dua menit.", "Saya mengaduk larutan.", "Aduklah larutan itu!", "Larutan itu sangat bagus."], 0, "Predikat berawalan di-."],
        ["Dalam percobaan pengaruh jumlah air terhadap tinggi tanaman, tinggi tanaman merupakan variabel …", ["terikat", "bebas", "kontrol", "acak"], 0, "Yang diamati hasilnya."],
        ["Kata teknis yang tepat dalam laporan percobaan IPA adalah …", ["indikator", "kayaknya", "banget", "kira-kira"], 0, "Istilah ilmiah."],
        ["Kalimat simpulan yang objektif adalah …", ["Air garam membeku lebih lambat daripada air tawar.", "Menurut saya percobaannya seru.", "Percobaan ini sangat membosankan.", "Saya kurang suka air garam."], 0, "Berdasarkan data."]
      ]
    },
    "pidato": {
      pts: [
        "<b>Kerangka pidato</b> dipakai pada metode ekstemporan: pembukaan, isi berupa 2–3 poin utama, dan penutup.",
        "<b>Kalimat persuasif yang kuat</b> menggabungkan fakta dengan ajakan, misalnya “Sampah plastik butuh ratusan tahun untuk terurai. Mari kita bawa botol minum sendiri.”"
      ],
      ex2: { q: "Ubahlah kalimat berikut menjadi kalimat persuasif: “Banyak siswa membuang sampah di laci meja.”", a: "Tambahkan sapaan, alasan, dan ajakan: “Teman-teman, sampah di laci meja bisa mengundang semut dan menimbulkan bau tidak sedap. Mari kita biasakan membuang sampah di tempatnya agar kelas tetap bersih dan nyaman.” Kalimat ini memuat alasan dan kata ajakan “mari”." },
      q: [
        ["Pidato yang disampaikan secara spontan tanpa persiapan disebut metode …", ["impromptu", "memoriter", "naskah", "ekstemporan"], 0, "Impromptu."],
        ["Kalimat penutup pidato yang tepat adalah …", ["Demikian pidato saya, mohon maaf atas segala kekurangan.", "Pertama-tama marilah kita panjatkan puji syukur.", "Yang saya hormati Bapak Kepala Sekolah.", "Pada kesempatan ini saya akan membahas kebersihan."], 0, "Penutup."],
        ["Kata sapaan dalam pidato bertujuan untuk …", ["menghormati pendengar", "mengakhiri pidato", "menyampaikan data", "memperpanjang waktu"], 0, "Sopan santun."],
        ["Kalimat persuasif yang paling meyakinkan adalah …", ["Sampah plastik sulit terurai, mari kita kurangi penggunaannya.", "Mari buang sampah.", "Sampah itu jelek.", "Saya tidak suka sampah."], 0, "Ada alasan dan ajakan."],
        ["Pidato yang disampaikan dengan membaca teks seluruhnya disebut metode …", ["naskah", "impromptu", "memoriter", "ekstemporan"], 0, "Membaca naskah."]
      ]
    },
    "cerpen": {
      pts: [
        "<b>Alur:</b> maju (kronologis), mundur (kilas balik), atau campuran.",
        "<b>Sudut pandang:</b> orang pertama (aku), orang ketiga (ia atau nama tokoh).",
        "<b>Majas</b> yang sering dipakai: personifikasi (benda bertingkah seperti manusia), hiperbola (melebih-lebihkan), metafora (perbandingan langsung)."
      ],
      ex2: { q: "Bacalah kutipan: “Rani menunduk. Tangannya meremas ujung seragam. Ia tak berani menatap mata Bu Guru.” Bagaimana perasaan tokoh Rani dan teknik penokohan apa yang dipakai?", a: "Rani digambarkan takut atau merasa bersalah. Pengarang tidak menyebutkannya secara langsung, tetapi lewat tindakan: menunduk, meremas seragam, dan tidak berani menatap. Jadi teknik penokohannya tidak langsung (dramatik)." },
      q: [
        ["Alur yang menceritakan kejadian masa lalu di tengah cerita disebut alur …", ["mundur (kilas balik)", "maju", "lurus", "tunggal"], 0, "Flashback."],
        ["Cerpen yang memakai kata “aku” untuk tokoh utama menggunakan sudut pandang …", ["orang pertama", "orang ketiga", "orang kedua", "pengamat serba tahu"], 0, "Aku = orang pertama."],
        ["“Angin malam berbisik di telingaku.” Kalimat ini mengandung majas …", ["personifikasi", "hiperbola", "metafora", "litotes"], 0, "Angin seolah bisa berbisik."],
        ["Bagian cerpen tempat masalah mulai muncul hingga memuncak adalah …", ["komplikasi", "orientasi", "resolusi", "koda"], 0, "Komplikasi."],
        ["Pesan moral yang ingin disampaikan pengarang disebut …", ["amanat", "tema", "latar", "alur"], 0, "Amanat."]
      ]
    },
    "tanggapan": {
      pts: [
        "<b>Fakta dan opini:</b> fakta bisa dibuktikan (“Film ini berdurasi 120 menit”), opini berupa penilaian (“Film ini membosankan”).",
        "<b>Pola tanggapan seimbang:</b> sampaikan kelebihan, lalu kekurangan, lalu saran."
      ],
      ex2: { q: "Tulislah tanggapan santun tentang kantin sekolah yang makanannya enak tetapi tempatnya kotor.", a: "Contoh: “Kantin sekolah kita menyediakan makanan yang enak dengan harga terjangkau. Namun, mejanya sering kotor dan banyak lalat. Sebaiknya disediakan tempat sampah tertutup di setiap sudut dan dibuat jadwal piket kebersihan.” Tanggapan ini memuat kelebihan, kekurangan dengan konjungsi “namun”, dan saran." },
      q: [
        ["Kalimat yang merupakan fakta adalah …", ["Novel itu terdiri atas 250 halaman.", "Novel itu sangat menyentuh hati.", "Ceritanya kurang menarik.", "Sampulnya jelek sekali."], 0, "Bisa dibuktikan."],
        ["Kalimat tanggapan yang santun adalah …", ["Alurnya cukup menarik, tetapi akhir ceritanya bisa dibuat lebih jelas.", "Ceritanya payah dan tidak berguna.", "Penulisnya tidak bisa menulis.", "Buku ini sampah."], 0, "Ada pujian dan saran."],
        ["Kata evaluatif dalam kalimat “Penjelasan guru itu sangat jelas” adalah …", ["sangat jelas", "penjelasan", "guru", "itu"], 0, "Kata penilaian."],
        ["Urutan pola tanggapan yang seimbang adalah …", ["kelebihan – kekurangan – saran", "kekurangan – ejekan – penutup", "saran – kelebihan – salam", "ejekan – kelebihan – penutup"], 0, "Seimbang dan membangun."],
        ["Bagian akhir teks tanggapan yang berisi kesimpulan penilaian disebut …", ["penilaian/simpulan", "konteks", "deskripsi", "orientasi"], 0, "Simpulan."]
      ]
    },
    "diskusi": {
      pts: [
        "<b>Kata kerja mental</b> menunjukkan pendapat: menganggap, berpendapat, meyakini, menduga.",
        "<b>Rekomendasi</b> pada simpulan sering berupa jalan tengah, misalnya ponsel boleh dibawa tetapi disimpan selama pelajaran."
      ],
      ex2: { q: "Isu: “Perlukah pekerjaan rumah (PR) dihapus?” Tuliskan satu argumen pendukung, satu argumen penentang, dan simpulannya.", a: "Argumen pendukung: PR yang terlalu banyak membuat siswa kurang istirahat dan waktu bersama keluarga berkurang. Argumen penentang: PR membantu siswa mengulang pelajaran dan melatih tanggung jawab. Simpulan jalan tengah: PR tetap ada, tetapi jumlahnya dibatasi." },
      q: [
        ["Kata kerja mental yang sering dipakai dalam teks diskusi adalah …", ["berpendapat", "berlari", "menulis", "memasak"], 0, "Menunjukkan pikiran."],
        ["Bagian teks diskusi yang berisi saran penyelesaian disebut …", ["simpulan atau rekomendasi", "isu", "argumen pendukung", "orientasi"], 0, "Bagian penutup."],
        ["“Ponsel membantu siswa mencari informasi pelajaran dengan cepat.” Kalimat ini termasuk argumen …", ["pendukung penggunaan ponsel", "penentang penggunaan ponsel", "simpulan", "isu"], 0, "Menyebut manfaat."],
        ["“Di sisi lain, ponsel dapat mengganggu konsentrasi belajar.” Frasa “di sisi lain” menandai …", ["peralihan ke argumen yang berlawanan", "urutan waktu", "hubungan sebab-akibat", "pemberian contoh"], 0, "Pertentangan."],
        ["Teks diskusi yang baik harus …", ["menyajikan dua sisi secara seimbang", "hanya memuat pendapat penulis", "berisi langkah-langkah", "menceritakan pengalaman pribadi"], 0, "Pro dan kontra."]
      ]
    },
    "biografi": {
      pts: [
        "<b>Peristiwa penting</b> disusun kronologis: kelahiran, pendidikan, perjuangan, hingga prestasi.",
        "<b>Nilai teladan</b> yang sering diangkat: kerja keras, kejujuran, pantang menyerah, dan cinta tanah air."
      ],
      ex2: { q: "Kutipan: “Sejak kecil Habibie gemar membaca. Ia kuliah di Jerman dan menemukan teori perambatan retak pada pesawat.” Nilai teladan apa yang bisa kamu ambil?", a: "Nilai teladannya adalah tekun belajar dan semangat mengejar ilmu. Habibie gemar membaca sejak kecil dan berani menuntut ilmu jauh di Jerman, sampai berhasil menemukan teori yang berguna bagi dunia penerbangan." },
      q: [
        ["Peristiwa dalam biografi umumnya disusun secara …", ["kronologis", "acak", "dari akhir ke awal", "berdasarkan abjad"], 0, "Urutan waktu."],
        ["Kalimat yang termasuk bagian orientasi biografi adalah …", ["Ki Hajar Dewantara lahir di Yogyakarta pada 2 Mei 1889.", "Beliau wafat dengan meninggalkan banyak karya.", "Karena itu beliau patut kita teladani.", "Ia kemudian mendirikan Taman Siswa."], 0, "Pengenalan tokoh."],
        ["Tokoh yang dikenal sebagai Bapak Pendidikan Nasional adalah …", ["Ki Hajar Dewantara", "B.J. Habibie", "Soekarno", "R.A. Kartini"], 0, "Hari lahirnya diperingati sebagai Hardiknas."],
        ["Konjungsi temporal yang sering dipakai dalam biografi adalah …", ["kemudian", "tetapi", "karena", "jika"], 0, "Urutan waktu."],
        ["Perbedaan biografi dan cerpen adalah …", ["biografi berdasarkan fakta, cerpen berupa fiksi", "biografi selalu lucu", "cerpen selalu tentang tokoh nyata", "biografi tidak memiliki tokoh"], 0, "Nonfiksi dan fiksi."]
      ]
    }
  },
  add: [
    {
      id: "membaca-kritis", t: "Membaca Kritis: Ide Pokok, Simpulan, Fakta dan Opini", s: 1,
      sum: "Soal Bahasa Indonesia di ujian akhir kebanyakan berupa bacaan. Kamu diminta menentukan ide pokok, menyimpulkan isi, atau membedakan fakta dan opini. Kemampuan ini disebut membaca kritis.\nMembaca kritis berarti tidak sekadar membaca kata demi kata, tetapi juga memahami maksud penulis dan menilai isinya. Latihan rutin membuat kamu lebih cepat menemukan jawaban tanpa harus membaca ulang berkali-kali.",
      pts: [
        "<b>Ide pokok:</b> gagasan utama paragraf yang terdapat di kalimat utama. Letaknya bisa di awal (deduktif), akhir (induktif), atau awal dan akhir (campuran).",
        "<b>Kalimat penjelas:</b> kalimat yang mendukung kalimat utama dengan contoh, data, atau rincian.",
        "<b>Simpulan:</b> pernyataan ringkas yang mencakup seluruh isi bacaan, tanpa menambah informasi baru.",
        "<b>Fakta:</b> bisa dibuktikan, sering memuat angka, tempat, atau waktu. <b>Opini:</b> pendapat pribadi, ditandai kata seperti menurut saya, sebaiknya, mungkin, sangat.",
        "<b>Tujuan penulis:</b> menginformasikan, membujuk, menghibur, atau menjelaskan proses.",
        "<b>Makna kata dari konteks:</b> tebak arti kata sulit dari kalimat di sekitarnya."
      ],
      ex: { q: "Paragraf: “Sampah plastik menjadi masalah besar di kota kita. Setiap hari ratusan kilogram plastik dibuang ke sungai. Akibatnya, sungai tersumbat dan banjir sering terjadi saat hujan deras.” Tentukan ide pokok dan letak kalimat utamanya.", a: "Kalimat pertama merangkum isi paragraf, sedangkan kalimat berikutnya menjelaskan buktinya (plastik dibuang ke sungai) dan akibatnya (banjir). Jadi ide pokoknya “sampah plastik menjadi masalah besar di kota”, dan kalimat utamanya terletak di awal paragraf (deduktif)." },
      tip: "Untuk mencari ide pokok, tanyakan pada dirimu: kalimat mana yang dijelaskan oleh kalimat-kalimat lain? Itulah kalimat utama. Untuk simpulan, pilih jawaban yang paling umum dan mencakup semua isi, bukan hanya satu detail.",
      q: [
        ["Paragraf yang kalimat utamanya terletak di awal disebut paragraf …", ["deduktif", "induktif", "campuran", "naratif"], 0, "Umum ke khusus."],
        ["Kalimat berikut yang merupakan opini adalah …", ["Sebaiknya siswa membawa bekal dari rumah.", "Kantin sekolah buka pukul 07.00.", "Harga nasi goreng di kantin Rp10.000.", "Sekolah kami memiliki 24 kelas."], 0, "Kata “sebaiknya” menandai saran pribadi."],
        ["Kalimat yang berisi contoh atau rincian untuk mendukung gagasan utama disebut kalimat …", ["penjelas", "utama", "simpulan", "topik"], 0, "Kalimat penjelas."],
        ["“Rina rajin membaca setiap hari. Ia juga selalu mengerjakan tugas tepat waktu. Tidak heran Rina menjadi juara kelas.” Letak kalimat utamanya di …", ["akhir paragraf", "awal paragraf", "tengah paragraf", "awal dan akhir"], 0, "Paragraf induktif."],
        ["Ciri kalimat fakta adalah …", ["dapat dibuktikan kebenarannya", "berisi penilaian pribadi", "memakai kata “menurut saya”", "bersifat perkiraan"], 0, "Fakta bisa dicek."],
        ["Bacaan yang bertujuan mengajak pembaca melakukan sesuatu bersifat …", ["persuasif", "informatif", "naratif", "deskriptif"], 0, "Membujuk."],
        ["“Para petani merugi karena wereng merusak padi di sawah.” Berdasarkan konteks, kata “wereng” berarti …", ["serangga perusak tanaman padi", "jenis pupuk", "alat pertanian", "cuaca buruk"], 0, "Sesuatu yang merusak padi."],
        ["Simpulan yang baik adalah simpulan yang …", ["mencakup seluruh isi bacaan", "hanya mengambil satu detail", "menambah informasi baru", "memuat pendapat lain di luar bacaan"], 0, "Menyeluruh."],
        ["Paragraf yang kalimat utamanya di awal lalu ditegaskan lagi di akhir disebut paragraf …", ["campuran", "induktif", "deduktif", "deskriptif"], 0, "Deduktif-induktif."],
        ["Kata yang menandai opini adalah …", ["mungkin", "pada tahun 2020", "sebanyak 30 orang", "di Jakarta"], 0, "Menyatakan dugaan."]
      ]
    },
    {
      id: "ejaan-kalimat", t: "Ejaan dan Kalimat Efektif", s: 2,
      sum: "Tulisan yang baik bukan hanya isinya menarik, tetapi juga ejaannya benar dan kalimatnya efektif. Ejaan yang berlaku sekarang adalah Ejaan Bahasa Indonesia yang Disempurnakan (EYD) Edisi V tahun 2022.\nKalimat efektif adalah kalimat yang dipahami pembaca persis seperti maksud penulisnya. Soal tentang huruf kapital, tanda baca, kata baku, dan kalimat efektif sering muncul di ujian, jadi bab ini penting untuk latihan.",
      pts: [
        "<b>Huruf kapital:</b> dipakai di awal kalimat, nama orang, nama geografi (Sungai Musi), nama hari dan bulan, serta judul (kecuali kata tugas seperti di, ke, dan, yang, terhadap).",
        "<b>Tanda koma:</b> memisahkan unsur perincian (buku, pensil, dan penggaris) dan anak kalimat yang mendahului induk kalimat (Karena hujan, kami terlambat).",
        "<b>Kata baku:</b> aktivitas (bukan aktifitas), apotek (bukan apotik), praktik (bukan praktek), risiko (bukan resiko), jadwal (bukan jadual), kualitas (bukan kwalitas).",
        "<b>Ciri kalimat efektif:</b> subjek dan predikat jelas, hemat kata, logis, padu, dan bentuknya sejajar.",
        "<b>Tidak boros:</b> “para siswa-siswa” salah, cukup “para siswa”. “Sangat indah sekali” salah, cukup “sangat indah” atau “indah sekali”.",
        "<b>Di- dan ke-:</b> sebagai awalan ditulis serangkai (ditulis, dimakan). Sebagai kata depan ditulis terpisah (di rumah, ke pasar)."
      ],
      ex: { q: "Perbaiki kalimat berikut: “Di dalam rapat itu membahas tentang jadwal ujian.”", a: "Kalimat ini tidak bersubjek karena kata “di dalam” membuat “rapat itu” menjadi keterangan. Kata “membahas tentang” juga boros. Perbaikannya: “Rapat itu membahas jadwal ujian.” atau “Dalam rapat itu dibahas jadwal ujian.”" },
      tip: "Kalau ragu apakah kalimat efektif, cari subjek dan predikatnya dulu. Kalimat yang diawali “di”, “dalam”, atau “bagi” lalu langsung diikuti kata kerja berawalan me- biasanya kehilangan subjek.",
      q: [
        ["Penulisan kata baku yang benar adalah …", ["aktivitas", "aktifitas", "aktipitas", "aktivitet"], 0, "Aktivitas."],
        ["Penulisan huruf kapital yang benar terdapat pada kalimat …", ["Kami berlibur ke Danau Toba pada bulan Juli.", "kami berlibur ke danau Toba pada Bulan juli.", "Kami Berlibur ke danau toba pada bulan juli.", "kami berlibur ke Danau toba Pada bulan Juli."], 0, "Nama geografi dan nama bulan berhuruf kapital."],
        ["Kalimat yang efektif adalah …", ["Para siswa mengikuti upacara bendera.", "Para siswa-siswa mengikuti upacara bendera.", "Para siswa-siswa pada mengikuti upacara bendera.", "Siswa-siswa para mengikuti upacara."], 0, "Tidak ada bentuk jamak ganda."],
        ["Penulisan kata depan yang benar terdapat pada kalimat …", ["Ibu pergi ke pasar.", "Ibu pergi kepasar.", "Buku itu disimpan dilemari.", "Ia tinggal disana."], 0, "Kata depan ditulis terpisah."],
        ["Penggunaan tanda koma yang tepat terdapat pada kalimat …", ["Karena hujan deras, kami tidak jadi berangkat.", "Kami tidak jadi berangkat, karena hujan deras.", "Kami, tidak jadi berangkat karena hujan.", "Karena, hujan deras kami tidak jadi berangkat."], 0, "Koma setelah anak kalimat yang mendahului induk kalimat."],
        ["Kalimat “Bagi siswa yang terlambat harus melapor ke guru piket” tidak efektif karena …", ["tidak memiliki subjek yang jelas", "terlalu pendek", "tidak memiliki predikat", "memakai kata baku"], 0, "Hapus kata “bagi”."],
        ["Bentuk baku dari kata “resiko” adalah …", ["risiko", "resico", "risico", "riziko"], 0, "Risiko."],
        ["Kalimat yang tidak boros adalah …", ["Pemandangan di puncak gunung itu sangat indah.", "Pemandangan di puncak gunung itu sangat indah sekali.", "Pemandangan di puncak gunung itu amat sangat indah.", "Pemandangan di puncak gunung itu sungguh sangat indah sekali."], 0, "Satu penanda tingkat saja."],
        ["Penulisan judul yang sesuai kaidah adalah …", ["Pengaruh Media Sosial terhadap Prestasi Belajar", "Pengaruh Media Sosial Terhadap Prestasi Belajar", "pengaruh media sosial terhadap prestasi belajar", "Pengaruh media Sosial terhadap prestasi Belajar"], 0, "Kata tugas “terhadap” ditulis kecil."],
        ["Ejaan bahasa Indonesia yang berlaku sejak tahun 2022 adalah …", ["EYD Edisi V", "Ejaan Van Ophuijsen", "Ejaan Soewandi", "PUEBI"], 0, "Menggantikan PUEBI."]
      ]
    }
  ],
  order: ["membaca-kritis", "laporan-percobaan", "pidato", "cerpen", "tanggapan", "diskusi", "biografi", "ejaan-kalimat"]
});

// ================= BAHASA INGGRIS =================
EXT(9, "inggris", {
  more: {
    "procedure": {
      pts: [
        "<b>Jenis procedure text:</b> how to make (resep), how to operate (memakai alat), how to do (melakukan kegiatan).",
        "<b>Adverbs</b> dipakai untuk menjelaskan cara: slowly, carefully, gently."
      ],
      ex2: { q: "Susun langkah membuat teh ini ke urutan yang benar: (a) Pour hot water into the cup. (b) Stir well and serve. (c) Put a tea bag into a cup. (d) Add sugar.", a: "Urutan yang logis: (c) Put a tea bag into a cup → (a) Pour hot water into the cup → (d) Add sugar → (b) Stir well and serve. Tambahkan kata urutan supaya jelas: First, Then, Next, Finally." },
      q: [
        ["“First, pour the milk. ___, stir the mixture slowly.” The best word is …", ["Then", "Because", "Although", "Yesterday"], 0, "Kata urutan."],
        ["Which sentence is a correct imperative?", ["Plug in the rice cooker.", "The rice cooker plugged in.", "Plugging the rice cooker.", "Rice cooker is plug."], 0, "Diawali kata kerja dasar."],
        ["“How to Use a Fire Extinguisher” is a procedure text about how to …", ["operate something", "make food", "describe a place", "tell a story"], 0, "Memakai alat."],
        ["“Mix the flour and the eggs carefully.” The word “carefully” is a(n) …", ["adverb", "noun", "adjective", "pronoun"], 0, "Menjelaskan cara."],
        ["“Boil 500 ml of water.” The word “boil” means …", ["mendidihkan", "menggoreng", "memotong", "mengaduk"], 0, "Boil = mendidihkan."]
      ]
    },
    "report": {
      pts: [
        "<b>Kata penghubung</b> sebab-akibat dan perbandingan sering dipakai: because, so, than, while.",
        "<b>Soal report text di ujian</b> biasanya menanyakan main idea, detail informasi, dan arti kata (synonym)."
      ],
      ex2: { q: "Read: “Bats are the only mammals that can fly. Most bats are active at night. They use echolocation to find food.” Tentukan general classification dan satu description.", a: "General classification: “Bats are the only mammals that can fly”, karena kalimat ini menjelaskan kelompok kelelawar secara umum. Contoh description: “They use echolocation to find food”, yaitu kelelawar mencari makan dengan pantulan suara." },
      q: [
        ["“Bats are nocturnal animals.” “Nocturnal” means …", ["active at night", "active in the morning", "living in water", "eating plants"], 0, "Aktif di malam hari."],
        ["“Penguins cannot fly, but they swim very well.” The word “they” refers to …", ["penguins", "birds in general", "fish", "swimmers"], 0, "Kata ganti untuk penguins."],
        ["The main purpose of a report text is to …", ["give general information about something", "retell a past event", "persuade readers to buy", "tell a funny story"], 0, "Informasi umum."],
        ["“Elephants are herbivores.” Herbivores eat …", ["plants", "meat", "insects", "fish"], 0, "Pemakan tumbuhan."],
        ["Which sentence is a description in a report text about the sun?", ["The sun gives heat and light to the earth.", "I saw the sunrise yesterday.", "Let’s watch the sunset!", "How to protect your eyes from the sun."], 0, "Fakta umum dalam simple present."]
      ]
    },
    "passive": {
      pts: [
        "<b>Future passive:</b> will be + V3. “The new library will be opened next month.”",
        "<b>Present perfect passive:</b> has/have been + V3. “The homework has been finished.”"
      ],
      ex2: { q: "Ubahlah ke kalimat pasif: “The students will clean the classroom tomorrow.”", a: "Objek “the classroom” menjadi subjek. Tense future memakai will be + V3, dan clean menjadi cleaned. Hasilnya: “The classroom will be cleaned by the students tomorrow.”" },
      q: [
        ["The new bridge ___ next year.", ["will be built", "will build", "is build", "was built"], 0, "Future passive."],
        ["The passive form of “Rina wrote a letter” is …", ["A letter was written by Rina.", "A letter is written by Rina.", "A letter was wrote by Rina.", "A letter written Rina."], 0, "Past passive: was + V3."],
        ["“The windows have been cleaned.” This sentence uses …", ["present perfect passive", "simple past active", "future passive", "present continuous active"], 0, "Have been + V3."],
        ["The V3 of “take” is …", ["taken", "took", "taked", "taking"], 0, "Take – took – taken."],
        ["Rice ___ in many parts of Indonesia.", ["is grown", "grows by", "is grow", "growing"], 0, "Present passive."]
      ]
    },
    "hope-congrats": {
      pts: [
        "<b>Hope dengan “wish”:</b> I wish you all the best. I wish you good luck.",
        "<b>Congratulations on + noun/V-ing:</b> Congratulations on your graduation / on winning the match."
      ],
      ex2: { q: "Tulis dialog singkat: temanmu Dani diterima di SMA impiannya. Beri selamat dan sampaikan harapan.", a: "Contoh. You: “Congratulations on getting accepted at your dream school, Dani! I hope you enjoy studying there.” Dani: “Thank you so much. I hope we can still meet often.” Ucapan selamat memakai pola congratulations on + V-ing, lalu harapan dengan I hope." },
      q: [
        ["“Congratulations ___ your graduation!”", ["on", "at", "in", "to for"], 0, "Congratulations on."],
        ["Your friend will have a test tomorrow. You say …", ["Good luck! I hope you do well.", "Congratulations on your test!", "I’m sorry to hear that.", "Happy birthday!"], 0, "Harapan sebelum ujian."],
        ["“I wish you a happy new year.” This expression is used to …", ["express hope", "apologize", "give advice", "refuse an invitation"], 0, "Harapan."],
        ["“Congratulations on your new house!” The best response is …", ["Thank you. Please come and visit.", "I hope so.", "You’re wrong.", "Get well soon."], 0, "Berterima kasih."],
        ["Which expression is NOT used to congratulate?", ["Take care.", "Well done!", "Good job!", "Congratulations!"], 0, "Take care = jaga diri."]
      ]
    },
    "labels": {
      pts: [
        "<b>Istilah lain pada label:</b> net weight (berat bersih), manufactured by (diproduksi oleh), shake well before use (kocok dahulu).",
        "<b>Allergen information</b> memberi tahu bahan pemicu alergi, misalnya “Contains milk and peanuts.”"
      ],
      ex2: { q: "Label obat: “Dosage: Adults 2 tablets, children 6–12 years 1 tablet, 3 times a day.” Berapa tablet yang diminum anak 10 tahun dalam sehari?", a: "Anak 10 tahun termasuk kelompok 6–12 tahun, jadi sekali minum 1 tablet. Obat diminum 3 kali sehari, sehingga totalnya 1 × 3 = 3 tablet per hari." },
      q: [
        ["“Net weight 250 g” means …", ["berat bersih 250 gram", "harga 250 rupiah", "kedaluwarsa 250 hari", "kalori 250"], 0, "Net weight."],
        ["“Shake well before use” means …", ["kocok dahulu sebelum dipakai", "simpan di kulkas", "jangan dikocok", "minum sebelum tidur"], 0, "Instruksi pemakaian."],
        ["Label: “Adults: 2 tablets, 3 times a day.” How many tablets does an adult take daily?", ["6", "5", "3", "2"], 0, "2 × 3 = 6."],
        ["“Contains peanuts” is important for people who are …", ["allergic to peanuts", "on a diet", "very hungry", "athletes"], 0, "Informasi alergi."],
        ["“Do not exceed the recommended dose” means …", ["jangan melebihi dosis yang dianjurkan", "minum sebanyak mungkin", "kurangi dosis setengahnya", "simpan di tempat kering"], 0, "Exceed = melebihi."]
      ]
    }
  },
  add: [
    {
      id: "short-functional", t: "Short Functional Texts: Notice, Announcement, Invitation", s: 1,
      sum: "Short functional text adalah teks pendek yang punya fungsi praktis dalam kehidupan sehari-hari, misalnya tanda peringatan, pengumuman sekolah, dan undangan ulang tahun.\nTeksnya singkat, jadi setiap kata penting. Soal ujian biasanya menanyakan tujuan teks, tempat teks itu ditemukan, dan informasi seperti waktu atau tempat acara.",
      pts: [
        "<b>Notice/caution:</b> tanda peringatan atau larangan, contoh “No smoking”, “Keep silent”, “Wet floor”.",
        "<b>Announcement:</b> pengumuman untuk orang banyak, memuat apa, kapan, di mana, dan siapa yang bisa dihubungi.",
        "<b>Invitation:</b> undangan yang memuat acara, tanggal, waktu, tempat, dan RSVP (konfirmasi kehadiran).",
        "<b>Short message:</b> pesan singkat untuk orang yang tidak bisa ditemui langsung.",
        "<b>Advertisement:</b> iklan untuk menawarkan produk atau jasa, sering memakai kata seperti discount, free, best.",
        "<b>Pertanyaan tujuan teks</b> biasanya berbunyi “The text is written to …” atau “What is the purpose of the text?”"
      ],
      ex: { q: "Read: “ANNOUNCEMENT. All grade 9 students must attend the try-out exam on Monday, March 3rd, at 7 a.m. in the school hall. Bring your own pencil and eraser. – The Principal.” What must the students bring?", a: "Kalimat “Bring your own pencil and eraser” menyebutkan barang yang harus dibawa, yaitu pensil dan penghapus sendiri. Informasi lain: acaranya try-out exam, waktunya Senin 3 Maret pukul 07.00, tempatnya aula sekolah, dan pengumumnya kepala sekolah." },
      tip: "Baca pertanyaannya dulu, lalu cari kata kunci di teks (tanggal, tempat, nama). Teks pendek tidak perlu dibaca berulang kali kalau kamu sudah tahu informasi yang dicari.",
      q: [
        ["“WET FLOOR” is usually found …", ["on a floor that has just been mopped", "on a food label", "in a birthday invitation", "on a book cover"], 0, "Lantai basah."],
        ["“Keep silent. Library area.” The notice means …", ["don’t make noise", "you may talk loudly", "the library is closed", "you can eat in the library"], 0, "Silent = diam."],
        ["The purpose of an invitation is to …", ["ask someone to come to an event", "warn people of danger", "sell a product", "describe an animal"], 0, "Mengundang."],
        ["RSVP in an invitation means the guest should …", ["confirm whether they will attend", "bring a gift", "wear a uniform", "arrive late"], 0, "Konfirmasi kehadiran."],
        ["“No parking in front of the gate.” Where can we find this notice?", ["in front of a gate", "in a kitchen", "in a textbook", "on a medicine bottle"], 0, "Sesuai isinya."],
        ["An announcement is usually written for …", ["many people", "one close friend only", "a personal diary", "a recipe book"], 0, "Untuk umum."],
        ["“Big Sale! 50% off all shoes this weekend.” This text is a(n) …", ["advertisement", "invitation", "short message", "warning notice"], 0, "Iklan."],
        ["“Dear Rani, I borrowed your dictionary. I’ll return it tomorrow. – Dina.” What kind of text is this?", ["short message", "advertisement", "announcement", "label"], 0, "Pesan singkat."],
        ["“Dangerous! High voltage.” The notice warns people about …", ["electricity", "wet paint", "a slippery road", "loud music"], 0, "Voltage = tegangan listrik."],
        ["“Please queue here.” The notice asks people to …", ["stand in line", "sit down", "run fast", "leave the room"], 0, "Queue = antre."]
      ]
    },
    {
      id: "narrative", t: "Narrative Text", s: 2,
      sum: "Narrative text adalah teks yang menceritakan kisah untuk menghibur pembaca, biasanya berupa legenda, dongeng, fabel, atau cerita rakyat seperti Malin Kundang dan Timun Mas.\nKisahnya punya masalah (konflik) yang kemudian diselesaikan. Di ujian, narrative text sering muncul dengan pertanyaan tentang tokoh, urutan kejadian, pesan moral, dan arti kata.",
      pts: [
        "<b>Generic structure:</b> orientation (pengenalan tokoh, waktu, tempat), complication (munculnya masalah), resolution (penyelesaian), re-orientation atau coda (pesan moral, opsional).",
        "<b>Simple past tense:</b> lived, went, saw, became, was/were.",
        "<b>Time connectives:</b> once upon a time, one day, then, after that, finally.",
        "<b>Jenis:</b> legend (Tangkuban Perahu), fable (The Mouse Deer and the Crocodile), fairy tale (Cinderella), folktale (Malin Kundang).",
        "<b>Direct speech:</b> ucapan tokoh ditulis dengan tanda petik, misalnya “Help me!” cried the princess.",
        "<b>Moral value:</b> pesan yang bisa dipetik, misalnya “Don’t be arrogant” atau “Respect your parents.”"
      ],
      ex: { q: "Read: “Once upon a time, a greedy dog found a bone. While crossing a bridge, he saw his reflection in the water and thought it was another dog with a bigger bone. He barked, and his bone fell into the river.” Tentukan complication dan moral value-nya.", a: "Complication: anjing serakah mengira bayangannya adalah anjing lain dengan tulang lebih besar, lalu menggonggong sehingga tulangnya jatuh. Moral value: Don’t be greedy (jangan serakah), karena keserakahan bisa membuat kita kehilangan apa yang sudah kita miliki." },
      tip: "Kalau ditanya moral value, cari sifat tokoh yang membuatnya celaka atau berhasil. Kalau ditanya complication, cari kejadian ketika masalah pertama kali muncul.",
      q: [
        ["The purpose of a narrative text is to …", ["entertain readers", "describe a thing in general", "explain how to make something", "report news"], 0, "Menghibur."],
        ["The part that introduces the characters, time, and place is called …", ["orientation", "complication", "resolution", "coda"], 0, "Pengenalan."],
        ["“Once upon a time, there lived a poor widow and her son, Malin Kundang.” This sentence is part of the …", ["orientation", "complication", "resolution", "re-orientation"], 0, "Pengenalan tokoh."],
        ["Narrative text mostly uses … tense.", ["simple past", "simple present", "simple future", "present continuous"], 0, "Cerita masa lalu."],
        ["“The Mouse Deer and the Crocodile” is an example of a …", ["fable", "legend", "biography", "report"], 0, "Tokohnya hewan."],
        ["In the story, Malin Kundang was cursed into a stone because he …", ["refused to admit his mother", "was very poor", "lost his ship", "helped his mother"], 0, "Durhaka kepada ibunya."],
        ["The past form of “become” is …", ["became", "becomed", "becoming", "becomes"], 0, "Become – became – become."],
        ["In which part is the problem solved?", ["resolution", "orientation", "complication", "title"], 0, "Penyelesaian."],
        ["“The prince was very brave. He fought the dragon alone.” The word “brave” means …", ["berani", "takut", "malas", "sombong"], 0, "Brave = berani."],
        ["“Don’t judge people by their appearance.” This sentence is a …", ["moral value", "complication", "orientation", "title"], 0, "Pesan moral."]
      ]
    },
    {
      id: "songs", t: "Songs and Figurative Language", s: 2,
      sum: "Lagu berbahasa Inggris adalah cara menyenangkan untuk menambah kosakata dan melatih pendengaran. Di kelas 9 kamu belajar memahami pesan lagu dan bahasa kiasan yang dipakai penulis lirik.\nLirik lagu sering memakai figurative language (majas) supaya terdengar indah dan penuh perasaan. Kalau kamu tahu jenis-jenisnya, kamu bisa menangkap makna yang tidak tertulis langsung.",
      pts: [
        "<b>Simile:</b> perbandingan memakai like atau as. “Your smile is like the sun.”",
        "<b>Metaphor:</b> perbandingan langsung tanpa like atau as. “You are my sunshine.”",
        "<b>Personification:</b> benda mati seolah hidup. “The wind whispers my name.”",
        "<b>Hyperbole:</b> melebih-lebihkan. “I’ve told you a million times.”",
        "<b>Rhyme:</b> bunyi akhir yang sama, misalnya night dan light, day dan way.",
        "<b>Message:</b> pesan atau perasaan yang ingin disampaikan lagu, misalnya persahabatan, cinta keluarga, atau semangat."
      ],
      ex: { q: "Lirik contoh: “My friend, you are a shining star, / You light my way, near or far.” Tentukan majas pada baris pertama dan pasangan kata yang berima.", a: "“You are a shining star” membandingkan teman dengan bintang secara langsung tanpa like atau as, jadi termasuk metaphor. Kata yang berima adalah “star” dan “far” karena bunyi akhirnya sama (-ar). Pesannya: teman yang baik membimbing kita di mana pun." },
      tip: "Cari kata like atau as dulu. Kalau ada, hampir pasti simile. Kalau perbandingannya langsung (is, are), itu metaphor. Kalau benda bisa berbuat seperti manusia, itu personification.",
      q: [
        ["“She is as busy as a bee.” This is an example of …", ["simile", "metaphor", "personification", "hyperbole"], 0, "Memakai as … as."],
        ["“Time is money.” This is an example of …", ["metaphor", "simile", "rhyme", "personification"], 0, "Perbandingan langsung."],
        ["“The stars danced in the sky.” This is an example of …", ["personification", "simile", "hyperbole", "metaphor"], 0, "Bintang seolah menari."],
        ["“I’m so hungry I could eat a horse.” This is an example of …", ["hyperbole", "personification", "simile", "rhyme"], 0, "Melebih-lebihkan."],
        ["Which pair of words rhymes?", ["night – light", "night – day", "sun – moon", "sky – sea"], 0, "Bunyi akhir -ight."],
        ["“Your eyes are like the ocean.” The word that shows a simile is …", ["like", "your", "eyes", "ocean"], 0, "Like."],
        ["A song that tells us to never give up has a message about …", ["spirit and determination", "the sadness of losing", "cooking", "the weather"], 0, "Semangat."],
        ["“The sun smiled at us this morning.” The thing described like a human is …", ["the sun", "us", "the morning", "the sky"], 0, "Matahari tersenyum."],
        ["“My heart is a broken glass.” What feeling does the singer express?", ["sadness", "happiness", "hunger", "boredom"], 0, "Hati yang hancur."],
        ["Figurative language is used in songs to …", ["make the words more beautiful and meaningful", "give cooking instructions", "report scientific facts", "announce a schedule"], 0, "Memperindah lirik."]
      ]
    }
  ],
  order: ["procedure", "report", "passive", "short-functional", "hope-congrats", "labels", "narrative", "songs"]
});

// ================= PENDIDIKAN PANCASILA =================
EXT(9, "ppkn", {
  more: {
    "nilai-pancasila": {
      pts: [
        "<b>Pancasila sebagai pandangan hidup:</b> menjadi pedoman sikap sehari-hari, bukan sekadar hafalan saat upacara.",
        "<b>Tantangan penerapan</b> di zaman sekarang: hoaks, intoleransi, budaya serba instan, dan korupsi."
      ],
      ex2: { q: "Di grup kelas, seorang teman membagikan berita yang menyudutkan suku tertentu tanpa sumber jelas. Sikap apa yang sesuai dengan Pancasila?", a: "Tidak ikut menyebarkan, mengecek kebenarannya, lalu mengingatkan teman dengan sopan bahwa berita itu bisa memecah belah. Sikap ini mencerminkan sila ke-3 (menjaga persatuan) dan sila ke-2 (menghargai martabat sesama manusia)." },
      q: [
        ["Mengecek kebenaran berita sebelum membagikannya adalah upaya menjaga …", ["persatuan bangsa", "kekayaan pribadi", "popularitas diri", "kekuasaan"], 0, "Hoaks bisa memecah belah."],
        ["Memberi kesempatan semua anggota kelompok untuk berpendapat mencerminkan sila ke …", ["4", "1", "3", "5"], 0, "Musyawarah."],
        ["Menyumbangkan pakaian layak pakai untuk korban bencana mencerminkan sila ke …", ["2", "1", "3", "4"], 0, "Gemar melakukan kegiatan kemanusiaan."],
        ["Perilaku tidak jujur di sekolah yang bertentangan dengan nilai Pancasila adalah …", ["menyontek saat ujian", "membantu teman belajar", "datang tepat waktu", "mengembalikan barang temuan"], 0, "Bibit perilaku korupsi."],
        ["Pancasila sebagai pandangan hidup bangsa berarti Pancasila …", ["menjadi pedoman sikap dan perilaku sehari-hari", "hanya dihafalkan saat upacara", "berlaku untuk pejabat saja", "dapat diganti setiap tahun"], 0, "Pedoman hidup."]
      ]
    },
    "amandemen": {
      pts: [
        "<b>Urutan amandemen:</b> pertama 1999, kedua 2000, ketiga 2001, keempat 2002, semuanya dilakukan oleh MPR.",
        "<b>Pasal 1 ayat 2:</b> kedaulatan berada di tangan rakyat dan dilaksanakan menurut UUD. <b>Pasal 1 ayat 3:</b> Negara Indonesia adalah negara hukum."
      ],
      ex2: { q: "Apa beda kedudukan MPR sebelum dan sesudah amandemen UUD 1945?", a: "Sebelum amandemen, MPR adalah lembaga tertinggi negara yang memilih presiden dan menetapkan GBHN. Sesudah amandemen, MPR sejajar dengan lembaga negara lain. Presiden dipilih langsung oleh rakyat, sedangkan MPR berwenang mengubah UUD, melantik presiden, dan dapat memberhentikan presiden sesuai UUD." },
      q: [
        ["Lembaga yang berwenang mengubah UUD 1945 adalah …", ["MPR", "DPR", "Presiden", "MK"], 0, "Pasal 3 dan 37."],
        ["Bunyi Pasal 1 ayat 3 UUD 1945 adalah …", ["Negara Indonesia adalah negara hukum.", "Negara Indonesia ialah negara kesatuan yang berbentuk republik.", "Kedaulatan berada di tangan rakyat.", "Presiden memegang kekuasaan pemerintahan."], 0, "Negara hukum."],
        ["Amandemen UUD 1945 dilakukan sebanyak …", ["4 kali", "2 kali", "3 kali", "5 kali"], 0, "1999 sampai 2002."],
        ["Lembaga yang menjaga kehormatan hakim dan mengusulkan pengangkatan hakim agung adalah …", ["Komisi Yudisial", "Mahkamah Konstitusi", "BPK", "DPD"], 0, "Komisi Yudisial."],
        ["Lembaga yang mewakili kepentingan daerah di tingkat pusat adalah …", ["DPD", "DPRD", "MA", "KPU"], 0, "Dewan Perwakilan Daerah."]
      ]
    },
    "otonomi": {
      pts: [
        "<b>Pendapatan asli daerah (PAD):</b> pajak daerah, retribusi daerah, dan hasil pengelolaan kekayaan daerah.",
        "<b>Peraturan daerah (perda)</b> dibuat oleh DPRD bersama kepala daerah."
      ],
      ex2: { q: "Sebuah kabupaten punya pantai indah yang belum dikelola. Bagaimana otonomi daerah bisa membantu?", a: "Dengan otonomi, pemerintah kabupaten berwenang menyusun program pariwisata sendiri, misalnya membangun akses jalan, melatih warga menjadi pemandu, dan membuat perda tentang retribusi wisata. Retribusi itu menambah PAD, dan warga mendapat lapangan kerja." },
      q: [
        ["Peraturan daerah dibuat oleh kepala daerah bersama …", ["DPRD", "DPR RI", "MPR", "Mahkamah Agung"], 0, "DPRD."],
        ["Pungutan daerah atas jasa tertentu, seperti parkir dan tiket masuk tempat wisata, disebut …", ["retribusi", "pajak penghasilan", "bea cukai", "zakat"], 0, "Retribusi."],
        ["Pelimpahan wewenang dari pemerintah pusat kepada gubernur sebagai wakil pemerintah pusat disebut …", ["dekonsentrasi", "desentralisasi", "sentralisasi", "otonomi khusus"], 0, "Dekonsentrasi."],
        ["Tujuan otonomi daerah adalah …", ["mempercepat pembangunan sesuai kebutuhan daerah", "memisahkan daerah dari NKRI", "menghapus pemerintah pusat", "mengurangi partisipasi warga"], 0, "Pembangunan merata."],
        ["Kepala daerah provinsi disebut …", ["gubernur", "bupati", "wali kota", "lurah"], 0, "Gubernur."]
      ]
    },
    "bela-negara": {
      pts: [
        "<b>Nilai dasar bela negara:</b> cinta tanah air, sadar berbangsa dan bernegara, setia pada Pancasila, rela berkorban, dan memiliki kemampuan awal bela negara.",
        "<b>Melawan hoaks</b> dengan literasi digital: cek sumber, cek tanggal, dan jangan langsung membagikan."
      ],
      ex2: { q: "Sebutkan tiga contoh bela negara yang bisa kamu lakukan sebagai siswa kelas 9.", a: "Pertama, belajar sungguh-sungguh untuk persiapan ujian, karena warga yang terdidik membuat negara kuat. Kedua, menolak narkoba dan tawuran yang merusak generasi muda. Ketiga, tidak menyebarkan hoaks dan mengingatkan teman yang membagikan berita palsu." },
      q: [
        ["Salah satu nilai dasar bela negara adalah …", ["cinta tanah air", "mengagungkan budaya asing", "mementingkan diri sendiri", "malas belajar"], 0, "Cinta tanah air."],
        ["Upaya melawan hoaks di media sosial adalah …", ["mengecek sumber sebelum membagikan", "langsung membagikan berita viral", "menambahkan komentar provokatif", "membuat akun palsu"], 0, "Literasi digital."],
        ["Dalam Sishankamrata, kekuatan pendukungnya adalah …", ["rakyat", "TNI", "Polri", "presiden"], 0, "TNI dan Polri kekuatan utama."],
        ["Pasal 30 ayat 1 UUD 1945 mengatur tentang …", ["hak dan kewajiban ikut serta dalam usaha pertahanan dan keamanan negara", "kebebasan beragama", "hak mendapat pendidikan", "perekonomian nasional"], 0, "Pertahanan dan keamanan."],
        ["Pemberontakan bersenjata untuk memisahkan diri dari NKRI termasuk ancaman …", ["militer", "nonmiliter bidang ekonomi", "nonmiliter bidang teknologi", "nonmiliter bidang sosial budaya"], 0, "Menggunakan senjata."]
      ]
    }
  },
  add: [
    {
      id: "dasar-negara", t: "Pancasila sebagai Dasar Negara dan Ideologi Terbuka", s: 1,
      sum: "Pancasila disahkan sebagai dasar negara pada 18 Agustus 1945, bersamaan dengan Pembukaan UUD 1945. Kelima silanya tercantum di alinea keempat Pembukaan.\nSebagai dasar negara, Pancasila menjadi sumber dari segala sumber hukum. Sebagai ideologi terbuka, nilai dasarnya tetap, tetapi cara menerapkannya bisa menyesuaikan perkembangan zaman.",
      pts: [
        "<b>Perumusan:</b> Mr. Muhammad Yamin (29 Mei 1945), Mr. Soepomo (31 Mei 1945), dan Ir. Soekarno (1 Juni 1945, yang memperkenalkan nama Pancasila).",
        "<b>Piagam Jakarta</b> (22 Juni 1945) dirumuskan Panitia Sembilan. Sila pertamanya diubah menjadi “Ketuhanan Yang Maha Esa” pada 18 Agustus 1945.",
        "<b>Fungsi Pancasila:</b> dasar negara, pandangan hidup bangsa, ideologi negara, kepribadian bangsa, dan sumber dari segala sumber hukum.",
        "<b>Ideologi terbuka:</b> nilai dasar (tetap), nilai instrumental (aturan pelaksanaan, bisa berubah), nilai praksis (penerapan sehari-hari).",
        "<b>Peringatan:</b> Hari Lahir Pancasila setiap 1 Juni, Hari Kesaktian Pancasila setiap 1 Oktober.",
        "<b>Pancasila sebagai pemersatu:</b> nilai-nilainya dapat diterima semua suku, agama, dan golongan."
      ],
      ex: { q: "Mengapa sila pertama Piagam Jakarta diubah sebelum UUD 1945 disahkan?", a: "Sila pertama Piagam Jakarta memuat kewajiban menjalankan syariat Islam bagi pemeluknya. Tokoh dari Indonesia bagian timur keberatan karena penduduk Indonesia memeluk berbagai agama. Demi persatuan, Mohammad Hatta berunding dengan para tokoh Islam, lalu disepakati rumusan “Ketuhanan Yang Maha Esa” yang dapat diterima semua golongan." },
      tip: "Ingat urutan tanggal: Yamin 29 Mei, Soepomo 31 Mei, Soekarno 1 Juni, Piagam Jakarta 22 Juni, pengesahan 18 Agustus 1945.",
      q: [
        ["Istilah Pancasila pertama kali dikemukakan oleh …", ["Ir. Soekarno", "Mr. Muhammad Yamin", "Mr. Soepomo", "Mohammad Hatta"], 0, "Pidato 1 Juni 1945."],
        ["Rumusan Pancasila yang sah tercantum dalam …", ["Pembukaan UUD 1945 alinea keempat", "Pasal 1 UUD 1945", "Piagam Jakarta", "Dekrit Presiden 1959"], 0, "Alinea keempat."],
        ["Piagam Jakarta dirumuskan oleh …", ["Panitia Sembilan", "PPKI", "seluruh anggota BPUPKI", "KNIP"], 0, "Panitia Sembilan."],
        ["Hari Lahir Pancasila diperingati setiap tanggal …", ["1 Juni", "1 Oktober", "17 Agustus", "18 Agustus"], 0, "1 Juni."],
        ["Pancasila disahkan sebagai dasar negara pada tanggal …", ["18 Agustus 1945", "1 Juni 1945", "22 Juni 1945", "17 Agustus 1945"], 0, "Sidang PPKI."],
        ["Pancasila sebagai sumber dari segala sumber hukum berarti …", ["semua peraturan tidak boleh bertentangan dengan Pancasila", "Pancasila adalah undang-undang", "hukum adat dihapuskan", "peraturan dibuat tanpa dasar"], 0, "Landasan semua hukum."],
        ["Nilai Pancasila yang bersifat tetap dan tidak berubah disebut nilai …", ["dasar", "instrumental", "praksis", "teknis"], 0, "Nilai dasar."],
        ["Contoh nilai praksis Pancasila adalah …", ["siswa bermusyawarah memilih ketua kelas", "bunyi sila keempat", "undang-undang pemilu", "Pembukaan UUD 1945"], 0, "Penerapan nyata."],
        ["Ketua Panitia Sembilan adalah …", ["Ir. Soekarno", "Mohammad Hatta", "Achmad Soebardjo", "K.H. Wahid Hasjim"], 0, "Soekarno."],
        ["Pancasila disebut ideologi terbuka karena …", ["penerapannya bisa menyesuaikan zaman tanpa mengubah nilai dasar", "silanya boleh diganti kapan saja", "berasal dari negara lain", "hanya berlaku bagi golongan tertentu"], 0, "Nilai dasar tetap."]
      ]
    },
    {
      id: "bhinneka", t: "Keberagaman dan Bhinneka Tunggal Ika", s: 1,
      sum: "Indonesia memiliki lebih dari 1.300 suku bangsa, ratusan bahasa daerah, dan enam agama yang diakui. Keberagaman ini adalah kekayaan, tetapi bisa memicu konflik kalau tidak dikelola dengan baik.\nSemboyan Bhinneka Tunggal Ika yang berarti “berbeda-beda tetapi tetap satu” mengingatkan kita untuk saling menghargai. Bersatu bukan berarti semua harus sama, melainkan hidup rukun dalam perbedaan.",
      pts: [
        "<b>Asal semboyan:</b> Bhinneka Tunggal Ika diambil dari Kitab Sutasoma karya Mpu Tantular pada zaman Majapahit, tertulis pada pita lambang Garuda Pancasila.",
        "<b>Penyebab keberagaman:</b> letak strategis, wilayah kepulauan, kondisi alam yang berbeda, dan pengaruh budaya asing.",
        "<b>Prinsip persatuan:</b> Bhinneka Tunggal Ika, nasionalisme, kebebasan yang bertanggung jawab, wawasan nusantara, dan persatuan pembangunan.",
        "<b>Agama yang diakui:</b> Islam, Kristen Protestan, Katolik, Hindu, Buddha, dan Konghucu.",
        "<b>Sikap positif:</b> toleransi, empati, tidak membeda-bedakan teman, dan menolak SARA sebagai bahan ejekan.",
        "<b>Ancaman persatuan:</b> primordialisme (mengutamakan kelompok sendiri secara berlebihan) dan etnosentrisme (menganggap budaya sendiri paling baik)."
      ],
      ex: { q: "Di kelasmu ada teman baru dari Papua yang logat bicaranya berbeda, lalu beberapa teman menirukannya untuk bercanda. Bagaimana sikapmu?", a: "Mengingatkan teman-teman bahwa menirukan logat untuk diejek bisa menyakiti perasaan dan termasuk perundungan. Ajak teman baru itu ikut kegiatan kelas dan kenali budayanya. Sikap ini mencerminkan Bhinneka Tunggal Ika dan menolak etnosentrisme." },
      tip: "Bedakan istilahnya: primordialisme berarti terlalu mengutamakan kelompok asal, etnosentrisme berarti merasa budaya sendiri paling unggul, toleransi berarti menghargai perbedaan.",
      q: [
        ["Semboyan Bhinneka Tunggal Ika berasal dari kitab …", ["Sutasoma", "Negarakertagama", "Pararaton", "Arjunawiwaha"], 0, "Sutasoma."],
        ["Pengarang Kitab Sutasoma adalah …", ["Mpu Tantular", "Mpu Prapanca", "Mpu Kanwa", "Mpu Sedah"], 0, "Mpu Tantular."],
        ["Arti Bhinneka Tunggal Ika adalah …", ["berbeda-beda tetapi tetap satu", "bersatu kita teguh", "satu nusa satu bangsa", "persatuan dan kesatuan"], 0, "Berbeda tetapi satu."],
        ["Sikap menganggap budaya sendiri paling baik disebut …", ["etnosentrisme", "toleransi", "nasionalisme", "pluralisme"], 0, "Etnosentrisme."],
        ["Faktor penyebab keberagaman masyarakat Indonesia adalah …", ["wilayah berbentuk kepulauan", "jumlah penduduk yang sedikit", "wilayah yang sempit", "iklim yang sama di semua daerah"], 0, "Pulau-pulau terpisah laut."],
        ["Jumlah agama yang diakui di Indonesia adalah …", ["6", "5", "4", "7"], 0, "Termasuk Konghucu."],
        ["Contoh sikap toleransi di sekolah adalah …", ["menghormati teman yang sedang beribadah", "mengejek logat teman", "memilih teman berdasarkan suku", "menolak satu kelompok dengan teman berbeda agama"], 0, "Toleransi."],
        ["Sikap mengutamakan kelompok asal secara berlebihan disebut …", ["primordialisme", "patriotisme", "demokrasi", "empati"], 0, "Primordialisme."],
        ["Semboyan Bhinneka Tunggal Ika tertulis pada …", ["pita yang dicengkeram Garuda Pancasila", "teks proklamasi", "bendera Merah Putih", "Pembukaan UUD 1945"], 0, "Lambang negara."],
        ["Keberagaman menjadi kekuatan bangsa jika …", ["dikelola dengan sikap saling menghargai", "semua budaya diseragamkan", "budaya daerah dihapus", "hanya satu suku yang berkuasa"], 0, "Saling menghargai."]
      ]
    },
    {
      id: "wawasan-nusantara", t: "Wilayah NKRI dan Wawasan Nusantara", s: 2,
      sum: "Indonesia adalah negara kepulauan terbesar di dunia dengan lebih dari 17.000 pulau. Laut di antara pulau-pulau itu bukan pemisah, melainkan penghubung yang menyatukan wilayah.\nCara pandang bangsa Indonesia tentang diri dan lingkungannya yang mengutamakan persatuan wilayah disebut wawasan nusantara. Konsep ini diperjuangkan lewat Deklarasi Djuanda dan diakui dunia melalui UNCLOS 1982.",
      pts: [
        "<b>Deklarasi Djuanda</b> (13 Desember 1957) menyatakan laut di antara pulau-pulau Indonesia adalah wilayah Indonesia. Tanggal ini diperingati sebagai Hari Nusantara.",
        "<b>UNCLOS 1982</b> (Konvensi Hukum Laut PBB) mengakui Indonesia sebagai negara kepulauan.",
        "<b>Batas laut:</b> laut teritorial 12 mil dari garis pangkal, zona ekonomi eksklusif (ZEE) 200 mil.",
        "<b>Pasal 25A UUD 1945:</b> NKRI adalah negara kepulauan yang berciri nusantara dengan wilayah yang batas dan haknya ditetapkan undang-undang.",
        "<b>Perwujudan wawasan nusantara:</b> kesatuan politik, ekonomi, sosial budaya, serta pertahanan dan keamanan.",
        "<b>Negara tetangga:</b> utara Malaysia, Singapura, Filipina, Vietnam. Selatan Australia dan Timor-Leste. Timur Papua Nugini."
      ],
      ex: { q: "Sebelum Deklarasi Djuanda, laut teritorial Indonesia hanya 3 mil dari tiap pulau sesuai aturan Belanda tahun 1939. Apa masalahnya bagi Indonesia?", a: "Dengan aturan 3 mil, di antara pulau-pulau Indonesia ada laut bebas yang boleh dilalui kapal asing mana pun, termasuk kapal perang. Wilayah Indonesia jadi terpecah-pecah dan sulit dijaga. Deklarasi Djuanda menyatukan pulau dan laut di antaranya sebagai satu wilayah, sehingga tidak ada lagi laut bebas di tengah Indonesia." },
      tip: "Hafalkan angka kuncinya: laut teritorial 12 mil, ZEE 200 mil, Deklarasi Djuanda 13 Desember 1957, UNCLOS 1982.",
      q: [
        ["Deklarasi Djuanda dicetuskan pada tanggal …", ["13 Desember 1957", "17 Agustus 1945", "28 Oktober 1928", "10 November 1945"], 0, "Hari Nusantara."],
        ["Batas laut teritorial Indonesia adalah … dari garis pangkal.", ["12 mil", "3 mil", "200 mil", "100 mil"], 0, "12 mil."],
        ["Lebar zona ekonomi eksklusif (ZEE) adalah …", ["200 mil", "12 mil", "24 mil", "350 mil"], 0, "200 mil."],
        ["Konvensi PBB yang mengakui Indonesia sebagai negara kepulauan adalah …", ["UNCLOS 1982", "Deklarasi Bangkok", "Konferensi Meja Bundar", "Perjanjian Linggarjati"], 0, "Hukum laut internasional."],
        ["Menurut wawasan nusantara, laut di antara pulau-pulau Indonesia berfungsi sebagai …", ["pemersatu wilayah", "pemisah wilayah", "laut bebas internasional", "milik negara tetangga"], 0, "Penghubung."],
        ["Negara yang berbatasan darat dengan Indonesia di Pulau Kalimantan adalah …", ["Malaysia", "Filipina", "Australia", "Singapura"], 0, "Sabah dan Sarawak."],
        ["Ketentuan bahwa Indonesia adalah negara kepulauan berciri nusantara terdapat dalam Pasal … UUD 1945.", ["25A", "27", "30", "33"], 0, "Pasal 25A."],
        ["Hari Nusantara diperingati setiap tanggal …", ["13 Desember", "1 Juni", "20 Mei", "28 Oktober"], 0, "Mengenang Deklarasi Djuanda."],
        ["Di wilayah ZEE, Indonesia berhak …", ["mengelola sumber daya alam di laut tersebut", "melarang semua kapal asing lewat", "memungut pajak dari setiap kapal yang lewat", "mengusir semua nelayan asing tanpa aturan"], 0, "Hak berdaulat atas sumber daya."],
        ["Contoh perwujudan wawasan nusantara bidang ekonomi adalah …", ["pemerataan pembangunan di seluruh daerah", "pembangunan hanya di Pulau Jawa", "larangan perdagangan antarpulau", "harga barang dibuat berbeda jauh"], 0, "Kesatuan ekonomi."]
      ]
    }
  ],
  order: ["dasar-negara", "nilai-pancasila", "amandemen", "bhinneka", "otonomi", "wawasan-nusantara", "bela-negara"]
});

// ================= INFORMATIKA =================
EXT(9, "info", {
  more: {
    "struktur-data": {
      pts: [
        "<b>Operasi stack:</b> push (menambah di atas), pop (mengambil dari atas). <b>Operasi queue:</b> enqueue (masuk di belakang), dequeue (keluar dari depan).",
        "<b>Indeks terakhir</b> list yang berisi n elemen adalah n − 1."
      ],
      ex2: { q: "Stack kosong diberi operasi berurutan: push(A), push(B), push(C), pop, push(D), pop. Apa isi stack sekarang dari bawah ke atas?", a: "push A → [A]. push B → [A, B]. push C → [A, B, C]. pop mengambil C → [A, B]. push D → [A, B, D]. pop mengambil D → [A, B]. Jadi isi stack dari bawah ke atas adalah A, B." },
      q: [
        ["Queue berisi [P, Q, R] dengan P paling depan. Setelah satu kali dequeue, elemen paling depan adalah …", ["Q", "P", "R", "kosong"], 0, "P keluar duluan."],
        ["Operasi menambah data ke stack disebut …", ["push", "pop", "enqueue", "sort"], 0, "Push."],
        ["List berisi 8 elemen. Indeks elemen terakhirnya adalah …", ["7", "8", "9", "0"], 0, "Indeks mulai dari 0."],
        ["Stack: push(1), push(2), push(3), pop. Elemen paling atas sekarang adalah …", ["2", "3", "1", "kosong"], 0, "3 sudah diambil."],
        ["Jaringan pertemanan di media sosial paling tepat dimodelkan dengan …", ["graph", "stack", "queue", "array satu elemen"], 0, "Simpul dan sisi."]
      ]
    },
    "python": {
      pts: [
        "<b>Operator:</b> + − * / (pembagian desimal), // (pembagian bulat), % (sisa bagi), ** (pangkat).",
        "<b>Indentasi</b> (spasi di awal baris) wajib dalam Python untuk menandai isi blok if dan for."
      ],
      ex2: { q: "Apa output program berikut? total = 0, lalu for i in range(1, 5): total = total + i, lalu print(total).", a: "range(1, 5) menghasilkan 1, 2, 3, 4. Nilai total bertambah: 0 + 1 = 1, 1 + 2 = 3, 3 + 3 = 6, 6 + 4 = 10. Output yang tercetak adalah 10." },
      q: [
        ["Hasil dari 17 % 5 dalam Python adalah …", ["2", "3", "3.4", "12"], 0, "Sisa bagi 17 : 5."],
        ["Hasil dari 2 ** 3 dalam Python adalah …", ["8", "6", "5", "9"], 0, "2 pangkat 3."],
        ["Hasil dari 7 // 2 dalam Python adalah …", ["3", "3.5", "4", "1"], 0, "Pembagian bulat."],
        ["x = 10, lalu if x > 5: print(\"Besar\") else: print(\"Kecil\"). Outputnya …", ["Besar", "Kecil", "10", "error"], 0, "10 > 5 bernilai True."],
        ["Tipe data dari \"123\" (memakai tanda petik) adalah …", ["str", "int", "float", "bool"], 0, "Teks."],
        ["Fungsi untuk mengubah teks \"25\" menjadi bilangan bulat adalah …", ["int()", "str()", "print()", "len()"], 0, "int(\"25\") = 25."]
      ]
    },
    "privasi-data": {
      pts: [
        "<b>Kata sandi kuat:</b> minimal 12 karakter, campuran huruf besar, huruf kecil, angka, dan simbol, berbeda untuk tiap akun.",
        "<b>Autentikasi dua faktor (2FA):</b> lapisan keamanan tambahan berupa kode dari ponsel atau aplikasi.",
        "<b>Phishing:</b> penipuan lewat pesan atau situs palsu untuk mencuri data login."
      ],
      ex2: { q: "Kamu menerima pesan: “Selamat! Akun gim kamu menang hadiah. Klik tautan ini dan masukkan kata sandi untuk klaim.” Apa yang sebaiknya kamu lakukan?", a: "Ini ciri phishing: hadiah mendadak, desakan, dan permintaan kata sandi. Jangan klik tautannya dan jangan memasukkan data apa pun. Hapus atau laporkan pesan itu, lalu beri tahu orang tua. Jika telanjur memasukkan kata sandi, segera ganti kata sandi dan aktifkan 2FA." },
      q: [
        ["Contoh kata sandi yang paling kuat adalah …", ["T3o!Bel4jar#2026", "12345678", "theodore", "password"], 0, "Panjang dan campuran karakter."],
        ["Penipuan dengan situs palsu untuk mencuri data login disebut …", ["phishing", "streaming", "coding", "backup"], 0, "Phishing."],
        ["Kode verifikasi yang dikirim ke ponsel saat login adalah bagian dari …", ["autentikasi dua faktor", "enkripsi file", "kompresi data", "firewall fisik"], 0, "2FA."],
        ["Tindakan yang aman di media sosial adalah …", ["tidak membagikan alamat rumah secara publik", "mengunggah foto kartu identitas", "membagikan kata sandi ke teman", "menerima semua permintaan pertemanan orang asing"], 0, "Lindungi data pribadi."],
        ["Salinan data cadangan agar data tidak hilang disebut …", ["backup", "malware", "spam", "cookie"], 0, "Backup."]
      ]
    },
    "ai": {
      pts: [
        "<b>Jenis machine learning:</b> supervised learning (data latih berlabel, misalnya foto kucing diberi label “kucing”) dan unsupervised learning (mencari pola sendiri tanpa label).",
        "<b>Generative AI:</b> AI yang membuat teks, gambar, atau suara baru berdasarkan pola dari data latih."
      ],
      ex2: { q: "Aplikasi pengenal sampah dilatih hanya dengan foto botol plastik bening. Apa yang mungkin terjadi saat aplikasi itu melihat botol plastik berwarna hijau?", a: "Aplikasi bisa gagal mengenalinya sebagai botol plastik karena data latihnya tidak beragam. Ini contoh bias data. Solusinya: tambahkan data latih yang mencakup berbagai warna, bentuk, dan kondisi cahaya." },
      q: [
        ["Melatih AI dengan foto yang sudah diberi label “kucing” dan “anjing” termasuk …", ["supervised learning", "unsupervised learning", "hardware learning", "manual coding"], 0, "Data berlabel."],
        ["AI yang dapat membuat gambar baru dari perintah teks disebut …", ["generative AI", "kalkulator", "spreadsheet", "antivirus"], 0, "Generative AI."],
        ["Kumpulan data yang dipakai untuk mengajari AI disebut data …", ["latih", "sampah", "cadangan", "terhapus"], 0, "Training data."],
        ["Jawaban chatbot AI sebaiknya …", ["dicek ulang dengan sumber terpercaya", "langsung dipercaya", "disalin untuk tugas tanpa diperiksa", "selalu diabaikan"], 0, "AI bisa keliru."],
        ["Contoh pemanfaatan AI di bidang kesehatan adalah …", ["membantu membaca hasil rontgen", "menggantikan semua dokter", "menjual obat tanpa resep", "menghapus rekam medis"], 0, "Membantu diagnosis."]
      ]
    }
  },
  add: [
    {
      id: "berpikir-komputasional", t: "Berpikir Komputasional", s: 1,
      sum: "Berpikir komputasional adalah cara memecahkan masalah seperti cara kerja komputer: masalah besar dipecah, polanya dicari, detail yang tidak penting diabaikan, lalu dibuat langkah penyelesaian yang jelas.\nKemampuan ini tidak hanya untuk pemrograman. Kamu bisa memakainya untuk menyusun jadwal belajar, mencari rute tercepat, atau mengerjakan soal tantangan Bebras yang sering dipakai di pelajaran Informatika.",
      pts: [
        "<b>Dekomposisi:</b> memecah masalah besar menjadi bagian kecil yang lebih mudah diselesaikan.",
        "<b>Pengenalan pola:</b> mencari kesamaan atau keteraturan antarbagian masalah.",
        "<b>Abstraksi:</b> mengambil informasi penting dan mengabaikan detail yang tidak diperlukan.",
        "<b>Algoritma:</b> langkah penyelesaian yang runtut, jelas, dan berhingga.",
        "<b>Searching:</b> sequential search (memeriksa satu per satu) dan binary search (membagi dua data yang sudah urut).",
        "<b>Sorting:</b> mengurutkan data, misalnya bubble sort yang menukar dua data bersebelahan berulang kali."
      ],
      ex: { q: "Kamu mencari angka 37 dalam data terurut 5, 12, 18, 23, 30, 37, 41, 50 dengan binary search. Jelaskan langkahnya.", a: "Ambil data tengah, yaitu 23 (data ke-4). Karena 37 > 23, buang bagian kiri sehingga tersisa 30, 37, 41, 50. Ambil data tengahnya, yaitu 37 (data ke-2 dari sisa). Angka ditemukan pada langkah kedua. Binary search jauh lebih cepat daripada memeriksa satu per satu, asalkan datanya sudah urut." },
      tip: "Kalau soal Bebras terasa rumit, lakukan dekomposisi: tulis apa yang diketahui dan apa yang ditanya, lalu coba kasus kecil dulu sebelum kasus besar.",
      q: [
        ["Memecah masalah besar menjadi bagian-bagian kecil disebut …", ["dekomposisi", "abstraksi", "algoritma", "pengenalan pola"], 0, "Dekomposisi."],
        ["Mengabaikan detail yang tidak penting untuk fokus pada inti masalah disebut …", ["abstraksi", "dekomposisi", "sorting", "debugging"], 0, "Abstraksi."],
        ["Syarat agar binary search bisa dipakai adalah data harus …", ["sudah terurut", "berjumlah ganjil", "berupa teks", "kurang dari 10"], 0, "Data terurut."],
        ["Data 8, 3, 5 diurutkan naik dengan bubble sort. Setelah satu putaran penuh, susunannya …", ["3, 5, 8", "8, 3, 5", "3, 8, 5", "5, 3, 8"], 0, "8 dan 3 ditukar, lalu 8 dan 5 ditukar."],
        ["Langkah-langkah runtut untuk menyelesaikan masalah disebut …", ["algoritma", "hardware", "database", "browser"], 0, "Algoritma."],
        ["Dengan sequential search, paling banyak berapa kali pemeriksaan untuk mencari satu angka di antara 50 data?", ["50", "25", "6", "1"], 0, "Kemungkinan terburuk angka ada di paling akhir."],
        ["Data terurut berjumlah 16 dibagi dua terus-menerus (16 → 8 → …) sampai tersisa 1 data. Banyak pembagian yang diperlukan adalah …", ["4", "16", "8", "2"], 0, "16 → 8 → 4 → 2 → 1."],
        ["Menyadari bahwa membuat nasi goreng dan mi goreng sama-sama diawali dengan menumis bumbu adalah contoh …", ["pengenalan pola", "dekomposisi", "abstraksi", "debugging"], 0, "Mencari kesamaan."],
        ["Peta jalur kereta yang hanya menampilkan nama stasiun dan garis penghubung adalah contoh …", ["abstraksi", "dekomposisi", "sorting", "enkripsi"], 0, "Detail bangunan diabaikan."],
        ["Menemukan dan memperbaiki kesalahan dalam algoritma atau program disebut …", ["debugging", "compiling", "hacking", "downloading"], 0, "Debugging."]
      ]
    },
    {
      id: "sistem-komputer", t: "Sistem Komputer dan Bilangan Biner", s: 1,
      sum: "Komputer bekerja lewat kerja sama perangkat keras (hardware), perangkat lunak (software), dan pengguna (brainware). Ketiganya harus ada supaya komputer bisa dipakai.\nDi dalam komputer, semua data disimpan sebagai bilangan biner, yaitu kombinasi angka 0 dan 1. Huruf, gambar, sampai video yang kamu lihat di layar sebenarnya adalah deretan bit.",
      pts: [
        "<b>Siklus kerja komputer:</b> input → proses → output, dengan penyimpanan (storage) sebagai pendukung.",
        "<b>Perangkat input:</b> keyboard, mouse, mikrofon, scanner. <b>Output:</b> monitor, printer, speaker. <b>Pemroses:</b> CPU (prosesor).",
        "<b>Memori:</b> RAM menyimpan data sementara saat komputer menyala dan hilang saat dimatikan. SSD dan hard disk menyimpan data secara permanen.",
        "<b>Sistem operasi:</b> perangkat lunak yang mengatur hardware dan aplikasi, contohnya Windows, Linux, macOS, Android, iOS.",
        "<b>Bilangan biner:</b> basis 2. Nilai tiap posisi dari kanan: 1, 2, 4, 8, 16, 32, … Contoh 1011₂ = 8 + 0 + 2 + 1 = 11.",
        "<b>Satuan data:</b> 1 byte = 8 bit, 1 KB = 1.024 byte, 1 MB = 1.024 KB, 1 GB = 1.024 MB."
      ],
      ex: { q: "Ubahlah bilangan desimal 13 ke bilangan biner.", a: "Bagi 13 dengan 2 berulang kali dan catat sisanya: 13 : 2 = 6 sisa 1, 6 : 2 = 3 sisa 0, 3 : 2 = 1 sisa 1, 1 : 2 = 0 sisa 1. Baca sisanya dari bawah ke atas: 1101. Cek: 8 + 4 + 0 + 1 = 13. Jadi 13 = 1101₂." },
      tip: "Untuk mengubah biner ke desimal, tulis nilai posisi 8-4-2-1 di atas tiap digit, lalu jumlahkan nilai posisi yang digitnya 1.",
      q: [
        ["Perangkat yang berfungsi sebagai otak pemrosesan komputer adalah …", ["CPU", "monitor", "keyboard", "speaker"], 0, "Central Processing Unit."],
        ["Contoh perangkat output adalah …", ["printer", "mouse", "scanner", "mikrofon"], 0, "Menghasilkan cetakan."],
        ["Memori yang datanya hilang saat komputer dimatikan adalah …", ["RAM", "SSD", "hard disk", "flashdisk"], 0, "RAM bersifat sementara."],
        ["Bilangan biner 1011 sama dengan bilangan desimal …", ["11", "13", "9", "1011"], 0, "8 + 0 + 2 + 1."],
        ["Bilangan desimal 6 dalam biner adalah …", ["110", "101", "111", "011"], 0, "4 + 2 + 0."],
        ["1 byte terdiri atas …", ["8 bit", "2 bit", "10 bit", "1.024 bit"], 0, "8 bit."],
        ["Contoh sistem operasi untuk ponsel adalah …", ["Android", "Microsoft Word", "Google Chrome", "Photoshop"], 0, "Yang lain adalah aplikasi."],
        ["Manusia yang mengoperasikan komputer disebut …", ["brainware", "hardware", "software", "firmware"], 0, "Brainware."],
        ["File berukuran 3 MB sama dengan … KB.", ["3.072", "3.000", "300", "30.720"], 0, "3 × 1.024."],
        ["Bilangan biner 11111 sama dengan desimal …", ["31", "32", "15", "63"], 0, "16 + 8 + 4 + 2 + 1."]
      ]
    },
    {
      id: "jaringan-internet", t: "Jaringan Komputer dan Internet", s: 2,
      sum: "Saat kamu mengirim pesan ke teman, pesan itu berpindah lewat jaringan komputer yang menghubungkan jutaan perangkat di seluruh dunia. Kumpulan jaringan raksasa itu disebut internet.\nDi bab ini kamu mengenal jenis jaringan, perangkat yang dipakai, cara data dikirim, dan cara menjaga keamanan saat terhubung ke internet.",
      pts: [
        "<b>Jenis jaringan menurut jangkauan:</b> PAN (pribadi, misalnya Bluetooth), LAN (satu gedung), MAN (satu kota), WAN (antarkota hingga antarnegara, contohnya internet).",
        "<b>Perangkat jaringan:</b> router (menghubungkan jaringan dan mengarahkan data), switch (menghubungkan perangkat dalam LAN), modem (mengubah sinyal), access point (pemancar Wi-Fi).",
        "<b>Alamat IP:</b> alamat unik tiap perangkat di jaringan, misalnya 192.168.1.10. <b>DNS</b> menerjemahkan nama situs menjadi alamat IP.",
        "<b>Paket data:</b> data dipecah menjadi paket kecil, dikirim lewat berbagai jalur, lalu disusun ulang di tujuan.",
        "<b>Topologi:</b> bus (satu kabel utama), star (terpusat pada switch), ring (melingkar), mesh (saling terhubung).",
        "<b>Keamanan:</b> hindari login akun penting di Wi-Fi publik dan pastikan situs memakai HTTPS (ikon gembok)."
      ],
      ex: { q: "Mengapa jaringan komputer di laboratorium sekolah umumnya memakai topologi star?", a: "Pada topologi star, semua komputer terhubung ke satu switch pusat. Jika kabel satu komputer rusak, komputer lain tetap bekerja dan kerusakannya mudah dicari. Kekurangannya, jika switch pusat rusak, seluruh jaringan terputus." },
      tip: "Ingat urutan jangkauan dari kecil ke besar: PAN, LAN, MAN, WAN. Router mengarahkan data antarjaringan, switch menghubungkan perangkat dalam satu jaringan.",
      q: [
        ["Jaringan komputer dalam satu gedung sekolah disebut …", ["LAN", "WAN", "MAN", "PAN"], 0, "Local Area Network."],
        ["Internet termasuk jenis jaringan …", ["WAN", "LAN", "PAN", "MAN"], 0, "Jangkauan seluruh dunia."],
        ["Perangkat yang mengarahkan paket data antarjaringan adalah …", ["router", "printer", "monitor", "keyboard"], 0, "Router."],
        ["Layanan yang menerjemahkan nama situs menjadi alamat IP adalah …", ["DNS", "HTML", "USB", "RAM"], 0, "Domain Name System."],
        ["Topologi yang semua komputernya terhubung ke satu perangkat pusat adalah topologi …", ["star", "bus", "ring", "mesh"], 0, "Star."],
        ["Tanda situs web memakai koneksi aman adalah …", ["alamatnya diawali https dan ada ikon gembok", "banyak iklan", "warnanya cerah", "alamatnya sangat panjang"], 0, "HTTPS terenkripsi."],
        ["Mengirim file dari ponsel ke ponsel lain lewat Bluetooth termasuk jaringan …", ["PAN", "WAN", "MAN", "LAN kabel"], 0, "Jangkauan pribadi."],
        ["Contoh alamat IP dengan format yang benar adalah …", ["192.168.1.10", "www.sekolah.sch.id", "theo@mail.com", "C:/data"], 0, "Empat angka dipisah titik."],
        ["Kelemahan topologi bus adalah …", ["jika kabel utama putus, seluruh jaringan terganggu", "membutuhkan switch pusat", "sangat mahal untuk dua komputer", "tidak bisa mengirim data"], 0, "Bergantung pada satu kabel."],
        ["Saat memakai Wi-Fi publik di kafe, sebaiknya kamu …", ["tidak login ke akun bank atau akun penting", "membagikan kata sandi Wi-Fi rumah", "mematikan pembaruan keamanan", "mengunduh file dari sumber tidak dikenal"], 0, "Wi-Fi publik rawan disadap."]
      ]
    },
    {
      id: "analisis-data", t: "Analisis Data dengan Spreadsheet", s: 2,
      sum: "Data nilai ulangan, jumlah pengunjung perpustakaan, atau pengeluaran uang jajan bisa diolah dengan aplikasi lembar kerja (spreadsheet) seperti Microsoft Excel atau Google Sheets.\nDengan rumus dan grafik, kamu bisa menemukan informasi dari data dengan cepat, misalnya siapa yang nilainya tertinggi atau bulan mana pengeluaran paling besar. Kemampuan ini menghubungkan Informatika dengan Matematika.",
      pts: [
        "<b>Sel:</b> pertemuan kolom (huruf) dan baris (angka), misalnya B3. <b>Range:</b> kumpulan sel, misalnya A1:A10.",
        "<b>Rumus dasar:</b> =SUM (jumlah), =AVERAGE (rata-rata), =MAX (terbesar), =MIN (terkecil), =COUNT (banyak sel berisi angka).",
        "<b>Fungsi IF:</b> =IF(B2>=75; \"Tuntas\"; \"Remedial\") memberi hasil sesuai syarat. Pemisahnya bisa koma atau titik koma, tergantung pengaturan bahasa aplikasi.",
        "<b>Sort dan filter:</b> mengurutkan data dan menampilkan data yang memenuhi syarat saja.",
        "<b>Grafik:</b> diagram batang untuk membandingkan, diagram garis untuk perubahan dari waktu ke waktu, diagram lingkaran untuk persentase bagian dari keseluruhan.",
        "<b>Alamat absolut:</b> tanda $ seperti $B$1 membuat alamat sel tidak berubah saat rumus disalin."
      ],
      ex: { q: "Nilai 5 siswa ada di sel C2 sampai C6. Tuliskan rumus untuk mencari rata-rata, nilai tertinggi, dan status siswa pertama (KKM 75).", a: "Rata-rata: =AVERAGE(C2:C6). Nilai tertinggi: =MAX(C2:C6). Status siswa pertama: =IF(C2>=75; \"Tuntas\"; \"Remedial\"). Rumus IF ini bisa disalin ke bawah sehingga C2 otomatis berubah menjadi C3, C4, dan seterusnya." },
      tip: "Setiap rumus spreadsheet harus diawali tanda sama dengan (=). Tanpa tanda itu, aplikasi menganggap isinya teks biasa.",
      q: [
        ["Rumus untuk menjumlahkan sel A1 sampai A5 adalah …", ["=SUM(A1:A5)", "=AVERAGE(A1:A5)", "=MAX(A1:A5)", "SUM A1-A5"], 0, "SUM."],
        ["Fungsi untuk mencari nilai terkecil adalah …", ["MIN", "MAX", "SUM", "COUNT"], 0, "MIN."],
        ["Pertemuan kolom C dan baris 4 disebut sel …", ["C4", "4C", "C:4", "CD4"], 0, "Huruf kolom lalu angka baris."],
        ["Sel A1 = 10, A2 = 20, A3 = 30. Hasil =AVERAGE(A1:A3) adalah …", ["20", "60", "30", "10"], 0, "60 : 3."],
        ["=IF(B2>=75; \"Tuntas\"; \"Remedial\") dengan B2 = 70 menghasilkan …", ["Remedial", "Tuntas", "70", "75"], 0, "70 kurang dari 75."],
        ["Grafik yang paling tepat untuk menampilkan perubahan suhu setiap hari selama sebulan adalah …", ["diagram garis", "diagram lingkaran", "tabel kosong", "peta"], 0, "Perubahan waktu."],
        ["Grafik yang paling tepat untuk menampilkan persentase pilihan ekstrakurikuler siswa adalah …", ["diagram lingkaran", "diagram garis", "diagram pencar", "grafik suhu"], 0, "Bagian dari keseluruhan."],
        ["Fitur untuk menampilkan hanya data yang memenuhi syarat tertentu adalah …", ["filter", "merge", "print", "zoom"], 0, "Filter."],
        ["Tanda $ pada $B$1 berfungsi agar …", ["alamat sel tidak berubah saat rumus disalin", "nilai menjadi mata uang dolar", "sel terkunci dari pengetikan", "sel berwarna hijau"], 0, "Alamat absolut."],
        ["Setiap rumus dalam spreadsheet diawali dengan tanda …", ["=", "#", "@", "&"], 0, "Tanda sama dengan."]
      ]
    }
  ],
  order: ["berpikir-komputasional", "sistem-komputer", "struktur-data", "python", "jaringan-internet", "analisis-data", "privasi-data", "ai"]
});

// ================= PAI =================
EXT(9, "pai", {
  more: {
    "hari-akhir": {
      pts: [
        "<b>Tanda kiamat kubra:</b> munculnya Dajal, turunnya Nabi Isa a.s., keluarnya Yakjuj dan Makjuj, serta matahari terbit dari barat.",
        "<b>Pencatat amal:</b> malaikat Raqib mencatat amal baik dan Atid mencatat amal buruk. Semua catatan itu dibuka saat hisab."
      ],
      ex2: { q: "Bagaimana iman kepada hari akhir memengaruhi perilaku seorang pelajar saat ujian?", a: "Pelajar yang yakin setiap perbuatan akan dihisab tidak akan menyontek walaupun tidak ada pengawas, karena ia tahu malaikat Raqib dan Atid mencatat semuanya. Ia juga belajar sungguh-sungguh sebagai bentuk tanggung jawab, lalu menerima hasilnya dengan ikhlas." },
      q: [
        ["Hari ketika manusia dibangkitkan dari kubur disebut yaumul …", ["ba’ats", "mizan", "hisab", "jaza’"], 0, "Ba’ats = kebangkitan."],
        ["Salah satu tanda kiamat kubra adalah …", ["matahari terbit dari barat", "gempa kecil", "hujan deras", "kematian seseorang"], 0, "Tanda besar menjelang kiamat."],
        ["Malaikat yang mencatat amal baik adalah …", ["Raqib", "Atid", "Munkar", "Malik"], 0, "Raqib."],
        ["Tempat dikumpulkannya seluruh manusia setelah dibangkitkan disebut …", ["Padang Mahsyar", "alam barzakh", "shirath", "Baitul Makmur"], 0, "Yaumul hasyr."],
        ["Sikap yang mencerminkan iman kepada hari akhir adalah …", ["jujur walaupun tidak ada yang melihat", "malas beribadah", "sombong saat berhasil", "menunda tobat"], 0, "Sadar diawasi Allah."]
      ]
    },
    "qada-qadar": {
      pts: [
        "<b>Sunatullah:</b> hukum alam yang ditetapkan Allah, misalnya air mengalir ke tempat rendah dan orang yang rajin belajar menjadi paham.",
        "<b>Contoh sikap:</b> setelah gagal ujian, mengevaluasi cara belajar lalu mencoba lagi, bukan menyalahkan takdir."
      ],
      ex2: { q: "Dua siswa sama-sama ingin lulus dengan nilai baik. Siswa A belajar rutin dan berdoa, siswa B hanya berdoa tanpa belajar. Bagaimana pandangan Islam?", a: "Islam mengajarkan ikhtiar, doa, lalu tawakal. Siswa A sudah menjalankan ketiganya, sehingga sikapnya sesuai dengan iman kepada qada dan qadar. Siswa B keliru karena tawakal tanpa ikhtiar bukan sikap yang benar. Nilai ujian termasuk takdir muallaq yang bisa dipengaruhi usaha." },
      q: [
        ["Hukum alam yang ditetapkan Allah, seperti api membakar dan air membasahi, disebut …", ["sunatullah", "takdir mubram", "ikhtiar", "qanaah"], 0, "Sunatullah."],
        ["Kelahiran seseorang di keluarga tertentu termasuk takdir …", ["mubram", "muallaq", "ikhtiari", "sementara"], 0, "Tidak bisa diubah."],
        ["Urutan sikap yang benar dalam menghadapi takdir adalah …", ["ikhtiar – doa – tawakal", "tawakal – diam – berharap", "doa – menunggu – menyerah", "mengeluh – doa – tawakal"], 0, "Usaha dulu."],
        ["Sikap yang tepat setelah gagal dalam lomba adalah …", ["mengevaluasi diri dan berlatih lagi", "menyalahkan takdir", "berhenti mencoba", "menyalahkan juri"], 0, "Tidak putus asa."],
        ["Qadar berarti …", ["perwujudan ketetapan Allah dalam kenyataan", "usaha manusia", "doa yang dikabulkan", "keputusan manusia"], 0, "Qadar."]
      ]
    },
    "zakat": {
      pts: [
        "<b>Zakat pertanian:</b> 10% jika diairi hujan atau sungai, 5% jika diairi dengan biaya. Nisabnya sekitar 653 kg gabah.",
        "<b>Syarat wajib zakat mal:</b> Islam, merdeka, harta milik penuh, mencapai nisab, dan sudah haul (untuk harta tertentu seperti emas dan tabungan)."
      ],
      ex2: { q: "Pak Ahmad memiliki tabungan emas 100 gram selama satu tahun penuh. Berapa zakat yang harus dikeluarkannya?", a: "Nisab emas 85 gram dan emasnya sudah tersimpan satu tahun (haul), jadi wajib zakat. Kadarnya 2,5%. Zakat = 2,5% × 100 gram = 2,5 gram emas, atau uang yang senilai dengan 2,5 gram emas." },
      q: [
        ["Seseorang memiliki emas 200 gram selama setahun. Zakatnya sebanyak …", ["5 gram", "2,5 gram", "20 gram", "50 gram"], 0, "2,5% × 200 = 5 gram."],
        ["Kadar zakat hasil pertanian yang diairi air hujan adalah …", ["10%", "5%", "2,5%", "20%"], 0, "Tanpa biaya pengairan."],
        ["Orang yang berutang dan kesulitan membayarnya termasuk golongan penerima zakat …", ["garim", "fakir", "amil", "ibnu sabil"], 0, "Garim."],
        ["Musafir yang kehabisan bekal dalam perjalanan termasuk golongan …", ["ibnu sabil", "mualaf", "riqab", "fisabilillah"], 0, "Ibnu sabil."],
        ["Batas minimal harta yang wajib dizakati disebut …", ["nisab", "haul", "kadar", "mustahik"], 0, "Nisab."]
      ]
    },
    "islam-nusantara-9": {
      pts: [
        "<b>Teori masuknya Islam:</b> Gujarat (India), Persia, Mekah (Arab), dan Tiongkok.",
        "<b>Kerajaan Islam:</b> Samudra Pasai (salah satu yang tertua, di Aceh), Demak (pertama di Jawa), Mataram Islam, Ternate dan Tidore, serta Gowa-Tallo."
      ],
      ex2: { q: "Bagaimana Sunan Kalijaga memakai budaya untuk berdakwah?", a: "Sunan Kalijaga memakai wayang kulit dan gamelan yang sudah disukai masyarakat Jawa. Cerita wayang diisi nilai-nilai Islam, dan ia menciptakan tembang seperti Lir-ilir. Cara ini membuat masyarakat tertarik tanpa merasa dipaksa meninggalkan budayanya." },
      q: [
        ["Kerajaan Islam pertama di Pulau Jawa adalah …", ["Demak", "Mataram", "Banten", "Pajang"], 0, "Didirikan Raden Patah."],
        ["Wali Songo yang berdakwah dengan wayang kulit dan tembang Lir-ilir adalah …", ["Sunan Kalijaga", "Sunan Ampel", "Sunan Giri", "Sunan Drajat"], 0, "Sunan Kalijaga."],
        ["Salah satu kerajaan Islam tertua di Nusantara yang berada di Aceh adalah …", ["Samudra Pasai", "Demak", "Gowa-Tallo", "Ternate"], 0, "Abad ke-13."],
        ["Teori yang menyatakan Islam dibawa pedagang dari India disebut teori …", ["Gujarat", "Mekah", "Persia", "Tiongkok"], 0, "Gujarat."],
        ["Menara Masjid Kudus yang mirip bangunan candi merupakan contoh …", ["akulturasi budaya", "asimilasi paksa", "budaya asing murni", "bangunan modern"], 0, "Perpaduan budaya Hindu-Jawa dan Islam."]
      ]
    }
  },
  add: [
    {
      id: "optimis-ikhtiar", t: "Optimis, Ikhtiar, dan Tawakal", s: 1,
      sum: "Islam mengajarkan kamu untuk tidak mudah putus asa. Allah Maha Pengampun dan selalu membuka jalan bagi hamba-Nya yang mau berusaha.\nTiga sikap ini saling berkaitan: optimis (yakin akan pertolongan Allah), ikhtiar (berusaha sungguh-sungguh), dan tawakal (berserah diri setelah berusaha). Dalilnya antara lain Q.S. Az-Zumar: 53, Q.S. An-Najm: 39–42, dan Q.S. Ali Imran: 159.",
      pts: [
        "<b>Optimis:</b> yakin bahwa hasil baik bisa dicapai. Q.S. Az-Zumar: 53 melarang berputus asa dari rahmat Allah.",
        "<b>Ikhtiar:</b> usaha maksimal untuk mencapai tujuan. Q.S. An-Najm: 39 menegaskan manusia hanya memperoleh apa yang telah diusahakannya.",
        "<b>Tawakal:</b> menyerahkan hasil kepada Allah setelah berusaha. Q.S. Ali Imran: 159 juga memerintahkan bermusyawarah sebelum mengambil keputusan.",
        "<b>Lawan sikap:</b> pesimis (mudah putus asa), malas, dan tawakal tanpa usaha.",
        "<b>Hikmah:</b> hati tenang, tidak stres berlebihan, dan tidak sombong saat berhasil.",
        "<b>Tajwid:</b> pada lafal <i>lā taqnaṭū</i> (Q.S. Az-Zumar: 53), bacaan “lā” adalah mad thabi’i yang dibaca panjang dua harakat."
      ],
      ex: { q: "Theo ingin masuk SMA negeri favorit. Bagaimana menerapkan optimis, ikhtiar, dan tawakal?", a: "Optimis: Theo yakin bisa diterima dan tidak minder. Ikhtiar: belajar rutin, mengerjakan latihan soal, ikut try-out, dan menjaga kesehatan. Tawakal: setelah semua usaha dilakukan, ia berdoa dan menerima hasilnya dengan lapang dada. Kalau belum berhasil, ia tidak putus asa dan memilih sekolah lain yang baik." },
      tip: "Pasangkan dalil dengan isinya: Az-Zumar: 53 tentang larangan putus asa, An-Najm: 39 tentang hasil sesuai usaha, Ali Imran: 159 tentang musyawarah dan tawakal.",
      q: [
        ["Ayat yang melarang berputus asa dari rahmat Allah adalah Q.S. …", ["Az-Zumar: 53", "An-Najm: 39", "Ali Imran: 159", "Al-Baqarah: 183"], 0, "Az-Zumar: 53."],
        ["Q.S. An-Najm: 39 menjelaskan bahwa manusia hanya memperoleh …", ["apa yang telah diusahakannya", "apa yang diinginkannya", "harta warisan", "hadiah dari orang lain"], 0, "Hasil sesuai usaha."],
        ["Berserah diri kepada Allah setelah berusaha maksimal disebut …", ["tawakal", "ikhtiar", "optimis", "qanaah"], 0, "Tawakal."],
        ["Q.S. Ali Imran: 159 berisi perintah bermusyawarah, lalu …", ["bertawakal kepada Allah", "berpuasa", "berzakat", "berhaji"], 0, "Musyawarah lalu tawakal."],
        ["Lawan dari sikap optimis adalah …", ["pesimis", "tawakal", "ikhtiar", "sabar"], 0, "Pesimis."],
        ["Contoh ikhtiar seorang pelajar sebelum ujian adalah …", ["belajar dan berlatih soal secara rutin", "hanya berdoa tanpa belajar", "menyontek", "begadang bermain gim"], 0, "Usaha nyata."],
        ["Sikap tawakal yang keliru adalah …", ["berserah diri tanpa berusaha sama sekali", "berdoa setelah belajar", "menerima hasil dengan ikhlas", "tetap tenang setelah berusaha"], 0, "Tawakal harus didahului ikhtiar."],
        ["Hikmah sikap optimis adalah …", ["semangat berusaha dan tidak mudah menyerah", "mudah putus asa", "menjadi sombong", "menjadi malas"], 0, "Semangat."],
        ["Bacaan “lā” pada lafal lā taqnaṭū dibaca dua harakat karena hukum …", ["mad thabi’i", "idgam bigunah", "ikhfa", "mad lazim"], 0, "Mad asli."],
        ["Pedagang yang tokonya sepi lalu memperbaiki pelayanan dan berpromosi menunjukkan sikap …", ["ikhtiar", "pesimis", "putus asa", "tawakal tanpa usaha"], 0, "Berusaha."]
      ]
    },
    {
      id: "haji-umrah", t: "Haji dan Umrah", s: 2,
      sum: "Haji adalah rukun Islam kelima, yaitu berkunjung ke Baitullah di Mekah pada bulan Zulhijah untuk melaksanakan ibadah tertentu. Haji wajib sekali seumur hidup bagi muslim yang mampu (istitha’ah), sesuai Q.S. Ali Imran: 97.\nUmrah juga berkunjung ke Baitullah, tetapi bisa dilakukan kapan saja dan tidak ada wukuf di Arafah. Memahami rukun dan wajib keduanya penting karena akibat meninggalkannya berbeda.",
      pts: [
        "<b>Rukun haji:</b> ihram, wukuf di Arafah (9 Zulhijah), tawaf ifadah, sa’i, tahalul (mencukur rambut), dan tertib. Jika ditinggalkan, hajinya tidak sah.",
        "<b>Wajib haji:</b> ihram dari miqat, mabit di Muzdalifah, mabit di Mina, melontar jumrah, tawaf wada’, dan menjauhi larangan ihram. Jika ditinggalkan, haji tetap sah tetapi wajib membayar dam (denda).",
        "<b>Rukun umrah:</b> ihram, tawaf, sa’i, tahalul, dan tertib.",
        "<b>Cara pelaksanaan:</b> tamattu’ (umrah dulu, lalu haji, wajib dam), ifrad (haji dulu, lalu umrah), qiran (haji dan umrah bersamaan, wajib dam).",
        "<b>Larangan ihram:</b> memakai wewangian, memotong rambut dan kuku, berburu, dan bertengkar. Laki-laki dilarang memakai pakaian berjahit dan penutup kepala.",
        "<b>Hikmah:</b> melatih kesabaran, mempererat persaudaraan umat Islam sedunia, dan mengingatkan bahwa semua manusia sama di hadapan Allah."
      ],
      ex: { q: "Seorang jemaah haji tidak sempat mabit di Muzdalifah karena sakit. Bagaimana status hajinya?", a: "Mabit di Muzdalifah termasuk wajib haji, bukan rukun haji. Karena itu hajinya tetap sah, tetapi ia wajib membayar dam, misalnya menyembelih seekor kambing. Berbeda jika yang ditinggalkan rukun, seperti wukuf di Arafah, maka hajinya tidak sah." },
      tip: "Rukun ditinggalkan berarti tidak sah, wajib ditinggalkan berarti sah tetapi membayar dam. Wukuf di Arafah hanya ada pada haji, tidak ada pada umrah.",
      q: [
        ["Haji merupakan rukun Islam yang ke …", ["5", "4", "3", "2"], 0, "Kelima."],
        ["Wukuf di Arafah dilaksanakan pada tanggal …", ["9 Zulhijah", "10 Zulhijah", "1 Syawal", "27 Ramadan"], 0, "Hari Arafah."],
        ["Berjalan atau berlari kecil antara Bukit Safa dan Marwah disebut …", ["sa’i", "tawaf", "wukuf", "tahalul"], 0, "Sa’i, tujuh kali."],
        ["Mengelilingi Ka’bah sebanyak tujuh kali disebut …", ["tawaf", "sa’i", "mabit", "miqat"], 0, "Tawaf."],
        ["Jika wajib haji ditinggalkan, maka …", ["haji tetap sah tetapi wajib membayar dam", "hajinya tidak sah", "harus mengulang tahun depan", "tidak ada akibatnya"], 0, "Dam."],
        ["Melaksanakan umrah lebih dulu, kemudian haji, disebut haji …", ["tamattu’", "ifrad", "qiran", "mabrur"], 0, "Tamattu’."],
        ["Yang membedakan haji dengan umrah adalah adanya …", ["wukuf di Arafah", "ihram", "tawaf", "sa’i"], 0, "Umrah tidak ada wukuf."],
        ["Mencukur atau memotong sebagian rambut sebagai tanda selesainya ihram disebut …", ["tahalul", "miqat", "mabit", "jumrah"], 0, "Tahalul."],
        ["Dalil kewajiban haji bagi yang mampu terdapat dalam Q.S. …", ["Ali Imran: 97", "Al-Baqarah: 183", "Al-Kautsar: 1–3", "At-Taubah: 60"], 0, "Ali Imran: 97."],
        ["Hal yang dilarang saat berihram adalah …", ["memakai wewangian", "membaca talbiah", "berdoa", "berzikir"], 0, "Larangan ihram."]
      ]
    },
    {
      id: "kurban-akikah", t: "Kurban dan Akikah", s: 2,
      sum: "Kurban adalah menyembelih hewan tertentu pada Hari Raya Iduladha dan hari tasyrik untuk mendekatkan diri kepada Allah. Ibadah ini meneladani keikhlasan Nabi Ibrahim a.s. dan Nabi Ismail a.s.\nAkikah adalah menyembelih hewan sebagai tanda syukur atas kelahiran anak. Keduanya hukumnya sunah muakkad dan sama-sama mengajarkan berbagi kepada sesama.",
      pts: [
        "<b>Waktu kurban:</b> 10 Zulhijah setelah salat Iduladha sampai akhir hari tasyrik (11, 12, 13 Zulhijah). Dalilnya Q.S. Al-Kautsar: 1–3.",
        "<b>Hewan kurban:</b> kambing atau domba untuk 1 orang, sapi atau unta untuk 7 orang. Hewan harus sehat, tidak cacat, dan cukup umur.",
        "<b>Umur minimal (pendapat yang umum dipakai):</b> domba 1 tahun, kambing 2 tahun, sapi atau kerbau 2 tahun, unta 5 tahun.",
        "<b>Akikah:</b> sunah dilaksanakan pada hari ketujuh kelahiran. Anak laki-laki 2 ekor kambing, anak perempuan 1 ekor kambing.",
        "<b>Pembagian daging:</b> daging kurban dibagikan mentah, sedangkan daging akikah disunahkan dibagikan dalam keadaan sudah dimasak.",
        "<b>Cara menyembelih:</b> membaca basmalah, menghadapkan hewan ke kiblat, memakai pisau tajam, dan memutus saluran napas, saluran makanan, serta dua urat leher."
      ],
      ex: { q: "Tujuh orang ingin berkurban bersama. Hewan apa yang bisa mereka pilih? Bagaimana jika ada sembilan orang?", a: "Tujuh orang bisa patungan untuk satu ekor sapi atau unta, karena satu sapi atau unta cukup untuk tujuh orang. Jika ada sembilan orang, mereka bisa membeli satu sapi untuk tujuh orang dan dua ekor kambing untuk dua orang sisanya, karena satu kambing hanya untuk satu orang." },
      tip: "Angka yang sering ditanyakan: kambing untuk 1 orang, sapi atau unta untuk 7 orang, akikah anak laki-laki 2 kambing dan anak perempuan 1 kambing, waktu akikah hari ketujuh.",
      q: [
        ["Seekor sapi dapat digunakan untuk kurban sebanyak … orang.", ["7", "1", "5", "10"], 0, "Tujuh orang."],
        ["Hari tasyrik jatuh pada tanggal …", ["11, 12, dan 13 Zulhijah", "1, 2, dan 3 Syawal", "8, 9, dan 10 Zulhijah", "10, 11, dan 12 Muharam"], 0, "Tiga hari setelah Iduladha."],
        ["Akikah untuk anak laki-laki disunahkan dengan …", ["2 ekor kambing", "1 ekor kambing", "1 ekor sapi", "3 ekor domba"], 0, "Dua kambing."],
        ["Akikah disunahkan pada hari ke … setelah kelahiran.", ["7", "3", "40", "14"], 0, "Hari ketujuh."],
        ["Dalil perintah berkurban terdapat dalam Q.S. …", ["Al-Kautsar: 1–3", "Al-Ikhlas: 1–4", "An-Nas: 1–6", "Al-Fil: 1–5"], 0, "Fasalli lirabbika wanhar."],
        ["Hukum berkurban bagi muslim yang mampu adalah …", ["sunah muakkad", "wajib", "mubah", "makruh"], 0, "Sangat dianjurkan."],
        ["Ibadah kurban meneladani kisah …", ["Nabi Ibrahim a.s. dan Nabi Ismail a.s.", "Nabi Musa a.s. dan Firaun", "Nabi Nuh a.s. dan bahteranya", "Nabi Yunus a.s. dan ikan besar"], 0, "Keikhlasan Nabi Ibrahim."],
        ["Daging akikah disunahkan dibagikan dalam keadaan …", ["sudah dimasak", "mentah", "dibekukan", "diasinkan"], 0, "Berbeda dengan kurban."],
        ["Bacaan yang diucapkan saat mulai menyembelih hewan adalah …", ["basmalah", "hamdalah", "istigfar", "tasbih"], 0, "Bismillah."],
        ["Hewan berikut yang tidak sah untuk kurban adalah …", ["kambing yang buta sebelah matanya", "sapi sehat yang cukup umur", "domba gemuk berumur 1 tahun", "unta berumur 5 tahun"], 0, "Hewan cacat tidak sah."]
      ]
    }
  ],
  order: ["optimis-ikhtiar", "hari-akhir", "qada-qadar", "zakat", "haji-umrah", "kurban-akikah", "islam-nusantara-9"]
});

// ================= SENI BUDAYA =================
EXT(9, "senbud", {
  more: {
    "seni-lukis": {
      pts: [
        "<b>Unsur seni rupa:</b> titik, garis, bidang, bentuk, warna, tekstur, dan ruang.",
        "<b>Prinsip seni rupa:</b> kesatuan, keseimbangan, irama, proporsi, dan pusat perhatian (center of interest)."
      ],
      ex2: { q: "Sebuah lukisan menampilkan pemandangan sawah dan gunung dengan warna dan bentuk yang sangat mirip aslinya. Termasuk aliran apa?", a: "Lukisan yang menggambarkan objek alam semirip mungkin dengan aslinya termasuk aliran naturalisme, misalnya karya Basuki Abdullah. Bedanya dengan realisme: realisme menekankan kenyataan hidup apa adanya dan sering bertema sosial, seperti kemiskinan." },
      q: [
        ["Lukisan pemandangan alam yang indah dan mirip aslinya termasuk aliran …", ["naturalisme", "kubisme", "abstrak", "ekspresionisme"], 0, "Seperti aslinya."],
        ["Aliran lukisan yang menyusun objek dalam bentuk-bentuk geometris adalah …", ["kubisme", "realisme", "romantisme", "naturalisme"], 0, "Kubus, kerucut, silinder."],
        ["Teknik melukis dengan cat tebal yang menutup warna di bawahnya disebut …", ["plakat", "aquarel", "pointilis", "arsir"], 0, "Plakat."],
        ["Prinsip seni rupa yang menunjukkan bagian paling menonjol dalam lukisan adalah …", ["pusat perhatian", "irama", "proporsi", "kesatuan"], 0, "Center of interest."],
        ["Cat yang cepat kering, dapat diencerkan dengan air, dan tahan air setelah kering adalah cat …", ["akrilik", "minyak", "lilin", "krayon"], 0, "Akrilik."],
        ["Pelukis yang dijuluki Bapak Seni Rupa Modern Indonesia adalah …", ["S. Sudjojono", "Raden Saleh", "Affandi", "Basuki Abdullah"], 0, "Sudjojono."]
      ]
    },
    "seni-grafis": {
      pts: [
        "<b>Alat cetak cukil:</b> pisau cukil untuk menoreh klise dan rol karet (brayer) untuk meratakan tinta.",
        "<b>Edisi cetak:</b> setiap hasil cetakan diberi nomor, misalnya 3/10 berarti cetakan ketiga dari sepuluh."
      ],
      ex2: { q: "Kelasmu ingin membuat 30 kaus dengan desain yang sama. Teknik grafis apa yang paling cocok dan mengapa?", a: "Teknik cetak saring (sablon). Desain dibuat pada screen satu kali, lalu tinta disapukan berulang untuk mencetak banyak kaus dengan hasil yang sama. Teknik ini cocok untuk media kain dan jumlah banyak." },
      q: [
        ["Alat untuk meratakan tinta pada klise cetak cukil adalah …", ["rol karet (brayer)", "kuas besar", "penggaris", "pensil"], 0, "Brayer."],
        ["Etsa termasuk teknik cetak …", ["dalam", "tinggi", "saring", "datar"], 0, "Bagian cekung menyimpan tinta."],
        ["Litografi termasuk teknik cetak …", ["datar", "tinggi", "dalam", "saring"], 0, "Cetak datar."],
        ["Nomor 5/20 di bawah karya grafis berarti …", ["cetakan ke-5 dari 20 cetakan", "harga 5 dari 20 ribu", "dibuat tanggal 5 bulan 20", "ukuran 5 × 20 cm"], 0, "Nomor edisi."],
        ["Bahan klise yang sering dipakai untuk cetak cukil di sekolah adalah …", ["papan kayu atau lembaran linoleum", "kertas tisu", "kain sutra", "plastik bening"], 0, "Woodcut dan linocut."],
        ["Kelebihan karya seni grafis seperti poster adalah …", ["dapat diperbanyak untuk menyebarkan informasi", "hanya bisa dibuat satu kali", "berbentuk tiga dimensi", "tidak memerlukan tinta"], 0, "Bisa dicetak berulang."]
      ]
    },
    "musik-populer": {
      pts: [
        "<b>Unsur musik:</b> melodi, irama (ritme), harmoni, tempo (cepat lambat), dan dinamika (keras lembut).",
        "<b>Musisi Indonesia:</b> Gesang (keroncong “Bengawan Solo”), Iwan Fals (balada), Koes Plus (pop), Slank (rock)."
      ],
      ex2: { q: "Sebuah lagu bertempo lambat, diiringi ukulele dan cello, dengan irama khas cak-cuk. Termasuk genre apa?", a: "Ciri itu menunjukkan musik keroncong. Ukulele cak dan cuk memberi irama khas, sedangkan cello dipetik untuk mengisi irama. Salah satu tokohnya Gesang dengan lagu Bengawan Solo." },
      q: [
        ["Lagu “Bengawan Solo” diciptakan oleh …", ["Gesang", "Rhoma Irama", "Iwan Fals", "Ismail Marzuki"], 0, "Gesang, 1940."],
        ["Unsur musik yang berkaitan dengan cepat lambatnya lagu adalah …", ["tempo", "dinamika", "harmoni", "melodi"], 0, "Tempo."],
        ["Unsur musik yang berkaitan dengan keras lembutnya lagu adalah …", ["dinamika", "tempo", "ritme", "timbre"], 0, "Dinamika."],
        ["Musik reggae berasal dari negara …", ["Jamaika", "Brasil", "Amerika Serikat", "India"], 0, "Jamaika."],
        ["Alat musik yang memberi irama khas “cak” dan “cuk” pada keroncong adalah …", ["ukulele", "drum", "saksofon", "biola"], 0, "Ukulele."],
        ["Genre musik Indonesia yang mendapat pengaruh musik Melayu, India, dan Arab adalah …", ["dangdut", "jazz", "rock", "blues"], 0, "Dangdut."]
      ]
    },
    "teater-modern": {
      pts: [
        "<b>Jenis naskah:</b> tragedi (berakhir sedih), komedi (lucu), tragikomedi (campuran), melodrama (sangat menyentuh perasaan).",
        "<b>Istilah:</b> dialog (percakapan dua tokoh atau lebih), monolog (bicara sendiri), prolog (pembuka), epilog (penutup)."
      ],
      ex2: { q: "Kelasmu akan mementaskan drama pendek. Sebutkan urutan kegiatan produksinya.", a: "Pertama, memilih naskah dan menentukan sutradara. Kedua, casting untuk memilih pemeran. Ketiga, latihan membaca naskah (reading), lalu latihan posisi dan gerak (blocking). Keempat, menyiapkan tata panggung, busana, rias, cahaya, dan suara. Kelima, gladi resik. Terakhir, pementasan dan evaluasi." },
      q: [
        ["Cerita drama yang berakhir dengan kesedihan disebut …", ["tragedi", "komedi", "tragikomedi", "parodi"], 0, "Tragedi."],
        ["Percakapan seorang tokoh dengan dirinya sendiri disebut …", ["monolog", "dialog", "prolog", "epilog"], 0, "Monolog."],
        ["Bagian pembuka dalam pementasan drama disebut …", ["prolog", "epilog", "klimaks", "resolusi"], 0, "Prolog."],
        ["Orang yang memimpin dan mengarahkan pementasan teater adalah …", ["sutradara", "penata rias", "penonton", "penjual tiket"], 0, "Sutradara."],
        ["Bengkel Teater didirikan oleh …", ["W.S. Rendra", "N. Riantiarno", "Teguh Karya", "Arifin C. Noer"], 0, "Rendra, 1967."],
        ["Fungsi tata cahaya dalam pementasan teater adalah …", ["memperjelas suasana dan fokus adegan", "menggantikan dialog", "mengurangi jumlah pemain", "mempercepat cerita"], 0, "Suasana dan fokus."]
      ]
    }
  },
  add: [
    {
      id: "seni-patung", t: "Seni Patung", s: 1,
      sum: "Seni patung adalah karya seni rupa tiga dimensi yang punya panjang, lebar, dan tinggi, sehingga bisa dilihat dari berbagai arah. Patung bisa dibuat dari batu, kayu, logam, tanah liat, atau bahan bekas.\nDi Indonesia, patung banyak dijumpai di candi, monumen kota, dan kerajinan daerah, seperti patung kayu Asmat dari Papua dan patung kayu Bali. Kamu juga bisa membuat patung sederhana dari sabun atau tanah liat.",
      pts: [
        "<b>Teknik pahat:</b> mengurangi bahan keras (kayu, batu) dengan pahat. Termasuk teknik subtraktif.",
        "<b>Teknik butsir:</b> membentuk bahan lunak (tanah liat, plastisin) dengan cara menambah atau mengurangi bahan.",
        "<b>Teknik cor (tuang):</b> menuang bahan cair (logam, semen, resin) ke dalam cetakan.",
        "<b>Teknik konstruksi (assembling):</b> menyusun dan merakit berbagai bahan menjadi satu karya.",
        "<b>Jenis menurut bentuk:</b> patung figuratif (menyerupai makhluk hidup) dan nonfiguratif atau abstrak.",
        "<b>Contoh karya:</b> patung Asmat (Papua), Patung Selamat Datang (Jakarta), dan Garuda Wisnu Kencana karya Nyoman Nuarta (Bali)."
      ],
      ex: { q: "Kamu ingin membuat patung kecil berbentuk kura-kura dari sabun batangan. Teknik apa yang dipakai dan bagaimana langkahnya?", a: "Teknik yang dipakai adalah pahat (subtraktif) karena sabun dikurangi sedikit demi sedikit. Langkahnya: gambar sketsa kura-kura di permukaan sabun, buang bagian besar di luar sketsa dengan pisau plastik, rapikan detail tempurung dan kaki dengan tusuk gigi, lalu haluskan permukaannya dengan jari yang sedikit basah." },
      tip: "Ingat pasangan bahan dan teknik: bahan keras dipahat, bahan lunak dibutsir, bahan cair dicor, bahan campuran dirakit.",
      q: [
        ["Karya seni rupa tiga dimensi yang dapat dilihat dari berbagai arah adalah …", ["patung", "lukisan", "poster", "foto"], 0, "Punya volume."],
        ["Teknik membuat patung dengan mengurangi bahan keras disebut teknik …", ["pahat", "butsir", "cor", "las"], 0, "Pahat."],
        ["Patung dari tanah liat dibuat dengan teknik …", ["butsir", "pahat", "cor", "anyam"], 0, "Bahan lunak."],
        ["Teknik menuang logam cair ke dalam cetakan disebut …", ["cor", "butsir", "pahat", "jahit"], 0, "Cor."],
        ["Patung Garuda Wisnu Kencana di Bali adalah karya …", ["Nyoman Nuarta", "Affandi", "Edhi Sunarso", "Raden Saleh"], 0, "Nyoman Nuarta."],
        ["Patung kayu khas suku Asmat berasal dari daerah …", ["Papua", "Bali", "Toraja", "Nias"], 0, "Papua selatan."],
        ["Patung yang bentuknya menyerupai manusia atau hewan disebut patung …", ["figuratif", "abstrak", "nonfiguratif", "dekoratif datar"], 0, "Figuratif."],
        ["Merakit potongan besi bekas menjadi patung robot menggunakan teknik …", ["konstruksi (assembling)", "butsir", "cor", "pahat kayu"], 0, "Merakit."],
        ["Alat utama untuk teknik pahat kayu adalah …", ["pahat dan palu kayu", "kuas dan cat air", "jarum dan benang", "rol karet"], 0, "Pahat."],
        ["Patung Selamat Datang di Bundaran HI Jakarta termasuk patung …", ["monumen", "religi", "mainan", "kerajinan dapur"], 0, "Patung peringatan kota."]
      ]
    },
    {
      id: "pameran", t: "Pameran Karya Seni Rupa", s: 1,
      sum: "Pameran adalah kegiatan memajang karya seni supaya bisa dilihat dan dinilai orang lain. Lewat pameran, karya yang kamu buat di kelas bisa diapresiasi oleh teman, guru, dan orang tua.\nPameran yang sukses butuh perencanaan: membentuk panitia, memilih karya, menata ruang, sampai mengevaluasi hasilnya. Di kelas 9, pameran sering menjadi tugas akhir Seni Budaya.",
      pts: [
        "<b>Tujuan pameran:</b> apresiasi karya, komunikasi gagasan seniman, promosi, dan penjualan (komersial).",
        "<b>Jenis menurut tempat:</b> ruang tertutup (galeri, kelas), ruang terbuka (taman, lapangan), dan virtual (daring).",
        "<b>Jenis menurut peserta:</b> pameran tunggal (satu seniman) dan pameran bersama (banyak seniman).",
        "<b>Kepanitiaan:</b> penanggung jawab, ketua, sekretaris, bendahara, seksi karya, dekorasi, publikasi, keamanan, dan dokumentasi.",
        "<b>Kurator:</b> orang yang memilih karya yang layak dipamerkan dan menyusun konsep pameran.",
        "<b>Tahapan:</b> perencanaan, persiapan (proposal, undangan, katalog), pelaksanaan, dan evaluasi (laporan pertanggungjawaban)."
      ],
      ex: { q: "Kelas 9F akan membuat pameran lukisan di aula. Apa saja tugas seksi publikasi?", a: "Seksi publikasi menyebarkan informasi pameran supaya banyak pengunjung datang. Tugasnya membuat poster dan pamflet, mengunggah informasi di media sosial sekolah, mengirim undangan kepada guru dan orang tua, serta membuat katalog berisi daftar karya dan keterangannya." },
      tip: "Bedakan peran: kurator memilih karya, seksi dekorasi menata ruangan, seksi publikasi menyebarkan informasi, seksi dokumentasi memotret dan merekam kegiatan.",
      q: [
        ["Orang yang bertugas menyeleksi karya yang layak dipamerkan disebut …", ["kurator", "kolektor", "penonton", "pedagang"], 0, "Kurator."],
        ["Pameran yang menampilkan karya satu orang seniman disebut pameran …", ["tunggal", "bersama", "keliling", "virtual"], 0, "Tunggal."],
        ["Buku kecil berisi daftar karya dan keterangannya dalam pameran disebut …", ["katalog", "proposal", "undangan", "kuitansi"], 0, "Katalog."],
        ["Pameran yang dilakukan melalui situs web atau media sosial disebut pameran …", ["virtual", "tunggal", "terbuka", "tertutup"], 0, "Daring."],
        ["Seksi yang bertugas membuat poster dan menyebarkan informasi pameran adalah seksi …", ["publikasi", "konsumsi", "keamanan", "dekorasi"], 0, "Publikasi."],
        ["Tahap akhir kegiatan pameran adalah …", ["evaluasi dan laporan", "membuat proposal", "memilih karya", "menyebar undangan"], 0, "Evaluasi."],
        ["Pameran yang bertujuan menjual karya seni disebut pameran …", ["komersial", "pendidikan", "sosial", "tunggal"], 0, "Komersial."],
        ["Dokumen berisi rencana kegiatan dan anggaran untuk mendapat izin atau dana adalah …", ["proposal", "katalog", "tiket", "sertifikat"], 0, "Proposal."],
        ["Contoh pameran di ruang terbuka adalah pameran di …", ["taman kota", "galeri seni", "ruang kelas", "museum"], 0, "Ruang terbuka."],
        ["Manfaat pameran bagi siswa adalah …", ["melatih kerja sama dan percaya diri menampilkan karya", "membuat siswa malas berkarya", "mengurangi kreativitas", "menghilangkan nilai seni"], 0, "Pengalaman berorganisasi."]
      ]
    },
    {
      id: "tari-modern", t: "Tari Modern dan Tari Kreasi", s: 2,
      sum: "Tari modern adalah tari yang tidak terikat aturan baku tari tradisi. Gerakannya bebas dan mengikuti ekspresi penata tari, misalnya modern dance, hip hop, dan tari kontemporer.\nDi Indonesia juga berkembang tari kreasi baru, yaitu tari tradisional yang dikembangkan dengan gerak, musik, dan kostum baru, seperti Tari Jaipong dari Jawa Barat. Kamu bisa belajar menyusun gerak tari sendiri berdasarkan unsur-unsur tari.",
      pts: [
        "<b>Unsur utama tari:</b> wiraga (gerak), wirama (irama), dan wirasa (penghayatan atau ekspresi).",
        "<b>Unsur pendukung:</b> iringan musik, tata rias, tata busana, properti, tata panggung, dan tata cahaya.",
        "<b>Pola lantai:</b> garis yang dilalui penari di panggung, misalnya garis lurus, lengkung, diagonal, lingkaran, atau huruf V.",
        "<b>Level gerak:</b> rendah (duduk atau jongkok), sedang (berdiri), tinggi (melompat atau berjinjit).",
        "<b>Tari kreasi Indonesia:</b> Jaipong (Gugum Gumbira, Jawa Barat) dan Tari Merak (Tjetje Somantri, Jawa Barat).",
        "<b>Pelopor modern dance dunia:</b> Isadora Duncan dan Martha Graham."
      ],
      ex: { q: "Kamu dan empat teman akan menampilkan tari kreasi. Bagaimana membuat penampilan lebih menarik dengan pola lantai dan level?", a: "Gunakan pola lantai yang berganti, misalnya mulai dengan garis lurus, lalu berubah menjadi huruf V dan lingkaran. Kombinasikan level: dua penari jongkok (rendah), dua berdiri (sedang), dan satu melompat (tinggi) pada bagian puncak. Perubahan pola dan level membuat penonton tidak bosan." },
      tip: "Hafalkan tiga unsur utama tari: wiraga = gerak, wirama = irama, wirasa = penghayatan.",
      q: [
        ["Unsur tari yang berkaitan dengan gerak tubuh disebut …", ["wiraga", "wirama", "wirasa", "wirupa"], 0, "Wiraga."],
        ["Unsur tari yang berkaitan dengan penghayatan disebut …", ["wirasa", "wiraga", "wirama", "wiyata"], 0, "Wirasa."],
        ["Garis yang dilalui penari di atas panggung disebut …", ["pola lantai", "level", "properti", "tempo"], 0, "Pola lantai."],
        ["Gerakan tari sambil jongkok termasuk level …", ["rendah", "sedang", "tinggi", "atas"], 0, "Level rendah."],
        ["Tari Jaipong berasal dari daerah …", ["Jawa Barat", "Bali", "Aceh", "Sumatra Barat"], 0, "Jawa Barat."],
        ["Pencipta Tari Jaipong adalah …", ["Gugum Gumbira", "Bagong Kussudiardjo", "Didik Nini Thowok", "Sardono W. Kusumo"], 0, "Gugum Gumbira."],
        ["Benda yang dipakai penari untuk mendukung gerak, seperti kipas atau selendang, disebut …", ["properti", "kostum", "rias", "iringan"], 0, "Properti."],
        ["Ciri tari modern adalah …", ["gerakannya bebas dan tidak terikat aturan tradisi", "harus diiringi gamelan", "hanya ditarikan di keraton", "gerak dan kostumnya baku turun-temurun"], 0, "Bebas."],
        ["Pola lantai diagonal memberi kesan …", ["dinamis dan kuat", "diam dan lemah", "sedih", "tidak teratur"], 0, "Garis miring terlihat bergerak."],
        ["Tokoh yang dikenal sebagai pelopor modern dance dunia adalah …", ["Isadora Duncan", "Michael Jackson", "Ludwig van Beethoven", "Pablo Picasso"], 0, "Isadora Duncan."]
      ]
    }
  ],
  order: ["seni-lukis", "seni-patung", "seni-grafis", "pameran", "musik-populer", "tari-modern", "teater-modern"]
});

// ================= PJOK =================
EXT(9, "pjok", {
  more: {
    "bulu-tangkis": {
      pts: [
        "<b>Ukuran lapangan:</b> panjang 13,40 m, lebar 6,10 m untuk ganda dan 5,18 m untuk tunggal. Tinggi net 1,524 m di bagian tengah.",
        "<b>Footwork</b> (langkah kaki) membantu pemain cepat menjangkau kok ke segala arah.",
        "<b>Drive:</b> pukulan mendatar dan cepat sejajar net."
      ],
      ex2: { q: "Lawanmu berdiri jauh di belakang lapangan setelah melakukan lob. Pukulan apa yang paling tepat untuk mendapat poin?", a: "Dropshot, yaitu menjatuhkan kok tipis di dekat net. Lawan yang berada di belakang lapangan harus berlari jauh ke depan, sehingga kemungkinan besar terlambat mengembalikan kok." },
      q: [
        ["Lebar lapangan bulu tangkis untuk permainan ganda adalah …", ["6,10 m", "5,18 m", "13,40 m", "8 m"], 0, "Tunggal 5,18 m."],
        ["Pukulan mendatar dan cepat sejajar net disebut …", ["drive", "lob", "dropshot", "servis panjang"], 0, "Drive."],
        ["Smash biasanya dilakukan dengan cara …", ["melompat dan memukul kok dari atas kepala", "memukul dari bawah lutut", "memegang raket dengan dua tangan", "memukul tanpa ayunan"], 0, "Kok dipukul menukik."],
        ["Saat skor 20-20, pemain harus unggul … poin untuk memenangkan gim.", ["2", "1", "3", "5"], 0, "Deuce."],
        ["Jika skor terus imbang, satu gim bulu tangkis paling lama berakhir di poin …", ["30", "25", "21", "29"], 0, "Pada 29-29, poin berikutnya menentukan."],
        ["Pebulu tangkis Indonesia peraih medali emas Olimpiade Barcelona 1992 di nomor tunggal putri adalah …", ["Susi Susanti", "Rudy Hartono", "Liem Swie King", "Taufik Hidayat"], 0, "Susi Susanti."]
      ]
    },
    "tolak-peluru": {
      pts: [
        "<b>Berat peluru</b> untuk atlet senior: putra 7,26 kg, putri 4 kg. Untuk pelajar biasanya dipakai peluru lebih ringan.",
        "<b>Sudut tolakan</b> yang baik sekitar 40–45 derajat.",
        "<b>Stop board:</b> balok penahan di bagian depan lingkaran yang tidak boleh diinjak bagian atasnya."
      ],
      ex2: { q: "Mengapa penolak peluru harus keluar dari bagian belakang lingkaran setelah menolak?", a: "Aturan atletik menetapkan penolak harus keluar lewat setengah lingkaran bagian belakang setelah peluru jatuh. Jika keluar lewat depan atau menginjak bagian atas balok penahan, tolakan itu dinyatakan gagal." },
      q: [
        ["Berat peluru untuk atlet senior putra adalah …", ["7,26 kg", "4 kg", "5 kg", "10 kg"], 0, "16 pon."],
        ["Sudut tolakan peluru yang baik agar jauh adalah sekitar …", ["40–45 derajat", "10–15 derajat", "70–80 derajat", "90 derajat"], 0, "Sudut optimal."],
        ["Balok penahan di bagian depan lingkaran tolak peluru disebut …", ["stop board", "start block", "matras", "bak pasir"], 0, "Stop board."],
        ["Setelah menolak, penolak harus keluar dari lingkaran melalui bagian …", ["belakang", "depan", "atas balok penahan", "mana saja"], 0, "Belakang."],
        ["Gerak lanjutan setelah menolak berguna untuk …", ["menjaga keseimbangan agar tidak keluar lingkaran", "menambah jarak setelah peluru jatuh", "menangkap peluru", "memulai lari"], 0, "Keseimbangan."],
        ["Agar sah, peluru harus jatuh di dalam …", ["sektor lemparan", "lingkaran tolakan", "bak pasir", "lintasan lari"], 0, "Sektor."]
      ]
    },
    "kebugaran-9": {
      pts: [
        "<b>Komponen kebugaran:</b> daya tahan jantung-paru, kekuatan otot, daya tahan otot, kelenturan, dan komposisi tubuh.",
        "<b>Bentuk latihan:</b> push-up (otot lengan dan dada), sit-up (otot perut), squat jump (otot tungkai), sit and reach (kelenturan).",
        "<b>IMT</b> (indeks massa tubuh) = berat badan (kg) : tinggi² (m). Kisaran normal dewasa 18,5–24,9."
      ],
      ex2: { q: "Theo berumur 14 tahun. Hitung denyut nadi maksimal dan zona latihan 60–80%.", a: "Denyut nadi maksimal = 220 − 14 = 206 kali per menit. Batas bawah zona = 60% × 206 ≈ 124 kali per menit. Batas atas = 80% × 206 ≈ 165 kali per menit. Jadi saat berlatih, usahakan denyut nadi sekitar 124 sampai 165 kali per menit." },
      q: [
        ["Latihan push-up terutama melatih …", ["kekuatan otot lengan dan dada", "kelenturan kaki", "kecepatan lari", "keseimbangan kepala"], 0, "Push-up."],
        ["Tes sit and reach mengukur …", ["kelenturan", "kecepatan", "kekuatan lengan", "daya ledak"], 0, "Kelenturan togok."],
        ["Berat badan 50 kg dan tinggi 1,6 m menghasilkan IMT sekitar …", ["19,5", "31,2", "25", "16"], 0, "50 : 2,56 ≈ 19,5."],
        ["Zona latihan 60–80% dari denyut nadi maksimal 200 kali per menit adalah …", ["120–160 kali per menit", "100–120 kali per menit", "160–200 kali per menit", "60–80 kali per menit"], 0, "60% dan 80% dari 200."],
        ["Kemampuan jantung dan paru-paru bekerja dalam waktu lama disebut …", ["daya tahan kardiorespirasi", "kelenturan", "kelincahan", "kecepatan reaksi"], 0, "Daya tahan jantung-paru."],
        ["Frekuensi latihan yang umum dianjurkan untuk meningkatkan kebugaran adalah …", ["3–5 kali seminggu", "1 kali sebulan", "1 kali seminggu", "setiap 2 minggu sekali"], 0, "Prinsip FITT."]
      ]
    },
    "penyakit-menular": {
      pts: [
        "<b>Penyakit tidak menular</b> seperti diabetes, hipertensi, dan jantung koroner tidak berpindah antarmanusia, tetapi dipengaruhi pola hidup.",
        "<b>Malaria</b> disebabkan parasit Plasmodium dan ditularkan nyamuk Anopheles betina.",
        "<b>Hepatitis A</b> menular lewat makanan atau minuman yang tercemar dan menyerang hati."
      ],
      ex2: { q: "Di lingkungan rumahmu banyak kasus demam berdarah. Apa saja langkah 3M Plus yang bisa dilakukan keluarga?", a: "Menguras bak mandi dan tempat air minimal seminggu sekali, menutup rapat tempat penampungan air, dan mendaur ulang barang bekas yang bisa menampung air hujan. Plusnya: memakai losion antinyamuk, menaburkan bubuk abate, memelihara ikan pemakan jentik, dan memasang kawat kasa." },
      q: [
        ["Penyakit malaria ditularkan oleh nyamuk …", ["Anopheles betina", "Aedes aegypti jantan", "Culex", "lalat tsetse"], 0, "Anopheles."],
        ["Penyebab penyakit malaria adalah …", ["parasit Plasmodium", "virus dengue", "bakteri Salmonella", "jamur Candida"], 0, "Plasmodium."],
        ["Penyakit hepatitis menyerang organ …", ["hati", "paru-paru", "ginjal", "jantung"], 0, "Hati."],
        ["Contoh penyakit tidak menular adalah …", ["diabetes", "influenza", "cacar air", "TBC"], 0, "Tidak disebabkan kuman."],
        ["Etika batuk yang benar adalah …", ["menutup mulut dengan lengan atas atau tisu", "batuk ke arah orang lain", "menutup mulut dengan telapak tangan lalu bersalaman", "tidak perlu menutup mulut"], 0, "Mencegah penularan."],
        ["Bubuk yang ditaburkan di bak mandi untuk membunuh jentik nyamuk adalah …", ["abate", "garam dapur", "gula pasir", "kapur tulis"], 0, "Larvasida."]
      ]
    }
  },
  add: [
    {
      id: "bola-voli", t: "Permainan Bola Voli", s: 1,
      sum: "Bola voli dimainkan oleh dua regu, masing-masing enam pemain, yang dipisahkan net. Tujuannya menjatuhkan bola di lapangan lawan dan mencegah bola jatuh di lapangan sendiri.\nTeknik dasar bola voli adalah servis, passing, smash, dan block. Bola voli sering menjadi materi praktik dan teori di kelas 9, jadi pahami juga aturan dan ukuran lapangannya.",
      pts: [
        "<b>Lapangan:</b> 18 m × 9 m. Tinggi net putra 2,43 m, putri 2,24 m.",
        "<b>Servis:</b> servis bawah (cocok untuk pemula), servis atas atau tenis, dan jump service.",
        "<b>Passing:</b> passing bawah dengan lengan bawah dirapatkan untuk menerima bola rendah, passing atas dengan jari-jari tangan untuk mengumpan.",
        "<b>Smash (spike):</b> pukulan keras menukik dari atas net. <b>Block:</b> membendung smash lawan di depan net.",
        "<b>Skor:</b> rally point. Set 1–4 sampai 25 poin, set kelima sampai 15 poin, dan harus unggul 2 poin. Pertandingan memakai sistem best of five.",
        "<b>Sentuhan:</b> setiap regu boleh menyentuh bola paling banyak 3 kali sebelum dikembalikan ke lawan (sentuhan block tidak dihitung)."
      ],
      ex: { q: "Bola servis lawan datang rendah di depan dadamu. Teknik apa yang dipakai untuk menerimanya dan bagaimana caranya?", a: "Gunakan passing bawah. Buka kaki selebar bahu dengan lutut sedikit ditekuk, luruskan dan rapatkan kedua lengan, lalu kenakan bola pada lengan bawah di atas pergelangan tangan. Dorong bola dengan gerakan kaki dan bahu ke arah teman yang akan mengumpan." },
      tip: "Angka penting: 6 pemain, lapangan 18 × 9 m, net putra 2,43 m dan putri 2,24 m, set sampai 25 poin, set kelima 15 poin, maksimal 3 sentuhan.",
      q: [
        ["Jumlah pemain bola voli dalam satu regu di lapangan adalah …", ["6", "5", "7", "11"], 0, "Enam pemain."],
        ["Ukuran lapangan bola voli adalah …", ["18 m × 9 m", "28 m × 15 m", "13,4 m × 6,1 m", "20 m × 10 m"], 0, "18 × 9 m."],
        ["Tinggi net bola voli putra adalah …", ["2,43 m", "2,24 m", "1,55 m", "3,05 m"], 0, "Putri 2,24 m."],
        ["Teknik menerima bola rendah dengan lengan bawah dirapatkan disebut …", ["passing bawah", "passing atas", "smash", "block"], 0, "Passing bawah."],
        ["Pukulan keras menukik ke lapangan lawan disebut …", ["smash", "servis bawah", "passing atas", "block"], 0, "Smash."],
        ["Usaha membendung smash lawan di depan net disebut …", ["block", "dig", "toss", "servis"], 0, "Block."],
        ["Set pertama sampai keempat berakhir saat satu regu mencapai … poin dengan selisih 2.", ["25", "15", "21", "30"], 0, "25 poin."],
        ["Satu regu boleh menyentuh bola paling banyak … kali sebelum mengembalikannya ke lawan.", ["3", "2", "4", "5"], 0, "Tiga sentuhan."],
        ["Servis yang paling mudah untuk pemula adalah servis …", ["bawah", "atas (tenis)", "lompat (jump service)", "mengapung"], 0, "Servis bawah."],
        ["Permainan bola voli diciptakan pada tahun 1895 oleh …", ["William G. Morgan", "James Naismith", "William Webb Ellis", "Pierre de Coubertin"], 0, "Naismith menciptakan bola basket."]
      ]
    },
    {
      id: "pencak-silat", t: "Pencak Silat", s: 2,
      sum: "Pencak silat adalah seni bela diri asli Indonesia yang mengandung unsur olahraga, seni, bela diri, dan mental spiritual. Pada tahun 2019, UNESCO menetapkan tradisi pencak silat sebagai Warisan Budaya Takbenda.\nDi sekolah kamu belajar gerak dasar seperti kuda-kuda, sikap pasang, pukulan, tendangan, dan hindaran. Latihan pencak silat melatih kedisiplinan, kepercayaan diri, dan sikap menghormati lawan.",
      pts: [
        "<b>Kuda-kuda:</b> posisi kaki yang kokoh sebagai dasar gerak, misalnya kuda-kuda depan, belakang, tengah, dan samping.",
        "<b>Sikap pasang:</b> sikap siap menyerang atau bertahan dengan posisi tangan dan kaki tertentu.",
        "<b>Serangan:</b> pukulan (lurus, bandul, sangkol, tegak) dan tendangan (lurus, sabit, T, belakang).",
        "<b>Belaan:</b> hindaran (menghindar tanpa menyentuh serangan) dan tangkisan (menahan serangan dengan anggota tubuh).",
        "<b>Organisasi:</b> IPSI (Ikatan Pencak Silat Indonesia) berdiri 18 Mei 1948. Tingkat dunia: PERSILAT.",
        "<b>Nilai:</b> disiplin, sportif, rendah hati, dan memakai bela diri hanya untuk membela diri, bukan untuk menyakiti."
      ],
      ex: { q: "Lawan melancarkan pukulan lurus ke arah dadamu. Apa beda hindaran dan tangkisan?", a: "Hindaran berarti memindahkan tubuh dari arah serangan tanpa menyentuh tangan lawan, misalnya melangkah ke samping. Tangkisan berarti menahan atau membelokkan pukulan dengan lengan. Hindaran menghemat tenaga, sedangkan tangkisan membuka peluang untuk langsung membalas serangan." },
      tip: "Kuda-kuda adalah dasar semua gerak pencak silat. Kalau kuda-kudanya lemah, pukulan dan tendangan mudah kehilangan keseimbangan.",
      q: [
        ["Pencak silat adalah bela diri asli dari …", ["Indonesia", "Jepang", "Korea Selatan", "Tiongkok"], 0, "Indonesia."],
        ["Organisasi pencak silat tingkat nasional di Indonesia adalah …", ["IPSI", "PSSI", "PBSI", "PASI"], 0, "IPSI."],
        ["Posisi kaki yang kokoh sebagai dasar gerak pencak silat disebut …", ["kuda-kuda", "sikap pasang", "tendangan", "guling"], 0, "Kuda-kuda."],
        ["Tendangan dengan lintasan setengah lingkaran dari samping disebut tendangan …", ["sabit", "lurus", "T", "belakang"], 0, "Sabit."],
        ["Menghindari serangan dengan memindahkan tubuh tanpa menyentuh serangan disebut …", ["hindaran", "tangkisan", "pukulan", "kuncian"], 0, "Hindaran."],
        ["UNESCO menetapkan tradisi pencak silat sebagai Warisan Budaya Takbenda pada tahun …", ["2019", "2009", "2015", "2022"], 0, "Desember 2019."],
        ["Unsur pencak silat yang berkaitan dengan keindahan gerak disebut unsur …", ["seni", "bela diri", "olahraga", "mental spiritual"], 0, "Seni."],
        ["Organisasi pencak silat tingkat internasional adalah …", ["PERSILAT", "FIFA", "BWF", "FIVB"], 0, "PERSILAT."],
        ["Sikap siap menyerang atau bertahan dengan posisi tangan dan kaki tertentu disebut …", ["sikap pasang", "kuda-kuda depan", "salam perguruan", "hindaran"], 0, "Sikap pasang."],
        ["Nilai sikap yang diajarkan dalam pencak silat adalah …", ["rendah hati dan tidak menyalahgunakan bela diri", "sombong karena kuat", "suka menantang berkelahi", "mudah marah"], 0, "Sikap kesatria."]
      ]
    },
    {
      id: "napza", t: "Bahaya Narkoba dan Zat Adiktif", s: 2,
      sum: "NAPZA adalah singkatan dari narkotika, psikotropika, dan zat adiktif lainnya. Zat-zat ini memengaruhi kerja otak dan bisa membuat pemakainya ketagihan.\nRemaja sering menjadi sasaran pengedar karena rasa ingin tahu dan pengaruh teman. Dengan memahami jenis, dampak, dan cara menolaknya, kamu bisa melindungi diri sendiri dan teman-temanmu.",
      pts: [
        "<b>Narkotika:</b> zat yang dapat menurunkan kesadaran dan menghilangkan rasa nyeri, contohnya ganja, heroin, kokain, dan sabu. Diatur dalam UU No. 35 Tahun 2009.",
        "<b>Psikotropika:</b> zat yang memengaruhi susunan saraf pusat dan perilaku, contohnya ekstasi dan obat penenang tanpa resep dokter.",
        "<b>Zat adiktif lain:</b> nikotin dalam rokok (termasuk rokok elektrik), alkohol, dan zat yang dihirup seperti lem.",
        "<b>Golongan menurut efek:</b> depresan (menekan saraf, membuat lemas dan mengantuk), stimulan (memacu saraf, membuat gelisah), halusinogen (menimbulkan halusinasi).",
        "<b>Dampak:</b> kerusakan otak, jantung, paru-paru, dan hati, overdosis, putus sekolah, terjerat hukum, serta risiko HIV dari jarum suntik bergantian.",
        "<b>Cara menolak:</b> berani berkata tidak, menjauhi lingkungan berisiko, aktif dalam kegiatan positif, dan bercerita kepada orang tua atau guru BK. BNN (Badan Narkotika Nasional) menangani pencegahan dan pemberantasan narkoba."
      ],
      ex: { q: "Seorang kakak kelas menawarimu permen yang katanya “bikin fokus belajar” dan memaksamu mencobanya. Apa yang sebaiknya kamu lakukan?", a: "Tolak dengan tegas, misalnya “Tidak, terima kasih,” lalu segera menjauh. Jangan menerima makanan atau minuman dari orang yang mencurigakan. Ceritakan kejadian itu kepada orang tua atau guru BK supaya sekolah bisa bertindak. Menolak bukan berarti tidak setia kawan, justru melindungi dirimu." },
      tip: "Ingat tiga golongan efek: depresan menekan (lemas), stimulan memacu (gelisah), halusinogen membuat berkhayal. Contoh yang sering ditanyakan: alkohol depresan, sabu stimulan, LSD halusinogen.",
      q: [
        ["Kepanjangan NAPZA adalah …", ["narkotika, psikotropika, dan zat adiktif lainnya", "narkoba, pil, dan zat aktif", "nikotin, alkohol, pil, dan zat kimia", "narkotika, pestisida, dan zat asam"], 0, "NAPZA."],
        ["Nikotin yang membuat ketagihan terdapat pada …", ["rokok", "air mineral", "susu", "sayuran"], 0, "Rokok, termasuk rokok elektrik."],
        ["Zat yang memacu kerja saraf sehingga pemakainya gelisah dan sulit tidur termasuk golongan …", ["stimulan", "depresan", "halusinogen", "vitamin"], 0, "Stimulan."],
        ["Alkohol termasuk zat golongan …", ["depresan", "stimulan", "halusinogen", "antibiotik"], 0, "Menekan kerja saraf."],
        ["Lembaga pemerintah yang menangani pencegahan dan pemberantasan narkoba adalah …", ["BNN", "BMKG", "BPS", "KPU"], 0, "Badan Narkotika Nasional."],
        ["Pemakaian jarum suntik bergantian oleh pengguna narkoba berisiko menularkan …", ["HIV", "diabetes", "rabun jauh", "patah tulang"], 0, "Menular lewat darah."],
        ["Cara yang tepat menolak ajakan memakai narkoba adalah …", ["berkata tidak dengan tegas dan menjauh", "mencoba sedikit agar dianggap setia kawan", "diam saja lalu menerima", "menyimpannya untuk dicoba nanti"], 0, "Tegas menolak."],
        ["Undang-undang yang mengatur narkotika di Indonesia adalah UU No. …", ["35 Tahun 2009", "27 Tahun 2022", "20 Tahun 2003", "23 Tahun 2014"], 0, "UU Narkotika."],
        ["Zat yang menimbulkan khayalan atau halusinasi termasuk golongan …", ["halusinogen", "depresan", "stimulan", "analgesik"], 0, "Halusinogen."],
        ["Kegiatan yang membantu remaja terhindar dari narkoba adalah …", ["aktif dalam olahraga dan ekstrakurikuler", "bergaul dengan pengedar", "sering keluar malam tanpa izin", "menyendiri dan menutup diri"], 0, "Kegiatan positif."]
      ]
    }
  ],
  order: ["bulu-tangkis", "bola-voli", "tolak-peluru", "kebugaran-9", "penyakit-menular", "pencak-silat", "napza"]
});
