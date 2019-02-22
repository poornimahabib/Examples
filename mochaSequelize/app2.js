var sequ = require('./dbOperation.js')
var http = require('http')
var server = http.createServer(function (req, res) {

    if (req.url === '/') {
        console.log("Home Page")
    }

    else if (req.url === '/getAll') {
        console.log("getAll")
        sequ.getAll("c_course")
    }

    else if (req.url === '/insert') {
        console.log("insert")
        req.on('data', function (data) {
            data = JSON.parse(data)
            var info = {
                "org_id": data.org_id,
                "course_title": data.course_title,
                "course_narration": data.course_narration,
                "learning_format": data.learning_format,
                "course_status": 0,
                "isDeleted": 0,
                "last_modified_by": 0,
                "last_modified_time": 0,
                "deleted_by": 0,
                "deleted_time": 0
            }
            sequ.insert('c_course', info).then(function(result){
                console.log(result)
            },function(err){
                console.log(err)
            })
        })
        req.on('end', function (data) {
        })
    }

    else if (req.url === '/update') {
        console.log("update")
        req.on('data', function (data) {
            data = JSON.parse(data)
            var condition = { "course_title": data.course_title }
            var info = { "course_status": data.course_status }
            sequ.update("c_course", info, condition).then(function(result){
                console.log(result)
            },function(err){
                console.log(err)
            })
        })
        req.on('end', function (data) {
        })
    }

    else if (req.url === '/delete') {
        console.log("delete")
        req.on('data', function (data) {
            data = JSON.parse(data)
            var info = { "course_title": data.course_title }
            console.log("inininin", info)
            sequ.delete("c_course", info).then(function(result){
                console.log(result)
            },function(err){
                console.log(err)
            })
        })
        req.on('end', function (data) {
        })
    }

    else if (req.url === '/remove') {
        console.log("remove")
        req.on('data', function (data) {
            data = JSON.parse(data)
            var info = { "id": data.id }
            sequ.remove("c_course", info).then(function(result){
                console.log(result)
            },function(err){
                console.log(err)
            })
        })
        req.on('end', function (data) {
        })
    }

    else if (req.url === '/getByProperty') {
        console.log("getByProperty")
        req.on('data', function (data) {
            data = JSON.parse(data)
            var info = { "course_title": data.course_title }
            sequ.getByProperty("c_course", info).then(function(result){
                console.log(result)
            },function(err){
                console.log(err)
            })
        })
        req.on('end', function (data) {
        })
    }

    else {
        console.log("error 404 page not found")
    }
})
server.listen(8001)
    console.log("listening at port 8001");

