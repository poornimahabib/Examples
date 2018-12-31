var DBWrapper = require('node-dbi').DBWrapper; 
var DBExpr = require('node-dbi').DBExpr; 
var dbConnectionConfig = { 
    host: 'localhost', 
    user: 'root', 
    password: 'P@ssw0rd', 
    database: 'ticketDB' 
};
dbWrapper = new DBWrapper( 'mysql', dbConnectionConfig );
dbWrapper.connect();
console.log("connected")

dbWrapper.fetchAll('SELECT * FROM ticketTable', null, function(err, result) {
    if( err ) throw err;
        console.dir(result);
    // "result" is an Array with a hash for every returned row
} );

var JohnData = { productNum: 41144, phoneNum: 9988843328, emailId: 'npm@node.com', location: 'chennai',problem:'nano',status:3 };
dbWrapper.insert('ticketTable', JohnData , function(err) {
    if( ! err )
        console.log( 'John ID : ' + dbWrapper.getLastInsertId() );
    // John has been inserted in our table, with its properties safely escaped
} );
dbWrapper.close();