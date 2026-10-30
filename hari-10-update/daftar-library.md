# Daftar Library — Capstone Sprint 1 (Hari 10)

Proyek: Pendaftaran Pelatihan (lanjutan Capstone Hari 9).
Prinsip: versi CDN dikunci (bukan `@latest`), hanya library yang benar-benar
dipakai yang dimuat, urutan skrip: jQuery dulu, lalu DataTables, lalu
Bootstrap bundle, lalu SweetAlert2, terakhir `assets/js/app.js` sendiri.

## Tabel analisis

| Library     | Versi dipakai                                                                  | Fungsi                                                                             | Lisensi | Alternatif                 | Dependency                          | Rilis terakhir / status                                                                                            | Alasan dipilih                                                         |
| ----------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- | ------- | -------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| Bootstrap   | 5.3.3 (CDN, dikunci)                                                           | Framework CSS + komponen UI responsif (navbar, form, tabel, card)                  | MIT     | Tailwind CSS, Bulma        | Popper (sudah di dalam bundle JS)   | Masih aktif; versi npm terbaru saat dicek 2026-10-30 adalah 5.3.8 (lihat bawah)                                    | Cepat, dokumentasi lengkap, komponen siap pakai, dipakai semua halaman |
| jQuery      | 3.7.1 (CDN, dikunci)                                                           | Manipulasi DOM; dibutuhkan DataTables 1.x                                          | MIT     | Vanilla JS                 | Tidak ada                           | Masih dipelihara di jalur 3.x; versi npm terbaru 4.0.0 TIDAK dipakai karena DataTables 1.13 menargetkan jQuery 3.x | Hanya dipakai sebagai syarat DataTables, tidak untuk logika lain       |
| DataTables  | 1.13.8 (CDN, dikunci)                                                          | Tabel interaktif: cari, urut, paginasi sisi klien                                  | MIT     | Grid.js                    | jQuery 3.7.1                        | Jalur 1.13 masih dipakai luas; 1.13.8 adalah versi acuan modul                                                     | Fitur lengkap tanpa menulis kode cari/urut/paginasi sendiri            |
| SweetAlert2 | 11 (CDN `sweetalert2@11`)                                                      | Dialog konfirmasi hapus + toast notifikasi sukses, pengganti `alert()`/`confirm()` | MIT     | Toastify, dialog Bootstrap | Tidak ada                           | Aktif; versi npm terbaru saat dicek 2026-10-30 adalah 11.26.25                                                     | Dialog cantik, API sederhana, tidak ada dependency                     |
| Dompdf      | ^3.0 (Composer; versi persis lihat `composer.lock` setelah `composer require`) | Membuat PDF dari HTML/CSS                                                          | LGPL    | FPDF, TCPDF                | PHP 8.x, ekstensi mbstring, dom, gd | Aktif di Packagist pada jalur 3.x                                                                                  | Tata letak HTML/CSS jauh lebih ringkas daripada menggambar PDF manual  |

## Hasil `npm view` (dijalankan 2026-10-30, VM)

```
npm view bootstrap license version time.modified
  license = 'MIT'
  version = '5.3.8'
  time.modified = '2026-10-08T16:48:03.014Z'

npm view sweetalert2 license version
  license = 'MIT'
  version = '11.26.25'
  (time.modified sweetalert2 = 2026-05-23T12:38:10.817Z)
```

Artinya: lisensi keduanya MIT (permisif, cukup cantumkan pemberitahuan
hak cipta + teks lisensi). Versi npm terbaru (5.3.8 / 11.26.25) TIDAK
otomatis dipakai di CDN Capstone — CDN tetap dikunci ke versi acuan modul
(Bootstrap 5.3.3, DataTables 1.13.8) supaya tampilan tidak berubah acak
setelah pembaruan (Bug Hunt no. 7).

## Perhitungan efisiensi (contoh modul, Dompdf)

Penghematan = waktu membuat sendiri − (waktu belajar + waktu integrasi

- waktu pemeliharaan) = 40 jam − (2 + 3 + 1) jam = **34 jam (85%)**.

Biaya non-waktu yang tetap dipertimbangkan: ukuran berkas, risiko
keamanan library, dan lisensi. Kalau kebutuhan sangat kecil (satu fungsi
sederhana), menulis sendiri bisa lebih baik daripada menambah dependency
besar.

