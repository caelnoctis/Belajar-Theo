// KELAS 8 — Matematika, IPA, IPS, Bahasa Indonesia
MATERI[8].mtk = [
  {
    id: "pola-bilangan", t: "Pola Bilangan", s: 1,
    sum: "Pola bilangan adalah susunan bilangan yang mengikuti aturan tertentu. Kalau kamu menemukan aturannya, kamu bisa menebak suku ke berapa pun tanpa menulis semuanya.",
    pts: [
      "<b>Pola bilangan ganjil:</b> 1, 3, 5, 7, … rumus Un = 2n − 1.",
      "<b>Pola bilangan genap:</b> 2, 4, 6, 8, … rumus Un = 2n.",
      "<b>Pola persegi:</b> 1, 4, 9, 16, … rumus Un = n².",
      "<b>Pola segitiga:</b> 1, 3, 6, 10, … rumus Un = n(n + 1)/2.",
      "<b>Barisan aritmetika:</b> selisih tetap (beda b). Un = a + (n − 1)b."
    ],
    ex: { q: "Barisan 5, 8, 11, 14, … Tentukan suku ke-20.", a: "a = 5, b = 3. U20 = 5 + 19 × 3 = 62." },
    q: [
      ["Suku berikutnya dari 2, 6, 18, 54, … adalah …", ["162", "108", "72", "216"], 0, "Dikali 3."],
      ["Suku ke-10 dari pola bilangan persegi adalah …", ["100", "20", "55", "110"], 0, "10² = 100."],
      ["Rumus suku ke-n dari 3, 7, 11, 15, … adalah …", ["4n − 1", "4n + 3", "3n + 1", "n + 4"], 0, "a = 3, b = 4: 3 + (n − 1)4 = 4n − 1."],
      ["Suku ke-6 pola bilangan segitiga adalah …", ["21", "15", "28", "36"], 0, "6 × 7 / 2 = 21."],
      ["Jumlah 10 bilangan ganjil pertama adalah …", ["100", "55", "110", "50"], 0, "Jumlah n bilangan ganjil pertama = n²."]
    ]
  },
  {
    id: "kartesius", t: "Koordinat Kartesius", s: 1,
    sum: "Bidang Kartesius dibentuk oleh dua garis bilangan yang saling tegak lurus: sumbu-x (mendatar) dan sumbu-y (tegak). Setiap titik ditulis sebagai pasangan (x, y).",
    pts: [
      "<b>Kuadran I:</b> (+, +). <b>Kuadran II:</b> (−, +). <b>Kuadran III:</b> (−, −). <b>Kuadran IV:</b> (+, −).",
      "<b>Titik asal</b> O(0, 0) adalah perpotongan kedua sumbu.",
      "<b>Jarak titik ke sumbu-x</b> = |y|, ke sumbu-y = |x|.",
      "<b>Posisi relatif:</b> titik A(3, 2) terhadap B(1, 1) berada 2 satuan ke kanan dan 1 satuan ke atas.",
      "<b>Garis sejajar sumbu-x</b> punya nilai y yang sama untuk semua titiknya."
    ],
    ex: { q: "Di kuadran mana titik P(−4, 7)?", a: "x negatif, y positif. Kuadran II." },
    q: [
      ["Titik (5, −3) terletak di kuadran …", ["IV", "I", "II", "III"], 0, "x positif, y negatif."],
      ["Jarak titik A(−6, 2) ke sumbu-y adalah …", ["6 satuan", "2 satuan", "8 satuan", "4 satuan"], 0, "|x| = 6."],
      ["Titik yang terletak pada sumbu-x adalah …", ["(4, 0)", "(0, 4)", "(4, 4)", "(−4, 4)"], 0, "y = 0."],
      ["Titik B(2, 3) digeser 4 satuan ke kiri menjadi …", ["(−2, 3)", "(6, 3)", "(2, −1)", "(2, 7)"], 0, "x − 4."],
      ["Titik (−1, −8) berada di kuadran …", ["III", "II", "IV", "I"], 0, "Keduanya negatif."]
    ]
  },
  {
    id: "fungsi", t: "Relasi dan Fungsi", s: 1,
    sum: "Relasi menghubungkan anggota himpunan A dengan anggota himpunan B. Fungsi adalah relasi khusus: setiap anggota A dipasangkan dengan tepat satu anggota B.",
    pts: [
      "<b>Penyajian relasi:</b> diagram panah, himpunan pasangan berurutan, diagram Kartesius.",
      "<b>Domain</b> = daerah asal (A), <b>kodomain</b> = daerah kawan (B), <b>range</b> = daerah hasil (anggota B yang punya pasangan).",
      "<b>Notasi fungsi:</b> f : x → 2x + 1 atau f(x) = 2x + 1.",
      "<b>Nilai fungsi:</b> f(3) = 2 × 3 + 1 = 7.",
      "<b>Banyak pemetaan</b> dari A ke B = n(B)^n(A)."
    ],
    ex: { q: "f(x) = 3x − 4. Jika f(a) = 11, berapa a?", a: "3a − 4 = 11 → 3a = 15 → a = 5." },
    q: [
      ["Jika f(x) = 5x − 2, nilai f(4) adalah …", ["18", "22", "20", "3"], 0, "20 − 2 = 18."],
      ["Daerah asal suatu fungsi disebut …", ["domain", "kodomain", "range", "relasi"], 0, "Domain."],
      ["Himpunan {(1, a), (2, b), (3, a)} merupakan …", ["fungsi", "bukan fungsi", "korespondensi satu-satu", "relasi kosong"], 0, "Tiap anggota domain punya tepat satu pasangan."],
      ["n(A) = 2 dan n(B) = 3. Banyak pemetaan dari A ke B adalah …", ["9", "8", "6", "5"], 0, "3² = 9."],
      ["f(x) = 2x + b dan f(3) = 10. Nilai b adalah …", ["4", "3", "7", "16"], 0, "6 + b = 10."]
    ]
  },
  {
    id: "garis-lurus", t: "Persamaan Garis Lurus", s: 1,
    sum: "Persamaan garis lurus umumnya ditulis y = mx + c, dengan m sebagai gradien (kemiringan) dan c titik potong dengan sumbu-y.",
    pts: [
      "<b>Gradien dua titik:</b> m = (y₂ − y₁)/(x₂ − x₁).",
      "<b>Garis sejajar</b> punya gradien sama (m₁ = m₂).",
      "<b>Garis tegak lurus:</b> m₁ × m₂ = −1.",
      "<b>Persamaan garis melalui (x₁, y₁) dengan gradien m:</b> y − y₁ = m(x − x₁).",
      "<b>Bentuk ax + by + c = 0:</b> gradiennya m = −a/b."
    ],
    ex: { q: "Tentukan gradien garis yang melalui A(1, 2) dan B(4, 11).", a: "m = (11 − 2)/(4 − 1) = 9/3 = 3." },
    q: [
      ["Gradien garis y = −4x + 7 adalah …", ["−4", "7", "4", "−7"], 0, "Koefisien x."],
      ["Gradien garis 2x + 3y − 6 = 0 adalah …", ["−2/3", "2/3", "−3/2", "3/2"], 0, "m = −a/b = −2/3."],
      ["Gradien garis yang tegak lurus garis dengan m = 2 adalah …", ["−1/2", "1/2", "−2", "2"], 0, "m₁ × m₂ = −1."],
      ["Persamaan garis melalui (0, 3) dengan gradien 2 adalah …", ["y = 2x + 3", "y = 3x + 2", "y = 2x − 3", "y = −2x + 3"], 0, "c = 3."],
      ["Gradien garis melalui (2, 5) dan (6, 13) adalah …", ["2", "8", "4", "1/2"], 0, "8/4 = 2."]
    ]
  },
  {
    id: "spldv", t: "Sistem Persamaan Linear Dua Variabel", s: 2,
    sum: "SPLDV terdiri dari dua persamaan linear dengan dua variabel, misalnya x + y = 10 dan x − y = 2. Penyelesaiannya adalah pasangan (x, y) yang memenuhi keduanya.",
    pts: [
      "<b>Metode substitusi:</b> nyatakan satu variabel dari persamaan pertama, masukkan ke persamaan kedua.",
      "<b>Metode eliminasi:</b> samakan koefisien salah satu variabel, lalu jumlahkan atau kurangkan.",
      "<b>Metode campuran:</b> eliminasi untuk mencari satu variabel, substitusi untuk variabel lainnya.",
      "<b>Metode grafik:</b> titik potong dua garis adalah penyelesaiannya.",
      "<b>Soal cerita:</b> tentukan variabel dulu, misalnya x = harga buku, y = harga pensil."
    ],
    ex: { q: "Harga 2 buku dan 3 pensil Rp19.000. Harga 1 buku dan 1 pensil Rp8.000. Berapa harga 1 buku?", a: "2x + 3y = 19.000 dan x + y = 8.000. Kalikan persamaan kedua dengan 2: 2x + 2y = 16.000. Kurangkan: y = 3.000, jadi x = 5.000." },
    q: [
      ["Penyelesaian dari x + y = 7 dan x − y = 3 adalah …", ["x = 5, y = 2", "x = 2, y = 5", "x = 4, y = 3", "x = 3, y = 4"], 0, "Jumlahkan: 2x = 10."],
      ["Jika 2x + y = 11 dan x = 3, maka y = …", ["5", "8", "3", "4"], 0, "6 + y = 11."],
      ["Penyelesaian dari 3x + 2y = 12 dan x + 2y = 8 adalah …", ["x = 2, y = 3", "x = 3, y = 2", "x = 4, y = 0", "x = 0, y = 4"], 0, "Kurangkan: 2x = 4."],
      ["Jumlah dua bilangan 20, selisihnya 6. Bilangan yang lebih besar adalah …", ["13", "7", "14", "26"], 0, "x + y = 20, x − y = 6 → x = 13."],
      ["Metode menyamakan koefisien lalu menjumlah/mengurangkan disebut …", ["eliminasi", "substitusi", "grafik", "faktorisasi"], 0, "Eliminasi."]
    ]
  },
  {
    id: "pythagoras", t: "Teorema Pythagoras", s: 2,
    sum: "Pada segitiga siku-siku, kuadrat sisi miring (hipotenusa) sama dengan jumlah kuadrat dua sisi lainnya: c² = a² + b².",
    pts: [
      "<b>Sisi miring</b> selalu berada di depan sudut siku-siku dan merupakan sisi terpanjang.",
      "<b>Tripel Pythagoras:</b> 3-4-5, 5-12-13, 8-15-17, 7-24-25, dan kelipatannya (6-8-10).",
      "<b>Jenis segitiga:</b> c² = a² + b² siku-siku, c² < a² + b² lancip, c² > a² + b² tumpul.",
      "<b>Segitiga istimewa 45°:</b> sisi a, a, a√2. <b>30°-60°:</b> sisi a, a√3, 2a.",
      "<b>Penerapan:</b> panjang tangga yang disandarkan, diagonal layar TV, jarak terpendek."
    ],
    ex: { q: "Tangga 5 m disandarkan ke tembok. Kaki tangga berjarak 3 m dari tembok. Seberapa tinggi ujung tangga?", a: "t² = 5² − 3² = 16 → t = 4 m." },
    q: [
      ["Segitiga siku-siku dengan sisi tegak 6 cm dan 8 cm. Sisi miringnya …", ["10 cm", "14 cm", "12 cm", "7 cm"], 0, "√(36 + 64)."],
      ["Yang merupakan tripel Pythagoras adalah …", ["5, 12, 13", "4, 5, 6", "6, 7, 8", "2, 3, 4"], 0, "25 + 144 = 169."],
      ["Segitiga dengan sisi 4, 5, 7 termasuk segitiga …", ["tumpul", "siku-siku", "lancip", "sama sisi"], 0, "49 > 16 + 25."],
      ["Diagonal persegi bersisi 5 cm adalah …", ["5√2 cm", "10 cm", "25 cm", "5√3 cm"], 0, "Segitiga 45°."],
      ["Sisi miring 13 cm, salah satu sisi tegak 5 cm. Sisi tegak lainnya …", ["12 cm", "8 cm", "18 cm", "10 cm"], 0, "√(169 − 25)."]
    ]
  },
  {
    id: "bangun-ruang-datar", t: "Bangun Ruang Sisi Datar", s: 2,
    sum: "Bangun ruang sisi datar meliputi kubus, balok, prisma, dan limas. Kamu perlu menguasai luas permukaan (jumlah luas semua sisi) dan volume (isi).",
    pts: [
      "<b>Kubus:</b> L = 6s², V = s³.",
      "<b>Balok:</b> L = 2(pl + pt + lt), V = p × l × t.",
      "<b>Prisma:</b> V = luas alas × tinggi. L = 2 × luas alas + keliling alas × tinggi.",
      "<b>Limas:</b> V = ⅓ × luas alas × tinggi. L = luas alas + jumlah luas sisi tegak.",
      "<b>Jaring-jaring</b> adalah bentuk bangun ruang yang dibuka menjadi bangun datar."
    ],
    ex: { q: "Akuarium berbentuk balok 60 cm × 30 cm × 40 cm. Berapa liter air yang bisa ditampung?", a: "V = 72.000 cm³ = 72 liter." },
    q: [
      ["Volume kubus dengan rusuk 6 cm adalah …", ["216 cm³", "36 cm³", "126 cm³", "18 cm³"], 0, "6³."],
      ["Luas permukaan kubus dengan rusuk 4 cm adalah …", ["96 cm²", "64 cm²", "16 cm²", "48 cm²"], 0, "6 × 16."],
      ["Limas persegi dengan sisi alas 9 cm dan tinggi 10 cm. Volumenya …", ["270 cm³", "810 cm³", "90 cm³", "300 cm³"], 0, "⅓ × 81 × 10."],
      ["Balok 8 cm × 5 cm × 3 cm memiliki volume …", ["120 cm³", "16 cm³", "158 cm³", "80 cm³"], 0, "8 × 5 × 3."],
      ["Banyak sisi pada prisma segitiga adalah …", ["5", "6", "4", "9"], 0, "2 alas + 3 sisi tegak."]
    ]
  }
];

