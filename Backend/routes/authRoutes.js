const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { signup, login, changePassword } = require("../controllers/authController");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.put("/change-password", protect, changePassword);

module.exports = router;