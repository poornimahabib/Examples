'use strict'
var app=require('../app.js');
var http=require('http');
var assert=require('assert');

describe("this is server test",function(){
    before(function(){
        app.listen(8001);
    })

    it("check wheather page is found or not",function(done){
        http.get('http://localhost:8001',function(res){
           assert.equal(res.statusCode,200)
        })
        done();
    })

    after(function(){
        app.close();
    })
})