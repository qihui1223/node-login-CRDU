/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-04-08 13:57:37
 * @version $Id$
 */
var bcrypt = require('bcryptjs');
var db = require('../models/mysql');

const saltRounds = 10; //密码等级 最高为10级
const TITLE_REG = '注册页面';
                                

let register = (req,res)=>{
    res.render("register",{title: TITLE_REG});
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    


let regPost = (req,res)=>{
    var username = req.body.name;
    var password = req.body.password;

    db.query("SELECT COUNT(0) FROM user WHERE name= '"+username+"' ", (err,result)=>{
        if (result[0] != null) {
            err = '用户名已存在';
        }

        if (err) {
            res.locals.error = err;
            res.render('register', { title: TITLE_REG });
            return;
        }

        bcrypt.hash(password,saltRounds,function(err,hash){
            if(err) {
                console.log(err);
            }

            db.query("insert into user(name,password) values('"+ username + "','"+ hash +"')", (err,result)=>{
                if(err) {
                    console.log(err)
                }   
                res.locals.success = '注册成功';
                res.render('register', { title: TITLE_REG }); 
            })
        })
    })
}


module.exports = { register, regPost };