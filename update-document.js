// Tambah stok produk TV LED 42 inch sebanyak 5
db.produk.updateOne(
  { nama: "TV LED 42 inch" },
  { $inc: { stok: 5 } }
);
