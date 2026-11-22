// KELAS 7 — materi tambahan sesuai kisi-kisi UAS dari guru (PAI, IPA, Bahasa Indonesia)

// ---------- PAI: bab yang ada di kisi-kisi ----------
(function () {
  const bu = (MATERI[8].pai || []).find((c) => c.id === "umayyah");
  EXT(7, "pai", {
    order: ["quran-sunnah", "asmaul-husna", "salat-zikir", "sujud", "umayyah-7", "ilmu", "akhlak", "thaharah", "salat-jumat", "malaikat", "nabi-mekah", "nabi-madinah"],
    more: {
      "asmaul-husna": {
        s: 1,
        pts: ["<b>Al-Khabir</b> juga dimaknai Allah Maha Mengetahui secara mendalam, sampai hal yang tersembunyi di hati."],
        q: [["Yakin bahwa Allah mengetahui isi hati membuat kita …", ["menjaga niat agar tetap ikhlas", "bebas berniat buruk", "pamer kebaikan", "malas beribadah"], 0, "Al-Khabir dan Al-‘Alim."]]
      }
    },
    add: [
      {
        id: "quran-sunnah", t: "Al-Qur’an dan Sunnah sebagai Pedoman Hidup", s: 1,
        sum: "Al-Qur’an adalah kalam Allah yang diturunkan kepada Nabi Muhammad saw. melalui Malaikat Jibril. Al-Qur’an menjadi pedoman hidup utama bagi umat Islam.\nSunnah (hadis) adalah segala ucapan, perbuatan, dan ketetapan Nabi Muhammad saw. Sunnah menjadi sumber hukum kedua dan berfungsi menjelaskan isi Al-Qur’an.",
        pts: [
          "<b>Fungsi Al-Qur’an:</b> huda (petunjuk), furqan (pembeda yang hak dan batil), syifa’ (obat hati), rahmat, dan mau’izah (nasihat).",
          "<b>Kedudukan Sunnah:</b> sumber hukum Islam kedua setelah Al-Qur’an.",
          "<b>Fungsi Sunnah terhadap Al-Qur’an:</b> bayan taqrir (menguatkan), bayan tafsir (menjelaskan ayat yang umum, misalnya tata cara salat), bayan tasyri’ (menetapkan hukum yang tidak ada di Al-Qur’an).",
          "<b>Jenis Sunnah:</b> qauliyah (ucapan), fi’liyah (perbuatan), taqririyah (ketetapan atau persetujuan Nabi).",
          "<b>Q.S. An-Nisa’: 59:</b> taatilah Allah, Rasul, dan ulil amri (pemimpin). Jika berselisih, kembalikan kepada Allah (Al-Qur’an) dan Rasul (Sunnah).",
          "<b>Q.S. An-Nahl: 64:</b> Allah menurunkan Al-Qur’an kepada Nabi agar beliau menjelaskan apa yang diperselisihkan manusia, serta menjadi petunjuk dan rahmat bagi orang beriman.",
          "<b>Penerapan:</b> membaca dan mempelajari Al-Qur’an, meniru akhlak Nabi, menaati pemimpin selama tidak menyuruh maksiat, menyelesaikan masalah dengan musyawarah."
        ],
        ex: { q: "Al-Qur’an memerintahkan salat, tetapi tidak menjelaskan jumlah rakaatnya. Dari mana kita tahu salat Zuhur empat rakaat?", a: "Dari Sunnah. Nabi mencontohkan tata cara dan jumlah rakaat salat. Ini fungsi Sunnah sebagai bayan tafsir (penjelas)." },
        tip: "Hafalkan pasangan ayat: An-Nisa’ 59 = taat kepada Allah, Rasul, ulil amri. An-Nahl 64 = Al-Qur’an untuk menjelaskan perselisihan, petunjuk, dan rahmat.",
        q: [
          ["Sunnah adalah sumber hukum Islam yang ke …", ["dua", "satu", "tiga", "empat"], 0, "Setelah Al-Qur’an."],
          ["Ulil amri dalam Q.S. An-Nisa’: 59 artinya …", ["pemimpin", "ulama saja", "orang tua", "teman"], 0, "Pemegang urusan atau pemimpin."],
          ["Sunnah yang berupa ucapan Nabi disebut sunnah …", ["qauliyah", "fi’liyah", "taqririyah", "hammiyah"], 0, "Qaul = ucapan."],
          ["Sunnah yang berupa persetujuan Nabi atas perbuatan sahabat disebut sunnah …", ["taqririyah", "qauliyah", "fi’liyah", "mutawatir"], 0, "Taqrir = ketetapan."],
          ["Al-Qur’an sebagai syifa’ artinya …", ["obat (penyembuh hati)", "pembeda", "petunjuk", "kabar gembira"], 0, "Syifa’."],
          ["Menurut Q.S. An-Nahl: 64, Al-Qur’an menjadi petunjuk dan … bagi orang beriman.", ["rahmat", "hukuman", "beban", "hiburan"], 0, "Huda wa rahmah."],
          ["Fungsi Sunnah yang menjelaskan ayat Al-Qur’an yang masih umum disebut bayan …", ["tafsir", "taqrir", "tasyri’", "nasakh"], 0, "Bayan tafsir."],
          ["Sikap yang sesuai dengan Q.S. An-Nisa’: 59 di sekolah adalah …", ["menaati peraturan sekolah dan guru", "membantah perintah guru", "membuat aturan sendiri", "mengabaikan ketua kelas"], 0, "Taat kepada pemimpin dalam kebaikan."],
          ["Al-Qur’an diturunkan kepada Nabi Muhammad melalui malaikat …", ["Jibril", "Mikail", "Israfil", "Izrail"], 0, "Jibril."],
          ["Jika dua teman berselisih soal hukum agama, menurut An-Nisa’: 59 penyelesaiannya adalah …", ["merujuk kepada Al-Qur’an dan Sunnah", "memilih yang suaranya keras", "bertengkar sampai menang", "mengikuti tren media sosial"], 0, "Kembalikan kepada Allah dan Rasul."]
        ]
      },
      {
        id: "salat-zikir", t: "Menghadirkan Salat dan Zikir dalam Kehidupan", s: 1,
        sum: "Salat bukan sekadar gerakan dan bacaan. Salat yang dikerjakan dengan khusyuk akan terlihat pengaruhnya pada perilaku: jujur, disiplin, bersih, dan sopan.\nZikir berarti mengingat Allah. Zikir bisa dilakukan dengan lisan, hati, dan perbuatan, kapan saja dan di mana saja.",
        pts: [
          "<b>Menghadirkan salat:</b> nilai salat tetap terbawa setelah salam, misalnya disiplin waktu, menjaga kebersihan, dan rendah hati.",
          "<b>Hubungan salat dengan akhlak:</b> Q.S. Al-‘Ankabut: 45, salat mencegah perbuatan keji dan mungkar.",
          "<b>Hikmah zikir:</b> hati menjadi tenang (Q.S. Ar-Ra’d: 28), dekat dengan Allah, terhindar dari perbuatan buruk, mendapat pahala.",
          "<b>Bentuk zikir lisan:</b> tasbih (Subhanallah), tahmid (Alhamdulillah), takbir (Allahu akbar), tahlil (La ilaha illallah), istigfar (Astaghfirullah).",
          "<b>Zikir hati (qalbi)</b> dengan merenungkan kebesaran Allah. <b>Zikir perbuatan</b> dengan melakukan kebaikan karena Allah.",
          "<b>Nilai salat dalam kehidupan:</b> disiplin (tepat waktu), bersih (wudu), tertib (mengikuti imam), kebersamaan (berjamaah)."
        ],
        ex: { q: "Bagaimana orang yang salatnya “hadir” bersikap di luar salat?", a: "Dia jujur, menepati waktu, menjaga kebersihan, tidak menyakiti orang lain, dan tidak sombong, karena salat mencegah perbuatan keji dan mungkar." },
        q: [
          ["Salat dapat mencegah perbuatan keji dan mungkar dijelaskan dalam Q.S. …", ["Al-‘Ankabut: 45", "Ar-Ra’d: 28", "An-Nisa’: 59", "Al-Ikhlas: 1"], 0, "Al-‘Ankabut: 45."],
          ["Zikir membuat hati tenang dijelaskan dalam Q.S. …", ["Ar-Ra’d: 28", "Al-‘Ankabut: 45", "An-Nahl: 64", "Al-Baqarah: 183"], 0, "Ar-Ra’d: 28."],
          ["Bacaan “Allahu akbar” disebut …", ["takbir", "tahmid", "tasbih", "tahlil"], 0, "Takbir."],
          ["Bacaan “Subhanallah” artinya …", ["Maha Suci Allah", "Segala puji bagi Allah", "Allah Maha Besar", "Tiada Tuhan selain Allah"], 0, "Tasbih."],
          ["Nilai disiplin dari salat terlihat dari …", ["salat dikerjakan tepat waktu", "salat boleh ditunda tanpa alasan", "salat sambil bercanda", "salat hanya kalau ingat"], 0, "Waktu salat sudah ditentukan."],
          ["Wudu sebelum salat mengajarkan nilai …", ["kebersihan", "kemalasan", "kesombongan", "keterlambatan"], 0, "Bersih lahir dan batin."],
          ["Zikir dengan cara merenungkan kebesaran ciptaan Allah termasuk zikir …", ["hati", "lisan", "jahr", "suara keras"], 0, "Zikir qalbi."],
          ["Bacaan istigfar adalah …", ["Astaghfirullahal ‘azim", "Alhamdulillah", "Allahu akbar", "Bismillah"], 0, "Memohon ampun."],
          ["Salat berjamaah mengajarkan nilai …", ["kebersamaan dan ketertiban", "individualisme", "persaingan", "kemewahan"], 0, "Mengikuti imam bersama-sama."],
          ["Orang yang salatnya rajin tetapi suka berbohong berarti …", ["belum menghadirkan nilai salat dalam hidupnya", "salatnya sudah sempurna", "tidak perlu salat lagi", "boleh berbohong"], 0, "Nilai salat harus terlihat dalam akhlak."]
        ]
      },
      {
        id: "sujud", t: "Sujud Syukur, Sujud Sahwi, dan Sujud Tilawah", s: 1,
        sum: "Ada tiga sujud di luar sujud biasa dalam salat. Kuncinya adalah membedakan sebab masing-masing sujud.\nSujud syukur karena mendapat nikmat, sujud sahwi karena lupa dalam salat, dan sujud tilawah karena membaca atau mendengar ayat sajdah.",
        pts: [
          "<b>Sujud syukur:</b> sebabnya mendapat nikmat atau terhindar dari musibah. Dilakukan di luar salat, satu kali sujud, hukumnya sunah.",
          "<b>Bacaan sujud syukur yang umum diajarkan:</b> “Subhanallah walhamdulillah wa la ilaha illallah wallahu akbar.” (Ikuti versi buku atau gurumu kalau berbeda.)",
          "<b>Sujud sahwi:</b> sebabnya lupa atau ada kekurangan dalam salat, misalnya lupa tasyahud awal, kelebihan atau kekurangan rakaat, atau ragu jumlah rakaat.",
          "<b>Cara sujud sahwi:</b> setelah tasyahud akhir sebelum salam, sujud dua kali dengan duduk di antaranya, lalu salam.",
          "<b>Bacaan sujud sahwi:</b> “Subhana man la yanamu wa la yashu” artinya Maha Suci Allah yang tidak tidur dan tidak lupa.",
          "<b>Sujud tilawah:</b> sebabnya membaca atau mendengar ayat sajdah. Bisa dilakukan di dalam atau di luar salat.",
          "<b>Hikmah:</b> sujud syukur menjauhkan dari sombong, sujud sahwi menunjukkan manusia bisa lupa dan ada cara memperbaikinya, sujud tilawah menambah rasa tunduk kepada Allah."
        ],
        ex: { q: "Saat salat Asar berjamaah, imam berdiri ke rakaat ketiga tanpa duduk tasyahud awal. Apa yang dilakukan?", a: "Salat dilanjutkan. Setelah tasyahud akhir dan sebelum salam, imam dan makmum melakukan sujud sahwi dua kali, lalu salam." },
        ex2: { q: "Bedakan sebab ketiga sujud dalam satu kalimat masing-masing.", a: "Syukur: dapat nikmat atau selamat dari musibah. Sahwi: lupa atau kurang dalam salat. Tilawah: membaca atau mendengar ayat sajdah." },
        tip: "Ingat artinya: syukur = terima kasih, sahwi = lupa, tilawah = bacaan.",
        q: [
          ["Arti kata “sahwi” adalah …", ["lupa", "terima kasih", "bacaan", "tunduk"], 0, "Sahwi = lupa."],
          ["Arti kata “tilawah” adalah …", ["bacaan", "lupa", "syukur", "doa"], 0, "Tilawah = membaca."],
          ["Hukum sujud syukur adalah …", ["sunah", "wajib", "makruh", "haram"], 0, "Sunah."],
          ["Sujud sahwi dilakukan pada waktu …", ["setelah tasyahud akhir sebelum salam", "sebelum takbiratul ihram", "setelah rukuk", "di awal rakaat pertama"], 0, "Pendapat yang umum diajarkan."],
          ["Jumlah sujud dalam sujud syukur adalah …", ["satu kali", "dua kali", "tiga kali", "empat kali"], 0, "Satu sujud."],
          ["Jika ragu sudah salat tiga atau empat rakaat, sebaiknya …", ["mengambil yang lebih sedikit (tiga), lalu sujud sahwi", "mengambil empat lalu salam", "mengulang dari awal tanpa sujud", "berhenti salat"], 0, "Ambil yang yakin, yaitu jumlah lebih sedikit."],
          ["Bacaan “Subhana man la yanamu wa la yashu” dibaca saat sujud …", ["sahwi", "syukur", "tilawah", "salat Jumat"], 0, "Khas sujud sahwi."],
          ["Sujud yang dilakukan ketika mendengar ayat sajdah dibacakan adalah sujud …", ["tilawah", "sahwi", "syukur", "salat"], 0, "Tilawah."],
          ["Sujud syukur dilakukan …", ["di luar salat", "di dalam salat sebelum salam", "setelah rukuk", "hanya saat Idulfitri"], 0, "Di luar salat."],
          ["Hikmah sujud sahwi adalah …", ["menyadari manusia bisa lupa dan Islam memberi cara memperbaikinya", "agar salat lebih lama", "agar dipuji imam", "mengganti salat yang ditinggal"], 0, "Rukhsah dan pelajaran rendah hati."]
        ]
      },
      bu ? Object.assign({}, bu, {
        id: "umayyah-7", s: 1,
        t: "Sejarah Bani Umayyah",
        pts: bu.pts.concat([
          "<b>Awal berdiri:</b> tahun 661 M (41 H), setelah Hasan bin Ali menyerahkan kekhalifahan kepada Muawiyah. Tahun ini disebut ‘Amul Jama’ah (tahun persatuan).",
          "<b>Al-Walid bin Abdul Malik</b> membangun Masjid Umayyah di Damaskus dan memperluas wilayah sampai Spanyol dan India.",
          "<b>Kemajuan:</b> bahasa Arab resmi, mata uang dinar, pos, armada laut, ilmu tafsir, hadis, dan bahasa Arab.",
          "<b>Faktor kemunduran:</b> perebutan kekuasaan dalam keluarga, khalifah hidup mewah, rakyat tidak puas, dan pemberontakan.",
          "<b>Keruntuhan:</b> tahun 750 M dikalahkan Bani Abbasiyah. Khalifah terakhir Marwan bin Muhammad."
        ]),
        q: bu.q.slice(0, 7).concat([
          ["Tahun berdirinya Bani Umayyah disebut ‘Amul Jama’ah yang artinya …", ["tahun persatuan", "tahun kesedihan", "tahun gajah", "tahun kemenangan"], 0, "Umat bersatu di bawah satu khalifah."],
          ["Bani Umayyah runtuh pada tahun …", ["750 M", "661 M", "1258 M", "632 M"], 0, "Dikalahkan Abbasiyah."],
          ["Khalifah terakhir Bani Umayyah di Damaskus adalah …", ["Marwan bin Muhammad", "Muawiyah bin Abu Sufyan", "Umar bin Abdul Aziz", "Al-Walid bin Abdul Malik"], 0, "Marwan II."],
          ["Masjid Umayyah di Damaskus dibangun oleh khalifah …", ["Al-Walid bin Abdul Malik", "Yazid bin Muawiyah", "Hisyam", "Marwan bin Hakam"], 0, "Al-Walid I."],
          ["Salah satu faktor runtuhnya Bani Umayyah adalah …", ["perebutan kekuasaan di dalam keluarga khalifah", "rakyat terlalu sejahtera", "tidak punya tentara", "wilayahnya hanya satu kota"], 0, "Konflik internal."]
        ])
      }) : null
    ].filter(Boolean)
  });
})();

