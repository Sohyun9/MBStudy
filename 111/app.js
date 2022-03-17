const http = require("http");
const request = require('request');

const express = require("express");
const req = require("express/lib/request");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/test', function (request, res, next) {
    var options = {
        host:"localhost",
        path:"/api/member/idtest",
        port:"3000",
        method:"POST",
        headers: {}
    };
    
   var resData = '';
   var req = http.request(options, function(res) {
       res.on('data', function(chunk){
           resData += chunk;
       });
       
       res.on('end', function(){
           console.log(resData);
       });
   });

   options.headers['Content-Type'] = 'application/JSON';
   req.data = "file 데이터 저장";
   options.headers['Content-Length'] = req.data.length;

   req.on('error', function(err) {
       console.log(err.message);
   });

   req.write(req.data);
   req.end();
})

module.exports = app;