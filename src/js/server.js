const jsonserver = require("json-server"); 
const server = jsonserver.create(); 
const router = jsonserver.router("db.json");
const middlewares = jsonserver.defaults(); // 

const { config } = require("dotenv");
config();
server.use(middlewares);
server.use(router);

const POST = process.env.POST;
const HOST = process.env.HOST;

server.listen(POST, () => {
  console.log(`http://${HOST}:${POST}`);
});
