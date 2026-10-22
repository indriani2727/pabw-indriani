
<template>
  <section class="filter-proyek">
    <div id="filter">
      <button
        v-for="kategori in kategoriList"
        :key="kategori.nilai"
        type="button"
        :class="{ aktif: kategoriAktif === kategori.nilai }"
        @click="$emit('pilih-kategori', kategori.nilai)"
      >
        {{ kategori.label }}
      </button>

      <button type="button" @click="$emit('atur-ulang')">
        Atur Ulang
      </button>
    </div>
  </section>
</template>

<script setup>
defineProps({
  kategoriAktif: {
    type: String,
    required: true
  }
})

defineEmits(['pilih-kategori', 'atur-ulang'])

const kategoriList = [
  { nilai: 'semua', label: 'Semua' },
  { nilai: 'web', label: 'Web' },
  { nilai: 'data', label: 'Data' }
]
</script>
