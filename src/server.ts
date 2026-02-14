import express from "express";
import path from "path";
import {fileURLToPath} from "url";



const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.static(path.join(__dirname, "/..public"));

app.get("/")