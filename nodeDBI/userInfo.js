var DBWrapper = require('node-dbi').DBWrapper; 
var DBExpr = require('node-dbi').DBExpr; 
var validator=require('validator')

var fieldValidate=function(dbName,tabName,data){
    if((validator.isEmail(data.emailId))&&(validator.isMobilePhone(data.phoneNum.toString(),'en-IN'))){
        console.log("information is correct");

        connectDB(dbName)
        verifyInDb(tabName,data) 
    }else{
        console.log("Invalid Information")
    }
}

var connectDB=function(dbName){
    var dbConnectionConfig = { 
        host: 'localhost', 
        user: 'root', 
        password: 'P@ssw0rd',
        database:dbName 
    };
    dbWrapper = new DBWrapper( 'mysql', dbConnectionConfig );
    dbWrapper.connect(function(err){
        if(err) {
            console.log("Invalid Database Name")
        }else{
            console.log("connected",dbName)
        }

    });
}

var verifyInDb=function(tabName,data){
    var id;
    var select=dbWrapper.getSelect().from(tabName,'uid').where("phoneNum=?",data.phoneNum)
    dbWrapper.fetchAll(select,function(err,result){
        if(err) throw err; 
        if(result.length>=1){
            console.log("User already exists")
            
            dbWrapper.close(function(err){
                if(err) throw err;
                //updateInfo()
                console.log("Connection closed successfully")
            })
        }
        else{
            dbWrapper.insert(tabName, data , function(err) {
                if(  err ) throw err;
                console.log( 'ID : ' + dbWrapper.getLastInsertId() );
            }); 
            dbWrapper.close(function(err){
                if(err) throw err;
                console.log("Connection closed successfully")
            })  
        }
    })
}
module.exports={
    verify:function(dbName,tabName,data){    
        fieldValidate(dbName,tabName,data) 
    }
}