import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/home";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import Reminders from "./pages/reminders";
import Dashboard from "./components/dashboard";
import AddSubscription from "./components/addsubscription";

export default function Myapp() {
  // Keep subscriptions in state so Dashboard & AddSubscription can share data
  const [subscriptions, setSubscriptions] = useState([]);

  // Function to add new subscription
  const addSubscription = (sub) => {
    setSubscriptions([...subscriptions, { id: Date.now(), ...sub }]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route
          path="/dashboard"
          element={<Dashboard subscriptions={subscriptions} />}
        />
        <Route
          path="/add-subscription"
          element={<AddSubscription addSubscription={addSubscription} />}
        />
      </Routes>
    </Router>
  );
}