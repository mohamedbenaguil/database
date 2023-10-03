const mongoose = require("mongoose");
const connectDatabase = async () => {
  try {
    mongoose.set("strictQuery",false)
    await mongoose.connect(
      /*Creating a database called 'test'*/
      "mongodb://127.0.0.1:27017/test"
    );
    console.log("Databse is connected");
  } catch (error) {
    console.log("Database is not connected", error);
  }
};
module.exports = connectDatabase
