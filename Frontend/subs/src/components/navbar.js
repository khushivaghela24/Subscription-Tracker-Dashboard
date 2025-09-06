import { useNavigate } from "react-router-dom";
import logo from "../images/logo.jpg";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleSignout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    navigate("/signin");
  };

  const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <nav className="bg-green-800 px-4 py-3 flex justify-between items-center shadow-md fixed top-0 left-0 w-full z-50">
      {/* Left Side - Logo + Title */}
      <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate("/")}>
        <img src={logo} alt="Logo" className="w-14 h-14 rounded-full object-cover" />
        <h1 className="text-white text-xl font-semibold">Subscription Tracker</h1>
      </div>

      {/* Right Side - Conditional */}
      <div className="flex space-x-4 items-center">
        {!user ? (
          <>
            <button
              onClick={() => navigate("/signin")}
              className="px-4 py-2 border border-white rounded-md text-white text-sm hover:bg-white hover:text-green-800 transition duration-300"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="px-4 py-2 border border-white rounded-md text-white text-sm hover:bg-white hover:text-green-800 transition duration-300"
            >
              Sign Up
            </button>
          </>
        ) : (
          <>
            <button onClick={() => scrollToSection("features")} className="text-white hover:text-gray-300">
                Features
            </button>
            <button onClick={() => scrollToSection("dashboard")} className="text-white hover:text-gray-300">
                Dashboard
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-white hover:text-gray-300">
                Contact Us
            </button>
            <button onClick={() => scrollToSection("about")} className="text-white hover:text-gray-300">
                About Us
            </button>
            <button onClick={() => navigate("/reminders")} className="text-white hover:text-gray-300">
              Reminders
            </button>
            <button
              onClick={handleSignout}
              className="px-4 py-2 border border-white rounded-md text-white text-sm hover:bg-white hover:text-green-800 transition duration-300"
            >
              Sign Out
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
