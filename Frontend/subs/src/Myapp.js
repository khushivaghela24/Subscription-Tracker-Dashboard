import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import Reminders from "./pages/reminders";
import AddSubscription from "./components/addsubscription";
import SubscriptionDetails from "./components/subscriptiondetail";

export default function Myapp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/add-subscription" element={<AddSubscription />} />
        <Route path="/subscriptions/:id" element={<SubscriptionDetails />} />
      </Routes>
    </Router>
  );
}