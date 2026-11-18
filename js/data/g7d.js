// KELAS 7 — tambahan bab dan soal: B. Inggris, PPKn, Informatika, PAI, Seni Budaya, PJOK
EXT(7, "inggris", {
  order: ["greetings", "family", "describing", "simple-present", "my-house", "time-dates", "hobbies", "food", "descriptive-text"],
  more: {
    greetings: { q: [
      ["“How do you do?” The correct response is …", ["How do you do?", "I’m fine.", "I do it well.", "Thank you."], 0, "Dibalas dengan kalimat yang sama (formal)."],
      ["“Excuse me, what’s your name?” “___ Theodore.”", ["I’m", "I", "My", "Me"], 0, "I am = I’m."],
      ["Which one is an informal greeting?", ["Hey, what’s up?", "Good afternoon, Sir.", "How do you do?", "Good morning, Madam."], 0, "Santai, untuk teman."],
      ["“Where do you live?” “I live ___ Jalan Melati.”", ["on", "at", "in", "to"], 0, "Nama jalan pakai on (UK juga boleh in, tapi on paling umum)."]
    ]},
    describing: { q: [
      ["The opposite of “hardworking” is …", ["lazy", "smart", "kind", "brave"], 0, "Rajin ↔ malas."],
      ["“My father ___ a moustache.”", ["has", "have", "is", "are"], 0, "Father → has."],
      ["Someone who doesn’t like to talk to new people is …", ["shy", "talkative", "rude", "noisy"], 0, "Pemalu."],
      ["“She is ___ than her sister.” (tall)", ["taller", "tallest", "more tall", "tall"], 0, "Comparative (dibahas lebih dalam di kelas 8)."]
    ]},
    "simple-present": { q: [
      ["Water ___ at 100 °C.", ["boils", "boil", "is boil", "boiling"], 0, "Fakta umum, subjek tunggal."],
      ["“___ they play basketball every Saturday?” “Yes, they do.”", ["Do", "Does", "Are", "Is"], 0, "They → do."],
      ["The correct negative sentence is …", ["He doesn’t like durian.", "He don’t like durian.", "He doesn’t likes durian.", "He not like durian."], 0, "Doesn’t + V1."],
      ["“My mom ___ to the market twice a week.”", ["goes", "go", "going", "gone"], 0, "She → goes."]
    ]},
    "my-house": { q: [
      ["We usually sleep in the …", ["bedroom", "kitchen", "garage", "dining room"], 0, "Kamar tidur."],
      ["The picture is ___ the wall.", ["on", "in", "under", "between"], 0, "Menempel di dinding."],
      ["The cat is sleeping ___ the sofa. (di bawah)", ["under", "on", "in", "above"], 0, "Under."],
      ["___ any milk in the fridge?", ["Is there", "Are there", "There are", "Is it"], 0, "Milk tidak terhitung → is."]
    ]},
    "time-dates": { q: [
      ["“What time is it?” “It’s 06.15.” In words …", ["a quarter past six", "a quarter to six", "half past six", "six to fifteen"], 0, "Lewat 15 menit."],
      ["Indonesia’s Independence Day is ___ 17 August.", ["on", "in", "at", "by"], 0, "Tanggal → on."],
      ["The month after February is …", ["March", "January", "April", "May"], 0, "Maret."],
      ["How many days are there in a week?", ["seven", "five", "six", "eight"], 0, "Tujuh."]
    ]},
    "descriptive-text": { q: [
      ["Which sentence belongs to the description part?", ["It has a long trunk and big ears.", "Let me tell you about elephants.", "Once upon a time, there was an elephant.", "First, feed the elephant."], 0, "Rincian ciri."],
      ["“Borobudur is a Buddhist temple in Magelang.” This is the …", ["identification", "description", "orientation", "conclusion"], 0, "Memperkenalkan objek."],
      ["“My cat is fat and fluffy.” The adjectives are …", ["fat and fluffy", "my and cat", "is and and", "cat and is"], 0, "Kata sifat."],
      ["“It” in “My bike is new. It is red.” refers to …", ["my bike", "the color", "me", "new"], 0, "Pronoun reference."],
      ["Which title is suitable for a descriptive text?", ["My Best Friend, Raka", "How to Fry an Egg", "My Holiday in Bali", "The Legend of Lake Toba"], 0, "Menggambarkan orang tertentu."]
    ]}
  },
  add: [
    {
      id: "family", t: "My Family and Possessives", s: 1, after: "greetings",
      sum: "Bab ini melatih kamu mengenalkan anggota keluarga dan menunjukkan kepemilikan. Kamu akan pakai possessive adjectives (my, your, his) dan possessive ’s (Theo’s bag).",
      pts: [
        "<b>Family members:</b> father, mother, brother, sister, grandfather, grandmother, uncle, aunt, cousin, nephew, niece.",
        "<b>Possessive adjectives:</b> I → my, you → your, he → his, she → her, it → its, we → our, they → their.",
        "<b>Possessive ’s:</b> Theo’s brother, my mother’s car. Untuk jamak berakhiran s cukup apostrof: my parents’ room.",
        "<b>Possessive pronouns:</b> mine, yours, his, hers, ours, theirs. This book is mine.",
        "<b>Asking:</b> How many brothers do you have? Who is that? What does your father do?",
        "<b>Jobs:</b> teacher, doctor, driver, farmer, police officer, nurse, engineer."
      ],
      ex: { q: "Lengkapi: “This is ___ (Theo) older brother. ___ name is Gregory.”", a: "“This is Theo’s older brother. His name is Gregory.”" },
      q: [
        ["My father’s brother is my …", ["uncle", "cousin", "nephew", "grandfather"], 0, "Paman."],
        ["My aunt’s daughter is my …", ["cousin", "niece", "sister", "aunt"], 0, "Sepupu."],
        ["“Rina and Dodi love ___ cat.”", ["their", "they", "them", "theirs"], 0, "Kepemilikan mereka."],
        ["“This is ___ bag.” (milik Theo)", ["Theo’s", "Theos", "Theo", "Theo’"], 0, "Possessive ’s."],
        ["“Is this your pen?” “Yes, it’s ___.”", ["mine", "my", "me", "I"], 0, "Possessive pronoun."],
        ["My mother’s mother is my …", ["grandmother", "aunt", "niece", "stepmother"], 0, "Nenek."],
        ["“She is a nurse. ___ works in a hospital.”", ["She", "Her", "Hers", "He"], 0, "Subjek."],
        ["A person who teaches students is a …", ["teacher", "farmer", "driver", "pilot"], 0, "Guru."],
        ["“We clean ___ classroom every Friday.”", ["our", "us", "we", "ours"], 0, "Possessive adjective."],
        ["My brother’s son is my …", ["nephew", "niece", "cousin", "uncle"], 0, "Keponakan laki-laki."]
      ]
    },
    {
      id: "hobbies", t: "Hobbies, Likes, and Dislikes", s: 2, after: "time-dates",
      sum: "Bab ini membahas cara menceritakan hobi serta hal yang kamu suka dan tidak suka. Setelah like, love, enjoy, dan hate, kata kerja biasanya memakai bentuk -ing.",
      pts: [
        "<b>Expressing likes:</b> I like / love / enjoy + V-ing. I love playing football.",
        "<b>Expressing dislikes:</b> I don’t like / hate / can’t stand + V-ing. I hate waiting.",
        "<b>Asking:</b> What is your hobby? What do you do in your free time? Do you like reading?",
        "<b>Gerund:</b> V-ing bisa jadi subjek. Swimming is good for health.",
        "<b>Aturan -ing:</b> swim → swimming (konsonan digandakan), write → writing (e dihapus), play → playing.",
        "<b>Contoh hobi:</b> drawing, cycling, gardening, reading comics, playing games, cooking."
      ],
      ex: { q: "Ceritakan hobi Theo dalam dua kalimat.", a: "Contoh: “My hobby is cycling. I enjoy riding my bike around the park every Sunday.”" },
      q: [
        ["I enjoy ___ comics in my free time.", ["reading", "read", "to reads", "reads"], 0, "Enjoy + V-ing."],
        ["The -ing form of “swim” is …", ["swimming", "swiming", "swimmimg", "swimeing"], 0, "Konsonan akhir digandakan."],
        ["The -ing form of “write” is …", ["writing", "writeing", "writting", "writng"], 0, "Huruf e dihapus."],
        ["“Do you like cooking?” “No, I ___.”", ["don’t", "doesn’t", "am not", "not"], 0, "Short answer."],
        ["Which sentence expresses dislike?", ["I can’t stand loud music.", "I love painting.", "I enjoy singing.", "I’m into football."], 0, "Can’t stand = sangat tidak suka."],
        ["My sister ___ dancing.", ["loves", "love", "loving", "to love"], 0, "She → loves."],
        ["“What do you do in your free time?” is used to ask about …", ["hobbies", "jobs", "addresses", "ages"], 0, "Hobi."],
        ["___ is good for your heart. (berenang)", ["Swimming", "Swim", "Swims", "To swimming"], 0, "Gerund sebagai subjek."],
        ["A person who likes growing plants enjoys …", ["gardening", "fishing", "camping", "skating"], 0, "Berkebun."],
        ["“He hates ___ up early.”", ["waking", "wake", "wakes", "woke"], 0, "Hate + V-ing."]
      ]
    },
    {
      id: "food", t: "Food and Drinks (Countable and Uncountable)", s: 2, after: "hobbies",
      sum: "Saat membicarakan makanan, kamu perlu tahu benda yang bisa dihitung (countable) dan yang tidak bisa dihitung (uncountable), karena kata penentunya berbeda.",
      pts: [
        "<b>Countable nouns:</b> bisa dihitung dan punya bentuk jamak. an apple, two eggs, three bananas.",
        "<b>Uncountable nouns:</b> tidak bisa dihitung langsung. water, rice, sugar, milk, bread, salt.",
        "<b>How many</b> + countable: How many eggs do we need? <b>How much</b> + uncountable: How much sugar?",
        "<b>Some</b> untuk kalimat positif, <b>any</b> untuk negatif dan tanya. There isn’t any milk.",
        "<b>Satuan:</b> a glass of water, a cup of tea, a bowl of rice, a slice of bread, a kilo of sugar.",
        "<b>Taste:</b> sweet, salty, sour, bitter, spicy, delicious."
      ],
      ex: { q: "Lengkapi: “How ___ rice do you want?” “Just a ___ of rice, please.”", a: "“How much rice do you want?” “Just a bowl of rice, please.”" },
      q: [
        ["How ___ eggs do you need?", ["many", "much", "any", "a lot"], 0, "Egg countable."],
        ["How ___ water do you drink a day?", ["much", "many", "few", "a"], 0, "Water uncountable."],
        ["Which is an uncountable noun?", ["sugar", "apple", "egg", "banana"], 0, "Gula."],
        ["I’d like a ___ of tea, please.", ["cup", "slice", "loaf", "bar"], 0, "A cup of tea."],
        ["There isn’t ___ milk in the fridge.", ["any", "some", "many", "a"], 0, "Negatif → any."],
        ["Lemon tastes …", ["sour", "sweet", "salty", "bitter"], 0, "Asam."],
        ["The plural of “tomato” is …", ["tomatoes", "tomatos", "tomatoies", "tomato"], 0, "Ditambah -es."],
        ["Can I have ___ slice of bread?", ["a", "an", "many", "much"], 0, "A slice."],
        ["Sambal is very …", ["spicy", "sour", "sweet", "bland"], 0, "Pedas."],
        ["There are ___ apples on the table.", ["some", "any", "much", "a"], 0, "Positif jamak → some."]
      ]
    }
  ]
});