MATERI[8].ipa = [
  {
    id: "sistem-gerak", t: "Sistem Gerak Manusia", s: 1,
    sum: "Tubuhmu bisa bergerak karena kerja sama rangka (alat gerak pasif) dan otot (alat gerak aktif). Rangka juga melindungi organ penting dan memberi bentuk tubuh.",
    pts: [
      "<b>Jenis tulang:</b> tulang keras dan tulang rawan. Bentuknya: pipa (lengan), pipih (tengkorak), pendek (ruas jari).",
      "<b>Sendi:</b> engsel (lutut, siku), peluru (bahu), putar (leher), pelana (ibu jari), geser (pergelangan tangan).",
      "<b>Otot:</b> otot rangka (sadar), otot polos (organ dalam, tak sadar), otot jantung (tak sadar).",
      "<b>Kerja otot:</b> antagonis (berlawanan, bisep-trisep) dan sinergis (searah).",
      "<b>Gangguan:</b> osteoporosis (tulang keropos), skoliosis (bengkok ke samping), lordosis (ke depan), kifosis (ke belakang)."
    ],
    q: [
      ["Sendi pada lutut termasuk sendi …", ["engsel", "peluru", "putar", "pelana"], 0, "Gerak satu arah."],
      ["Otot yang bekerja di bawah kesadaran adalah otot …", ["rangka", "polos", "jantung", "usus"], 0, "Otot lurik/rangka."],
      ["Kerja otot bisep dan trisep disebut …", ["antagonis", "sinergis", "simetris", "paralel"], 0, "Berlawanan."],
      ["Kelainan tulang belakang yang melengkung ke samping disebut …", ["skoliosis", "lordosis", "kifosis", "osteoporosis"], 0, "Skoliosis."],
      ["Tulang yang berfungsi melindungi otak adalah …", ["tengkorak", "rusuk", "panggul", "belikat"], 0, "Tulang pipih."]
    ]
  },
  {
    id: "pesawat-sederhana", t: "Usaha dan Pesawat Sederhana", s: 1,
    sum: "Usaha terjadi kalau gaya menyebabkan benda berpindah. Pesawat sederhana adalah alat yang memudahkan kerja manusia dengan mengubah besar atau arah gaya.",
    pts: [
      "<b>Usaha</b> W = F × s (joule). <b>Daya</b> P = W/t (watt).",
      "<b>Tuas:</b> jenis 1 (titik tumpu di tengah: gunting, linggis), jenis 2 (beban di tengah: gerobak, pembuka botol), jenis 3 (kuasa di tengah: sekop, pinset).",
      "<b>Keuntungan mekanis tuas</b> KM = lengan kuasa / lengan beban = beban / kuasa.",
      "<b>Katrol:</b> tetap (KM = 1), bebas (KM = 2), majemuk.",
      "<b>Bidang miring:</b> KM = panjang lintasan / tinggi. Contoh: jalan berkelok di pegunungan, sekrup."
    ],
    q: [
      ["Gaya 50 N memindahkan benda sejauh 4 m. Usahanya …", ["200 J", "54 J", "12,5 J", "46 J"], 0, "W = F × s."],
      ["Gunting termasuk tuas jenis …", ["pertama", "kedua", "ketiga", "keempat"], 0, "Titik tumpu di tengah."],
      ["Gerobak dorong termasuk tuas jenis …", ["kedua", "pertama", "ketiga", "bidang miring"], 0, "Beban di tengah."],
      ["Keuntungan mekanis katrol tetap adalah …", ["1", "2", "0", "4"], 0, "Hanya mengubah arah gaya."],
      ["Bidang miring panjang 6 m, tinggi 2 m. Keuntungan mekanisnya …", ["3", "12", "4", "8"], 0, "6 : 2."]
    ]
  },
  {
    id: "fotosintesis", t: "Struktur Tumbuhan dan Fotosintesis", s: 1,
    sum: "Tumbuhan membuat makanan sendiri lewat fotosintesis di daun. Akar, batang, dan daun punya jaringan khusus untuk menyerap, mengangkut, dan mengolah zat.",
    pts: [
      "<b>Persamaan fotosintesis:</b> 6CO₂ + 6H₂O + cahaya → C₆H₁₂O₆ + 6O₂.",
      "<b>Klorofil</b> di kloroplas menyerap cahaya matahari.",
      "<b>Xilem</b> mengangkut air dan mineral dari akar ke daun. <b>Floem</b> mengangkut hasil fotosintesis ke seluruh tubuh.",
      "<b>Stomata</b> (mulut daun) tempat keluar-masuk gas dan penguapan air.",
      "<b>Percobaan Ingenhousz</b> membuktikan fotosintesis menghasilkan oksigen. <b>Sachs</b> membuktikan menghasilkan amilum (uji iodin)."
    ],
    q: [
      ["Hasil fotosintesis adalah …", ["glukosa dan oksigen", "karbon dioksida dan air", "oksigen dan air", "glukosa dan karbon dioksida"], 0, "C₆H₁₂O₆ + O₂."],
      ["Jaringan yang mengangkut air dari akar ke daun adalah …", ["xilem", "floem", "epidermis", "kambium"], 0, "Xilem."],
      ["Zat hijau daun disebut …", ["klorofil", "stomata", "kloroplas", "amilum"], 0, "Klorofil."],
      ["Percobaan Sachs membuktikan fotosintesis menghasilkan …", ["amilum", "oksigen", "air", "karbon dioksida"], 0, "Uji iodin."],
      ["Gas yang diambil tumbuhan untuk fotosintesis adalah …", ["karbon dioksida", "oksigen", "nitrogen", "hidrogen"], 0, "CO₂."]
    ]
  },
  {
    id: "pencernaan", t: "Sistem Pencernaan Manusia", s: 2,
    sum: "Sistem pencernaan mengubah makanan menjadi zat yang bisa diserap tubuh. Pencernaan terjadi secara mekanik (dikunyah, diremas) dan kimiawi (dibantu enzim).",
    pts: [
      "<b>Urutan saluran:</b> mulut → kerongkongan → lambung → usus halus → usus besar → anus.",
      "<b>Enzim ptialin/amilase</b> di mulut mengubah amilum menjadi maltosa.",
      "<b>Lambung</b> menghasilkan HCl (membunuh kuman) dan pepsin (memecah protein).",
      "<b>Usus halus</b> tempat penyerapan sari makanan oleh vili (jonjot usus).",
      "<b>Usus besar</b> menyerap air. Gangguan: maag, diare, sembelit, usus buntu."
    ],
    q: [
      ["Enzim di mulut yang mengubah amilum menjadi maltosa adalah …", ["ptialin", "pepsin", "lipase", "tripsin"], 0, "Amilase ludah."],
      ["Penyerapan sari makanan terjadi di …", ["usus halus", "lambung", "usus besar", "kerongkongan"], 0, "Vili."],
      ["Fungsi HCl di lambung adalah …", ["membunuh kuman", "menyerap air", "mencerna lemak", "menghasilkan empedu"], 0, "Asam lambung."],
      ["Penyakit akibat kurang serat dan sulit buang air besar adalah …", ["sembelit", "diare", "maag", "hepatitis"], 0, "Konstipasi."],
      ["Gerak peristaltik terjadi di …", ["kerongkongan", "mulut", "hati", "pankreas"], 0, "Mendorong makanan."]
    ]
  },
  {
    id: "peredaran-darah", t: "Sistem Peredaran Darah", s: 2,
    sum: "Jantung memompa darah ke seluruh tubuh untuk mengangkut oksigen, sari makanan, dan zat sisa. Manusia punya peredaran darah ganda dan tertutup.",
    pts: [
      "<b>Komponen darah:</b> sel darah merah (mengangkut O₂, mengandung hemoglobin), sel darah putih (melawan kuman), keping darah (pembekuan), plasma.",
      "<b>Jantung</b> punya 4 ruang: serambi kanan, serambi kiri, bilik kanan, bilik kiri.",
      "<b>Peredaran kecil:</b> jantung → paru-paru → jantung. <b>Peredaran besar:</b> jantung → seluruh tubuh → jantung.",
      "<b>Arteri</b> membawa darah keluar dari jantung, <b>vena</b> membawa darah kembali ke jantung.",
      "<b>Gangguan:</b> anemia, hipertensi, varises, hemofilia."
    ],
    q: [
      ["Sel darah yang berfungsi mengangkut oksigen adalah …", ["eritrosit", "leukosit", "trombosit", "plasma"], 0, "Sel darah merah."],
      ["Peredaran darah kecil adalah dari jantung ke …", ["paru-paru lalu kembali ke jantung", "seluruh tubuh", "ginjal", "otak"], 0, "Mengambil O₂."],
      ["Pembuluh yang membawa darah keluar dari jantung adalah …", ["arteri", "vena", "kapiler", "limfa"], 0, "Arteri."],
      ["Kekurangan sel darah merah menyebabkan …", ["anemia", "hemofilia", "leukemia", "varises"], 0, "Anemia."],
      ["Ruang jantung yang memompa darah ke seluruh tubuh adalah …", ["bilik kiri", "bilik kanan", "serambi kiri", "serambi kanan"], 0, "Dindingnya paling tebal."]
    ]
  },
  {
    id: "tekanan", t: "Tekanan Zat", s: 2,
    sum: "Tekanan adalah gaya yang bekerja pada setiap satuan luas permukaan. Makin kecil luas bidang tekan, makin besar tekanannya. Karena itu paku dibuat runcing.",
    pts: [
      "<b>Tekanan zat padat:</b> P = F/A (N/m² atau pascal).",
      "<b>Tekanan hidrostatis:</b> P = ρ × g × h. Makin dalam, makin besar tekanannya.",
      "<b>Hukum Pascal:</b> tekanan pada zat cair tertutup diteruskan ke segala arah sama besar. Contoh: dongkrak hidrolik, rem hidrolik.",
      "<b>Hukum Archimedes:</b> benda di zat cair mendapat gaya ke atas sebesar berat zat cair yang dipindahkan. Contoh: kapal laut, kapal selam.",
      "<b>Tekanan udara</b> makin kecil di tempat yang makin tinggi."
    ],
    q: [
      ["Gaya 100 N pada luas 2 m². Tekanannya …", ["50 Pa", "200 Pa", "98 Pa", "102 Pa"], 0, "P = F/A."],
      ["Ujung paku dibuat runcing supaya …", ["tekanannya besar", "tekanannya kecil", "gayanya kecil", "massanya ringan"], 0, "Luas kecil, tekanan besar."],
      ["Dongkrak hidrolik bekerja berdasarkan hukum …", ["Pascal", "Archimedes", "Newton", "Boyle"], 0, "Pascal."],
      ["Kapal laut terapung berdasarkan hukum …", ["Archimedes", "Pascal", "Ohm", "Kepler"], 0, "Gaya apung."],
      ["Tekanan hidrostatis pada kedalaman 2 m di air (ρ = 1.000 kg/m³, g = 10) adalah …", ["20.000 Pa", "2.000 Pa", "200 Pa", "20 Pa"], 0, "1.000 × 10 × 2."]
    ]
  },
  {
    id: "getaran-bunyi", t: "Getaran, Gelombang, dan Bunyi", s: 2,
    sum: "Getaran adalah gerak bolak-balik melalui titik setimbang. Gelombang adalah getaran yang merambat. Bunyi termasuk gelombang longitudinal yang butuh medium untuk merambat.",
    pts: [
      "<b>Frekuensi</b> f = n/t (hertz). <b>Periode</b> T = t/n = 1/f.",
      "<b>Cepat rambat gelombang:</b> v = λ × f.",
      "<b>Gelombang transversal:</b> arah getar tegak lurus arah rambat (gelombang tali, cahaya). <b>Longitudinal:</b> searah (bunyi, slinki).",
      "<b>Batas pendengaran:</b> infrasonik (< 20 Hz), audiosonik (20–20.000 Hz), ultrasonik (> 20.000 Hz).",
      "<b>Pemantulan bunyi:</b> gaung, gema. Kelelawar memakai ekolokasi, kapal memakai SONAR."
    ],
    q: [
      ["Bandul bergetar 40 kali dalam 10 sekon. Frekuensinya …", ["4 Hz", "400 Hz", "0,25 Hz", "50 Hz"], 0, "40 : 10."],
      ["Gelombang dengan λ = 2 m dan f = 5 Hz memiliki cepat rambat …", ["10 m/s", "2,5 m/s", "7 m/s", "0,4 m/s"], 0, "v = λf."],
      ["Bunyi termasuk gelombang …", ["longitudinal", "transversal", "elektromagnetik", "permukaan"], 0, "Rapatan dan regangan."],
      ["Bunyi yang bisa didengar manusia disebut …", ["audiosonik", "ultrasonik", "infrasonik", "supersonik"], 0, "20–20.000 Hz."],
      ["Bunyi tidak dapat merambat di …", ["ruang hampa", "air", "udara", "besi"], 0, "Butuh medium."]
    ]
  }
];

