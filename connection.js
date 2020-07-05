const mysql = require('mysql');
const path = require('path');

let con = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"password",
	database:"signup",
	multipleStatements:true
})

con.connect((err)=>{
	if(err) throw err;
	console.log("connected to database!");
})

var table = "create table if not exists stable(firstname varchar(30) not null,lastname varchar(30) not null,username varchar(30) not null,password varchar(30) not null)";

con.query(table,(err,rows)=>{
	if (err) throw err;
	console.log("table is created!");
});


module.exports = con;