// ---------- IPA: poin yang ada di kisi-kisi ----------
EXT(7, "ipa", {
  more: {
    "metode-ilmiah": {
      pts: [
        "<b>Cabang IPA:</b> biologi (makhluk hidup), fisika (gerak, energi, gaya), kimia (zat dan perubahannya), astronomi (benda langit), geologi (bumi dan batuan).",
        "<b>Alat laboratorium:</b> gelas ukur (volume cairan), tabung reaksi (mereaksikan zat), pipet tetes (mengambil sedikit cairan), pembakar spiritus (memanaskan), kaki tiga (penyangga saat memanaskan), mikroskop (melihat benda kecil), neraca (mengukur massa).",
        "<b>Simbol bahan kimia:</b> tengkorak (beracun), api (mudah terbakar), ledakan (mudah meledak), cairan merusak tangan/logam (korosif), tanda seru (berbahaya/iritasi), lingkaran api (oksidator)."
      ],
      q: [
        ["Alat untuk mengambil sedikit cairan dalam jumlah tetes adalah …", ["pipet tetes", "gelas kimia", "corong", "cawan petri"], 0, "Pipet tetes."],
        ["Simbol api pada wadah bahan kimia menunjukkan bahan …", ["mudah terbakar", "beracun", "korosif", "radioaktif"], 0, "Flammable."]
      ]
    },
    "suhu-kalor": {
      pts: [
        "<b>Rumus pemuaian panjang:</b> Δl = l₀ × α × ΔT, dan panjang akhir l = l₀ + Δl.",
        "<b>Konduktor</b> menghantarkan kalor dengan baik (logam). <b>Isolator</b> menghantarkan kalor dengan buruk (kayu, plastik, kain, gabus, udara)."
      ],
      ex2: { q: "Kawat tembaga panjangnya 2 m (200 cm) dipanaskan naik 50 °C. Koefisien muai panjang tembaga 0,000017 /°C. Berapa panjang akhirnya?", a: "Δl = 200 × 0,000017 × 50 = 0,17 cm. Panjang akhir = 200 + 0,17 = 200,17 cm." },
      q: [
        ["Pertambahan panjang besi yang dipanaskan bergantung pada …", ["panjang awal, jenis bahan, dan kenaikan suhu", "warna besi", "bentuk ruangan", "berat orang yang mengukur"], 0, "Δl = l₀ × α × ΔT."],
        ["Contoh bahan isolator kalor adalah …", ["kayu", "aluminium", "besi", "tembaga"], 0, "Penghantar buruk."]
      ]
    },
    "gerak-gaya": {
      s: 1,
      pts: [
        "<b>Jarak</b> adalah panjang seluruh lintasan (besaran skalar). <b>Perpindahan</b> adalah perubahan posisi dari awal ke akhir, punya arah (besaran vektor).",
        "<b>Percepatan:</b> a = (v₂ − v₁) / t. Percepatan negatif berarti perlambatan.",
        "<b>Jarak pada GLB:</b> s = v × t. Pada GLB kecepatan tetap, pada GLBB kecepatan berubah teratur."
      ],
      ex2: { q: "Theo berlari 30 m ke utara lalu kembali 10 m ke selatan dalam 20 sekon. Tentukan jarak, perpindahan, dan kelajuan rata-ratanya.", a: "Jarak = 40 m. Perpindahan = 20 m ke utara. Kelajuan rata-rata = 40 : 20 = 2 m/s." },
      q: [
        ["Besaran yang memiliki arah disebut besaran …", ["vektor", "skalar", "pokok", "turunan"], 0, "Contoh: perpindahan, kecepatan, gaya."],
        ["Mobil dari kecepatan 10 m/s menjadi 30 m/s dalam 4 sekon. Percepatannya …", ["5 m/s²", "10 m/s²", "20 m/s²", "40 m/s²"], 0, "(30 − 10) : 4."]
      ]
    }
  }
});

