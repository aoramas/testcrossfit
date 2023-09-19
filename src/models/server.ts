import express from "express";
import cors from "cors";
import routesHorario from "../routes/horarios";
import routesUser from "../routes/user";
import { Horarios } from "./horarios";
import { Usuario } from "./Usuario";
import { Administrativo } from "./administrativo";
import { AsignacionHorarios } from "./asignacionHorarios";
import { Ejercicio } from "./ejercicio";
import { Estudiante } from "./estudiante";
import { Membresia } from "./membresia";
import { Promocion } from "./promocion";
import { Reservacion } from "./reservacion";
import { Rol } from "./rol";
import { TipoPermiso } from "./tipoPermiso";
import { Wod } from "./wod";
import { WodEjercicios } from "./wodEjercicios";

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
    this.app.use(cors());
  }

  async dbConnection() {
    try {
      await Horarios.sync({ alter: true });
      await Usuario.sync({ alter: true });
      await Administrativo.sync({ alter: true });
      await AsignacionHorarios.sync({ alter: true });
      await Ejercicio.sync({ alter: true });
      await Estudiante.sync({ alter: true });
      await Membresia.sync({ alter: true });
      await Promocion.sync({ alter: true });
      await Reservacion.sync({ alter: true });
      await Rol.sync({ alter: true });
      await TipoPermiso.sync({ alter: true });
      await Wod.sync({ alter: true });
      await WodEjercicios.sync({ alter: true });
    } catch (error) {}
  }
}

export { Server };
