const { models } = require("../libs/sequelize");

/**
 * @api {get} /bookings/ GetBookings
 * @apiName getBookings
 * @apiGroup Reservas
 *
 * @apiSuccess {Object[]} bookings Lista de reservas.
 */
const getBookings = async (req, res) => {
  const rta = await models.Booking.findAll();
  res.json(rta);
};

/**
 * @api {get} /bookings/:id GetBookingsById
 * @apiName getBookingsById
 * @apiGroup Reservas
 *
 * @apiParam {Number} id ID único de la reserva.
 *
 * @apiSuccess {Object} booking Información de la reserva.
 */
const getBookingsById = async (req, res) => {
  const { id } = req.params;
  const rta = await models.Booking.findOne({ where: { id } });
  res.json(rta);
};

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
const createBookings = async (req, res) => {
  const { body } = req;
  const rta = await models.Booking.create(body);
  res.json(rta);
};

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
const updateBookings = async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  const rta = await models.Booking.update(body, { where: { id } });
  res.json(rta);
};

/**
 * @api {delete} /bookings/:id DeleteBookingsById
 * @apiName deleteBookings
 * @apiGroup Reservas
 *
 * @apiParam {Number} id ID único de la reserva a eliminar.
 *
 * @apiSuccess {Object} booking Objeto de reserva eliminada.
 */
const deleteBookings = async (req, res) => {
  const { id } = req.params;
  const rta = await models.Booking.destroy({ where: { id } });
  res.json(rta);
};

module.exports = {
  getBookings,
  getBookingsById,
  createBookings,
  updateBookings,
  deleteBookings,
};