EXT(7, "ppkn", {
  order: ["lahirnya-pancasila", "norma", "uud-1945", "musyawarah", "keberagaman", "gotong-royong", "hak-kewajiban"],
  more: {
    "lahirnya-pancasila": { q: [
      ["Tokoh yang menyampaikan gagasan dasar negara pada 29 Mei 1945 adalah …", ["Mohammad Yamin", "Soekarno", "Soepomo", "Hatta"], 0, "Hari pertama sidang."],
      ["Soepomo menyampaikan gagasan dasar negara pada tanggal …", ["31 Mei 1945", "29 Mei 1945", "1 Juni 1945", "22 Juni 1945"], 0, "Hari ketiga sidang."],
      ["Ketua PPKI adalah …", ["Ir. Soekarno", "dr. Radjiman", "Moh. Yamin", "Ahmad Soebardjo"], 0, "Wakilnya Moh. Hatta."],
      ["Tokoh yang mengusulkan perubahan sila pertama Piagam Jakarta setelah mendengar keberatan dari Indonesia timur adalah …", ["Mohammad Hatta", "Soepomo", "Yamin", "Sukarni"], 0, "Hatta berunding dengan tokoh Islam."],
      ["Sikap yang dicontohkan para pendiri bangsa saat sidang BPUPKI adalah …", ["menghargai perbedaan pendapat", "memaksakan kehendak", "meninggalkan sidang", "mementingkan daerah sendiri"], 0, "Musyawarah."]
    ]},
    norma: { q: [
      ["Mencontek saat ujian melanggar norma …", ["kesusilaan dan tata tertib sekolah", "hukum pidana", "kesopanan saja", "adat"], 0, "Tidak jujur dan melanggar aturan sekolah."],
      ["Contoh norma kesopanan adalah …", ["menggunakan tangan kanan saat memberi", "membayar pajak", "salat lima waktu", "tidak mencuri"], 0, "Kebiasaan masyarakat."],
      ["Sanksi norma kesopanan berupa …", ["cemoohan atau dikucilkan", "penjara", "denda resmi", "dosa"], 0, "Sanksi sosial."],
      ["Peraturan yang berlaku di lingkungan sekolah disebut …", ["tata tertib", "undang-undang", "peraturan daerah", "hukum adat"], 0, "Tata tertib."],
      ["Manfaat mematuhi norma adalah …", ["hidup tertib dan aman", "bebas berbuat sesuka hati", "terkenal", "kaya"], 0, "Ketertiban."]
    ]},
    "uud-1945": { q: [
      ["Pembukaan UUD 1945 terdiri atas … alinea.", ["4", "3", "5", "37"], 0, "Empat alinea."],
      ["Alinea pertama Pembukaan UUD 1945 berisi …", ["kemerdekaan hak segala bangsa", "rumusan Pancasila", "tujuan negara", "susunan pemerintahan"], 0, "Penjajahan harus dihapuskan."],
      ["Pasal 29 UUD 1945 mengatur tentang …", ["kebebasan beragama", "pendidikan", "bendera", "pertahanan"], 0, "Agama."],
      ["UUD 1945 disahkan oleh …", ["PPKI", "BPUPKI", "MPR", "DPR"], 0, "18 Agustus 1945."],
      ["UUD 1945 disebut hukum dasar tertulis atau …", ["konstitusi", "konvensi", "kebiasaan", "peraturan daerah"], 0, "Konstitusi."]
    ]},
    keberagaman: { q: [
      ["Rasa bangga berlebihan terhadap suku sendiri sampai merendahkan suku lain disebut …", ["primordialisme sempit", "nasionalisme", "patriotisme", "toleransi"], 0, "Sikap negatif."],
      ["Lambang negara Indonesia adalah …", ["Garuda Pancasila", "Bendera Merah Putih", "Monas", "Bhinneka Tunggal Ika"], 0, "Pasal 36A."],
      ["Semboyan Bhinneka Tunggal Ika tertulis pada …", ["pita yang dicengkeram Garuda", "bendera", "uang logam saja", "Tugu Monas"], 0, "Lambang negara."],
      ["Contoh sikap yang memperkuat persatuan di kelas adalah …", ["kerja kelompok bersama teman berbeda suku", "mengejek logat teman", "hanya bergaul dengan teman satu daerah", "menolak teman baru"], 0, "Inklusif."],
      ["Ancaman yang muncul jika keberagaman tidak dikelola adalah …", ["konflik sosial", "kemajuan ekonomi", "persatuan", "pariwisata"], 0, "Konflik."]
    ]},
    "gotong-royong": { q: [
      ["Nilai gotong royong sejalan dengan sila ke …", ["3", "1", "5", "2"], 0, "Persatuan."],
      ["Kerja sama antardaerah dalam bidang ekonomi contohnya …", ["pengiriman beras dari daerah surplus ke daerah kekurangan", "perang antarsuku", "menutup perbatasan", "menolak produk daerah lain"], 0, "Saling melengkapi."],
      ["Bentuk pemerintahan Indonesia adalah …", ["republik", "monarki", "federasi", "teokrasi"], 0, "Pasal 1 ayat 1."],
      ["Contoh gotong royong di masyarakat adalah …", ["kerja bakti membersihkan selokan", "membangun rumah sendiri tanpa bantuan", "lomba makan kerupuk", "berjualan di pasar"], 0, "Bersama-sama."],
      ["Sikap yang bertentangan dengan gotong royong adalah …", ["individualisme", "solidaritas", "kebersamaan", "kekeluargaan"], 0, "Mementingkan diri sendiri."]
    ]}
  },
  add: [
    {
      id: "musyawarah", t: "Musyawarah dan Keputusan Bersama", s: 1, after: "uud-1945",
      sum: "Musyawarah adalah cara mengambil keputusan bersama dengan berdiskusi sampai semua pihak sepakat. Cara ini sesuai dengan sila keempat Pancasila.\nKalau musyawarah tidak menghasilkan kata mufakat, keputusan bisa diambil dengan pemungutan suara (voting).",
      pts: [
        "<b>Musyawarah mufakat:</b> keputusan diambil dengan persetujuan semua peserta.",
        "<b>Voting:</b> keputusan diambil berdasarkan suara terbanyak, dipakai kalau mufakat tidak tercapai.",
        "<b>Aklamasi:</b> semua peserta setuju secara serentak tanpa voting.",
        "<b>Sikap saat musyawarah:</b> mendengarkan pendapat orang lain, tidak memaksakan kehendak, menerima hasil dengan lapang dada.",
        "<b>Contoh:</b> memilih ketua kelas, menentukan tujuan karyawisata, rapat RT.",
        "<b>Keputusan bersama</b> wajib dilaksanakan dengan tanggung jawab, termasuk oleh yang tadinya tidak setuju."
      ],
      ex: { q: "Saat memilih ketua kelas, kandidat jagoan Theo kalah. Sikap apa yang tepat?", a: "Menerima hasilnya dengan lapang dada dan mendukung ketua kelas terpilih." },
      q: [
        ["Musyawarah mufakat sesuai dengan sila ke …", ["4", "2", "3", "5"], 0, "Kerakyatan."],
        ["Pengambilan keputusan dengan suara terbanyak disebut …", ["voting", "mufakat", "aklamasi", "lobi"], 0, "Voting."],
        ["Keputusan yang disetujui semua peserta secara serentak disebut …", ["aklamasi", "voting", "kompromi", "mediasi"], 0, "Aklamasi."],
        ["Sikap yang tepat saat bermusyawarah adalah …", ["mendengarkan pendapat orang lain", "memotong pembicaraan", "memaksakan kehendak", "meninggalkan rapat"], 0, "Menghargai."],
        ["Voting dilakukan apabila …", ["musyawarah tidak mencapai mufakat", "semua peserta setuju", "pemimpin menginginkan", "rapat baru dimulai"], 0, "Jalan terakhir."],
        ["Hasil musyawarah harus …", ["dilaksanakan dengan tanggung jawab", "diabaikan jika tidak setuju", "diubah sendiri", "dirahasiakan"], 0, "Keputusan bersama."],
        ["Contoh musyawarah di sekolah adalah …", ["menentukan jadwal piket kelas", "mengerjakan ujian", "upacara bendera", "jajan di kantin"], 0, "Keputusan bersama."],
        ["Manfaat musyawarah adalah …", ["keputusan diterima semua pihak", "keputusan lebih lambat dan kacau", "hanya pemimpin yang senang", "menimbulkan perpecahan"], 0, "Rasa memiliki."],
        ["Orang yang memimpin jalannya musyawarah disebut …", ["moderator/pemimpin rapat", "notulis", "peserta", "pengamat"], 0, "Pemimpin rapat."],
        ["Orang yang mencatat hasil rapat disebut …", ["notulis", "moderator", "bendahara", "penasihat"], 0, "Notulis."]
      ]
    },
    {
      id: "hak-kewajiban", t: "Hak dan Kewajiban Warga Negara", s: 2,
      sum: "Hak adalah sesuatu yang pantas kamu terima, kewajiban adalah sesuatu yang harus kamu lakukan. Keduanya harus seimbang.\nUUD 1945 mengatur hak dan kewajiban warga negara, misalnya hak mendapat pendidikan dan kewajiban membela negara.",
      pts: [
        "<b>Hak warga negara:</b> pendidikan (Pasal 31), pekerjaan dan penghidupan layak (Pasal 27 ayat 2), beragama (Pasal 29), berpendapat (Pasal 28).",
        "<b>Kewajiban warga negara:</b> menaati hukum (Pasal 27 ayat 1), membela negara (Pasal 27 ayat 3), membayar pajak (Pasal 23A).",
        "<b>Hak siswa:</b> mendapat pelajaran, memakai fasilitas sekolah, diperlakukan adil.",
        "<b>Kewajiban siswa:</b> belajar, menaati tata tertib, menghormati guru, menjaga kebersihan.",
        "<b>Hak asasi manusia (HAM)</b> melekat sejak lahir. Lembaga yang menangani pelanggaran HAM adalah Komnas HAM.",
        "<b>Seimbang:</b> dahulukan kewajiban sebelum menuntut hak."
      ],
      ex: { q: "Theo ingin mendapat nilai bagus (hak). Apa kewajiban yang harus dia lakukan?", a: "Belajar dengan rajin, mengerjakan tugas, dan mengikuti pelajaran dengan baik." },
      q: [
        ["Hak mendapat pendidikan diatur dalam Pasal …", ["31", "27", "29", "33"], 0, "Pasal 31 ayat 1."],
        ["Contoh kewajiban siswa adalah …", ["menaati tata tertib sekolah", "memakai fasilitas sekolah", "mendapat nilai", "diperlakukan adil"], 0, "Kewajiban."],
        ["Contoh hak siswa adalah …", ["mendapat pelajaran dari guru", "membersihkan kelas", "datang tepat waktu", "mengerjakan PR"], 0, "Hak."],
        ["Lembaga yang menangani pelanggaran HAM adalah …", ["Komnas HAM", "KPK", "BPK", "Bawaslu"], 0, "Komisi Nasional HAM."],
        ["Kewajiban membela negara diatur dalam Pasal …", ["27 ayat 3", "28", "31 ayat 2", "29 ayat 1"], 0, "Pasal 27 (3)."],
        ["Sikap yang benar dalam melaksanakan hak dan kewajiban adalah …", ["mendahulukan kewajiban", "menuntut hak saja", "mengabaikan keduanya", "mendahulukan hak orang lain saja"], 0, "Seimbang."],
        ["Membayar pajak adalah … warga negara.", ["kewajiban", "hak", "pilihan", "larangan"], 0, "Pasal 23A."],
        ["Hak asasi manusia dimiliki sejak …", ["lahir", "dewasa", "lulus sekolah", "bekerja"], 0, "Melekat sejak lahir."],
        ["Kebebasan menyampaikan pendapat diatur dalam Pasal …", ["28", "31", "33", "34"], 0, "Pasal 28."],
        ["Contoh pelanggaran hak orang lain di sekolah adalah …", ["merundung teman", "meminjam buku perpustakaan", "bertanya kepada guru", "ikut ekstrakurikuler"], 0, "Perundungan."]
      ]
    }
  ]
});

