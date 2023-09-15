import { Router } from "express";
import { getHorarios } from "../controllers/horarios";

const router = Router();

router.get("/", getHorarios);

export default router;
