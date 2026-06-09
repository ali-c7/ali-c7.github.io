import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { stackGroups } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import AnimatedTitle from "./AnimatedTitle";

const MarqueeRow = ({ items, direction = "left", speed = 30 }) => {
  const doubled = [...items, ...items];
  const animClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className='relative overflow-hidden py-3'>
      <div className='absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none' />
      <div className='absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none' />

      <div
        className={`flex gap-6 w-max ${animClass}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <div key={`${item.name}-${i}`} className='flex-shrink-0'>
            {item.icon ? (
              <div className='flex items-center gap-3 bg-[#1d1836] border border-[#2a2550] rounded-xl px-4 py-3'>
                <img
                  src={item.icon}
                  alt={item.name}
                  className='w-8 h-8 object-contain'
                />
                <span className='text-white text-[14px] font-medium whitespace-nowrap'>
                  {item.name}
                </span>
              </div>
            ) : (
              <span className='inline-flex items-center bg-[#1d1836] border border-[#915EFF]/25 text-white text-[14px] font-medium px-5 py-3 rounded-xl whitespace-nowrap'>
                {item.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillList = ({ items }) => (
  <div className='mt-3 flex flex-wrap gap-x-4 gap-y-1'>
    {items.map((item, i) => (
      <span key={item.name} className='text-secondary/60 text-[12px]'>
        {item.name}{i < items.length - 1 ? " \u00B7" : ""}
      </span>
    ))}
  </div>
);

const StackGroup = ({ group, groupIndex }) => {
  const direction = groupIndex % 2 === 0 ? "left" : "right";
  const speed = 25 + groupIndex * 5;

  return (
    <motion.div
      variants={fadeIn("", "", groupIndex * 0.15, 0.75)}
      className='mb-12 last:mb-0'
    >
      <h3 className='text-white font-bold text-[24px] mb-1'>{group.title}</h3>
      <p className='text-secondary text-[14px] mb-4 max-w-xl'>
        {group.description}
      </p>
      <MarqueeRow items={group.items} direction={direction} speed={speed} />
      <SkillList items={group.items} />
    </motion.div>
  );
};

const Stacks = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I work with</p>
      </motion.div>
      <AnimatedTitle text="Skills" className={styles.sectionHeadText} />

      <div className='mt-14'>
        {stackGroups.map((group, index) => (
          <StackGroup key={group.title} group={group} groupIndex={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Stacks, "skills");
