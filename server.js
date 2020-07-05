const express = require('express');
const bodyparser = require('body-parser');
const connection = require('./connection');
// const router = express.Router();

const app = express();

//connect to .ejs file

app.set('view engine',"ejs")

//connected to body parser for parsing the data
app.use(bodyparser.urlencoded({extended:true}));

//giving the access to all html files in that specific folder
app.use(express.static('login and signup html'));

//connecting to router and signup.js file

app.use('/signup',rootingpath = express.Router())
require('./signup')(rootingpath,connection);

app.use('/login',rootingpath = express.Router())
require('./login')(rootingpath,connection);

app.use('/delete',rootingpath=express.Router())
require('./deleting')(rootingpath,connection)

//connecting to port

app.listen(2000,(err)=>{
    if(err) throw err;
    console.log("port is working!")
});








