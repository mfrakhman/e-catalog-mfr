const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");

const port = process.env.PORT || 5000;
const productRoute = require("./src/routes/product.route");
const authRoute = require("./src/routes/auth.route");

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/products", productRoute);
app.use("/auth", authRoute);

app.listen(port, () => {
  console.log(`Server Running on Port: ${port}`);
});
