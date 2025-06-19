// Rata-rata harga per kategori
db.produk.aggregate([
  {
    $group: {
      _id: "$kategori",
      rataHarga: { $avg: "$harga" },
    },
  },
]);
