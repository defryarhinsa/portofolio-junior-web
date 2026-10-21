# 📅 Hari 03 — CSS3, Flexbox, Grid & Desain Responsif

> Latihan CSS hari ketiga dalam program **Portofolio Junior Web Programmer**.
> Modul ini mencakup teori dan praktik CSS3 untuk membangun **Landing Page Profil Responsif**.

---

## 🎯 Tujuan Pembelajaran

- Menyisipkan CSS eksternal dan memahami cascade, selector & spesifisitas
- Menerapkan box model, tipografi, warna, dan **variabel CSS** (`:root`)
- Menyusun layout dengan **Flexbox** (satu dimensi) dan **Grid** (dua dimensi)
- Membuat desain **responsif mobile-first** dengan media query
- Menulis CSS yang rapi, konsisten, dan mudah dirawat
- Styling form, tabel, kartu, galeri, dan komponen UI lainnya

---

## 📂 Struktur Folder

```
hari-03-css/
├── profile.html        # Landing page profil (navbar, tentang, layanan, galeri, kontak)
├── daftar.html         # Form pendaftaran (versi dasar)
├── daftar-new.html     # Form pendaftaran (versi modern + hero banner)
├── tabel.html          # Tabel jadwal diklat pekan 1
├── css/
│   └── style.css       # Satu file CSS utama (variabel, reset, layout, komponen, responsif)
├── img/
│   ├── foto.jpg       # Foto profil
│   ├── 1.jpg          # Gambar galeri
│   └── 2.jpg          # Gambar galeri
└── Modul Hari 3 - CSS3, Flexbox, Grid, dan Desain Responsif.pdf
```

---

## 📄 Penjelasan Tiap File

### `profile.html` — Landing Page Profil
- **Sticky navbar** dengan Flexbox (`.situs-header`, `.navbar`, `.menu`)
- Section **Tentang** — foto profil + bio
- Section **Keahlian** — daftar skill
- Section **Layanan** — 3 kartu menggunakan **CSS Grid** (`.grid-kartu`, `.kartu`)
- Section **Galeri** — grid gambar responsif (`.galeri` + `auto-fit`)
- **Footer** kontak dengan email
- Layout dibungkus class `.kontainer` (max-width 1100px, center)

### `daftar.html` — Form Pendaftaran (Dasar)
- Form sederhana dengan `<fieldset>` dan `<legend>`
- Input: text, email, tel, date, radio, select, checkbox, textarea, file
- Validasi HTML bawaan: `required`, `minlength`, `maxlength`, `pattern`

### `daftar-new.html` — Form Pendaftaran (Modern)
- **Hero banner** gradient (`.form-hero`)
- **Form card** dengan shadow (`.form-wrapper`)
- Layout input dengan `.form-group`, `.radio-group`, `.checkbox-group`
- **Agreement box** biru muda (`.agreement`)
- Tombol styled: `.btn-submit` (hover effect) dan `.btn-reset`
- **Responsif** di layar kecil (max-width 640px)

### `tabel.html` — Tabel Jadwal
- Tabel dengan `<caption>`, `<thead>`, `<tbody>`, `<tfoot>`
- Penggunaan `rowspan` dan `colspan`
- Styling dari `style.css`: zebra striping, header berwarna

---

## 🎨 Struktur `css/style.css`

File CSS disusun rapi dalam 5 section:

| Section | Isi |
|---------|-----|
| **1. Variabel** | CSS custom properties (`:root`) — warna, radius, jarak, lebar maks |
| **2. Reset & Dasar** | Box-sizing, reset margin/padding, font, link |
| **3. Layout Umum** | `.kontainer`, section padding, heading |
| **4. Komponen** | `.tombol`, `.situs-header`, `.navbar`, `.menu`, `.grid-kartu`, `.kartu`, `.galeri`, `.hero`, form, tabel, `.footer` |
| **5. Form Hero & Wrapper** | `.form-hero`, `.form-wrapper`, fieldset, legend, `.form-group`, radio/checkbox fix, `.agreement`, `.btn-submit`, `.btn-reset`, media query |

### CSS Variabel yang Digunakan
```css
:root {
  --warna-utama: #0d6efd;
  --warna-gelap:  #1f2937;
  --warna-terang: #f9fafb;
  --warna-abu:    #6b7280;
  --radius:       8px;
  --jarak:        1rem;
  --lebar-maks:   1100px;
}
```

---

## ✅ Konsep CSS yang Dipraktikkan

| No | Konsep | File / Class |
|----|--------|-------------|
| 1  | CSS Eksternal | Semua file → `css/style.css` |
| 2  | CSS Variabel (`:root`) | `style.css` |
| 3  | Box Model & `border-box` | Reset global |
| 4  | Flexbox | `.navbar`, `.menu`, `.radio-group`, `.form-actions` |
| 5  | CSS Grid | `.grid-kartu`, `.galeri` |
| 6  | Media Query (responsif) | `.menu` (767px), `.grid-kartu` (768px), form (640px) |
| 7  | Sticky Position | `.situs-header` |
| 8  | Transition & Hover | `.tombol`, `.kartu`, `.btn-submit` |
| 9  | `clamp()` untuk font | `.hero h1`, `.form-hero h1` |
| 10 | Gradient Background | `.hero`, `.form-hero` |
| 11 | `accent-color` | `input[type="radio"]`, `input[type="checkbox"]` |
| 12 | `aspect-ratio` & `object-fit` | `.galeri img` |

---

## 🚀 Cara Menjalankan

1. Pastikan **XAMPP** sudah terinstall dan Apache aktif
2. Buka browser dan akses:
   ```
   http://localhost/portofolio-junior-web/hari-03-css/profile.html
   ```
3. Halaman lain:
   - `daftar-new.html` — Form modern
   - `daftar.html` — Form dasar
   - `tabel.html` — Tabel jadwal
4. Uji responsif: buka **DevTools** (`F12`) → **Device Toolbar** → coba 360px, 768px, 1280px

---

## 📋 Breakpoint Responsif

| Lebar | Target | Perubahan |
|-------|--------|-----------|
| < 640px | Mobile | Form button full-width, fieldset padding kecil |
| < 767px | Mobile | Menu navbar vertikal (kolom) |
| ≥ 768px | Tablet+ | Grid kartu 3 kolom |
| 1280px | Desktop | Max-width container 1100px |

---

## 👤 Author

**Defry Nur Arhinsa**
📧 [defrynur21@gmail.com](mailto:defrynur21@gmail.com)

---

> _Bagian dari kurikulum pelatihan Junior Web Programmer — Hari ke-3: CSS3, Flexbox, Grid & Desain Responsif_
