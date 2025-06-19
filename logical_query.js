// Produk dengan stok > 5 DAN harga < 4 juta
db.produk.find({
  $and: [
    { stok: { $gt: 5 } },
    { harga: { $lt: 4000000 } }
  ]
});
