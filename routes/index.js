const express = require("express");
const userRouter = require("./user.router");
const administrativeRouter = require("./administrative.router");
const studentRouter = require("./student.router");
// const elementRouter = require("./element.router");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/user", userRouter);
  router.use("/administrative", administrativeRouter);
  router.use("/student", studentRouter);
  //   router.use("/persons", elementRouter);
}

module.exports = routerApi;
