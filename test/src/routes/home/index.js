"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/main", ctrl.output.main);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.get("/buy1", ctrl.output.buy1);
router.get("/image", ctrl.process.image);
router.get("/mypage", ctrl.output.mypage);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);


module.exports = router;