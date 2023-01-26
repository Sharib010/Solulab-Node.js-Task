const mongoose = require("mongoose");

const product_Schema = mongoose.Schema({
    productId:{
        type:String
    },
    productName:{
        type:String
    },
    qtyPerUnit:{
        type:String
    },
    unitPrice:{
        type:String
    },
    unitInStock:{
        type:String
    },
    discontinued:{
        type:Boolean
    },
    categoryId:{
        type:String
    }
})

const category_Schema = mongoose.Schema({
    categoryId:{
        type:String
    },
    categoryName:{
        type:String
    }
})

const ProductModel = mongoose.model("ProductModel",product_Schema)
const categoryModel = mongoose.model("categoryModel",category_Schema)

module.exports = {
    ProductModel,
    categoryModel
}