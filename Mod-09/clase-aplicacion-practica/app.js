const express = require("express");
const path = require("path");
const methodOverride = require("method-override");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.resolve(__dirname, "public")));

const PORT = 5500;

app.listen(PORT, () => console.log(`App running in port: ${PORT}`));

// Template Engine
app.set("view engine", "ejs");

// Routers
const productsRouter = require("./routes/products");
app.use("/products", productsRouter);

const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

app.get("/", (req, res) => res.redirect("/products"));