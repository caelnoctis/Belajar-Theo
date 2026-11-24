// KELAS 7 — tambahan sesuai kisi-kisi SAS: IPS, PPKn, PJOK
EXT(7, "ips", {
  order: ["sejarah-dasar", "interaksi", "keragaman", "letak-indonesia", "cuaca-iklim", "kondisi-alam", "ekonomi", "sda", "lingkungan", "praaksara", "hindu-buddha"],
  more: {
    sda: { s: 1 },
    praaksara: {
      s: 1,
      pts: ["<b>Aktivitas manusia praaksara:</b> berburu dan meramu, membuat alat dari batu dan tulang, menggunakan api, tinggal di gua (abris sous roche), lalu bercocok tanam dan beternak.", "<b>Berakhirnya praaksara</b> di Indonesia sekitar abad ke-4 Masehi, ditandai prasasti Yupa dari Kerajaan Kutai."],
      q: [
        ["Masa praaksara di Indonesia berakhir sekitar abad ke-4 Masehi, ditandai dengan ditemukannya …", ["prasasti Yupa di Kutai", "candi Borobudur", "fosil Pithecanthropus", "naskah Negarakertagama"], 0, "Prasasti Yupa adalah tulisan tertua di Indonesia."],
        ["Gua tempat tinggal manusia praaksara disebut …", ["abris sous roche", "kjokkenmoddinger", "menhir", "dolmen"], 0, "Abris sous roche = ceruk batu."]
      ]
    }
  },
  add: [
    {
      id: "sejarah-dasar", t: "Mengenal Sejarah: Unsur, Fosil, dan Artefak", s: 1,
      sum: "Sejarah adalah kisah peristiwa masa lalu manusia yang benar-benar terjadi. Setiap peristiwa sejarah punya unsur manusia, ruang (tempat), dan waktu.\nKarena masa praaksara belum mengenal tulisan, para ahli mempelajarinya lewat fosil dan artefak.",
      pts: [
        "<b>Unsur sejarah:</b> manusia (pelaku), ruang (tempat terjadinya), dan waktu (kapan terjadi).",
        "<b>Konsep waktu dalam sejarah:</b> perkembangan, kesinambungan, pengulangan, dan perubahan.",
        "<b>Fosil:</b> sisa makhluk hidup (manusia, hewan, tumbuhan) yang membatu. Contoh: fosil Pithecanthropus erectus, fosil gajah purba.",
        "<b>Artefak:</b> benda buatan manusia masa lalu. Contoh: kapak genggam, kapak persegi, nekara, perhiasan manik-manik.",
        "<b>Sumber sejarah:</b> benda (artefak, fosil), tulisan (prasasti, naskah), dan lisan (cerita dari pelaku atau saksi).",
        "<b>Ahli yang meneliti:</b> arkeolog meneliti benda peninggalan, paleontolog meneliti fosil."
      ],
      ex: { q: "Kapak batu yang ditemukan di Pacitan termasuk fosil atau artefak?", a: "Artefak, karena kapak itu benda buatan manusia, bukan sisa tubuh makhluk hidup." },
      tip: "Fosil = dulu hidup. Artefak = dulu dibuat manusia.",
      q: [
        ["Tiga unsur penting dalam sejarah adalah …", ["manusia, ruang, dan waktu", "manusia, hewan, dan tumbuhan", "raja, rakyat, dan kerajaan", "fosil, artefak, dan prasasti"], 0, "Setiap peristiwa sejarah ada pelaku, tempat, dan waktunya."],
        ["Sisa makhluk hidup yang telah membatu disebut …", ["fosil", "artefak", "prasasti", "relief"], 0, "Fosil."],
        ["Benda peninggalan buatan manusia masa lalu disebut …", ["artefak", "fosil", "naskah", "folklor"], 0, "Artefak."],
        ["Contoh artefak adalah …", ["kapak genggam", "tulang gajah purba", "tengkorak manusia purba", "kerang yang membatu"], 0, "Buatan manusia."],
        ["Contoh fosil adalah …", ["tengkorak Pithecanthropus erectus", "nekara perunggu", "manik-manik", "kapak persegi"], 0, "Sisa tubuh yang membatu."],
        ["Unsur sejarah yang menjawab pertanyaan “di mana” adalah …", ["ruang", "waktu", "manusia", "peristiwa"], 0, "Ruang = tempat."],
        ["Ahli yang meneliti benda-benda peninggalan masa lalu disebut …", ["arkeolog", "geolog", "astronom", "sosiolog"], 0, "Arkeologi."],
        ["Prasasti termasuk sumber sejarah …", ["tertulis", "lisan", "benda hidup", "rekaman"], 0, "Berupa tulisan pada batu atau logam."],
        ["Keterangan langsung dari saksi peristiwa termasuk sumber sejarah …", ["lisan", "tertulis", "benda", "fosil"], 0, "Lisan."],
        ["Konsep sejarah yang menunjukkan peristiwa masa lalu berlanjut sampai sekarang disebut …", ["kesinambungan", "pengulangan", "kepunahan", "keberagaman"], 0, "Keberlanjutan/kesinambungan."]
      ]
    },
    {
      id: "cuaca-iklim", t: "Cuaca dan Iklim", s: 1, after: "letak-indonesia",
      sum: "Cuaca adalah keadaan udara pada waktu singkat di wilayah sempit, misalnya pagi ini di Jakarta hujan. Iklim adalah rata-rata cuaca dalam waktu lama (sekitar 30 tahun) di wilayah luas.\nDi Indonesia, lembaga yang mengamati cuaca dan iklim adalah BMKG.",
      pts: [
        "<b>Cuaca:</b> waktu singkat (jam/hari), wilayah sempit, cepat berubah.",
        "<b>Iklim:</b> rata-rata cuaca ± 30 tahun, wilayah luas, berubah sangat lambat.",
        "<b>Unsur cuaca dan iklim:</b> suhu udara, kelembapan, tekanan udara, angin, awan, curah hujan.",
        "<b>Alat ukur:</b> termometer (suhu), barometer (tekanan udara), anemometer (kecepatan angin), higrometer (kelembapan), ombrometer (curah hujan).",
        "<b>Iklim Indonesia</b> tropis dengan dua musim karena angin muson: musim hujan (Oktober–Maret) dan kemarau (April–September).",
        "<b>BMKG:</b> Badan Meteorologi, Klimatologi, dan Geofisika."
      ],
      ex: { q: "“Hari ini Bandung berawan sejak siang.” Kalimat ini membahas cuaca atau iklim?", a: "Cuaca, karena waktunya singkat (hari ini) dan wilayahnya sempit (Bandung)." },
      q: [
        ["Keadaan udara pada waktu singkat di wilayah sempit disebut …", ["cuaca", "iklim", "musim", "angin"], 0, "Cuaca."],
        ["Rata-rata cuaca dalam waktu lama di wilayah luas disebut …", ["iklim", "cuaca", "suhu", "kelembapan"], 0, "Iklim."],
        ["Alat untuk mengukur kecepatan angin adalah …", ["anemometer", "barometer", "termometer", "higrometer"], 0, "Anemometer."],
        ["Alat untuk mengukur tekanan udara adalah …", ["barometer", "anemometer", "ombrometer", "seismograf"], 0, "Barometer."],
        ["Alat untuk mengukur curah hujan adalah …", ["ombrometer", "higrometer", "termometer", "anemometer"], 0, "Penakar hujan."],
        ["Lembaga yang mengamati cuaca di Indonesia adalah …", ["BMKG", "BPS", "BNPB", "LIPI"], 0, "BMKG."],
        ["Iklim Indonesia adalah …", ["tropis", "subtropis", "sedang", "kutub"], 0, "Di sekitar khatulistiwa."],
        ["Alat untuk mengukur kelembapan udara adalah …", ["higrometer", "barometer", "anemometer", "ombrometer"], 0, "Higrometer."],
        ["Musim kemarau di Indonesia dipengaruhi angin …", ["muson timur", "muson barat", "passat", "lembah"], 0, "Bertiup dari Australia yang kering."],
        ["Iklim ditentukan dari rata-rata cuaca selama sekitar …", ["30 tahun", "1 minggu", "1 bulan", "1 tahun"], 0, "Periode panjang."]
      ]
    },
    {
      id: "lingkungan", t: "Kerusakan Lingkungan dan Pembangunan Berkelanjutan", s: 1, after: "sda",
      sum: "Pemakaian sumber daya alam yang berlebihan menyebabkan kerusakan lingkungan, seperti banjir, longsor, dan pencemaran. Kerusakan itu bisa karena faktor alam maupun ulah manusia.\nPembangunan berkelanjutan adalah pembangunan yang memenuhi kebutuhan sekarang tanpa mengorbankan kebutuhan generasi mendatang.",
      pts: [
        "<b>Kerusakan karena alam:</b> gempa bumi, letusan gunung api, tsunami, kemarau panjang.",
        "<b>Kerusakan karena manusia:</b> penebangan liar, pembakaran hutan, membuang sampah ke sungai, penambangan liar, pencemaran pabrik.",
        "<b>Dampak:</b> banjir, tanah longsor, erosi, punahnya flora dan fauna, pemanasan global.",
        "<b>Tiga pilar pembangunan berkelanjutan:</b> ekonomi (sejahtera), sosial (adil dan merata), lingkungan (lestari).",
        "<b>Tujuan:</b> memenuhi kebutuhan masa kini tanpa mengorbankan generasi mendatang. Dunia menyepakatinya dalam SDGs (17 tujuan).",
        "<b>Contoh kegiatan:</b> reboisasi, tebang pilih, terasering, energi surya, daur ulang sampah, hemat air dan listrik."
      ],
      ex: { q: "Mengapa sistem tebang pilih termasuk pembangunan berkelanjutan?", a: "Hanya pohon yang sudah tua yang ditebang, lalu ditanam pohon baru. Hutan tetap lestari dan masih bisa dimanfaatkan generasi berikutnya." },
      q: [
        ["Pembangunan yang memenuhi kebutuhan sekarang tanpa mengorbankan generasi mendatang disebut …", ["pembangunan berkelanjutan", "eksploitasi", "industrialisasi", "urbanisasi"], 0, "Sustainable development."],
        ["Tiga pilar pembangunan berkelanjutan adalah …", ["ekonomi, sosial, dan lingkungan", "politik, hukum, dan militer", "pertanian, industri, dan jasa", "pusat, provinsi, dan kabupaten"], 0, "Tiga pilar."],
        ["Contoh kerusakan lingkungan akibat ulah manusia adalah …", ["penebangan hutan liar", "letusan gunung api", "gempa bumi", "tsunami"], 0, "Faktor manusia."],
        ["Dampak penggundulan hutan adalah …", ["banjir dan tanah longsor", "udara lebih segar", "tanah lebih subur", "satwa bertambah"], 0, "Tidak ada akar penahan air."],
        ["Menanam kembali hutan yang gundul disebut …", ["reboisasi", "deforestasi", "eksploitasi", "abrasi"], 0, "Reboisasi."],
        ["Sistem menebang pohon yang sudah tua saja disebut …", ["tebang pilih", "tebang habis", "ladang berpindah", "pembakaran hutan"], 0, "Tebang pilih."],
        ["Membuat sawah bertingkat di lereng untuk mencegah erosi disebut …", ["terasering", "irigasi", "reboisasi", "rotasi tanaman"], 0, "Terasering."],
        ["Contoh kerusakan lingkungan karena faktor alam adalah …", ["letusan gunung api", "pembuangan limbah pabrik", "penambangan liar", "pembakaran hutan"], 0, "Faktor alam."],
        ["Tujuan pembangunan berkelanjutan dunia disebut …", ["SDGs", "WHO", "APEC", "OPEC"], 0, "Sustainable Development Goals."],
        ["Contoh kegiatan pembangunan berkelanjutan di rumah adalah …", ["mematikan lampu yang tidak dipakai", "membiarkan keran air menyala", "membakar sampah plastik", "membuang sampah ke sungai"], 0, "Hemat energi."]
      ]
    }
  ]
});

