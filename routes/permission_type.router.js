const express = require("express");
const {
    getPermission,
    getPermissionById,
    createPermission,
    updatePermission,
    deletePermission
} = require("../services/permission_type.service");

const router = express.Router();

router.get("/", getPermission);
router.get("/:id", getPermissionById);
router.post("/", createPermission);
router.put("/:id", updatePermission);
router.delete("/:id", deletePermission);

module.exports = router;