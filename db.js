const mongoose = require("mongoose");
const connectToDb = async () => {
  await mongoose.connect(
    "mongodb+srv://Gaurav:Gaurav@cluster0.wmdwb.mongodb.net/ecommerceDB?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  );
  console.log("CONNECTED TO DB");
};
module.exports = connectToDb;
