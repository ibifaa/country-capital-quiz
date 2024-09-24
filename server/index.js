import express from "express";
import cors from "cors";
// import pg from "pg";


// const db = new pg.Client({
//     user: "ib",
//     host: "localhost",
//     database:"teclight",
//     password:"tecBlog@@",
//     port:5432,
// });

// db.connect();

// db.query("SELECT * FROM capital", (err, res)=>{
//     if(err){
//         console.error("Error executing query", err.stack);
//     }else{
//         quiz = res.rows;
//     }

//     db.end();
// });

const app = express();

app.use(cors())

const port = 9000;


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