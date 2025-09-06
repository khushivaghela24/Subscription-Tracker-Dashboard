import Contact from "./contact";
import About from "./about";
import Footer from "./footer";
import Features from "./features";
import Navbar from "./navbar";
import Dashboard from "./dashboard";

export default function Home() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar/>

      {!user ? (
      <>
      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center text-center py-24">
        <div className="px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-800">
            Welcome to Subscription Tracker
          </h2>
          <p className="text-lg md:text-xl text-black-800">
            Track and manage all your subscriptions at one place
          </p>
        </div>
      </div>
      </>
      ) : (
        <>
        {/* Dashboard Section */}
        <section id="dashboard" className="py-16"> 
          <Dashboard/>  
        </section>
        </>
      )}

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-100"> 
        <Features/>  
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-16">
        <Contact/>
      </section>
  
      {/* About Us Section */}
      <section id="about" className="py-16 bg-gray-100">
        <About/>
      </section>

      {/* Footer Section */}
      <footer id="footer" className="bg-green-800 text-white py-6 mt-8">
        <Footer/>
      </footer>
    </div>
  );
}