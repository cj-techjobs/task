import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import ProductsRoutes from "./routes/Products.js";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173"],
  })
);

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/", ProductsRoutes);

export default app;
