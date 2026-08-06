"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Nav from "./Nav";
import Form from "./Form";
import Two from "./Two";

const textContainerVariants = {};

const ContactPage = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <>
      <div style={{ marginTop: "5%", zIndex: 20, position: "relative" }}>
        <Nav />
      </div>

      <Two />
    </>
  );
};

export default ContactPage;