
import { reactive } from 'vue'
import { daftarProyek } from '../js/data.js'

export const state = reactive({
  daftarProyek: [...daftarProyek],
  kategoriAktif: 'semua',
  temaGelap: false
})

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai
}
