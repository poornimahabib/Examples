var http=require('http')
var databaseName="multiTicketDB"
var user="ticketUser"
var ticket="tickets"

var server=http.createServer(function(req,res){

    if(req.url==='/'){

        console.log("Home Page")
        server.close();

    }else if(req.url==='/AddTicketInfo'){
        console.log("Ticket Info")

        req.on('data',function(data){
            data=JSON.parse(data)
            var info={"productNum":data.productNum,"location":data.location,"problem":data.problem,"userId":data.userId}
            var ticketInfo=require("./ticketInfo.js");
            ticketInfo.verify(databaseName,ticket,info);
        })
        req.on('end',function(data){
            console.log(data)
        })

    }else if(req.url==='/AddUserInfo'){
        console.log("User Info")

        req.on('data',function(data){
            data=JSON.parse(data)
            var info={"emailId":data.email,"phoneNum":data.phone}
            var userInfo=require("./userInfo.js")
            userInfo.verify(databaseName,user,info);   //verify(database Name,tableName,data)
            
        })
        req.on('end',function(data){
            console.log(data)
            // res.writeHead(200, "Content-Type: application/json");
            // res.write(data)
        })
        
    }else if(req.url==='/UpdateTicketInfo'){

        req.on('data',function(data){
            data=JSON.parse(data)
            var info={"productNum":data.productnum,"userId":data.userId,"status":data.status}
            var ticketInfo=require("./ticketInfo.js");
            ticketInfo.verify(databaseName,ticket,info);
            console.log("Ticket Info")
        })
        req.on('end',function(data){
            console.log(data)
        })
        
    }else if(req.url==='/UpdateUserInfo'){

        req.on('data',function(data){
            data=JSON.parse(data)
            var info={"emailId":data.email,"phoneNum":data.phone}
            var userInfo=require("./userInfo.js")
            userInfo.verify(databaseName,user,info);   //verify(database Name,tableName,data)
            console.log("User Info")
        })
        req.on('end',function(data){
            console.log(data)

        })
        
    }else if(req.url==='/DeleteTicketInfo'){
        
        req.on('data',function(data){
            data=JSON.parse(data)
            var info={"ticketId":data.ticketId,"userId":data.userId}
            var ticketInfo=require("./ticketInfo.js");
            ticketInfo.verify(databaseName,ticket,info);
            console.log("Ticket Info")
        })
        req.on('end',function(data){
            console.log(data)

        })
        
    }else if(req.url==='/DeleteUserInfo'){
        
        req.on('data',function(data){
            data=JSON.parse(data)
            var info={"uid":data.uid,"emailId":data.email}
            var userInfo=require("./userInfo.js")
            userInfo.verify(databaseName,user,info);   //verify(database Name,tableName,data)
            console.log("User Info")
        })
        req.on('end',function(data){
            console.log(data)

        })
        
    }
})
server.listen(8081)
console.log("listening at 8081")
