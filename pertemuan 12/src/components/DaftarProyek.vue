<script setup>
import { computed } from 'vue'
import { state } from '../state.js'
import TombolFilter from './TombolFilter.vue'

const proyekTampil = computed(() => {
  if (state.kategoriAktif === 'semua') return state.daftarProyek
  return state.daftarProyek.filter((proyek) => proyek.kategori === state.kategoriAktif)
})
</script>

<template>
  <section class="utama" id="daftar-film">
    <h2>Proyek</h2>
    <TombolFilter />
    <p id="pesan-kosong" v-if="proyekTampil.length === 0">
      Tidak ada proyek pada kategori itu.
    </p>
    <ul id="daftar" v-else>
      <li v-for="proyek in proyekTampil" :key="proyek.id" class="kartu">
        <img class="gambar-proyek" :src="proyek.gambar" :alt="proyek.judul" />
        <h3>{{ proyek.judul }}</h3>
        <p>Tahun: {{ proyek.tahun }}</p>
        <p>Kategori: {{ proyek.kategori }}</p>
      </li>
    </ul>
  </section>
</template>

