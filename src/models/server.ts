import express from "express";
import routesHorario from "../routes/horarios";
import routesUser from "../routes/user";
import { Horarios } from "./horarios";
import { User } from "./user";

class Server {
  private app: express.Application;
  private port: string;
  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3001";
    this.listen();
    this.middlewares();
    this.routes();
    this.dbConnection();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }

  routes() {
    this.app.use("/api/v2/horarios", routesHorario);
    this.app.use("/api/v2/user", routesUser);
  }

  middlewares() {
    this.app.use(express.json());
  }

  async dbConnection() {
    try {
      await Horarios.sync({ alter: true });
      await User.sync({ alter: true });
    } catch (error) {}
  }
}

export { Server };
