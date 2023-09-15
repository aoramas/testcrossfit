import { Request, Response } from "express";
import { Horarios } from "../models/horarios";

const getHorarios = async (req: Request, res: Response): Promise<Response> => {
  const horariosList = await Horarios.findAll();

  return res.json(horariosList);
};

export { getHorarios };
