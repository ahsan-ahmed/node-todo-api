const express = require("express");
const bodyParser = require("body-parser");
const { ObjectID } = require("mongodb");

const { mongoose } = require("./db/mongoose");
const { Todo } = require("./models/todo");


var app = express();

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("db connected!")
});

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/todos", (req, res) => {
  Todo.find()
    .then(todos => {
      res.send({ todos });
    })
    .catch(err => {
      res.status(400).send();
    });
});

app.post("/todos", (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then(docs => {
    res.send(docs);
  },
  err => {
    res.status(400).send();
  }
)
});
// GET /todos/1234567
app.get("/todos/:id", (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send("<h1>bad request</h1>");
  }
  Todo.findById(id)
    .then(todos => {
      if (!todos) {
        return res.status(404).send("<h1>not found</h1>");
      }
      res.send({ todos });
    })
    .catch(err => {
      res.status(400).send();
    });
  //res.send(req.params);
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
