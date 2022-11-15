const express = require("express");
const app = express();
const { getCategories } = require("./controllers/controller");

app.get("/api/categories", getCategories);

module.exports = app;
