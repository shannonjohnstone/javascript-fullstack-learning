const http = require("http")

const { requestHandler } = require("./routes")

function requestListener(requestHandler)

const server = http.createServer(requestListener)

server.listen(8000, () => {
  console.log("Server running")
})