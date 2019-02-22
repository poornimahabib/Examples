// Database Operations 
var Sequelize=require('sequelize')
var model;
var sequelize;
let isDeleted={"isDeleted":0}

var get=function(tableName,data,isDeleted){
        connCreate(tableName)
        return new Promise(function(resolve,reject){
            model.findOne({where:[data,isDeleted]}).then(function(user,err) {
                if(err){
                    reject("err",err)
                } else{
                    console.log(user)
                    if(user!==null){
                        resolve(user.get('id'))
                    }else{
                        reject("errr")
                    }
                }
            })
        })
    }

var connCreate=function(tableName){
    return new Promise(function(resolve,reject){
        sequelize=new Sequelize('carmel','root','root',{
            host: 'localhost',
            dialect: 'mysql',
            define: {
                timestamps: false
            }
        })
        model=sequelize.import('./models/'+tableName+".js")
        model.sync().then(function() {
            resolve(model)
        },(function(error) {
            reject(error)
        }))
    })
}
module.exports={
    
    

    insert:function(tableName,data){
        connCreate(tableName)
        console.log("data",data)
        return new Promise(function(resolve,reject){
            model.findOrCreate({where: data}).spread((result, created) => {
                if(created===true){
                    resolve(result)
                }
                else{
                    reject(result)
                }
            }) 
        })
    },

    update:function(tableName,value,condition){
        connCreate(tableName)
        console.log("values are ",value,"condition is",condition)
        return new Promise(function(resolve,reject){
            get(tableName,condition,isDeleted).then(function(result) {
                model.update(value,{where:{id:result}}).then(function(data,err){
                    if (data === null) {
                        reject(err)
                    } else {
                        resolve(data)
                    }
                },function(err){
                    reject(err)
                    console.log("rejected by promise",err)
                })
            });      
        })
    },

    deleteData:function(tableName,data){
        connCreate(tableName)
        console.log("data",data)
        return new Promise(function(resolve,reject){
            get(tableName,data,isDeleted).then(function(result) {
                model.update({"isDeleted":1},{where:{id:result}}).then(function(data,err){
                    if (data === null) {
                        reject("null",err)
                    } else {
                        resolve(data)
                    }
                },function(err){
                    console.log("rejected by promise",err)
                    reject(err)
                })
            });    
        })
    },
    
    remove:function(tableName,data){
        connCreate(tableName)
        let isDeleted={"isDeleted":1}
        return new Promise(function(resolve,reject){
            get(tableName,data,isDeleted).then(function(result){
                model.destroy({ where: { id: result } }).then(function (data, err) {
                    console.log(data)
                    if (data=== null) {
                        reject(err)
                    } else {
                        resolve(data)
                    }
                })
            },function(err){
                console.log("rejected by promise")
                reject(err)
            })
        })
    },

    getAll:function(tableName){
        connCreate(tableName)
        return new Promise(function(resolve,reject){
            model.findAll({where:isDeleted}).then(function(result,err){
                if(err){
                    reject ("error",err);
                }else{
                    if(result.length===null){
                        reject("err",err)
                    }else{
                        resolve(result)
                    }
                }     
            })
        })
    },

    getByProperty:function(tableName,data){
        connCreate(tableName)
        return new Promise(function(resolve,reject){
            model.findAll({where:[data,isDeleted]}).then(result=>{
                if(result.length===null){
                    reject(err)
                }else{
                    resolve(result)
                } 
            })
        })
    }
}