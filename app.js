var sequ=require('./createConn')
var http=require('http')
var condition,prop;
var server=http.createServer(function(req,res){
    if(req.url==='/'){
        console.log("Home Page")
    }
    else if(req.url==='/getAll'){
        console.log("getAll")
        sequ.getAll("course")
    }
    else if(req.url==='/insert'){
        console.log("insert")
        var data={"course_title":"JAVA","duration":3,"created_by":"poornima","isDeleted":0}
        sequ.insert('course',data)
    }
    else if(req.url==='/update'){
        console.log("update")
        prop={duration:4}
        condition=1
        sequ.update("course",prop,condition)
    }
    else if(req.url==='/delete'){
        console.log("delete")
        condition=4
        sequ.delete("course",condition)
    }
    else if(req.url==='/remove'){
        console.log("remove")
        condition=1
        sequ.remove("course",condition)
    }
    else if(req.url==='/getByProperty'){
        console.log("getByProperty")
        condition="JAVA"
        sequ.getByProperty("course",condition)
    }
})
server.listen(3001)
console.log("listening")
