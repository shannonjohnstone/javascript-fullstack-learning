import express from "express";
import bodyParser from "body-parser";
import { requestHandler, addProductRoute, productRoute } from "./routes.js";

const app = express();
app.set("view engine", 'pug')
app.use(bodyParser.urlencoded({ extended: false }))

app.post("/product", productRoute);
app.get("/add-product", addProductRoute);

app.use("/", requestHandler);

const PORT = process.env.PORT ?? 8000;

app.listen(PORT , () => {
  console.log("Server running");
  console.log(`If running locally it can be found at http://www.localhost:${PORT}`);
})