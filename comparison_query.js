// Produk dengan harga di atas 3 juta
db.produk.find({ harga: { $gt: 3000000 } });
