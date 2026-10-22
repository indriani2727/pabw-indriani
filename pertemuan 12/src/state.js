import { reactive } from 'vue'
import { daftarProyek } from './data.js'

export const state = reactive({
  daftarProyek: [...daftarProyek],
  kategoriAktif: 'semua',
  temaGelap: false,
})

export function pilihKategori(nilai) {
  if (['semua', 'web', 'data'].includes(nilai)) {
    state.kategoriAktif = nilai
  }
}

export function ubahTema() {
  state.temaGelap = !state.temaGelap
}
