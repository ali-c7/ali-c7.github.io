import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { publications } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import AnimatedTitle from "./AnimatedTitle";

const typeIcon = {
  Manual: "\u{1F4D1}",
  Article: "\u{270F}\u{FE0F}",
  Journal: "\u{1F52C}",
};

const typeBorderColor = {
  Manual: "border-l-[#2f80ed]",
  Article: "border-l-[#38ef7d]",
  Journal: "border-l-[#fc6767]",
};

const typeBg = {
  Manual: "from-[#2f80ed]/20 to-[#2f80ed]/5",
  Article: "from-[#38ef7d]/20 to-[#38ef7d]/5",
  Journal: "from-[#fc6767]/20 to-[#fc6767]/5",
};

const PublicationCard = ({ publication, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.12, 0.75)}
    onClick={() => window.open(publication.link, "_blank")}
    className={`bg-tertiary rounded-2xl overflow-hidden sm:w-[360px] w-full border-l-4 ${
      typeBorderColor[publication.type] || "border-l-[#915EFF]"
    } cursor-pointer hover:bg-[#1a1440] transition-colors duration-300 flex flex-col`}
  >
    <div className={`h-28 bg-gradient-to-br ${typeBg[publication.type] || "from-[#915EFF]/20 to-[#915EFF]/5"} flex items-center justify-center`}>
      {publication.thumbnail ? (
        <img
          src={publication.thumbnail}
          alt={publication.title}
          className='w-full h-full object-cover'
        />
      ) : (
        <span className='text-[48px] opacity-60'>
          {typeIcon[publication.type] || "\u{1F4C4}"}
        </span>
      )}
    </div>

    <div className='p-5 flex flex-col flex-1'>
      <div className='flex items-center gap-3 mb-2'>
        <span
          className={`text-[11px] font-bold uppercase tracking-wider ${publication.typeColor}`}
        >
          {publication.type}
        </span>
        <span className='text-secondary/50 text-[11px]'>&middot;</span>
        <span className='text-secondary/50 text-[11px]'>{publication.date}</span>
      </div>

      <h3 className='text-white font-bold text-[16px] leading-[22px] flex-1'>
        {publication.title}
      </h3>

      <p className='mt-2 text-secondary text-[12px] leading-[20px]'>
        {publication.description}
      </p>

      {publication.author && (
        <p className='mt-2 text-secondary/40 text-[11px]'>
          {publication.author}
        </p>
      )}

      <p className='mt-3 text-[#915EFF] text-[12px] font-medium'>
        Read publication &rarr;
      </p>
    </div>
  </motion.div>
);

const Publications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technical writing</p>
      </motion.div>
      <AnimatedTitle text="Publications" className={styles.sectionHeadText} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Verification manuals, technical articles, and peer-reviewed research
        spanning geotechnical software, foundation design, and pavement
        modeling.
      </motion.p>

      <div className='mt-12 flex flex-wrap justify-center gap-7'>
        {publications.map((publication, index) => (
          <PublicationCard
            key={publication.title}
            publication={publication}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Publications, "publications");
