var Sequelize=require('sequelize')
var course;
var sequelize;
var connCreate=function(tableName){
    sequelize=new Sequelize('ticket','root','P@ssw0rd',{
        host: 'localhost',
        dialect: 'mysql',
    })
    sequelize.authenticate().then(()=>{
        console.log("connection established successfully")
    })
    .catch(err=>{
        console.log("error in connection",err)
    })
    course=sequelize.define(tableName,{
        course_title:{
            type:Sequelize.STRING
        },
        duration:{
            type:Sequelize.INTEGER(10)
        },
        created_by:{
            type:Sequelize.STRING
        },
        isDeleted:{
            type:Sequelize.SMALLINT(2)
        }
    })
    console.log(sequelize.isDefined(tableName))
    if(sequelize.isDefined(tableName)){
        console.log("Table exists")
    }else{
        course.sync()
        console.log("table created")
    }    
}


module.exports={
    insert:function(tableName,data){
        connCreate(tableName)
        console.log("data",data)
        course.create(data)
    },
    update:function(tableName,property,condition){
        connCreate(tableName)
        console.log(property)
        course.update({ property },{ where: { id:condition} })
    },
    delete:function(tableName,condition){
        connCreate(tableName)
        course.update({isDeleted:1},{where:{id:condition}})
        console.log("deleted")
    },
    remove:function(tableName,condition){
        connCreate(tableName)
        course.destroy({where:{id:condition}})
        console.log("removed")

    },
    getAll:function(tableName){
        connCreate(tableName)
        course.findAll().then(courses=>{
            console.log(courses)
        })
    },
    getByProperty:function(tableName,condition){
        connCreate(tableName)
        course.findAll({where:{course_title:condition}}).then(courses=>{
            if(courses.length>1){
                console.log("More than one courses",courses)
            }else{
                console.log("Only one course",courses)
            }
            
        })
    }
}
