# 🧮 Proyek 2 — Kalkulator & Form Validator

Proyek mini hari ke-5 yang melatih penggunaan **fungsi**, **modularisasi JavaScript (ES Modules)**, dan **manipulasi DOM**. Terdiri dari dua sub-proyek:

---

## 📁 Struktur Folder

```
proyek-2-kalkulator/
├── kalkulator/            # Sub-proyek 1: Kalkulator
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       ├── app.js         # Penghubung DOM & event handler
│       └── operasi.js     # Logika perhitungan murni (tanpa DOM)
│
├── validator/             # Sub-proyek 2: Form Validator
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       ├── app.js         # Penghubung DOM & event handler
│       └── aturan.js      # Aturan validasi murni (tanpa DOM)
│
└── README.md
```

---

## 1️⃣ Kalkulator

Kalkulator sederhana berbasis web dengan tampilan modern.

### ✨ Fitur

- Operasi dasar: **tambah (+)**, **kurang (-)**, **kali (x)**, **bagi (/)**
- Angka desimal dengan titik (`.`)
- **Hitung berantai** — bisa mengetik `5 + 3 * 2` secara berurutan
- Tombol **C** (clear) untuk reset & **Backspace** untuk hapus satu digit
- **Riwayat** 5 perhitungan terakhir
- **Dukungan keyboard** — ketik angka, operator, Enter, Backspace, dan Esc langsung dari keyboard
- Penanganan error: **pembagian dengan nol**

### 🧠 Konsep yang Dipelajari

| Konsep | Penerapan |
|--------|-----------|
| ES Modules | `operasi.js` di-import ke `app.js` |
| Fungsi murni (pure function) | `tambah()`, `kurang()`, `kali()`, `bagi()`, `hitung()` |
| Event delegation | Satu listener di `.papan` menangani semua tombol |
| `switch...case` | Memilih operasi berdasarkan operator |
| `try...catch` | Menangkap error pembagian nol |
| Arrow function | Fungsi operasi dasar |
| `aria-live` | Aksesibilitas screen reader |

### 🚀 Cara Menjalankan

1. Buka `kalkulator/index.html` di browser (gunakan **Live Server** agar ES Module berjalan)
2. Klik tombol atau gunakan keyboard untuk menghitung

---

## 2️⃣ Form Validator (Pendaftaran Akun)

Form pendaftaran dengan validasi real-time tanpa library eksternal.

### ✨ Fitur

- Validasi **real-time** saat mengetik (event `input`)
- 5 kolom yang divalidasi:

| Kolom | Aturan |
|-------|--------|
| Nama | Minimal 3 karakter |
| Email | Format email valid (`xxx@xxx.xxx`) |
| Nomor HP | Diawali `08`, total 10-13 digit |
| Kata Sandi | Minimal 8 karakter, kombinasi huruf & angka |
| Konfirmasi Sandi | Harus sama persis dengan kata sandi |

- Tombol **Kirim** otomatis aktif/nonaktif berdasarkan validitas semua kolom
- Pesan error muncul di bawah masing-masing kolom
- **Ringkasan** pendaftaran ditampilkan setelah submit berhasil

### 🧠 Konsep yang Dipelajari

| Konsep | Penerapan |
|--------|-----------|
| ES Modules | `aturan.js` di-import ke `app.js` |
| Fungsi murni (pure function) | `validasiNama()`, `validasiEmail()`, `validasiHp()`, dll. |
| Regex (Regular Expression) | Pola validasi email & nomor HP |
| `aria-invalid` & `aria-live` | Aksesibilitas form |
| `novalidate` | Mematikan validasi bawaan browser |
| `event.preventDefault()` | Mencegah reload saat submit |
| Object mapping | Peta `aturan` ke fungsi validator per kolom |

### 🚀 Cara Menjalankan

1. Buka `validator/index.html` di browser (gunakan **Live Server** agar ES Module berjalan)
2. Isi form dan perhatikan validasi real-time

---

## 🛠️ Teknologi

- **HTML5** — Struktur semantik
- **CSS3** — Styling modern (Grid, border-radius, box-shadow)
- **JavaScript (ES6+)** — Modules, arrow function, template literal, destructuring

---

## 📚 Catatan Belajar

> Proyek ini melatih pemisahan antara **logika bisnis** (fungsi murni tanpa DOM) dan **logika tampilan** (manipulasi DOM & event handler). Dengan pola ini, fungsi logika bisa di-test secara independen dan kode lebih mudah di-maintain.