EXT(7, "info", {
  order: ["berpikir-komputasional", "sistem-komputer", "tik-perkantoran", "internet", "pemrograman-blok", "analisis-data", "etika-digital"],
  more: {
    "berpikir-komputasional": { q: [
      ["Mengurutkan kartu angka dari terkecil ke terbesar adalah contoh …", ["sorting (pengurutan)", "searching (pencarian)", "dekomposisi", "abstraksi"], 0, "Sorting."],
      ["Mencari nama di daftar yang sudah urut dengan membuka bagian tengah dulu disebut …", ["pencarian biner", "pencarian acak", "pengurutan", "perulangan"], 0, "Binary search."],
      ["Tantangan Bebras melatih kemampuan …", ["berpikir komputasional", "mengetik cepat", "menggambar", "menghafal"], 0, "Bebras."],
      ["Pola dari 1, 4, 7, 10, … adalah …", ["ditambah 3", "dikali 3", "ditambah 4", "dikali 2"], 0, "Selisih 3."],
      ["Peta kereta yang hanya menunjukkan stasiun dan jalurnya adalah contoh …", ["abstraksi", "dekomposisi", "debugging", "algoritma"], 0, "Detail tak penting dihilangkan."]
    ]},
    "sistem-komputer": { q: [
      ["Printer termasuk perangkat …", ["output", "input", "proses", "penyimpanan"], 0, "Mengeluarkan hasil."],
      ["Contoh perangkat lunak aplikasi adalah …", ["Microsoft Word", "Windows", "CPU", "RAM"], 0, "Aplikasi."],
      ["Satuan kecepatan prosesor adalah …", ["GHz", "GB", "MB", "Mbps"], 0, "Gigahertz."],
      ["Touchscreen pada HP berfungsi sebagai …", ["input dan output", "input saja", "output saja", "penyimpanan"], 0, "Menampilkan sekaligus menerima sentuhan."],
      ["Urutan kerja komputer yang benar adalah …", ["input – proses – output", "output – proses – input", "proses – input – output", "input – output – proses"], 0, "IPO."]
    ]},
    internet: { q: [
      ["Alamat situs web disebut …", ["URL", "IP lokal", "CPU", "file"], 0, "Uniform Resource Locator."],
      ["Layanan internet untuk mengirim surat elektronik adalah …", ["email", "browser", "spreadsheet", "antivirus"], 0, "Email."],
      ["Jaringan antarnegara disebut …", ["WAN", "LAN", "PAN", "MAN"], 0, "Wide Area Network."],
      ["Contoh mesin pencari adalah …", ["Google", "Excel", "Paint", "Notepad"], 0, "Search engine."],
      ["Satuan kecepatan internet adalah …", ["Mbps", "GHz", "kg", "watt"], 0, "Megabit per detik."]
    ]},
    "pemrograman-blok": { q: [
      ["Karakter atau objek dalam Scratch disebut …", ["sprite", "stage", "loop", "block"], 0, "Sprite."],
      ["Latar belakang dalam Scratch disebut …", ["stage/backdrop", "sprite", "costume", "variable"], 0, "Stage."],
      ["Blok “when green flag clicked” berfungsi untuk …", ["memulai program", "menghentikan program", "menghapus sprite", "menyimpan file"], 0, "Event."],
      ["Blok “repeat 4” lalu “move 100 steps” dan “turn 90 degrees” akan membentuk …", ["persegi", "segitiga", "lingkaran", "garis lurus"], 0, "4 sisi, 4 belokan 90°."],
      ["Kesalahan dalam program disebut …", ["bug", "sprite", "loop", "stage"], 0, "Bug."]
    ]},
    "etika-digital": { q: [
      ["Mengunggah foto teman tanpa izin sebaiknya …", ["tidak dilakukan", "dilakukan kalau lucu", "dilakukan saat ulang tahun", "dilakukan diam-diam"], 0, "Hargai privasi."],
      ["Software yang melindungi komputer dari virus disebut …", ["antivirus", "browser", "spreadsheet", "compiler"], 0, "Antivirus."],
      ["Etika berkomunikasi di internet disebut …", ["netiket", "netbook", "network", "netflix"], 0, "Netiquette."],
      ["Menulis pesan dengan huruf kapital semua dianggap …", ["berteriak", "sopan", "resmi", "lucu"], 0, "Netiket."],
      ["Waktu layar yang sehat untuk remaja sebaiknya …", ["dibatasi dan diselingi istirahat", "tidak dibatasi", "sampai larut malam", "selama mungkin"], 0, "Jaga kesehatan mata dan tidur."]
    ]}
  },
  add: [
    {
      id: "tik-perkantoran", t: "Aplikasi Perkantoran", s: 1, after: "sistem-komputer",
      sum: "Aplikasi perkantoran membantu kamu membuat tugas sekolah: dokumen (Word, Google Docs), lembar kerja (Excel, Google Sheets), dan presentasi (PowerPoint, Google Slides).\nMenguasai fitur dasar dan shortcut membuat pekerjaanmu lebih cepat dan rapi.",
      pts: [
        "<b>Pengolah kata:</b> Microsoft Word, Google Docs. Untuk laporan, surat, makalah.",
        "<b>Pengolah angka:</b> Microsoft Excel, Google Sheets. Untuk tabel dan perhitungan.",
        "<b>Presentasi:</b> PowerPoint, Google Slides, Canva. Untuk slide saat presentasi.",
        "<b>Shortcut penting:</b> Ctrl+C (salin), Ctrl+V (tempel), Ctrl+X (potong), Ctrl+Z (batal), Ctrl+S (simpan), Ctrl+B (tebal).",
        "<b>Format teks:</b> bold (tebal), italic (miring), underline (garis bawah), alignment (rata kiri, tengah, kanan, kiri-kanan).",
        "<b>Menyimpan file:</b> beri nama yang jelas, simpan di folder yang tepat, atau di cloud (Google Drive) supaya tidak hilang."
      ],
      ex: { q: "Theo selesai mengetik tugas. Apa shortcut untuk menyimpan dan apa ekstensi file Word?", a: "Ctrl+S untuk menyimpan. File Word berekstensi .docx." },
      q: [
        ["Shortcut untuk menyalin adalah …", ["Ctrl+C", "Ctrl+V", "Ctrl+X", "Ctrl+Z"], 0, "Copy."],
        ["Shortcut untuk membatalkan perintah terakhir adalah …", ["Ctrl+Z", "Ctrl+Y", "Ctrl+S", "Ctrl+P"], 0, "Undo."],
        ["Aplikasi yang paling tepat untuk membuat slide presentasi adalah …", ["PowerPoint", "Excel", "Paint", "Notepad"], 0, "Presentasi."],
        ["Ekstensi file Microsoft Excel adalah …", [".xlsx", ".docx", ".pptx", ".mp3"], 0, "Excel workbook."],
        ["Perintah untuk membuat teks tebal adalah …", ["Bold", "Italic", "Underline", "Strikethrough"], 0, "Ctrl+B."],
        ["Rata kiri-kanan pada paragraf disebut …", ["justify", "center", "align left", "align right"], 0, "Justify."],
        ["Layanan penyimpanan cloud adalah …", ["Google Drive", "Google Maps", "Paint", "Calculator"], 0, "Cloud storage."],
        ["Shortcut untuk mencetak dokumen adalah …", ["Ctrl+P", "Ctrl+C", "Ctrl+N", "Ctrl+A"], 0, "Print."],
        ["Shortcut untuk memilih semua teks adalah …", ["Ctrl+A", "Ctrl+S", "Ctrl+E", "Ctrl+F"], 0, "Select all."],
        ["Google Docs termasuk aplikasi …", ["pengolah kata", "pengolah angka", "presentasi", "desain grafis"], 0, "Seperti Word."]
      ]
    },
    {
      id: "analisis-data", t: "Analisis Data Sederhana", s: 2, after: "pemrograman-blok",
      sum: "Data ada di mana-mana: nilai ulangan, jumlah langkah harian, sampai daftar jajan. Analisis data membantu kamu mengubah data mentah menjadi informasi yang berguna.\nDi kelas 7 kamu belajar mengumpulkan, mengolah dengan tabel, lalu menyajikan data dalam grafik.",
      pts: [
        "<b>Data</b> adalah fakta mentah. <b>Informasi</b> adalah data yang sudah diolah dan punya makna.",
        "<b>Langkah analisis:</b> kumpulkan data, bersihkan data (hapus yang salah atau dobel), olah, sajikan, simpulkan.",
        "<b>Tabel</b> di spreadsheet terdiri dari baris (angka) dan kolom (huruf). Pertemuannya disebut sel.",
        "<b>Rumus dasar:</b> =SUM() jumlah, =AVERAGE() rata-rata, =MAX() terbesar, =MIN() terkecil.",
        "<b>Grafik:</b> batang untuk membandingkan, garis untuk perubahan waktu, lingkaran untuk persentase bagian.",
        "<b>Sort</b> mengurutkan data, <b>filter</b> menampilkan data tertentu saja."
      ],
      ex: { q: "Nilai matematika ada di sel B2 sampai B11. Tulis rumus rata-ratanya.", a: "=AVERAGE(B2:B11)" },
      q: [
        ["Fakta mentah yang belum diolah disebut …", ["data", "informasi", "grafik", "kesimpulan"], 0, "Data."],
        ["Rumus untuk menjumlahkan sel A1 sampai A5 adalah …", ["=SUM(A1:A5)", "=AVERAGE(A1:A5)", "=COUNT(A1:A5)", "=MAX(A1:A5)"], 0, "SUM."],
        ["Grafik yang cocok untuk menunjukkan persentase bagian dari keseluruhan adalah grafik …", ["lingkaran", "garis", "batang", "pencar"], 0, "Pie chart."],
        ["Pertemuan antara baris dan kolom di spreadsheet disebut …", ["sel", "sheet", "range", "rumus"], 0, "Sel."],
        ["Fitur untuk mengurutkan data dari terkecil disebut …", ["sort", "filter", "merge", "chart"], 0, "Sort ascending."],
        ["Rumus untuk mencari nilai terkecil adalah …", ["=MIN()", "=MAX()", "=SUM()", "=AVERAGE()"], 0, "MIN."],
        ["Grafik yang cocok untuk menunjukkan perubahan suhu dari hari ke hari adalah grafik …", ["garis", "lingkaran", "batang tumpuk", "peta"], 0, "Line chart."],
        ["Kolom di spreadsheet diberi nama dengan …", ["huruf", "angka", "simbol", "warna"], 0, "A, B, C, ..."],
        ["Menghapus data yang dobel atau salah sebelum diolah disebut …", ["membersihkan data", "menyajikan data", "menyimpulkan data", "mengunduh data"], 0, "Data cleaning."],
        ["Kumpulan sel dari B2 sampai B10 ditulis …", ["B2:B10", "B2-B10", "B2;B10", "B2/B10"], 0, "Range."]
      ]
    }
  ]
});

