const http = require("http")

function requestListener(req, res) {
  req.on("end", () => console.log("Server end"))

  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('okay')
}

const server = http.createServer(requestListener)

server.listen(8000, () => {
  console.log("Server running")
})