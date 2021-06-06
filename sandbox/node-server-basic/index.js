const http = require("http")

const { requestHandler } = require("./routes")

const server = http.createServer(requestHandler)

server.listen(8000, () => {
  console.log("Server running")
  console.log("If running locally it can be found at http://www.localhost:8000")
})