MATERI[8].ips = [
  {
    id: "penduduk", t: "Kondisi Geografis dan Penduduk Indonesia", s: 1,
    sum: "Indonesia adalah negara kepulauan dengan jumlah penduduk terbesar keempat di dunia. Kondisi alam memengaruhi persebaran penduduk dan mata pencahariannya.",
    pts: [
      "<b>Kepadatan penduduk</b> = jumlah penduduk / luas wilayah (jiwa/km²). Pulau Jawa paling padat.",
      "<b>Pertumbuhan penduduk</b> dipengaruhi kelahiran (natalitas), kematian (mortalitas), dan migrasi.",
      "<b>Migrasi:</b> urbanisasi (desa ke kota), transmigrasi (pulau padat ke pulau jarang penduduk), emigrasi, imigrasi.",
      "<b>Piramida penduduk:</b> ekspansif (muda), stasioner, konstruktif (tua).",
      "<b>Angka beban ketergantungan</b> = (usia 0–14 + usia ≥ 65) / usia produktif 15–64 × 100."
    ],
    q: [
      ["Perpindahan penduduk dari desa ke kota disebut …", ["urbanisasi", "transmigrasi", "emigrasi", "imigrasi"], 0, "Urbanisasi."],
      ["Pulau dengan penduduk paling padat di Indonesia adalah …", ["Jawa", "Sumatra", "Kalimantan", "Papua"], 0, "Jawa."],
      ["Usia produktif penduduk adalah …", ["15–64 tahun", "0–14 tahun", "di atas 65 tahun", "10–50 tahun"], 0, "Usia kerja."],
      ["Wilayah 500 km² dihuni 100.000 jiwa. Kepadatannya …", ["200 jiwa/km²", "500 jiwa/km²", "50 jiwa/km²", "2.000 jiwa/km²"], 0, "100.000 : 500."],
      ["Piramida penduduk berbentuk limas (alas lebar) disebut …", ["ekspansif", "stasioner", "konstruktif", "seimbang"], 0, "Banyak penduduk muda."]
    ]
  },
  {
    id: "islam-nusantara", t: "Masa Islam di Indonesia", s: 1,
    sum: "Islam masuk ke Nusantara lewat perdagangan, perkawinan, pendidikan pesantren, dan kesenian. Kerajaan Islam pertama di Indonesia adalah Samudra Pasai di Aceh.",
    pts: [
      "<b>Teori masuknya Islam:</b> Gujarat (India), Mekah (Arab), Persia, dan Cina.",
      "<b>Kerajaan Islam:</b> Samudra Pasai, Aceh, Demak (kerajaan Islam pertama di Jawa), Mataram Islam, Gowa-Tallo, Ternate-Tidore.",
      "<b>Wali Songo</b> menyebarkan Islam di Jawa, misalnya Sunan Kalijaga lewat wayang dan Sunan Bonang lewat gamelan.",
      "<b>Saluran penyebaran:</b> perdagangan, perkawinan, pendidikan, tasawuf, kesenian.",
      "<b>Peninggalan:</b> Masjid Agung Demak, Masjid Menara Kudus, makam Sultan Malik as-Saleh, Hikayat Raja-Raja Pasai."
    ],
    q: [
      ["Kerajaan Islam pertama di Indonesia adalah …", ["Samudra Pasai", "Demak", "Aceh", "Mataram"], 0, "Abad ke-13."],
      ["Kerajaan Islam pertama di Pulau Jawa adalah …", ["Demak", "Banten", "Mataram", "Cirebon"], 0, "Raden Patah."],
      ["Sunan Kalijaga menyebarkan Islam melalui …", ["wayang kulit", "perdagangan rempah", "perang", "pernikahan dengan raja"], 0, "Kesenian."],
      ["Raja pertama Samudra Pasai adalah …", ["Sultan Malik as-Saleh", "Sultan Iskandar Muda", "Raden Patah", "Sultan Agung"], 0, "Malik as-Saleh."],
      ["Teori yang menyatakan Islam dibawa pedagang India disebut teori …", ["Gujarat", "Mekah", "Persia", "Cina"], 0, "Gujarat."]
    ]
  },
  {
    id: "kolonialisme", t: "Kolonialisme dan Perlawanan Bangsa", s: 2,
    sum: "Bangsa Eropa datang ke Nusantara untuk mencari rempah-rempah. Kedatangan mereka berubah menjadi penjajahan yang menyengsarakan rakyat dan memicu perlawanan di berbagai daerah.",
    pts: [
      "<b>Semboyan 3G:</b> gold (kekayaan), glory (kejayaan), gospel (penyebaran agama).",
      "<b>Kedatangan:</b> Portugis (1511 di Malaka), Spanyol, Belanda (Cornelis de Houtman 1596), Inggris.",
      "<b>VOC</b> didirikan 1602 dan punya hak monopoli. Dibubarkan 1799 karena korupsi.",
      "<b>Tanam paksa (cultuurstelsel)</b> oleh Van den Bosch tahun 1830.",
      "<b>Perlawanan:</b> Pattimura (Maluku), Pangeran Diponegoro (Jawa, 1825–1830), Imam Bonjol (Padri), Cut Nyak Dien (Aceh), Sultan Hasanuddin (Makassar)."
    ],
    q: [
      ["Tujuan bangsa Eropa datang yang berkaitan dengan kekayaan disebut …", ["gold", "glory", "gospel", "god"], 0, "3G."],
      ["VOC dibubarkan pada tahun 1799 karena …", ["korupsi dan utang", "kalah perang dari Inggris saja", "permintaan rakyat", "tidak punya kapal"], 0, "Bangkrut."],
      ["Tokoh yang memimpin Perang Jawa (1825–1830) adalah …", ["Pangeran Diponegoro", "Pattimura", "Imam Bonjol", "Teuku Umar"], 0, "Perang Diponegoro."],
      ["Sistem tanam paksa diperkenalkan oleh …", ["Van den Bosch", "Daendels", "Raffles", "Cornelis de Houtman"], 0, "1830."],
      ["Bangsa Eropa pertama yang tiba di Nusantara adalah …", ["Portugis", "Belanda", "Inggris", "Spanyol"], 0, "Menguasai Malaka 1511."]
    ]
  },
  {
    id: "pergerakan", t: "Pergerakan Nasional dan Sumpah Pemuda", s: 2,
    sum: "Awal abad ke-20, kaum terpelajar mulai berjuang lewat organisasi, tidak lagi lewat perang kedaerahan. Puncaknya adalah Sumpah Pemuda 28 Oktober 1928.",
    pts: [
      "<b>Budi Utomo</b> berdiri 20 Mei 1908 (Hari Kebangkitan Nasional), didirikan dr. Sutomo dan dr. Wahidin Sudirohusodo.",
      "<b>Sarekat Islam</b> (awalnya Sarekat Dagang Islam, H. Samanhudi), <b>Indische Partij</b> (Tiga Serangkai), <b>Muhammadiyah</b> (1912), <b>NU</b> (1926).",
      "<b>Perhimpunan Indonesia</b> adalah organisasi pelajar Indonesia di Belanda.",
      "<b>Sumpah Pemuda:</b> satu tanah air, satu bangsa, menjunjung bahasa persatuan, bahasa Indonesia.",
      "<b>Lagu Indonesia Raya</b> pertama kali diperdengarkan W.R. Supratman di Kongres Pemuda II."
    ],
    q: [
      ["Budi Utomo didirikan pada tanggal …", ["20 Mei 1908", "28 Oktober 1928", "17 Agustus 1945", "1 Juni 1945"], 0, "Hari Kebangkitan Nasional."],
      ["Sumpah Pemuda diikrarkan pada …", ["28 Oktober 1928", "20 Mei 1908", "10 November 1945", "2 Mei 1928"], 0, "Kongres Pemuda II."],
      ["Pencipta lagu Indonesia Raya adalah …", ["W.R. Supratman", "Ismail Marzuki", "C. Simanjuntak", "Kusbini"], 0, "Wage Rudolf Supratman."],
      ["Tiga Serangkai mendirikan organisasi …", ["Indische Partij", "Budi Utomo", "Sarekat Islam", "PNI"], 0, "Douwes Dekker, Cipto, Ki Hajar."],
      ["Muhammadiyah didirikan oleh …", ["K.H. Ahmad Dahlan", "K.H. Hasyim Asy’ari", "H. Samanhudi", "H.O.S. Tjokroaminoto"], 0, "1912, Yogyakarta."]
    ]
  },
  {
    id: "pasar", t: "Pelaku Ekonomi dan Pasar", s: 2,
    sum: "Kegiatan ekonomi melibatkan rumah tangga konsumen, rumah tangga produsen, pemerintah, dan masyarakat luar negeri. Mereka bertemu di pasar.",
    pts: [
      "<b>Pasar</b> adalah tempat bertemunya penjual dan pembeli, bisa nyata (pasar tradisional) atau maya (marketplace online).",
      "<b>Hukum permintaan:</b> harga naik, jumlah barang yang diminta turun.",
      "<b>Hukum penawaran:</b> harga naik, jumlah barang yang ditawarkan naik.",
      "<b>Harga keseimbangan</b> terjadi saat permintaan sama dengan penawaran.",
      "<b>Pasar persaingan:</b> sempurna, monopoli (satu penjual), oligopoli (beberapa penjual), monopsoni (satu pembeli)."
    ],
    q: [
      ["Menurut hukum permintaan, jika harga naik maka jumlah yang diminta …", ["turun", "naik", "tetap", "tidak terpengaruh"], 0, "Berbanding terbalik."],
      ["Pasar yang hanya memiliki satu penjual disebut …", ["monopoli", "oligopoli", "monopsoni", "persaingan sempurna"], 0, "Mono = satu."],
      ["Marketplace online termasuk pasar …", ["maya", "nyata", "tradisional", "tahunan"], 0, "Tidak bertemu langsung."],
      ["Harga yang terjadi saat permintaan sama dengan penawaran disebut harga …", ["keseimbangan", "pokok", "eceran", "subjektif"], 0, "Ekuilibrium."],
      ["Rumah tangga konsumen menyediakan faktor produksi dan menerima …", ["balas jasa (upah, sewa)", "pajak", "subsidi", "bea cukai"], 0, "Pendapatan RTK."]
    ]
  }
];

