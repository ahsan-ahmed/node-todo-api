const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to MongoDB server");
    }
    console.log("connected to MongoDB Server");
    const db = client.db("TodoApp");
    /////////////////////////////////
    ///////////delete data//////////////////
    ////////////////////////////////

    //////There are three delete methods////////////

    //deleteMany
    // db.collection("Todos")
    //   .deleteMany({ name: "ahsan-ahmed" })
    //   .then(result => {
    //     console.log(result);
    //   });

    //deleteOne
    // db.collection("Users")
    // .deleteOne({ name: "ahsan-ahmed" })
    // .then(result => {
    //   console.log(result);
    // });

    //findOneAndDelete
    db.collection("Users")
      .findOneAndDelete({ name: "ahsan-ahmed" })
      .then(result => {
        console.log(result);
      });

    client.close();
  }
);