// ---------- Bahasa Indonesia: kebahasaan yang ada di kisi-kisi ----------
EXT(7, "indo", {
  order: ["deskripsi", "narasi", "puisi-rakyat", "prosedur", "kebahasaan", "ejaan", "ide-pokok", "lho", "fabel", "surat"],
  more: { "puisi-rakyat": { s: 1, pts: ["<b>Ciri puisi secara umum:</b> tersusun atas bait dan larik, bahasanya padat dan indah, memakai rima dan irama, serta banyak kata bermakna kias."] } },
  add: [
    {
      id: "kebahasaan", t: "Kata Ganti, Konjungsi, Sinonim, dan Kalimat Langsung", s: 1,
      sum: "Bab ini merangkum materi kebahasaan yang sering muncul di soal UAS: kata ganti orang, konjungsi, sinonim, serta kalimat langsung dan tidak langsung.\nMateri ini kecil-kecil, tapi hampir selalu ada di ujian, jadi pastikan kamu hafal.",
      pts: [
        "<b>Kata ganti orang pertama:</b> aku, saya, kami, kita. <b>Kedua:</b> kamu, engkau, Anda, kalian. <b>Ketiga:</b> dia, ia, beliau, mereka.",
        "<b>Konjungsi:</b> penambahan (dan, serta), pertentangan (tetapi, namun), sebab (karena), akibat (sehingga), waktu/temporal (kemudian, setelah itu, lalu), pilihan (atau).",
        "<b>Sinonim</b> adalah kata yang maknanya sama atau mirip: indah = elok, pandai = cerdik, cepat = lekas. <b>Antonim</b> adalah lawan kata.",
        "<b>Kalimat langsung:</b> menirukan ucapan persis, memakai tanda petik. “Aku lapar,” kata Theo.",
        "<b>Kalimat tidak langsung:</b> melaporkan ucapan tanpa tanda petik, kata ganti berubah, sering memakai kata bahwa. Theo berkata bahwa dia lapar.",
        "<b>Latar cerita:</b> tempat (di mana), waktu (kapan), suasana (bagaimana keadaannya)."
      ],
      ex: { q: "Ubah ke kalimat tidak langsung: “Kami akan berlibur ke Bandung,” kata Rani.", a: "Rani mengatakan bahwa mereka akan berlibur ke Bandung. Kata ganti “kami” berubah menjadi “mereka”." },
      tip: "Kalimat tidak langsung tidak memakai tanda petik. Cek juga apakah kata gantinya sudah berubah.",
      q: [
        ["Kata ganti orang ketiga jamak adalah …", ["mereka", "kami", "kalian", "kita"], 0, "Mereka."],
        ["Kata ganti orang kedua jamak adalah …", ["kalian", "kami", "mereka", "beliau"], 0, "Kalian."],
        ["“Theo belajar ___ adiknya bermain.” Konjungsi yang menunjukkan waktu bersamaan adalah …", ["sementara", "karena", "tetapi", "atau"], 0, "Sementara = pada waktu yang sama."],
        ["Konjungsi “sehingga” menunjukkan hubungan …", ["akibat", "pertentangan", "pilihan", "penambahan"], 0, "Akibat."],
        ["Sinonim kata “lekas” adalah …", ["cepat", "lambat", "lama", "pelan"], 0, "Lekas = cepat."],
        ["Antonim kata “rajin” adalah …", ["malas", "tekun", "giat", "pandai"], 0, "Lawan kata."],
        ["Ciri kalimat langsung adalah …", ["memakai tanda petik pada ucapan yang ditirukan", "selalu memakai kata bahwa", "tidak ada tanda baca", "kata gantinya selalu berubah"], 0, "Tanda petik."],
        ["“Saya sudah mengerjakan PR,” ujar Dina. Kalimat tidak langsungnya …", ["Dina berkata bahwa dia sudah mengerjakan PR.", "Dina berkata, “Dia sudah mengerjakan PR.”", "“Dina sudah mengerjakan PR,” kata saya.", "Saya sudah mengerjakan PR, Dina."], 0, "Tanpa petik, saya → dia."],
        ["Sinonim kata “sukar” adalah …", ["sulit", "mudah", "ringan", "gampang"], 0, "Sukar = sulit."],
        ["Kata “beliau” dipakai untuk menyebut orang ketiga yang …", ["dihormati", "lebih muda", "teman sebaya", "tidak dikenal"], 0, "Bentuk hormat."]
      ]
    }
  ]
});
