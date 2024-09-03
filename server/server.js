import http from "http";
import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

const server = http.createServer(app);

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch(() => {
    console.log("error mongodb");
  });
const port = process.env.PORT;

server.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
