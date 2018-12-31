var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : 'P@ssw0rd',
  database        : 'multiTicketDB'
});    
    
module.exports=pool