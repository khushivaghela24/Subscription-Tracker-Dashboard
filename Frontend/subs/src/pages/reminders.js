import React, { useEffect, useState } from "react";
import API from "../api";
import { Link } from "react-router-dom";

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString();
}
function computeDaysLeft(dateStr) {
  const now = new Date();
  const d = new Date(dateStr);
  const diffMs = d.setHours(0,0,0,0) - now.setHours(0,0,0,0);
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}

export default function Reminders() {
  const [reminders, setReminders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hidden, setHidden] = useState({});

  const fetchReminders = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await API.get("/reminders"); 
      const data = Array.isArray(res.data) ? res.data : [];
      const enriched = data
        .map((s) => ({ ...s, daysLeft: computeDaysLeft(s.renewalDate) }))
        .sort((a, b) => new Date(a.renewalDate) - new Date(b.renewalDate));
      setReminders(enriched);
    } catch (err) {
      console.error("Failed to load reminders:", err);
      setError(err.response?.data?.message || "Cannot load reminders");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReminders();
  }, []);

  const handleDismiss = (id) => {
    setHidden((h) => ({ ...h, [id]: true }));
  };

  return (
    <>
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Upcoming Reminders</h1>
        <button onClick={fetchReminders} className="px-3 py-1 bg-green-800 text-white rounded hover:bg-green-600" >
          Refresh
        </button>
      </div>

      {loading && <p className="text-gray-600">Loading reminders...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && reminders.length === 0 && (
        <div className="bg-white shadow rounded p-6 text-center">
          <p className="text-gray-600">No upcoming reminders in the next few days.</p>
        </div>
      )}

      <div className="space-y-4">
        {reminders.map((r) => {
          if (hidden[r._id]) return null;
          const days = r.daysLeft ?? computeDaysLeft(r.renewalDate);
          const badgeClass =
            days <= 0
              ? "bg-red-100 text-red-800"
              : days <= 3
              ? "bg-yellow-100 text-yellow-800"
              : "bg-green-100 text-green-800";

          return (
            <div key={r._id} className="bg-white shadow rounded p-4 flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3">
                  <h3 className="text-lg font-medium">{r.name}</h3>
                  <span className="text-sm text-gray-500">• {r.category || "Other"}</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Renewal: <b>{formatDate(r.renewalDate)}</b> • Amount: {r.currency || "INR"} {r.cost}
                </p>
                <p className="text-xs text-gray-500 mt-1">Payment: {r.paymentMethod || "N/A"}</p>
                <div className="mt-3 flex gap-2">
                  <Link to={`/`} className="text-sm px-3 py-1 border rounded hover:bg-green-400">
                    View Dashboard
                  </Link>
                </div>
              </div>

              <div className="ml-4 flex flex-col items-end">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${badgeClass}`}>
                  {days <= 0 ? "Due today" : `${days} day${days > 1 ? "s" : ""}`}
                </span>

                <button onClick={() => handleDismiss(r._id)} className="mt-3 text-gray-500 hover:text-gray-800" title="Dismiss" >
                  ✕
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}
