/////mongoose is now configured
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://tododb:admin1@ds113375.mlab.com:13375/todo-app', {useNewUrlParser: true});

module.exports = { mongoose };

// var newUser = new User({
//     text:"Muhammad Ahsan"
//   });

//   newUser.save().then(
//     docs => {
//       console.log("successfully save property into database", docs);
//     },
//     err => {
//       console.log("Unable To save property into database", err);
//     }
//   );
//"mongodb://localhost:27017/TodoApp"
//"mongodb://ahsan ahmed:sunny198765@ds113375.mlab.com:13375/todo-app"
