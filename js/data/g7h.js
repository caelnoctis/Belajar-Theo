// KELAS 7 — tambahan sesuai kisi-kisi SAS: Bahasa Inggris dan TIK/Informatika
EXT(7, "inggris", {
  order: ["greetings", "family", "describing", "simple-present", "articles", "my-house", "time-dates", "hobbies", "food", "procedure-7", "descriptive-text"],
  more: {
    "simple-present": {
      pts: ["<b>Simple present nominal</b> (tanpa kata kerja, pakai to be): S + am/is/are + adjective/noun/place. She is a student. They are in the library. Negatif: He is not (isn’t) hungry. Tanya: Are you ready?", "<b>Simple present verbal</b> (pakai kata kerja): S + V1(s/es). He plays chess. Negatif pakai don’t/doesn’t, tanya pakai do/does."],
      q: [
        ["My sister ___ a nurse. (nominal)", ["is", "are", "am", "does"], 0, "Nominal: to be is untuk she."],
        ["“___ you hungry?” “Yes, I am.”", ["Are", "Do", "Is", "Does"], 0, "Nominal: pakai to be."]
      ]
    },
    food: {
      pts: ["<b>Texture (tekstur):</b> crunchy/crispy (renyah), soft (lembut), chewy (kenyal), hard (keras), smooth (halus), juicy (berair), sticky (lengket), creamy (lembut seperti krim).", "<b>Taste (rasa):</b> sweet, salty, sour, bitter, spicy, savory (gurih), bland (hambar)."],
      q: [
        ["Kerupuk is …", ["crunchy", "soft", "chewy", "juicy"], 0, "Renyah."],
        ["Coffee without sugar tastes …", ["bitter", "sweet", "salty", "sour"], 0, "Pahit."],
        ["Mochi is soft and …", ["chewy", "crunchy", "hard", "crispy"], 0, "Kenyal."]
      ]
    }
  },
  add: [
    {
      id: "articles", t: "Articles: A and An", s: 1, after: "simple-present",
      sum: "A dan an dipakai di depan kata benda tunggal yang bisa dihitung, artinya “sebuah/seekor/seorang”. Pilihannya ditentukan oleh bunyi awal kata, bukan huruf awalnya.",
      pts: [
        "<b>A</b> dipakai sebelum kata yang berbunyi konsonan: a book, a cat, a university (dibaca yu-), a uniform.",
        "<b>An</b> dipakai sebelum kata yang berbunyi vokal (a, i, u, e, o): an apple, an egg, an orange, an umbrella, an hour (h tidak dibaca).",
        "<b>Tidak dipakai</b> untuk benda jamak (books) dan tidak terhitung (water, rice).",
        "<b>Dengan kata sifat:</b> lihat bunyi kata sifatnya. an old man, a big apple.",
        "<b>Profesi:</b> She is a teacher. He is an engineer."
      ],
      ex: { q: "Lengkapi: “I have ___ umbrella and ___ uniform.”", a: "“an umbrella” (bunyi vokal /ʌ/) dan “a uniform” (bunyi /yu/, konsonan)." },
      tip: "Ucapkan katanya keras-keras. Kalau bunyinya diawali vokal, pakai an.",
      q: [
        ["I eat ___ apple every morning.", ["an", "a", "the plural", "some"], 0, "Apple berbunyi vokal."],
        ["She has ___ cat.", ["a", "an", "two", "many"], 0, "Cat berbunyi konsonan."],
        ["He studies at ___ university.", ["a", "an", "some", "many"], 0, "University dibaca /yu/, bunyi konsonan."],
        ["We waited for ___ hour.", ["an", "a", "two", "many"], 0, "H pada hour tidak dibaca."],
        ["My father is ___ engineer.", ["an", "a", "the plural", "some"], 0, "Engineer berbunyi vokal."],
        ["There is ___ orange on the table.", ["an", "a", "many", "few"], 0, "Orange berbunyi vokal."],
        ["She is ___ honest girl.", ["an", "a", "two", "many"], 0, "Honest: h tidak dibaca."],
        ["I need ___ new pencil.", ["a", "an", "many", "some"], 0, "Lihat kata sifat new: bunyi konsonan."],
        ["Which is correct?", ["an egg", "a egg", "an book", "a eggs"], 0, "Egg berbunyi vokal."],
        ["A/an tidak dipakai di depan …", ["kata benda jamak seperti books", "kata benda tunggal seperti book", "kata benda tunggal seperti apple", "profesi seperti teacher"], 0, "Hanya untuk benda tunggal terhitung."]
      ]
    },
    {
      id: "procedure-7", t: "Procedure Text and Imperatives", s: 1, after: "food",
      sum: "Procedure text menjelaskan cara membuat atau melakukan sesuatu, misalnya resep atau cara memakai alat. Kalimatnya kebanyakan imperative (kalimat perintah) yang diawali kata kerja bentuk dasar.",
      pts: [
        "<b>Structure:</b> goal (tujuan/judul), materials atau ingredients (bahan dan alat), steps (langkah).",
        "<b>Imperative:</b> diawali V1 tanpa subjek. Cut the bread. Pour the water. Mix well.",
        "<b>Negative imperative:</b> Don’t + V1. Don’t touch the hot pan.",
        "<b>Sequence words:</b> first, second, next, then, after that, finally.",
        "<b>Common verbs:</b> cut, peel, slice, pour, mix, stir, boil, fry, add, spread, press, plug in, turn on.",
        "<b>Polite instruction:</b> Please close the door."
      ],
      ex: { q: "Susun: (a) Pour hot water into the cup. (b) Put a tea bag in a cup. (c) Add sugar and stir.", a: "b – a – c. Teh dimasukkan dulu, lalu air panas, terakhir gula diaduk." },
      q: [
        ["The purpose of a procedure text is to …", ["tell how to make or do something", "describe a person", "tell a past experience", "entertain readers"], 0, "Langkah-langkah."],
        ["“___ the onions into small pieces.”", ["Cut", "Cuts", "Cutting", "To cutting"], 0, "Imperative pakai V1."],
        ["Which is a negative imperative?", ["Don’t open the window.", "Open the window.", "She opens the window.", "Is the window open?"], 0, "Don’t + V1."],
        ["The list of things you need in a recipe is called …", ["ingredients", "steps", "goal", "orientation"], 0, "Bahan."],
        ["Which word shows the last step?", ["Finally", "First", "Next", "Then"], 0, "Terakhir."],
        ["“Stir the milk until it is smooth.” The verb “stir” means …", ["mengaduk", "memotong", "menuang", "menggoreng"], 0, "Stir = aduk."],
        ["The first part of a procedure text is the …", ["goal", "steps", "materials", "conclusion"], 0, "Tujuan/judul."],
        ["“___ the TV cable into the socket.”", ["Plug", "Plugs", "Plugged", "Plugging"], 0, "Plug in = colokkan."],
        ["“Please sit down.” This sentence is a …", ["polite instruction", "question", "statement of fact", "greeting"], 0, "Perintah sopan."],
        ["“Peel the banana.” Peel means …", ["mengupas", "merebus", "menumbuk", "memanggang"], 0, "Kupas."]
      ]
    }
  ]
});

