"use client";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => (
  <div className="fixed bottom-0 right-5 z-50 flex items-center space-x-0 animate-bounce">
    <a
      href="https://wa.me/+919160449000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="flex items-center group"
      style={{ textDecoration: "none" }}
    >
      {/* WhatsApp Icon */}
      <span
        className="bg-[#25d366] p-2 lg:p-4 rounded-full shadow-lg transform transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#128c7e]"
        style={{
          minWidth: 44,
          minHeight: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FaWhatsapp size={30} color="white" aria-hidden="true" focusable="false" />
      </span>
      {/* Text next to the icon */}
      <span className=" text-white bg-[#25d366] cursor-pointer rounded-md px-1 lg:px-2 py-1 lg:py-2 text-sm font-semibold shadow-lg transform transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-xl">
        Send Message
      </span>
    </a>
  </div>
);

export default FloatingWhatsApp;