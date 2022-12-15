const mongoose = require("mongoose");

const bookmarkSchema = new mongoose.Schema({
itemTitle: { type: String, required: true },
quantity: { type: String, required: true },
priority: { type: String, required: true },
description: { type: String, required: true },
dateTime: { type: String, required: true },

});

const Bookmark = mongoose.model("bookmark", bookmarkSchema);

module.exports = Bookmark;