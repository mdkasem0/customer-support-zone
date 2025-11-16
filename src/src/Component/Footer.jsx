import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import Container from "./Container";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-gray-300  pt-10">
        <Container>
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 border-gray-700 pb-5">
          {/* Company Info */}
          <div>
            <h2 className="text-white font-bold text-lg mb-2">
              SupportSphere
            </h2>
            <p className="text-sm leading-relaxed">
              SupportSphere is more than just a help desk — it’s a complete support ecosystem that transforms the way customers connect with businesses, ensuring faster resolutions, smarter communication, and stronger relationships.
            </p>
          </div>

          {/* Company */}
          <div>
            <h6 className="text-white font-semibold mb-3">Company</h6>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Sales
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h6 className="text-white font-semibold mb-3">Services</h6>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Products & Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Customer Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Download Apps
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h6 className="text-white font-semibold mb-3">Information</h6>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Join Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h6 className="text-white font-semibold mb-3">Social Links</h6>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 group cursor-pointer">
                <span className="p-2 rounded-full bg-blue-500 text-white group-hover:scale-110 transition-transform">
                  <FaTwitter size={18} />
                </span>
                <span className="group-hover:text-white transition-colors">
                  @CS — Ticket System
                </span>
              </li>

              <li className="flex items-center gap-3 group cursor-pointer">
                <span className="p-2 rounded-full bg-blue-700 text-white group-hover:scale-110 transition-transform">
                  <IoLogoFacebook size={18} />
                </span>
                <span className="group-hover:text-white transition-colors">
                  @CS — Ticket System
                </span>
              </li>

              <li className="flex items-center gap-3 group cursor-pointer">
                <span className="p-2 rounded-full bg-pink-500 text-white group-hover:scale-110 transition-transform">
                  <FaInstagram size={18} />
                </span>
                <span className="group-hover:text-white transition-colors">
                  @CS — Ticket System
                </span>
              </li>

              <li className="flex items-center gap-3 group cursor-pointer">
                <span className="p-2 rounded-full bg-gray-600 text-white group-hover:scale-110 transition-transform">
                  <MdOutlineMail size={18} />
                </span>
                <span className="group-hover:text-white transition-colors">
                  support@cst.com
                </span>
              </li>
            </ul>
          </div>
        </div>   
        </Container>
     

        {/* Bottom Bar */}
        <div className="text-center border-t py-3 text-xs text-gray-500 ">
          © 2025 SupportSphere. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
