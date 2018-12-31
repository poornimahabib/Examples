var validator=require('validator');
var args=require('yargs').argv;

if(args.cmd==='userInfo'){
        var userInfo=require("./userInfo.js");
        var info={"emailId":args.email,"phoneNum":args.phone}
        userInfo.verify("multiTicketDB","ticketUser",info);   //verify(database Name,tableName,data)
       // console.log("Result is ",res)  
}

else if(args.cmd==='ticketInfo'){
        var info={"productNum":args.productnum,"location":args.location,"problem":args.problem,"userId":args.userId}
        var ticketInfo=require("./ticketInfo.js");
        ticketInfo.verify("multiTicketDB","tickets",info);
        //console.log("Result is",res1)
}