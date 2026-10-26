// Lab 5 - Mengukur Efisiensi
// Hari 6: Struktur Data I
// N = 100.000, pengukuran diulang 3 kali lalu diambil rata-ratanya.

import { Queue } from './structures.js';

const N = 100000;
const angka = Array.from({ length: N }, (_, i) => i);
const himpunan = new Set(angka);

// Pengukuran sekali jalan, persis seperti contoh modul (console.time)
console.log('Pengukuran sekali jalan (console.time):');
console.time('Array.includes x 1000');
for (let i = 0; i < 1000; i++) angka.includes(N - 1);
console.timeEnd('Array.includes x 1000');

console.time('Set.has x 1000');
for (let i = 0; i < 1000; i++) himpunan.has(N - 1);
console.timeEnd('Set.has x 1000');

const arr = Array.from({ length: N }, (_, i) => i);
console.time('Array.shift');
while (arr.length > 0) arr.shift();
console.timeEnd('Array.shift');

const q = new Queue();
for (let i = 0; i < N; i++) q.enqueue(i);
console.time('Queue.dequeue');
while (!q.isEmpty()) q.dequeue();
console.timeEnd('Queue.dequeue');

// Pengukuran 3 kali untuk rata-rata (performance.now, dalam ms)
function ukurArrayIncludes() {
  const mulai = performance.now();
  for (let i = 0; i < 1000; i++) angka.includes(N - 1);
  return performance.now() - mulai;
}

function ukurSetHas() {
  const mulai = performance.now();
  for (let i = 0; i < 1000; i++) himpunan.has(N - 1);
  return performance.now() - mulai;
}

function ukurArrayShift() {
  const data = Array.from({ length: N }, (_, i) => i);
  const mulai = performance.now();
  while (data.length > 0) data.shift();
  return performance.now() - mulai;
}

function ukurQueueDequeue() {
  const antrean = new Queue();
  for (let i = 0; i < N; i++) antrean.enqueue(i);
  const mulai = performance.now();
  while (!antrean.isEmpty()) antrean.dequeue();
  return performance.now() - mulai;
}

const hasil = { includes: [], setHas: [], shift: [], dequeue: [] };
for (let run = 0; run < 3; run++) {
  hasil.includes.push(ukurArrayIncludes());
  hasil.setHas.push(ukurSetHas());
  hasil.shift.push(ukurArrayShift());
  hasil.dequeue.push(ukurQueueDequeue());
}

function rataRata(daftar) {
  let jumlah = 0;
  for (const x of daftar) jumlah += x;
  return jumlah / daftar.length;
}

console.log('\nTabel hasil pengukuran (rata-rata 3 kali, N = 100000):');
console.log('Operasi | Waktu rata-rata (ms) | Big-O');
console.log('Array.includes x 1000 | ' + rataRata(hasil.includes).toFixed(2) + ' | O(n) per pencarian');
console.log('Set.has x 1000 | ' + rataRata(hasil.setHas).toFixed(2) + ' | O(1) per pencarian');
console.log('Array.shift hingga kosong | ' + rataRata(hasil.shift).toFixed(2) + ' | O(n) per operasi');
console.log('Queue.dequeue hingga kosong | ' + rataRata(hasil.dequeue).toFixed(2) + ' | O(1) per operasi');

console.log('\nPenjelasan selisihnya:');
console.log('- Array.includes memeriksa elemen satu per satu sampai ketemu, jadi O(n) per pencarian. Dicari 1000 kali pada data 100.000, totalnya besar.');
console.log('- Set.has memakai hash, langsung ke tempat datanya, jadi O(1) per pencarian, hampir tidak terpengaruh besarnya data.');
console.log('- Array.shift menghapus elemen pertama, lalu semua elemen sisanya harus digeser satu langkah, jadi O(n) per operasi. Dilakukan sampai kosong, totalnya menjadi O(n^2).');
console.log('- Queue.dequeue hanya menggeser penanda head (head++), tanpa menggeser elemen lain, jadi O(1) per operasi. Dilakukan sampai kosong, totalnya hanya O(n).');
console.log('Kesimpulan: untuk pencarian berulang pakai Set/Map, untuk antrean pakai Queue head/tail, bukan array.shift().');
