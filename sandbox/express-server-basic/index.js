import express from "express";
import { requestHandler } from "./routes.js";

const app = express();

app.use(requestHandler);
app.use(() => console.log("Next middleware"));

const PORT = process.env.PORT ?? 8000;

app.listen(PORT , () => {
  console.log("Server running");
  console.log(`If running locally it can be found at http://www.localhost:${PORT}`);
})