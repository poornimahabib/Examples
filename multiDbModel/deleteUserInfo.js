var DBWrapper = require('node-dbi').DBWrapper; 
var DBExpr = require('node-dbi').DBExpr; 
var validator=require('validator')
var dbName="multiTicketDB"
var tabName="ticketUser"

var fieldValidate=function(data){
    if((validator.isNumeric(data.uid.toString()))&&(validator.isMobilePhone(data.phoneNum.toString(),'en-IN'))){
        console.log("information is correct");
        
        connectDB()
        verifyInDb(data) 
    }else{
        console.log("Invalid Information")
    }
}

var connectDB=function(){
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
var deleteUser=function(dataId){
    dbWrapper.remove(tabName, "uid=?",dataId , function(err) {
        if(err) throw err;
        console.log("User information deleted Successfully")
    } )

}
var verifyInDb=function(data){
    var id;
    var select=dbWrapper.getSelect().from(tabName,'uid').where("phoneNum=?",data.phoneNum)
    dbWrapper.fetchAll(select,function(err,result){
        if(err) throw err; 
        if(result.length>=1){
            console.log("User already exists")
            deleteUser(data.uid)
            
            dbWrapper.close(function(err){
                if(err) throw err;
                //updateInfo()
                console.log("Connection closed successfully")
            })
        }
        else{
            console.log("No such User exists")
            dbWrapper.close(function(err){
                if(err) throw err;
                console.log("Connection closed successfully")
            })  
        }
    })
}
module.exports={
    verify:function(data){    
        fieldValidate(data) 
    }
}