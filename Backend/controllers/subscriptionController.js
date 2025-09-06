const Subscription = require("../models/Subscription");

exports.createSubscription = async (req, res) => {
  try {
    const { name, category, cost, currency, billingCycle, renewalDate, paymentMethod, notes, notifyBeforeDays } = req.body;

    if (!name || cost == null || !renewalDate) {
      return res.status(400).json({ message: "name, cost, renewalDate are required" });
    }

    const sub = await Subscription.create({
      user: req.user._id,
      name,
      category,
      cost,
      currency,
      billingCycle,
      renewalDate,
      paymentMethod,
      notes,
      notifyBeforeDays,
    });

    return res.status(201).json(sub);
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.getSubscriptions = async (req, res) => {
  try {
    const subs = await Subscription.find({ user: req.user._id }).sort({ renewalDate: 1 });
    return res.json(subs);
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.updateSubscription = async (req, res) => {
  try {
    const updated = await Subscription.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Subscription not found" });
    return res.json(updated);
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.deleteSubscription = async (req, res) => {
  try {
    const deleted = await Subscription.findOneAndDelete({ _id: req.params.id, user: req.user._id });
    if (!deleted) return res.status(404).json({ message: "Subscription not found" });
    return res.json({ message: "Deleted successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.getUpcomingReminders = async (req, res) => {
  try {
    const days = Number(req.query.days || 7);
    const now = new Date();
    const end = new Date(now.getTime() + days * 24 * 60 * 60 * 1000);

    const subs = await Subscription.find({
      user: req.user._id,
      renewalDate: { $gte: now, $lte: end },
    }).sort({ renewalDate: 1 });

    const withDaysLeft = subs.map((s) => {
      const millis = new Date(s.renewalDate).getTime() - now.getTime();
      const daysLeft = Math.ceil(millis / (1000 * 60 * 60 * 24));
      return { ...s.toObject(), daysLeft };
    });

    return res.json(withDaysLeft);
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.getTotalCost = async (req, res) => {
  try {
    const subscriptions = await Subscription.find({ user: req.user._id });

    const total = subscriptions.reduce((sum, sub) => sum + sub.cost, 0);

    res.json({ total });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

const getSubscriptionById = async (req, res) => {
  try {
    const subscription = await Subscription.findOne({
      _id: req.params.id,
      user: req.user.id, 
    });

    if (!subscription) {
      return res.status(404).json({ message: "Subscription not found" });
    }

    res.json(subscription);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getSubscriptionById = getSubscriptionById;