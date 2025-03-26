import users from "./data.mjs";

// Fungsi untuk menampilkan data
const index = () => {
    console.log("📌 Daftar Data:");
    users.map((user, index) => {
        console.log(`${index + 1}. Nama: ${user.nama}, Umur: ${user.umur} tahun, Alamat: ${user.alamat}, Email: ${user.email}`);
    });
};

// Fungsi untuk menambahkan data baru (cek duplikasi)
const store = (user) => {
    // Cek apakah user dengan nama & email yang sama sudah ada
    const isDuplicate = users.some(u => u.nama === user.nama && u.email === user.email);

    if (!isDuplicate) {
        users.push(user);
        console.log(`✅ Pengguna "${user.nama}" ditambahkan!`);
    } else {
        console.log(`⚠️ Pengguna "${user.nama}" dengan email "${user.email}" sudah ada, tidak ditambahkan.`);
    }
};

// Fungsi untuk menghapus data berdasarkan index
const destroy = (index) => {
    if (index >= 0 && index < users.length) {
        console.log(`❌ Menghapus pengguna: ${users[index].nama}`);
        users.splice(index, 1);
    } else {
        console.log("⚠️ Index tidak ditemukan!");
    }
};

export { index, store, destroy };
