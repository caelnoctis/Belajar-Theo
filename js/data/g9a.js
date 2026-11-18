// KELAS 9 — Matematika, IPA, IPS, Bahasa Indonesia
MATERI[9].mtk = [
  {
    id: "pangkat-akar", t: "Bilangan Berpangkat dan Bentuk Akar", s: 1,
    sum: "Bilangan berpangkat menyingkat perkalian berulang: 2⁵ = 2 × 2 × 2 × 2 × 2. Bentuk akar adalah kebalikan dari pangkat.",
    pts: [
      "<b>Sifat pangkat:</b> aᵐ × aⁿ = aᵐ⁺ⁿ, aᵐ : aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐˣⁿ.",
      "<b>Pangkat nol dan negatif:</b> a⁰ = 1, a⁻ⁿ = 1/aⁿ.",
      "<b>Menyederhanakan akar:</b> √50 = √(25 × 2) = 5√2.",
      "<b>Merasionalkan penyebut:</b> 6/√3 = 6√3/3 = 2√3.",
      "<b>Notasi ilmiah:</b> 4.500.000 = 4,5 × 10⁶."
    ],
    ex: { q: "Sederhanakan (2³ × 2⁴) : 2⁵.", a: "2⁷ : 2⁵ = 2² = 4." },
    q: [
      ["Hasil dari 3⁴ adalah …", ["81", "12", "64", "27"], 0, "3 × 3 × 3 × 3."],
      ["Bentuk sederhana dari 5³ × 5² adalah …", ["5⁵", "5⁶", "25⁵", "5¹"], 0, "Pangkat dijumlah."],
      ["Nilai dari 7⁰ adalah …", ["1", "0", "7", "−7"], 0, "Pangkat nol = 1."],
      ["Bentuk sederhana √72 adalah …", ["6√2", "3√8", "2√18", "8√3"], 0, "√(36 × 2)."],
      ["Notasi ilmiah dari 0,00032 adalah …", ["3,2 × 10⁻⁴", "3,2 × 10⁴", "32 × 10⁻⁵", "0,32 × 10⁻³"], 0, "Geser koma 4 kali."]
    ]
  },
  {
    id: "persamaan-kuadrat", t: "Persamaan Kuadrat", s: 1,
    sum: "Persamaan kuadrat berbentuk ax² + bx + c = 0 dengan a ≠ 0. Penyelesaiannya disebut akar-akar, dan biasanya ada dua.",
    pts: [
      "<b>Pemfaktoran:</b> x² + 5x + 6 = 0 → (x + 2)(x + 3) = 0 → x = −2 atau x = −3.",
      "<b>Rumus ABC:</b> x = (−b ± √(b² − 4ac)) / 2a.",
      "<b>Diskriminan</b> D = b² − 4ac. D > 0 dua akar real berbeda, D = 0 akar kembar, D < 0 tidak ada akar real.",
      "<b>Jumlah akar:</b> x₁ + x₂ = −b/a. <b>Hasil kali akar:</b> x₁ × x₂ = c/a.",
      "<b>Melengkapkan kuadrat sempurna</b> adalah cara ketiga."
    ],
    ex: { q: "Tentukan akar-akar x² − 7x + 12 = 0.", a: "(x − 3)(x − 4) = 0, jadi x = 3 atau x = 4." },
    q: [
      ["Akar-akar dari x² − 9 = 0 adalah …", ["3 dan −3", "9 dan −9", "3 saja", "0 dan 9"], 0, "x² = 9."],
      ["Akar-akar dari x² + x − 6 = 0 adalah …", ["2 dan −3", "−2 dan 3", "1 dan −6", "6 dan −1"], 0, "(x − 2)(x + 3)."],
      ["Diskriminan dari x² − 4x + 4 = 0 adalah …", ["0", "8", "16", "−8"], 0, "16 − 16."],
      ["Jumlah akar dari 2x² − 8x + 3 = 0 adalah …", ["4", "−4", "3/2", "8"], 0, "−b/a = 8/2."],
      ["Persamaan kuadrat dengan D < 0 memiliki …", ["akar tidak real", "dua akar real", "akar kembar", "satu akar nol"], 0, "Akar imajiner."]
    ]
  },
  {
    id: "fungsi-kuadrat", t: "Fungsi Kuadrat dan Grafiknya", s: 1,
    sum: "Grafik fungsi kuadrat f(x) = ax² + bx + c berbentuk parabola. Nilai a menentukan arah buka parabola.",
    pts: [
      "<b>a > 0</b> parabola terbuka ke atas (punya titik minimum). <b>a < 0</b> terbuka ke bawah (punya titik maksimum).",
      "<b>Sumbu simetri:</b> x = −b/2a.",
      "<b>Titik puncak:</b> (−b/2a, −D/4a).",
      "<b>Titik potong sumbu-y:</b> (0, c). <b>Sumbu-x:</b> akar-akar persamaan.",
      "<b>Penerapan:</b> lintasan bola yang dilempar, luas maksimum kandang."
    ],
    q: [
      ["Grafik f(x) = −x² + 4 terbuka ke …", ["bawah", "atas", "kiri", "kanan"], 0, "a negatif."],
      ["Sumbu simetri f(x) = x² − 6x + 5 adalah …", ["x = 3", "x = −3", "x = 6", "x = 5"], 0, "6/2."],
      ["Titik potong grafik f(x) = x² + 2x − 8 dengan sumbu-y adalah …", ["(0, −8)", "(0, 2)", "(−8, 0)", "(2, 0)"], 0, "(0, c)."],
      ["Nilai minimum f(x) = x² − 4x + 7 adalah …", ["3", "7", "2", "−3"], 0, "f(2) = 4 − 8 + 7."],
      ["Grafik fungsi kuadrat disebut …", ["parabola", "hiperbola", "garis lurus", "lingkaran"], 0, "Parabola."]
    ]
  },
  {
    id: "transformasi", t: "Transformasi Geometri", s: 1,
    sum: "Transformasi mengubah posisi atau ukuran bangun. Ada empat jenis: translasi (geser), refleksi (cermin), rotasi (putar), dan dilatasi (perbesar/perkecil).",
    pts: [
      "<b>Translasi</b> (a, b): (x, y) → (x + a, y + b).",
      "<b>Refleksi:</b> sumbu-x (x, −y), sumbu-y (−x, y), garis y = x (y, x), titik O (−x, −y).",
      "<b>Rotasi 90° berlawanan arah jarum jam</b> pusat O: (x, y) → (−y, x). <b>180°:</b> (−x, −y).",
      "<b>Dilatasi</b> faktor k pusat O: (x, y) → (kx, ky).",
      "<b>Translasi, refleksi, rotasi</b> tidak mengubah ukuran bangun."
    ],
    q: [
      ["Titik A(2, 5) ditranslasi (3, −1) menjadi …", ["(5, 4)", "(−1, 6)", "(5, 6)", "(6, 4)"], 0, "2+3, 5−1."],
      ["Bayangan titik (4, −3) dicerminkan terhadap sumbu-x adalah …", ["(4, 3)", "(−4, −3)", "(−4, 3)", "(3, 4)"], 0, "y berubah tanda."],
      ["Bayangan titik (3, 1) dirotasi 180° pusat O adalah …", ["(−3, −1)", "(1, 3)", "(−1, 3)", "(3, −1)"], 0, "Keduanya berubah tanda."],
      ["Titik (2, 6) didilatasi faktor 3 pusat O menjadi …", ["(6, 18)", "(5, 9)", "(2/3, 2)", "(6, 6)"], 0, "Dikali 3."],
      ["Transformasi yang mengubah ukuran bangun adalah …", ["dilatasi", "translasi", "refleksi", "rotasi"], 0, "Dilatasi."]
    ]
  },
  {
    id: "kesebangunan", t: "Kesebangunan dan Kekongruenan", s: 2,
    sum: "Dua bangun sebangun kalau sudut-sudut yang bersesuaian sama besar dan sisi-sisi yang bersesuaian sebanding. Dua bangun kongruen kalau bentuk dan ukurannya sama persis.",
    pts: [
      "<b>Syarat sebangun:</b> sudut bersesuaian sama, perbandingan sisi bersesuaian sama.",
      "<b>Segitiga sebangun:</b> cukup dua pasang sudut sama besar (sd-sd) atau ketiga sisi sebanding.",
      "<b>Syarat segitiga kongruen:</b> s-s-s, s-sd-s, sd-s-sd, sd-sd-s.",
      "<b>Penerapan:</b> mengukur tinggi pohon dengan bayangan, skala foto, maket.",
      "<b>Rumus bayangan:</b> tinggi benda 1 / bayangan 1 = tinggi benda 2 / bayangan 2."
    ],
    q: [
      ["Tongkat 2 m memiliki bayangan 3 m. Pada saat yang sama bayangan pohon 15 m. Tinggi pohon …", ["10 m", "22,5 m", "7,5 m", "12 m"], 0, "2/3 = t/15."],
      ["Dua bangun yang bentuk dan ukurannya sama persis disebut …", ["kongruen", "sebangun", "simetris", "sejajar"], 0, "Kongruen."],
      ["Foto 4 cm × 6 cm diperbesar sebangun dengan lebar 12 cm. Panjangnya …", ["18 cm", "14 cm", "24 cm", "16 cm"], 0, "Skala 3."],
      ["Syarat dua segitiga kongruen berikut yang benar adalah …", ["sisi-sudut-sisi", "sudut-sudut-sudut", "sisi-sisi saja", "satu sudut sama"], 0, "s-sd-s."],
      ["Semua persegi pasti …", ["sebangun", "kongruen", "sama luas", "sama keliling"], 0, "Sudut sama, sisi sebanding."]
    ]
  },
  {
    id: "bangun-ruang-lengkung", t: "Bangun Ruang Sisi Lengkung", s: 2,
    sum: "Tabung, kerucut, dan bola adalah bangun ruang yang punya sisi lengkung. Kamu sering melihatnya pada kaleng, cone es krim, dan bola sepak.",
    pts: [
      "<b>Tabung:</b> V = πr²t, L = 2πr(r + t).",
      "<b>Kerucut:</b> V = ⅓πr²t, L = πr(r + s), dengan s = garis pelukis = √(r² + t²).",
      "<b>Bola:</b> V = 4/3 πr³, L = 4πr².",
      "<b>π</b> ≈ 22/7 (jika jari-jari kelipatan 7) atau 3,14.",
      "<b>Perbandingan volume</b> kerucut : setengah bola : tabung dengan r dan t = r sama adalah 1 : 2 : 3."
    ],
    q: [
      ["Volume tabung dengan r = 7 cm dan t = 10 cm adalah … (π = 22/7)", ["1.540 cm³", "440 cm³", "154 cm³", "3.080 cm³"], 0, "22/7 × 49 × 10."],
      ["Volume kerucut dengan r = 3 cm dan t = 7 cm adalah … (π = 22/7)", ["66 cm³", "198 cm³", "22 cm³", "132 cm³"], 0, "⅓ × 22/7 × 9 × 7."],
      ["Luas permukaan bola berjari-jari 7 cm adalah … (π = 22/7)", ["616 cm²", "154 cm²", "1.437 cm²", "308 cm²"], 0, "4 × 22/7 × 49."],
      ["Kerucut dengan r = 6 cm dan t = 8 cm memiliki garis pelukis …", ["10 cm", "14 cm", "12 cm", "48 cm"], 0, "√(36 + 64)."],
      ["Benda yang berbentuk bola adalah …", ["kelereng", "kaleng susu", "topi ulang tahun", "pipa"], 0, "Bola."]
    ]
  },
  {
    id: "peluang", t: "Peluang", s: 2,
    sum: "Peluang mengukur seberapa mungkin suatu kejadian terjadi, dengan nilai antara 0 (mustahil) dan 1 (pasti).",
    pts: [
      "<b>Ruang sampel (S):</b> semua hasil yang mungkin. Dadu: {1, 2, 3, 4, 5, 6}.",
      "<b>Peluang teoretis:</b> P(A) = n(A)/n(S).",
      "<b>Peluang empiris:</b> frekuensi kejadian / banyak percobaan.",
      "<b>Frekuensi harapan:</b> Fh = P(A) × banyak percobaan.",
      "<b>Komplemen:</b> P(bukan A) = 1 − P(A)."
    ],
    q: [
      ["Peluang muncul angka genap pada pelemparan satu dadu adalah …", ["1/2", "1/3", "1/6", "2/3"], 0, "{2,4,6} dari 6."],
      ["Dua koin dilempar. Banyak anggota ruang sampelnya …", ["4", "2", "6", "8"], 0, "AA, AG, GA, GG."],
      ["Kantong berisi 3 bola merah dan 5 bola biru. Peluang terambil merah …", ["3/8", "5/8", "3/5", "1/3"], 0, "3 dari 8."],
      ["Peluang hujan besok 0,3. Peluang tidak hujan …", ["0,7", "0,3", "1,3", "0"], 0, "1 − 0,3."],
      ["Dadu dilempar 60 kali. Frekuensi harapan muncul angka 5 adalah …", ["10", "5", "12", "6"], 0, "1/6 × 60."]
    ]
  }
];

