import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api";

export default function SubscriptionDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [subscription, setSubscription] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    cost: "",
    currency: "",
    billingCycle: "monthly",
    renewalDate: "",
    notes: "",
  });

  const fetchDetails = async () => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await API.get(`/subscriptions/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSubscription(data);
      setFormData({
        name: data.name,
        cost: data.cost,
        currency: data.currency,
        billingCycle: data.billingCycle,
        renewalDate: data.renewalDate?.split("T")[0], 
        notes: data.notes || "",
      });
    } catch (err) {
      console.error("Error fetching subscription:", err);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this subscription?")) return;
    try {
      const token = localStorage.getItem("token");
      await API.delete(`/subscriptions/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Subscription deleted!");
      navigate("/");
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await API.put(`/subscriptions/${id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Subscription updated!");
      setEditMode(false);
      fetchDetails();
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  if (!subscription) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <button
        onClick={() => navigate("/")}
        className="mb-4 px-3 py-1 bg-green-800 text-white rounded hover:bg-green-800"
      >
        ← Back to Dashboard
      </button>

      {!editMode ? (
        <div className="bg-white shadow rounded p-6">
          <h2 className="text-xl font-bold mb-4">{subscription.name}</h2>
          <p><strong>Cost:</strong> {subscription.currency} {subscription.cost}</p>
          <p><strong>Billing Cycle:</strong> {subscription.billingCycle}</p>
          <p><strong>Renewal Date:</strong> {new Date(subscription.renewalDate).toDateString()}</p>
          <p><strong>Notes:</strong> {subscription.notes || "—"}</p>

          <div className="mt-6 flex gap-4">
            <button
              onClick={() => setEditMode(true)}
              className="px-4 py-2 bg-green-800 text-white rounded hover:bg-green-900"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-green-800 text-white rounded hover:bg-green-800"
            >
              Delete
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSave} className="bg-white shadow rounded p-6 space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Subscription Name"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="number"
            name="cost"
            value={formData.cost}
            onChange={(e) => setFormData({ ...formData, cost: e.target.value })}
            placeholder="Cost"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="currency"
            value={formData.currency}
            onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
            placeholder="Currency"
            className="w-full p-2 border rounded"
          />
          <select
            name="billingCycle"
            value={formData.billingCycle}
            onChange={(e) => setFormData({ ...formData, billingCycle: e.target.value })}
            className="w-full p-2 border rounded"
          >
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
            <option value="weekly">Weekly</option>
            <option value="custom">Custom</option>
          </select>
          <input
            type="date"
            name="renewalDate"
            value={formData.renewalDate}
            onChange={(e) => setFormData({ ...formData, renewalDate: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <textarea
            name="notes"
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            placeholder="Notes"
            className="w-full p-2 border rounded"
          />

          <div className="flex gap-4 mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setEditMode(false)}
              className="px-4 py-2 bg-green-800 text-white rounded hover:bg-green-800"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
