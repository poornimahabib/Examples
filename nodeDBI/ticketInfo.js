var DBWrapper = require('node-dbi').DBWrapper; 
var DBExpr = require('node-dbi').DBExpr; 
var validator=require('validator')

var fieldValidate=function(dbName,tabName,data){
    if((validator.isNumeric(data.productNum.toString()))&&(validator.isAlpha(data.location))&&(validator.isAlpha(data.problem))&&(validator.isNumeric(data.userId.toString()))){
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

var insertTicket=function(tabName,data){
    dbWrapper.fetchAll("SELECT uid from ticketUser WHERE uid=?",[data.userId],function(err,result){
        if(err) throw err;
        else if(result.length=1){
            //data.push(status);
            dbWrapper.insert(tabName, data , function(err) {
                if(  err ) {
                    /**Error if there is no user id exists in ticketUser table  */
                    console.log("Failed insertion");
                }
                else{
                    //var status={"status":1}
                    //console.log( 'ID : ' + dbWrapper.getLastInsertId() );
                    // dbWrapper.update(tabName,status,getLastInsertId(),function(err){
                    //     if(err) throw err;
                         console.log("Inserted Ticket successfully",result.insertId);
                    // })
                }
            });
            dbWrapper.close(function(err){
                if(err) throw err;
                console.log("Connection closed successfully")
            })
        }else{
            console.log("failed")
        }
    })
}

var updateTicketStatus=function(ticketId){
    console.log(ticketId)

}

var verifyInDb=function(tabName,data){
    var select=dbWrapper.getSelect().from(tabName,'ticketId','userId').where("productNum=?",data.productNum).where("problem=?",data.problem)
    dbWrapper.fetchAll(select,function(err,result){
        if(err) {
            console.log("Error",err); 
        }else if(result.length>=1){
            console.log("Ticket already exists",result)
            var no=[]
            no.push(result)
            no=JSON.stringify(no)
            //console.log(no)
            updateTicketStatus(no);
            dbWrapper.close(function(err){
                if(err) throw err;
                console.log("Connection closed successfully")
            })
        }
        else{
            insertTicket(tabName,data)
        }
    })
}
module.exports={
    verify:function(dbName,tabName,data){     
        fieldValidate(dbName,tabName,data)    
        
    }
}
