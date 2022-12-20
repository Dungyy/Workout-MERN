import { set, connect } from "mongoose";
const PORT = process.env.PORT || 8080;
import * as dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  set("strictQuery", false);
  const conn = () => {
    connect(process.env.MONGO_URI)
      .then(() => {
        app.listen(PORT, () => {
          console.log(`connected to ${conn} and Listening on Port ${PORT}`);
        });
      })
      .catch((error) => {
        console.log(error);
        process.exit(1);
      });
  };
};

export default { connectDB };
