var http=require('http');

var server=http.createServer(function(req,res){
    res.writeHead(200,{ 'Content-Type': 'text/plain' })
    res.end("hello world")
})

exports.listen = function (port) {
    server.listen(port);
  };
  
  exports.close = function () {
    server.close();
  };

// module.exports={
//     listenToServer:function(port){
//         server.listen(port)
//         //console.log("listening")
//     },

//     closeServer:function(){
//         return server.close();
//         console.log("close server");
//     }
// }