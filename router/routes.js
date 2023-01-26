const express = require("express");
const router = express.Router();

const product = require("../model/productSchema");
const productInfo = product.ProductModel;
const categoryInfo = product.categoryModel;


router.post("/create", async (req, res) => {
  const {
    productId,
    productName,
    qtyPerUnit,
    unitPrice,
    unitInStock,
    discontinued,
    categoryId,
    categoryName,
  } = req.body;
  const productInfoSave = new productInfo({
    productId,
    productName,
    qtyPerUnit,
    unitPrice,
    unitInStock,
    discontinued,
    categoryId,
  });
  const categoryInfoSave = new categoryInfo({
    categoryId,
    categoryName,
  });
  const product_check = await productInfoSave.save();
  const category_check = await categoryInfoSave.save();
  if (!product_check || !category_check) {
    res.send({ message: "Something went wrong" });
  } else {
    res.send({ message: "Data save Successfully" });
  }
});


router.post("/read", async (req, res) => {
  const { categoryId } = req.body;
  const getProduct = await productInfo.findOne({ categoryId: categoryId });
  const getCategory = await categoryInfo.findOne({ categoryId: categoryId });
  if (!getProduct || !getCategory) {
    res.send({ message: "Something went wrong" });
  } else {
    res.send(getProduct + getCategory);
  }
});


router.get("/readAll", async (req, res) => {
  const getProduct = await productInfo.find();
  const getCategory = await categoryInfo.find();
  if (!getProduct || !getCategory) {
    res.send({ message: "Something went wrong" });
  } else {
    res.send(getProduct + getCategory);
  }
});


router.post("/update", async (req, res) => {
  const {
    productName,
    qtyPerUnit,
    unitPrice,
    unitInStock,
    discontinued,
    categoryId,
    categoryName,
  } = req.body;
  const setProductUpdate = {
    productName,
    qtyPerUnit,
    unitPrice,
    unitInStock,
    discontinued,
    categoryName,
  };
  const setCategoryUpdate = {
    categoryName,
  };
  const updateProdect = await productInfo.findOneAndUpdate(
    { categoryId: categoryId },
    setProductUpdate
  );

  const updateCategory = await categoryInfo.findOneAndUpdate(
    { categoryId: categoryId },
    setCategoryUpdate
  );
  if (!updateProdect || !updateCategory) {
    res.send({ message: "Something went wrong" });
  } else {
    res.send({ message: "Data Update Successfully" });
  }
});


router.post("/delete", async (req, res) => {
  const { categoryId } = req.body;
  const deleteProduct = await productInfo.deleteOne({ categoryId: categoryId });
  const deleteCategory = await categoryInfo.deleteOne({ categoryId: categoryId });
  if (!deleteProduct || !deleteCategory) {
    res.send({ message: "Something went wrong" });
  } else {
    res.send({ message: "Data delete Successfully" });
  }
});


module.exports = router;
