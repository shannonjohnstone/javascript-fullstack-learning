const http = require("http");

const { requestHandler } = require("./routes");

const server = http.createServer(requestHandler);

const PORT = process.env.PORT ?? 8000;

server.listen(PORT , () => {
  console.log("Server running");
  console.log(`If running locally it can be found at http://www.localhost:${PORT}`);
})