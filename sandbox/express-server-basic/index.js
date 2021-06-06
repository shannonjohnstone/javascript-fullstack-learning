const express = require("express");

const app = express();

const { requestHandler } = require("./routes");


app.use(requestHandler);

const PORT = process.env.PORT ?? 8000;

app.listen(PORT , () => {
  console.log("Server running");
  console.log(`If running locally it can be found at http://www.localhost:${PORT}`);
})