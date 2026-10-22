
<template>
  <section id="tambah-film">
    <h2>Tambah Film</h2>

    <form id="film-form" @submit.prevent="tambahProyek">
      <p>
        <label for="judul">Judul Film</label>
        <input
          id="judul"
          v-model.trim="form.judul"
          type="text"
          required
        />
      </p>

      <p>
        <label for="tahun">Tahun</label>
        <input
          id="tahun"
          v-model.number="form.tahun"
          type="number"
          required
        />
      </p>

      <p>
        <label for="kategori">Kategori</label>
        <select id="kategori" v-model="form.kategori" required>
          <option value="web">Web</option>
          <option value="data">Data</option>
        </select>
      </p>

      <button type="submit">Tambah Film</button>
    </form>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const emit = defineEmits(['tambah-proyek'])

const form = reactive({
  judul: '',
  tahun: new Date().getFullYear(),
  kategori: 'web'
})

function tambahProyek() {
  emit('tambah-proyek', {
    judul: form.judul,
    tahun: form.tahun,
    kategori: form.kategori,
    gambar: '',
    selesai: true
  })

  form.judul = ''
  form.tahun = new Date().getFullYear()
  form.kategori = 'web'
}
</script>
