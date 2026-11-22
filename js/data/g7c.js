// KELAS 7 — tambahan bab dan soal: Matematika, IPA, IPS, Bahasa Indonesia
EXT(7, "mtk", {
  order: ["bilangan-bulat", "pecahan", "himpunan", "aljabar", "plsv", "rasio", "aritmetika-sosial", "garis-sudut", "bangun-datar", "data"],
  more: {
    "bilangan-bulat": {
      pts: ["<b>KPK dan FPB:</b> faktorkan ke bilangan prima. KPK ambil semua faktor dengan pangkat terbesar, FPB ambil faktor yang sama dengan pangkat terkecil.", "<b>Sifat operasi:</b> komutatif (a + b = b + a), asosiatif ((a + b) + c = a + (b + c)), distributif (a × (b + c) = a × b + a × c)."],
      ex2: { q: "Tentukan KPK dan FPB dari 12 dan 18.", a: "12 = 2² × 3, 18 = 2 × 3². KPK = 2² × 3² = 36. FPB = 2 × 3 = 6." },
      q: [
        ["Hasil dari (−48) : (−6) + (−3) adalah …", ["5", "−11", "11", "−5"], 0, "(−48) : (−6) = 8, lalu 8 + (−3) = 5."],
        ["FPB dari 24 dan 36 adalah …", ["12", "6", "72", "4"], 0, "24 = 2³ × 3, 36 = 2² × 3². FPB = 2² × 3 = 12."],
        ["KPK dari 8 dan 12 adalah …", ["24", "48", "4", "96"], 0, "8 = 2³, 12 = 2² × 3. KPK = 2³ × 3 = 24."],
        ["Lampu A menyala tiap 6 detik, lampu B tiap 8 detik. Keduanya menyala bersama lagi setelah … detik.", ["24", "48", "14", "2"], 0, "Pakai KPK 6 dan 8 = 24."],
        ["Nilai dari |−7| − |3| adalah …", ["4", "−10", "10", "−4"], 0, "7 − 3 = 4."]
      ]
    },
    pecahan: {
      pts: ["<b>Mengurutkan desimal:</b> samakan banyak angka di belakang koma. 0,5 = 0,50 lebih besar dari 0,45.", "<b>Pecahan senilai:</b> kalikan atau bagi pembilang dan penyebut dengan bilangan yang sama. 2/3 = 4/6 = 8/12."],
      ex2: { q: "Hitung 2 1/4 − 1 2/3.", a: "Ubah ke pecahan biasa: 9/4 − 5/3 = 27/12 − 20/12 = 7/12." },
      q: [
        ["Hasil dari 3/4 × 8/9 adalah …", ["2/3", "24/36", "11/13", "3/2"], 0, "24/36 disederhanakan jadi 2/3."],
        ["Hasil dari 0,25 + 1/2 adalah …", ["0,75", "0,27", "0,52", "1,25"], 0, "1/2 = 0,5. 0,25 + 0,5 = 0,75."],
        ["Pecahan yang senilai dengan 3/5 adalah …", ["12/20", "9/20", "6/15", "5/3"], 0, "3 × 4 = 12, 5 × 4 = 20."],
        ["Theo punya 3/4 kg gula, dipakai 1/3 kg untuk kue. Sisa gula …", ["5/12 kg", "2/1 kg", "1/12 kg", "7/12 kg"], 0, "9/12 − 4/12 = 5/12."]
      ]
    },
    aljabar: {
      pts: ["<b>Pengurangan bentuk aljabar:</b> ubah tanda setiap suku yang dikurangkan. (5x + 2) − (3x − 4) = 2x + 6.", "<b>Pembagian:</b> 12x² : 3x = 4x."],
      ex2: { q: "Kurangkan 2a − 3b dari 7a + b.", a: "(7a + b) − (2a − 3b) = 7a − 2a + b + 3b = 5a + 4b." },
      q: [
        ["Hasil dari (5x + 2) − (3x − 4) adalah …", ["2x + 6", "2x − 2", "8x − 2", "2x + 2"], 0, "−(−4) menjadi +4, jadi 2 + 4 = 6."],
        ["Hasil dari 15a²b : 5ab adalah …", ["3a", "3ab", "10a", "3b"], 0, "15 : 5 = 3, a²/a = a, b/b = 1."],
        ["Banyak suku pada bentuk 2x² − 5x + 3y − 7 adalah …", ["4", "3", "2", "5"], 0, "Suku: 2x², −5x, 3y, −7."],
        ["Harga 1 pensil x rupiah dan 1 buku y rupiah. Harga 3 pensil dan 2 buku adalah …", ["3x + 2y", "5xy", "3y + 2x", "6xy"], 0, "Tiga pensil = 3x, dua buku = 2y."]
      ]
    },
    plsv: {
      s: 1,
      pts: ["<b>Persamaan setara:</b> persamaan yang punya penyelesaian sama. 2x = 8 setara dengan x = 4.", "<b>Garis bilangan:</b> pertidaksamaan x > 2 digambar dengan bulatan kosong di 2 dan arsir ke kanan. x ≥ 2 pakai bulatan penuh."],
      ex2: { q: "Keliling persegi panjang 46 cm. Panjangnya 5 cm lebih dari lebarnya. Tentukan panjang dan lebarnya.", a: "Lebar = l, panjang = l + 5. 2(l + 5 + l) = 46 → 4l + 10 = 46 → l = 9. Panjang 14 cm, lebar 9 cm." },
      q: [
        ["Penyelesaian dari 5x − 3 = 2x + 9 adalah …", ["x = 4", "x = 2", "x = 12", "x = 6"], 0, "5x − 2x = 9 + 3 → 3x = 12."],
        ["Himpunan penyelesaian 2x − 1 < 7 untuk x bilangan asli adalah …", ["{1, 2, 3}", "{1, 2, 3, 4}", "{4, 5, 6}", "{0, 1, 2, 3}"], 0, "2x < 8 → x < 4. Bilangan asli: 1, 2, 3."],
        ["Theo membeli 3 buku dan membayar Rp50.000, kembaliannya Rp5.000. Harga 1 buku …", ["Rp15.000", "Rp18.000", "Rp16.500", "Rp13.000"], 0, "3x + 5.000 = 50.000 → 3x = 45.000."],
        ["Pada garis bilangan, x ≥ −1 digambar dengan …", ["bulatan penuh di −1, arsir ke kanan", "bulatan kosong di −1, arsir ke kanan", "bulatan penuh di −1, arsir ke kiri", "bulatan kosong di −1, arsir ke kiri"], 0, "≥ termasuk −1 (bulatan penuh), lebih besar ke kanan."]
      ]
    },
    rasio: {
      pts: ["<b>Rasio tiga besaran:</b> a : b = 2 : 3 dan b : c = 4 : 5 → samakan b: a : b : c = 8 : 12 : 15."],
      ex2: { q: "Sebuah mobil menghabiskan 6 liter bensin untuk 72 km. Berapa liter untuk 120 km?", a: "Senilai: 6/72 = x/120 → x = 6 × 120 / 72 = 10 liter." },
      q: [
        ["a : b = 2 : 3 dan b : c = 4 : 5. Maka a : c = …", ["8 : 15", "2 : 5", "6 : 20", "4 : 3"], 0, "Samakan b jadi 12: a = 8, c = 15."],
        ["Persediaan makanan cukup untuk 30 ekor ayam selama 12 hari. Jika ayam bertambah 6 ekor, makanan cukup untuk …", ["10 hari", "14 hari", "9 hari", "15 hari"], 0, "30 × 12 = 360, 360 : 36 = 10."],
        ["Kecepatan rata-rata 45 km/jam selama 2 jam 20 menit. Jarak yang ditempuh …", ["105 km", "90 km", "100 km", "115 km"], 0, "2 jam 20 menit = 7/3 jam. 45 × 7/3 = 105."],
        ["Perbandingan siswa laki-laki dan perempuan 4 : 5. Jika perempuan 20 orang, laki-laki …", ["16 orang", "25 orang", "18 orang", "36 orang"], 0, "4/5 × 20 = 16."]
      ]
    },
    "garis-sudut": {
      pts: ["<b>Sudut bertolak belakang</b> sama besar.", "<b>Sudut dalam sepihak</b> pada dua garis sejajar jumlahnya 180°."],
      ex2: { q: "Dua garis sejajar dipotong garis lain. Sudut dalam sepihaknya (2x + 10)° dan (3x − 5)°. Tentukan x.", a: "Dalam sepihak berjumlah 180°: 5x + 5 = 180 → x = 35." },
      q: [
        ["Sudut bertolak belakang besarnya …", ["sama besar", "berjumlah 90°", "berjumlah 180°", "berjumlah 360°"], 0, "Pasangan sudut yang berhadapan di titik potong."],
        ["Dua sudut berpelurus besarnya (3x)° dan (x + 20)°. Nilai x adalah …", ["40", "45", "50", "35"], 0, "4x + 20 = 180 → x = 40."],
        ["Sudut dalam sepihak pada garis sejajar besarnya 115°. Pasangannya …", ["65°", "115°", "75°", "245°"], 0, "180° − 115° = 65°."],
        ["Jarum jam menunjukkan pukul 03.00. Sudut terkecil kedua jarum …", ["90°", "60°", "120°", "30°"], 0, "Tiap jam 30°, 3 × 30° = 90°."]
      ]
    },
    data: {
      pts: ["<b>Data kualitatif</b> berupa kategori (warna favorit), <b>data kuantitatif</b> berupa angka (tinggi badan).", "<b>Populasi</b> adalah seluruh objek, <b>sampel</b> adalah sebagian yang diteliti."],
      ex2: { q: "Rata-rata nilai 5 anak adalah 80. Satu anak lagi ikut dengan nilai 92. Berapa rata-rata baru?", a: "Jumlah lama 5 × 80 = 400. Jumlah baru 492. Rata-rata = 492 : 6 = 82." },
      q: [
        ["Rata-rata 4 bilangan adalah 15. Jika ditambah satu bilangan, rata-ratanya menjadi 16. Bilangan itu adalah …", ["20", "16", "31", "19"], 0, "5 × 16 − 4 × 15 = 80 − 60 = 20."],
        ["Contoh data kualitatif adalah …", ["warna kesukaan siswa", "tinggi badan siswa", "nilai ujian", "berat tas"], 0, "Berupa kategori, bukan angka."],
        ["Theo menanyai 30 siswa dari seluruh siswa SMP-nya. Ke-30 siswa itu disebut …", ["sampel", "populasi", "modus", "frekuensi"], 0, "Sebagian dari populasi."],
        ["Jangkauan dari data 4, 9, 2, 7, 12 adalah …", ["10", "8", "12", "7"], 0, "Data terbesar − terkecil = 12 − 2."],
        ["Median dari 7, 5, 9, 6, 8, 5, 10 adalah …", ["7", "6", "8", "5"], 0, "Urut: 5, 5, 6, 7, 8, 9, 10. Data ke-4 = 7."]
      ]
    }
  },
  add: [
    {
      id: "himpunan", t: "Himpunan", s: 1,
      sum: "Himpunan adalah kumpulan benda yang anggotanya bisa ditentukan dengan jelas. “Kumpulan siswa kelas 7F” adalah himpunan, tapi “kumpulan siswa yang pintar” bukan himpunan karena ukuran pintar berbeda bagi tiap orang.\nKamu bisa menyatakan himpunan dengan kata-kata, notasi pembentuk himpunan, atau mendaftar anggotanya, lalu menggambarnya dengan diagram Venn.",
      pts: [
        "<b>Notasi:</b> himpunan ditulis huruf kapital dan kurung kurawal. A = {1, 2, 3}. Lambang ∈ berarti anggota, ∉ bukan anggota.",
        "<b>Banyak anggota:</b> n(A). Himpunan kosong ditulis { } atau ∅.",
        "<b>Himpunan bagian:</b> A ⊂ B kalau semua anggota A ada di B. Banyak himpunan bagian = 2ⁿ.",
        "<b>Irisan (∩):</b> anggota yang ada di kedua himpunan. <b>Gabungan (∪):</b> semua anggota dari kedua himpunan.",
        "<b>Komplemen (Aᶜ):</b> anggota semesta yang bukan anggota A.",
        "<b>Rumus gabungan:</b> n(A ∪ B) = n(A) + n(B) − n(A ∩ B)."
      ],
      ex: { q: "Di kelas ada 32 siswa. 20 suka voli, 15 suka basket, 7 suka keduanya. Berapa siswa yang tidak suka keduanya?", a: "n(V ∪ B) = 20 + 15 − 7 = 28. Yang tidak suka keduanya: 32 − 28 = 4 siswa." },
      ex2: { q: "A = {a, b, c}. Tuliskan semua himpunan bagiannya.", a: "{ }, {a}, {b}, {c}, {a, b}, {a, c}, {b, c}, {a, b, c}. Ada 2³ = 8 himpunan bagian." },
      tip: "Gambar diagram Venn dulu. Isi bagian irisan paling awal, baru bagian lainnya.",
      q: [
        ["Yang merupakan himpunan adalah …", ["kumpulan bilangan prima kurang dari 10", "kumpulan lagu yang enak", "kumpulan siswa yang tinggi", "kumpulan makanan lezat"], 0, "Anggotanya jelas: 2, 3, 5, 7."],
        ["A = {bilangan ganjil antara 2 dan 12}. n(A) = …", ["5", "6", "4", "10"], 0, "3, 5, 7, 9, 11."],
        ["A = {1, 2, 3, 4} dan B = {3, 4, 5}. A ∩ B = …", ["{3, 4}", "{1, 2, 3, 4, 5}", "{1, 2}", "{5}"], 0, "Anggota yang sama."],
        ["A = {1, 2, 3, 4} dan B = {3, 4, 5}. A ∪ B = …", ["{1, 2, 3, 4, 5}", "{3, 4}", "{1, 2, 5}", "{1, 2, 3, 4}"], 0, "Gabungkan, anggota sama ditulis sekali."],
        ["Banyak himpunan bagian dari {p, q, r, s} adalah …", ["16", "8", "4", "12"], 0, "2⁴ = 16."],
        ["S = {1, 2, …, 8}, A = {2, 4, 6, 8}. Aᶜ = …", ["{1, 3, 5, 7}", "{2, 4, 6, 8}", "{1, 2, 3, 4}", "{ }"], 0, "Anggota S yang tidak ada di A."],
        ["Lambang “5 ∈ A” dibaca …", ["5 anggota A", "5 bukan anggota A", "5 himpunan bagian A", "A anggota 5"], 0, "∈ = anggota."],
        ["Dari 40 siswa, 25 suka matematika, 18 suka IPA, 8 suka keduanya. Yang suka matematika saja …", ["17", "25", "10", "33"], 0, "25 − 8 = 17."],
        ["Himpunan bilangan prima genap yang lebih dari 2 adalah …", ["{ }", "{2}", "{4}", "{4, 6, 8}"], 0, "Satu-satunya prima genap adalah 2, jadi yang lebih dari 2 tidak ada."],
        ["n(A) = 12, n(B) = 9, n(A ∪ B) = 17. n(A ∩ B) = …", ["4", "3", "5", "21"], 0, "12 + 9 − 17 = 4."]
      ]
    },
    {
      id: "aritmetika-sosial", t: "Aritmetika Sosial", s: 2,
      sum: "Aritmetika sosial membahas hitungan uang sehari-hari: untung, rugi, diskon, pajak, bunga tabungan, bruto, tara, dan neto.\nKamu bakal sering pakai bab ini waktu belanja atau menabung, jadi pahami rumusnya lewat contoh nyata.",
      pts: [
        "<b>Untung</b> = harga jual − harga beli (kalau jual lebih mahal). <b>Rugi</b> = harga beli − harga jual.",
        "<b>Persentase untung/rugi</b> = untung atau rugi ÷ harga beli × 100%.",
        "<b>Diskon:</b> harga bayar = harga awal − (persen diskon × harga awal).",
        "<b>Bunga tunggal:</b> bunga = modal × persen bunga per tahun × lama (tahun). Untuk bulan, kalikan n/12.",
        "<b>Bruto, tara, neto:</b> bruto = berat kotor, tara = berat kemasan, neto = berat bersih. Neto = bruto − tara.",
        "<b>Pajak (PPN)</b> menambah harga. Harga + PPN 11% = 111% × harga."
      ],
      ex: { q: "Sepatu Rp250.000 didiskon 20%. Berapa harga yang harus dibayar?", a: "Diskon = 20% × 250.000 = 50.000. Bayar = 250.000 − 50.000 = Rp200.000." },
      ex2: { q: "Tabungan Rp2.000.000 dengan bunga 6% per tahun. Berapa total tabungan setelah 8 bulan?", a: "Bunga = 2.000.000 × 6% × 8/12 = 80.000. Total = Rp2.080.000." },
      tip: "Persen untung dan rugi selalu dibandingkan dengan harga beli, bukan harga jual.",
      q: [
        ["Pedagang membeli barang Rp80.000 dan menjualnya Rp100.000. Untungnya …", ["Rp20.000", "Rp180.000", "Rp80.000", "Rp10.000"], 0, "100.000 − 80.000."],
        ["Barang dibeli Rp50.000 dan dijual dengan untung 20%. Harga jualnya …", ["Rp60.000", "Rp70.000", "Rp40.000", "Rp55.000"], 0, "120% × 50.000."],
        ["Tas Rp120.000 didiskon 25%. Harga bayarnya …", ["Rp90.000", "Rp95.000", "Rp30.000", "Rp100.000"], 0, "75% × 120.000."],
        ["Sekarung beras bruto 50 kg dengan tara 2%. Netonya …", ["49 kg", "48 kg", "1 kg", "52 kg"], 0, "Tara = 1 kg, neto = 49 kg."],
        ["Modal Rp1.000.000 dengan bunga 12% per tahun. Bunga selama 6 bulan …", ["Rp60.000", "Rp120.000", "Rp72.000", "Rp6.000"], 0, "1.000.000 × 12% × 6/12."],
        ["Membeli HP Rp2.000.000, dijual Rp1.700.000. Persentase ruginya …", ["15%", "30%", "17%", "1,5%"], 0, "Rugi 300.000 ÷ 2.000.000 × 100%."],
        ["Harga sebelum PPN 11% adalah Rp200.000. Harga setelah PPN …", ["Rp222.000", "Rp211.000", "Rp220.000", "Rp178.000"], 0, "200.000 + 22.000."],
        ["Berat bersih barang disebut …", ["neto", "bruto", "tara", "rabat"], 0, "Neto = bersih."],
        ["Toko memberi diskon 10% lalu diskon lagi 10% dari harga setelah diskon. Untuk barang Rp100.000, harga akhirnya …", ["Rp81.000", "Rp80.000", "Rp90.000", "Rp82.000"], 0, "100.000 → 90.000 → 81.000. Bukan 20% sekaligus."],
        ["Tabungan awal Rp500.000 menjadi Rp530.000 setelah 1 tahun. Persentase bunganya …", ["6%", "3%", "30%", "5%"], 0, "30.000 ÷ 500.000 × 100%."]
      ]
    },
    {
      id: "bangun-datar", t: "Segiempat dan Segitiga", s: 2,
      sum: "Bab ini fokus pada sifat-sifat segiempat dan segitiga, lalu cara menghitung keliling dan luasnya. Kamu perlu hafal sifat tiap bangun supaya bisa menjawab soal yang tidak langsung memberi semua ukuran.",
      pts: [
        "<b>Persegi:</b> 4 sisi sama, 4 sudut siku-siku, diagonal sama panjang dan berpotongan tegak lurus.",
        "<b>Persegi panjang:</b> sisi berhadapan sama dan sejajar, 4 sudut siku-siku, diagonal sama panjang.",
        "<b>Jajargenjang:</b> sisi berhadapan sama dan sejajar, sudut berhadapan sama besar, sudut berdekatan berjumlah 180°.",
        "<b>Belah ketupat:</b> 4 sisi sama, diagonal berpotongan tegak lurus. Luas = ½ × d₁ × d₂.",
        "<b>Layang-layang:</b> dua pasang sisi berdekatan sama panjang. Luas = ½ × d₁ × d₂.",
        "<b>Jenis segitiga:</b> menurut sisi (sama sisi, sama kaki, sembarang) dan menurut sudut (lancip, siku-siku, tumpul)."
      ],
      ex: { q: "Belah ketupat punya diagonal 12 cm dan 16 cm, sisinya 10 cm. Tentukan luas dan kelilingnya.", a: "Luas = ½ × 12 × 16 = 96 cm². Keliling = 4 × 10 = 40 cm." },
      ex2: { q: "Persegi panjang luasnya 72 cm² dan lebarnya 6 cm. Berapa kelilingnya?", a: "Panjang = 72 : 6 = 12 cm. Keliling = 2 × (12 + 6) = 36 cm." },
      tip: "Kalau soal memberi luas, cari dulu ukuran yang hilang, baru hitung keliling.",
      q: [
        ["Segiempat yang keempat sisinya sama panjang tetapi sudutnya tidak harus siku-siku adalah …", ["belah ketupat", "persegi panjang", "trapesium", "layang-layang"], 0, "Persegi juga, tapi persegi pasti siku-siku."],
        ["Luas layang-layang dengan diagonal 10 cm dan 14 cm adalah …", ["70 cm²", "140 cm²", "48 cm²", "24 cm²"], 0, "½ × 10 × 14."],
        ["Keliling persegi 36 cm. Luasnya …", ["81 cm²", "36 cm²", "144 cm²", "72 cm²"], 0, "Sisi 9 cm, luas 81."],
        ["Pada jajargenjang ABCD, ∠A = 70°. Besar ∠B …", ["110°", "70°", "90°", "20°"], 0, "Sudut berdekatan berjumlah 180°."],
        ["Segitiga dengan dua sisi sama panjang disebut segitiga …", ["sama kaki", "sama sisi", "sembarang", "siku-siku"], 0, "Sama kaki."],
        ["Jajargenjang dengan alas 15 cm dan tinggi 8 cm memiliki luas …", ["120 cm²", "60 cm²", "46 cm²", "23 cm²"], 0, "a × t."],
        ["Setiap sudut segitiga sama sisi besarnya …", ["60°", "90°", "45°", "120°"], 0, "180° : 3."],
        ["Bangun yang diagonalnya sama panjang adalah …", ["persegi panjang", "jajargenjang", "layang-layang", "belah ketupat"], 0, "Persegi panjang (dan persegi)."],
        ["Kebun persegi panjang 20 m × 12 m dipagari keliling. Panjang pagar …", ["64 m", "240 m", "32 m", "128 m"], 0, "2 × (20 + 12)."],
        ["Segitiga dengan sudut 30°, 60°, dan 90° termasuk segitiga …", ["siku-siku", "lancip", "tumpul", "sama sisi"], 0, "Ada sudut 90°."]
      ]
    }
  ]
});

