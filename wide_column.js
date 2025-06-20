use perpustakaan; // gunakan database yang sama

db.koleksi_wide.insertMany([
  {
    buku_id: "b1",
    judul: "Laskar Pelangi",
    pengarang: "Andrea Hirata",
    tahun: 2005,
    kategori: "Novel"
  },
  {
    buku_id: "b2",
    judul: "Bumi Manusia",
    pengarang: "Pramoedya Ananta Toer",
    tahun: 1980,
    kategori: "Sastra"
  },
  {
    buku_id: "b3",
    judul: "Negeri 5 Menara",
    pengarang: "Ahmad Fuadi",
    tahun: 2009,
    kategori: "Motivasi"
  },
  {
    buku_id: "b4",
    judul: "Ayat-Ayat Cinta",
    pengarang: "Habiburrahman El Shirazy",
    tahun: 2004,
    kategori: "Religi"
  },
  {
    buku_id: "b5",
    judul: "Perahu Kertas",
    pengarang: "Dee Lestari",
    tahun: 2009,
    kategori: "Romansa"
  }
]);
