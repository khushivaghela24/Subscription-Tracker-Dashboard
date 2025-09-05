const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  createSubscription,
  getSubscriptions,
  updateSubscription,
  deleteSubscription,
  getUpcomingReminders,
  getTotalCost,
} = require("../controllers/subscriptionController");

const router = express.Router();

router.use(protect);

router.post("/", createSubscription);
router.get("/", getSubscriptions);
router.put("/:id", updateSubscription);
router.delete("/:id", deleteSubscription);

router.get("/reminders/upcoming", getUpcomingReminders);

router.get("/total", protect, getTotalCost); 

module.exports = router;