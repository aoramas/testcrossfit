import { Router } from "express";
import { loginUsuario, newUsuario } from "../controllers/usuario";

const router = Router();

router.post("/", newUsuario);
router.post("/login", loginUsuario);

export default router;
