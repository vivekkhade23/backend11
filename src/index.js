const express = require("express");
const dotenv=require("dotenv");
var bodyParser = require("body-parser");
const cors=require("cors");
const dbConnect=require('./config/db');
const productRouter = require("./routes/product.route");
const bookmarkRouter = require("./routes/bookmark.route");

let PORT =process.env.PORT || 8080;
dotenv.config();

const app = express();
app.use(cors());

app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.json());


app.get('/' , (req , res) => {
    res.send("Namshkar")
  })

  app.use("/product",productRouter)
  app.use("/bookmark",bookmarkRouter)

app.listen(PORT||8080, async () => {
    await dbConnect();
    console.log(`Live on http://localhost:${PORT}`);
  });