
const mongoose = require("mongoose");

const PemasokSchema = new mongoose.Schema(
  { 
    /** Your schema here */ 
    nama: { type: String, required: true },
    created: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const Pemasok = mongoose.model("Pemasok", PemasokSchema);

module.exports = {
  Pemasok,
};
    
