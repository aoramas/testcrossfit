import { Router } from "express";
import { getHorarios } from "../controllers/horarios";
import validateToken from "./validate-token";

const router = Router();

router.get("/", validateToken,getHorarios);

export default router;
