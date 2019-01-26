const { MongoClient, ObjectID} = require("mongodb");

var obj=new ObjectID();
console.log(obj);

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to MongoDB server");
    }
    console.log("connected to MongoDB Server");
    const db = client.db("TodoApp");
    
    // db.collection("Todos").insertOne(
    //   {
    //     text: "helloworld",
    //     name: "ahsan-ahmed"
    //   },
    //   (err, result) => {
    //     if (err) {
    //       return console.log("Unable to insertOne to MongoDB server");
    //     }
    //     console.log(
    //       "successfully insertOne to MongoDB Server",
    //       JSON.stringify(result.ops, undefined, 2)
    //     );
    //   }
    // );
    db.collection("Users").insertOne(
        {
          text: "helloworld",
          name: "ahsan-ahmed",
          age:22,
          qualification:"mobile app developer"
        },
        (err, result) => {
          if (err) {
            return console.log("Unable to insertOne to MongoDB server");
          }
          console.log(
            "successfully insertOne to MongoDB Server",
            JSON.stringify(result.ops, undefined, 2)
          );
        }
      );
    client.close();
});
