import express from "express";
import path from "path";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.static(path.join(__dirname, "/..public")));

app.get("/", (req, res)=>{
    res.render("home");
})

app.get("/about", (req, res)=>{
    res.render("about");
})

app.get("/video", (req, res)=>{
    res.render("video");
})

app.get("/servers", (req, res)=>{
    res.render("servers");
})

app.get("/partners", (req, res)=>{
    res.render("partners");
})

app.get("/about", (req, res)=>{
    res.render("about");
})

app.get("/computer_networks", (req, res)=>{
    res.render("computer_networks")
})

app.get("/hardware_repair", (req, res)=>{
    res.render("hardware_repair");
});
