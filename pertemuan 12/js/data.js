// Data mentah proyek dari Pertemuan 8/9.
export const daftarProyek = [
  {
    judul: "Obsession",
    tahun: 2019,
    selesai: true,
    kategori: "web",
    gambar: "Obsession.jpg"
  },
  {
    judul: "Mean Girls",
    tahun: 2004,
    selesai: true,
    kategori: "web",
    gambar: "White_chicks.jpg"
  },
  {
    judul: "Happiness",
    tahun: 2021,
    selesai: true,
    kategori: "data",
    gambar: "Happiness.jpg"
  },
  {
    judul: "The House Bunny",
    tahun: 2008,
    selesai: true,
    kategori: "data",
    gambar: "The_house_bunny.jpg"
  }
];

// Dua fungsi murni untuk contoh fungsi pemformat dari materi P8.
export function buatPerkenalan(nama, programStudi) {
  return `Halo, nama saya ${nama}, mahasiswa ${programStudi}.`;
}

export function formatKeahlian(daftarKeahlian) {
  return daftarKeahlian.join(", ");
}