import React, { Suspense, lazy, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { professionalProjects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import AnimatedTitle from "./AnimatedTitle";

const BeamAnimation = lazy(() => import("./canvas/Beam"));

const BrowserFrame = ({ children, url }) => (
  <div className='rounded-lg overflow-hidden border border-[#2a2550] shadow-lg'>
    <div className='bg-[#1d1836] px-3 py-2 flex items-center gap-2'>
      <div className='flex gap-1.5'>
        <div className='w-2.5 h-2.5 rounded-full bg-[#ff5f57]' />
        <div className='w-2.5 h-2.5 rounded-full bg-[#febc2e]' />
        <div className='w-2.5 h-2.5 rounded-full bg-[#28c840]' />
      </div>
      <div className='flex-1 bg-[#0a0520] rounded px-3 py-1 text-[10px] text-secondary/50 truncate ml-2'>
        {url}
      </div>
    </div>
    <div className='bg-[#0a0520]'>{children}</div>
  </div>
);

const ProjectCard = ({ project, index }) => {
  const [inView, setInView] = useState(false);

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.25, 0.75)}
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true, amount: 0.2 }}
      className='bg-tertiary rounded-2xl overflow-hidden w-full shadow-card'
    >
      {/* Thumbnail first */}
      <div className='p-4 lg:p-6'>
        <BrowserFrame url={project.link}>
          <img
            src={project.image}
            alt={project.name}
            className='w-full h-[340px] object-cover object-top'
          />
        </BrowserFrame>
      </div>

      {/* Description */}
      <div className='px-8 pb-6 lg:px-10'>
        <h3 className='text-white font-bold text-[28px] leading-tight'>
          {project.name}
        </h3>
        <p className='mt-3 text-secondary text-[15px] leading-[26px]'>
          {project.description}
        </p>
        {project.link && (
          <button
            onClick={() => window.open(project.link, "_blank")}
            className='mt-5 bg-[#915EFF] py-3 px-6 rounded-xl text-white font-bold text-[14px] w-fit hover:bg-[#7c4dff] transition-colors shadow-md'
          >
            View Live &rarr;
          </button>
        )}
      </div>

      {/* Beam animation for LoadPro */}
      {project.hasBeamAnimation && inView && (
        <div className='px-4 pb-4 lg:px-6 lg:pb-6'>
          <Suspense
            fallback={
              <div className='h-[140px] flex items-center justify-center'>
                <div className='canvas-loader' />
              </div>
            }
          >
            <div className='h-[160px] rounded-lg overflow-hidden bg-[#0a0520] border border-[#2a2550]'>
              <BeamAnimation />
            </div>
          </Suspense>
        </div>
      )}
    </motion.div>
  );
};

const ProfessionalProjects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Featured work</p>
      </motion.div>
      <AnimatedTitle text="Professional Projects" className={styles.sectionHeadText} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Production-grade applications spanning structural engineering software
        and AI-powered professional services.
      </motion.p>

      <div className='mt-12 flex flex-col gap-10'>
        {professionalProjects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(ProfessionalProjects, "projects");
