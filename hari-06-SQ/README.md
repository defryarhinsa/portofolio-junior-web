# Hari 06 — Struktur Data I: Array, Objek, Stack & Queue

> **Modul:** Struktur Data I — Array, Objek, Stack, dan Queue  
> **Bahasa:** JavaScript (ES Modules)  
> **Lingkungan:** Node.js (CLI) & Browser

---

## 📁 Struktur Folder

```
hari-06-SQ/
├── js/
│   ├── antrian.js          # UI Antrean Loket (DOM, Queue)
│   └── editor.js           # UI Editor Undo/Redo (DOM, Stack)
├── antrian.html            # Halaman Antrean Loket
├── editor.html             # Halaman Editor Undo/Redo
├── index.html              # Halaman pengujian Stack (Lab 3, console)
├── lab1.js                 # Lab 1 — Array & Objek (Data Peserta)
├── lab2.js                 # Lab 2 — Map & Set
├── lab3.mjs                # Lab 3 — Stack (uji & algoritma)
├── lab4.mjs                # Lab 4 — Queue & Simulasi Antrean
├── lab5.mjs                # Lab 5 — Mengukur Efisiensi (Big-O)
├── structures.js           # Modul Stack & Queue (class, ES export)
├── package.json            # Konfigurasi ES Module ("type": "module")
├── Modul Hari 6 - ....pdf  # Modul referensi (PDF)
└── README.md               # Dokumentasi (file ini)
```

---

## 📖 Deskripsi

Project ini merupakan latihan **Hari ke-6** dari kurikulum Junior Web Developer, membahas **Struktur Data I**. Materi meliputi:

- **Array & Objek** — filter, sort, find, reduce, CRUD data
- **Map & Set** — frekuensi kata, eliminasi duplikat, irisan himpunan
- **Stack (LIFO)** — implementasi class, validasi kurung seimbang, balik string & palindrom
- **Queue (FIFO)** — implementasi class dengan head/tail O(1), simulasi antrean loket
- **Pengukuran efisiensi** — perbandingan `Array.includes` vs `Set.has`, `Array.shift` vs `Queue.dequeue`

---

## 🧱 Modul Utama: `structures.js`

File ini mengekspor dua class yang digunakan di seluruh lab:

### `Stack` (LIFO)
| Method    | Deskripsi                          | Kompleksitas |
|-----------|------------------------------------|:------------:|
| `push()`  | Menambah elemen ke atas            | O(1)         |
| `pop()`   | Mengambil & menghapus elemen atas  | O(1)         |
| `peek()`  | Melihat elemen atas tanpa hapus    | O(1)         |
| `isEmpty()`| Cek apakah stack kosong           | O(1)         |
| `size()`  | Jumlah elemen                      | O(1)         |
| `clear()` | Mengosongkan stack                 | O(1)         |

### `Queue` (FIFO) — Head/Tail
| Method      | Deskripsi                            | Kompleksitas |
|-------------|--------------------------------------|:------------:|
| `enqueue()` | Menambah elemen di belakang          | O(1)         |
| `dequeue()` | Mengambil & menghapus elemen depan   | O(1)         |
| `front()`   | Melihat elemen depan tanpa hapus     | O(1)         |
| `isEmpty()`  | Cek apakah queue kosong             | O(1)         |
| `size()`    | Jumlah elemen                        | O(1)         |
| `toArray()` | Mengembalikan isi queue sebagai array| O(n)         |

> Queue menggunakan objek + penanda `head`/`tail`, **bukan** `Array.shift()` yang O(n).

---

## 🔬 Detail Setiap Lab

### Lab 1 — Array & Objek (`lab1.js`)
Mengelola data 10 peserta bootcamp. Latihan yang dikerjakan:
1. Filter peserta aktif
2. Urutkan berdasarkan nama (`localeCompare`)
3. Cari peserta berdasarkan ID (`find`)
4. Hitung jumlah per kelas (objek penghitung)
5. CRUD: tambah (`push`), ubah properti, hapus (`filter`)
6. Konversi array → objek berindeks ID (`reduce`) untuk pencarian O(1)

