var mysql = require('mysql');
  var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password: 'thirteeneer',
    database: 'EmpData'
  });

  connection.connect();

  connection.query('SELECT * from User', function(err, rows, fields) {
    if (!err) {
      console.log('The solution is: ', rows);
    }
    else {
      console.log('Error while performing Query.');
    }

  });

  connection.end();
