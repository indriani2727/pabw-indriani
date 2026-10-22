// Titik masuk aplikasi: hanya merakit modul dan memulai halaman.
import { state } from "./state.js";
import { pasangPendengar } from "./events.js";
import { render } from "./dom.js";

pasangPendengar();
render(state);