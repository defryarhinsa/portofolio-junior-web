// Lab 3 - Stack
// Hari 6: Struktur Data I
// Catatan: file ini .mjs supaya import dari structures.js langsung
// jalan dengan `node lab3.mjs`, tanpa perlu ubah package.json.
// structures.js tetap bernama itu sesuai deliverable modul.

import { Stack } from "./structures.js";

// 2. Uji: push tiga elemen, peek, pop sampai kosong, pop pada stack kosong
const tumpukan = new Stack();
tumpukan.push("A");
tumpukan.push("B");
tumpukan.push("C");
console.log("2. Setelah push A, B, C:");
console.log("peek (teratas):", tumpukan.peek());
console.log("size:", tumpukan.size());
console.log("pop:", tumpukan.pop());
console.log("pop:", tumpukan.pop());
console.log("pop:", tumpukan.pop());
console.log("isEmpty setelah pop semua:", tumpukan.isEmpty());
console.log("pop pada stack kosong (tidak error):", tumpukan.pop());
console.log("peek pada stack kosong:", tumpukan.peek());

// 3. Validasi tanda kurung seimbang
const pasangan = { ")": "(", "]": "[", "}": "{" };

function kurungSeimbang(teks) {
  const stack = new Stack();
  for (const karakter of teks) {
    if ("([{".includes(karakter)) {
      stack.push(karakter);
    } else if (karakter in pasangan) {
      if (stack.isEmpty()) {
        return false;
      }
      if (stack.pop() !== pasangan[karakter]) {
        return false;
      }
    }
  }
  return stack.isEmpty();
}

console.log("\n3. Kurung seimbang:");
console.log("'(a+b]' ->", kurungSeimbang("(a+b]"));
console.log("'((a)' ->", kurungSeimbang("((a)"));
console.log("'' (kosong) ->", kurungSeimbang(""));
console.log("'(a+b)*[c-d]' ->", kurungSeimbang("(a+b)*[c-d]"));

// 4. Balik string memakai Stack, dan periksa palindrom
function balikString(teks) {
  const stack = new Stack();
  for (const karakter of teks) {
    stack.push(karakter);
  }
  let hasil = "";
  while (!stack.isEmpty()) {
    hasil += stack.pop();
  }
  return hasil;
}

function isPalindrom(teks) {
  return teks === balikString(teks);
}

console.log("\n4. Balik string dan palindrom:");
console.log("balik 'web' ->", balikString("web"));
console.log("'katak' palindrom?", isPalindrom("katak"));
console.log("'kasur rusak' palindrom?", isPalindrom("kasur rusak"));
console.log("'web' palindrom?", isPalindrom("web"));
