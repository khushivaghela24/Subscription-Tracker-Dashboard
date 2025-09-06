import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer(){
    return(
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
    )
}