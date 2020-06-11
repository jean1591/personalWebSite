// DEPENDENCIES
const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const path = require("path");

// Init app
const app = express();

// Load env variables
dotenv.config({ path: "./config.env" });

// Public folder
app.use(express.static(path.join(__dirname, "public")));

// View engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
	res.render("home");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server running on PORT ${PORT}`.blue.bold);
});
