var assert = require("assert")
var dbs=require("../dbOperation.js")
var chai = require("chai");
var validator=require('../inputValidator.js');
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();

describe("test using chai as promised for getAll",function(){
    it("hello test1",function(done){
        dbs.getAll("c_user").should.be.fulfilled.notify(done);
    })
})

describe("test using chai as promised for insert Course",function(){
    it("hello test2",function(done){
        var info = {
            "course_title": "mac os",
            "course_narration": "mac os strong",
            "learning_format": "self",
        }
        dbs.insert("c_course",info).should.be.fulfilled.notify(done);
    })
})

describe("test using chai as promised for update",function(){
    it("hello test3",function(done){
        var condition = { "section_title": "mac os","deleted_by": 0,"deleted_time": 0}
        var info = { "section_title": "hello" }
        dbs.update("c_section",info,condition).should.be.fulfilled.notify(done);
    })
})

describe("test using chai as promised for delete",function(){
    it("hello test4",function(done){
        var info = { "course_title": "mac os" }
        dbs.deleteData("c_course",info).should.be.fulfilled.notify(done);
    })
})

describe("test using chai as promised for remove",function(){
    it("hello test5",function(done){
        var info = { "id":"bns47h5fjjr30srj7" }
        dbs.remove("c_course",info).should.be.fulfilled.notify(done);
    })
})

describe("test using chai as promised for getbyProperty",function(){
    it("hello test6",function(done){
        var info = { "course_title": "mac" }
        dbs.getByProperty("c_course",info).should.be.fulfilled.notify(done);
    })
})

// Rejected Promises

describe("test using chai as promised for getAll",function(){
    it("hello test1",function(done){
        dbs.getAll("c_user").should.be.rejected.notify(done);
    })
})

describe("test using chai as promised for insert",function(){
    it("hello test2",function(done){
        var info = {
            "org_id": 5,
            "course_title": "htmlll",
            "course_narration": "mac os strong",
            "learning_format": 2,
            "course_status": 0,
            "isDeleted": 0,
            "last_modified_by": 0,
            "last_modified_time": 0,
            "deleted_by": 0,
            "deleted_time": 0
        }
        dbs.insert("c_course",info).should.be.rejected.notify(done);
    })
})

describe("test using chai as promised for update",function(){
    it("hello test3",function(done){
        var condition = { "course_title": "node js"}
        var info = { "course_status": 3 }
        dbs.update("c_course",info,condition).should.be.rejected.notify(done);
    })
})

describe("test using chai as promised for delete",function(){
    it("hello test4",function(done){
        var info = { "course_title": "JAVA" }
        dbs.deleteData("c_course",info).should.be.rejected.notify(done);
    })
})

describe("test using chai as promised for remove",function(){
    it("hello test5",function(done){
        var info = { "id":"bns47h4sbjr1hphjd" }
        dbs.remove("c_course",info).should.be.rejected.notify(done);
    })
})

describe("test using chai as promised for getbyProperty",function(){
    it("hello test6",function(done){
        var info = { "course_title": "mac" }
        dbs.getByProperty("c_course",info).should.be.rejected.notify(done);
    })
})