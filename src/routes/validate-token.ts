import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const headerToken = req.headers["authorization"];
  if (headerToken != undefined && headerToken.startsWith("Bearer ")) {
    try {
      const bearerToken = headerToken.slice(7);
      jwt.verify(bearerToken, "secret");
      next();
    } catch (error) {
      res.status(401).json({
        msg: "Acceso no autorizado",
      });
    }
  } else {
    res.status(401).json({
      msg: "Acceso no autorizado",
    });
  }
};

export default validateToken;
