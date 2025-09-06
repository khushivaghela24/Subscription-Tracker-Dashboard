const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { getReminders } = require("../controllers/reminderController");

const router = express.Router();

router.get("/", protect, getReminders);

module.exports = router;
