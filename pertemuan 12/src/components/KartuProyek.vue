
<template>
  <li class="kartu">
    <img
      :src="proyek.gambar"
      :alt="proyek.judul"
      class="gambar-proyek"
    />

    <h3>{{ proyek.judul }}</h3>
    <p>Tahun: {{ proyek.tahun }}</p>
    <p>Kategori: {{ proyek.kategori }}</p>
  </li>
</template>

<script setup>
defineProps({
  proyek: {
    type: Object,
    required: true
  }
})
</script>
