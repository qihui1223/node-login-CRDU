/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-04-10 11:09:23
 * @version $Id$
 */
var express = require('express');
var router = express.Router();

var Index = require('../app/controllers/index')
var Login = require('../app/controllers/login')
var Register = require('../app/controllers/register')
var User = require('../app/controllers/user')


module.exports = function() {

	//index
	router.get("/", Index.index);

	//sign
	router.get("/login", Login.login);
	router.get("/register", Register.register);
	router.get("/logout", Login.logout);
	router.post("/login", Login.loginPost);
	router.post("/register", Register.regPost);
	
	
	//user
	router.get("/user", User.user);
	router.get("/user/add", Login.signinRequired, User.toAdd);
	router.get("/user/del/:id", Login.signinRequired, User.del);
	router.get("/user/toUpdate/:id", Login.signinRequired, User.toUpdate);
	router.get("/user/search", User.search);

	router.get("/123",Login.signinRequired)

	router.post("/user/add", Login.signinRequired, User.add);
	router.post("/user/update", Login.signinRequired, User.update);
	router.post("/user/search", User.search);
	

	return router;
}