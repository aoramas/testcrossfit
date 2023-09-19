import { Request, Response } from "express";
import { AsignacionHorarios } from "../models/asignacionHorarios";
import { Administrativo } from "../models/administrativo";
import { Horarios } from "../models/horarios";

/**
 * @api {get} /asignacion-horarios/ GetAsignacionHorarios
 * @apiName getAsignacionHorarios
 * @apiGroup Asignación de Horarios
 *
 * @apiSuccess {Object[]} asignaciones Lista de asignaciones de horarios.
 */
const getAsignacionHorarios = async (req: Request, res: Response) => {
  const rta = await AsignacionHorarios.findAll();
  res.json(rta);
};

/**
 * @api {get} /asignacion-horarios/:id GetAsignacionHorariosById
 * @apiName getAsignacionHorariosById
 * @apiGroup Asignación de Horarios
 *
 * @apiParam {Number} id ID único de la asignación de horario.
 *
 * @apiSuccess {Object} asignacion Información de la asignación de horario.
 */
const getAsignacionHorariosById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const rta = await AsignacionHorarios.findByPk(id);
  res.json(rta);
};

/**
 * @api {post} /asignacion-horarios/ CreateAsignacionHorarios
 * @apiName createAsignacionHorarios
 * @apiGroup Asignación de Horarios
 *
 * @apiParam {Number} idAdministrativo ID del administrativo asignado.
 * @apiParam {String} fecha Fecha de la asignación (Formato: "YYYY-MM-DD").
 * @apiParam {Number} idHorario ID del horario asignado.
 *
 * @apiSuccess {Object} asignacion Información de la asignación de horario creada.
 */
const createAsignacionHorarios = async (req: Request, res: Response) => {
  const { body } = req;
  const asignacionHorarios = await AsignacionHorarios.create(body);
  res.json(asignacionHorarios);
};

/**
 * @api {put} /asignacion-horarios/:id UpdateAsignacionHorarios
 * @apiName updateAsignacionHorarios
 * @apiGroup Asignación de Horarios
 *
 * @apiParam {Number} id ID único de la asignación de horario.
 * @apiParam {Object} body Información de la asignación de horario a actualizar.
 *
 * @apiSuccess {Object} asignacion Información de la asignación de horario actualizada.
 */
const updateAsignacionHorarios = async (req: Request, res: Response) => {
  const { body } = req;
  const { id } = req.params;
  const rta = await AsignacionHorarios.update(body, { where: { id } });
  res.json(rta);
};

/**
 * @api {delete} /asignacion-horarios/:id DeleteAsignacionHorariosById
 * @apiName deleteAsignacionHorarios
 * @apiGroup Asignación de Horarios
 *
 * @apiParam {Number} id ID único de la asignación de horario a eliminar.
 *
 * @apiSuccess {Object} asignacion Objeto de asignación de horario eliminado.
 */
const deleteAsignacionHorarios = async (req: Request, res: Response) => {
  const { id } = req.params;
  const rta = await AsignacionHorarios.destroy({ where: { id } });
  res.json(rta);
};

module.exports = {
  getAsignacionHorarios,
  getAsignacionHorariosById,
  createAsignacionHorarios,
  updateAsignacionHorarios,
  deleteAsignacionHorarios,
};
