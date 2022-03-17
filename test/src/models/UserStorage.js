"use strict";

const db = require("../config/db");

class UserStorage {
    static getUserInfo(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM member WHERE id = ?;";
            db.query(query, [id], (err, data) => {
                if (err) reject(`${err}`);
                resolve(data[0]);
            });
        });
    }

    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "insert into member(id, pwd, name, address, gender, phone) values(?,?,?,?,?,?);";
            db.query(query, [userInfo.id, userInfo.pwd, userInfo.name, userInfo.address, userInfo.gender, userInfo.phone],
                (err) => {
                    var id = userInfo.id;
                    db.query("CREATE TABLE "+id+"_buy"+" (info CHAR(100), sum int(30))", function (err, result) {
                        if (err) throw err;
                    })
                    db.query("CREATE TABLE "+id+"_basket"+" (info CHAR(100), sum int(30))", function (err, result) {
                        if (err) throw err;
                    })
                    if (err) reject(`${err}`);
                    resolve({ success: true });
                });
        });
    }
    
    static async imageLode(image_name) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM image WHERE image_name = ?";
            db.query(query, [image_name], (err, data) => {
                if (err) reject(`${err}`);
                resolve(data[0].image);
            })
        })
    }
}

module.exports = UserStorage;