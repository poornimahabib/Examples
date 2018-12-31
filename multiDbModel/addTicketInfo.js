var DBWrapper = require('node-dbi').DBWrapper; 
var DBExpr = require('node-dbi').DBExpr; 
var validator=require('validator')
var pool=require("./dbConn")
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
    Connection.query("SELECT uid from ticketUser WHERE uid=?",[data.userId],function(err,result){
        if(err) throw err;
        else if(result.length=1){
            Connection.query("INSERT INTO tickets SET ?", data , function(err) {
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
            Connection.close(function(err){
                if(err) throw err;
                console.log("Connection closed successfully")
            })
        }
    })
}

var verifyInDb=function(data){
    pool.getConnection(function(err,Connection){
        if(err) throw err
        Connection.query("SELECT ticketId,userId FROM tickets WHERE productNum=? AND problem=?",[data.productNum,data.problem],function(err,result,fields){
            if(err){
                console.log("Error",err); 
            }else if(result.length>=1){
                console.log("Ticket already exists")
            }
            else{
                insertTicket(data)
            }
        })
    }) 
}

module.exports={
    verify:function(data){     
        fieldValidate(data)    
    }
}
