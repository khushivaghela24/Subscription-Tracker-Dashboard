const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
    name: { type: String, required: true, trim: true },
    category: { type: String, default: "Other" },
    cost: { type: Number, required: true, min: 0 },
    currency: { type: String, default: "INR" },
    billingCycle: { type: String, enum: ["monthly", "yearly", "weekly", "custom"], default: "monthly" },
    renewalDate: { type: Date, required: true, index: true },
    paymentMethod: { type: String, default: "UPI" },
    notes: { type: String, default: "" },
    notifyBeforeDays: { type: Number, default: 3 },   
    lastReminderSentAt: { type: Date, default: null }, 
  },
  { timestamps: true }
);

subscriptionSchema.index({ user: 1, renewalDate: 1 });

module.exports = mongoose.model("Subscription", subscriptionSchema);