## Keputusan: DataTables sisi klien vs paginasi sisi server

DataTables di Sprint 1 memuat seluruh baris lalu cari/urut/paginasi di
browser. Ini cocok untuk ratusan sampai beberapa ribu baris (data
pendaftar pelatihan). Untuk data sangat besar, pilihan yang benar adalah
paginasi sisi server seperti Hari 9 (`LIMIT`/`OFFSET` di PHP) atau mode
`serverSide` DataTables — bukan memuat semua baris ke browser.

## Dompdf vs FPDF

|                  | Dompdf                                                                       | FPDF                                                  |
| ---------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------- |
| Cara kerja       | HTML/CSS diubah jadi PDF                                                     | Perintah posisi manual (`Cell`, `SetFont`)            |
| Kelebihan        | Tata letak fleksibel, bisa pakai ulang template HTML (`templates/bukti.php`) | Ringan, tanpa dependency, tanpa HTML                  |
| Kekurangan       | Butuh Composer + ekstensi PHP (mbstring, dom, gd)                            | Setiap elemen diatur manual, repot untuk tabel/desain |
| Pilihan Sprint 1 | Dipakai (utama)                                                              | Alternatif bila Composer tidak tersedia               |

## Satu library usang (Lab 1 no. 4)

Contoh: fungsi `mysql_*` PHP (`mysql_connect`, `mysql_query`, dsb.).

- Tanda usang: sudah dinyatakan deprecated sejak PHP 5.5, **dihapus
  sejak PHP 7**, tidak ada rilis/perbaikan lagi, tidak mendukung
  prepared statement.
- Pengganti yang dianjurkan: **PDO** (sudah dipakai Capstone sejak Hari 9)
  atau MySQLi dengan prepared statement, plus `password_hash` untuk
  password (bukan `md5`/`sha1`).
- Tanda usang umum lainnya: repositori diarsipkan, README menyebut
  _deprecated_, rilis terakhir bertahun-tahun lalu, tidak mendukung
  versi PHP/browser saat ini (contoh modul: ekstensi mcrypt, banyak
  plugin jQuery lama).

## Jawaban Lab 1 no. 5: kapan GPL jadi masalah?

GPL (dan AGPL untuk layanan jaringan) adalah copyleft: karya turunan
harus dirilis dengan lisensi yang sama. GPL menjadi masalah bila
aplikasi komersial **tertutup** (kode tidak mau dibuka) didistribusikan
bersama kode GPL / menjadi karya turunan darinya — karena itu memaksa
membuka kode sumber turunan. Solusinya untuk aplikasi tertutup: pilih
library permisif (MIT/Apache 2.0), atau library LGPL yang hanya dipakai
tanpa mengubah library-nya (perubahan pada library LGPL itu sendiri
tetap harus dibuka). Catatan: ini ringkasan umum, bukan nasihat hukum;
selalu baca berkas LICENSE di repositori resmi.

## Hasil pemeriksaan Composer / npm (diisi dari mesin sendiri)

> Di VM ini PHP dan Composer tidak tersedia, dan `npm audit` diblokir
> kebijakan proxy VM (`403 policy_denied` pada 2026-10-30). Jadi
> perintah di bawah WAJIB dijalankan di laptop (XAMPP + Composer
> terpasang) lalu hasilnya disalin ke sini sebelum dikumpul.

Perintah (dari folder proyek):

```
composer licenses
composer outdated
composer audit
npm outdated
```

Hasil (isi setelah dijalankan):

- `composer licenses`: (isi — Dompdf harus LGPL)
- `composer outdated`: (isi — catat paket + versi lama/baru)
- `composer audit`: (isi — harus tanpa kerentanan terbuka, atau catat
  tindak lanjutnya)
- `npm outdated`: (isi — untuk folder percobaan Lab 6, lihat
  `docs/catatan-lab-6.md`)

## Catatan pembaruan (Lab 6)

Lihat `docs/catatan-lab-6.md`: Bootstrap 5.2.0 → 5.3.8 lewat
`npm update` (naik minor, bukan major), plus langkah pembatalan
`git restore composer.json composer.lock && composer install`.
