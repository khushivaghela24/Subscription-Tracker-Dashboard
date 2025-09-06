import React, { useState } from "react";
import API from "../api";

export default function AddSubscription({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    cost: "",
    currency: "INR",
    renewalDate: "",
    paymentMethod: "",
    category: "",
    billingCycle: "monthly",
    notifyBeforeDays: 3,
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await API.post("/subscriptions", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Subscription added successfully!");
      onSuccess(); 
      setFormData({
        name: "",
        cost: "",
        currency: "INR",
        renewalDate: "",
        paymentMethod: "",
        category: "",
        billingCycle: "monthly",
        notifyBeforeDays: 3,
        notes: "",
      });
    } catch (err) {
      alert(err.response?.data?.message || "Error adding subscription");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md p-6 rounded-lg space-y-4 max-w-md mx-auto"
    >
      <h2 className="text-xl font-bold text-green-800">Add Subscription</h2>

      <input
        type="text"
        name="name"
        placeholder="Subscription Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />

      <input
        type="number"
        name="cost"
        placeholder="Cost"
        value={formData.cost}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />

      <input
        type="text"
        name="currency"
        placeholder="Currency"
        value={formData.currency}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <input
        type="date"
        name="renewalDate"
        value={formData.renewalDate}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />

      <input
        type="text"
        name="paymentMethod"
        placeholder="Payment Method"
        value={formData.paymentMethod}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />

      <select
        name="billingCycle"
        value={formData.billingCycle}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      >
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
        <option value="weekly">Weekly</option>
        <option value="custom">Custom</option>
      </select>

      <input
        type="number"
        name="notifyBeforeDays"
        placeholder="Notify Before Days"
        value={formData.notifyBeforeDays}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <textarea
        name="notes"
        placeholder="Notes"
        value={formData.notes}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <button
        type="submit"
        className="w-full bg-green-800 text-white py-2 rounded hover:bg-green-900 transition"
      >
        Add Subscription
      </button>
    </form>
  );
}
