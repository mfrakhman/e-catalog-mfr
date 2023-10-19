const express = require("express");
const bodyParser = require("body-parser");

const port = process.env.PORT || 5000;
const productRoute = require("./src/routes/product.route");

const app = express();

app.use(express.json());

app.use("/products", productRoute);

app.listen(port, () => {
  console.log(`Server Running on Port: ${port}`);
});
