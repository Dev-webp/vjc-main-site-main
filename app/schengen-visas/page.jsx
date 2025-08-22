"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import Form from "./Form";
import Two from "./Two";

import Content from "./Content";
import Text from "./Text";
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
      

      {/* Main Section */}
     
      {/* Other Sections */}
      <Two />
      <Text />
      <Content />
      
    

    </>
  );
};

export default ContactPage;
