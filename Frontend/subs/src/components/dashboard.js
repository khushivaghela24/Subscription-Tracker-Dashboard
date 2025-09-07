import React, { useEffect, useState } from "react";
import API from "../api";
import AddSubscription from "./addsubscription";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [subscriptions, setSubscriptions] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const fetchSubs = async () => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await API.get("/subscriptions", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSubscriptions(data);
    } catch (err) {
      console.error("Error fetching subscriptions", err);
    }
  };

  useEffect(() => {
    fetchSubs();
  }, []);

  return (
    <div className="px-6 py-12 max-w-3xl mx-auto">
      {/* Add button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-left text-green-800">Subscriptions Dashboard</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-green-800 text-white rounded hover:bg-green-900"
        >
          {showForm ? "Close Form" : "+ Add Subscription"}
        </button>
      </div>

      {/* Form (shown only when button clicked) */}
      {showForm && <AddSubscription onSuccess={fetchSubs} />}

      {/* List of subscriptions */}
      <ul className="space-y-4 mt-6">
        {subscriptions.map((sub) => (
          <li
            key={sub._id}
            className="p-4 bg-gray-100 rounded flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{sub.name}</p>
              <p className="text-sm text-gray-600">
                {sub.currency} {sub.cost} — {sub.billingCycle}
              </p>
              <p className="text-xs text-gray-500">
                Renewal: {new Date(sub.renewalDate).toDateString()}
              </p>
            </div>
            <button
              onClick={() => navigate(`/subscriptions/${sub._id}`)}
              className="px-3 py-1 bg-green-800 text-white rounded hover:bg-green-900"
            >
              View Details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
