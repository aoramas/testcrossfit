import { Request, Response } from "express";
import { Promocion } from "../models/promocion";

/**
 * @api {get} /promotion/ GetPromotions
 * @apiName getPromotion
 * @apiGroup Promociones
 *
 * @apiSuccess {Object[]} promociones Lista de promociones.
 */
const getPromotion = async (req: Request, res: Response) => {
  const rta = await Promocion.findAll();
  res.status(200).json(rta);
};

/**
 * @api {get} /promotion/:id GetPromotionById
 * @apiName getPromotionById
 * @apiGroup Promociones
 *
 * @apiParam {Number} id ID único de la promoción.
 *
 * @apiSuccess {Object} promocion Información de la promoción.
 */
const getPromotionById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const rta = await Promocion.findOne({ where: { id } });
  res.json(rta);
};

/**
 * @api {post} /promotion/ CreatePromotion
 * @apiName createPromotion
 * @apiGroup Promociones
 *
 * @apiParam {String} nombre Nombre de la promoción.
 * @apiParam {Number} descuento Descuento de la promoción.
 *
 * @apiSuccess {Object} promocion Información de la promoción creada.
 */
const createPromotion = async (req: Request, res: Response) => {
  const { body } = req;
  const rta = await Promocion.create(body);
  res.json(rta);
};

/**
 * @api {put} /promotion/:id UpdatePromotionById
 * @apiName updatePromotion
 * @apiGroup Promociones
 *
 * @apiParam {Number} id ID único de la promoción.
 * @apiParam {Object} body Información de la promoción a actualizar.
 *
 * @apiSuccess {Object} promocion Información de la promoción actualizada.
 */
const updatePromotion = async (req: Request, res: Response) => {
  const { body } = req;
  const { id } = req.params;
  const rta = await Promocion.update(body, { where: { id } });
  res.json(rta);
};

/**
 * @api {delete} /promotion/:id DeletePromotionById
 * @apiName deletePromotion
 * @apiGroup Promociones
 *
 * @apiParam {Number} id ID único de la promoción a eliminar.
 *
 * @apiSuccess {Object} promocion Objeto de promoción eliminada.
 */
const deletePromotion = async (req: Request, res: Response) => {
  const { id } = req.params;
  const rta = await Promocion.destroy({ where: { id } });
  res.json(rta);
};

module.exports = {
  getPromotion,
  getPromotionById,
  createPromotion,
  updatePromotion,
  deletePromotion,
};
