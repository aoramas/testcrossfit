"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const reservacion_1 = require("../models/reservacion");
/**
 * @api {get} /bookings/ GetBookings
 * @apiName getBookings
 * @apiGroup Reservas
 *
 * @apiSuccess {Object[]} bookings Lista de reservas.
 */
const getBookings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rta = yield reservacion_1.Reservacion.findAll();
    res.json(rta);
});
/**
 * @api {get} /bookings/:id GetBookingsById
 * @apiName getBookingsById
 * @apiGroup Reservas
 *
 * @apiParam {Number} id ID único de la reserva.
 *
 * @apiSuccess {Object} booking Información de la reserva.
 */
const getBookingsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const rta = yield reservacion_1.Reservacion.findOne({ where: { id } });
    res.json(rta);
});
/**
 * @api {post} /bookings/ CreateBookings
 * @apiName createBookings
 * @apiGroup Reservas
 *
 * @apiParam {Number} idHorario ID del horario reservado.
 * @apiParam {Number} idStudent ID del estudiante que realiza la reserva.
 * @apiParam {String} fecha Fecha de la reserva (Formato: "YYYY-MM-DD").
 * @apiParam {String} descripcion Descripción de la reserva.
 *
 * @apiSuccess {Object} booking Información de la reserva creada.
 */
const createBookings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const rta = yield reservacion_1.Reservacion.create(body);
    res.json(rta);
});
/**
 * @api {put} /bookings/:id UpdateBookingsById
 * @apiName updateBookings
 * @apiGroup Reservas
 *
 * @apiParam {Number} id ID único de la reserva.
 * @apiParam {Object} body Información de la reserva a actualizar.
 *
 * @apiSuccess {Object} booking Información de la reserva actualizada.
 */
const updateBookings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const rta = yield reservacion_1.Reservacion.update(body, { where: { id } });
    res.json(rta);
});
/**
 * @api {delete} /bookings/:id DeleteBookingsById
 * @apiName deleteBookings
 * @apiGroup Reservas
 *
 * @apiParam {Number} id ID único de la reserva a eliminar.
 *
 * @apiSuccess {Object} booking Objeto de reserva eliminada.
 */
const deleteBookings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const rta = yield reservacion_1.Reservacion.destroy({ where: { id } });
    res.json(rta);
});
module.exports = {
    getBookings,
    getBookingsById,
    createBookings,
    updateBookings,
    deleteBookings,
};
