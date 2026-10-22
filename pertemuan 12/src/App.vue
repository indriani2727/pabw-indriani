
<template>
  <div class="page">
    <HeaderProfil
      :tema-gelap="state.temaGelap"
      @ubah-tema="ubahTema"
    />

    <main class="isi">
      <aside class="sisi" id="tentang-saya">
        <h2>Tentang Saya</h2>
        <p><strong>Nama:</strong><br />Indriani Putri Darussalam</p>
        <p><strong>NIM:</strong><br />25523228</p>
        <p><strong>Program Studi:</strong><br />Informatika</p>
        <p><strong>Tahun:</strong><br />2026</p>
      </aside>

      <section class="utama" id="daftar-film">
        <h2>Proyek</h2>

        <FilterProyek
          :kategori-aktif="state.kategoriAktif"
          @pilih-kategori="pilihKategori"
          @atur-ulang="aturUlang"
        />

        <ul id="daftar">
          <KartuProyek
            v-for="proyek in proyekTampil"
            :key="proyek.id"
            :proyek="proyek"
          />
        </ul>

        <p v-if="proyekTampil.length === 0" id="pesan-kosong">
          Tidak ada proyek pada kategori itu.
        </p>
      </section>

      <section class="bawah">
        <FormProyek @tambah-proyek="tambahProyek" />
      </section>
    </main>

    <footer>
      <p>
        &copy; 2026 Indriani Putri Darussalam /
        Universitas Islam Indonesia
      </p>
    </footer>
  </div>
</template>

<script setup>
import { reactive, computed, watch } from 'vue'

import HeaderProfil from './components/HeaderProfil.vue'
import FilterProyek from './components/FilterProyek.vue'
import KartuProyek from './components/KartuProyek.vue'
import FormProyek from './components/FormProyek.vue'

import { daftarProyek } from '../js/data.js'

// Hubungkan nama gambar dengan file di folder utama proyek.
const gambarProyek = {
  'Obsession.jpg': new URL('../Obsession.jpg', import.meta.url).href,
  'White_chicks.jpg': new URL('../White_chicks.jpg', import.meta.url).href,
  'Happiness.jpg': new URL('../Happiness.jpg', import.meta.url).href,
  'The_house_bunny.jpg': new URL('../The_house_bunny.jpg', import.meta.url).href
}

const KUNCI = 'pabw-p11'
const VERSI = 2

function muatKategori() {
  try {
    const teks = localStorage.getItem(KUNCI)

    if (teks === null) return 'semua'

    const isi = JSON.parse(teks)
    const kategoriValid = ['semua', 'web', 'data']

    if (
      isi?.versi !== VERSI ||
      !kategoriValid.includes(isi?.kategoriAktif)
    ) {
      localStorage.removeItem(KUNCI)
      return 'semua'
    }

    return isi.kategoriAktif
  } catch {
    return 'semua'
  }
}

const state = reactive({
  daftarProyek: daftarProyek.map((proyek, indeks) => ({
    ...proyek,
    id: indeks + 1,
    gambar: gambarProyek[proyek.gambar] || ''
  })),
  kategoriAktif: muatKategori(),
  temaGelap: false
})

const proyekTampil = computed(() => {
  if (state.kategoriAktif === 'semua') {
    return state.daftarProyek
  }

  return state.daftarProyek.filter(
    (proyek) => proyek.kategori === state.kategoriAktif
  )
})

watch(
  () => state.kategoriAktif,
  (kategoriAktif) => {
    try {
      localStorage.setItem(
        KUNCI,
        JSON.stringify({
          versi: VERSI,
          kategoriAktif
        })
      )
    } catch {
      // Aplikasi tetap berjalan jika penyimpanan tidak tersedia.
    }
  }
)

watch(
  () => state.temaGelap,
  (gelap) => {
    document.body.classList.toggle('tema-gelap', gelap)
  },
  { immediate: true }
)

function pilihKategori(kategori) {
  if (!['semua', 'web', 'data'].includes(kategori)) return

  state.kategoriAktif = kategori
}

function ubahTema() {
  state.temaGelap = !state.temaGelap
}

function aturUlang() {
  state.kategoriAktif = 'semua'
  state.temaGelap = false

  try {
    localStorage.removeItem(KUNCI)
  } catch {
    // Aplikasi tetap berjalan jika penyimpanan tidak tersedia.
  }
}

function tambahProyek(proyekBaru) {
  state.daftarProyek.push({
    ...proyekBaru,
    id: Date.now()
  })

  state.kategoriAktif = 'semua'
}
</script>
