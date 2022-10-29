const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// Middleware 
app.use(cors());
app.use(express.json())

app.listen(5000, () => {
    console.log("Server is listening on PORT 5000")
});