var assert=require('assert')
var app=require('./app2.js')
var http=require('http')

describe("this is testing of server",function(){

    before(function(){
        app.listen(8108);
    })

    
    describe('/',function(){
        it("return 200 if true",function(){
            http.get('http://localhost:8108',function(res){
                assert.equal(res.statusCode,200,"unable to connect server")
            })
        })
        it('hello world in server',function(){
            http.get('http://localhost:8108',function(response){
                var data='';
                response.on('data',function(chunk){
                    data+=chunk;
                    console.log("data is",data)
                })
                response.on('end',function(){
                    assert.equal(data,"hello world")
                    // done();
                })
            })
        })
    })

    // after(function(){
    //     app.close();
    // })

})
