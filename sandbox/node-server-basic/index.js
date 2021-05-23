const http = require("http")

function requestListener(req, res) {
  req.on("end", () => console.log("Server end"))

  if (req.url === "/exit") {
    res.writeHead(500, { 'Content-Type': 'text/plain' })
    res.end("Sorry but I'm about to exit")
    return process.exit()
  }

  if (req.url === "/html") {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(`<h1>HTML response example</h1>`)
    return res.end()
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('okay')
}

const server = http.createServer(requestListener)

server.listen(8000, () => {
  console.log("Server running")
})