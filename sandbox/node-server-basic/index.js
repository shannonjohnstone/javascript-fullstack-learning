const http = require("http")
const fs = require("fs");

function requestListener(req, res) {
  const { url, method } = req;

  req.on("end", () => console.log("Server end"))

  if (url === "/message" && method === 'POST') {
    // TODO: parse user input data
    
    const body = []
    
    req.on('data', chunk => {
      // req.setEncoding("utf8");
      body.push(chunk)
    })
    
    return req.on('end', () => {
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split("=")[1];

      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    })
  }

  if (url === "/exit") {
    res.writeHead(500, { 'Content-Type': 'text/plain' })
    res.end("Sorry but I'm about to exit")
    return process.exit()
  }

  if (url === "/html") {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(`<h1>HTML response example</h1>`)
    res.write(`<form action="/message" method="POST"><input type="text" name="message" /><button type="submit">Submit</button></form>`)
    return res.end()
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('okay')
}

const server = http.createServer(requestListener)

server.listen(8000, () => {
  console.log("Server running")
})