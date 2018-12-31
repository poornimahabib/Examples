var mysql = require('mysql');
 
var connection = mysql.createConnection(
    {
      host     : 'localhost',
      user     : 'root',
      password : 'P@ssw0rd',
      database : 'multiTicketDB'
    }
);
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});
 
/* Begin transaction */
connection.beginTransaction(function(err) {
  if (err) { throw err; }
  var data={"emailId":"abc@example.com","phoneNum":"9916198711"}
  connection.query('INSERT INTO ticketUser SET ?',data , function(err, result) {
    if (err) { 
      connection.rollback(function() {
        throw err;
      });
    }
 
    var log = result.insertId;
 
    connection.query('INSERT INTO ticket SET ?', log, function(err, result) {
      if (err) { 
        connection.rollback(function() {
          throw err;
        });
      }  
      connection.commit(function(err) {
        if (err) { 
          connection.rollback(function() {
            throw err;
          });
        }
        console.log('Transaction Complete.');
        connection.end();
      });
    });
  });
});
/* End transaction */
