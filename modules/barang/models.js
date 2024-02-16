
const mongoose = require("mongoose");

const BarangSchema = new mongoose.Schema(
  { 
    /** Your schema here */ 
    nama: { type: String, required: true },
    created: { type: Date, default: Date.now },
    hargaJual: { type: Number, default: 0 },
    hargaBeli: { type: Number, default: 0 },
    stok: { type: Number, default: 0 },
  },
  { versionKey: false }
);

const Barang = mongoose.model("Barang", BarangSchema);

module.exports = {
  Barang,
};
    
