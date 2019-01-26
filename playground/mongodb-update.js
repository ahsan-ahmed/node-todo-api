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
    ///////////Update data//////////////////
    ////////////////////////////////

    //findOneAndUpdate()
    db.collection("Todos")
      .findOneAndUpdate(
        { _id : new ObjectID("5c472c518d204a09fa81df8c") },
        {
          $set: {
            name: "ahsan-ahmed"
          },
          $inc:{
              age:1
          }
        },
        { returnOriginal: false })
      .then(
        result => {
          console.log(`updateResult ${JSON.stringify(result,undefined,2)}`);
        });

    client.close();
  }
);
