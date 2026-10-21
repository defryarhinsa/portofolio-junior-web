# 📅 Hari 02 — HTML Dasar

> Latihan HTML hari kedua dalam program **Portofolio Junior Web Programmer**.

---

## 🎯 Tujuan Pembelajaran

- Memahami struktur dasar dokumen HTML5
- Menggunakan tag semantic (<header>, <nav>, <main>, <section>, <footer>)
- Membuat navigasi multi-halaman dengan <a>
- Menggunakan berbagai jenis link (external, anchor, mailto)
- Membuat form pendaftaran lengkap dengan validasi HTML
- Membuat tabel data dengan 
owspan, colspan, <thead>, <tbody>, <tfoot>
- Menampilkan gambar dengan <img> dan <figure>

---

## 📂 Struktur Folder

```
hari-02-html/
├── index.html          # Halaman Home — navigasi & daftar link
├── profile.html        # Halaman Profil — bio, foto, keahlian
├── tentang.html        # Halaman Tentang — deskripsi singkat
├── kontak.html         # Halaman Kontak — informasi kontak email
├── daftar.html         # Form Pendaftaran — input lengkap + validasi
├── tabel.html          # Tabel Jadwal Diklat Pekan 1
├── blog/
│   └── artikel-1.html  # Artikel tentang Teknologi Informasi
├── img/
│   └── foto.jpg        # Foto profil
└── readme.md           # Dokumentasi folder ini
```

---

## 📄 Penjelasan Tiap File

### index.html — Halaman Home
- Navigasi sederhana ke halaman Home, Tentang, dan Kontak
- Contoh penggunaan **link external** (	arget=_blank), **anchor link** (#artikel), dan **mailto link**
- Bagian artikel yang mengarah ke log/artikel-1.html

### profile.html — Halaman Profil
- Menggunakan tag semantic lengkap: <header>, <nav>, <main>, <section>, <footer>
- Menampilkan foto profil dengan <figure> dan <figcaption>
- Daftar keahlian: HTML5, CSS3, JavaScript, PHP
- Meta description untuk SEO dasar

### 	entang.html — Halaman Tentang
- Navigasi antar halaman
- Konten paragraf sederhana dalam <section>

### kontak.html — Halaman Kontak
- Navigasi antar halaman
- Link email menggunakan mailto:

### daftar.html — Form Pendaftaran
- **Fieldset & Legend** untuk pengelompokan form
- Tipe input yang dipelajari:
  - 	ext — Nama lengkap (dengan minlength & maxlength)
  - email — Email (dengan placeholder)
  - 	el — No. HP (dengan pattern regex)
  - date — Tanggal lahir
  - 
adio — Jenis kelamin
  - select — Pilihan kelas
  - checkbox — Minat (Frontend / Backend)
  - 	extarea — Alamat
  - ile — Upload foto (accept .jpg, .png)
- Validasi bawaan HTML: 
equired, minlength, maxlength, pattern
- Tombol submit dan 
eset

### 	abel.html — Tabel Jadwal
- Tabel dengan <caption>, <thead>, <tbody>, <tfoot>
- Penggunaan 
owspan dan colspan untuk merge cell
- Atribut scope pada <th> untuk aksesibilitas
- Ordered list (<ol>) untuk daftar aturan

### log/artikel-1.html — Artikel
- Artikel singkat tentang Teknologi Informasi
- Link navigasi kembali ke halaman Home (../index.html)

---

## 🚀 Cara Menjalankan

1. Pastikan **XAMPP** sudah terinstall dan Apache aktif
2. Buka browser dan akses:
   ```
   http://localhost/portofolio-junior-web/hari-02-html/index.html
   ```
3. Atau buka langsung file HTML-nya di browser (double-click)

---

## ✅ Konsep HTML yang Dipraktikkan

| No | Konsep                  | File Contoh         |
|----|-------------------------|---------------------|
| 1  | Struktur HTML5          | Semua file          |
| 2  | Semantic Tags           | profile.html      |
| 3  | Navigasi & Link         | index.html        |
| 4  | Gambar & Figure         | profile.html      |
| 5  | Form & Validasi         | daftar.html       |
| 6  | Tabel (rowspan/colspan) | 	abel.html        |
| 7  | Anchor Link             | index.html        |
| 8  | Mailto Link             | kontak.html       |
| 9  | Relative Path           | rtikel-1.html    |
| 10 | Meta Tags               | profile.html      |

---

## 👤 Author

**Defry Nur Arhinsa**
📧 [defrynur21@gmail.com](mailto:defrynur21@gmail.com)

---

> _Bagian dari kurikulum pelatihan Junior Web Programmer — Hari ke-2: HTML Dasar_
