// JavaScript source code
var express = require('express');
var app = express();

var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

var con = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'fyp'
});

var server = app.listen(80, function(){
    var host = server.address().address
    var port = server.address().port
});

con.connect(function(error){
    if(error) console.log(error);
    else console.log("connected");
});