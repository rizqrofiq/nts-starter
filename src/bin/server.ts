import { app } from "../app";
import http from "http";
import * as dotenv from "dotenv";

class Server {
  port: number;

  constructor() {
    dotenv.config();
    this.port = parseInt(process.env.PORT || "8000");
  }

  run() {
    http.createServer(app).listen(this.port);
  }
}

const server = new Server();

server.run();
