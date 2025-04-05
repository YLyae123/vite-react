import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import "../App.css";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    showButton && (
      <motion.button
        className="scroll-to-top"
        onClick={() => scroll.scrollToTop()}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.3 }}
      >
        ↑
      </motion.button>
    )
  );
};

export default ScrollToTopButton;
