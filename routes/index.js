const express = require("express");
const userRouter = require("./user.router");
const administrativeRouter = require("./administrative.router");
const studentRouter = require("./student.router");
const membershipRouter = require("./membership.router");
const PromotionRouter = require("./promotion.router");
const asignacion_horariosRouter = require("./asignacion_horarios.router");
const wodRouter = require("./wod.router");
const wodEjerciciosRouter = require("./wodEjercicios.router");
const horarioRouter = require("./horarios.router");
const bookingRouter = require("./booking.router");
const rolRouter = require("./rol.router");
const exercisesRouter = require("./exercises.router");
const permissionTypeRouter = require("./permission_type.router");
// const elementRouter = require("./element.router");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/user", userRouter);
  router.use("/administrative", administrativeRouter);
  router.use("/student", studentRouter);
  router.use("/membership", membershipRouter);
  router.use("/promotion", PromotionRouter);
  router.use("/asignacion_horarios", asignacion_horariosRouter);
  router.use("/wod", wodRouter);
  router.use("/wodejercicios", wodEjerciciosRouter);
  router.use("/horario", horarioRouter);
  router.use("/booking", bookingRouter);
  router.use("/rol", rolRouter);
  router.use("/exercises", exercisesRouter);
  router.use("/permission_type", permissionTypeRouter);
  //   router.use("/persons", elementRouter);
}

module.exports = routerApi;
