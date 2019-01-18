//Program to generate the models present in database
var SequelizeAuto = require('sequelize-auto')
var auto = new SequelizeAuto('carmelCourse', 'root', 'root');
 
auto.run(function (err) {
  if (err) throw err;
 
  console.log(auto.tables); // table list
  console.log(auto.foreignKeys); // foreign key list
});



//command to run the file to generate the models present in database
//node auto-sequelize -o "./models" -d sequelize_auto_test -h localhost -u my_username -p root -x my_password -e root