// KELAS 7 — tambahan sesuai kisi-kisi UAS: Matematika (KPK/FPB aljabar) dan Seni Budaya (desain, tipografi, logo)
EXT(7, "mtk", {
  more: {
    aljabar: {
      pts: ["<b>FPB dan KPK bentuk aljabar:</b> cari FPB/KPK angkanya dulu. Untuk variabel, FPB ambil variabel yang sama dengan pangkat terkecil, KPK ambil semua variabel dengan pangkat terbesar. FPB(12a²b, 18ab³) = 6ab, KPK = 36a²b³."],
      q: [
        ["FPB dari 8x²y dan 12xy² adalah …", ["4xy", "24x²y²", "4x²y²", "2xy"], 0, "FPB 8 dan 12 = 4. Variabel pangkat terkecil: x dan y."],
        ["KPK dari 6ab dan 9a²b adalah …", ["18a²b", "3ab", "54a³b²", "18ab"], 0, "KPK 6 dan 9 = 18. Variabel pangkat terbesar: a² dan b."],
        ["Bentuk sederhana dari 5p² − 3p + 2p² + 8p − 1 adalah …", ["7p² + 5p − 1", "7p² − 11p − 1", "3p² + 5p − 1", "7p⁴ + 5p − 1"], 0, "5p² + 2p² = 7p², −3p + 8p = 5p."]
      ]
    }
  }
});

