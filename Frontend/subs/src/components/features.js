import addImg from "../images/add.jpg";
import editImg from "../images/edit.jpg";
import viewImg from "../images/view.jpg";
import deleteImg from "../images/delete.jpg";
import analyticsImg from "../images/analytics.jpg";
import reminderImg from "../images/reminder.jpg";

export default function Features() {
  return (
            <div className="max-w-6xl mx-auto px-6 py-2">
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
  );
}
