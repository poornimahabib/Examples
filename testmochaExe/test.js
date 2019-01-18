var assert=require('assert');
var app=require('./app.js')

describe("this is a multiply test case",function(){
    it('multiply()',function(){
        assert.equal(app.multiply(5,2),10,"error in multiply")
    })
})