const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
//const { ObjectID } = require("mongodb");

const id = "5c4b1b1aef691922f009f616";

// if (!ObjectID.isValid(id)) {
//   console.log("not valid ID");
// }

// Todo.find({_id:id}).then(
//   docs => {
//     console.log("docs", docs);
//   },
//   err => {
//     console.log(err);
//   }
// );

// Todo.findOne({_id:id}).then(
//   docs => {
//     console.log("docs", docs);
//   },
//   err => {
//     console.log(err);
//   }
// );

Todo.findById(id).then(
  docs => {
    if (!docs) {
      return console.log("ID not found");
    }
    console.log("docs", docs);
  },
  err => {
    console.log("id not found",err);
  }
);
