// Modul tampilan: memilih elemen, menyaring data, dan menggambar ulang.
const wadah = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#pesan-kosong");
const barisFilter = document.querySelector("#filter");
const tombolTema = document.querySelector("#tombol-tema");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";

  const gambar = document.createElement("img");
  gambar.src = proyek.gambar;
  gambar.alt = proyek.judul;
  gambar.className = "gambar-proyek";

  const judul = document.createElement("h3");
  judul.textContent = proyek.judul;

  const tahun = document.createElement("p");
  tahun.textContent = `Tahun: ${proyek.tahun}`;

  const kategori = document.createElement("p");
  kategori.textContent = `Kategori: ${proyek.kategori}`;

  li.append(gambar, judul, tahun, kategori);
  return li;
}

export function saring(state) {
  return state.daftarProyek.filter((proyek) =>
    state.kategoriAktif === "semua" || proyek.kategori === state.kategoriAktif
  );
}

export function render(state) {
  // 1. Kosongkan wadah sebelum menggambar ulang.
  wadah.textContent = "";

  const tampil = saring(state);

  // 2. Periksa keadaan kosong.
  if (tampil.length === 0) {
    pesanKosong.hidden = false;
  } else {
    pesanKosong.hidden = true;
    // 3. Isi ulang wadah dari state.
    tampil.forEach((proyek) => wadah.append(buatKartu(proyek)));
  }

  // Kelas aktif dan tema selalu diturunkan dari state, bukan dibaca dari DOM.
  barisFilter.querySelectorAll("button[data-kategori]").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol.dataset.kategori === state.kategoriAktif);
  });

  document.body.classList.toggle("tema-gelap", state.temaGelap);
  if (tombolTema) {
    tombolTema.textContent = state.temaGelap ? "☀️ Tema Terang" : "🌙 Tema Gelap";
  }
}
