const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    itemTitle: { type: String, required: true },
    quantity: { type: String, required: true },
    priority: { type: String, required: true },
    description:{type:String,required:true},
    dateTime:{type:String,required:true},
});

const Product = mongoose.model("product", productSchema);
module.exports = Product;