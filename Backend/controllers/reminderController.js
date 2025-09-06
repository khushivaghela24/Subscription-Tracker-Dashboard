const Subscription = require("../models/Subscription");

exports.getReminders = async (req, res) => {
  try {
    const now = new Date();
    const sevenDaysAhead = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

    const reminders = await Subscription.find({
      user: req.user._id,
      renewalDate: { $gte: now, $lte: sevenDaysAhead },
    });

    res.json(reminders);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
