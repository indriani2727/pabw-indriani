
<template>
  <header>
    <h1 class="pink-header-1">
      # PABW — {{ profil.nama }}
    </h1>

    <h2 class="pink-header-2"># ini pertemuan 12</h2>

    <div class="navbar">
      <h1 class="header-title">
        Koleksi Film yang Pernah Saya Tonton
      </h1>

      <nav aria-label="Navigasi utama">
        <ul>
          <li><a href="#daftar-film">Daftar Film</a></li>
          <li><a href="#tambah-film">Tambah Film</a></li>
          <li><a href="#tentang-saya">Tentang Saya</a></li>
          <li>
            <button
              type="button"
              class="tombol-tema"
              @click="$emit('ubah-tema')"
            >
              {{ temaGelap ? '☀️ Tema Terang' : '🌙 Tema Gelap' }}
            </button>
          </li>
        </ul>
      </nav>
    </div>

    <p class="peran-profil">{{ profil.peran }}</p>
  </header>
</template>

<script setup>
defineProps({
  profil: {
    type: Object,
    required: true
  },
  temaGelap: {
    type: Boolean,
    required: true
  }
})

defineEmits(['ubah-tema'])
</script>
