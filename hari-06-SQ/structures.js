// structures.js - Stack dan Queue
// Hari 6: Struktur Data I
// Prinsip Stack: LIFO (Last In, First Out)
// Prinsip Queue: FIFO (First In, First Out)

export class Stack {
  constructor() {
    this.items = [];
  }

  // Menaruh di atas (O(1))
  push(item) {
    this.items.push(item);
  }

  // Mengambil dan menghapus elemen teratas (O(1))
  // Stack kosong: kembalikan undefined, bukan error
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.pop();
  }

  // Melihat elemen teratas tanpa menghapus (O(1))
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

// Queue (antrean) - FIFO, versi head dan tail O(1) dari T6 modul.
// Memakai objek + penanda head/tail, bukan array.shift() yang O(n).
export class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  // Menambah di belakang (O(1))
  enqueue(item) {
    this.items[this.tail] = item;
    this.tail++;
  }

  // Mengambil dan menghapus elemen terdepan (O(1))
  // Queue kosong: kembalikan undefined, bukan error
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return item;
  }

  // Melihat elemen terdepan tanpa menghapus
  // Queue kosong: undefined
  front() {
    return this.items[this.head];
  }

  isEmpty() {
    return this.tail === this.head;
  }

  size() {
    return this.tail - this.head;
  }

  // Daftar antrean saat ini, tanpa membongkar properti internal
  // dari luar kelas (tantangan desain di Lab 4 modul).
  toArray() {
    const hasil = [];
    for (let i = this.head; i < this.tail; i++) {
      hasil.push(this.items[i]);
    }
    return hasil;
  }
}
