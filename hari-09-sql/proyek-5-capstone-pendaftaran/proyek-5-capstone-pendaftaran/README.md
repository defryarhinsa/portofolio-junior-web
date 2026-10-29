# Capstone Pendaftaran

Aplikasi web sederhana untuk mengelola data pendaftar pelatihan. Proyek ini dibuat dengan PHP dan MySQL sebagai latihan pengelolaan database, autentikasi admin, serta operasi CRUD.

## Fitur

- Login dan logout admin.
- Melihat daftar pendaftar dengan pencarian nama dan paginasi.
- Menambahkan, mengubah, dan menghapus data pendaftar.
- Validasi data pendaftar, termasuk format email, nomor HP, dan kelas.
- Penyimpanan kata sandi admin dalam bentuk hash.
- Perlindungan formulir POST dengan token CSRF.
- Contoh skema database dan latihan query SQL.

## Teknologi

- PHP 8 atau lebih baru
- MySQL atau MariaDB
- Apache (misalnya melalui XAMPP)
- Ekstensi PHP PDO MySQL dan mbstring

## Menjalankan secara lokal

1. Pastikan Apache dan MySQL berjalan melalui XAMPP.
2. Buat database dan tabel dengan mengimpor `database/skema.sql` melalui phpMyAdmin atau menjalankannya di klien MySQL.
3. Salin `config/config.contoh.php` menjadi `config/config.php`, lalu sesuaikan host, nama database, username, dan kata sandi MySQL. Konfigurasi lokal tersebut tidak dilacak Git.
4. Opsional: jalankan perintah `INSERT` untuk data kelas dan pendaftar dari `database/latihan.sql` jika membutuhkan data contoh. File tersebut berisi query latihan yang juga mengubah dan menghapus data serta beberapa query yang sengaja menghasilkan error. Tinjau dan jalankan bagian yang diperlukan saja.
5. Siapkan akun admin dengan menghasilkan hash kata sandi menggunakan PHP:

   ```sh
   php -r "echo password_hash('KataSandiAnda', PASSWORD_DEFAULT), PHP_EOL;"
   ```

   Salin hasil hash, lalu masukkan admin melalui phpMyAdmin atau klien MySQL:

   ```sql
   USE db_pelatihan;
   INSERT INTO admin (username, password_hash)
   VALUES ('admin', 'TEMPEL_HASH_KATA_SANDI_DI_SINI');
   ```

6. Buka `http://localhost/portofolio-junior-web/hari-09-sql/proyek-5-capstone-pendaftaran/public/login.php` untuk masuk sebagai admin.

Sesuaikan URL di atas apabila folder proyek ditempatkan pada direktori atau virtual host yang berbeda.

## Struktur proyek

```text
config/
  config.contoh.php   Contoh konfigurasi koneksi
  database.php        Koneksi PDO ke MySQL
database/
  skema.sql           Struktur database, tabel, dan relasi
  latihan.sql         Data contoh dan latihan query SQL
public/
  login.php           Halaman login admin
  index.php           Daftar, pencarian, dan paginasi pendaftar
  tambah.php          Formulir pendaftaran
  ubah.php            Formulir perubahan data
  hapus.php           Aksi penghapusan data
src/
  bootstrap.php       Inisialisasi sesi dan aplikasi
  helpers.php         Fungsi bantuan dan CSRF
  pendaftar.php       Operasi dan validasi data pendaftar
templates/
  header.php
  footer.php
```

## Catatan

- `database/skema.sql` membuat database bernama `db_pelatihan`. Jika nama ini diubah, samakan nilainya dengan `nama_db` di `config/config.php`.
- Untuk lingkungan non-lokal, matikan tampilan debug dengan mengatur `debug` ke `false` di konfigurasi.
- Jangan menaruh kredensial database atau kata sandi asli di file yang dilacak Git.
