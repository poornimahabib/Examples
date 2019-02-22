var sequ = require('./dbOperation.js')
var validator=require('./inputValidator.js')
var http = require('http')
var server = http.createServer(function (req, res) {

    if (req.url === '/') {
        console.log("Home Page")
    }

    else if (req.url === '/getAll') {
        console.log("getAll")
        sequ.getAll("c_course")
    }

    else if (req.url === '/insertCourse') {
        var info;
        console.log("insert")
        req.on('data', function (data) {
            info = JSON.parse(data)
            console.log(info);
            
        })
        req.on('end', function (data) {
            validator.isTitle(info.title).then(function(result){
                console.log("res of title",result)
                validator.isNarration(info.narration).then(function(result){
                    console.log("res narration",result)
                    validator.isLearningFormat(info.learningformat).then(function(result){
                        console.log("res learning",result)
                        sequ.insert('c_course',info).then(function(result){
                            console.log("res data",result)
                        },function(err){
                            console.log("error data",err)
                        })
                    },function(err){
                        console.log("error learning",err)
                    })
                },function(err){
                    console.log("error narration",err)
                })
            },function(err){
                console.log("error title",err)
            })
        })
    }

    else if (req.url === '/updateCourseTitle') {
        var info;
        console.log("update")
        req.on('data', function (data) {
            info = JSON.parse(data)
            
        })
        req.on('end', function (data) {
            validator.isTitle(info.old_course_title).then(function(result){
                console.log(result)
                validator.isTitle(info.new_course_title).then(function(result){
                    console.log(result)
                    var condition = { "course_title": info.old_course_title }
                    var values = { "course_title": info.new_course_title  }
                    sequ.update("c_course", values, condition).then(function(result){
                        console.log(result)
                    },function(err){
                        console.log(err)
                    })
                },function(err){
                    console.log("error",err)        
                })
            },function(err){
                console.log("error",err)    
            })
            
        })
    }

    else if (req.url === '/deleteCourse') {
        var info ;
        console.log("delete")
        req.on('data', function (data) {
            info = JSON.parse(data)
        })
        req.on('end', function (data) {
            validator.isTitle(info.course_title).then(function(result){
                var values = { "course_title": info.course_title }
                console.log("inininin", values)
                sequ.deleteData("c_course", values).then(function(result){
                    console.log(result)
                },function(err){
                    console.log(err)
                })
                console.log("reslut")
            },function*(err){
               console.log(err)
            })
            
        })
    }

    else if (req.url === '/removeCourse') {
        console.log("remove")
        var info;
        req.on('data', function (data) {
            info = JSON.parse(data)
            
        })
        req.on('end', function (data) {
            console.log((info.id).length)
            if((info.id).length===17){
                var values = { "id": info.id }
                sequ.remove("c_course", values).then(function(result){
                    console.log(result)
                },function(err){
                    console.log(err)
                })
            }else{
                console.log("invalid id")
            }
            
        })
    }

    else if (req.url === '/getCourses') {
        console.log("getByProperty")
        var info ;
        req.on('data', function (data) {
            info = JSON.parse(data)
        })
        req.on('end', function (data) {
            validator.isTitle(info.course_title).then(function(result){
                console.log("reslut")
                var values = { "course_title": info.course_title }
                console.log("inininin", values)
                sequ.getByProperty("c_course", values).then(function(result){
                    console.log(result)
                },function(err){
                    console.log(err)
                })
            },function(err){
                console.log(err)
            })
            
        })
    }

    else {
        console.log("error 404 page not found")
    }
})
server.listen(8001)
    console.log("listening at port 8001");

