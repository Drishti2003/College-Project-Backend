import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(
      "mongodb+srv://drishti:gungun_27@bloging.euwzswr.mongodb.net/bloging"
    )

    .then(() => {
      console.log("successfully connected to mongodb");
    })
    .catch((e) => {
      console.log(e);
    });
};

export default connectDB;
