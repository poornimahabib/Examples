var mongodb=require('mongodb').MongoClient;
var url="mongodb://localhost/mongoDb";

mongodb.connect(url,{useNewUrlParser: true},function(err,db){
    if (err) throw err;
    var dbName=db.db('mongoDb');
    dbName.collection('users').find({}).toArray(function(err,res){
        if (err) throw err;
        console.log("data is ",res);
        db.close();
    });
});