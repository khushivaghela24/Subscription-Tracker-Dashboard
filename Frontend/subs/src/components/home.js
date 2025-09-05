import logo from "../images/logo.jpg";
import addImg from "../images/add.jpg";
import editImg from "../images/edit.jpg";
import viewImg from "../images/view.jpg";
import deleteImg from "../images/delete.jpg";
import analyticsImg from "../images/analytics.jpg";
import reminderImg from "../images/reminder.jpg";
import { useNavigate } from "react-router-dom";
import ContactUs from "./ContactUs";
import { FaUsers, FaBullseye, FaHandshake } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-green-800 px-4 py-3 flex justify-between items-center shadow-md">
        {/* Left Side - Logo + Title */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Logo"
            className="w-14 h-14 rounded-full object-cover"
          />
          <h1 className="text-white text-xl font-semibold">
            Subscription Tracker
          </h1>
        </div>

        {/* Right Side - Buttons */}
        <div className="flex space-x-3">
            <button onClick={() => navigate("/signin")} className="px-4 py-2 border border-white rounded-md text-white text-sm
             hover:bg-white hover:text-green-800 transition duration-300" >
              Sign In
            </button>
            <button onClick={() => navigate("/signup")} className="px-4 py-2 border border-white rounded-md text-white text-sm
             hover:bg-white hover:text-green-800 transition duration-300" >
              Sign Up
            </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center bg-gray-50 text-center py-8">
        <div className="px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-800">
            Welcome to Subscription Tracker
          </h2>
          <p className="text-lg md:text-xl text-black-800">
            Track and manage all your subscriptions at one place
          </p>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-green-800 mb-12">
            Key Features
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 - Add */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl hover:scale-105 transform transition duration-300">
              <img
                src={addImg}
                alt="Add"
                className="w-full h-40 object-contain p-4"
              />
              <div className="p-4 text-center">
                <h4 className="font-bold text-green-800 mb-2">Add</h4>
                <p className="text-black-800 text-sm">
                  Quickly add new subscriptions with just a few clicks.  
                  Store all necessary details such as plan type, renewal date,  
                  and cost in one place. Save time by organizing everything in a structured way. 
                </p>
              </div>
            </div>

            {/* Card 2 - Edit */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl hover:scale-105 transform transition duration-300">
              <img
                src={editImg}
                alt="Edit"
                className="w-full h-40 object-contain p-4"
              />
              <div className="p-4 text-center">
                <h4 className="font-bold text-green-800 mb-2">Edit</h4>
                <p className="text-black-800 text-sm">
                  Update subscription details whenever plans or costs change.  
                  You can modify renewal dates, adjust pricing,  
                  or switch between monthly and yearly packages easily.  
                  Keeping your data current helps avoid confusion. 
                </p>
              </div>
            </div>

            {/* Card 3 - View */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl hover:scale-105 transform transition duration-300">
              <img
                src={viewImg}
                alt="View"
                className="w-full h-40 object-contain p-4"
              />
              <div className="p-4 text-center">
                <h4 className="font-bold text-green-800 mb-2">View</h4>
                <p className="text-black-800 text-sm">
                  Get a clear and organized list of all your active services.  
                  View essential details like provider, price, and expiry date.  
                  The clean interface makes scanning through subscriptions easy.  
                  You won't need multiple apps or notes to remember everything. 
                </p>
              </div>
            </div>

            {/* Card 4 - Delete */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl hover:scale-105 transform transition duration-300">
              <img
                src={deleteImg}
                alt="Delete"
                className="w-full h-40 object-contain p-4"
              />
              <div className="p-4 text-center">
                <h4 className="font-bold text-green-800 mb-2">Delete</h4>
                <p className="text-black-800 text-sm">
                  Easily remove subscriptions that are no longer active.  
                  One-click deletion helps clean up your dashboard instantly.  
                  Prevents clutter and keeps focus on important services.  
                  Old records won't interfere with your expense tracking.
                </p>
              </div>
            </div>

            {/* Card 5 - Analytics */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl hover:scale-105 transform transition duration-300">
              <img
                src={analyticsImg}
                alt="Analytics"
                className="w-full h-40 object-contain p-4"
              />
              <div className="p-4 text-center">
                <h4 className="font-bold text-green-800 mb-2">Analytics</h4>
                <p className="text-black-800 text-sm">
                  Understand where your money goes with detailed analytics.  
                  Charts and summaries show spending trends over time.  
                  Compare monthly vs. yearly subscription expenses easily.  
                  Identify costly services and optimize your budget.
                </p>
              </div>
            </div>

            {/* Card 6 - Reminders */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl hover:scale-105 transform transition duration-300">
              <img
                src={reminderImg}
                alt="Reminders"
                className="w-full h-40 object-contain p-4"
              />
              <div className="p-4 text-center">
                <h4 className="font-bold text-green-800 mb-2">Reminders</h4>
                <p className="text-black-800 text-sm">
                  Never miss a renewal with smart reminder notifications.  
                  Get alerts before due dates via email or dashboard prompts.  
                  You'll avoid accidental service interruptions.  
                  Timely reminders also help prevent late charges. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
        <ContactUs/>
  
      {/* About Us Section */}
      <section className="py-16 bg-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          {/* Title */}
          <h3 className="text-3xl font-bold text-center text-green-800 mb-12">
            About Us
          </h3>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {/* Our Team */}
            <div className="p-6 bg-gray-50 shadow-md rounded-lg hover:shadow-lg transition">
              <FaUsers className="text-green-800 text-4xl mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2 text-green-800">Our Team</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                We are a group of passionate developers and designers dedicated to 
                building tools that simplify your subscription management.  
                Collaboration and innovation are at the heart of our work.
              </p>
            </div>

            {/* Our Mission */}
            <div className="p-6 bg-gray-50 shadow-md rounded-lg hover:shadow-lg transition">
              <FaBullseye className="text-green-800 text-4xl mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2 text-green-800">Our Mission</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Our mission is to help individuals and businesses save time and 
                money by providing a single place to track, analyze, and manage 
                all their subscriptions effectively.
              </p>
            </div>

            {/* Our Values */}
            <div className="p-6 bg-gray-50 shadow-md rounded-lg hover:shadow-lg transition">
              <FaHandshake className="text-green-800 text-4xl mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2 text-green-800">Our Values</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                We believe in trust, transparency, and user-first design.  
                Every feature we build is centered around making your life 
                easier and your subscription tracking seamless.
              </p>
            </div>
          </div>
        </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-green-800 text-white py-6 mt-8">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
            
            {/* Copyright in Center */}
            <p className="text-sm text-center flex-1">
              © {new Date().getFullYear()} Subscription Tracker Dashboard
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-white text-lg hover:text-gray-300 transition" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-white text-lg hover:text-gray-300 transition" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="text-white text-lg hover:text-gray-300 transition" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-white text-lg hover:text-gray-300 transition" />
              </a>
            </div>
          </div>
        </footer>
    </div>
  );
}