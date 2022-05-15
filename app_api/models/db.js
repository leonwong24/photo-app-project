const mongoose = require('mongoose');
const dbURI = "mongodb+srv://leonwong24:Password123@cluster0.23lf9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const option =  {
  dbName: "uplash-clone-db"
}
try {
   
mongoose.connect(
    dbURI, option,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected")
	);
}
 catch (e) {
  console.log("could not connect");
}

const dbConnection = mongoose.connection;


dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));
//mongoose.connect(dbURI);


require('./users');
require('./images');