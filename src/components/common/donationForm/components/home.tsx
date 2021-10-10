import React from "react";
import { Link, useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { Loader } from "./loader";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

export const Home = () => {
  let historyApp = useHistory();

  const onClick = () => {
    historyApp.push("/base");
  };
  return (
    <motion.div
      className="home container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Welcome to Pizza Joint</h2>
      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        onClick={onClick}
      >
        Create Your Pizza
      </motion.button>
      <Loader />
    </motion.div>
  );
};
