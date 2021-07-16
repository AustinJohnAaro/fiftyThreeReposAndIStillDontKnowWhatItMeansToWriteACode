var path = require('path');
var express = require('express');
var session = require('express-session');
var exphbs = require('express-handlebars');

var app = express();
var PORT = process.env.PORT || 3001;

var sequelize = require("./config/connection");
var SequelizeStore = require('connect-session-sequelize')(session.Store);

// var sess = {
//   secret: 'Super secret secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// app.use(session(sess));

var helpers = require('./utils/helpers');

var hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use(require('./controllers/')); 
// import chai from "chai";
// import assert from "assert";
// import app from "../../src/app";
// import chaiHttp from "chai-http";
// import factories from "../factories";
// import db from "../../src/models";

// import dotenv from "dotenv";
// dotenv.config({path: ".env.test"});
// chai.use(chaiHttp); 

// describe("'regions'service", () => {
//   beforeEach(async () => {
//     await db.sequelize.sync({ force: true, logging: false });
//   }); 

  // it("should POST area", async () => {
  //   const region = await factories.create("region");
  //   const dummy = {
  //     name: "New area",
  //     open: true,
  //     description: "This is a cool area!",
  //     gps: "122.123, 123.4123",
  //     regionId: region.dataValues.id
  //   };
  //   const res = await chai
  //     .request(app)
  //     .post("/api/areas")
  //     .send(dummy);
  //   assert.equal(res.body.name, dummy.name);
  // }); 




const fs = require("fs");
// const path = require("path"); 
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
// const config = require(__dirname + "/../config/config.json")[env];
const db = {};

// let sequelize; 
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable]);
// } else {
//   sequelize = new Sequelize(
//     config.database,
//     config.username,
//     config.password,
//     config
//   );
// } 

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(file => {
    var model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db; 



  app.listen(PORT, () => console.log('Now listening'));
  console.log("Calling app.listen().");

var server = app.listen( function (){
  console.log("Calling app.listen's callback function.");
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
  app.listen(process.env.PORT || 3001, () => {
    console.log('Server is running on port: 5000 ');
    });
});

console.log("app.listen() executed."); 


