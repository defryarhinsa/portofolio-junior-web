# Aplikasi Konsol Pengolah Nilai (Hari 4 - JavaScript Dasar)

Aplikasi berbasis Node.js untuk mengolah data nilai siswa satu kelas secara terstruktur melalui terminal.

## 📌 Fitur Utama

1. **Input Data Siswa**: Memasukkan nama dan nilai siswa (0–100) dengan validasi input.
2. **Statistik Kelas**: Menampilkan jumlah siswa, rata-rata nilai, nilai tertinggi, nilai terendah, serta jumlah siswa yang lulus/tidak lulus.
3. **Predikat per Siswa**: Menampilkan daftar nama, nilai, grade huruf (A/B/C/D), dan status kelulusan.
4. **Validasi Input**: Memastikan nama tidak kosong, nilai berada pada rentang 0–100, dan menu yang dipilih valid.

## 📏 Kriteria Grade & Kelulusan

- **Grade A**: Nilai $\ge 85$
- **Grade B**: Nilai $70 - 84$
- **Grade C**: Nilai $55 - 69$
- **Grade D**: Nilai $< 55$
- **Batas Kelulusan**: Nilai $\ge 70$

## 🛠️ Cara Menjalankan

1. Pastikan [Node.js](https://nodejs.org/) sudah terinstal di komputer.
2. Jalankan perintah berikut di terminal:
   ```bash
   node nilai.js
   ```
