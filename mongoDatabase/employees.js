var MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost/mongoDatabase";  

MongoClient.connect(url, function(err, db) {  
    if (err) throw err; 
    var dbase = db.db("mongoDatabase"); 
    dbase.createCollection("employees", function(err, res) {  
        if (err) throw err;  
        console.log("Collection is created!");  
        db.close();  
    });  
});  