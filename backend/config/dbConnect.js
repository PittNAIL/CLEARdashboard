import mongoose from "mongoose";

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  mongoose.set("strictQuery", false);
  console.log(process.env.DB_URL); 
 const db = mongoose.connect(process.env.DB_URL);

  mongoose.connection.on('error', err => {
    console.log(err.toString());
  });
};

export default dbConnect;
