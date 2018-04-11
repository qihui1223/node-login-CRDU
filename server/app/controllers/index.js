var db = require('../models/mysql');
const TITLE_REG = '首页';


/* GET index listing. */
let index = function (req,res) {
	res.render("index", {title: TITLE_REG})
}

module.exports = { index }