EXT(7, "pai", {
  order: ["ilmu", "asmaul-husna", "akhlak", "thaharah", "salat-jumat", "malaikat", "nabi-mekah", "nabi-madinah"],
  more: {
    ilmu: { q: [
      ["Mad ṭabi’i dibaca panjang … harakat.", ["2", "4", "6", "1"], 0, "Satu alif."],
      ["Nun mati bertemu huruf ḥalqi (ء ه ع ح غ خ) dibaca …", ["izhar", "ikhfa’", "iqlab", "idgham"], 0, "Jelas."],
      ["Orang yang berilmu dan beriman dijanjikan Allah akan …", ["diangkat derajatnya", "dikurangi rezekinya", "diberi ujian berat saja", "dijauhkan dari teman"], 0, "Al-Mujadalah: 11."],
      ["Q.S. Al-Mujadalah ayat 11 memerintahkan untuk … dalam majelis.", ["berlapang-lapang", "berdiam diri", "pulang lebih awal", "duduk di depan"], 0, "Memberi tempat."],
      ["Belajar dengan tekun dan tidak mudah menyerah disebut …", ["istiqamah", "riya", "takabur", "malas"], 0, "Konsisten."]
    ]},
    "asmaul-husna": { q: [
      ["Al-Bashir artinya …", ["Maha Melihat", "Maha Mendengar", "Maha Mengetahui", "Maha Hidup"], 0, "Al-Bashir."],
      ["Al-Hayy artinya …", ["Maha Hidup", "Maha Agung", "Maha Teliti", "Maha Berdiri Sendiri"], 0, "Al-Hayy."],
      ["Al-‘Azim artinya …", ["Maha Agung", "Maha Melihat", "Maha Hidup", "Maha Pengampun"], 0, "Al-‘Azim."],
      ["Menjaga lisan dari kata-kata kotor meneladani Asmaul Husna …", ["As-Sami’", "Al-‘Azim", "Al-Hayy", "Al-Khabir"], 0, "Allah Maha Mendengar."],
      ["Tidak sombong karena merasa paling hebat meneladani sifat Allah …", ["Al-‘Azim", "Al-Bashir", "Al-Hayy", "As-Sami’"], 0, "Hanya Allah yang Maha Agung."]
    ]},
    thaharah: { q: [
      ["Rukun wudu yang pertama adalah …", ["niat", "membasuh muka", "berkumur", "membasuh tangan"], 0, "Niat dalam hati saat membasuh muka."],
      ["Hal yang membatalkan wudu adalah …", ["buang angin", "makan", "minum", "tersenyum"], 0, "Keluar sesuatu dari dua jalan."],
      ["Darah termasuk najis …", ["mutawassiṭah", "mughallaẓah", "mukhaffafah", "ma’fu"], 0, "Najis sedang."],
      ["Posisi makmum laki-laki satu orang dalam salat berjamaah adalah …", ["di sebelah kanan imam", "di belakang imam", "di sebelah kiri imam", "di depan imam"], 0, "Sedikit di belakang kanan."],
      ["Makmum yang tertinggal rakaat disebut …", ["makmum masbuq", "makmum muwafiq", "imam", "muazin"], 0, "Masbuq."]
    ]},
    "nabi-mekah": { q: [
      ["Nabi Muhammad saw. lahir pada tanggal 12 Rabiulawal Tahun …", ["Gajah", "Hijriah", "Masehi", "Kuda"], 0, "571 M."],
      ["Paman Nabi yang melindungi beliau saat berdakwah di Mekah adalah …", ["Abu Thalib", "Abu Lahab", "Abu Jahal", "Abu Sufyan"], 0, "Abu Thalib."],
      ["Istri Nabi yang pertama kali masuk Islam adalah …", ["Khadijah", "Aisyah", "Hafsah", "Fatimah"], 0, "Khadijah binti Khuwailid."],
      ["Tahun wafatnya Abu Thalib dan Khadijah disebut …", ["‘Amul Huzni (tahun kesedihan)", "Tahun Gajah", "Fathu Makkah", "Isra’ Mi’raj"], 0, "Tahun duka cita."],
      ["Peristiwa perjalanan malam Nabi dari Masjidil Haram ke Masjidil Aqsa disebut …", ["Isra’", "Mi’raj", "Hijrah", "Fathu Makkah"], 0, "Lalu Mi’raj ke Sidratul Muntaha."]
    ]}
  },
  add: [
    {
      id: "akhlak", t: "Akhlak Terpuji: Jujur, Amanah, Istiqamah", s: 1, after: "asmaul-husna",
      sum: "Akhlak terpuji (akhlakul karimah) adalah perilaku baik yang diajarkan Islam. Rasulullah saw. diutus untuk menyempurnakan akhlak.\nTiga akhlak yang dibahas di sini sangat dekat dengan kehidupanmu di sekolah: jujur, amanah, dan istiqamah.",
      pts: [
        "<b>Jujur (ṣidq):</b> berkata dan berbuat sesuai kenyataan. Lawannya dusta (kiżb).",
        "<b>Amanah:</b> dapat dipercaya, menjaga titipan dan tugas. Lawannya khianat.",
        "<b>Istiqamah:</b> teguh dan konsisten dalam kebaikan walaupun ada godaan.",
        "<b>Tanda orang munafik</b> (hadis): jika berbicara berdusta, jika berjanji mengingkari, jika dipercaya berkhianat.",
        "<b>Contoh di sekolah:</b> tidak menyontek (jujur), mengembalikan buku pinjaman (amanah), rutin belajar tiap hari (istiqamah).",
        "<b>Q.S. At-Taubah: 119</b> memerintahkan untuk bersama orang-orang yang jujur."
      ],
      ex: { q: "Theo dititipi uang kas kelas oleh bendahara. Akhlak apa yang harus dia jaga?", a: "Amanah. Uangnya harus dijaga dan diserahkan utuh sesuai pesan." },
      q: [
        ["Berkata sesuai kenyataan disebut …", ["jujur", "amanah", "sabar", "tawadu"], 0, "Ṣidq."],
        ["Lawan dari amanah adalah …", ["khianat", "jujur", "sabar", "ikhlas"], 0, "Tidak bisa dipercaya."],
        ["Teguh pendirian dalam kebaikan disebut …", ["istiqamah", "riya", "hasad", "ujub"], 0, "Konsisten."],
        ["Tanda orang munafik menurut hadis adalah …", ["jika berjanji mengingkari", "rajin salat", "suka bersedekah", "berkata jujur"], 0, "Salah satu dari tiga tanda."],
        ["Mengembalikan barang yang dipinjam tepat waktu mencerminkan sikap …", ["amanah", "takabur", "boros", "malas"], 0, "Dapat dipercaya."],
        ["Gelar Nabi Muhammad yang berarti dapat dipercaya adalah …", ["Al-Amin", "Al-Hakim", "Al-Bashir", "Al-‘Alim"], 0, "Al-Amin."],
        ["Rutin membaca Al-Qur’an setiap hari walau sebentar mencerminkan …", ["istiqamah", "riya", "kufur", "hasad"], 0, "Konsisten."],
        ["Ayat yang memerintahkan bersama orang-orang jujur adalah Q.S. …", ["At-Taubah: 119", "Al-Baqarah: 1", "An-Nas: 1", "Al-Kautsar: 1"], 0, "At-Taubah: 119."],
        ["Tidak menyontek saat ujian mencerminkan sikap …", ["jujur", "boros", "kikir", "sombong"], 0, "Jujur."],
        ["Akibat sering berbohong adalah …", ["tidak dipercaya orang lain", "disukai banyak teman", "cepat sukses", "dapat pahala"], 0, "Kehilangan kepercayaan."]
      ]
    },
    {
      id: "salat-jumat", t: "Salat Jumat, Jamak, dan Qasar", s: 2, after: "thaharah",
      sum: "Salat Jumat wajib bagi laki-laki muslim yang balig, berakal, sehat, dan tidak sedang bepergian. Salat ini menggantikan salat Zuhur di hari Jumat.\nIslam juga memberi keringanan (rukhsah) bagi musafir lewat salat jamak dan qasar.",
      pts: [
        "<b>Salat Jumat:</b> dua rakaat, didahului dua khutbah. Waktunya waktu Zuhur.",
        "<b>Sunah sebelum Jumat:</b> mandi, memakai pakaian bersih, wangi-wangian, datang lebih awal.",
        "<b>Larangan saat khutbah:</b> berbicara dan bermain. Dengarkan khutbah dengan tenang.",
        "<b>Salat jamak:</b> menggabungkan dua salat dalam satu waktu. Zuhur dengan Asar, Magrib dengan Isya. Jamak taqdim (di waktu pertama), jamak ta’khir (di waktu kedua).",
        "<b>Salat qasar:</b> meringkas salat empat rakaat menjadi dua (Zuhur, Asar, Isya). Magrib dan Subuh tidak bisa diqasar.",
        "<b>Syarat musafir:</b> perjalanan jauh (sekitar 81 km menurut banyak ulama) dan bukan untuk maksiat."
      ],
      ex: { q: "Theo sekeluarga mudik 200 km. Bolehkah salat Isya diqasar? Berapa rakaat?", a: "Boleh, karena musafir dengan jarak jauh. Isya diqasar menjadi 2 rakaat." },
      q: [
        ["Salat Jumat terdiri dari … rakaat.", ["2", "4", "3", "1"], 0, "Dua rakaat."],
        ["Salat Jumat wajib bagi …", ["laki-laki muslim balig", "semua anak kecil", "perempuan saja", "musafir"], 0, "Syarat wajib."],
        ["Jumlah khutbah dalam salat Jumat adalah …", ["2", "1", "3", "4"], 0, "Dua khutbah."],
        ["Menggabungkan Zuhur dan Asar di waktu Zuhur disebut jamak …", ["taqdim", "ta’khir", "qasar", "sempurna"], 0, "Di waktu pertama."],
        ["Salat yang tidak boleh diqasar adalah …", ["Magrib", "Zuhur", "Asar", "Isya"], 0, "Magrib dan Subuh."],
        ["Salat Isya yang diqasar menjadi … rakaat.", ["2", "3", "1", "4"], 0, "Dari 4 menjadi 2."],
        ["Pasangan salat yang boleh dijamak adalah …", ["Magrib dan Isya", "Subuh dan Zuhur", "Asar dan Magrib", "Isya dan Subuh"], 0, "Juga Zuhur dan Asar."],
        ["Saat khatib berkhutbah, jamaah sebaiknya …", ["mendengarkan dengan tenang", "mengobrol", "bermain HP", "tidur"], 0, "Larangan berbicara."],
        ["Keringanan dalam ibadah disebut …", ["rukhsah", "azimah", "makruh", "bid’ah"], 0, "Rukhsah."],
        ["Salah satu sunah sebelum salat Jumat adalah …", ["mandi", "makan banyak", "tidur", "berlari"], 0, "Mandi Jumat."]
      ]
    },
    {
      id: "malaikat", t: "Iman kepada Malaikat", s: 2, after: "salat-jumat",
      sum: "Iman kepada malaikat adalah rukun iman kedua. Malaikat diciptakan Allah dari cahaya (nur), selalu taat, dan tidak punya hawa nafsu.\nMengetahui bahwa malaikat mencatat amal membuatmu lebih berhati-hati dalam berbuat.",
      pts: [
        "<b>Jibril:</b> menyampaikan wahyu. <b>Mikail:</b> membagi rezeki dan menurunkan hujan.",
        "<b>Israfil:</b> meniup sangkakala. <b>Izrail:</b> mencabut nyawa.",
        "<b>Munkar dan Nakir:</b> bertanya di alam kubur.",
        "<b>Raqib:</b> mencatat amal baik. <b>Atid:</b> mencatat amal buruk.",
        "<b>Malik:</b> menjaga neraka. <b>Ridwan:</b> menjaga surga.",
        "<b>Hikmah:</b> lebih hati-hati bertindak, rajin beribadah, tidak berbuat curang walau sendirian."
      ],
      ex: { q: "Bagaimana iman kepada Malaikat Raqib dan Atid memengaruhi sikap Theo saat sendirian?", a: "Dia tetap berbuat baik dan tidak curang walaupun tidak ada yang melihat, karena semua amal dicatat." },
      q: [
        ["Iman kepada malaikat adalah rukun iman ke …", ["2", "1", "3", "4"], 0, "Kedua."],
        ["Malaikat diciptakan dari …", ["cahaya (nur)", "tanah", "api", "air"], 0, "Nur."],
        ["Malaikat penyampai wahyu adalah …", ["Jibril", "Mikail", "Israfil", "Izrail"], 0, "Jibril."],
        ["Malaikat pembagi rezeki adalah …", ["Mikail", "Jibril", "Malik", "Ridwan"], 0, "Mikail."],
        ["Malaikat pencatat amal buruk adalah …", ["Atid", "Raqib", "Munkar", "Nakir"], 0, "Atid."],
        ["Malaikat penjaga surga adalah …", ["Ridwan", "Malik", "Israfil", "Izrail"], 0, "Ridwan."],
        ["Malaikat yang bertanya di alam kubur adalah …", ["Munkar dan Nakir", "Raqib dan Atid", "Jibril dan Mikail", "Malik dan Ridwan"], 0, "Munkar dan Nakir."],
        ["Malaikat pencabut nyawa adalah …", ["Izrail", "Israfil", "Mikail", "Raqib"], 0, "Izrail."],
        ["Sifat malaikat adalah …", ["selalu taat kepada Allah", "punya hawa nafsu", "kadang membangkang", "makan dan minum"], 0, "Taat."],
        ["Malaikat penjaga neraka adalah …", ["Malik", "Ridwan", "Jibril", "Atid"], 0, "Malik."]
      ]
    },
    {
      id: "nabi-madinah", t: "Sejarah Nabi Muhammad saw. di Madinah", s: 2, after: "nabi-mekah",
      sum: "Tahun 622 M Nabi Muhammad saw. hijrah dari Mekah ke Yatsrib, yang kemudian disebut Madinah. Di Madinah, dakwah Islam berkembang pesat dan terbentuk masyarakat Islam yang kuat.\nNabi membangun masjid, mempersaudarakan penduduk, dan membuat perjanjian dengan semua golongan di Madinah.",
      pts: [
        "<b>Muhajirin:</b> kaum muslim yang hijrah dari Mekah. <b>Anshar:</b> penduduk Madinah yang menolong mereka.",
        "<b>Langkah awal di Madinah:</b> membangun Masjid Quba dan Masjid Nabawi, mempersaudarakan Muhajirin dan Anshar.",
        "<b>Piagam Madinah:</b> perjanjian hidup damai antara kaum muslim, Yahudi, dan golongan lain.",
        "<b>Perang penting:</b> Badar (624 M, kemenangan muslim), Uhud (625 M), Khandaq (627 M, menggali parit).",
        "<b>Perjanjian Hudaibiyah</b> (628 M) membuka jalan Fathu Makkah (penaklukan Mekah) tahun 630 M tanpa pertumpahan darah.",
        "<b>Teladan:</b> persaudaraan, toleransi, musyawarah, memaafkan."
      ],
      ex: { q: "Apa teladan dari persaudaraan Muhajirin dan Anshar yang bisa Theo praktikkan?", a: "Menolong teman baru atau teman yang kesulitan dan berbagi tanpa membeda-bedakan." },
      q: [
        ["Nama kota Madinah sebelumnya adalah …", ["Yatsrib", "Thaif", "Habasyah", "Syam"], 0, "Yatsrib."],
        ["Kaum muslim yang hijrah dari Mekah disebut …", ["Muhajirin", "Anshar", "Quraisy", "Badui"], 0, "Muhajirin."],
        ["Penduduk Madinah yang menolong Nabi disebut …", ["Anshar", "Muhajirin", "Tabi’in", "Khawarij"], 0, "Anshar."],
        ["Masjid pertama yang dibangun Nabi saat hijrah adalah Masjid …", ["Quba", "Nabawi", "Al-Aqsa", "Al-Haram"], 0, "Quba."],
        ["Perjanjian damai antargolongan di Madinah disebut …", ["Piagam Madinah", "Perjanjian Hudaibiyah", "Bai’at Aqabah", "Fathu Makkah"], 0, "Konstitusi Madinah."],
        ["Perang pertama umat Islam yang dimenangkan dengan jumlah pasukan sedikit adalah Perang …", ["Badar", "Uhud", "Khandaq", "Hunain"], 0, "624 M."],
        ["Perang Khandaq disebut juga perang parit karena …", ["umat Islam menggali parit", "terjadi di sungai", "berlangsung di laut", "pasukan bersembunyi di gua"], 0, "Usul Salman al-Farisi."],
        ["Penaklukan Kota Mekah tanpa pertumpahan darah disebut …", ["Fathu Makkah", "Hijrah", "Isra’ Mi’raj", "Hudaibiyah"], 0, "630 M."],
        ["Nabi hijrah ke Madinah pada tahun …", ["622 M", "571 M", "610 M", "632 M"], 0, "Awal kalender Hijriah."],
        ["Teladan dari Piagam Madinah adalah …", ["hidup damai dengan yang berbeda keyakinan", "memusuhi golongan lain", "memaksakan kehendak", "mengucilkan pendatang"], 0, "Toleransi."]
      ]
    }
  ]
});

