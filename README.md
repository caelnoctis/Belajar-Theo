# THEO — Ruang Belajar

Website belajar untuk Theodore (kelas 7F). Isinya materi, latihan per bab, pretest, posttest, dan tes campuran untuk kelas 7, 8, dan 9. Mapelnya mengikuti jadwal 7F: Matematika, IPA, IPS, Bahasa Indonesia, Bahasa Inggris, Pendidikan Pancasila, Informatika, PAI, Seni Budaya, PJOK.

Situs ini statis (HTML, CSS, JS biasa) tanpa build step dan tanpa server, jadi bisa langsung dipasang di GitHub Pages.

## Pasang di GitHub Pages

1. Push **isi folder ini** (`index.html` harus ada di root repo).
2. Di GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, pilih branch `main` dan folder `/ (root)`.
3. Tunggu 1–2 menit, buka `https://<username>.github.io/<nama-repo>/`.

Kalau mau taruh di subfolder `docs/`, pindahkan semua file ke `docs/` lalu pilih folder `/docs` di langkah 2. Semua path di situs ini relatif, jadi aman di subfolder mana pun.

## Progres tersimpan di mana?

Di `localStorage` browser HP yang dipakai. Yang disimpan:

- bab yang sudah dibuka,
- nilai latihan terbaik per bab,
- jawaban + pembahasan percobaan terakhir (buat review tanpa mengulang),
- kuis yang belum selesai (bisa ditutup lalu dilanjut dari soal terakhir),
- nilai pretest, posttest, dan tes campuran.

Data hilang kalau riwayat/data situs di browser dihapus, atau kalau pindah HP/browser. Untuk jaga-jaga, buka **Rapor → Simpan cadangan** (file `.json`), lalu **Pulihkan cadangan** di HP lain.

Tip: di HP, buka situsnya lalu pilih **Tambahkan ke Layar Utama** biar bisa dibuka seperti aplikasi.

## Struktur

```
index.html
css/style.css
js/subjects.js      daftar mapel + jadwal 7F
js/data/g7a.js      kelas 7: MTK, IPA, IPS, B. Indonesia
js/data/g7b.js      kelas 7: B. Inggris, PPKn, Informatika, PAI, Seni Budaya, PJOK
js/data/g8a.js … g9b.js   kelas 8 dan 9 dengan pembagian yang sama
js/app.js           router, kuis, penyimpanan, efek
assets/img/         foto Theo
```

## Menambah atau mengubah soal

Buka file data kelas yang sesuai. Setiap bab punya array `q`, dan setiap soal ditulis:

```js
["Teks soal", ["opsi benar", "opsi 2", "opsi 3", "opsi 4"], 0, "Pembahasan singkat"]
```

Angka `0` adalah indeks jawaban benar. Urutan opsi diacak otomatis saat kuis tampil.
