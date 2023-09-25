import React from 'react';
import Tilt from "react-parallax-tilt"
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[30px] shadow-card'
    >
      <div
        options={{
          max: 1,
          scale: 3,
          speed: 450,
        }}
        className='bg-tertiary rounded-[30px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      {/* funkce textVariant() je funkce definovaná v souboru motion.js */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText} >Overview</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]' 
      >
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas libero. Fusce wisi. Fusce tellus. Aliquam in lorem sit amet leo accumsan lacinia. Integer imperdiet lectus quis justo. Etiam dictum tincidunt diam. Praesent id justo in neque elementum ultrices. Praesent dapibus. Curabitur vitae diam non enim vestibulum interdum. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Nullam faucibus mi quis velit. Vivamus ac leo pretium faucibus. Integer lacinia. Suspendisse sagittis ultrices augue. Maecenas aliquet accumsan leo.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => 
          <ServiceCard key={service.title} index={index} {...service} />
        )}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")