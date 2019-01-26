const { MongoClient, ObjectID } = require("mongodb");

// var obj=new ObjectID();
// console.log(obj);

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to MongoDB server");
    }
    console.log("connected to MongoDB Server");
    const db = client.db("TodoApp");
    /////////////////////////////////
    ///////////fetch data//////////////////
    ////////////////////////////////

    // db.collection("Todos")
    //   .find({ _id: new ObjectID("5c4720638d204a09fa81dd0d") })
    //   .toArray()
    //   .then(
    //     docs => {
    //       console.log("Todos");
    //       console.log(JSON.stringify(docs, undefined, 2));
    //     },
    //     err => {
    //       console.log("Unable to fetch Todos Docs", err);
    //     }
    //   );

    // db.collection("Todos").find().count()
    // .then(count => {
    //       console.log(`Todos count ${count}`);
    //     },
    //     err => {
    //       console.log("Unable to fetch Todos Docs", err);
    //     }
    //   );

    db.collection("Todos")
      .find({ name: "ahsan-ahmed" })
      .toArray()
      .then(
        docs => {
          console.log("Todos");
          console.log(JSON.stringify(docs, undefined, 2));
        },
        err => {
          console.log("Unable to fetch Todos Docs", err);
        }
      );

    client.close();
  }
);
