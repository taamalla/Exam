var express = require('express');
var router = express.Router();
const Produit = require('../model/Produit');

/* GET users listing. */

router.post('/addProduct', async (req, res, next) => {
  const {libelle,
    prix,
    descrition,
    quantite,
    inStock} = req.body
  try {
    const produit = await Produit.findOne({libelle });
    if(!produit){
      const Produit = new Produit({
        libelle,
        prix,
        descrition,
        quantite,
        inStock
      });
      console.log(Produit);
      
      await user.save();
      res.redirect("/product");
     
    }
  } catch (error) {
    console.log(error);
  }


});
router.get("/product", async function (req, res, next) {
  const produits = await Produit.find();
  res.render("list", { produits });
});
router.delete("/deleteProduit/:id", async function (req, res, next) {
  const { id } = req.params;
  console.log(id);
  try {
    // method to delete user by id
    // const user = await User.findByIdAndDelete(id);
    // other method to delete user by id
    const checkIfUserExists = await Produit.findOne({ _id: id });
    if(!checkIfUserExists) {
      throw new Error("Product does not exists !");
    }
    await User.findOneAndDelete({ _id: id });
    res.json("Product deleted successfuly !");
  } catch (error) {
    res.status(404).json(error.message);
  }
});
router.put("/update/:Id", async function (req, res, next) {
  try{
    const { produitId } = req.params;
    const { libelle, prix, description,quantite,stock } = req.body;
    const checkIfproduitExist = await Produit.findById(Id);
    if (!checkIfproduitExist) {
      return res.status(404).json({ message: "produit nexiste" });
    }
    const produit = await Produit.findByIdAndUpdate(Id, { libelle, prix, description,quantite,stock });
    res.status(200).json(produit);

  }catch (e){
    res.status(500).json({ message: e.message });
  }
  });

module.exports = router;
