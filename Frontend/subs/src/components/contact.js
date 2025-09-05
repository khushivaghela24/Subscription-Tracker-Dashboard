import React, { useState } from "react";

const ContactUs = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowMessage(true);
  };

  return (
        <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-6">
                <h3 className="text-3xl font-bold text-green-800 mb-8 text-center"> Contact Us </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
                </label>
                <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-800 focus:outline-none"
                required
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
                required
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
                required
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

            {showMessage && (
                <div className="mt-4 flex items-center justify-between bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
                <span>We received your message and will get back to you soon.</span>
                <button
                    className="ml-4 text-green-700 font-bold"
                    onClick={() => setShowMessage(false)}
                >
                    ✕
                </button>
                </div>
            )}
            </div>
        </section>
  );
};

export default ContactUs;