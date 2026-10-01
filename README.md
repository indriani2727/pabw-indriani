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

Berkas gaya yang akan dibuat: token.css, base.css, layout.css, komponen.css, tema.css.

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

## Pertemuan 5 - belajar grid dan flexbox

halaman profil dikembangkan dengan menggunakan **CSS Grid** dan **Flexbox** agar susunan halaman lebih rapi, fleksibel, dan dapat menyesuaikan ukuran layar.

### tata letak yang saya gunakan

- Daftar film beserta gambar dan informasi singkat.
- Form untuk menambahkan film.
- Sidebar dan navigasi halaman.
- Tampilan responsif menggunakan CSS Grid dan Flexbox.
- Fitur tema gelap.
- Pengaturan layout agar tidak meluber pada berbagai ukuran layar.

### Kriteria selesai

Layout halaman sudah menggunakan Grid dan Flexbox, galeri bersifat responsif, serta masalah tinggi kartu, teks panjang, dan elemen yang meluber sudah diperbaiki. Tampilan juga dapat menyesuaikan ukuran layar dan memiliki fitur tema gelap.

## Pertemuan 6 - Responsif Mobile-First

Melanjutkan halaman dari Pertemuan 5 dengan menambahkan fitur responsif menggunakan Mobile-First.

### responsif yang saya kerjakan

| No. | Pengerjaan                                              |
| --- | ------------------------------------------------------- |
| 1   | Menambahkan `meta viewport` pada HTML                   |
| 2   | Membuat file `responsif.css`                            |
| 3   | Membuat layout dasar 1 kolom                            |
| 4   | Menambahkan breakpoint `48rem` untuk galeri 2 kolom     |
| 5   | Menambahkan breakpoint `60rem` untuk sidebar dan konten |
| 6   | Mengatur gambar dengan `max-width: 100%`                |
| 7   | Membuat tabel dapat di-scroll dengan `overflow-x: auto` |
| 8   | Menguji tampilan pada 360 px, 768 px, dan 1280 px       |

### Hasil

Halaman dapat menyesuaikan tampilan dari **mobile hingga desktop** tanpa scroll horizontal.
