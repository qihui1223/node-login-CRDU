/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-04-04 14:55:24
 * @version $Id$
 */
var db = require('../models/mysql');


/**
 * 查询所有列表页
 */
let user = (req,res)=>{
    db.query('select * from person', (err,rows)=>{
        if(err) {
            console.log(err)
        }
        res.render('user',{title: '人员管理', data: rows})
    }) 
}


/**
*增
*/

let toAdd = (req,res)=>{
    res.render('add',{title: '增加'})
}

let add = (req,res)=>{
    var name = req.body.name;
    var age = req.body.age;
    var professional = req.body.professional;
    db.query("insert into person(name,age,professional) values('"+ name + "',"+ age + ",'"+ professional +"')",(err,rows)=>{
        if(err) {
            res.send('新增失败: ' + err)
        }

        res.redirect('/user')
    })
}


/**
*删
*/
let del = (req,res)=>{
    var id = req.params.id;
    db.query("delete from person where id=" + id,(err,rows)=>{
        if(err) {
            res.end("删除失败" + err)
        }

        res.redirect('/user')
    })
}



/**
*改
*/

let toUpdate = (req,res)=>{
    var id = req.params.id;
    db.query("select * from person where id=" + id, (err,rows)=>{
        if(err) {
            res.end('修改页面跳转失败' + err)
        }
        res.render("update",{data: rows})
    }) 
}



let update = (req,res)=>{
    var id = req.body.id;
    var name = req.body.name;
    var age = req.body.age;
    var professional = req.body.professional;

    db.query("update person set name='" + name + "',age='" + age + "',professional='" + professional +"' where id=" + id, (err,row)=>{
        if(err) {
            res.end('修改失败' + err)
        }
        res.redirect('/user')
    })
}



/**
 * 查询
 */

let search = (req,res)=>{
    var name = req.body.s_name;
    var age = req.body.s_age;
    var professional = req.body.s_professional;

    var sql = "select * from person";

    if (name) {
        sql += " and name like '%" + name + "%' ";
    }
    if (age) {

        sql += " and age=" + age + " ";
    }
    if (professional) {
        sql += " and professional like '%" + professional + "%' ";
    }
    sql = sql.replace("and","where");
    db.query(sql, function (err, rows) {
        if (err) {
            res.end("查询失败：", err)
        } else {
            res.render("user", {title: '人员管理', data: rows});
        }
    });
}


module.exports = { 
    user,
    toAdd,
    add,
    del,
    toUpdate,
    update,
    search,
};