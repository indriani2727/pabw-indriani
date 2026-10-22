<script setup>
import { onMounted, watch } from 'vue'
import KepalaProfil from './components/KepalaProfil.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'
import { state, ubahTema } from './state.js'
import { muat, simpan, aturUlang } from './simpanan.js'

const identitas = {
  nama: '# PABW — Indriani Putri Darussalam — 25523228',
  peran: '# ini pertemuan 3',
}

onMounted(() => {
  const isi = muat()
  if (isi) state.kategoriAktif = isi.kategoriAktif
  document.body.classList.toggle('tema-gelap', state.temaGelap)
})

watch(state, (nilai) => {
  simpan(nilai)
  document.body.classList.toggle('tema-gelap', nilai.temaGelap)
}, { deep: true })

function resetPilihan() {
  aturUlang()
  state.kategoriAktif = 'semua'
  state.temaGelap = false
  simpan(state)
}
</script>

<template>
  <div class="page">
    <header>
      <KepalaProfil
        :profil="identitas"
        :tema-gelap="state.temaGelap"
        @ubah-tema="ubahTema"
      />
    </header>

    <main class="isi">
      <aside class="sisi" id="tentang-saya">
        <h2>Tentang Saya</h2>
        <p><strong>Nama:</strong><br />Indriani Putri Darussalam</p>
        <p><strong>NIM:</strong><br />25523228</p>
        <p><strong>Program Studi:</strong><br />Informatika</p>
        <p><strong>Tahun:</strong><br />2026</p>
      </aside>

      <DaftarProyek />
      <FormKontak />
    </main>

    <footer>
      <p>&copy; 2026 Indriani Putri Darussalam / Universitas Islam Indonesia</p>
    </footer>
  </div>
</template>
