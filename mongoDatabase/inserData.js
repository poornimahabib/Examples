var mongodb=require('mongodb').MongoClient;
var fs=require('fs');
var url="mongodb://localhost/mongoDb";
var myData=[
    {name:"Poornima",location:"Hubli"},
    {name:"Punnu",location:"Hubli"},
    {name:"Poo",location:"Hubli"}
]

mongodb.connect(url,{useNewUrlParser: true},function(err,db){
    if (err) throw err;
    var dbName=db.db('mongoDb');
    var tabName='users'
    dbName.createCollection(tabName,function(err,db){
        if (err) throw err;
        console.log("collection created");

        fs.readFile("./user.json","utf8",function(err,data){
            if (err) throw err;
            data=JSON.parse(data);

            dbName.collection(tabName).insertMany(data,function(err,res){
                if (err) throw err;
                console.log("1 data inserted ",res.ops);
                //res.close();
            });
            dbName.collection(tabName).find({location:"hub"}).toArray(function(err,res){
                if (err) throw err;
                console.log("Data in collection are \n",res+"\n");
            })
        });
    });
});