```bash
node lab1.js
```

### Lab 2 — Map & Set (`lab2.js`)
1. Hitung frekuensi kata dengan `Map`, tampilkan terurut
2. Hilangkan duplikat email dengan `Set`
3. Cari irisan dua kelas dengan `Set.has()`
4. Fungsi `adaDuplikat()` menggunakan `Set`

```bash
node lab2.js
```

### Lab 3 — Stack (`lab3.mjs`)
1. Uji push/pop/peek pada Stack
2. **Validasi kurung seimbang** — `([{}])` ✅ `(a+b]` ❌
3. **Balik string** & deteksi **palindrom** menggunakan Stack

```bash
node lab3.mjs
```
Atau buka `index.html` di browser → lihat Console (F12).

### Lab 4 — Queue & Simulasi Antrean (`lab4.mjs`)
1. Uji enqueue/dequeue/front pada Queue
2. Simulasi loket FIFO — yang pertama datang, pertama dilayani

```bash
node lab4.mjs
```

### Lab 5 — Mengukur Efisiensi (`lab5.mjs`)
Membandingkan performa operasi dengan N = 100.000 (diulang 3 kali):

| Operasi                  | Big-O per operasi | Catatan                              |
|--------------------------|:-----------------:|--------------------------------------|
| `Array.includes` × 1000 | O(n)              | Scan linier, lambat di data besar    |
| `Set.has` × 1000         | O(1)              | Hash lookup, hampir konstan          |
| `Array.shift` × N        | O(n)              | Geser semua elemen, total O(n²)      |
| `Queue.dequeue` × N      | O(1)              | Head pointer, total O(n)             |

```bash
node lab5.mjs
```

---

## 🌐 Halaman Web (PBL)

### Editor Undo/Redo (`editor.html`)
- Textarea dengan tombol **Undo** & **Redo**
- Menggunakan **dua Stack**: `undoStack` dan `redoStack`
- Menampilkan jumlah riwayat undo/redo

### Antrean Loket (`antrian.html`)
- Tombol **Ambil Nomor** → enqueue nomor antrean (A001, A002, ...)
- Tombol **Panggil Berikutnya** → dequeue & tampilkan yang dipanggil
- Menampilkan daftar antrean yang menunggu

> Buka via web server (misal XAMPP) agar ES Module import berjalan:  
> `http://localhost/portofolio-junior-web/hari-06-SQ/editor.html`

---

## 🚀 Cara Menjalankan

### Prasyarat
- **Node.js** ≥ 14 (untuk menjalankan lab di terminal)
- **Web server** (XAMPP / Live Server) untuk halaman HTML

### CLI (Terminal)
```bash
cd hari-06-SQ

# Lab 1 & 2 (CommonJS-style, tapi pakai "type": "module")
node lab1.js
node lab2.js

# Lab 3, 4, 5 (ES Module .mjs)
node lab3.mjs
node lab4.mjs
node lab5.mjs
```

### Browser
Buka melalui web server:
- `http://localhost/portofolio-junior-web/hari-06-SQ/index.html` — Pengujian Stack (Console)
- `http://localhost/portofolio-junior-web/hari-06-SQ/editor.html` — Editor Undo/Redo
- `http://localhost/portofolio-junior-web/hari-06-SQ/antrian.html` — Antrean Loket

---

## 💡 Konsep Utama yang Dipelajari

| Konsep | Penjelasan Singkat |
|--------|--------------------|
| **Array** | Koleksi terurut, akses per indeks O(1), shift O(n) |
| **Objek** | Pasangan key-value, pencarian per key O(1) |
| **Map** | Seperti objek, tapi key bisa tipe apa saja, tetap urut |
| **Set** | Koleksi unik, pencarian O(1) |
| **Stack (LIFO)** | Yang terakhir masuk, pertama keluar — contoh: undo |
| **Queue (FIFO)** | Yang pertama masuk, pertama keluar — contoh: antrean |
| **Big-O** | Notasi untuk menggambarkan efisiensi waktu operasi |

---

## 📝 Lisensi

Project ini dibuat untuk keperluan pembelajaran.