EXT(7, "ppkn", {
  order: ["lahirnya-pancasila", "pancasila-sehari", "norma", "uud-1945", "musyawarah", "keberagaman", "gotong-royong", "hak-kewajiban"],
  add: [
    {
      id: "pancasila-sehari", t: "Lambang, Nilai, dan Butir-Butir Pancasila", s: 1, after: "lahirnya-pancasila",
      sum: "Setiap sila Pancasila punya lambang di perisai Garuda Pancasila. Lambang negara Indonesia diatur dalam UU No. 24 Tahun 2009 dan dirancang oleh Sultan Hamid II.\nNilai-nilai Pancasila dijabarkan menjadi 45 butir pengamalan (Tap MPR No. I/MPR/2003) yang bisa kamu praktikkan setiap hari.",
      pts: [
        "<b>Lambang sila:</b> 1 bintang, 2 rantai, 3 pohon beringin, 4 kepala banteng, 5 padi dan kapas.",
        "<b>Bulu Garuda:</b> 17 helai di tiap sayap, 8 di ekor, 19 di pangkal ekor, 45 di leher. Artinya 17-8-1945.",
        "<b>Garis tebal di tengah perisai</b> melambangkan garis khatulistiwa. Pita bertuliskan Bhinneka Tunggal Ika.",
        "<b>Nilai sila:</b> ketuhanan, kemanusiaan, persatuan, kerakyatan, keadilan.",
        "<b>Contoh pengamalan:</b> beribadah sesuai agama (1), menolong korban bencana (2), bangga produk Indonesia (3), musyawarah (4), tidak boros dan menghargai karya orang lain (5).",
        "<b>Butir-butir Pancasila</b> ada 45 butir: sila 1 (7 butir), sila 2 (10), sila 3 (7), sila 4 (10), sila 5 (11)."
      ],
      ex: { q: "Mengapa rantai dipakai sebagai lambang sila kedua?", a: "Rantai tersusun dari mata rantai bulat dan persegi yang saling berkait, melambangkan manusia yang saling membutuhkan dan saling menolong." },
      tip: "Hafalkan urutan lambang dengan: Bintang – Rantai – Beringin – Banteng – Padi Kapas.",
      q: [
        ["Lambang sila pertama Pancasila adalah …", ["bintang", "rantai", "pohon beringin", "kepala banteng"], 0, "Bintang."],
        ["Lambang sila kedua Pancasila adalah …", ["rantai", "bintang", "padi dan kapas", "pohon beringin"], 0, "Rantai."],
        ["Pohon beringin melambangkan sila ke …", ["3", "1", "4", "5"], 0, "Persatuan Indonesia."],
        ["Kepala banteng melambangkan sila ke …", ["4", "2", "3", "5"], 0, "Kerakyatan."],
        ["Padi dan kapas melambangkan sila ke …", ["5", "4", "3", "2"], 0, "Keadilan sosial."],
        ["Jumlah bulu pada leher Garuda Pancasila adalah …", ["45", "17", "8", "19"], 0, "Melambangkan tahun 1945."],
        ["Perancang lambang Garuda Pancasila adalah …", ["Sultan Hamid II", "Soekarno", "Moh. Yamin", "W.R. Supratman"], 0, "Sultan Hamid II."],
        ["Garis tebal di tengah perisai Garuda melambangkan …", ["garis khatulistiwa", "sungai", "jalan raya", "batas negara"], 0, "Indonesia dilalui khatulistiwa."],
        ["Menolong korban bencana tanpa membedakan suku mencerminkan sila ke …", ["2", "1", "3", "4"], 0, "Kemanusiaan."],
        ["Jumlah butir pengamalan Pancasila menurut Tap MPR No. I/MPR/2003 adalah …", ["45", "36", "5", "17"], 0, "45 butir."]
      ]
    }
  ]
});

