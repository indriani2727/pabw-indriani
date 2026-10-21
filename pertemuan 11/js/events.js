// Semua pendengar peristiwa berada di modul ini.
import { pilihKategori, ubahTema, aturUlang } from "./state.js";

export function pasangPendengar() {
  const barisFilter = document.querySelector("#filter");
  const tombolAturUlang = document.querySelector("#atur-ulang");
  const tombolTema = document.querySelector("#tombol-tema");

  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button[data-kategori]");
    if (!tombol) return;
    pilihKategori(tombol.dataset.kategori);
  });

  tombolAturUlang.addEventListener("click", () => {
    aturUlang();
  });

  tombolTema.addEventListener("click", () => {
    ubahTema();
  });
}
