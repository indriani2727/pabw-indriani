

import { daftarProyek } from "./app.js";


const wadah =
  document.querySelector("#daftar");

const pesanKosong =
  document.querySelector("#pesan-kosong");

const barisFilter =
  document.querySelector("#filter");

function buatKartu(proyek) {

  const li =
    document.createElement("li");

  li.className = "kartu";


  const gambar =
    document.createElement("img");

  gambar.src = proyek.gambar;

  gambar.alt = proyek.judul;

  gambar.className = "gambar-proyek";


  const judul =
    document.createElement("h3");

  judul.textContent =
    proyek.judul;


  const tahun =
    document.createElement("p");

  tahun.textContent =
    `Tahun: ${proyek.tahun}`;


  const kategori =
    document.createElement("p");

  kategori.textContent =
    `Kategori: ${proyek.kategori}`;


  li.append(
    gambar,
    judul,
    tahun,
    kategori
  );


  return li;
}


function render(daftar) {

  wadah.textContent = "";


  if (daftar.length === 0) {

    pesanKosong.hidden = false;

    return;
  }


  pesanKosong.hidden = true;


  daftar.forEach(
    (proyek) => {

      wadah.append(
        buatKartu(proyek)
      );

    }
  );
}


render(daftarProyek);


barisFilter.addEventListener(
  "click",
  (event) => {

    const tombol =
      event.target.closest("button");


    if (!tombol) return;


    const kategori =
      tombol.dataset.kategori;


    document
      .querySelectorAll("#filter button")
      .forEach(
        (button) => {

          button.classList.remove("aktif");

        }
      );


    tombol.classList.add("aktif");

    const terpilih =
      daftarProyek.filter(
        (proyek) =>

          kategori === "semua" ||
          proyek.kategori === kategori
      );


    render(terpilih);

  }
);