EXT(7, "senbud", {
  order: ["unsur-rupa", "ragam-hias", "flora-fauna", "musik", "tari", "pantomim"],
  more: {
    "unsur-rupa": { q: [
      ["Campuran merah dan kuning menghasilkan warna …", ["jingga", "ungu", "hijau", "cokelat"], 0, "Sekunder."],
      ["Pasangan warna komplementer adalah …", ["merah dan hijau", "merah dan jingga", "biru dan ungu", "kuning dan jingga"], 0, "Berseberangan di lingkaran warna."],
      ["Prinsip seni rupa yang menonjolkan satu bagian sebagai pusat perhatian disebut …", ["penekanan", "irama", "kesatuan", "proporsi"], 0, "Center of interest."],
      ["Kesan jauh-dekat dalam gambar disebut unsur …", ["ruang", "titik", "tekstur", "garis"], 0, "Perspektif."],
      ["Perbandingan ukuran antarbagian yang serasi disebut …", ["proporsi", "irama", "kontras", "harmoni"], 0, "Proporsi."],
      ["Warna putih, hitam, dan abu-abu disebut warna …", ["netral", "primer", "sekunder", "panas"], 0, "Netral."]
    ]},
    "flora-fauna": { q: [
      ["Gambar yang dibuat dengan menggosok pensil hingga halus disebut teknik …", ["dussel", "arsir", "pointilis", "linear"], 0, "Gradasi halus."],
      ["Pensil yang paling lunak dan gelap adalah …", ["6B", "2H", "HB", "4H"], 0, "Makin besar angka B makin gelap."],
      ["Gambar ragam hias bertema hewan disebut motif …", ["fauna", "flora", "geometris", "figuratif manusia"], 0, "Fauna."],
      ["Langkah memberi gelap-terang dilakukan setelah …", ["sketsa selesai", "mewarnai", "membingkai", "memotret"], 0, "Sketsa dulu."],
      ["Gambar yang menampilkan benda mati seperti vas dan buah disebut …", ["still life (alam benda)", "potret", "pemandangan", "karikatur"], 0, "Alam benda."],
      ["Cahaya yang jatuh pada objek menghasilkan bagian terang dan …", ["bayangan", "tekstur", "garis tepi", "warna primer"], 0, "Gelap-terang."]
    ]},
    musik: { q: [
      ["Lagu “Yamko Rambe Yamko” berasal dari …", ["Papua", "Aceh", "Jawa Tengah", "Maluku"], 0, "Papua."],
      ["Lagu “Ampar-Ampar Pisang” berasal dari …", ["Kalimantan Selatan", "Sumatra Barat", "Bali", "NTT"], 0, "Banjar."],
      ["Tempo andante berarti …", ["lambat", "cepat", "sangat cepat", "sedang cepat"], 0, "Andante."],
      ["Crescendo berarti …", ["makin keras", "makin lembut", "makin cepat", "makin lambat"], 0, "Dinamika."],
      ["Warna suara yang membedakan suara gitar dan piano disebut …", ["timbre", "tempo", "melodi", "birama"], 0, "Timbre."],
      ["Lagu “Gundul-Gundul Pacul” berasal dari …", ["Jawa Tengah", "Jawa Barat", "Sumatra Utara", "Sulawesi"], 0, "Jawa Tengah."]
    ]},
    tari: { q: [
      ["Tari Pendet berasal dari …", ["Bali", "Aceh", "Jawa Barat", "Riau"], 0, "Tari penyambutan."],
      ["Tari Piring berasal dari …", ["Sumatra Barat", "Kalimantan", "Papua", "Jawa Timur"], 0, "Minangkabau."],
      ["Wiraga dalam tari berarti …", ["kemampuan gerak", "irama", "penghayatan", "kostum"], 0, "Raga."],
      ["Tari Jaipong berasal dari …", ["Jawa Barat", "Jawa Tengah", "Bali", "Sulawesi"], 0, "Sunda."],
      ["Pola lantai garis lengkung memberi kesan …", ["lembut", "tegas", "kaku", "marah"], 0, "Lengkung = lembut."],
      ["Tari yang dibawakan oleh banyak penari disebut tari …", ["kelompok", "tunggal", "berpasangan", "solo"], 0, "Kelompok."]
    ]}
  },
  add: [
    {
      id: "ragam-hias", t: "Gambar Ragam Hias", s: 1, after: "unsur-rupa",
      sum: "Ragam hias adalah gambar berpola yang dipakai untuk menghias benda, seperti kain batik, ukiran kayu, dan anyaman. Polanya biasanya diulang dengan teratur.\nIndonesia punya ragam hias khas di tiap daerah, misalnya motif parang dari Jawa dan motif Toraja dari Sulawesi.",
      pts: [
        "<b>Jenis motif:</b> flora (tumbuhan), fauna (hewan), geometris (garis dan bidang), figuratif (manusia).",
        "<b>Pola:</b> simetris, asimetris, berulang (repetisi), selang-seling (alternasi), memusat (radial).",
        "<b>Motif geometris:</b> tumpal (segitiga), meander (garis berliku), pilin (spiral), swastika.",
        "<b>Penerapan:</b> batik, tenun, ukiran, keramik, anyaman, tato tradisional.",
        "<b>Langkah membuat:</b> tentukan motif, buat bidang dan garis bantu, sketsa pola, ulangi motif, warnai.",
        "<b>Contoh daerah:</b> batik parang dan kawung (Jawa), ukiran Toraja (Sulawesi), motif Dayak (Kalimantan), songket (Sumatra)."
      ],
      ex: { q: "Apa beda pola berulang dan selang-seling?", a: "Pola berulang mengulang motif yang sama terus. Pola selang-seling bergantian dua motif atau lebih, misalnya bunga lalu daun lalu bunga." },
      q: [
        ["Motif ragam hias yang berbentuk segitiga disebut …", ["tumpal", "pilin", "meander", "kawung"], 0, "Tumpal."],
        ["Motif berbentuk spiral disebut …", ["pilin", "tumpal", "meander", "parang"], 0, "Pilin."],
        ["Motif ragam hias dari tumbuhan disebut motif …", ["flora", "fauna", "geometris", "figuratif"], 0, "Flora."],
        ["Pola yang bagian kiri dan kanannya sama disebut pola …", ["simetris", "asimetris", "radial", "acak"], 0, "Simetris."],
        ["Batik parang berasal dari …", ["Jawa", "Papua", "Sulawesi", "Kalimantan"], 0, "Jawa."],
        ["Pola yang menyebar dari titik tengah disebut pola …", ["memusat (radial)", "berulang", "selang-seling", "simetris"], 0, "Radial."],
        ["Kain tenun berbenang emas dari Sumatra disebut …", ["songket", "batik", "ulos", "lurik"], 0, "Songket."],
        ["Motif garis berliku-liku seperti sungai disebut …", ["meander", "tumpal", "pilin", "kawung"], 0, "Meander."],
        ["Ragam hias figuratif menggunakan motif …", ["manusia", "tumbuhan", "garis lurus", "hewan saja"], 0, "Figur manusia."],
        ["Fungsi utama ragam hias adalah …", ["memperindah benda", "memperkuat benda", "memperberat benda", "mengurangi harga"], 0, "Hiasan."]
      ]
    },
    {
      id: "pantomim", t: "Teater: Pantomim", s: 2, after: "tari",
      sum: "Pantomim adalah seni pertunjukan tanpa kata-kata. Pemain menyampaikan cerita hanya dengan gerak tubuh dan ekspresi wajah.\nPemain pantomim biasanya memakai riasan wajah putih supaya ekspresinya terlihat jelas.",
      pts: [
        "<b>Unsur pantomim:</b> gerak tubuh (gestur), ekspresi wajah (mimik), olah tubuh.",
        "<b>Riasan:</b> wajah dicat putih, mata dan bibir ditegaskan supaya ekspresi kelihatan dari jauh.",
        "<b>Latihan dasar:</b> olah tubuh (kelenturan), olah rasa (penghayatan), olah pikir (ide cerita).",
        "<b>Gerak imajinatif:</b> seolah memegang benda yang tidak ada, seperti tembok, tangga, atau tali.",
        "<b>Tokoh pantomim:</b> Marcel Marceau (Prancis), Septian Dwi Cahyo (Indonesia).",
        "<b>Teater</b> secara umum punya unsur naskah, pemain, sutradara, panggung, dan penonton."
      ],
      ex: { q: "Bagaimana kamu memperagakan “mendorong tembok” dalam pantomim?", a: "Telapak tangan ditekan ke udara seolah ada tembok, badan condong, kaki menekan lantai, wajah tampak berusaha keras." },
      q: [
        ["Pantomim adalah pertunjukan yang mengandalkan …", ["gerak dan ekspresi tanpa kata", "nyanyian", "dialog panjang", "alat musik"], 0, "Tanpa kata."],
        ["Riasan wajah pemain pantomim umumnya berwarna …", ["putih", "hitam", "merah", "hijau"], 0, "Agar ekspresi jelas."],
        ["Ekspresi wajah dalam teater disebut …", ["mimik", "gestur", "blocking", "vokal"], 0, "Mimik."],
        ["Gerak tubuh untuk menyampaikan maksud disebut …", ["gestur", "mimik", "intonasi", "artikulasi"], 0, "Gestur."],
        ["Tokoh pantomim dunia yang terkenal dari Prancis adalah …", ["Marcel Marceau", "Charlie Chaplin", "W.S. Rendra", "Mr. Bean"], 0, "Marcel Marceau."],
        ["Latihan kelenturan tubuh dalam teater disebut …", ["olah tubuh", "olah vokal", "olah pikir", "olah suara"], 0, "Olah tubuh."],
        ["Latihan penghayatan perasaan disebut …", ["olah rasa", "olah tubuh", "olah vokal", "olah panggung"], 0, "Olah rasa."],
        ["Orang yang mengatur jalannya pementasan teater disebut …", ["sutradara", "penonton", "penata rias", "pemain"], 0, "Sutradara."],
        ["Pantomim termasuk jenis …", ["teater", "musik", "seni rupa", "sastra tulis"], 0, "Seni pertunjukan teater."],
        ["Gerak seolah memanjat tangga yang tidak ada disebut gerak …", ["imajinatif", "realistis", "maknawi", "murni"], 0, "Membayangkan benda."]
      ]
    }
  ]
});

