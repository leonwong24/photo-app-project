const mongoose = require('mongoose');
const dbURI = "mongodb+srv://leonwong24:Password123@cluster0.23lf9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

try {
   
mongoose.connect(
    dbURI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected")
	);
}
 catch (e) {
  console.log("could not connect");
}

require('./users');
//require('./images');