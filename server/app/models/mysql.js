/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-04-02 14:33:36
 * @version $Id$
 */

/*连接mysql数据库*/
let mysql = require('mysql');
let pool = mysql.createPool({
	host: '127.0.0.1',
	user: 'root',
	password: '123456',
	database: 'test',
})


let query = (sql,callback)=>{

	pool.getConnection((err,connection)=>{
		//use the connection
		connection.query(sql,(err,rows)=>{
			callback(err,rows)
			connection.release()
		})
	})
}


module.exports = { query };




/*
（1）创建连接池 createPool方法

      var pool = mysql.createPool(optioins);options参数包含createConnection方法中可以使用的各种属性，除此之外还有以下属性：createConnection，waitForConnections，connectionLimit，queueLimit。

（2）从连接池中取出连接。getConnection方法。如无连接可用则隐式的建立一个数据库连接。

      pool.getConnection(function(err,connection))。回调函数中的err为错误对象，connection为获取到的连接对象。

（3）当连接不再使用时，用connection对象的release方法将其归还到连接池中。connection.release();

（4）当一个连接不再需要使用且需要从连接池中移除时，用connection对象的destroy方法。connection.destroy(); 连接移除后，连接池中的连接数减一。

（5）当一个连接池不再需要使用时，用连接池对象的end方法关闭连接池。pool.end();
*/