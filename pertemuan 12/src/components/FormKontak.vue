<script setup>
import { reactive, ref } from 'vue'

const form = reactive({ judul: '', tahun: '', genre: '', rating: '' })
const pesan = ref('')

function kirimForm() {
  pesan.value = 'Form berhasil dikirim dan dikosongkan.'
  form.judul = ''
  form.tahun = ''
  form.genre = ''
  form.rating = ''
}
</script>

<template>
  <section class="bawah" id="tambah-film">
    <h2>Tambah Film</h2>
    <form id="film-form" @submit.prevent="kirimForm">
      <p>
        <label for="judul">Judul Film</label>
        <input id="judul" v-model.trim="form.judul" name="judul" type="text" required />
      </p>
      <p>
        <label for="tahun">Tahun</label>
        <input id="tahun" v-model="form.tahun" name="tahun" type="number" min="1888" required />
      </p>
      <p>
        <label for="genre">Genre</label>
        <input id="genre" v-model.trim="form.genre" name="genre" type="text" required />
      </p>
      <p>
        <label for="rating">Rating</label>
        <input id="rating" v-model="form.rating" name="rating" type="number" min="0" max="10" step="0.1" required />
      </p>
      <button type="submit">Tambah Film</button>
      <p v-if="pesan" role="status">{{ pesan }}</p>
    </form>
  </section>
</template>
