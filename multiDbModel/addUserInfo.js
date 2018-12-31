var validator=require('validator')
var dbWrapper=require('./dbConn.js')


var fieldValidate=function(data){
    if((validator.isEmail(data.emailId))&&(validator.isMobilePhone(data.phoneNum.toString(),'en-IN'))){
        console.log("information is correct");

        //connectDB()
        verifyInDb(data) 
    }else{
        console.log("Invalid Information")
    }
}


var verifyInDb=function(data){
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
    verify:function(data){    
        fieldValidate(data) 
    }
}