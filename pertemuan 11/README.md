# PABW — Indriani Putri Darussalam — 25523228

Repo ini memuat pekerjaan mata kuliah Pengembangan Aplikasi Berbasis Web, satu folder untuk setiap pertemuan.

## Pertemuan 3 — Halaman Profil Saya

Topik halaman saya: Daftar Film yang Pernah Saya Tonton.

- Judul halaman: Koleksi Film Saya
- Deskripsi: Daftar film yang pernah saya tonton beserta tahun rilis, genre, dan rating pribadi saya.
- Tautan navigasi: Daftar Film, Tambah Film, Tentang Saya
- Dua bagian utama: Daftar Film, Tambah Film
- Kolom tabel: Judul Film, Tahun Rilis, Genre, Rating
- Kolom form: Judul Film, Tahun Rilis, Rating
- Gambar: Belum ditentukan

### Catatan penggunaan AI

Saya menggunakan AI untuk membantu memahami instruksi tugas dan menyusun struktur README.md dan membantu menambah script karena saya coba sendiri yang berujung eror. Isi topik, data film, dan pengerjaan halaman profil saya sesuaikan dan kerjakan sendiri. untuk kode HTML saya menggunakan website W3School.

## Pertemuan 4 - Design Token Halaman Profil

-Berkas gaya yang akan dibuat: token.css, base.css, layout.css, komponen.css, tema.css.

### Token yang saya tetapkan 

| Token | Nilai | Untuk apa |
|---|---|---|
| `--color-primary` | `#C71585` | Warna utama judul dan tombol |
| `--color-text` | `#2B2D2F` | Warna teks utama |
| `--color-bg` | `#E8EED9` | Latar belakang halaman |
| `--color-border` | `#C4D3A6` | Border tabel dan input |
| `--color-header-bg` | `#D3E0B5` | Latar header tabel |
| `--color-header-text` | `#3D4E1E` | Teks header tabel |
| `--color-card-bg` | `#F8FAF2` | Latar isi tabel |
| `--color-hover` | `#A0126C` | Warna tombol saat hover |
| `--color-image-border` | `#FFB6C1` | Border gambar |
| `--radius-sm` | `4px` | Radius tombol dan input |
| `--radius-md` | `6px` | Radius gambar |
| `--space-1` | `8px` | Jarak kecil |
| `--space-2` | `10px` | Padding tabel |
| `--space-3` | `16px` | Jarak navigasi/padding tombol |
| `--space-4` | `20px` | Padding halaman |

### Kriteria selesai

Mengubah color primary pada satu baris di token.css akan mengubah warna utama yang digunakan pada judul, header, dan tombol.

## Pertemuan 5 - CSS Flexbox dan Grid.

Grid: Mengatur kerangka halaman dan galeri kartu.

Flexbox: Menyusun navbar dan isi kartu.

Responsif: Menggunakan repeat(auto-fit, minmax(16rem, 1fr)) agar jumlah kolom galeri menyesuaikan ukuran layar.

Pengujian: Memeriksa tampilan pada lebar 360 px dan 1280 px agar tidak meluber.

### kriteria selesai

Layout halaman menggunakan Grid dan Flexbox dengan benar, galeri kartu menyesuaikan ukuran layar, tidak ada elemen yang meluber, dan tombol tema gelap tetap berfungsi.

## Pertemuan 6 — Responsif Mobile-First

Melanjutkan halaman profil dari P5 agar responsif di berbagai ukuran layar menggunakan viewport, CSS Grid, dan media query.

- **Berkas baru:** `responsif.css`
- **Viewport:** Menambahkan meta viewport pada HTML.
- **Layout:** Gaya dasar satu kolom untuk layar kecil.
- **Media query:** Breakpoint `48rem` dan `60rem`.
- **Responsivitas:** Gambar menyesuaikan wadah dan tabel dapat digulir.

### Kriteria Selesai