EXT(7, "ipa", {
  order: ["metode-ilmiah", "zat", "unsur-senyawa", "suhu-kalor", "gerak-gaya", "klasifikasi", "sel", "ekologi", "pencemaran", "tata-surya"],
  more: {
    "metode-ilmiah": { q: [
      ["Hasil pengukuran panjang dengan mistar yang benar adalah …", ["12,5 cm", "12,53 cm", "12,532 cm", "12 cm lebih sedikit"], 0, "Ketelitian mistar 0,1 cm (1 mm)."],
      ["Ketelitian jangka sorong adalah …", ["0,1 mm", "1 mm", "0,01 mm", "1 cm"], 0, "Jangka sorong 0,1 mm, mikrometer sekrup 0,01 mm."],
      ["Simbol bahan kimia bergambar api berarti bahan itu …", ["mudah terbakar", "beracun", "korosif", "radioaktif"], 0, "Flammable."],
      ["5 km sama dengan …", ["5.000 m", "500 m", "50.000 m", "50 m"], 0, "1 km = 1.000 m."]
    ]},
    zat: { q: [
      ["Partikel zat padat tersusun …", ["rapat dan teratur", "renggang dan bebas", "agak renggang", "acak dan sangat jauh"], 0, "Itu sebabnya bentuknya tetap."],
      ["Es batu mencair menjadi air termasuk perubahan …", ["fisika", "kimia", "biologi", "nuklir"], 0, "Tidak terbentuk zat baru."],
      ["Minyak terapung di atas air karena massa jenis minyak …", ["lebih kecil dari air", "lebih besar dari air", "sama dengan air", "nol"], 0, "Zat yang lebih ringan berada di atas."],
      ["Ciri perubahan kimia adalah …", ["terjadi perubahan warna, bau, atau gas", "hanya berubah bentuk", "bisa kembali seperti semula dengan mudah", "hanya berubah ukuran"], 0, "Tanda terbentuknya zat baru."]
    ]},
    "suhu-kalor": { q: [
      ["Suhu 40 °C sama dengan … °R", ["32", "50", "72", "104"], 0, "4/5 × 40."],
      ["Termometer klinis dipakai untuk mengukur …", ["suhu tubuh", "suhu udara ruangan", "suhu cairan panas di lab", "suhu oven"], 0, "Skala 35–42 °C."],
      ["Angin laut terjadi pada siang hari karena …", ["daratan lebih cepat panas daripada laut", "laut lebih cepat panas", "tekanan di darat lebih tinggi", "matahari tidak bersinar"], 0, "Udara bergerak dari laut (tekanan tinggi) ke darat."],
      ["Benda hitam dan kusam paling mudah …", ["menyerap kalor radiasi", "memantulkan kalor", "menolak kalor", "mendinginkan diri"], 0, "Karena itu baju hitam terasa panas di siang hari."]
    ]},
    "gerak-gaya": { q: [
      ["Gerak buah jatuh dari pohon termasuk …", ["GLBB dipercepat", "GLB", "GLBB diperlambat", "gerak melingkar"], 0, "Kecepatannya bertambah karena gravitasi."],
      ["Satuan gaya dalam SI adalah …", ["newton", "joule", "watt", "pascal"], 0, "N."],
      ["Dua gaya 15 N ke kanan dan 6 N ke kiri. Resultannya …", ["9 N ke kanan", "21 N ke kanan", "9 N ke kiri", "21 N ke kiri"], 0, "Berlawanan arah dikurangi."],
      ["Massa astronot di Bulan dibanding di Bumi …", ["sama", "lebih kecil", "lebih besar", "nol"], 0, "Massa tetap, beratnya yang berubah."]
    ]},
    klasifikasi: { q: [
      ["Hewan bertulang belakang disebut …", ["vertebrata", "avertebrata", "invertebrata", "protozoa"], 0, "Vertebrata."],
      ["Paku-pakuan berkembang biak dengan …", ["spora", "biji", "umbi", "buah"], 0, "Tumbuhan paku tidak berbiji."],
      ["Tumbuhan berbiji tertutup disebut …", ["Angiospermae", "Gymnospermae", "Pteridophyta", "Bryophyta"], 0, "Bijinya dilindungi daging buah."],
      ["Ikan paus termasuk kelas …", ["mamalia", "pisces", "reptil", "amfibi"], 0, "Bernapas dengan paru-paru dan menyusui."]
    ]},
    ekologi: { q: [
      ["Kumpulan rantai makanan yang saling berhubungan disebut …", ["jaring-jaring makanan", "piramida makanan", "ekosistem", "habitat"], 0, "Jaring-jaring makanan."],
      ["Hubungan ikan remora dengan hiu termasuk simbiosis …", ["komensalisme", "mutualisme", "parasitisme", "predasi"], 0, "Remora untung, hiu tidak dirugikan."],
      ["Tempat hidup suatu makhluk hidup disebut …", ["habitat", "populasi", "niche", "biosfer"], 0, "Habitat."],
      ["Contoh pelestarian ex situ adalah …", ["Kebun Raya Bogor", "Taman Nasional Ujung Kulon", "Cagar Alam Lorentz", "hutan lindung"], 0, "Di luar habitat asli."]
    ]},
    "tata-surya": { q: [
      ["Planet yang dikenal sebagai planet merah adalah …", ["Mars", "Venus", "Jupiter", "Merkurius"], 0, "Permukaannya mengandung oksida besi."],
      ["Planet bercincin paling terkenal adalah …", ["Saturnus", "Mars", "Bumi", "Venus"], 0, "Saturnus."],
      ["Satu-satunya satelit alami Bumi adalah …", ["Bulan", "Phobos", "Titan", "Europa"], 0, "Bulan."],
      ["Pasang naik air laut terutama dipengaruhi oleh …", ["gaya gravitasi Bulan", "angin muson", "rotasi Mars", "suhu udara"], 0, "Gravitasi Bulan menarik air laut."]
    ]}
  },
  add: [
    {
      id: "unsur-senyawa", t: "Unsur, Senyawa, dan Campuran", s: 1, after: "zat",
      sum: "Semua benda di sekitarmu tersusun dari materi. Para ahli mengelompokkan materi menjadi zat tunggal (unsur dan senyawa) dan campuran.\nAir murni adalah senyawa, sedangkan air sungai adalah campuran karena mengandung tanah, mineral, dan makhluk kecil.",
      pts: [
        "<b>Unsur:</b> zat tunggal yang tidak bisa diuraikan lagi secara kimia. Contoh: besi (Fe), oksigen (O), emas (Au).",
        "<b>Senyawa:</b> gabungan dua unsur atau lebih dengan perbandingan tetap. Contoh: air (H₂O), garam dapur (NaCl), karbon dioksida (CO₂).",
        "<b>Campuran homogen:</b> komponennya tidak bisa dibedakan (larutan gula, udara). <b>Heterogen:</b> komponennya terlihat (air dan pasir).",
        "<b>Pemisahan campuran:</b> penyaringan (filtrasi), penguapan (evaporasi), penyulingan (distilasi), kromatografi, sublimasi.",
        "<b>Unsur logam</b> mengilap dan menghantarkan listrik. <b>Nonlogam</b> umumnya tidak menghantarkan listrik (kecuali grafit).",
        "<b>Asam, basa, garam:</b> asam terasa masam (cuka), basa terasa pahit dan licin (sabun). Lakmus merah jadi biru di basa, lakmus biru jadi merah di asam."
      ],
      ex: { q: "Bagaimana cara mendapatkan garam dari air laut?", a: "Dengan penguapan (evaporasi). Air menguap karena panas matahari, garam tertinggal." },
      tip: "Senyawa ditulis dengan rumus kimia (H₂O). Kalau ada angka kecil di bawah, itu jumlah atomnya.",
      q: [
        ["Contoh unsur adalah …", ["emas", "air", "garam dapur", "gula"], 0, "Au, tidak bisa diuraikan lagi."],
        ["Rumus kimia air adalah …", ["H₂O", "CO₂", "NaCl", "O₂"], 0, "Dua atom hidrogen, satu atom oksigen."],
        ["Larutan gula termasuk …", ["campuran homogen", "campuran heterogen", "unsur", "senyawa"], 0, "Gula larut merata."],
        ["Memisahkan pasir dari air paling mudah dengan …", ["penyaringan", "penyulingan", "kromatografi", "sublimasi"], 0, "Filtrasi."],
        ["Pembuatan air suling (aquades) menggunakan …", ["distilasi", "filtrasi", "evaporasi", "sublimasi"], 0, "Penguapan lalu pengembunan."],
        ["Lambang unsur besi adalah …", ["Fe", "Be", "Br", "Bi"], 0, "Ferrum."],
        ["Kertas lakmus biru dicelupkan ke cuka akan berubah menjadi …", ["merah", "biru", "hijau", "tidak berubah"], 0, "Cuka bersifat asam."],
        ["Sabun bersifat …", ["basa", "asam", "netral", "garam"], 0, "Terasa licin."],
        ["Memisahkan tinta menjadi beberapa warna menggunakan …", ["kromatografi", "filtrasi", "dekantasi", "evaporasi"], 0, "Kromatografi kertas."],
        ["Udara yang kita hirup termasuk …", ["campuran homogen", "senyawa", "unsur", "campuran heterogen"], 0, "Campuran berbagai gas."]
      ]
    },
    {
      id: "sel", t: "Sel dan Organisasi Kehidupan", s: 2, after: "klasifikasi",
      sum: "Sel adalah satuan terkecil makhluk hidup. Tubuhmu tersusun dari triliunan sel yang bekerja sama.\nSel-sel yang sejenis membentuk jaringan, jaringan membentuk organ, organ membentuk sistem organ, dan semuanya menyusun organisme.",
      pts: [
        "<b>Tingkatan:</b> sel → jaringan → organ → sistem organ → organisme.",
        "<b>Bagian sel hewan:</b> membran sel, sitoplasma, inti sel (nukleus), mitokondria.",
        "<b>Sel tumbuhan</b> punya tambahan dinding sel, kloroplas, dan vakuola besar.",
        "<b>Fungsi:</b> inti sel mengatur kegiatan sel, mitokondria menghasilkan energi, kloroplas tempat fotosintesis.",
        "<b>Alat bantu:</b> sel diamati dengan mikroskop. Robert Hooke pertama kali melihat sel pada gabus.",
        "<b>Organisme uniseluler</b> bersel satu (bakteri, amoeba), <b>multiseluler</b> bersel banyak (manusia, tumbuhan)."
      ],
      ex: { q: "Mengapa sel tumbuhan bentuknya tetap, sedangkan sel hewan bentuknya tidak tetap?", a: "Sel tumbuhan punya dinding sel yang kaku. Sel hewan hanya punya membran sel yang lentur." },
      tip: "Ingat urutan dengan kalimat: Sel Jalan-jalan Ke Organ Sistem Orang.",
      q: [
        ["Satuan terkecil makhluk hidup adalah …", ["sel", "jaringan", "organ", "atom"], 0, "Sel."],
        ["Bagian sel yang mengatur seluruh kegiatan sel adalah …", ["inti sel", "membran sel", "sitoplasma", "vakuola"], 0, "Nukleus."],
        ["Organel penghasil energi disebut …", ["mitokondria", "kloroplas", "ribosom", "dinding sel"], 0, "Pusat respirasi sel."],
        ["Bagian yang hanya ada pada sel tumbuhan adalah …", ["dinding sel", "membran sel", "inti sel", "sitoplasma"], 0, "Dinding sel dan kloroplas."],
        ["Jantung termasuk tingkat …", ["organ", "jaringan", "sel", "sistem organ"], 0, "Tersusun dari beberapa jaringan."],
        ["Penemu sel pada sayatan gabus adalah …", ["Robert Hooke", "Charles Darwin", "Gregor Mendel", "Isaac Newton"], 0, "Tahun 1665."],
        ["Urutan organisasi kehidupan yang benar adalah …", ["sel – jaringan – organ – sistem organ", "jaringan – sel – organ – sistem organ", "sel – organ – jaringan – sistem organ", "organ – sel – jaringan – sistem organ"], 0, "Dari yang terkecil."],
        ["Contoh organisme uniseluler adalah …", ["amoeba", "kucing", "mangga", "jamur kuping"], 0, "Bersel satu."],
        ["Kloroplas berfungsi sebagai tempat …", ["fotosintesis", "respirasi", "pencernaan", "penyimpanan air"], 0, "Mengandung klorofil."],
        ["Alat untuk mengamati sel adalah …", ["mikroskop", "teleskop", "lup biasa", "periskop"], 0, "Sel terlalu kecil untuk mata."]
      ]
    },
    {
      id: "pencemaran", t: "Pencemaran Lingkungan dan Perubahan Iklim", s: 2, after: "ekologi",
      sum: "Pencemaran terjadi ketika zat atau energi masuk ke lingkungan dan mengganggu makhluk hidup. Sumbernya bisa dari pabrik, kendaraan, rumah tangga, sampai pertanian.\nGas rumah kaca dari pembakaran bahan bakar menahan panas di atmosfer dan menaikkan suhu bumi. Peristiwa ini disebut pemanasan global.",
      pts: [
        "<b>Pencemaran air:</b> limbah pabrik, deterjen, sampah. Akibatnya ikan mati dan air tidak layak minum.",
        "<b>Pencemaran udara:</b> asap kendaraan dan pabrik (CO, CO₂, SO₂). Akibatnya gangguan pernapasan dan hujan asam.",
        "<b>Pencemaran tanah:</b> sampah plastik, pestisida berlebihan. Tanah jadi tidak subur.",
        "<b>Efek rumah kaca:</b> CO₂, metana, dan uap air menahan panas matahari di atmosfer.",
        "<b>Dampak pemanasan global:</b> es kutub mencair, permukaan laut naik, cuaca ekstrem.",
        "<b>3R:</b> reduce (kurangi), reuse (pakai ulang), recycle (daur ulang)."
      ],
      ex: { q: "Sebutkan dua hal yang bisa Theo lakukan di sekolah untuk mengurangi sampah plastik.", a: "Membawa botol minum dan kotak makan sendiri, serta memilah sampah organik dan anorganik." },
      q: [
        ["Gas utama penyebab efek rumah kaca adalah …", ["karbon dioksida", "oksigen", "nitrogen", "hidrogen"], 0, "CO₂."],
        ["Hujan asam disebabkan oleh gas …", ["SO₂ dan NO₂", "O₂ dan N₂", "H₂ dan He", "uap air saja"], 0, "Bereaksi dengan air hujan."],
        ["Contoh reuse adalah …", ["memakai botol bekas sebagai pot", "mengolah plastik jadi bijih plastik", "mengurangi pemakaian kantong plastik", "membakar sampah"], 0, "Pakai ulang."],
        ["Eutrofikasi (ledakan alga) di danau disebabkan oleh …", ["limbah pupuk dan deterjen", "ikan terlalu banyak", "suhu dingin", "batu di dasar danau"], 0, "Kaya nitrat dan fosfat."],
        ["Dampak pemanasan global adalah …", ["naiknya permukaan air laut", "bertambahnya es di kutub", "suhu bumi turun", "hutan bertambah luas"], 0, "Es kutub mencair."],
        ["Gas beracun dari asap kendaraan yang mengikat hemoglobin adalah …", ["karbon monoksida", "oksigen", "uap air", "nitrogen"], 0, "CO."],
        ["Sampah yang mudah terurai disebut sampah …", ["organik", "anorganik", "B3", "elektronik"], 0, "Daun, sisa makanan."],
        ["Baterai bekas termasuk sampah …", ["B3", "organik", "kertas", "kompos"], 0, "Bahan berbahaya dan beracun."],
        ["Mengurangi pemakaian kantong plastik termasuk …", ["reduce", "reuse", "recycle", "replace"], 0, "Mengurangi."],
        ["Penanaman kembali hutan yang gundul disebut …", ["reboisasi", "deforestasi", "urbanisasi", "erosi"], 0, "Reboisasi."]
      ]
    }
  ]
});

