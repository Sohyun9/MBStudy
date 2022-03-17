"use strict";

const express = require("express");
const res = require("express/lib/response");
const app = express();
const http = require('http');

const port = 4002;

app.listen(port, () => {
    console.log("서버 가동");
});

    // console.log("4002");
    // var body = req.body;
    // console.log(body);

    // var id = req.body;
    // var password = req.body;

    // console.log(id + "||||" + password);
    // res.json({id: body.id , password: body.password});

    // http
    //     .request("http://localhost:3000/api/member/idtest", (resp) => {
    //         let data = "";

    //         console.log("API 연결 성공");

    //         resp.on("data", chunk => {
    //             data += chunk;
    //         });

    //         resp.on("end", () => {
    //             console.log(data);
    //         })
    //     })

    //     .on('error', (error) => {
    //         console.log(error);
    //     })