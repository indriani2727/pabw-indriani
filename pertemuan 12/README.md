# PABW — Pertemuan 12: Build Tooling, npm, dan Framework SPA

Topik halaman tetap **Koleksi Film yang Pernah Saya Tonton**. Proyek ini memindahkan halaman P11 ke Vue 3 dan Vite dengan empat komponen, state reaktif, penyimpanan kategori di `localStorage`, serta build produksi.

## Struktur penting

- `index.html` — wadah aplikasi Vue.
- `src/main.js` — titik masuk dan impor enam berkas CSS.
- `src/App.vue` — komponen induk dan penghubung state.
- `src/components/KepalaProfil.vue` — kepala halaman; menerima props `profil` dan `temaGelap`.
- `src/components/TombolFilter.vue` — tombol Semua/Web/Data dan Atur Ulang.
- `src/components/DaftarProyek.vue` — kartu proyek dan filter.
- `src/components/FormKontak.vue` — form yang memakai `v-model` dan mengosongkan kolom setelah dikirim.
- `src/data.js` — data empat film/proyek; setiap data memiliki `id` unik untuk `:key`.
- `src/state.js` — state Vue `reactive()` dan fungsi perubahan state.
- `src/simpanan.js` — muat/simpan/reset pilihan kategori dengan validasi JSON, versi, dan `try/catch`.
- `src/api.js` — helper API dari latihan P10; permintaan `fetch()` hanya berada di file ini.
- `src/tokens.css`, `base.css`, `layout.css`, `komponen.css`, `tema.css`, `responsif.css` — isi CSS P04–P06 dipindahkan tanpa mengubah isinya; nama file diseragamkan menjadi huruf kecil agar impor konsisten.
- `public/` — gambar yang ditampilkan pada kartu proyek.

## Menjalankan proyek

Pastikan Node.js LTS terpasang. Dari terminal pada folder `worksheet-p12/`:

```bash
npm install
npm run dev
```

Buka URL yang ditampilkan Vite. Periksa filter Semua/Web/Data, tombol tema, Atur Ulang, gambar kartu, dan form. Untuk build produksi:

```bash
npm run build
npm run preview
```

`npm run build` membuat `dist/`. `npm run preview` menyajikan hasil build tersebut. `node_modules/` dan `dist/` diabaikan oleh Git, sedangkan `package-lock.json` harus disimpan.

## Catatan penggunaan AI

AI membantu mengubah struktur halaman ke komponen Vue, menyusun state reaktif dan penyimpanan `localStorage`, menyiapkan konfigurasi Vite, serta menyusun jawaban konsep worksheet. Topik halaman, identitas, data film, gambar, dan gaya visual berasal dari proyek P11 saya. Saya perlu menjalankan pengujian di komputer sendiri, mengisi hasil yang bergantung pada lingkungan (versi Node/npm, port Vite, ukuran Network), memeriksa Console dan Network, mengambil tangkapan layar, serta melakukan commit/push ke repositori sendiri.

## Catatan pengujian yang harus dicatat setelah menjalankan

- Node.js: isi dari `node -v` pada komputer sendiri.
- npm: isi dari `npm -v` pada komputer sendiri.
- Port `npm run dev` dan `npm run preview`: catat URL yang muncul di terminal.
- Ukuran dan jumlah berkas Network sebelum/sesudah build: catat dari DevTools, bukan perkiraan.
- Bukti: simpan tangkapan layar halaman dari `npm run preview`.
