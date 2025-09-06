import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddSubscription({ addSubscription }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    plan: "",
    cost: "",
    renewal: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add new subscription
    addSubscription(formData);
    // Redirect back to Dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
          Add New Subscription
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Subscription Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          <input
            type="text"
            name="plan"
            placeholder="Plan (e.g., Premium, Basic)"
            value={formData.plan}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          <input
            type="text"
            name="cost"
            placeholder="Cost (e.g., ₹499)"
            value={formData.cost}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          <input
            type="date"
            name="renewal"
            value={formData.renewal}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          <div className="flex justify-between">
            <button
              type="reset"
              className="px-6 py-2 border border-gray-400 rounded-lg hover:bg-gray-200 transition"
            >
              Reset
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-green-800 text-white rounded-lg shadow hover:bg-green-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}