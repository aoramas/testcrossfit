const { models } = require("../libs/sequelize");

const getBookings = async (req, res) => {
    const rta = await models.Booking.findAll();
    
    res.status(200).json(rta);
};

const getBookingsById = async (req, res) => {
    const { id } = req.params;
    const rta = await models.Booking.findOne({ where: { id } });
    res.json(rta);
};

const createBookings = async (req, res) => {
    const { body } = req;
    const rta = await models.Booking.create(body);
    res.json(rta);
};

const updateBookings = async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    const rta = await models.Booking.update(body, { where: { id } });
    res.json(rta);
};

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