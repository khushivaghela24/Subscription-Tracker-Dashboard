const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config/db");
const cron = require("node-cron");
const Subscription = require("./models/Subscription");
const User = require("./models/User");
const sendEmail = require("./utils/sendEmail");

cron.schedule("0 9 * * *", async () => {
  const now = new Date();
  const sevenDaysAhead = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

  try {
    const upcoming = await Subscription.find({
      renewalDate: { $gte: now, $lte: sevenDaysAhead },
    }).populate("user", "email name");

    for (const sub of upcoming) {
      const daysLeft = Math.ceil((new Date(sub.renewalDate) - now) / (1000 * 60 * 60 * 24));

      const alreadyToday =
        sub.lastReminderSentAt &&
        new Date(sub.lastReminderSentAt).toDateString() === now.toDateString();

      if (daysLeft <= (sub.notifyBeforeDays || 3) && daysLeft >= 0 && !alreadyToday) {
        const subject = `Reminder: ${sub.name} renews in ${daysLeft} day(s)`;
        const html = `
          <p>Hi ${sub.user.name || "there"},</p>
          <p><b>${sub.name}</b> will renew on <b>${new Date(sub.renewalDate).toDateString()}</b>.</p>
          <p>Amount: ${sub.currency || "INR"} ${sub.cost}</p>
          <p>— Subscription Tracker</p>
        `;
        await sendEmail({ to: sub.user.email, subject, html }).catch(() => {});
        sub.lastReminderSentAt = now;
        await sub.save();
      }
    }
    console.log(`[CRON] Reminder checked at ${now.toISOString()}`);
  } catch (e) {
    console.error("[CRON] Reminder job failed:", e.message);
  }
}, { timezone: "Asia/Kolkata" });


dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/subscriptions", require("./routes/subscriptionRoutes"));

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});