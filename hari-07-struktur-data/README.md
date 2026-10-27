# Hari 7: Struktur Data

Folder ini berisi latihan Hari 7 diklat Junior Web Programmer tentang struktur
data, pencarian dan pengurutan, serta penerapan prinsip clean code. Contoh
program menggunakan JavaScript ES modules.

## Materi

- **Linked list dan queue** — implementasi `LinkedList`, `LinkedQueue`, `Queue`,
  dan `Stack`, termasuk uji kasus kosong serta perbandingan kinerja queue.
- **Tree dan graph** — penelusuran struktur folder, Binary Search Tree, BFS,
  DFS, dan pencarian jarak terpendek.
- **Pencarian dan pengurutan** — linear search, binary search, bubble sort,
  insertion sort, merge sort, serta pengukuran perbandingan dan waktu.
- **Clean code** — contoh kode yang perlu diperbaiki di `lab4.js`, beserta versi
  yang lebih bersih di `kode-bersih.js`. `kode-buruk.js` juga disediakan sebagai
  contoh untuk ditinjau.
- **Proyek praktik** — simulator antrean dan editor catatan dengan undo/redo
  berada di folder [`proyek-3-antrian`](./proyek-3-antrian/). Panduan fitur dan
  cara menjalankannya tersedia di [readme.md](./proyek-3-antrian/readme.md).

## Menjalankan latihan

Pastikan Node.js sudah terpasang, lalu jalankan perintah dari folder ini:

```bash
node lab1.js
node lab2.js
node lab3.js
node kode-bersih.js
```

`lab1.js` menguji linked list dan queue; `lab2.js` membahas tree dan graph;
`lab3.js` menguji algoritma pencarian dan pengurutan. Benchmark di `lab3.js`
termasuk bubble sort dengan 100.000 data sehingga dapat berjalan cukup lama.

`structures.js` berisi implementasi struktur data yang digunakan bersama oleh
latihan. `labs1.js` merupakan latihan LinkedList dan LinkedQueue tambahan yang
juga dapat dijalankan dengan `node labs1.js`. `lab4.js` adalah bahan latihan
refaktor, sedangkan `lab5.js` berisi konfigurasi ESLint.

## Struktur folder

```text
hari-07-struktur-data/
├── structures.js
├── lab1.js
├── lab2.js
├── lab3.js
├── lab4.js
├── lab5.js
├── labs1.js
├── kode-buruk.js
├── kode-bersih.js
├── package.json
└── proyek-3-antrian/
    ├── index.html
    ├── css/
    ├── js/
    └── readme.md
```
