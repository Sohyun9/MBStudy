"use strict";

const User = require("../../models/User");
const fs = require('fs');

const output = {
    home: (req, res) => {
        res.render("home/main");
    },
    login: (req, res) => {
        res.render("home/login");
    },
    main: (req, res) => {
        res.render("home/main2")
    },
    register: (req, res) => {
        res.render("home/member");
    },
    buy1: (req, res) => {
        res.render("home/buy1");
    },
    mypage: (req, res) => {
        res.render("home/mypage");
    }
};

const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },
    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
    },
    image: async (req, res) => {
        const user = new User(req.body);
        const response =  fs.readFile(user.imageLode());
        return res.json(response);
    }
};

module.exports = {
    output,
    process,
};