EXT(7, "pjok", {
  order: ["kasti", "sepak-bola", "voli", "basket", "atletik", "pencak-silat", "renang", "hidup-sehat"],
  add: [
    {
      id: "kasti", t: "Permainan Kasti", s: 1,
      sum: "Kasti adalah permainan bola kecil beregu yang populer di sekolah-sekolah Indonesia. Satu regu berisi 12 pemain. Regu pemukul berusaha memukul bola lalu berlari ke tiang hinggap, sedangkan regu penjaga berusaha mematikan pelari dengan melemparkan bola ke badannya.",
      pts: [
        "<b>Peralatan:</b> bola kasti (bola karet/tenis), kayu pemukul (sekitar 50–60 cm), tiang hinggap, bendera, dan peluit.",
        "<b>Jumlah pemain:</b> 12 orang tiap regu.",
        "<b>Teknik dasar:</b> melempar (lambung, mendatar, menggelinding), menangkap (bola lambung, mendatar, menggelinding), memukul, dan berlari.",
        "<b>Peran:</b> regu pemukul (menyerang) dan regu penjaga (bertahan). Pelambung adalah pemain penjaga yang melambungkan bola untuk dipukul.",
        "<b>Pelari mati</b> kalau badannya terkena lemparan bola dari regu penjaga (dibakar). Kalau bola pukulan ditangkap langsung, regu penjaga mendapat nilai.",
        "<b>Lapangan</b> berbentuk persegi panjang, sekitar 60–70 m × 30 m, dengan ruang bebas, ruang pelambung, dan tiang hinggap."
      ],
      ex: { q: "Theo memukul bola lalu berhasil kembali ke ruang bebas tanpa terkena lemparan. Apa yang didapat regunya?", a: "Regunya mendapat nilai. Pukulan sendiri yang berhasil membawa pelari pulang bernilai lebih besar daripada lari karena pukulan teman." },
      tip: "Saat menangkap bola, kedua tangan membentuk mangkuk dan tarik ke dada supaya bola tidak memantul keluar.",
      q: [
        ["Jumlah pemain satu regu kasti adalah …", ["12 orang", "6 orang", "9 orang", "11 orang"], 0, "Dua belas."],
        ["Alat yang dipakai untuk memukul bola kasti adalah …", ["kayu pemukul", "raket", "tongkat hoki", "tangan kosong"], 0, "Pemukul kayu."],
        ["Pemain penjaga yang melambungkan bola kepada pemukul disebut …", ["pelambung", "penjaga tiang", "pemukul", "wasit"], 0, "Pelambung."],
        ["Pelari dinyatakan mati jika …", ["badannya terkena lemparan bola dari regu penjaga", "berlari terlalu cepat", "memukul bola terlalu jauh", "menyentuh tiang hinggap"], 0, "Dibakar."],
        ["Tempat pelari berhenti sementara disebut …", ["tiang hinggap", "ruang pelambung", "garis pukul", "ruang tunggu"], 0, "Tiang hinggap."],
        ["Teknik melempar bola kasti meliputi lemparan …", ["lambung, mendatar, dan menggelinding", "smash dan servis", "lay-up dan chest pass", "dribble dan heading"], 0, "Tiga jenis lemparan."],
        ["Regu yang bertugas memukul bola disebut regu …", ["pemukul", "penjaga", "pelambung", "cadangan"], 0, "Menyerang."],
        ["Bola yang digunakan dalam permainan kasti adalah …", ["bola karet kecil", "bola basket", "bola voli", "bola sepak"], 0, "Bola kecil."],
        ["Cara menangkap bola yang benar adalah …", ["kedua tangan membentuk mangkuk lalu bola ditarik ke dada", "satu jari saja", "menunggu bola memantul jauh", "menendang bola"], 0, "Agar bola tidak lepas."],
        ["Kasti termasuk permainan …", ["bola kecil", "bola besar", "air", "bela diri"], 0, "Seperti rounders dan softball."]
      ]
    }
  ]
});
