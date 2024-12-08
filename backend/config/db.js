import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      'mongodb+srv://liemp966:liem2004@cluster0.usen6.mongodb.net/food-del'
    )
    .then(() =>console.log("DB Connected"));
};
