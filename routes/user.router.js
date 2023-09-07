const express = require("express");
const {
    getUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} = require("../services/user.service");

const router = express.Router();

router.get("/", getUser);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;