EXT(7, "senbud", {
  order: ["unsur-rupa", "ragam-hias", "flora-fauna", "desain", "tipografi-logo", "musik", "tari", "pantomim"],
  more: {
    "flora-fauna": {
      pts: [
        "<b>Perspektif:</b> cara menggambar supaya terlihat ada jauh-dekat. Garis <b>horizon</b> sejajar mata pengamat, dan garis-garis benda bertemu di <b>titik hilang</b>.",
        "<b>Perspektif satu titik hilang:</b> cocok untuk jalan, rel kereta, atau lorong yang lurus ke depan. Makin jauh, benda makin kecil."
      ],
      q: [
        ["Garis khayal sejajar mata pengamat dalam gambar perspektif disebut …", ["garis horizon", "garis kontur", "garis arsir", "garis diagonal"], 0, "Horizon."],
        ["Titik tempat garis-garis perspektif bertemu disebut …", ["titik hilang", "titik api", "titik awal", "titik tengah"], 0, "Vanishing point."],
        ["Dalam gambar perspektif, benda yang makin jauh digambar makin …", ["kecil", "besar", "terang", "tebal"], 0, "Kesan jarak."]
      ]
    }
  },
  add: [
    {
      id: "desain", t: "Mendesain: Desain Grafis dan Poster", s: 1,
      sum: "Desain grafis adalah seni menyampaikan pesan lewat gambar, huruf, dan warna. Kamu melihat hasilnya setiap hari: poster, kemasan jajan, sampul buku, sampai tampilan aplikasi di HP.\nDesain yang baik bukan cuma cantik. Desain itu harus membuat orang cepat paham pesannya.",
      pts: [
        "<b>Unsur desain:</b> titik, garis, bidang, bentuk, warna, tekstur, ruang.",
        "<b>Prinsip desain:</b> kesatuan (unity), keseimbangan (simetris dan asimetris), irama, penekanan (center of interest), proporsi.",
        "<b>Hierarki visual:</b> bagian terpenting dibuat paling besar atau paling mencolok, supaya dibaca pertama kali.",
        "<b>Kontras warna</b> membuat tulisan mudah dibaca, misalnya hitam di atas kuning. Warna panas (merah, jingga, kuning) terasa semangat, warna dingin (biru, hijau) terasa tenang.",
        "<b>White space:</b> ruang kosong di sekitar teks dan gambar supaya desain tidak sesak.",
        "<b>Langkah mendesain:</b> tentukan tujuan dan sasaran, kumpulkan ide, buat sketsa, susun desain, evaluasi dan perbaiki."
      ],
      ex: { q: "Theo membuat poster lomba kebersihan kelas. Bagian apa yang sebaiknya dibuat paling besar?", a: "Judul atau pesan utama, misalnya “LOMBA KELAS BERSIH”. Tanggal dan hadiah dibuat lebih kecil di bawahnya." },
      tip: "Coba lihat posternya dari jarak 3 meter. Kalau pesan utamanya tidak terbaca, perbesar dan pertegas kontrasnya.",
      q: [
        ["Desain grafis adalah …", ["seni menyampaikan pesan lewat gambar, huruf, dan warna", "seni membuat patung", "seni memainkan alat musik", "seni gerak tubuh"], 0, "Desain komunikasi visual."],
        ["Prinsip desain yang membuat semua bagian terasa menyatu disebut …", ["kesatuan", "irama", "kontras", "proporsi"], 0, "Unity."],
        ["Bagian poster yang paling mencolok menerapkan prinsip …", ["penekanan", "kesatuan", "irama", "keseimbangan simetris"], 0, "Center of interest."],
        ["Warna tulisan yang paling mudah dibaca di atas latar kuning adalah …", ["hitam", "putih", "kuning muda", "krem"], 0, "Kontras tinggi."],
        ["Ruang kosong dalam desain disebut …", ["white space", "kerning", "watermark", "border"], 0, "Ruang lega."],
        ["Warna biru dan hijau termasuk warna …", ["dingin", "panas", "netral", "primer semua"], 0, "Kesan tenang."],
        ["Keseimbangan dengan bagian kiri dan kanan berbeda tapi tetap seimbang disebut …", ["asimetris", "simetris", "radial", "sentral"], 0, "Asimetris."],
        ["Langkah pertama dalam mendesain adalah …", ["menentukan tujuan dan sasaran", "mencetak desain", "memilih bingkai", "membagikan ke teman"], 0, "Tujuan dulu."],
        ["Contoh karya desain grafis adalah …", ["kemasan makanan ringan", "patung batu", "lagu daerah", "tari piring"], 0, "Desain kemasan."],
        ["Mengatur bagian terpenting agar dibaca pertama kali disebut …", ["hierarki visual", "tekstur semu", "dussel", "pointilis"], 0, "Urutan baca."]
      ]
    },
    {
      id: "tipografi-logo", t: "Tipografi dan Logo", s: 1,
      sum: "Tipografi adalah seni menata huruf supaya mudah dibaca dan enak dilihat. Jenis huruf yang kamu pilih ikut memberi kesan: huruf tegak tanpa kait terasa modern, huruf bersambung terasa luwes.\nLogo adalah tanda gambar atau tulisan yang menjadi identitas suatu sekolah, produk, atau orang. Logo yang baik langsung dikenali walaupun ukurannya kecil.",
      pts: [
        "<b>Serif:</b> huruf berkait di ujung batang, contoh Times New Roman. <b>Sans serif:</b> tanpa kait, contoh Arial. <b>Script:</b> meniru tulisan tangan. <b>Dekoratif:</b> huruf hias.",
        "<b>Kerning:</b> jarak antarhuruf. <b>Leading:</b> jarak antarbaris. <b>Keterbacaan (legibility):</b> seberapa mudah huruf dibaca.",
        "<b>Logotype (wordmark):</b> logo berupa tulisan nama, contoh logo Google.",
        "<b>Logogram:</b> logo berupa gambar/simbol saja. <b>Kombinasi:</b> gambar dan tulisan.",
        "<b>Ciri logo yang baik:</b> sederhana, mudah diingat, unik, tetap jelas saat dikecilkan atau dicetak hitam-putih.",
        "<b>Langkah membuat logo:</b> tentukan identitas, cari ide, sketsa beberapa alternatif, pilih dan rapikan, beri warna dan huruf, uji di ukuran kecil."
      ],
      ex: { q: "Theo ingin membuat logo nama “THEO” untuk sampul bukunya. Jenis logo apa yang cocok dan huruf apa yang dipakai?", a: "Logotype (wordmark), karena isinya tulisan nama. Huruf sans serif tebal akan terlihat jelas dan modern." },
      tip: "Logo yang bagus tetap kebaca saat dikecilkan seukuran ujung jari. Kalau detailnya hilang, sederhanakan lagi.",
      q: [
        ["Tipografi adalah …", ["seni menata huruf", "seni mencampur warna", "seni memahat", "seni memotret"], 0, "Typography."],
        ["Huruf yang memiliki kait di ujung batangnya disebut …", ["serif", "sans serif", "script", "monospace"], 0, "Serif."],
        ["Contoh huruf sans serif adalah …", ["Arial", "Times New Roman", "Georgia", "Garamond"], 0, "Tanpa kait."],
        ["Jarak antarhuruf disebut …", ["kerning", "leading", "margin", "spasi paragraf"], 0, "Kerning."],
        ["Jarak antarbaris disebut …", ["leading", "kerning", "bleed", "border"], 0, "Leading."],
        ["Huruf yang meniru tulisan tangan bersambung disebut …", ["script", "serif", "sans serif", "blok"], 0, "Script."],
        ["Logo yang berupa tulisan nama saja disebut …", ["logotype", "logogram", "maskot", "emblem"], 0, "Wordmark."],
        ["Logo yang berupa gambar atau simbol saja disebut …", ["logogram", "logotype", "lettermark", "slogan"], 0, "Simbol."],
        ["Ciri logo yang baik adalah …", ["sederhana dan mudah diingat", "rumit dan penuh detail", "memakai banyak jenis huruf", "meniru logo lain"], 0, "Simpel dan unik."],
        ["Fungsi utama logo adalah …", ["sebagai identitas", "sebagai hiasan dinding", "sebagai daftar harga", "sebagai alat ukur"], 0, "Identitas visual."]
      ]
    }
  ]
});
