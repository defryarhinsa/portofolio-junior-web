// Lab 4 - Queue dan Simulasi Antrean Loket
// Hari 6: Struktur Data I
// Catatan: file ini .mjs supaya import dari structures.js langsung
// jalan dengan `node lab4.mjs`, sama seperti lab3.mjs.
// structures.js tetap bernama itu sesuai deliverable modul.

import { Queue } from "./structures.js";

// 2. Uji: enqueue tiga elemen, front, dequeue hingga kosong,
// dequeue pada queue kosong (tidak boleh error)
const antrian = new Queue();
antrian.enqueue("A001");
antrian.enqueue("A002");
antrian.enqueue("A003");
console.log("2. Setelah enqueue A001, A002, A003:");
console.log("front (terdepan):", antrian.front());
console.log("size:", antrian.size());
console.log("isi antrean:", antrian.toArray());
console.log("dequeue:", antrian.dequeue());
console.log("dequeue:", antrian.dequeue());
console.log("dequeue:", antrian.dequeue());
console.log("isEmpty setelah dequeue semua:", antrian.isEmpty());
console.log("size setelah kosong:", antrian.size());
console.log("dequeue pada queue kosong (tidak error):", antrian.dequeue());
console.log("front pada queue kosong:", antrian.front());

// 3. Simulasi loket: FIFO - yang pertama datang, pertama dilayani
const loket = new Queue();
loket.enqueue("A001");
loket.enqueue("A002");
console.log("\n3. Simulasi loket:");
console.log("dipanggil:", loket.dequeue(), "(harus A001, bukan A002)");
loket.enqueue("A003");
console.log("menunggu sekarang:", loket.toArray(), "(harus A002, A003)");
console.log("dipanggil:", loket.dequeue());
console.log("dipanggil:", loket.dequeue());
console.log(
  "dipanggil saat antrean kosong:",
  loket.isEmpty() ? "Antrean kosong" : loket.dequeue(),
);
