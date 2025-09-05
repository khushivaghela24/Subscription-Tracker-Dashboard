import logo from "../images/logo.jpg";
import addImg from "../images/add.jpg";
import editImg from "../images/edit.jpg";
import viewImg from "../images/view.jpg";
import deleteImg from "../images/delete.jpg";
import analyticsImg from "../images/analytics.jpg";
import reminderImg from "../images/reminder.jpg";

export default function Home() {
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
          <button className="px-4 py-2 border border-white rounded-md text-white text-sm hover:bg-white hover:text-green-800 transition duration-300">
            Sign In
          </button>
          <button className="px-4 py-2 border border-white rounded-md text-white text-sm hover:bg-white hover:text-green-800 transition duration-300">
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
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
            <h3 className="text-3xl font-bold text-green-800 mb-8 text-center">
            Contact Us
            </h3>

            <form className="space-y-6">
            {/* Name */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
                </label>
                <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-800 focus:outline-none"
                />
            </div>

            {/* Email */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
                </label>
                <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-800 focus:outline-none"
                />
            </div>

            {/* Message */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
                </label>
                <textarea
                rows="6"
                placeholder="Write your message here..."
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-800 focus:outline-none"
                ></textarea>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4 justify-center">
                <button
                type="submit"
                className="bg-green-800 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-300"
                >
                Submit
                </button>
                <button
                type="reset"
                className="bg-green-800 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-300"
                >
                Reset
                </button>
            </div>
            </form>
        </div>
        </section>
  
        {/* About Us Section */}
        <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold text-green-800 mb-6">
            About Us
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
            Subscription Tracker is designed to help you stay in control of your recurring services.  
            Our mission is to simplify the way you manage payments, renewals, and expenses.  
            With easy-to-use features, insightful analytics, and timely reminders,  
            we ensure that you never miss a renewal or overspend on forgotten subscriptions.  
            Built with a clean interface and powerful tools, it's your one-stop solution for smarter subscription management.
            </p>
        </div>
        </section>
    </div>
  );
}