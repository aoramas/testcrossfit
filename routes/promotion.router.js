const express = require("express");
const {
    getPromotion,
    getPromotionById,
    createPromotion,
    updatePromotion,
    deletePromotion,
} = require("../services/promotion.service");

const router = express.Router();

router.get("/", getPromotion);
router.get("/:id", getPromotionById);
router.post("/", createPromotion);
router.put("/:id", updatePromotion);
router.delete("/:id", deletePromotion);

module.exports = router;