var http=require('http')

var server=http.createServer(function(req,res){

    if(req.url==='/'){

        console.log("Home Page")
        server.close();

    }else if(req.url==='/AddTicketInfo'){
        console.log("Ticket Info")

        req.on('data',function(data){
            data=JSON.parse(data)
            console.log(data)
            var info={"productNum":data.productNum,"location":data.location,"problem":data.problem,"userId":data.userId}
            var addTicketInfo=require("./addTicketInfo.js");
            addTicketInfo.verify(info);         //moduleName.verify(data)
        })
        req.on('end',function(data){
            console.log(data)
        })

    }else if(req.url==='/AddUserInfo'){
        console.log("User Info")

        req.on('data',function(data){
            data=JSON.parse(data)
            var info={"emailId":data.email,"phoneNum":data.phone}
            var addUserInfo=require("./addUserInfo.js")
            addUserInfo.verify(info);   //moduleName.verify(data)
            
        })
        req.on('end',function(data){
            console.log(data)
        })
        
    }else if(req.url==='/UpdateTicketInfo'){

        req.on('data',function(data){
            data=JSON.parse(data)
            var info={"productNum":data.productnum,"userId":data.userId,"status":data.status}
            var updateTicketInfo=require("./updateTicketInfo.js");
            updateTicketInfo.verify(info);      //moduleName.verify(data)
            console.log("Ticket Info")
        })
        req.on('end',function(data){
            console.log(data)
        })
        
    }else if(req.url==='/UpdateUserInfo'){

        req.on('data',function(data){
            data=JSON.parse(data)
            var info={"emailId":data.email,"phoneNum":data.phone}
            var updateUserInfo=require("./updateUserInfo.js")
            updateUserInfo.verify(info);   //moduleName.verify(data)
            console.log("User Info")
        })
        req.on('end',function(data){
            console.log(data)

        })
        
    }else if(req.url==='/DeleteTicketInfo'){
        
        req.on('data',function(data){
            data=JSON.parse(data)
            var info={"ticketId":data.ticketId,"userId":data.userId}
            var deleteTicketInfo=require("./deleteTicketInfo.js");
            deleteTicketInfo.verify(info);          //moduleName.verify(data)
            console.log("Ticket Info")
        })
        req.on('end',function(data){
            console.log(data)

        })
        
    }else if(req.url==='/DeleteUserInfo'){
        
        req.on('data',function(data){
            data=JSON.parse(data)
            var info={"uid":data.uid,"phoneNum":data.phone}
            var deleteUserInfo=require("./deleteUserInfo.js")
            deleteUserInfo.verify(info);        //moduleName.verify(data)
            console.log("User Info")
        })
        req.on('end',function(data){
            console.log(data)

        })
        
    }
})
server.listen(8081)
console.log("listening at 8081")
