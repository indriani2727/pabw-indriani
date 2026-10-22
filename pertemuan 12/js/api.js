// Satu-satunya tempat untuk mengatur alamat API.
export const ALAMAT = "https://jsonplaceholder.typicode.com/posts";

// Mengambil data dan menolak Promise bila HTTP atau format respons bermasalah.
export async function ambilNotisia() {
  const respons = await fetch(ALAMAT, {
    headers: { Accept: "application/json" }
  });

  console.log("Status:", respons.status, "ok:", respons.ok);

  if (!respons.ok) {
    throw new Error(`Permintaan gagal (HTTP ${respons.status})`);
  }

  const jenisIsi = respons.headers.get("Content-Type") || "";
  if (!jenisIsi.toLowerCase().includes("application/json")) {
    throw new Error(`Respons bukan JSON (Content-Type: ${jenisIsi || "tidak tersedia"})`);
  }

  return await respons.json();
}
