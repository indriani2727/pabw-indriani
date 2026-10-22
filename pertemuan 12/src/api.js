// Endpoint publik dari latihan API P10. Fetch hanya dilakukan di berkas ini.
const ALAMAT = 'https://jsonplaceholder.typicode.com/posts'

export async function ambilNotisia() {
  const respons = await fetch(ALAMAT)
  if (!respons.ok) {
    throw new Error(`HTTP ${respons.status}`)
  }
  return respons.json()
}
