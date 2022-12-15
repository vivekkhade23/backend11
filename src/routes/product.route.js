const express = require("express");
const Product = require("../Modal/product.modal");

const productRouter = express.Router();

productRouter.post("/addProduct", async (req, res) => {
const { itemTitle, quantity, priority, description} = req.body;
dateTime = new Date();

const new_item = new Product({
itemTitle,
quantity,
priority,
description,
dateTime,
});
await new_item.save();
res.send({ message: "Product Created Successfully", item: new_item });
});

productRouter.get("/", async (req, res) => {
const items = await Product.find({});
return res.send(items);
});

productRouter.delete("/:itemID/delete", async (req, res) => {
const itemId = req.params.itemID;
console.log(itemId);
const item = await Product.findOne({ _id: itemId });
console.log(item);
const deleted_item = await Product.findOneAndDelete(
{ _id: itemId },
{ new: true }
);
return res.send({ message: "Successfully deleted", item: deleted_item });

});

module.exports = productRouter;