MATERI[9].ipa = [
  {
    id: "reproduksi", t: "Sistem Reproduksi dan Pubertas", s: 1,
    sum: "Reproduksi adalah cara makhluk hidup menghasilkan keturunan. Pada remaja, pubertas membawa perubahan fisik dan emosi karena pengaruh hormon.",
    pts: [
      "<b>Ciri pubertas laki-laki:</b> suara membesar, jakun tumbuh, tumbuh kumis dan rambut di beberapa bagian tubuh, hormon testosteron.",
      "<b>Ciri pubertas perempuan:</b> menstruasi, pinggul melebar, hormon estrogen dan progesteron.",
      "<b>Fertilisasi</b> adalah peleburan sel sperma dan sel telur.",
      "<b>Reproduksi tumbuhan:</b> generatif (biji, penyerbukan) dan vegetatif alami (umbi, tunas) atau buatan (stek, cangkok).",
      "<b>Menjaga kesehatan reproduksi:</b> kebersihan diri, pakaian dalam bersih, menghindari pergaulan bebas."
    ],
    q: [
      ["Hormon yang memengaruhi ciri kelamin sekunder laki-laki adalah …", ["testosteron", "estrogen", "progesteron", "insulin"], 0, "Testosteron."],
      ["Peleburan sel sperma dan sel telur disebut …", ["fertilisasi", "menstruasi", "ovulasi", "penyerbukan"], 0, "Pembuahan."],
      ["Perkembangbiakan tumbuhan dengan cangkok termasuk …", ["vegetatif buatan", "vegetatif alami", "generatif", "spora"], 0, "Campur tangan manusia."],
      ["Contoh ciri pubertas pada laki-laki adalah …", ["suara membesar", "menstruasi", "pinggul melebar", "payudara membesar"], 0, "Ciri sekunder."],
      ["Kentang berkembang biak secara vegetatif alami dengan …", ["umbi batang", "geragih", "tunas", "spora"], 0, "Umbi batang."]
    ]
  },
  {
    id: "pewarisan-sifat", t: "Pewarisan Sifat", s: 1,
    sum: "Kamu mirip orang tuamu karena mewarisi gen dari mereka. Gregor Mendel menemukan pola pewarisan sifat lewat percobaan kacang ercis.",
    pts: [
      "<b>Kromosom</b> berisi gen, terletak di inti sel. Manusia punya 46 kromosom (23 pasang).",
      "<b>Gen dominan</b> menutupi gen resesif. Contoh: T (tinggi) dominan terhadap t (pendek).",
      "<b>Genotipe</b> susunan gen (Tt), <b>fenotipe</b> sifat yang tampak (tinggi).",
      "<b>Persilangan monohibrid</b> Tt × Tt menghasilkan rasio fenotipe 3 : 1 dan genotipe 1 : 2 : 1.",
      "<b>Persilangan dihibrid</b> F2 menghasilkan rasio fenotipe 9 : 3 : 3 : 1."
    ],
    q: [
      ["Bapak genetika adalah …", ["Gregor Mendel", "Charles Darwin", "Louis Pasteur", "Robert Hooke"], 0, "Kacang ercis."],
      ["Jumlah kromosom pada sel tubuh manusia adalah …", ["46", "23", "44", "48"], 0, "23 pasang."],
      ["Sifat yang tampak dari luar disebut …", ["fenotipe", "genotipe", "alel", "kromosom"], 0, "Fenotipe."],
      ["Rasio fenotipe F2 persilangan monohibrid dominan penuh adalah …", ["3 : 1", "1 : 2 : 1", "9 : 3 : 3 : 1", "1 : 1"], 0, "Tt × Tt."],
      ["Gen yang sifatnya tertutupi disebut gen …", ["resesif", "dominan", "intermediet", "letal"], 0, "Resesif."]
    ]
  },
  {
    id: "listrik", t: "Listrik Statis dan Dinamis", s: 1,
    sum: "Listrik statis adalah muatan listrik yang diam, seperti saat penggaris plastik menarik potongan kertas setelah digosok. Listrik dinamis adalah muatan yang mengalir dalam rangkaian.",
    pts: [
      "<b>Muatan sejenis</b> tolak-menolak, <b>berbeda jenis</b> tarik-menarik.",
      "<b>Hukum Ohm:</b> V = I × R (tegangan = kuat arus × hambatan).",
      "<b>Rangkaian seri:</b> R total = R₁ + R₂, arus sama di semua titik. Satu lampu putus, semua padam.",
      "<b>Rangkaian paralel:</b> 1/R total = 1/R₁ + 1/R₂, tegangan sama. Satu lampu putus, yang lain tetap menyala.",
      "<b>Energi listrik:</b> W = P × t. Biaya listrik dihitung dalam kWh."
    ],
    q: [
      ["Hambatan 10 Ω dialiri arus 2 A. Tegangannya …", ["20 V", "5 V", "12 V", "0,2 V"], 0, "V = IR."],
      ["Dua muatan negatif yang didekatkan akan …", ["tolak-menolak", "tarik-menarik", "diam", "menyatu"], 0, "Sejenis."],
      ["Hambatan 4 Ω dan 6 Ω dirangkai seri. Hambatan totalnya …", ["10 Ω", "2,4 Ω", "24 Ω", "2 Ω"], 0, "Dijumlah."],
      ["Rangkaian lampu di rumah umumnya dipasang …", ["paralel", "seri", "campuran seri saja", "terbuka"], 0, "Agar tidak padam semua."],
      ["Lampu 100 W menyala 5 jam. Energi yang terpakai …", ["0,5 kWh", "500 kWh", "5 kWh", "20 kWh"], 0, "100 × 5 = 500 Wh."]
    ]
  },
  {
    id: "magnet", t: "Kemagnetan", s: 2,
    sum: "Magnet menarik benda dari besi, nikel, atau kobalt. Setiap magnet punya dua kutub: utara dan selatan. Bumi juga berperilaku seperti magnet raksasa.",
    pts: [
      "<b>Kutub sejenis</b> tolak-menolak, <b>tidak sejenis</b> tarik-menarik.",
      "<b>Benda feromagnetik</b> ditarik kuat (besi, baja), <b>paramagnetik</b> lemah (aluminium), <b>diamagnetik</b> sedikit ditolak (emas, tembaga).",
      "<b>Cara membuat magnet:</b> menggosok, induksi, elektromagnetik (dialiri arus listrik).",
      "<b>Elektromagnet</b> dipakai di bel listrik, relai, dan crane pengangkat besi.",
      "<b>Induksi elektromagnetik</b> (Faraday) menghasilkan listrik di generator dan transformator."
    ],
    q: [
      ["Kutub utara magnet didekatkan ke kutub utara magnet lain akan …", ["tolak-menolak", "tarik-menarik", "diam", "berputar"], 0, "Sejenis."],
      ["Benda yang ditarik kuat oleh magnet disebut …", ["feromagnetik", "diamagnetik", "paramagnetik", "isolator"], 0, "Besi."],
      ["Magnet yang dibuat dengan mengalirkan arus listrik disebut …", ["elektromagnet", "magnet permanen", "magnet alam", "kompas"], 0, "Elektromagnet."],
      ["Alat yang menaikkan atau menurunkan tegangan listrik AC adalah …", ["transformator", "kompas", "baterai", "dinamo sepeda"], 0, "Trafo."],
      ["Contoh benda diamagnetik adalah …", ["emas", "besi", "nikel", "baja"], 0, "Sedikit ditolak."]
    ]
  },
  {
    id: "bioteknologi", t: "Bioteknologi", s: 2,
    sum: "Bioteknologi memanfaatkan makhluk hidup, terutama mikroorganisme, untuk menghasilkan produk yang berguna. Contohnya tempe, yogurt, dan obat-obatan.",
    pts: [
      "<b>Bioteknologi konvensional:</b> tempe (<i>Rhizopus oryzae</i>), tapai (<i>Saccharomyces cerevisiae</i>), yogurt (<i>Lactobacillus bulgaricus</i>), kecap (<i>Aspergillus wentii</i>).",
      "<b>Bioteknologi modern:</b> rekayasa genetika, kultur jaringan, kloning, tanaman transgenik.",
      "<b>Insulin</b> untuk penderita diabetes diproduksi bakteri hasil rekayasa genetika.",
      "<b>Kultur jaringan</b> menghasilkan bibit tanaman yang seragam dalam jumlah banyak.",
      "<b>Dampak negatif:</b> potensi alergi, gangguan keseimbangan ekosistem, isu etika."
    ],
    q: [
      ["Jamur yang digunakan dalam pembuatan tempe adalah …", ["Rhizopus oryzae", "Saccharomyces cerevisiae", "Lactobacillus", "Aspergillus wentii"], 0, "Rhizopus."],
      ["Contoh bioteknologi modern adalah …", ["kultur jaringan", "pembuatan tapai", "pembuatan tempe", "pembuatan kecap"], 0, "Modern."],
      ["Yogurt dibuat dengan bantuan …", ["bakteri Lactobacillus", "jamur Rhizopus", "ragi roti", "alga"], 0, "Bakteri asam laktat."],
      ["Insulin hasil rekayasa genetika digunakan untuk penderita …", ["diabetes", "anemia", "maag", "flu"], 0, "Diabetes."],
      ["Keunggulan kultur jaringan adalah …", ["bibit seragam dalam jumlah banyak", "butuh lahan luas", "waktu sangat lama", "bibit beragam"], 0, "Massal dan seragam."]
    ]
  },
  {
    id: "tanah", t: "Tanah dan Keberlangsungan Kehidupan", s: 2,
    sum: "Tanah terbentuk dari pelapukan batuan selama ribuan tahun. Tanah menyediakan tempat tumbuh tanaman, air, dan unsur hara untuk kehidupan.",
    pts: [
      "<b>Komponen tanah:</b> mineral, bahan organik, air, udara.",
      "<b>Lapisan tanah:</b> horizon O (organik), A (tanah atas, subur), B, C, dan batuan induk.",
      "<b>Jenis tanah:</b> aluvial (endapan sungai, subur), vulkanik (abu gunung api, sangat subur), humus, laterit (kurang subur).",
      "<b>Pelapukan:</b> fisika (suhu), kimia (air hujan), biologi (akar, hewan).",
      "<b>Konservasi tanah:</b> terasering, reboisasi, rotasi tanaman, pupuk organik."
    ],
    q: [
      ["Lapisan tanah paling subur adalah …", ["tanah atas (horizon A)", "batuan induk", "horizon C", "lapisan pasir"], 0, "Banyak humus."],
      ["Tanah dari abu letusan gunung api disebut tanah …", ["vulkanik", "aluvial", "laterit", "kapur"], 0, "Sangat subur."],
      ["Membuat sawah berundak di lereng bukit disebut …", ["terasering", "reboisasi", "irigasi", "rotasi"], 0, "Mencegah erosi."],
      ["Pelapukan batuan oleh akar tumbuhan termasuk pelapukan …", ["biologi", "fisika", "kimia", "mekanik buatan"], 0, "Makhluk hidup."],
      ["Tanah endapan sungai disebut tanah …", ["aluvial", "vulkanik", "podzolik", "gambut"], 0, "Aluvial."]
    ]
  }
];

