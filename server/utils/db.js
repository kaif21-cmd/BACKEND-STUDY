const mongoose = require("mongoose"); //importing the mongose 
const URI = "mongodb://127.0.0.1:27017/mern_admin"; // Your MongoDB URI

const connectDb = async () => { //creating the connection function 
  try {
    await mongoose.connect(URI, {
       // To handle deprecation warning for useUnifiedTopology
    });
    console.log("Connection is successful");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); // Exiting with a non-zero code to indicate failure
  }
};

module.exports = connectDb; //exporting the file 
