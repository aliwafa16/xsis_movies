const express = require("express");
require("dotenv").config();
const app = express();
const database = require("./config/database");

const port = process.env.PORT;
// Require movieRoute
const movieRouter = require("./routes/movies");

// Middleware request body
app.use(express.json());
app.use("/assets", express.static("public/image"));

// Use route movie
app.use("/movies", movieRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
