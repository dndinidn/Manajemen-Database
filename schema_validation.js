db.runCommand({
  collMod: "produk",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nama", "kategori", "harga", "stok"],
      properties: {
        nama: { bsonType: "string" },
        kategori: { bsonType: "string" },
        harga: { bsonType: "int", minimum: 0 },
        stok: { bsonType: "int", minimum: 0 },
      },
    },
  },
  validationLevel: "strict",
  validationAction: "error",
});
