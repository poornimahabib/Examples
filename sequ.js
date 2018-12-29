var Sequelize=require('sequelize')

var sequelize=new Sequelize('ticket','root','P@ssw0rd',{
    host: 'localhost',
    dialect: 'mysql',
})
sequelize.authenticate().then(()=>{
    console.log("connection established successfully")
})
.catch(err=>{
    console.log("error in connection",err)
})

var course=sequelize.define('course',{
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

course.sync()
console.log("table created")