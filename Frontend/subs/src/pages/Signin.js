import React, { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/auth/login", formData); // backend login
      localStorage.setItem("token", data.token); // save JWT
      alert("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-2xl p-8 w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-800">Sign In</h2>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        <table>
            <tbody>
                <tr>
                    <td> <label> Email : </label></td>
                    <td> <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}
                            className="w-full p-2 border rounded mb-3 focus:outline-none focus:ring-1 focus:ring-green-700 
                            focus:border-green-900" required /></td>
                </tr>
                <tr>
                    <td> <label> Password : </label> </td>
                    <td> <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}
                            className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-1 focus:ring-green-700 
                            focus:border-green-900" required /> </td>
                </tr>
            </tbody>
        </table>
        <button type="submit" className="w-full bg-green-800 text-white py-2 rounded hover:bg-green-900 transition" >
          Sign In
        </button>
        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <span onClick={() => navigate("/signup")} className="text-green-800 cursor-pointer" >
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
}