EXT(7, "pjok", {
  order: ["sepak-bola", "voli", "basket", "atletik", "pencak-silat", "renang", "hidup-sehat"],
  more: {
    "sepak-bola": { q: [
      ["Teknik menggiring bola disebut …", ["dribbling", "passing", "heading", "stopping"], 0, "Dribbling."],
      ["Menyundul bola dengan kepala disebut …", ["heading", "kicking", "shooting", "tackling"], 0, "Heading."],
      ["Ukuran lapangan sepak bola standar internasional sekitar …", ["100–110 m × 64–75 m", "28 m × 15 m", "18 m × 9 m", "40 m × 20 m"], 0, "Lapangan besar."],
      ["Pemain yang boleh memegang bola di daerah penalti sendiri adalah …", ["penjaga gawang", "penyerang", "gelandang", "bek"], 0, "Kiper."],
      ["Tendangan dari titik penalti diberikan jika terjadi pelanggaran di …", ["kotak penalti lawan oleh tim bertahan", "tengah lapangan", "luar lapangan", "daerah sendiri oleh penyerang"], 0, "Pelanggaran di kotak penalti."],
      ["Posisi offside terjadi jika penyerang …", ["lebih dekat ke gawang lawan daripada bola dan pemain bertahan kedua terakhir saat bola dioper", "berada di belakang bola", "di daerah sendiri", "menerima lemparan ke dalam"], 0, "Aturan offside."]
    ]},
    voli: { q: [
      ["Servis yang dilakukan dengan memukul bola dari bawah disebut servis …", ["bawah", "atas", "mengapung", "lompat"], 0, "Underhand."],
      ["Usaha menahan smash lawan di depan net disebut …", ["block (bendungan)", "passing", "servis", "dig"], 0, "Block."],
      ["Pemain bertahan khusus yang memakai kostum berbeda disebut …", ["libero", "tosser", "spiker", "kapten"], 0, "Libero."],
      ["Pemain yang bertugas mengumpan bola untuk smash disebut …", ["tosser/setter", "libero", "blocker", "server"], 0, "Pengumpan."],
      ["Pertandingan voli menggunakan sistem …", ["best of five set", "satu set saja", "best of three gim 21", "waktu 2 × 45 menit"], 0, "Tiga set kemenangan."],
      ["Tinggi net bola voli putra standar internasional adalah …", ["2,43 m", "2,24 m", "1,55 m", "3,05 m"], 0, "Putri 2,24 m."]
    ]},
    atletik: { q: [
      ["Lari estafet menggunakan alat yang disebut …", ["tongkat", "bola", "raket", "peluru"], 0, "Tongkat estafet."],
      ["Nomor lari 400 meter termasuk lari …", ["jarak pendek", "jarak menengah", "jarak jauh", "maraton"], 0, "Sprint."],
      ["Jarak lari maraton adalah …", ["42,195 km", "10 km", "21 km", "100 km"], 0, "Maraton penuh."],
      ["Start yang digunakan pada lari jarak jauh adalah start …", ["berdiri", "jongkok", "melayang", "duduk"], 0, "Start berdiri."],
      ["Lari 800 meter termasuk lari …", ["jarak menengah", "jarak pendek", "jarak jauh", "estafet"], 0, "800–1.500 m."],
      ["Posisi badan saat aba-aba “siap” pada start jongkok adalah …", ["pinggul diangkat sedikit lebih tinggi dari bahu", "duduk", "berdiri tegak", "berbaring"], 0, "Siap meluncur."]
    ]},
    "hidup-sehat": { q: [
      ["Latihan sit-up melatih kekuatan otot …", ["perut", "lengan", "kaki", "leher"], 0, "Otot perut."],
      ["Latihan sit and reach mengukur …", ["kelenturan", "kecepatan", "kekuatan", "daya tahan"], 0, "Fleksibilitas."],
      ["Pedoman gizi seimbang Kemenkes saat ini disebut …", ["Isi Piringku", "4 Sehat 5 Sempurna", "Makan Kenyang", "Piramida Gula"], 0, "Isi Piringku."],
      ["Zat gizi untuk pertumbuhan dan memperbaiki sel adalah …", ["protein", "karbohidrat", "lemak", "air"], 0, "Ikan, telur, tempe."],
      ["Mencuci tangan dengan sabun sebaiknya dilakukan selama minimal …", ["20 detik", "2 detik", "5 menit", "1 detik"], 0, "Rekomendasi WHO."],
      ["Lari 12 menit (tes Cooper) mengukur …", ["daya tahan jantung-paru", "kelenturan", "kekuatan otot lengan", "keseimbangan"], 0, "Daya tahan."]
    ]}
  },
  add: [
    {
      id: "basket", t: "Permainan Bola Basket", s: 1, after: "voli",
      sum: "Bola basket dimainkan oleh dua tim yang masing-masing berisi 5 pemain. Tujuannya memasukkan bola ke ring lawan dan mencegah lawan mencetak poin.\nTeknik dasarnya adalah menggiring, mengoper, dan menembak.",
      pts: [
        "<b>Dribble:</b> memantulkan bola dengan ujung jari, pandangan ke depan, bola di samping badan.",
        "<b>Chest pass:</b> operan dari depan dada. <b>Bounce pass:</b> operan dipantulkan ke lantai. <b>Overhead pass:</b> operan dari atas kepala.",
        "<b>Shooting:</b> set shot (tembakan di tempat) dan lay-up (dua langkah lalu meletakkan bola ke ring).",
        "<b>Poin:</b> 2 poin di dalam garis tiga angka, 3 poin di luar garis, 1 poin lemparan bebas.",
        "<b>Pelanggaran:</b> traveling (berjalan membawa bola), double dribble (dribble lagi setelah berhenti).",
        "<b>Waktu:</b> 4 quarter × 10 menit (aturan FIBA). Tinggi ring 3,05 m."
      ],
      ex: { q: "Mengapa saat dribble pandangan harus ke depan, bukan ke bola?", a: "Supaya kamu bisa melihat posisi teman dan lawan, lalu memutuskan mengoper atau menembak." },
      q: [
        ["Jumlah pemain basket satu tim di lapangan adalah …", ["5", "6", "7", "11"], 0, "Lima pemain."],
        ["Operan dari depan dada disebut …", ["chest pass", "bounce pass", "overhead pass", "lay-up"], 0, "Chest pass."],
        ["Tembakan dengan dua langkah lalu meletakkan bola ke ring disebut …", ["lay-up", "set shot", "jump shot", "free throw"], 0, "Lay-up."],
        ["Lemparan bebas (free throw) bernilai …", ["1 poin", "2 poin", "3 poin", "4 poin"], 0, "Satu poin."],
        ["Membawa bola sambil berjalan tanpa dribble disebut …", ["traveling", "double dribble", "foul", "jump ball"], 0, "Traveling."],
        ["Tinggi ring basket standar adalah …", ["3,05 m", "2,43 m", "2,24 m", "4 m"], 0, "10 kaki."],
        ["Saat dribble, bola dipantulkan dengan …", ["ujung jari", "telapak tangan penuh", "kepalan tangan", "siku"], 0, "Kontrol lebih baik."],
        ["Waktu pertandingan basket FIBA adalah …", ["4 × 10 menit", "2 × 45 menit", "2 × 20 menit", "3 × 15 menit"], 0, "Empat quarter."],
        ["Tembakan dari luar garis tiga angka bernilai …", ["3 poin", "2 poin", "1 poin", "5 poin"], 0, "Three-pointer."],
        ["Mendribble lagi setelah sempat memegang bola dengan dua tangan disebut …", ["double dribble", "traveling", "out", "screen"], 0, "Double dribble."]
      ]
    },
    {
      id: "pencak-silat", t: "Pencak Silat", s: 2, after: "atletik",
      sum: "Pencak silat adalah bela diri asli Indonesia. UNESCO menetapkannya sebagai warisan budaya takbenda tahun 2019.\nSelain teknik bela diri, pencak silat mengajarkan sikap hormat, disiplin, dan pengendalian diri.",
      pts: [
        "<b>Sikap pasang:</b> sikap siap menghadapi lawan, bisa menyerang atau bertahan.",
        "<b>Kuda-kuda:</b> posisi kaki yang kokoh. Ada kuda-kuda depan, belakang, tengah, dan samping.",
        "<b>Pola langkah:</b> lurus, zig-zag, segitiga, segiempat.",
        "<b>Serangan:</b> pukulan (lurus, bandul, sangkol) dan tendangan (lurus, sabit, T, belakang).",
        "<b>Belaan:</b> tangkisan dan hindaran.",
        "<b>Organisasi:</b> IPSI (Ikatan Pencak Silat Indonesia), didirikan tahun 1948."
      ],
      ex: { q: "Apa fungsi kuda-kuda dalam pencak silat?", a: "Memberi posisi kaki yang kokoh supaya badan seimbang saat menyerang maupun bertahan." },
      q: [
        ["Pencak silat adalah bela diri asli dari …", ["Indonesia", "Jepang", "Korea", "Cina"], 0, "Nusantara."],
        ["Organisasi pencak silat di Indonesia adalah …", ["IPSI", "PSSI", "PBSI", "PASI"], 0, "Ikatan Pencak Silat Indonesia."],
        ["Posisi kaki yang kokoh sebagai tumpuan disebut …", ["kuda-kuda", "sikap pasang", "pola langkah", "tangkisan"], 0, "Kuda-kuda."],
        ["Sikap siap menghadapi lawan disebut …", ["sikap pasang", "kuda-kuda", "hindaran", "salam"], 0, "Sikap pasang."],
        ["Tendangan dengan lintasan setengah lingkaran disebut tendangan …", ["sabit", "lurus", "T", "belakang"], 0, "Sabit."],
        ["Usaha menghindari serangan tanpa menyentuh lawan disebut …", ["hindaran", "tangkisan", "pukulan", "kuncian"], 0, "Hindaran."],
        ["UNESCO menetapkan pencak silat sebagai warisan budaya takbenda pada tahun …", ["2019", "2009", "1998", "2022"], 0, "Desember 2019."],
        ["Menahan serangan lawan dengan lengan disebut …", ["tangkisan", "hindaran", "sapuan", "elakan"], 0, "Tangkisan."],
        ["Organisasi yang mengurus sepak bola dan bukan pencak silat adalah …", ["PSSI", "IPSI", "Persilat", "PPSI"], 0, "PSSI = sepak bola."],
        ["Nilai yang ditanamkan pencak silat adalah …", ["disiplin dan pengendalian diri", "pamer kekuatan", "mencari musuh", "berkelahi di sekolah"], 0, "Karakter."]
      ]
    },
    {
      id: "renang", t: "Renang Gaya Bebas", s: 2, after: "pencak-silat",
      sum: "Renang gaya bebas (crawl) adalah gaya renang tercepat. Posisi badan telungkup, kaki menendang naik-turun, dan lengan mengayuh bergantian.\nSebelum masuk kolam, lakukan pemanasan dan patuhi aturan keselamatan.",
      pts: [
        "<b>Posisi badan:</b> telungkup, sejajar permukaan air (streamline).",
        "<b>Gerakan kaki:</b> menendang naik-turun bergantian dari pangkal paha, lutut sedikit lentur.",
        "<b>Gerakan lengan:</b> mengayuh bergantian, masuk air di depan kepala, mendorong ke belakang.",
        "<b>Pengambilan napas:</b> menoleh ke samping saat lengan di sisi itu mengayuh ke belakang.",
        "<b>Keselamatan:</b> pemanasan, jangan berenang sendirian, jangan berlari di pinggir kolam, perhatikan kedalaman.",
        "<b>Gaya renang lain:</b> dada (katak), punggung, kupu-kupu."
      ],
      ex: { q: "Kenapa perenang gaya bebas mengambil napas dengan menoleh ke samping, bukan mengangkat kepala ke depan?", a: "Mengangkat kepala ke depan membuat kaki tenggelam dan laju melambat. Menoleh ke samping menjaga badan tetap sejajar air." },
      q: [
        ["Gaya renang tercepat adalah gaya …", ["bebas", "dada", "punggung", "kupu-kupu"], 0, "Crawl."],
        ["Posisi badan saat renang gaya bebas adalah …", ["telungkup", "telentang", "miring", "berdiri"], 0, "Telungkup."],
        ["Pengambilan napas pada gaya bebas dilakukan dengan …", ["menoleh ke samping", "mengangkat kepala ke depan", "menyelam", "telentang"], 0, "Ke samping."],
        ["Gerakan kaki gaya bebas adalah …", ["naik-turun bergantian", "seperti katak", "bersamaan seperti lumba-lumba", "diam saja"], 0, "Flutter kick."],
        ["Renang gaya dada disebut juga gaya …", ["katak", "bebas", "kupu-kupu", "anjing"], 0, "Gaya katak."],
        ["Hal yang harus dilakukan sebelum berenang adalah …", ["pemanasan", "makan banyak", "berlari di pinggir kolam", "langsung melompat ke kolam dalam"], 0, "Cegah kram."],
        ["Gaya renang dengan posisi telentang adalah gaya …", ["punggung", "bebas", "dada", "kupu-kupu"], 0, "Backstroke."],
        ["Kram saat berenang bisa dicegah dengan …", ["pemanasan yang cukup", "berenang setelah makan berat", "tidak minum", "berenang terus tanpa istirahat"], 0, "Pemanasan."],
        ["Posisi badan sejajar dengan permukaan air disebut …", ["streamline", "start", "flip turn", "gliding"], 0, "Streamline."],
        ["Perilaku yang berbahaya di kolam renang adalah …", ["berlari di pinggir kolam", "memakai kacamata renang", "mandi sebelum berenang", "berenang didampingi pelatih"], 0, "Licin."]
      ]
    }
  ]
});
