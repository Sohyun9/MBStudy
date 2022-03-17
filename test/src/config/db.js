const mysql = require("mysql");
const session = require('express-session');
const express = require('express');
const bodyParser = require('body-parser');
const MySQLStore = require('express-mysql-session');
const app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: "root",
    password: '1234',
    database: 'moble_shop'
});

app.use(session({
    httpOnly: true,
    key: 'my key',
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store : MySQLStore({
        host : db.host,
        user : db.user,
        password : db.password,
        port : db.port,
        database : db.database
    })
}));

db.connect(console.log("db 연결 성공"));

module.exports = db;