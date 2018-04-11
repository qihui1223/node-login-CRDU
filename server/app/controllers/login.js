/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-04-04 14:55:24
 * @version $Id$
 */
var bcrypt = require('bcryptjs');
var db = require('../models/mysql');

const TITLE_REG = '登录';


let login = (req,res)=>{
    res.render("login",{title: TITLE_REG})
}


let loginPost = (req,res)=>{
    var username = req.body.name;
    var password = req.body.password;

    db.query("SELECT * FROM user WHERE name= '"+username+"' ", (err,result)=>{

        if(result[0] === undefined) {
            res.locals.error = '用户名不存在';
            res.render("login", {title: TITLE_REG});
            return;
        }else {
            
            const pwdMatchFlag =bcrypt.compareSync(password, result[0].password,);

            if(pwdMatchFlag) {

                res.locals.name = username;
                req.session.name = res.locals.name;  
                
                res.redirect("/user")
                return;
            } else{                   
                res.locals.error = '用户名或密码错误';
                res.render("login", {title: TITLE_REG});
                return;
            }

        }

    })
}

let logout = (req,res,next)=>{
    req.session.destroy();
    res.redirect('/login');
}

let signinRequired = (req,res,next)=>{
    const name =req.session.name

    if(name == undefined){
        return res.redirect('/login')
    }

    next();
}

module.exports = { login,loginPost,logout,signinRequired };

/*

//检查数据库里的密码和用户输入的密码是否匹配,user.password为数据库里存储的密码
const pwdMatchFlag =bcrypt.compareSync(password, user.password);
*/
