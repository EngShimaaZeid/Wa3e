import React from "react";
import "../styles/Footer.css";
const Footer = () => {
  return (
<div className="footer">
{/* Footer Inner Container */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Group: About Us */}
          <div className="footer-left">
            <h4 className="text-xl font-bold mb-4">Company Name</h4>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>

          {/* Second Group: Quick Links */}
          <div className="footer-links">
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="list-none space-y-2">
              <li><a href="/" className="text-[#e8e3de] hover:text-white">Home</a></li>
              <li><a href="/" className="text-[#e8e3de] hover:text-white">About</a></li>
              <li><a href="/" className="text-[#e8e3de] hover:text-white">Contact</a></li>
              <li><a href="/" className="text-[#e8e3de] hover:text-white">Services</a></li>
            </ul>
          </div>

          {/* Third Group: Working Hours */}
          <div className="footer-hours">
            <h4 className="text-xl font-bold mb-4">Working Hours</h4>
            <table className="table-auto w-full text-left">
              <tbody>
                <tr>
                  <td className="px-4 py-2">Monday - Friday</td>
                  <td className="px-4 py-2">9 AM - 6 PM</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Saturday</td>
                  <td className="px-4 py-2">10 AM - 2 PM</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Sunday</td>
                  <td className="px-4 py-2">Closed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section with Copyright */}
      <div className="footerBottom py-4 text-center">
        <p className="footerBottomContent text-sm">
          &copy; 2025 - All rights reserved to Company Name - Made by Shimaa Salah ELden Solutions.
        </p>
      </div>
    </div>
  );
};

export default Footer;
