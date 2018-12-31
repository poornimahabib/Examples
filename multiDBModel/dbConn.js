var DBWrapper = require('node-dbi').DBWrapper; 
var DBExpr = require('node-dbi').DBExpr; 
var dbName="multiTicketDB"
    
    
    var dbConnectionConfig = { 
        host: 'localhost', 
        user: 'root', 
        password: 'P@ssw0rd',
        database:dbName ,
        connectionLimit:5
    };


    dbWrapper = new DBWrapper( 'mysql', createPool(dbConnectionConfig) );
    dbWrapper.connect(function(err){
        if(err) {
            console.log("Invalid Database Name")
        }else{
            console.log("connected",dbName)
        }

    });


module.exports=dbWrapper