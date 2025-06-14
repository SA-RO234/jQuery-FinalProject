const jsonserver = require("json-server"); // import json-server
const server = jsonserver.create(); // Create a new json-server instance

const router = jsonserver.router("db.json"); // Create router using the db.json file
const middlewares = jsonserver.defaults(); // for allow use http methods like GET, POST, PUT, DELETE

server.use(middlewares);
server.use(router);

server.listen(8080, () => {
  console.log("====================================");
  console.log("Json Server is running on http://localhost:8080");
  console.log("====================================");
});
