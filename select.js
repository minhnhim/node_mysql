const db = require('./lib/db')

const con =db.connect()

let sql = ''

sql = 'SELECT * FROM users';
con.query(sql,(err,results) => {
    results.forEach((user) => {
        console.log(user.email)
    });
})

////sql2
//sql = 'SELECT * FROM users WHERE ?'
//let params ={}
//params = { id: 2}
//
//con.query(sql,params, (err,results)=> {
//    if (err) throw err;
//    let user = results[0];
//    console(`${user.first_name} ${user.last_name}`)
//})
//
//con.end()