const db = require('./lib/db')

const con =db.connect()

const first_name = 'pham';
const last_name = 'ninh'
const id = 1
let params = [first_name,last_name,id]

const sql ='UPDATE users SET first_name = ? , last_name = ? WHERE id = ?'
con.query(sql,)