MATERI[9].ips = [
  {
    id: "proklamasi", t: "Proklamasi dan Mempertahankan Kemerdekaan", s: 1,
    sum: "Indonesia memproklamasikan kemerdekaan pada 17 Agustus 1945. Setelah itu bangsa Indonesia masih harus mempertahankannya dari Belanda yang ingin kembali berkuasa.",
    pts: [
      "<b>Peristiwa Rengasdengklok</b> (16 Agustus 1945): golongan muda membawa Soekarno-Hatta agar segera memproklamasikan kemerdekaan.",
      "<b>Teks proklamasi</b> dirumuskan di rumah Laksamana Maeda, diketik Sayuti Melik, dibacakan di Jalan Pegangsaan Timur 56.",
      "<b>Pertempuran:</b> 10 November 1945 di Surabaya (Hari Pahlawan), Bandung Lautan Api, Ambarawa, Medan Area.",
      "<b>Diplomasi:</b> Linggarjati (1946), Renville (1948), Roem-Royen (1949), Konferensi Meja Bundar (1949).",
      "<b>Agresi Militer Belanda I</b> (1947) dan <b>II</b> (1948) melanggar perjanjian."
    ],
    q: [
      ["Teks proklamasi diketik oleh …", ["Sayuti Melik", "Soekarno", "Ahmad Soebardjo", "Fatmawati"], 0, "Sayuti Melik."],
      ["Peristiwa 10 November 1945 terjadi di …", ["Surabaya", "Bandung", "Ambarawa", "Medan"], 0, "Hari Pahlawan."],
      ["Golongan muda membawa Soekarno-Hatta ke Rengasdengklok supaya …", ["proklamasi segera dilaksanakan", "mereka beristirahat", "bertemu Jepang", "menghindari banjir"], 0, "Lepas dari pengaruh Jepang."],
      ["Perundingan yang mengakhiri konflik dan Belanda mengakui kedaulatan Indonesia adalah …", ["Konferensi Meja Bundar", "Linggarjati", "Renville", "Roem-Royen"], 0, "KMB 1949."],
      ["Teks proklamasi dirumuskan di rumah …", ["Laksamana Maeda", "Soekarno", "Hatta", "Sukarni"], 0, "Jl. Imam Bonjol No. 1."]
    ]
  },
  {
    id: "orde", t: "Masa Orde Lama, Orde Baru, dan Reformasi", s: 1,
    sum: "Sejarah pemerintahan Indonesia setelah kemerdekaan terbagi menjadi tiga masa besar dengan ciri yang berbeda.",
    pts: [
      "<b>Demokrasi Liberal (1950–1959):</b> kabinet sering berganti. Pemilu pertama 1955.",
      "<b>Dekrit Presiden 5 Juli 1959</b> menandai Demokrasi Terpimpin (Orde Lama).",
      "<b>Orde Baru (1966–1998):</b> dipimpin Soeharto, pembangunan lewat Repelita, tetapi marak KKN dan kebebasan dibatasi.",
      "<b>Reformasi 1998:</b> krisis moneter dan demonstrasi mahasiswa membuat Soeharto mundur 21 Mei 1998.",
      "<b>Hasil reformasi:</b> amandemen UUD 1945, pemilihan presiden langsung (2004), otonomi daerah, kebebasan pers."
    ],
    q: [
      ["Pemilu pertama di Indonesia diselenggarakan tahun …", ["1955", "1945", "1971", "1999"], 0, "1955."],
      ["Dekrit Presiden dikeluarkan pada …", ["5 Juli 1959", "17 Agustus 1945", "11 Maret 1966", "21 Mei 1998"], 0, "Kembali ke UUD 1945."],
      ["Presiden pada masa Orde Baru adalah …", ["Soeharto", "Soekarno", "B.J. Habibie", "Gus Dur"], 0, "1966–1998."],
      ["Salah satu tuntutan reformasi adalah …", ["pemberantasan KKN", "kembali ke Orde Baru", "pembubaran DPR", "penghapusan pemilu"], 0, "KKN."],
      ["Pemilihan presiden secara langsung pertama kali dilaksanakan tahun …", ["2004", "1999", "1998", "2009"], 0, "SBY terpilih."]
    ]
  },
  {
    id: "perdagangan-internasional", t: "Perdagangan Internasional", s: 2,
    sum: "Tidak ada negara yang bisa memenuhi semua kebutuhannya sendiri. Karena itu negara-negara saling membeli (impor) dan menjual (ekspor) barang dan jasa.",
    pts: [
      "<b>Penyebab:</b> perbedaan sumber daya alam, teknologi, iklim, dan selera.",
      "<b>Ekspor Indonesia:</b> batu bara, minyak sawit, karet, tekstil. <b>Impor:</b> mesin, gandum, kendaraan.",
      "<b>Neraca perdagangan surplus</b> jika ekspor > impor, <b>defisit</b> jika impor > ekspor.",
      "<b>Kebijakan:</b> tarif (bea masuk), kuota, subsidi ekspor, larangan impor.",
      "<b>Organisasi:</b> WTO (dunia), AFTA (ASEAN), APEC (Asia-Pasifik)."
    ],
    q: [
      ["Menjual barang ke luar negeri disebut …", ["ekspor", "impor", "kuota", "tarif"], 0, "Ekspor."],
      ["Neraca perdagangan disebut surplus jika …", ["ekspor lebih besar dari impor", "impor lebih besar", "ekspor sama dengan impor", "tidak ada perdagangan"], 0, "Surplus."],
      ["Pajak atas barang impor disebut …", ["tarif / bea masuk", "kuota", "subsidi", "dumping"], 0, "Tarif."],
      ["Contoh komoditas ekspor utama Indonesia adalah …", ["minyak sawit", "gandum", "pesawat terbang", "salju"], 0, "CPO."],
      ["Kawasan perdagangan bebas ASEAN disebut …", ["AFTA", "WTO", "OPEC", "NATO"], 0, "ASEAN Free Trade Area."]
    ]
  },
  {
    id: "globalisasi", t: "Globalisasi dan Dampaknya", s: 2,
    sum: "Globalisasi membuat negara-negara makin terhubung lewat teknologi, perdagangan, dan budaya. Kamu merasakannya tiap kali menonton video dari luar negeri atau memakai aplikasi buatan negara lain.",
    pts: [
      "<b>Pendorong:</b> kemajuan teknologi informasi dan transportasi.",
      "<b>Dampak positif:</b> informasi cepat, pertukaran ilmu, peluang ekonomi, produk beragam.",
      "<b>Dampak negatif:</b> lunturnya budaya lokal, konsumerisme, kesenjangan sosial.",
      "<b>Sikap:</b> selektif menerima budaya asing, bangga memakai produk dalam negeri, melestarikan budaya daerah.",
      "<b>Contoh budaya global:</b> makanan cepat saji, musik internasional, media sosial."
    ],
    q: [
      ["Faktor utama pendorong globalisasi adalah …", ["kemajuan teknologi informasi", "perang dunia", "penurunan penduduk", "isolasi negara"], 0, "Teknologi."],
      ["Contoh dampak positif globalisasi adalah …", ["informasi mudah diakses", "budaya lokal luntur", "gaya hidup konsumtif", "individualisme"], 0, "Positif."],
      ["Gaya hidup suka membeli barang secara berlebihan disebut …", ["konsumerisme", "nasionalisme", "patriotisme", "gotong royong"], 0, "Konsumtif."],
      ["Sikap yang tepat menghadapi budaya asing adalah …", ["selektif", "menerima semuanya", "menolak semuanya", "mengabaikan"], 0, "Disaring."],
      ["Menggunakan produk buatan Indonesia termasuk upaya …", ["memperkuat ekonomi dalam negeri", "menolak globalisasi", "konsumerisme", "westernisasi"], 0, "Cinta produk lokal."]
    ]
  },
  {
    id: "asean", t: "Negara ASEAN dan Benua di Dunia", s: 2,
    sum: "ASEAN adalah organisasi negara-negara Asia Tenggara yang berdiri tahun 1967. Bab ini juga membahas kondisi benua-benua di dunia.",
    pts: [
      "<b>Deklarasi Bangkok</b> 8 Agustus 1967 oleh Indonesia (Adam Malik), Malaysia, Filipina, Singapura, Thailand.",
      "<b>Anggota ASEAN</b> saat ini: Indonesia, Malaysia, Filipina, Singapura, Thailand, Brunei, Vietnam, Laos, Myanmar, Kamboja, Timor-Leste (anggota ke-11, 2025).",
      "<b>Sekretariat ASEAN</b> berada di Jakarta.",
      "<b>Laos</b> satu-satunya negara ASEAN yang tidak punya laut.",
      "<b>Benua:</b> Asia (terluas), Afrika, Amerika, Eropa, Australia/Oseania (terkecil), Antarktika."
    ],
    q: [
      ["ASEAN didirikan melalui …", ["Deklarasi Bangkok", "Deklarasi Djuanda", "Konferensi Asia Afrika", "Perjanjian Renville"], 0, "8 Agustus 1967."],
      ["Wakil Indonesia saat pendirian ASEAN adalah …", ["Adam Malik", "Soekarno", "Mohammad Hatta", "Soeharto"], 0, "Menlu Adam Malik."],
      ["Sekretariat ASEAN berada di …", ["Jakarta", "Bangkok", "Kuala Lumpur", "Singapura"], 0, "Jakarta."],
      ["Negara ASEAN yang tidak memiliki wilayah laut adalah …", ["Laos", "Kamboja", "Myanmar", "Vietnam"], 0, "Landlocked."],
      ["Benua terluas di dunia adalah …", ["Asia", "Afrika", "Amerika", "Eropa"], 0, "Asia."]
    ]
  }
];

