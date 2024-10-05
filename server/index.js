import express from "express";
import cors from "cors";
import pg from "pg";
import bodyParser from "body-parser";
import morgan from "morgan";
import { logNext } from "./middlewares/logNext.js";
// import { db } from "./database/db.js";

 const  db = new pg.Client({
    user: "ib",
    host: "localhost",
    database:"teclight",
    password:"fakepwd12@",
    port:5432,
});

db.connect()




const app = express();

const port = 9000;

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("combined"));
app.use(logNext)





app.post("/login", ((req, res)=>{
    const capital = req.body
    res.send(capital);
}))

app.get("/", (req, res)=>{
    res.send("Hello, World");
    // console.log(req.rawHeaders);
})

app.get("/about", (req, res)=>{
    res.send("<h1>This is the About endpoint</h1>")
})


app.get("/contact", (req, res)=>{
    res.send("<h1>This is the Contact endpoint</h1>")
})



app.listen(9000, () =>{
    console.log(`Server running on port ${port}.`);
})