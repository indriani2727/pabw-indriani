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