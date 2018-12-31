var mongodb=require('mongodb').MongoClient;
var url="mongodb://localhost/mongoDatabase";

mongodb.connect(url,function(err,db){
    if (err) throw err;
    console.log("DB created",db);
})