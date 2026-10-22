<script setup>
import { state, pilihKategori } from '../state.js'
defineEmits(['atur-ulang'])
</script>

<template>
  <div id="filter">
    <button
      v-for="kategori in ['semua', 'web', 'data']"
      :key="kategori"
      type="button"
      :data-kategori="kategori"
      :class="{ aktif: state.kategoriAktif === kategori }"
      @click="pilihKategori(kategori)"
    >
      {{ kategori === 'semua' ? 'Semua' : kategori === 'web' ? 'Web' : 'Data' }}
    </button>
    <button type="button" id="atur-ulang" @click="$emit('atur-ulang')">Atur Ulang</button>
  </div>
</template>
