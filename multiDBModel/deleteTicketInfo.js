var DBWrapper = require('node-dbi').DBWrapper; 
var DBExpr = require('node-dbi').DBExpr; 
var validator=require('validator')
var dbWrapper=require('./dbConn.js')
var dbName="multiTicketDB"
var tabName="tickets"

var fieldValidate=function(data){
    if((validator.isNumeric(data.ticketId.toString()))&&(validator.isNumeric(data.userId.toString()))){
        console.log("information is correct");

        verifyInDb(data) 
    }else{
        console.log("Invalid Information")
    }
}

var deleteTicket=function(data){
    dbWrapper.remove(tabName, data.ticketId , function(err) {
        if(err) throw err;
        console.log("User information deleted Successfully")
    })
}

var verifyInDb=function(data){
    var select=dbWrapper.getSelect().from(tabName).where("ticketId=?",data.ticketId).where("userId=?",data.userId)
    dbWrapper.fetchAll(select,function(err,result){
        if(err) {
            console.log("Error",err); 
        }else if(result.length>=1){
            console.log("Ticket already exists")
            deleteTicket(data);
            dbWrapper.close(function(err){
                if(err) throw err;
                console.log("Connection closed successfully")
            })
        }
        else{
            console.log("No such Tickets exists")
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
