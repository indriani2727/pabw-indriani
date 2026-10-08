// ========================================
// LEMBAR B — DATA HALAMAN
// ========================================

// Data identitas halaman
const profil = {
  nama: "Indriani Putri Darussalam",
  nim: "25523228",
  programStudi: "Informatika",
  tahun: 2026,
  peran: "Mahasiswa Informatika",
  keahlian: [
    "HTML",
    "CSS",
    "JavaScript"
  ]
};


// Daftar proyek
const daftarProyek = [
  {
    judul: "Halaman Profil",
    tahun: 2026,
    selesai: true
  },
  {
    judul: "Katalog Produk",
    tahun: 2026,
    selesai: false
  }
];


// ========================================
// B.1 CONST DAN LET
// ========================================

const nama = profil.nama;
const nim = profil.nim;
const programStudi = profil.programStudi;

let pilihanAktif = "semua";


// ========================================
// B.2 TEMPLATE LITERAL
// ========================================

const kalimat = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;

console.log(kalimat);


// ========================================
// NILAI, TIPE, DAN TYPEOF
// ========================================

console.log("Tipe nama:", typeof nama);
console.log("Tipe tahun:", typeof profil.tahun);
console.log("Tipe jumlah proyek:", typeof daftarProyek.length);


// ========================================
// NILAI BAWAAN DENGAN ??
// ========================================

const alamat = profil.alamat ?? "Alamat belum diisi";

console.log("Alamat:", alamat);


// ========================================
// AKSES AMAN DENGAN ?.
// ========================================

const kota = profil.alamat?.kota ?? "Kota belum diisi";

console.log("Kota:", kota);


// ========================================
// MENAMPILKAN DATA PROFIL
// ========================================

console.log("Nama:", nama);
console.log("NIM:", nim);
console.log("Program Studi:", programStudi);
console.log("Tahun:", profil.tahun);
console.log("Peran:", profil.peran);
console.log("Keahlian:", profil.keahlian);
console.log("Jumlah proyek:", daftarProyek.length);
console.log("Pilihan aktif:", pilihanAktif);


// ========================================
// C.1 — FUNGSI MURNI
// ========================================

// Fungsi 1: menyusun kalimat perkenalan
function buatPerkenalan({ nama, peran }) {
  return `Nama saya ${nama}, saya adalah ${peran}.`;
}


// Fungsi 2: merapikan daftar keahlian
function formatKeahlian(keahlian) {
  return keahlian.join(", ");
}


// Menjalankan fungsi
console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));


// ========================================
// C.2 — PARAMETER DAN ARGUMEN
// ========================================

function tampilkanProyek({ judul, tahun }) {
  return `${judul} (${tahun})`;
}

console.log(
  tampilkanProyek(daftarProyek[0])
);


// ========================================
// C.3 — FUNGSI MURNI
// ========================================

function jumlahKeahlian(keahlian) {
  return keahlian.length;
}

console.log(
  "Jumlah keahlian:",
  jumlahKeahlian(profil.keahlian)
);


// ========================================
// D.1 — OBJECT DAN ARRAY OF OBJECT
// ========================================

console.table(profil.keahlian);
console.table(daftarProyek);

console.log("Nama profil:", profil.nama);
console.log("Proyek pertama:", daftarProyek[0]);
console.log("Judul proyek pertama:", daftarProyek[0].judul);
console.log("Nama dengan bracket:", profil["nama"]);


// ========================================
// D.2 — MENYALIN OBJECT DAN ARRAY
// ========================================

// Menyalin object profil
const salinanProfil = { ...profil };

console.log("Salinan profil:", salinanProfil);


// Menyalin array proyek sebelum diurutkan
const urut = [...daftarProyek].sort(
  (a, b) => a.judul.localeCompare(b.judul)
);

console.log("Proyek terurut:", urut);


// Pastikan data asli tidak berubah
console.log("Data asli:", daftarProyek);


// ========================================
// D.3 — MAP, FILTER, FIND
// ========================================

// MAP
const daftarJudul = daftarProyek.map(
  (proyek) => proyek.judul
);

console.log("Hasil map:", daftarJudul);


// FILTER
const proyekSelesai = daftarProyek.filter(
  (proyek) => proyek.selesai === true
);

console.log("Hasil filter:", proyekSelesai);


// FIND
const katalog = daftarProyek.find(
  (proyek) => proyek.judul === "Katalog Produk"
);

console.log("Hasil find:", katalog);


// ========================================
// D.4 — PEMERIKSAAN DATA
// ========================================

console.table(profil.keahlian);
console.table(daftarProyek);

console.log("Filter proyek selesai:", proyekSelesai);
console.log("Find Katalog Produk:", katalog);
console.log("Map judul proyek:", daftarJudul);
console.log("Data asli setelah sort:", daftarProyek);


// ========================================
// E — DEBUGGING
// ========================================

console.log("Debug nama:", nama);
console.log("Debug NIM:", nim);
console.log("Debug jumlah proyek:", daftarProyek.length);