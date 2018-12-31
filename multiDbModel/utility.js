var conn=require("./dbConn")


module.exports={
    insert:function(tabName,data){
        conn.getConnection(function(err,connection){
            if(err)throw err
            connection.query("INSERT INTO ?? SET ?",[tabName,data],function(err,result,fields){
                if(err)throw err
                console.log("Inserted Successfully")
            })
        })
    },
    select:function(tabName,data){
        conn.getConnection(function(err,connection){
            if(err)throw err
            connection.query("SELECT * FROM ?? WHERE SET ?",[tabName,data],function(err,result,fields){
                if(err)throw err
                console.log("Ticket Already Exists")
            })
        })
    },
    delete:function(tabName,data){
        conn.getConnection(function(err,connection){
            if(err)throw err
            connection.query("INSERT INTO ?? SET ?",[tabName,data],function(err,result,fields){
                if(err)throw err
                console.log("Inserted Successfully")
            })
        })
    },
    update:function(tabName,data){
        conn.getConnection(function(err,connection){
            if(err)throw err
            connection.query("INSERT INTO ?? SET ?",[tabName,data],function(err,result,fields){
                if(err)throw err
                console.log("Inserted Successfully")
            })
        })
    }
}