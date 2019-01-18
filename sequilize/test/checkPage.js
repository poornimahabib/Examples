// var app=require('../app.js');
// var http=require('http');
// var assert=require('assert');

// describe("this is server test",function(){
//     before(function(){
//         app.listen(8001);
//     })

//     it("check wheather page is found or not",function(done){
//         http.get('http://localhost:8001',function(res){
//             if(assert.equal(res.statusCode,200)){
//                 console.log("hello")
//             }else{
//                 console.log("world")
//             }
//         })
//         done();
//     })

//     it("check wheather page is Home page is present",function(done){
//         http.get('http://localhost:8001/',function(res){
//             if(assert.equal(res,"Home Page")){
//                 console.log("hello")
//             }else{
//                 console.log("world")
//             }
//         })
//         done();
//     })
//     it("check wheather page is get all is present",function(done){
//         http.get('http://localhost:8001/getAll',function(res){
//             if(assert.equal(res,"Get All")){
//                 console.log("hello")
//             }else{
//                 console.log("world")
//             }
//         })
//         done();
//     })
//     it("check wheather page is insert is present",function(done){
//         http.get('http://localhost:8001/insert',function(res){
//             if(assert.equal(res,"insert")){
//                 console.log("hello")
//             }else{
//                 console.log("world")
//             }
//         })
//         done();
//     })
//     it("check wheather page is delete is present",function(done){
//         http.get('http://localhost:8001/delete',function(res){
//             if(assert.equal(res,"delete")){
//                 console.log("hello")
//             }else{
//                 console.log("world")
//             }
//         })
//         done();
//     })
//     it("check wheather page is update is present",function(done){
//         http.get('http://localhost:8001/update',function(res){
//             if(assert.equal(res,"update")){
//                 console.log("hello")
//             }else{
//                 console.log("world")
//             }
//         })
//         done();
//     })
//     it("check wheather page is remove is present",function(done){
//         http.get('http://localhost:8001/remove',function(res){
//             if(assert.equal(res,"remove")){
//                 console.log("hello")
//             }else{
//                 console.log("world")
//             }
//         })
//         done();
//     })
//     it("check wheather page is get by property is present",function(done){
//         http.get('http://localhost:8001/getByProperty',function(res){
//             if(assert.equal(res,"get by property")){
//                 console.log("hello")
//             }else{
//                 console.log("world")
//             }
//         })
//         done();
//     })

//     after(function(){
//         app.close();
//     })
// })