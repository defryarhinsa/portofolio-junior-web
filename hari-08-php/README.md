# Hari 08 — PHP

Folder ini berisi latihan PHP dasar, pengolahan data peserta, dan proyek buku tamu sederhana. Data latihan disimpan dalam berkas JSON, CSV, dan log teks; proyek buku tamu menyimpan entri ke JSON tanpa database.

## Persyaratan

- PHP 8.0 atau lebih baru.
- Ekstensi `mbstring` untuk validasi nama dan pesan pada proyek buku tamu.
- Apache/PHP, misalnya melalui XAMPP.

## Menjalankan

Letakkan repository di dalam folder `htdocs` XAMPP, jalankan Apache, lalu buka halaman yang diinginkan melalui browser. Jika repository berada di `C:\xampp\htdocs\portofolio-junior-web`, gunakan alamat berikut:

```text
http://localhost/portofolio-junior-web/hari-08-php/
```

Folder ini tidak memiliki halaman indeks. Buka salah satu halaman melalui alamat langsung yang tercantum di bawah.

## Isi folder

| Halaman | Materi |
| --- | --- |
| `lab1.php` | Variabel, tipe data, perulangan, perkalian, ganjil/genap, FizzBuzz, grade, dan tanggal. |
| `lab2.php` | Array asosiatif, fungsi, rata-rata, nilai tertinggi, filter kelulusan, pengurutan, dan pengelompokan peserta. |
| `lab3.php` | Form kalkulator BMI, validasi input, dan kategori BMI. |
| `cari.php` | Pencarian peserta dengan metode GET dan pencatatan log pengunjung. |
| `lihat-log.php` | Menampilkan hingga 20 log pengunjung terakhir. |
| `peserta-json.php` | Menyimpan, membaca, dan menambahkan data peserta dalam JSON. |
| `peserta-csv.php` | Mengekspor data peserta ke CSV lalu mengimpornya kembali. |
| `proyek-4-bukutamu/index.php` | Form buku tamu, validasi nama/email/pesan, daftar entri, dan pencarian nama. |

Contoh URL halaman latihan:

```text
http://localhost/portofolio-junior-web/hari-08-php/lab1.php
http://localhost/portofolio-junior-web/hari-08-php/lab2.php
http://localhost/portofolio-junior-web/hari-08-php/lab3.php
http://localhost/portofolio-junior-web/hari-08-php/cari.php
http://localhost/portofolio-junior-web/hari-08-php/proyek-4-bukutamu/
```

## Penyimpanan data

- Latihan memakai `data/peserta.json`, `data/peserta.csv`, dan `data/log.txt`.
- Buku tamu menyimpan entri di `proyek-4-bukutamu/data/tamu.json`. Folder data harus dapat ditulis oleh PHP.
- Membuka `peserta-json.php` akan menambahkan peserta contoh ke JSON setiap kali halaman dijalankan. Membuka `peserta-csv.php` akan menulis ulang CSV dari data contoh.
- `proyek-4-bukutamu/data/.htaccess` membatasi akses langsung HTTP ke berkas data pada konfigurasi Apache yang mengaktifkan `.htaccess`.