EXT(7, "ips", {
  order: ["interaksi", "keragaman", "letak-indonesia", "kondisi-alam", "ekonomi", "sda", "praaksara", "hindu-buddha"],
  more: {
    interaksi: { q: [
      ["Proses belajar nilai dan norma agar bisa diterima masyarakat disebut …", ["sosialisasi", "akulturasi", "asimilasi", "mobilitas"], 0, "Sosialisasi."],
      ["Pernikahan antarsuku yang melahirkan budaya baru contoh …", ["asimilasi", "konflik", "kontravensi", "persaingan"], 0, "Budaya lama melebur."],
      ["Contoh kontak sosial tidak langsung adalah …", ["berkirim pesan lewat WhatsApp", "bersalaman", "mengobrol di kantin", "bermain bola bersama"], 0, "Lewat perantara media."],
      ["Lembaga yang berfungsi memenuhi kebutuhan kasih sayang adalah lembaga …", ["keluarga", "ekonomi", "politik", "pendidikan"], 0, "Keluarga."]
    ]},
    "letak-indonesia": { q: [
      ["Garis khayal yang membagi bumi menjadi belahan utara dan selatan disebut …", ["khatulistiwa", "garis bujur", "meridian", "garis balik"], 0, "Lintang 0°."],
      ["Batas wilayah Indonesia di sebelah utara Kalimantan adalah …", ["Malaysia", "Australia", "Timor Leste", "Papua Nugini"], 0, "Sabah dan Sarawak."],
      ["Peta yang menggambarkan kenampakan alam dan buatan secara umum disebut peta …", ["umum", "tematik", "kontur", "cuaca"], 0, "Peta umum."],
      ["Indonesia mengalami dua musim karena …", ["angin muson barat dan timur", "dilalui garis bujur 0°", "berada di kutub", "tidak ada gunung"], 0, "Musim hujan dan kemarau."]
    ]},
    ekonomi: { q: [
      ["Orang yang memakai barang dan jasa disebut …", ["konsumen", "produsen", "distributor", "agen"], 0, "Konsumen."],
      ["Tukang pos yang mengantar paket menambah nilai guna …", ["tempat", "bentuk", "waktu", "kepemilikan"], 0, "Barang berpindah tempat."],
      ["Menyimpan padi saat panen lalu menjual saat paceklik menambah nilai guna …", ["waktu", "bentuk", "tempat", "unsur"], 0, "Lebih berguna di waktu tertentu."],
      ["Kemampuan mengelola faktor produksi lain disebut faktor produksi …", ["kewirausahaan", "alam", "modal", "tenaga kerja"], 0, "Skill pengusaha."]
    ]},
    praaksara: { q: [
      ["Alat dari tulang dan tanduk banyak ditemukan di Ngandong. Kebudayaan ini disebut …", ["kebudayaan Ngandong", "kebudayaan Pacitan", "kebudayaan Dongson", "kebudayaan Bacson"], 0, "Bone culture."],
      ["Dolmen berfungsi sebagai …", ["meja batu untuk sesaji", "peti mayat", "tugu peringatan", "tempat tinggal"], 0, "Meja batu."],
      ["Hidup berpindah-pindah tempat disebut …", ["nomaden", "sedenter", "urban", "agraris"], 0, "Nomaden."],
      ["Sumber sejarah berupa benda buatan manusia disebut …", ["artefak", "fosil", "prasasti", "naskah"], 0, "Artefak."]
    ]},
    "hindu-buddha": { q: [
      ["Raja Kutai yang terkenal dermawan adalah …", ["Mulawarman", "Purnawarman", "Sanjaya", "Hayam Wuruk"], 0, "Menyumbang 20.000 ekor sapi."],
      ["Prasasti peninggalan Tarumanegara adalah …", ["Prasasti Ciaruteun", "Prasasti Yupa", "Prasasti Kedukan Bukit", "Prasasti Canggal"], 0, "Ada jejak kaki Purnawarman."],
      ["Candi Prambanan dibangun untuk memuja …", ["Dewa Siwa", "Buddha", "Dewa Indra", "Dewi Sri"], 0, "Trimurti, candi utama Siwa."],
      ["Kitab Negarakertagama ditulis oleh …", ["Mpu Prapanca", "Mpu Tantular", "Mpu Sedah", "Mpu Kanwa"], 0, "Masa Hayam Wuruk."]
    ]}
  },
  add: [
    {
      id: "keragaman", t: "Keragaman Sosial Budaya", s: 1, after: "interaksi",
      sum: "Indonesia punya lebih dari 1.300 suku bangsa dan ratusan bahasa daerah. Tiap daerah punya rumah adat, pakaian, tarian, makanan, dan upacara yang berbeda.\nKeragaman ini muncul karena Indonesia berbentuk kepulauan dan sejak dulu didatangi banyak pedagang dari luar.",
      pts: [
        "<b>Faktor penyebab keragaman:</b> kondisi geografis kepulauan, letak di jalur perdagangan, perbedaan iklim dan alam, pengaruh budaya asing.",
        "<b>Rumah adat:</b> Rumah Gadang (Sumatra Barat), Joglo (Jawa Tengah), Honai (Papua), Tongkonan (Sulawesi Selatan), Rumah Betang (Kalimantan).",
        "<b>Bahasa daerah</b> terbanyak penuturnya adalah bahasa Jawa.",
        "<b>Upacara adat:</b> Ngaben (Bali), Rambu Solo (Toraja), Sekaten (Yogyakarta), Tabuik (Pariaman).",
        "<b>Dampak positif:</b> kekayaan budaya dan pariwisata. <b>Tantangan:</b> rawan konflik kalau tidak saling menghargai.",
        "<b>Sikap:</b> toleransi, empati, tidak etnosentris."
      ],
      ex: { q: "Mengapa rumah adat Papua (Honai) berbentuk bulat, kecil, dan beratap jerami tebal?", a: "Daerah pegunungan Papua dingin. Bentuk kecil tanpa jendela dan atap tebal menahan panas di dalam rumah." },
      q: [
        ["Rumah Gadang berasal dari …", ["Sumatra Barat", "Jawa Tengah", "Papua", "Bali"], 0, "Minangkabau."],
        ["Rumah adat Toraja disebut …", ["Tongkonan", "Joglo", "Honai", "Limas"], 0, "Sulawesi Selatan."],
        ["Upacara pembakaran jenazah di Bali disebut …", ["Ngaben", "Rambu Solo", "Sekaten", "Kasada"], 0, "Ngaben."],
        ["Faktor utama keragaman budaya Indonesia adalah …", ["bentuk negara kepulauan", "jumlah gunung api", "warna tanah", "panjang sungai"], 0, "Pulau-pulau terpisah laut."],
        ["Bahasa daerah dengan penutur terbanyak di Indonesia adalah …", ["bahasa Jawa", "bahasa Sunda", "bahasa Bugis", "bahasa Batak"], 0, "Bahasa Jawa."],
        ["Rumah Joglo berasal dari …", ["Jawa Tengah", "Kalimantan", "Sumatra Utara", "Maluku"], 0, "Jawa."],
        ["Sikap menghargai budaya daerah lain disebut …", ["toleransi", "etnosentrisme", "primordialisme", "chauvinisme"], 0, "Toleransi."],
        ["Upacara Sekaten diadakan untuk memperingati …", ["Maulid Nabi", "Tahun Baru", "Hari Kemerdekaan", "panen padi"], 0, "Di Yogyakarta dan Surakarta."],
        ["Contoh dampak positif keragaman budaya adalah …", ["menarik wisatawan", "memicu konflik", "menimbulkan prasangka", "membuat diskriminasi"], 0, "Pariwisata."],
        ["Rumah Betang adalah rumah adat suku …", ["Dayak", "Asmat", "Minangkabau", "Sasak"], 0, "Kalimantan."]
      ]
    },
    {
      id: "kondisi-alam", t: "Kondisi Alam: Iklim, Flora, dan Fauna", s: 1, after: "letak-indonesia",
      sum: "Letak Indonesia di khatulistiwa membuatnya beriklim tropis dengan curah hujan tinggi. Itu sebabnya hutan hujan tropis tumbuh lebat di banyak pulau.\nFlora dan fauna Indonesia terbagi menjadi tipe Asiatis di barat, Australis di timur, dan peralihan di tengah.",
      pts: [
        "<b>Garis Wallace</b> memisahkan fauna Asiatis (Sumatra, Jawa, Kalimantan, Bali) dan peralihan.",
        "<b>Garis Weber</b> memisahkan fauna peralihan (Sulawesi, Nusa Tenggara, Maluku) dan Australis (Papua, Aru).",
        "<b>Fauna Asiatis:</b> gajah, harimau, badak, orangutan. <b>Peralihan:</b> anoa, babirusa, komodo. <b>Australis:</b> kanguru pohon, cenderawasih, kasuari.",
        "<b>Iklim Indonesia:</b> tropis, musim hujan (Oktober–Maret, muson barat) dan kemarau (April–September, muson timur).",
        "<b>Bentuk muka bumi:</b> pegunungan, dataran tinggi, dataran rendah, pantai. Indonesia termasuk jalur Cincin Api Pasifik.",
        "<b>Hutan bakau</b> tumbuh di pantai berlumpur dan melindungi pantai dari abrasi."
      ],
      ex: { q: "Mengapa fauna Kalimantan mirip dengan fauna di Asia daratan?", a: "Dulu Kalimantan menyatu dengan Asia daratan lewat Paparan Sunda saat zaman es, sehingga hewan bisa berpindah." },
      q: [
        ["Garis yang membatasi fauna Asiatis dan peralihan disebut garis …", ["Wallace", "Weber", "khatulistiwa", "Lydekker"], 0, "Wallace."],
        ["Anoa dan babirusa termasuk fauna …", ["peralihan", "Asiatis", "Australis", "Eropa"], 0, "Sulawesi."],
        ["Burung cenderawasih termasuk fauna …", ["Australis", "Asiatis", "peralihan", "Afrika"], 0, "Papua."],
        ["Musim hujan di Indonesia terjadi saat bertiup angin …", ["muson barat", "muson timur", "passat", "fohn"], 0, "Membawa uap air dari Samudra Hindia dan Asia."],
        ["Hutan bakau berfungsi untuk …", ["mencegah abrasi pantai", "menahan longsor di gunung", "menghasilkan minyak bumi", "menurunkan suhu kutub"], 0, "Akar bakau menahan ombak."],
        ["Komodo hidup di …", ["Nusa Tenggara Timur", "Papua", "Kalimantan", "Sumatra"], 0, "Pulau Komodo dan Rinca."],
        ["Iklim Indonesia adalah …", ["tropis", "subtropis", "sedang", "kutub"], 0, "Dilalui khatulistiwa."],
        ["Gajah dan harimau termasuk fauna …", ["Asiatis", "Australis", "peralihan", "endemik Papua"], 0, "Indonesia barat."],
        ["Indonesia sering mengalami gempa karena berada di jalur …", ["Cincin Api Pasifik", "Pegunungan Alpen", "Gurun Sahara", "Lingkaran Arktik"], 0, "Ring of Fire."],
        ["Garis Weber terletak di antara …", ["Maluku dan Papua", "Bali dan Lombok", "Jawa dan Sumatra", "Kalimantan dan Sulawesi"], 0, "Batas fauna peralihan dan Australis."]
      ]
    },
    {
      id: "sda", t: "Sumber Daya Alam dan Pemanfaatannya", s: 2, after: "ekonomi",
      sum: "Sumber daya alam (SDA) adalah segala sesuatu dari alam yang bisa dimanfaatkan manusia. Ada SDA yang bisa diperbarui dan ada yang habis kalau terus dipakai.\nKamu dan orang dewasa di sekitarmu punya peran menjaga SDA supaya masih ada untuk generasi berikutnya.",
      pts: [
        "<b>SDA terbarukan:</b> air, hutan, hewan, sinar matahari, angin.",
        "<b>SDA tidak terbarukan:</b> minyak bumi, batu bara, gas alam, emas, timah.",
        "<b>Persebaran:</b> minyak bumi (Riau, Kalimantan Timur), batu bara (Kalimantan, Sumatra Selatan), timah (Bangka Belitung), emas dan tembaga (Papua).",
        "<b>Pemanfaatan:</b> pertanian, perkebunan, perikanan, pertambangan, kehutanan.",
        "<b>Pembangunan berkelanjutan:</b> memakai SDA sekarang tanpa merusak kesempatan generasi berikutnya.",
        "<b>Energi alternatif:</b> tenaga surya, angin, air (PLTA), panas bumi (geotermal)."
      ],
      ex: { q: "Mengapa kita perlu beralih ke energi surya?", a: "Minyak bumi dan batu bara tidak bisa diperbarui dan menghasilkan polusi. Sinar matahari tersedia setiap hari di Indonesia." },
      q: [
        ["Contoh SDA yang tidak dapat diperbarui adalah …", ["minyak bumi", "air", "hutan", "ikan"], 0, "Butuh jutaan tahun untuk terbentuk."],
        ["Daerah penghasil timah terbesar di Indonesia adalah …", ["Bangka Belitung", "Papua", "Riau", "Bali"], 0, "Bangka Belitung."],
        ["Tambang emas dan tembaga terbesar di Indonesia berada di …", ["Papua", "Jawa Barat", "Aceh", "Sulawesi Utara"], 0, "Grasberg."],
        ["Pembangkit listrik yang memanfaatkan panas dari perut bumi adalah …", ["PLTP", "PLTA", "PLTU", "PLTS"], 0, "Panas bumi."],
        ["Contoh SDA hayati adalah …", ["hutan", "batu bara", "pasir besi", "gas alam"], 0, "Makhluk hidup."],
        ["Penggunaan SDA tanpa merugikan generasi mendatang disebut …", ["pembangunan berkelanjutan", "eksploitasi", "deforestasi", "industrialisasi"], 0, "Sustainable development."],
        ["Kegiatan menanam padi di sawah termasuk sektor …", ["pertanian", "pertambangan", "industri", "jasa"], 0, "Pertanian."],
        ["Dampak penebangan hutan liar adalah …", ["banjir dan longsor", "udara makin bersih", "tanah makin subur", "satwa bertambah"], 0, "Tidak ada akar penahan air."],
        ["PLTA memanfaatkan energi …", ["air", "angin", "matahari", "batu bara"], 0, "Pembangkit Listrik Tenaga Air."],
        ["Daerah penghasil minyak bumi di Indonesia adalah …", ["Riau", "Yogyakarta", "Bali", "NTT"], 0, "Duri, Dumai."]
      ]
    }
  ]
});

