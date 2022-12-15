const express = require("express");
const Bookmark = require("../Modal/bookmark.modal");

const bookmarkRouter = express.Router();

bookmarkRouter.post("/addBookmark", async (req, res) => {
const { itemTitle, quantity, priority, description, dateTime } = req.body;
const new_item = new Bookmark({
itemTitle,
quantity,
priority,
description,
dateTime,

});
await new_item.save();
res.send({ message: "Item Created Successfully", item: new_item });
});

bookmarkRouter.get("/", async (req, res) => {

const items = await Bookmark.find({});
return res.send(items);
});

module.exports=bookmarkRouter