EXT(7, "info", {
  order: ["berpikir-komputasional", "sistem-komputer", "sistem-bilangan", "tik-perkantoran", "internet", "etika-digital", "pemrograman-blok", "analisis-data"],
  more: {
    "pemrograman-blok": {
      s: 1,
      pts: [
        "<b>Kategori blok Scratch:</b> Motion (gerak, biru), Looks (tampilan), Sound (suara), Events (pemicu, kuning), Control (kendali: wait, repeat, forever, if), Sensing, Operators, Variables (oranye, menyimpan nilai seperti skor).",
        "<b>Forever:</b> mengulang blok di dalamnya terus-menerus tanpa henti. <b>Repeat 10:</b> mengulang tepat 10 kali.",
        "<b>Program tidak berjalan</b> biasanya karena blok tidak tersambung ke blok Events (when green flag clicked) atau bendera hijau belum diklik."
      ],
      q: [
        ["Blok Scratch yang mengulang perintah terus-menerus tanpa berhenti adalah …", ["forever", "repeat 10", "wait 1 seconds", "if then"], 0, "Forever."],
        ["Kategori blok Scratch untuk menggerakkan sprite adalah …", ["Motion", "Looks", "Sound", "Variables"], 0, "Motion."],
        ["Program Scratch tidak berjalan saat bendera hijau diklik. Penyebab yang paling mungkin adalah …", ["blok tidak tersambung ke blok “when green flag clicked”", "sprite terlalu besar", "warna backdrop gelap", "suara komputer mati"], 0, "Blok harus menempel pada blok Events."]
      ]
    },
    "etika-digital": { s: 1 }
  },
  add: [
    {
      id: "sistem-bilangan", t: "Sistem Bilangan Biner, Desimal, dan ASCII", s: 1, after: "sistem-komputer",
      sum: "Kamu sehari-hari memakai bilangan desimal (basis 10, angka 0–9). Komputer memakai bilangan biner (basis 2, angka 0 dan 1) karena rangkaian listriknya hanya punya dua keadaan: mati dan hidup.\nHuruf yang kamu ketik juga diubah menjadi angka biner lewat kode bernama ASCII.",
      pts: [
        "<b>Desimal:</b> basis 10, memakai angka 0–9. <b>Biner:</b> basis 2, memakai angka 0 dan 1.",
        "<b>Biner ke desimal:</b> kalikan tiap digit dengan pangkat 2 sesuai posisinya dari kanan (1, 2, 4, 8, 16, …), lalu jumlahkan. 1011₂ = 8 + 0 + 2 + 1 = 11.",
        "<b>Desimal ke biner:</b> bagi 2 terus-menerus, catat sisanya, lalu baca sisa dari bawah ke atas. 12 → 1100₂.",
        "<b>Alasan komputer memakai biner:</b> komponen elektronik hanya mengenal dua kondisi, ada arus (1) dan tidak ada arus (0).",
        "<b>Bit</b> = satu digit biner. <b>1 byte</b> = 8 bit.",
        "<b>ASCII</b> (American Standard Code for Information Interchange) adalah kode yang mengubah huruf, angka, dan simbol menjadi bilangan. Contoh: huruf A = 65."
      ],
      ex: { q: "Ubah 1011₂ ke desimal dan 12 ke biner.", a: "1011₂ = 1×8 + 0×4 + 1×2 + 1×1 = 11.<br>12 : 2 = 6 sisa 0, 6 : 2 = 3 sisa 0, 3 : 2 = 1 sisa 1, 1 : 2 = 0 sisa 1. Baca dari bawah: 1100₂." },
      tip: "Hafalkan nilai posisi biner dari kanan: 1, 2, 4, 8, 16, 32, 64, 128.",
      q: [
        ["Bilangan biner hanya menggunakan angka …", ["0 dan 1", "0 sampai 9", "1 dan 2", "0 sampai 7"], 0, "Basis 2."],
        ["Bilangan desimal disebut juga bilangan basis …", ["10", "2", "8", "16"], 0, "Angka 0–9."],
        ["Bilangan biner 101₂ sama dengan … dalam desimal.", ["5", "3", "6", "101"], 0, "4 + 0 + 1."],
        ["Bilangan biner 1011₂ sama dengan … dalam desimal.", ["11", "13", "9", "1011"], 0, "8 + 0 + 2 + 1."],
        ["Bilangan desimal 6 dalam biner adalah …", ["110", "101", "111", "011"], 0, "4 + 2."],
        ["Bilangan desimal 12 dalam biner adalah …", ["1100", "1010", "1110", "0011"], 0, "8 + 4."],
        ["Komputer menggunakan sistem bilangan biner karena …", ["komponen elektroniknya hanya mengenal dua kondisi: hidup dan mati", "biner lebih mudah dihafal manusia", "biner memakai angka 0 sampai 9", "biner lebih indah dilihat"], 0, "On/off."],
        ["ASCII adalah …", ["kode yang mengubah huruf dan simbol menjadi bilangan", "jenis prosesor", "aplikasi pengolah kata", "nama virus komputer"], 0, "American Standard Code for Information Interchange."],
        ["1 byte sama dengan …", ["8 bit", "2 bit", "10 bit", "16 bit"], 0, "Byte."],
        ["Bilangan biner 1111₂ sama dengan … dalam desimal.", ["15", "16", "14", "4"], 0, "8 + 4 + 2 + 1."]
      ]
    }
  ]
});