MATERI[8].indo = [
  {
    id: "berita", t: "Teks Berita", s: 1,
    sum: "Teks berita melaporkan peristiwa aktual yang penting atau menarik bagi banyak orang. Berita yang baik menjawab 5W + 1H.",
    pts: [
      "<b>5W + 1H:</b> what (apa), who (siapa), when (kapan), where (di mana), why (mengapa), how (bagaimana).",
      "<b>Struktur:</b> judul, kepala berita (lead), tubuh berita, ekor berita.",
      "<b>Piramida terbalik:</b> informasi paling penting ditulis di awal.",
      "<b>Kebahasaan:</b> kalimat langsung (kutipan narasumber), bahasa baku, kata kerja tindakan, keterangan waktu dan tempat.",
      "<b>Syarat berita:</b> faktual, aktual, objektif, penting, menarik."
    ],
    q: [
      ["Bagian berita yang memuat informasi paling penting adalah …", ["kepala berita (lead)", "ekor berita", "tubuh berita", "judul saja"], 0, "Piramida terbalik."],
      ["Unsur berita yang menjawab “di mana” adalah …", ["where", "when", "who", "why"], 0, "Tempat."],
      ["Sifat berita yang berarti masih baru dan hangat adalah …", ["aktual", "faktual", "objektif", "fiktif"], 0, "Aktual."],
      ["Berita yang memuat pendapat pribadi wartawan tidak memenuhi syarat …", ["objektif", "aktual", "menarik", "penting"], 0, "Objektif."],
      ["Kutipan pernyataan narasumber biasanya ditulis dalam bentuk kalimat …", ["langsung", "perintah", "tanya", "majemuk"], 0, "Memakai tanda petik."]
    ]
  },
  {
    id: "iklan", t: "Iklan, Slogan, dan Poster", s: 1,
    sum: "Iklan, slogan, dan poster bertujuan memengaruhi pembaca. Iklan menawarkan barang atau jasa, slogan berupa semboyan singkat yang mudah diingat, poster memadukan gambar dan tulisan.",
    pts: [
      "<b>Jenis iklan menurut tujuan:</b> komersial (jual produk), layanan masyarakat (ajakan sosial).",
      "<b>Ciri bahasa iklan:</b> singkat, persuasif (membujuk), menarik, sering memakai kata “ayo”, “segera”, “dapatkan”.",
      "<b>Slogan:</b> singkat, mudah diingat, bisa berima. Contoh: “Kebersihan sebagian dari iman.”",
      "<b>Poster:</b> gambar menonjol, tulisan sedikit dan besar, terbaca dari jauh.",
      "<b>Iklan yang baik</b> jujur, tidak menyesatkan, dan tidak merendahkan produk lain."
    ],
    q: [
      ["Iklan yang mengajak masyarakat menjaga kebersihan termasuk iklan …", ["layanan masyarakat", "komersial", "penawaran", "lowongan"], 0, "Tujuan sosial."],
      ["Ciri bahasa iklan adalah …", ["persuasif", "ilmiah", "naratif", "argumentatif panjang"], 0, "Membujuk."],
      ["Kalimat semboyan singkat yang mudah diingat disebut …", ["slogan", "poster", "pamflet", "brosur"], 0, "Slogan."],
      ["Poster yang efektif memiliki …", ["gambar menonjol dan tulisan singkat", "tulisan sangat panjang", "huruf kecil semua", "tanpa gambar"], 0, "Terbaca dari jauh."],
      ["“Ayo, gunakan masker saat sakit!” Kalimat ini bersifat …", ["ajakan", "pertanyaan", "larangan", "pernyataan fakta"], 0, "Kata ayo."]
    ]
  },
  {
    id: "eksposisi", t: "Teks Eksposisi", s: 1,
    sum: "Teks eksposisi menyampaikan gagasan atau pendapat penulis tentang suatu topik dan memperkuatnya dengan argumen dan fakta.",
    pts: [
      "<b>Struktur:</b> tesis (pendapat utama), argumentasi (alasan dan bukti), penegasan ulang (simpulan).",
      "<b>Fakta</b> bisa dibuktikan kebenarannya. <b>Opini</b> adalah pendapat.",
      "<b>Kebahasaan:</b> kata teknis, konjungsi kausalitas (karena, sehingga, oleh sebab itu), kata kerja mental (berpendapat, meyakini).",
      "<b>Argumen kuat</b> didukung data, contoh, atau pendapat ahli.",
      "<b>Contoh topik:</b> pentingnya membatasi waktu bermain gawai bagi pelajar."
    ],
    q: [
      ["Bagian awal teks eksposisi yang berisi pendapat penulis disebut …", ["tesis", "argumentasi", "penegasan ulang", "orientasi"], 0, "Tesis."],
      ["Kalimat yang berupa fakta adalah …", ["Indonesia memiliki lebih dari 17.000 pulau.", "Pantai Bali paling indah di dunia.", "Belajar daring sangat membosankan.", "Menurut saya film itu jelek."], 0, "Bisa dibuktikan."],
      ["Konjungsi kausalitas adalah …", ["sehingga", "lalu", "tetapi", "atau"], 0, "Sebab-akibat."],
      ["Bagian penutup teks eksposisi disebut …", ["penegasan ulang", "resolusi", "koda", "tesis"], 0, "Menegaskan kembali tesis."],
      ["Argumen yang kuat sebaiknya didukung oleh …", ["data dan fakta", "perasaan penulis", "gosip", "cerita khayalan"], 0, "Bukti."]
    ]
  },
  {
    id: "puisi", t: "Puisi Modern", s: 2,
    sum: "Puisi mengungkapkan perasaan dan pikiran penyair dengan bahasa yang padat dan indah. Puisi modern lebih bebas dari aturan jumlah baris dan rima.",
    pts: [
      "<b>Unsur fisik:</b> diksi (pilihan kata), imaji (pengimajian), kata konkret, majas, rima, tipografi.",
      "<b>Unsur batin:</b> tema, rasa (feeling), nada (tone), amanat.",
      "<b>Majas:</b> personifikasi (benda bersifat manusia), metafora (perbandingan langsung), hiperbola (melebih-lebihkan), simile (memakai seperti/bagai).",
      "<b>Imaji:</b> penglihatan, pendengaran, perabaan, penciuman.",
      "<b>Penyair Indonesia:</b> Chairil Anwar (“Aku”), Sapardi Djoko Damono (“Hujan Bulan Juni”), W.S. Rendra."
    ],
    q: [
      ["“Angin berbisik di telingaku.” Kalimat ini mengandung majas …", ["personifikasi", "hiperbola", "metafora", "litotes"], 0, "Angin berbisik seperti manusia."],
      ["Pilihan kata dalam puisi disebut …", ["diksi", "rima", "tipografi", "imaji"], 0, "Diksi."],
      ["Bentuk penulisan atau tata wajah puisi disebut …", ["tipografi", "diksi", "rima", "irama"], 0, "Tipografi."],
      ["Puisi “Aku” ditulis oleh …", ["Chairil Anwar", "Sapardi Djoko Damono", "Taufiq Ismail", "W.S. Rendra"], 0, "Angkatan ’45."],
      ["“Tangisnya membanjiri seluruh kota.” Majas dalam kalimat ini adalah …", ["hiperbola", "personifikasi", "simile", "ironi"], 0, "Melebih-lebihkan."]
    ]
  },
  {
    id: "eksplanasi", t: "Teks Eksplanasi", s: 2,
    sum: "Teks eksplanasi menjelaskan proses terjadinya suatu fenomena alam atau sosial, seperti gempa bumi, pelangi, atau banjir, berdasarkan hubungan sebab-akibat.",
    pts: [
      "<b>Struktur:</b> identifikasi fenomena, rangkaian kejadian (deretan penjelas), ulasan (opsional).",
      "<b>Kebahasaan:</b> konjungsi kronologis (kemudian, setelah itu), konjungsi kausal (karena, akibatnya), istilah ilmiah, kalimat pasif.",
      "<b>Bedanya dengan eksposisi:</b> eksplanasi menjelaskan proses, eksposisi menyampaikan pendapat.",
      "<b>Contoh fenomena alam:</b> tsunami, gerhana, hujan. <b>Sosial:</b> kemacetan, urbanisasi.",
      "<b>Pola:</b> sebab → proses → akibat."
    ],
    q: [
      ["Teks eksplanasi menjelaskan …", ["proses terjadinya fenomena", "langkah membuat sesuatu", "pendapat penulis", "pengalaman pribadi"], 0, "Bagaimana dan mengapa."],
      ["Bagian awal teks eksplanasi disebut …", ["identifikasi fenomena", "tesis", "orientasi", "pernyataan umum"], 0, "Pengenalan fenomena."],
      ["Contoh topik teks eksplanasi adalah …", ["proses terjadinya pelangi", "cara membuat kue", "pengalaman liburan", "pendapat tentang ujian"], 0, "Fenomena alam."],
      ["Konjungsi “akibatnya” termasuk konjungsi …", ["kausalitas", "kronologis", "pertentangan", "pilihan"], 0, "Sebab-akibat."],
      ["Perbedaan utama eksplanasi dengan eksposisi adalah …", ["eksplanasi menjelaskan proses, eksposisi berisi pendapat", "eksplanasi fiksi", "eksposisi tanpa argumen", "tidak ada perbedaan"], 0, "Tujuan teks."]
    ]
  },
  {
    id: "drama", t: "Naskah Drama", s: 2,
    sum: "Drama adalah karya sastra yang ditulis untuk dipentaskan. Ceritanya disampaikan lewat dialog dan gerak tokoh di atas panggung.",
    pts: [
      "<b>Struktur:</b> prolog, orientasi, komplikasi, resolusi, epilog.",
      "<b>Unsur:</b> tokoh, dialog, babak/adegan, petunjuk lakuan (ditulis dalam kurung), latar.",
      "<b>Petunjuk lakuan</b> menjelaskan gerak atau ekspresi tokoh, misalnya (menunduk sedih).",
      "<b>Tokoh:</b> protagonis (baik), antagonis (penentang), tritagonis (penengah).",
      "<b>Saat pentas:</b> perhatikan vokal, ekspresi wajah, dan gerak tubuh."
    ],
    q: [
      ["Teks dalam kurung yang menjelaskan gerak tokoh disebut …", ["petunjuk lakuan", "dialog", "prolog", "babak"], 0, "Kramagung."],
      ["Tokoh yang menentang tokoh utama disebut …", ["antagonis", "protagonis", "tritagonis", "figuran"], 0, "Antagonis."],
      ["Bagian pembuka drama sebelum cerita dimulai disebut …", ["prolog", "epilog", "resolusi", "dialog"], 0, "Prolog."],
      ["Drama terutama disampaikan melalui …", ["dialog", "narasi panjang", "rima", "tabel"], 0, "Percakapan."],
      ["Tokoh penengah antara protagonis dan antagonis disebut …", ["tritagonis", "deuteragonis", "figuran", "narator"], 0, "Tritagonis."]
    ]
  }
];
