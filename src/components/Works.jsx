import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { projectGroups } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import AnimatedTitle from "./AnimatedTitle";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] '
      >
        <div
          onClick={() => window.open(source_code_link, "_blank")}
          className='relative w-full h-[230px]'
        >
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl w-full cursor-pointer hover:opacity-90'
          />
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const ProjectGroup = ({ group, groupIdx }) => {
  return (
    <motion.div
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.15 }}
      className={groupIdx === 0 ? "mt-16" : "mt-20"}
    >
      <motion.div variants={fadeIn("", "", 0, 0.75)}>
        <h3 className='text-white font-bold text-[24px]'>{group.title}</h3>
        <p className='mt-1 text-secondary text-[14px] max-w-2xl'>
          {group.description}
        </p>
      </motion.div>

      <div className='mt-8 flex flex-wrap justify-center gap-7'>
        {group.projects.map((project, index) => (
          <ProjectCard
            key={`project-${group.title}-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.05 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className='hash-span' id='side-projects'>
        &nbsp;
      </span>

      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
      </motion.div>
      <AnimatedTitle text="Projects" className={styles.sectionHeadText} />

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The following projects showcase my skills and experience through
          real-world examples of my work. Click on any project for more details!
        </motion.p>
      </div>

      {projectGroups.map((group, groupIdx) => (
        <ProjectGroup key={group.title} group={group} groupIdx={groupIdx} />
      ))}
    </motion.section>
  );
};

export default Works;