MATERI[9].indo = [
  {
    id: "laporan-percobaan", t: "Teks Laporan Percobaan", s: 1,
    sum: "Teks laporan percobaan menyampaikan hasil percobaan secara runtut dan objektif, sehingga orang lain bisa mengulanginya.",
    pts: [
      "<b>Struktur:</b> tujuan, alat dan bahan, langkah percobaan, hasil, simpulan.",
      "<b>Kebahasaan:</b> kalimat perintah atau pasif pada langkah, kata teknis, konjungsi temporal, kata bilangan.",
      "<b>Objektif:</b> laporkan apa yang terjadi, bukan perasaan.",
      "<b>Hasil</b> boleh disajikan dalam tabel atau grafik.",
      "<b>Simpulan</b> harus menjawab tujuan percobaan."
    ],
    q: [
      ["Bagian laporan percobaan yang menjawab tujuan adalah …", ["simpulan", "alat dan bahan", "langkah", "judul"], 0, "Simpulan."],
      ["Kalimat yang tepat untuk langkah percobaan adalah …", ["Masukkan 50 ml air ke dalam gelas ukur.", "Air itu sangat jernih sekali.", "Saya senang melakukan percobaan.", "Percobaan ini menyenangkan."], 0, "Perintah dan bilangan."],
      ["Laporan percobaan harus bersifat …", ["objektif", "subjektif", "fiktif", "persuasif"], 0, "Faktual."],
      ["Data hasil percobaan sebaiknya disajikan dalam …", ["tabel atau grafik", "puisi", "dialog", "pantun"], 0, "Rapi dan jelas."],
      ["Konjungsi “setelah itu” termasuk konjungsi …", ["temporal", "kausal", "pertentangan", "syarat"], 0, "Urutan waktu."]
    ]
  },
  {
    id: "pidato", t: "Pidato Persuasif", s: 1,
    sum: "Pidato persuasif bertujuan mengajak atau membujuk pendengar untuk melakukan sesuatu. Contohnya pidato ajakan menjaga kebersihan sekolah.",
    pts: [
      "<b>Struktur:</b> pembukaan (salam, sapaan, ucapan syukur), isi (gagasan dan ajakan), penutup (simpulan, harapan, salam).",
      "<b>Kebahasaan:</b> kata ajakan (mari, ayo, marilah), kata sapaan (Bapak/Ibu guru yang saya hormati), kata kerja mental.",
      "<b>Metode pidato:</b> impromptu (spontan), memoriter (hafalan), naskah (membaca), ekstemporan (kerangka).",
      "<b>Penyampaian:</b> suara jelas, intonasi tepat, kontak mata, gerak tubuh wajar.",
      "<b>Argumen</b> perlu didukung fakta supaya ajakan meyakinkan."
    ],
    q: [
      ["Kata yang menunjukkan ajakan dalam pidato adalah …", ["marilah", "meskipun", "karena", "adalah"], 0, "Ajakan."],
      ["Metode pidato dengan menghafal seluruh naskah disebut …", ["memoriter", "impromptu", "ekstemporan", "naskah"], 0, "Hafalan."],
      ["Bagian pidato yang berisi salam dan sapaan adalah …", ["pembukaan", "isi", "penutup", "simpulan"], 0, "Pembukaan."],
      ["Metode pidato dengan kerangka poin saja disebut …", ["ekstemporan", "memoriter", "impromptu", "membaca naskah"], 0, "Ekstemporan."],
      ["Tujuan pidato persuasif adalah …", ["mengajak pendengar", "menghibur saja", "melaporkan percobaan", "menceritakan dongeng"], 0, "Membujuk."]
    ]
  },
  {
    id: "cerpen", t: "Cerita Pendek", s: 1,
    sum: "Cerpen adalah cerita fiksi yang singkat, biasanya bisa dibaca sekali duduk, dengan satu konflik utama.",
    pts: [
      "<b>Struktur:</b> abstrak (opsional), orientasi, komplikasi, evaluasi, resolusi, koda.",
      "<b>Unsur intrinsik:</b> tema, alur, latar, tokoh dan penokohan, sudut pandang, gaya bahasa, amanat.",
      "<b>Unsur ekstrinsik:</b> latar belakang pengarang, nilai sosial, budaya, agama dalam cerita.",
      "<b>Teknik penokohan:</b> langsung (analitik) dan tidak langsung (dramatik: lewat dialog, tindakan, pikiran tokoh).",
      "<b>Konflik:</b> batin (dalam diri tokoh) dan fisik/sosial (dengan tokoh lain atau lingkungan)."
    ],
    q: [
      ["Bagian cerpen yang berisi pesan atau komentar penutup disebut …", ["koda", "orientasi", "komplikasi", "abstrak"], 0, "Koda."],
      ["Latar belakang kehidupan pengarang termasuk unsur …", ["ekstrinsik", "intrinsik", "alur", "tema"], 0, "Di luar cerita."],
      ["Penokohan lewat dialog dan tindakan tokoh disebut teknik …", ["dramatik", "analitik", "langsung", "deskriptif"], 0, "Tidak langsung."],
      ["Pertentangan dalam diri tokoh disebut konflik …", ["batin", "fisik", "sosial", "alam"], 0, "Internal."],
      ["Ciri cerpen adalah …", ["habis dibaca sekali duduk", "selalu berdasarkan fakta", "lebih dari 300 halaman", "tidak memiliki konflik"], 0, "Singkat."]
    ]
  },
  {
    id: "tanggapan", t: "Teks Tanggapan", s: 2,
    sum: "Teks tanggapan berisi kritik atau pujian terhadap suatu karya, kebijakan, atau fenomena. Tanggapan yang baik disertai alasan yang logis.",
    pts: [
      "<b>Struktur:</b> konteks (gambaran objek), deskripsi teks/evaluasi (penilaian kelebihan dan kekurangan), penilaian/simpulan.",
      "<b>Kebahasaan:</b> kata ganti, konjungsi (namun, meskipun, sebaliknya), kalimat opini, kata evaluatif (menarik, kurang tepat).",
      "<b>Kritik yang santun:</b> sampaikan kekurangan dengan saran perbaikan.",
      "<b>Tanggapan</b> harus objektif dan berdasarkan bukti dari objek.",
      "<b>Contoh objek:</b> film, buku, peraturan sekolah, fasilitas umum."
    ],
    q: [
      ["Teks yang berisi kritik atau pujian terhadap suatu hal disebut teks …", ["tanggapan", "prosedur", "eksplanasi", "narasi"], 0, "Tanggapan."],
      ["Kritik yang santun sebaiknya disertai …", ["saran perbaikan", "kata kasar", "ejekan", "sindiran"], 0, "Membangun."],
      ["Bagian teks tanggapan yang memperkenalkan objek disebut …", ["konteks", "evaluasi", "simpulan", "argumentasi"], 0, "Konteks."],
      ["Konjungsi pertentangan yang sering dipakai dalam teks tanggapan adalah …", ["namun", "lalu", "dan", "kemudian"], 0, "Pertentangan."],
      ["Tanggapan yang baik bersifat …", ["objektif dan berdasar bukti", "berdasarkan perasaan suka-tidak suka", "menjatuhkan", "tanpa alasan"], 0, "Objektif."]
    ]
  },
  {
    id: "diskusi", t: "Teks Diskusi", s: 2,
    sum: "Teks diskusi menyajikan suatu isu dari dua sudut pandang, yaitu pendapat yang mendukung (pro) dan yang menolak (kontra), lalu ditutup dengan simpulan atau rekomendasi.",
    pts: [
      "<b>Struktur:</b> isu, argumen pendukung, argumen penentang, simpulan/saran.",
      "<b>Kebahasaan:</b> konjungsi pertentangan (sebaliknya, namun), konjungsi kausal, kata kerja mental, istilah teknis.",
      "<b>Bedanya dengan eksposisi:</b> eksposisi hanya satu sudut pandang, diskusi menyajikan dua sisi.",
      "<b>Contoh isu:</b> boleh tidaknya siswa membawa ponsel ke sekolah.",
      "<b>Simpulan</b> bisa memihak atau menengahi."
    ],
    q: [
      ["Teks diskusi menyajikan …", ["pendapat pro dan kontra", "satu pendapat saja", "langkah-langkah", "cerita fiksi"], 0, "Dua sisi."],
      ["Bagian awal teks diskusi berisi …", ["isu", "simpulan", "argumen penentang", "resolusi"], 0, "Isu."],
      ["Perbedaan teks diskusi dan eksposisi terletak pada …", ["jumlah sudut pandang", "panjang teks", "jumlah paragraf", "judul"], 0, "Dua vs satu."],
      ["Contoh isu yang cocok untuk teks diskusi adalah …", ["boleh tidaknya membawa ponsel ke sekolah", "cara membuat teh", "proses hujan", "riwayat hidup tokoh"], 0, "Ada pro-kontra."],
      ["Konjungsi “sebaliknya” menunjukkan hubungan …", ["pertentangan", "waktu", "sebab", "tujuan"], 0, "Kontras."]
    ]
  },
  {
    id: "biografi", t: "Teks Biografi dan Inspiratif", s: 2,
    sum: "Biografi menceritakan riwayat hidup seseorang yang ditulis orang lain. Autobiografi ditulis oleh tokohnya sendiri. Keduanya memuat keteladanan yang bisa kamu tiru.",
    pts: [
      "<b>Struktur:</b> orientasi (pengenalan tokoh), peristiwa dan masalah (rangkaian kejadian penting), reorientasi (pandangan penulis).",
      "<b>Kebahasaan:</b> kata ganti orang ketiga (ia, beliau), kata kerja lampau, konjungsi temporal, keterangan waktu.",
      "<b>Isi:</b> fakta hidup tokoh, perjuangan, prestasi, dan nilai teladan.",
      "<b>Sumber:</b> wawancara, dokumen, buku, arsip.",
      "<b>Contoh tokoh:</b> B.J. Habibie, R.A. Kartini, Ki Hajar Dewantara."
    ],
    q: [
      ["Riwayat hidup yang ditulis oleh tokohnya sendiri disebut …", ["autobiografi", "biografi", "memoar fiksi", "novel"], 0, "Auto = sendiri."],
      ["Kata ganti yang sering digunakan dalam biografi adalah …", ["beliau", "aku", "kamu", "kalian"], 0, "Orang ketiga."],
      ["Bagian biografi yang berisi pandangan penulis tentang tokoh disebut …", ["reorientasi", "orientasi", "komplikasi", "tesis"], 0, "Penutup."],
      ["Tujuan utama membaca biografi adalah …", ["meneladani tokoh", "menghafal tanggal saja", "mencari hiburan semata", "mengkritik tokoh"], 0, "Keteladanan."],
      ["Isi biografi harus berdasarkan …", ["fakta", "khayalan", "rumor", "mimpi penulis"], 0, "Nonfiksi."]
    ]
  }
];
