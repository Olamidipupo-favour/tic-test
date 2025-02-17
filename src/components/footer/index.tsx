import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/img/Horizontal-Logo-White.png";
import { RiTwitterXFill } from "react-icons/ri";
import { SlSocialFacebook, SlSocialLinkedin } from "react-icons/sl";
import { PiInstagramLogoLight } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall, IoMail } from "react-icons/io5";
import PlayStore from "../../assets/img/google-play.png";
import AppStore from "../../assets/img/app-store.png";
import { getFullYear } from "../../utils/utility";
import { IoIosSend } from "react-icons/io";
import FooterLogo from "../FooterLogo/index"

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              Your trusted financial technology partner.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400">Email: info@example.com</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
