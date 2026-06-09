import React from "react";
import { motion } from "framer-motion";
import { wordContainer, wordChild } from "../utils/motion";

const AnimatedTitle = ({ text, className }) => {
  const words = text.split(" ");

  return (
    <motion.h2
      variants={wordContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.8 }}
      className={className}
      aria-label={text}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordChild}
          className='inline-block mr-[0.3em]'
        >
          {word}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default AnimatedTitle;
