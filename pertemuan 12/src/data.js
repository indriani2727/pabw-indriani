// Data proyek dari Pertemuan 8/9. ID ditambahkan agar v-for memiliki :key unik.
export const daftarProyek = [
  {
    id: 1,
    judul: 'Obsession',
    tahun: 2019,
    selesai: true,
    kategori: 'web',
    gambar: '/Obsession.jpg',
  },
  {
    id: 2,
    judul: 'Mean Girls',
    tahun: 2004,
    selesai: true,
    kategori: 'web',
    gambar: '/White_chicks.jpg',
  },
  {
    id: 3,
    judul: 'Happiness',
    tahun: 2021,
    selesai: true,
    kategori: 'data',
    gambar: '/Happiness.jpg',
  },
  {
    id: 4,
    judul: 'The House Bunny',
    tahun: 2008,
    selesai: true,
    kategori: 'data',
    gambar: '/The_house_bunny.jpg',
  },
]

export function buatPerkenalan(nama, programStudi) {
  return `Halo, nama saya ${nama}, mahasiswa ${programStudi}.`
}

export function formatKeahlian(daftarKeahlian) {
  return daftarKeahlian.join(', ')
}
