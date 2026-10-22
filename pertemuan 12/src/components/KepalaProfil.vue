<script setup>
const props = defineProps({
  profil: { type: Object, required: true },
  temaGelap: { type: Boolean, required: true },
})
defineEmits(['ubah-tema'])
</script>

<template>
  <h1 class="pink-header-1">{{ props.profil.nama }}</h1>
  <h2 class="pink-header-2">{{ props.profil.peran }}</h2>
  <div class="navbar">
    <h1 class="header-title">Koleksi Film yang Pernah Saya Tonton</h1>
    <nav aria-label="Navigasi utama">
      <ul>
        <li><a href="#daftar-film">Daftar Film</a></li>
        <li><a href="#tambah-film">Tambah Film</a></li>
        <li><a href="#tentang-saya">Tentang Saya</a></li>
        <li>
          <button type="button" class="tombol-tema" @click="$emit('ubah-tema')">
            {{ props.temaGelap ? '☀️ Tema Terang' : '🌙 Tema Gelap' }}
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>
