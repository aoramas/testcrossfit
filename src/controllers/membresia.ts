import { Request, Response } from "express";
import { Membresia } from "../models/membresia";

/**
 * @api {get} /membership/ GetMembership
 * @apiName getMembership
 * @apiGroup Membresías
 *
 * @apiSuccess {Object[]} membresias Lista de membresías.
 */
const getMembership = async (req: Request, res: Response) => {
  const rta = await Membresia.findAll();
  res.status(200).json(rta);
};

/**
 * @api {get} /membership/:id GetMembershipById
 * @apiName getMembershipById
 * @apiGroup Membresías
 *
 * @apiParam {Number} id ID único de la membresía.
 *
 * @apiSuccess {Object} membresia Información de la membresía.
 */
const getMembershipById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const rta = await Membresia.findOne({ where: { id } });
  res.json(rta);
};

/**
 * @api {post} /membership/ CreateMembership
 * @apiName createMembership
 * @apiGroup Membresías
 *
 * @apiParam {Number} idPromocion ID de la promoción relacionada a la membresía.
 * @apiParam {Number} precio Precio de la membresía.
 * @apiParam {Boolean} activa Estado de la membresía (true si está activa, false si no lo está).
 * @apiParam {String} fechaVencimiento Fecha de vencimiento de la membresía.
 *
 * @apiSuccess {Object} membresia Información de la membresía creada.
 */
const createMembership = async (req: Request, res: Response) => {
  const { body } = req;
  const rta = await Membresia.create(body);
  res.json(rta);
};

/**
 * @api {put} /membership/:id UpdateMembershipById
 * @apiName updateMembership
 * @apiGroup Membresías
 *
 * @apiParam {Number} id ID único de la membresía.
 * @apiParam {Object} body Información de la membresía a actualizar.
 *
 * @apiSuccess {Object} membresia Información de la membresía actualizada.
 */
const updateMembership = async (req: Request, res: Response) => {
  const { body } = req;
  const { id } = req.params;
  const rta = await Membresia.update(body, { where: { id } });
  res.json(rta);
};

/**
 * @api {delete} /membership/:id DeleteMembershipById
 * @apiName deleteMembership
 * @apiGroup Membresías
 *
 * @apiParam {Number} id ID único de la membresía a eliminar.
 *
 * @apiSuccess {Object} membresia Objeto de membresía eliminada.
 */
const deleteMembership = async (req: Request, res: Response) => {
  const { id } = req.params;
  const rta = await Membresia.destroy({ where: { id } });
  res.json(rta);
};

module.exports = {
  getMembership,
  getMembershipById,
  createMembership,
  updateMembership,
  deleteMembership,
};