Halaman tampil responsif pada 360 px, 768 px, dan 1.280 px tanpa gulir mendatar. Galeri menyesuaikan kolom, sidebar tampil berdampingan pada layar lebar, dan tiga tangkapan layar pengujian tersimpan di GitHub.

## Pertemuan 8 — JavaScript Modern ES6+

Pertemuan 8 membahas penggunaan JavaScript untuk menyimpan dan mengolah data halaman profil menggunakan variabel, fungsi, objek, array, dan array methods.

- **Variabel:** Menggunakan `const`, `let`, dan template literal.
- **Fungsi:** Membuat dua fungsi murni untuk perkenalan dan pemformatan keahlian.
- **Array methods:** Menggunakan `map()`, `filter()`, dan `find()` untuk mengolah data.
- **Penanganan error:** Memeriksa Console dan memperbaiki kesalahan kode.

### Kriteria Selesai

JavaScript berjalan tanpa error, data profil dan proyek tersimpan di `app.js`, dua fungsi murni bekerja, array methods menghasilkan data yang benar.

## Pertemuan 11 — Modul, State, dan Penyimpanan Klien

- **`js/data.js`** menyimpan data proyek dan fungsi murni `buatPerkenalan()` serta `formatKeahlian()`.
- **`js/state.js`** menjadi satu-satunya tempat untuk state yang berubah, fungsi pengubah, serta penyimpanan pilihan kategori ke `localStorage` menggunakan JSON, nomor versi, dan `try/catch`.
- **`js/dom.js`** berisi pemilih elemen, `saring(state)`, pembuatan kartu, dan `render(state)`.
- **`js/events.js`** berisi seluruh pendengar klik untuk filter, tema, dan tombol Atur Ulang.
- **`js/app.js`** hanya mengimpor modul, memasang pendengar, dan memanggil render awal. `profil.html` hanya memanggil `js/app.js` dengan `type="module"`.
- **Pilihan yang disimpan:** kategori aktif. Nilai bawaan adalah `semua`. Tema gelap tidak disimpan.
- **Yang sengaja tidak disimpan:** kata sandi, token, data pribadi, gambar, dan data proyek lengkap. `localStorage` tidak terenkripsi dan hanya cocok untuk preferensi tampilan kecil.
- **Penanganan simpanan rusak:** bila JSON tidak valid atau nomor versi tidak sesuai, simpanan dihapus dan halaman memakai nilai bawaan.

### Cara menguji P11

1. Buka folder ini di VS Code dan jalankan `profil.html` menggunakan Live Server.
2. Pastikan empat kartu muncul dan filter Semua/Web/Data bekerja.
3. Pilih Web atau Data, tutup tab, lalu buka lagi alamat Live Server yang sama. Kategori terakhir harus tetap terpilih.
4. Klik **Atur Ulang**. Kategori kembali ke Semua dan simpanan dihapus.
5. Di Console, jalankan `localStorage.setItem("pabw-p11", "bukan-json")`, lalu muat ulang. Halaman harus tetap terbuka dan kembali ke nilai bawaan.
6. Uji versi lama dengan `localStorage.setItem("pabw-p11", "{}")`, lalu muat ulang. Halaman tetap terbuka dan simpanan tidak valid dibuang.
7. Jalankan `node -v` dan `npm -v` di terminal. Catat hasil yang benar-benar muncul di bagian P11 ini sebelum mengumpulkan.

### Catatan penggunaan AI — P11

AI membantu menyusun pemisahan modul JavaScript, state, fungsi penyimpanan dan pemulihan, serta penyesuaian `profil.html`. Data proyek, topik halaman, gambar, dan pilihan konten berasal dari proyek saya. Saya tetap perlu menjalankan pengujian di komputer sendiri, mencatat versi Node.js/npm yang terpasang, menyimpan bukti tangkapan layar, dan melakukan commit/push ke repositori saya.

### Versi perangkat

- `node -v`: **isi sesuai hasil terminal Anda**
- `npm -v`: **isi sesuai hasil terminal Anda**
