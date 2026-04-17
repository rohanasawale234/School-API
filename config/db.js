const mysql = require("mysql2")

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "rohan007",
    database : "school_api",
})

db.connect((err) => {
    if(err){
        console.log("DB connection failed: ", err)
    } else {
        console.log("Connected to MySql")
    }
})

module.exports = db;