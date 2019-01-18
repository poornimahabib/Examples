var app=require('../app.js');
var dbhelper=require('../dbHelper.js');
var http=require('http');
var assert=require('assert');
var sequelize=require('sequelize')


describe("this is insert test",function(){
    before(function(){
        return require('../models/c_course.js').sequelize.sync();
    })

    it("describes the insert",function(done){
        // assert.ok(require('../models/c_course.js'));
        assert.ok( dbhelper.getAll("c_user"))
        
        done()

    })
})