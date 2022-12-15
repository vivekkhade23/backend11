const mongoose = require("mongoose")
const dbConnect = () => {
    return mongoose.connect("mongodb+srv://Vivekkhade:vivek@cluster0.czgoiwd.mongodb.net/mock11?retryWrites=true&w=majority")
}
module.exports = dbConnect