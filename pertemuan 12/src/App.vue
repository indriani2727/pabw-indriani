
<template>
  <div class="page">
    <HeaderProfil
      :profil="identitas"
      :tema-gelap="state.temaGelap"
      @ubah-tema="ubahTema"
    />

    <main class="isi">
      <aside class="sisi" id="tentang-saya">
        <h2>Tentang Saya</h2>
        <p><strong>Nama:</strong><br />{{ identitas.nama }}</p>
        <p><strong>Peran:</strong><br />{{ identitas.peran }}</p>
        <p><strong>NIM:</strong><br />25523228</p>
        <p><strong>Program Studi:</strong><br />Informatika</p>
        <p><strong>Tahun:</strong><br />2026</p>
      </aside>

      <section class="utama" id="daftar-film">
        <h2>Proyek</h2>

        <FilterProyek
          :kategori-aktif="state.kategoriAktif"
          @pilih-kategori="pilihKategori"
          @atur-ulang="aturUlangPilihan"
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
import { computed, onMounted, watch } from 'vue'

import HeaderProfil from './components/HeaderProfil.vue'
import FilterProyek from './components/FilterProyek.vue'
import KartuProyek from './components/KartuProyek.vue'
import FormProyek from './components/FormProyek.vue'

import { state, pilihKategori } from './state.js'
import { muat, simpan, aturUlang } from './simpanan.js'

const identitas = {
  nama: 'Indriani Putri Darussalam',
  peran: 'Mahasiswa Informatika'
}

const gambarProyek = {
  'Obsession.jpg': new URL('../Obsession.jpg', import.meta.url).href,
  'White_chicks.jpg': new URL('../White_chicks.jpg', import.meta.url).href,
  'Happiness.jpg': new URL('../Happiness.jpg', import.meta.url).href,
  'The_house_bunny.jpg': new URL('../The_house_bunny.jpg', import.meta.url).href
}

state.daftarProyek = state.daftarProyek.map((proyek, indeks) => ({
  ...proyek,
  id: indeks + 1,
  gambar: gambarProyek[proyek.gambar] || proyek.gambar || ''
}))

const proyekTampil = computed(() => {
  if (state.kategoriAktif === 'semua') {
    return state.daftarProyek
  }

  return state.daftarProyek.filter(
    (proyek) => proyek.kategori === state.kategoriAktif
  )
})

onMounted(() => {
  const isi = muat()

  if (isi) {
    pilihKategori(isi.kategoriAktif)
  }
})

watch(
  state,
  (nilai) => simpan(nilai),
  { deep: true }
)

watch(
  () => state.temaGelap,
  (gelap) => {
    document.body.classList.toggle('tema-gelap', gelap)
  },
  { immediate: true }
)

function ubahTema() {
  state.temaGelap = !state.temaGelap
}

function aturUlangPilihan() {
  aturUlang()
  state.kategoriAktif = 'semua'
  state.temaGelap = false
  simpan(state)
}

function tambahProyek(proyekBaru) {
  state.daftarProyek.push({
    ...proyekBaru,
    id: Date.now()
  })

  pilihKategori('semua')
}
</script>
