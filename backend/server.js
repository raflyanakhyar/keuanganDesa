// Import express
import express from "express";
// Import cors
import cors from "cors";
// Import connection
import db from "./config/database.js";
// Import router
import Router from "./routes/route.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import "dotenv/config";

const app = express();
// use express json
app.use(express.json());

app.use(cors());

app.use(cookieParser());

// Testing database connection
try {
	await db.authenticate();
	console.log("Connection has been established successfully.");
} catch (error) {
	console.error("Unable to connect to the database:", error);
}

// parse requests of content-type - application/json
app.use(express.json());
// use router
app.use(Router);

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// simple route
app.get("/", (req, res) => {
	return res.send("Welcome!");
});

// set port, listen for requests
app.listen(5000, () => console.log("Server running at http://localhost:5000"));
