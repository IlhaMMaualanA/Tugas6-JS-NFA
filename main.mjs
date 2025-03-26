import { index, store, destroy } from "./controller.mjs";

// Tambahkan user dengan validasi duplikasi
const addUser = (nama, umur, alamat, email) => {
    store({ nama, umur, alamat, email }); // Gunakan `store()` dari controller.mjs
};

// ✅ Tambahkan minimal 2 data pada proses push (tanpa duplikasi)
addUser("Data 41", 23, "Jl. Data 41", "data41@email.com");
addUser("Data 51", 24, "Jl. Data 51", "data51@email.com");


// 🔥 Tes langsung di Node.js
console.log("📌 Aplikasi Manajemen Pengguna (Node.js)");
index(); // Menampilkan daftar pengguna

// ❌ Coba hapus pengguna kedua (index 1)
destroy(11);
index(); // Tampilkan daftar setelah penghapusan
