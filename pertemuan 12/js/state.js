// Satu tempat untuk keadaan yang dapat berubah dan fungsi pengubahnya.
import { daftarProyek } from "./data.js";
import { render } from "./dom.js";

const KUNCI = "pabw-p11";
const VERSI = 2;

export function simpan(state) {
  const isi = {
    versi: VERSI,
    kategoriAktif: state.kategoriAktif
  };

  try {
    localStorage.setItem(KUNCI, JSON.stringify(isi));
  } catch {
    // Jika penyimpanan browser tidak tersedia, halaman tetap dapat digunakan.
  }
}

export function muat() {
  try {
    const teks = localStorage.getItem(KUNCI);
    if (teks === null) return null;

    const isi = JSON.parse(teks);
    const kategoriValid = ["semua", "web", "data"].includes(isi?.kategoriAktif);

    if (isi?.versi !== VERSI || !kategoriValid) {
      localStorage.removeItem(KUNCI);
      return null;
    }

    return isi;
  } catch {
    // Simpanan rusak: buang dan gunakan nilai bawaan.
    try {
      localStorage.removeItem(KUNCI);
    } catch {
      // Halaman tetap terbuka walaupun penghapusan tidak tersedia.
    }
    return null;
  }
}

const simpanan = muat();

export const state = {
  daftarProyek: [...daftarProyek],
  kategoriAktif: simpanan?.kategoriAktif ?? "semua",
  temaGelap: false
};

export function pilihKategori(nilai) {
  if (!["semua", "web", "data"].includes(nilai)) return;
  state.kategoriAktif = nilai;
  simpan(state);
  render(state);
}

export function ubahTema() {
  state.temaGelap = !state.temaGelap;
  render(state);
}

export function aturUlang() {
  try {
    localStorage.removeItem(KUNCI);
  } catch {
    // State tetap diatur ulang walaupun localStorage tidak tersedia.
  }
  state.kategoriAktif = "semua";
  state.temaGelap = false;
  render(state);
}
