const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const produitSchema = new Schema({
    libelle: { type: String},
    prix: { type: Number},
    descrition: { type: String },
    quantite: { type: Number},
    inStock: { type: Boolean }
}, { timestamp: true });

module.exports = mongoose.model('Produit', produitSchema);