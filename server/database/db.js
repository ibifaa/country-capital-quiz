import pg from "pg";


 export const  db = new pg.Client({
    user: "ib",
    host: "localhost",
    database:"teclight",
    password:"dontThinkOfIt",
    port:5432,
});

db.connect()
.then(()=>{
    console.log('Connected to PostgreSQL database');

}).catch((err)=>{
    console.error('Error connecting to PostgreSQL database', err);
})




