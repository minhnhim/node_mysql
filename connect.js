const mysql = require('mysql');
//const config = require('config');


const con = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: ''
})

con.connect((err)=> {
    if (err) throw err;
    console.log('connect succes!')
})
con.end();