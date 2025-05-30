"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Nav from "./Nav";
import Content from "./Content";
import Two from "./Two";

const textContainerVariants = {
 
   
};



const ContactPage = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <>
      {/* Navbar */}
      <div style={{ marginTop: "5%", zIndex: 20, position: "relative" }}>
        <Nav />
      </div>

      {/* Main Section */}
      
      {/* Other Sections */}
      <Two />
      <Content />


    </>
  );
};

export default ContactPage;
