// SIMULASI UAS KELAS 7 (lanjutan 3) — Bahasa Inggris dan TIK, dari kisi-kisi guru.
// Format soal: [topik kisi-kisi, soal, [opsi benar, ...opsi lain], indexBenar, pembahasan]
window.UAS = window.UAS || {};
UAS[7] = UAS[7] || {};

(function () {
  const descText = "Read the text.\n<i>My best friend is Raka. He is thirteen years old. He is tall and thin. He has short curly hair and brown eyes. Raka is very friendly and helpful. He always helps me with math. He likes playing football after school.</i>\n\n";
  const recipe = "Read the text.\n<i><b>How to Make Fried Egg</b>\nIngredients: 1 egg, cooking oil, a pinch of salt.\nSteps:\n1. Heat the oil in a frying pan.\n2. Crack the egg into the pan.\n3. Add a pinch of salt.\n4. Fry the egg for 2 minutes.\n5. Serve it on a plate.</i>\n\n";

  UAS[7].inggris = {
    title: "Simulasi UAS Bahasa Inggris",
    note: "45 soal dari 9 butir kisi-kisi SAS, 5 soal per butir, urut sesuai nomornya.",
    q: [
      ["1. Greeting and leave taking", "You meet your teacher at 7 a.m. You say …", ["Good morning, Ma’am.", "Good night, Ma’am.", "Good evening, Ma’am.", "Good afternoon, Ma’am."], 0, "Pagi hari."],
      ["1. Greeting and leave taking", "It is 4 p.m. You meet your neighbor. The correct greeting is …", ["Good afternoon.", "Good morning.", "Good night.", "Goodbye."], 0, "12.00–18.00 = good afternoon."],
      ["1. Greeting and leave taking", "Which expression is used for leave taking?", ["See you tomorrow.", "How are you?", "Good morning.", "Nice to meet you."], 0, "Berpamitan."],
      ["1. Greeting and leave taking", "A: “How are you today?”\nB: “___”", ["I’m fine, thank you.", "I’m Theo.", "I’m thirteen.", "See you."], 0, "Menjawab kabar."],
      ["1. Greeting and leave taking", "“Good night” is said when …", ["we leave someone at night or go to bed", "we meet someone in the morning", "we meet someone at noon", "we start a class"], 0, "Good night untuk berpisah di malam hari."],
      ["2. Introduce", "A: “Hi, I’m Dina. What’s your name?”\nB: “___”", ["My name is Theo.", "I’m fine.", "I live in Jakarta.", "Good morning."], 0, "Memperkenalkan nama."],
      ["2. Introduce", "A: “Nice to meet you.”\nB: “___”", ["Nice to meet you too.", "You’re welcome.", "I’m sorry.", "Thank you very much for the gift."], 0, "Balasan berkenalan."],
      ["2. Introduce", "“I’m thirteen years old.” The speaker tells about his …", ["age", "address", "hobby", "name"], 0, "Umur."],
      ["2. Introduce", "Theo introduces his friend: “Dina, ___ is my friend, Raka.”", ["this", "these", "those", "they"], 0, "Memperkenalkan satu orang = this."],
      ["2. Introduce", "“Where do you live?” The best answer is …", ["I live on Jalan Melati.", "I’m a student.", "I like reading.", "I’m fine."], 0, "Alamat."],
      ["3. Descriptive text", descText + "What is the text about?", ["Raka, the writer’s best friend", "how to play football", "the writer’s school", "a math lesson"], 0, "Menggambarkan Raka."],
      ["3. Descriptive text", descText + "What does Raka look like?", ["tall and thin with short curly hair", "short and fat with long hair", "tall with straight hair", "short with blue eyes"], 0, "Ciri fisik di kalimat 3–4."],
      ["3. Descriptive text", descText + "“He always helps me with math.” The word “He” refers to …", ["Raka", "the writer", "the teacher", "a football player"], 0, "Pronoun reference."],
      ["3. Descriptive text", "The generic structure of a descriptive text is …", ["identification – description", "orientation – events – reorientation", "goal – materials – steps", "thesis – arguments – conclusion"], 0, "Dua bagian."],
      ["3. Descriptive text", "The purpose of a descriptive text is to …", ["describe a particular person, place, or thing", "tell how to make something", "tell past events", "persuade readers"], 0, "Menggambarkan."],
      ["4. Like and dislike", "I really like ___ comics in my free time.", ["reading", "read", "reads", "to reads"], 0, "Like + V-ing."],
      ["4. Like and dislike", "Which sentence expresses dislike?", ["I hate waiting in a long line.", "I love painting.", "I enjoy swimming.", "I’m fond of music."], 0, "Hate = sangat tidak suka."],
      ["4. Like and dislike", "A: “Do you like spicy food?”\nB: “No, I ___.”", ["don’t", "doesn’t", "am not", "isn’t"], 0, "Jawaban singkat untuk do."],
      ["4. Like and dislike", "My sister ___ cooking very much.", ["loves", "love", "loving", "to love"], 0, "She → loves."],
      ["4. Like and dislike", "“I can’t stand loud music.” This means the speaker …", ["really dislikes loud music", "likes loud music", "plays loud music", "makes loud music"], 0, "Can’t stand = tidak tahan."],
      ["5. Simple present (verbal and nominal)", "Theo ___ to school at 6 a.m. every day.", ["goes", "go", "going", "went"], 0, "Verbal, he → goes."],
      ["5. Simple present (verbal and nominal)", "My parents ___ teachers.", ["are", "is", "am", "does"], 0, "Nominal, subjek jamak → are."],
      ["5. Simple present (verbal and nominal)", "She ___ not like durian.", ["does", "do", "is", "are"], 0, "Verbal negatif: she does not."],
      ["5. Simple present (verbal and nominal)", "Which one is a nominal sentence?", ["The cat is on the sofa.", "The cat sleeps on the sofa.", "The cat eats fish.", "The cat runs fast."], 0, "Nominal pakai to be tanpa kata kerja utama."],
      ["5. Simple present (verbal and nominal)", "“___ they play basketball every Friday?” “Yes, they do.”", ["Do", "Does", "Are", "Is"], 0, "Verbal tanya, they → do."],
      ["6. An and a", "I eat ___ apple every morning.", ["an", "a", "two", "many"], 0, "Apple berbunyi vokal."],
      ["6. An and a", "My uncle is ___ doctor.", ["a", "an", "some", "many"], 0, "Doctor berbunyi konsonan."],
      ["6. An and a", "We waited for ___ hour.", ["an", "a", "many", "some"], 0, "H pada hour tidak dibaca."],
      ["6. An and a", "He studies at ___ university.", ["a", "an", "many", "some"], 0, "University dibaca /yu/."],
      ["6. An and a", "Which is correct?", ["an umbrella", "a umbrella", "an book", "a eggs"], 0, "Umbrella berbunyi vokal."],
      ["7. Taste and texture", "Lemon tastes …", ["sour", "sweet", "salty", "bitter"], 0, "Asam."],
      ["7. Taste and texture", "Sea water tastes …", ["salty", "sweet", "sour", "spicy"], 0, "Asin."],
      ["7. Taste and texture", "Kerupuk and potato chips are …", ["crunchy", "soft", "chewy", "juicy"], 0, "Renyah."],
      ["7. Taste and texture", "Watermelon has a lot of water. It is …", ["juicy", "crunchy", "hard", "dry"], 0, "Berair."],
      ["7. Taste and texture", "Sambal is very …", ["spicy", "sweet", "bland", "sour"], 0, "Pedas."],
      ["8. Procedure text", recipe + "What is the purpose of the text?", ["to tell how to make fried egg", "to describe an egg", "to tell a story about breakfast", "to persuade people to eat eggs"], 0, "Procedure text."],
      ["8. Procedure text", recipe + "What should we do after cracking the egg into the pan?", ["add a pinch of salt", "heat the oil", "serve it on a plate", "buy an egg"], 0, "Langkah 3."],
      ["8. Procedure text", recipe + "How long do we fry the egg?", ["2 minutes", "5 minutes", "1 hour", "10 minutes"], 0, "Langkah 4."],
      ["8. Procedure text", "The parts of a procedure text are …", ["goal, materials, and steps", "orientation, events, and reorientation", "identification and description", "thesis and arguments"], 0, "Struktur."],
      ["8. Procedure text", "Which title is a procedure text?", ["How to Make Orange Juice", "My Best Friend", "My Holiday in Bali", "The Legend of Lake Toba"], 0, "Diawali “How to”."],
      ["9. Imperative (instruction)", "Which sentence is an imperative?", ["Close the door, please.", "She closes the door.", "Is the door closed?", "The door is closed."], 0, "Diawali kata kerja perintah."],
      ["9. Imperative (instruction)", "“___ your hands before eating.”", ["Wash", "Washes", "Washing", "Washed"], 0, "Imperative pakai V1."],
      ["9. Imperative (instruction)", "Which is a negative imperative?", ["Don’t run in the classroom.", "Run in the classroom.", "He runs in the classroom.", "Does he run?"], 0, "Don’t + V1."],
      ["9. Imperative (instruction)", "You see a sign in the library: “___ noisy!”", ["Don’t be", "Not be", "Doesn’t be", "Isn’t"], 0, "Larangan dengan adjective: Don’t be + adjective."],
      ["9. Imperative (instruction)", "“Please sit down.” The word “please” makes the instruction …", ["more polite", "a question", "a past event", "a description"], 0, "Lebih sopan."]
    ]
  };

  UAS[7].info = {
    title: "Simulasi UAS TIK",
    note: "35 soal pilihan ganda dan 5 soal uraian, sama seperti format kisi-kisi guru (40 soal).",
    essayNote: "Nomor 36–40 di kisi-kisi guru berbentuk uraian.",
    q: [
      ["Jaringan komputer dan internet", "Internet adalah …", ["jaringan komputer global yang saling terhubung di seluruh dunia", "aplikasi untuk mengetik dokumen", "perangkat keras penyimpan data", "jenis sistem operasi"], 0, "Interconnected network."],
      ["Jaringan komputer dan internet", "Perangkat yang menghubungkan jaringan komputer ke internet adalah …", ["modem/router", "monitor", "printer", "keyboard"], 0, "Modem dan router."],
      ["Jaringan komputer dan internet", "Alamat sebuah situs web seperti www.kemdikbud.go.id disebut …", ["domain/URL", "IP printer", "folder", "password"], 0, "Domain/URL."],
      ["Browser", "Contoh aplikasi browser untuk mengakses internet adalah …", ["Google Chrome", "Microsoft Excel", "Windows", "Paint"], 0, "Browser."],
      ["Keamanan digital", "Phishing adalah …", ["penipuan melalui pesan atau situs palsu untuk mencuri data pribadi", "cara mempercepat internet", "aplikasi menggambar", "jenis kabel jaringan"], 0, "Phishing."],
      ["Keamanan digital", "Tindakan yang TIDAK aman saat menggunakan internet adalah …", ["membagikan kata sandi kepada teman", "membuat kata sandi yang kuat", "mengaktifkan verifikasi dua langkah", "keluar (log out) dari akun di komputer umum"], 0, "Kata sandi harus dirahasiakan."],
      ["Perangkat keras komputer", "CPU/processor berfungsi untuk …", ["memproses dan mengolah data serta instruksi", "menampilkan gambar", "mencetak dokumen", "mengeluarkan suara"], 0, "Otak komputer."],
      ["Perangkat keras komputer", "Contoh perangkat input komputer adalah …", ["keyboard", "monitor", "printer", "speaker"], 0, "Input."],
      ["Perangkat keras komputer", "Contoh perangkat output komputer adalah …", ["printer", "mouse", "scanner", "mikrofon"], 0, "Output."],
      ["Perangkat keras komputer", "Perangkat yang dapat menyimpan dan memutar rekaman audio digital adalah …", ["MP3 player", "scanner", "keyboard", "mouse"], 0, "Pemutar audio digital."],
      ["Perangkat keras komputer", "RAM berfungsi untuk …", ["menyimpan data sementara saat komputer sedang bekerja", "menyimpan data permanen walau listrik mati", "mencetak dokumen", "menghubungkan ke internet"], 0, "Memori sementara."],
      ["Perangkat keras komputer", "Scanner berfungsi untuk …", ["memindai dokumen atau gambar menjadi file digital", "mencetak dokumen", "mengeluarkan suara", "menampilkan video"], 0, "Pemindai."],
      ["Perangkat lunak komputer", "Sistem operasi adalah …", ["perangkat lunak yang mengatur seluruh kerja hardware dan software komputer", "aplikasi pengolah angka", "perangkat keras penyimpan data", "jaringan internet"], 0, "Operating system."],
      ["Perangkat lunak komputer", "Contoh sistem operasi adalah …", ["Windows", "Microsoft Word", "Google Chrome", "Photoshop"], 0, "Juga Linux, Android, macOS."],
      ["Perangkat lunak komputer", "Contoh perangkat lunak aplikasi adalah …", ["Microsoft Word", "Windows", "Linux", "Android"], 0, "Aplikasi."],
      ["Perangkat lunak komputer", "Antivirus berfungsi untuk …", ["mendeteksi dan menghapus virus komputer", "mempercepat internet", "mengetik dokumen", "mengedit foto"], 0, "Melindungi komputer."],
      ["Perangkat lunak komputer", "Aplikasi pengolah angka adalah …", ["Microsoft Excel", "Microsoft Word", "PowerPoint", "Paint"], 0, "Spreadsheet."],
      ["Sistem bilangan", "Bilangan biner adalah bilangan yang …", ["hanya menggunakan angka 0 dan 1", "menggunakan angka 0 sampai 9", "menggunakan huruf A sampai F", "menggunakan angka 1 sampai 10"], 0, "Basis 2."],
      ["Sistem bilangan", "Bilangan desimal adalah bilangan yang …", ["menggunakan angka 0 sampai 9 (basis 10)", "hanya menggunakan angka 0 dan 1", "menggunakan angka 0 sampai 7", "hanya menggunakan huruf"], 0, "Basis 10."],
      ["Sistem bilangan", "Bilangan biner 1101₂ dalam desimal adalah …", ["13", "11", "14", "1101"], 0, "8 + 4 + 0 + 1 = 13."],
      ["Sistem bilangan", "Bilangan biner 10010₂ dalam desimal adalah …", ["18", "16", "20", "10"], 0, "16 + 0 + 0 + 2 + 0 = 18."],
      ["Sistem bilangan", "Bilangan desimal 10 dalam biner adalah …", ["1010", "1100", "1001", "0110"], 0, "8 + 2."],
      ["Sistem bilangan", "Bilangan desimal 25 dalam biner adalah …", ["11001", "10101", "11010", "10011"], 0, "16 + 8 + 1."],
      ["Sistem bilangan", "Komputer menggunakan bilangan biner karena …", ["rangkaian elektroniknya hanya mengenal dua kondisi: hidup (1) dan mati (0)", "biner paling mudah dibaca manusia", "biner memakai 10 angka", "biner lebih murah dicetak"], 0, "On/off."],
      ["Sistem bilangan dan kode komputer", "ASCII adalah …", ["kode standar yang mengubah huruf, angka, dan simbol menjadi bilangan", "nama prosesor komputer", "aplikasi pengolah kata", "jenis jaringan komputer"], 0, "American Standard Code for Information Interchange."],
      ["Pemrograman Scratch", "Scratch adalah …", ["bahasa pemrograman visual berbasis blok", "aplikasi pengolah angka", "sistem operasi", "browser internet"], 0, "Program disusun dari blok."],
      ["Pemrograman Scratch", "Blok yang biasa digunakan untuk memulai program Scratch adalah …", ["when green flag clicked", "forever", "move 10 steps", "change score by 1"], 0, "Blok Events."],
      ["Pemrograman Scratch", "Sprite dalam Scratch adalah …", ["karakter atau objek yang bisa diprogram", "latar belakang panggung", "blok perulangan", "file suara"], 0, "Sprite."],
      ["Pemrograman Scratch", "Backdrop dalam Scratch adalah …", ["gambar latar belakang panggung (stage)", "karakter utama", "blok gerak", "variabel skor"], 0, "Backdrop."],
      ["Pemrograman Scratch", "Blok Motion berfungsi untuk …", ["mengatur gerak sprite", "mengatur suara", "menyimpan nilai", "mengubah warna backdrop saja"], 0, "Gerak."],
      ["Pemrograman Scratch", "Blok Control “forever” berfungsi untuk …", ["mengulang perintah terus-menerus tanpa berhenti", "mengulang perintah 10 kali", "menghentikan program", "menunggu 1 detik"], 0, "Perulangan tak terbatas."],
      ["Pemrograman Scratch", "Untuk menyimpan skor dalam gim Scratch digunakan blok …", ["Variables", "Motion", "Looks", "Sound"], 0, "Variabel."],
      ["Pemrograman Scratch", "Blok perintah yang menggerakkan sprite maju adalah …", ["move 10 steps", "say Hello!", "play sound", "switch backdrop"], 0, "Motion."],
      ["Pemrograman Scratch", "Perintah “repeat 10” berfungsi untuk …", ["mengulang blok di dalamnya sebanyak 10 kali", "menggerakkan sprite 10 langkah", "menunggu 10 detik", "mengubah skor menjadi 10"], 0, "Perulangan terbatas."],
      ["Pemrograman Scratch", "Program Scratch tidak berjalan saat bendera hijau diklik. Penyebab yang paling mungkin adalah …", ["blok perintah tidak tersambung ke blok “when green flag clicked”", "sprite berwarna oranye", "backdrop terlalu terang", "komputer memakai mouse"], 0, "Blok harus menempel pada blok Events."]
    ],
    essays: [
      { q: "36. Jelaskan perbedaan hardware dan software, serta berikan masing-masing tiga contoh!", a: "<b>Hardware</b> (perangkat keras) adalah bagian komputer yang bisa dilihat dan disentuh. Contoh: keyboard, monitor, CPU (juga mouse, printer).<br><b>Software</b> (perangkat lunak) adalah program atau instruksi yang menjalankan komputer dan tidak bisa disentuh. Contoh: Windows, Microsoft Word, Google Chrome." },
      { q: "37. Kamu menerima pesan: “Selamat! Akunmu menang hadiah. Klik link ini dan masukkan kata sandimu.” Apa tindakan yang tepat?", a: "1) Jangan klik link dan jangan memasukkan kata sandi, karena itu phishing.<br>2) Cek pengirimnya. Lembaga resmi tidak pernah meminta kata sandi.<br>3) Hapus atau laporkan pesannya, lalu blokir pengirimnya.<br>4) Beri tahu orang tua atau guru.<br>5) Kalau terlanjur mengisi, segera ganti kata sandi." },
      { q: "38. Ubahlah bilangan biner 1011 ke desimal dan bilangan desimal 12 ke biner disertai perhitungannya!", a: "<b>1011₂ ke desimal:</b><br>1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 8 + 0 + 2 + 1 = <b>11</b><br><b>12 ke biner:</b><br>12 : 2 = 6 sisa 0<br>6 : 2 = 3 sisa 0<br>3 : 2 = 1 sisa 1<br>1 : 2 = 0 sisa 1<br>Baca sisa dari bawah: <b>1100₂</b>" },
      { q: "39. Jelaskan perbedaan sistem bilangan biner dan desimal!", a: "<b>Biner</b> berbasis 2, hanya memakai angka 0 dan 1, dipakai oleh komputer.<br><b>Desimal</b> berbasis 10, memakai angka 0 sampai 9, dipakai manusia sehari-hari.<br>Nilai posisi biner berlipat 2 (1, 2, 4, 8, …), nilai posisi desimal berlipat 10 (1, 10, 100, …)." },
      { q: "40. Susunlah algoritma atau blok Scratch untuk membuat sprite kucing berjalan!", a: "1) <b>when green flag clicked</b><br>2) <b>forever</b> (atau repeat 10)<br>&nbsp;&nbsp;&nbsp;• <b>move 10 steps</b><br>&nbsp;&nbsp;&nbsp;• <b>next costume</b> (supaya kaki kucing terlihat melangkah)<br>&nbsp;&nbsp;&nbsp;• <b>wait 0.2 seconds</b><br>&nbsp;&nbsp;&nbsp;• <b>if on edge, bounce</b> (supaya berbalik di tepi panggung)" }
    ]
  };
})();
