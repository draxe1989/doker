import http from "http";
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000, https://brone.space",
  });
  res.end(JSON.stringify({ message: "Hello World!" }));
});

server.listen(port, () => {
  console.log("Server is running on port: " + port);
});