EXT(7, "indo", {
  order: ["deskripsi", "narasi", "prosedur", "ejaan", "ide-pokok", "lho", "puisi-rakyat", "fabel", "surat"],
  more: {
    deskripsi: { q: [
      ["Kalimat yang melibatkan indra penciuman adalah …", ["Aroma kopi menyebar ke seluruh ruangan.", "Kopinya berwarna hitam pekat.", "Cangkirnya terasa hangat.", "Pelayan itu tersenyum."], 0, "Aroma = penciuman."],
      ["Teks deskripsi yang menyampaikan objek apa adanya disebut deskripsi …", ["objektif", "subjektif", "imajinatif", "persuasif"], 0, "Tanpa pendapat penulis."],
      ["“Rumah itu kecil, catnya mengelupas, dan pagarnya miring.” Bagian ini termasuk …", ["deskripsi bagian", "identifikasi", "simpulan", "orientasi"], 0, "Rincian objek."],
      ["Majas yang memberi sifat manusia pada benda mati disebut …", ["personifikasi", "simile", "hiperbola", "metafora"], 0, "Contoh: daun melambai."],
      ["Kata konkret dalam kalimat “Pasir pantai terasa lembut” adalah …", ["lembut", "pantai", "terasa", "pasir"], 0, "Bisa dirasakan indra peraba."]
    ]},
    narasi: { q: [
      ["Tempat, waktu, dan suasana dalam cerita disebut …", ["latar", "alur", "tema", "amanat"], 0, "Latar."],
      ["Tokoh yang memiliki sifat baik dan menjadi pusat cerita disebut …", ["protagonis", "antagonis", "tritagonis", "figuran"], 0, "Protagonis."],
      ["Gagasan utama yang mendasari cerita disebut …", ["tema", "latar", "amanat", "alur"], 0, "Tema."],
      ["Kata “tiba-tiba” dan “sejak saat itu” dalam cerita berfungsi sebagai …", ["penanda waktu", "kata sifat", "kata perintah", "kata bilangan"], 0, "Konjungsi/keterangan waktu."],
      ["Bagian cerita fantasi yang berisi penyelesaian masalah disebut …", ["resolusi", "komplikasi", "orientasi", "klimaks"], 0, "Resolusi."]
    ]},
    prosedur: { q: [
      ["“Masukkan 2 sendok gula ke dalam gelas.” Kata bilangan dalam kalimat itu adalah …", ["2", "masukkan", "gelas", "gula"], 0, "Menunjukkan jumlah."],
      ["Judul teks prosedur biasanya diawali kata …", ["cara", "mengapa", "siapa", "kapan"], 0, "Misal: Cara Membuat Layang-Layang."],
      ["Teks prosedur yang langkahnya boleh dibolak-balik disebut prosedur …", ["protokol", "sederhana", "kompleks", "naratif"], 0, "Protokol: urutan langkahnya tidak mutlak."],
      ["Kalimat yang bukan kalimat perintah adalah …", ["Air itu sudah mendidih.", "Tuangkan air ke gelas.", "Aduk sampai rata.", "Jangan diisi terlalu penuh."], 0, "Itu kalimat berita."],
      ["Fungsi bagian “bahan dan alat” adalah …", ["memberi tahu kebutuhan sebelum mulai", "menceritakan pengalaman", "menyimpulkan hasil", "membujuk pembaca"], 0, "Persiapan."]
    ]},
    lho: { q: [
      ["Teks LHO tentang “Hewan Mamalia” termasuk jenis LHO …", ["hewan", "tumbuhan", "benda", "fenomena"], 0, "Objeknya hewan."],
      ["Simpulan dalam teks LHO berisi …", ["ringkasan informasi umum objek", "pendapat pribadi", "langkah-langkah", "dialog tokoh"], 0, "Ringkasan."],
      ["Kata “ekosistem” dan “habitat” dalam LHO disebut …", ["istilah teknis", "kata seru", "kata ganti", "majas"], 0, "Istilah ilmiah."],
      ["Sumber informasi LHO yang paling tepat adalah …", ["pengamatan langsung dan buku ilmiah", "khayalan penulis", "gosip teman", "mimpi"], 0, "Faktual."],
      ["Kalimat definisi ditandai kata …", ["adalah", "lalu", "tetapi", "jika"], 0, "Adalah, merupakan."]
    ]},
    "puisi-rakyat": { q: [
      ["“Berakit-rakit ke hulu, berenang-renang ke tepian.” Baris ini adalah … pantun.", ["sampiran", "isi", "rima", "judul"], 0, "Baris 1–2."],
      ["Jumlah suku kata tiap baris pantun umumnya …", ["8–12", "4–6", "15–20", "2–3"], 0, "8–12 suku kata."],
      ["Syair biasanya berisi …", ["cerita atau nasihat", "teka-teki saja", "perintah", "berita"], 0, "Bersambung antarbait."],
      ["Pantun yang bertujuan membuat pendengar tertawa disebut pantun …", ["jenaka", "nasihat", "agama", "teka-teki"], 0, "Jenaka."],
      ["Hubungan baris pertama dan kedua gurindam adalah …", ["sebab-akibat", "pertentangan", "perbandingan", "tidak berhubungan"], 0, "Syarat dan akibat."]
    ]},
    surat: { q: [
      ["Bagian surat yang berisi maksud utama penulis adalah …", ["isi surat", "salam pembuka", "kop surat", "tanggal"], 0, "Isi."],
      ["Salam penutup yang tepat untuk surat dinas adalah …", ["Hormat kami,", "Dadah,", "Sampai jumpa,", "Salam kangen,"], 0, "Baku."],
      ["Surat izin tidak masuk sekolah ditujukan kepada …", ["wali kelas", "teman sebangku", "penjaga kantin", "tetangga"], 0, "Wali kelas."],
      ["Lampiran pada surat dinas menunjukkan …", ["jumlah dokumen yang disertakan", "nama pengirim", "perihal surat", "alamat tujuan"], 0, "Lampiran."],
      ["Ciri bahasa surat dinas adalah …", ["baku, lugas, sopan", "santai dan gaul", "penuh majas", "memakai bahasa daerah"], 0, "Resmi."]
    ]}
  },
  add: [
    {
      id: "ejaan", t: "Ejaan dan Tanda Baca (EYD)", s: 1, after: "prosedur",
      sum: "Ejaan yang Disempurnakan (EYD) Edisi V adalah aturan resmi cara menulis bahasa Indonesia: kapan memakai huruf kapital, cara menulis kata, dan penggunaan tanda baca.\nSoal ejaan hampir selalu keluar di ujian, jadi pelajari aturan yang paling sering dipakai.",
      pts: [
        "<b>Huruf kapital</b> dipakai di awal kalimat, nama orang, nama tempat, nama hari dan bulan, nama agama dan kitab suci, judul (kecuali kata tugas seperti di, ke, dan, yang).",
        "<b>Kata depan di, ke, dari</b> ditulis terpisah: di rumah, ke sekolah. <b>Awalan di-</b> ditulis serangkai: dibaca, ditulis.",
        "<b>Tanda koma</b> dipakai di antara unsur perincian, sebelum kata tetapi/melainkan, dan setelah keterangan di awal kalimat.",
        "<b>Tanda titik</b> di akhir kalimat berita dan singkatan nama (Moh. Hatta).",
        "<b>Tanda tanya (?)</b> di akhir kalimat tanya, <b>tanda seru (!)</b> di akhir kalimat perintah atau seruan.",
        "<b>Kata baku:</b> aktivitas (bukan aktifitas), apotek, jadwal, kualitas, praktik, risiko, sistem, nasihat."
      ],
      ex: { q: "Perbaiki: “theo pergi kerumah nenek di bandung pada hari minggu.”", a: "“Theo pergi ke rumah nenek di Bandung pada hari Minggu.” Ke dipisah, nama orang, kota, dan hari pakai kapital." },
      ex2: { q: "Mana yang benar: “Buku itu di simpan di lemari” atau “Buku itu disimpan di lemari”?", a: "“Disimpan” ditulis serangkai karena di- adalah awalan kata kerja. “Di lemari” dipisah karena kata depan tempat." },
      tip: "Cek apakah setelah “di” ada tempat. Kalau tempat, pisah. Kalau kata kerja, gabung.",
      q: [
        ["Penulisan kata depan yang benar adalah …", ["di sekolah", "disekolah", "di-sekolah", "Di Sekolah"], 0, "Kata depan tempat ditulis terpisah."],
        ["Penulisan awalan yang benar adalah …", ["ditulis", "di tulis", "di-tulis", "Di tulis"], 0, "Awalan di- ditulis serangkai."],
        ["Kata baku yang benar adalah …", ["aktivitas", "aktifitas", "aktipitas", "aktiviti"], 0, "Aktivitas."],
        ["Kalimat yang penulisan huruf kapitalnya benar adalah …", ["Theo lahir pada bulan Maret.", "theo lahir pada Bulan maret.", "Theo Lahir pada bulan maret.", "theo lahir pada bulan Maret."], 0, "Nama orang dan bulan pakai kapital."],
        ["Kata baku yang benar adalah …", ["risiko", "resiko", "resico", "risico"], 0, "Risiko."],
        ["Penggunaan tanda koma yang benar adalah …", ["Saya membeli buku, pensil, dan penghapus.", "Saya membeli, buku pensil dan penghapus.", "Saya, membeli buku pensil, dan penghapus.", "Saya membeli buku pensil dan, penghapus."], 0, "Koma di antara perincian."],
        ["Judul yang penulisannya benar adalah …", ["Pergi ke Pasar dengan Ibu", "Pergi Ke Pasar Dengan Ibu", "pergi ke pasar dengan ibu", "Pergi ke pasar Dengan ibu"], 0, "Kata tugas “ke” dan “dengan” tidak dikapitalkan di tengah judul."],
        ["Kata baku yang benar adalah …", ["jadwal", "jadual", "jadwel", "jadawal"], 0, "Jadwal."],
        ["Tanda baca yang tepat untuk kalimat “Tolong tutup pintunya” adalah …", ["tanda seru (!)", "tanda tanya (?)", "tanda koma (,)", "tanda petik (“ ”)"], 0, "Kalimat perintah."],
        ["Kata baku yang benar adalah …", ["praktik", "praktek", "prakteik", "praktik-an"], 0, "Praktik."]
      ]
    },
    {
      id: "ide-pokok", t: "Membaca: Ide Pokok dan Ringkasan", s: 1, after: "ejaan",
      sum: "Membaca cepat dan memahami isi bacaan adalah kemampuan yang dipakai di semua mapel. Kuncinya adalah menemukan ide pokok tiap paragraf.\nSetelah tahu ide pokoknya, kamu bisa menulis ringkasan dengan kata-katamu sendiri.",
      pts: [
        "<b>Ide pokok</b> adalah gagasan utama paragraf, biasanya ada di kalimat utama.",
        "<b>Paragraf deduktif:</b> kalimat utama di awal. <b>Induktif:</b> di akhir. <b>Campuran:</b> di awal dan akhir.",
        "<b>Kalimat penjelas</b> memberi contoh, alasan, atau rincian dari kalimat utama.",
        "<b>Ringkasan</b> memuat ide pokok saja, urutannya sama dengan bacaan asli, ditulis lebih pendek.",
        "<b>Fakta dan opini:</b> fakta bisa dibuktikan, opini berisi pendapat dan sering memakai kata “menurut saya”, “sebaiknya”.",
        "<b>Membaca memindai</b> (scanning) untuk mencari info tertentu, <b>membaca sekilas</b> (skimming) untuk tahu gambaran umum."
      ],
      ex: { q: "“Sampah plastik sulit terurai. Plastik butuh ratusan tahun untuk hancur. Sampah ini juga mencemari laut dan membahayakan ikan.” Tentukan ide pokoknya.", a: "Sampah plastik sulit terurai dan berbahaya. Kalimat pertama adalah kalimat utama (paragraf deduktif)." },
      tip: "Tanyakan: paragraf ini sebenarnya membahas apa? Jawaban satu kalimatnya adalah ide pokok.",
      q: [
        ["Paragraf yang kalimat utamanya terletak di awal disebut paragraf …", ["deduktif", "induktif", "campuran", "naratif"], 0, "Deduktif."],
        ["Kalimat yang berisi gagasan utama paragraf disebut kalimat …", ["utama", "penjelas", "tanya", "perintah"], 0, "Kalimat utama."],
        ["Paragraf yang kalimat utamanya di akhir disebut paragraf …", ["induktif", "deduktif", "campuran", "deskriptif"], 0, "Induktif."],
        ["Membaca untuk mencari informasi tertentu dengan cepat disebut membaca …", ["memindai (scanning)", "sekilas (skimming)", "nyaring", "intensif"], 0, "Scanning."],
        ["Kalimat berikut yang merupakan opini adalah …", ["Sebaiknya siswa membawa bekal dari rumah.", "Sekolah masuk pukul 06.40.", "Indonesia merdeka tahun 1945.", "Kelas 7F berisi 32 siswa."], 0, "Ada kata “sebaiknya”."],
        ["Ciri ringkasan yang baik adalah …", ["memuat ide pokok dengan urutan yang sama", "lebih panjang dari bacaan asli", "menambah pendapat pribadi", "mengubah urutan isi"], 0, "Ringkas dan setia pada isi."],
        ["Kalimat yang memberi contoh atau rincian dari kalimat utama disebut kalimat …", ["penjelas", "utama", "simpulan", "pembuka"], 0, "Penjelas."],
        ["Kalimat berikut yang merupakan fakta adalah …", ["Gunung Merapi terletak di perbatasan Jawa Tengah dan Yogyakarta.", "Gunung Merapi paling indah di dunia.", "Mendaki gunung sangat menyenangkan.", "Sebaiknya kamu tidak mendaki saat hujan."], 0, "Bisa dibuktikan."],
        ["Membaca sekilas untuk mengetahui gambaran umum isi bacaan disebut …", ["skimming", "scanning", "membaca nyaring", "membaca indah"], 0, "Skimming."],
        ["Paragraf yang kalimat utamanya di awal dan diulang di akhir disebut paragraf …", ["campuran", "deduktif", "induktif", "persuasif"], 0, "Campuran."]
      ]
    },
    {
      id: "fabel", t: "Fabel dan Cerita Rakyat", s: 2, after: "puisi-rakyat",
      sum: "Fabel adalah cerita dengan tokoh hewan yang bisa berbicara dan berperilaku seperti manusia. Cerita rakyat (legenda, mite, sage) diwariskan turun-temurun secara lisan.\nKeduanya biasanya punya pesan moral yang jelas untuk pembaca.",
      pts: [
        "<b>Struktur fabel:</b> orientasi, komplikasi, resolusi, koda (pesan moral).",
        "<b>Ciri fabel:</b> tokoh hewan, watak tokoh mewakili sifat manusia, ada amanat.",
        "<b>Contoh fabel:</b> Kancil dan Buaya, Semut dan Belalang, Kura-Kura dan Kelinci.",
        "<b>Legenda:</b> cerita asal-usul tempat (Danau Toba, Tangkuban Perahu, Malin Kundang).",
        "<b>Mite:</b> cerita tentang dewa atau makhluk gaib (Dewi Sri). <b>Sage:</b> cerita kepahlawanan dengan unsur sejarah.",
        "<b>Kebahasaan:</b> kata kerja tindakan, kalimat langsung (dialog), kata keterangan waktu, kata sifat untuk watak."
      ],
      ex: { q: "Apa pesan moral cerita Malin Kundang?", a: "Jangan durhaka kepada orang tua, terutama ibu, walaupun kamu sudah sukses." },
      q: [
        ["Cerita dengan tokoh hewan yang berperilaku seperti manusia disebut …", ["fabel", "legenda", "mite", "sage"], 0, "Fabel."],
        ["Cerita asal-usul Danau Toba termasuk …", ["legenda", "fabel", "mite", "anekdot"], 0, "Asal-usul tempat."],
        ["Bagian fabel yang berisi pesan moral disebut …", ["koda", "orientasi", "komplikasi", "resolusi"], 0, "Koda."],
        ["Dalam cerita Kancil dan Buaya, kancil digambarkan …", ["cerdik", "sombong", "pemalas", "penakut"], 0, "Watak cerdik."],
        ["Cerita tentang dewa-dewi disebut …", ["mite", "legenda", "fabel", "sage"], 0, "Mite."],
        ["Pesan moral cerita Semut dan Belalang adalah …", ["bersiaplah sejak dini", "bermain itu yang terpenting", "jangan berteman", "makan sebanyak-banyaknya"], 0, "Semut menabung makanan sebelum musim dingin."],
        ["Malin Kundang dikutuk menjadi batu karena …", ["durhaka kepada ibunya", "mencuri", "malas bekerja", "berbohong kepada raja"], 0, "Tidak mengakui ibunya."],
        ["Dialog dalam fabel ditulis dengan …", ["kalimat langsung", "kalimat perintah saja", "rumus", "tabel"], 0, "Memakai tanda petik."],
        ["Cerita rakyat diwariskan secara …", ["lisan turun-temurun", "lewat internet", "lewat undang-undang", "lewat koran"], 0, "Dari mulut ke mulut."],
        ["Cerita Sangkuriang menjelaskan asal-usul …", ["Gunung Tangkuban Perahu", "Danau Toba", "Selat Bali", "Candi Prambanan"], 0, "Jawa Barat."]
      ]
    }
  ]
});
