import fs from "fs";
import { dirname, resolve } from "path"

const findFileByPath = (path) => resolve(dirname("./"), path);

export function productRoute(req, res) {
  const { productName } = req.body;
  return res.render("product", { productName })
}

export function addProductRoute(_, res) {
  return res.render("add-product");
}

export function requestHandler(req, res, next) {
  req.on("end", () => console.log("Server end"))
  
  const { url, method } = req;
  if (url === "/message" && method === 'POST') {
    const body = []
    
    req.on('data', chunk => body.push(chunk))

    return req.on('end', () => {
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split("=")[1];
      
      const messageFilePath = findFileByPath("message.txt");

      fs.writeFile(messageFilePath, message, (err) => {
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
    const indexPath = findFileByPath("html/index.html");
    return fs.readFile(indexPath, (err, content) => {
      res.writeHead(200, { "Content-Type": "text/html" })
      res.end(content, "utf-8")
    })
  }
  
  if (url === "/html-snippet") {
    res.write(`<h1>HTML response example, node serving HTML snippet</h1>`)
    
    res.write(`
      <form action="/message" method="POST">
        <input type="text" name="message" />
        <button type="submit">Submit</button>
      </form>
    `)
  
    return res.end()
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('okay')
  next()
}