var DBWrapper = require('node-dbi').DBWrapper; 
var DBExpr = require('node-dbi').DBExpr; 
var validator=require('validator')
var dbWrapper=require('./dbConn.js')
var dbName="multiTicketDB"
var tabName="tickets"

var fieldValidate=function(data){
    if((validator.isNumeric(data.productNum.toString()))&&(validator.isAlpha(data.location))&&(validator.isAlpha(data.problem))&&(validator.isNumeric(data.userId.toString()))){
        console.log("information is correct");

        verifyInDb(data) 
    }else{
        console.log("Invalid Information")
    }
}


var insertTicket=function(data){
    dbWrapper.fetchAll("SELECT uid from ticketUser WHERE uid=?",[data.userId],function(err,result){
        if(err) throw err;
        else if(result.length=1){
            dbWrapper.insert(tabName, data , function(err) {
                if(  err ) {
                    /**Error if there is no user id exists in ticketUser table  */
                    console.log("Failed insertion");
                }
                else{
                    console.log("Inserted Ticket successfully");
                }
            });
            
        }else{
            console.log("failed")
            dbWrapper.close(function(err){
                if(err) throw err;
                console.log("Connection closed successfully")
            })
        }
    })
}

var verifyInDb=function(data){
    var select=dbWrapper.getSelect().from(tabName,'ticketId','userId').where("productNum=?",data.productNum).where("problem=?",data.problem)
    dbWrapper.fetchAll(select,function(err,result){
        if(err) {
            console.log("Error",err); 
        }else if(result.length>=1){
            console.log("Ticket already exists")
            dbWrapper.close(function(err){
                if(err) throw err;
                console.log("Connection closed successfully")
            })
        }
        else{
            insertTicket(data)
        }
    })
}
module.exports={
    verify:function(data){     
        fieldValidate(data)    
        
    }
}
