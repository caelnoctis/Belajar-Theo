// Daftar mapel (dari jadwal 7F) + jadwal mingguan
window.MATERI = { 7: {}, 8: {}, 9: {} };

window.SUBJECTS = [
  { id: "mtk",     name: "Matematika",          code: "MTK", sym: "π" },
  { id: "ipa",     name: "IPA",                 code: "IPA", sym: "H₂O", full: "Ilmu Pengetahuan Alam" },
  { id: "ips",     name: "IPS",                 code: "IPS", sym: "⌖",  full: "Ilmu Pengetahuan Sosial" },
  { id: "indo",    name: "Bahasa Indonesia",    code: "BIN", sym: "Aa" },
  { id: "inggris", name: "Bahasa Inggris",      code: "BIG", sym: "Hi!" },
  { id: "ppkn",    name: "Pendidikan Pancasila", code: "PKN", sym: "★" },
  { id: "info",    name: "Informatika",         code: "TIK", sym: "</>" },
  { id: "pai",     name: "Pendidikan Agama Islam", code: "PAI", sym: "ق" },
  { id: "senbud",  name: "Seni Budaya",         code: "SBD", sym: "♪" },
  { id: "pjok",    name: "PJOK",                code: "OR",  sym: "◎", full: "Pendidikan Jasmani, Olahraga, dan Kesehatan" }
];

// Jadwal 7F Semester Ganjil 2026/2027. sid = id mapel (null = bukan mapel)
window.JADWAL = {
  1: [ ["06.40", "Upacara", null], ["07.30", "PJOK", "pjok"], ["09.15", "Seni Budaya", "senbud"], ["10.25", "Seni Budaya", "senbud"], ["11.35", "BK", null], ["12.50", "Bahasa Indonesia", "indo"] ],
  2: [ ["06.40", "Bakat Minat", null], ["07.30", "IPA", "ipa"], ["09.15", "TIK", "info"], ["10.25", "TIK", "info"], ["11.35", "PAI", "pai"], ["12.50", "PAI", "pai"] ],
  3: [ ["06.40", "Literasi Numerasi", null], ["07.30", "Bahasa Inggris", "inggris"], ["08.40", "Bahasa Indonesia", "indo"], ["09.15", "Matematika", "mtk"], ["10.25", "PKN", "ppkn"], ["11.00", "IPS", "ips"], ["12.50", "PKN", "ppkn"] ],
  4: [ ["06.40", "Adiwiyata Kamis Bersih", null], ["07.30", "IPA", "ipa"], ["08.40", "Matematika", "mtk"], ["10.25", "Bahasa Indonesia", "indo"], ["12.50", "IPS", "ips"] ],
  5: [ ["06.40", "Religi", null], ["07.45", "Matematika", "mtk"], ["09.50", "Bahasa Inggris", "inggris"] ]
};
window.HARI = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
