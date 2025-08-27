import { assets, infoList, toolsData } from '@/assets/assets';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = ({ isDarkMode }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='about' 
      className='w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[12%] py-12 md:py-16 lg:py-20 scroll-mt-20 relative overflow-hidden'
    >
      {/* Background elements */}
      <motion.div
        initial={{ x: -100, y: -100, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-0 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] rounded-full bg-gradient-to-r from-blue-500 to-teal-400 blur-xl md:blur-2xl lg:blur-3xl -z-10"
      />
      <motion.div
        initial={{ x: 100, y: 100, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 0.1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-0 right-0 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-xl md:blur-2xl lg:blur-3xl -z-10"
      />

      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-3xl sm:text-4xl md:text-5xl font-Ovo font-bold mt-3'
      >
        About <span className="text-gradient bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">Me</span>
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center justify-center lg:items-start gap-10 md:gap-14 lg:gap-16 xl:gap-20 my-12 md:my-16 lg:my-20"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="relative w-56 xs:w-64 sm:w-72 md:w-80 rounded-2xl md:rounded-3xl max-w-none overflow-hidden shadow-lg md:shadow-xl mx-auto lg:mx-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl md:rounded-3xl -z-10" />
          <Image 
            src={assets.profile_img}  
            alt='Profile'
            width={320}
            height={320}
            className='w-full rounded-2xl md:rounded-3xl hover:scale-105 transition-transform duration-500'
          />
          <motion.div
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
            className="absolute -bottom-10 -left-10 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 blur-xl md:blur-2xl opacity-30 -z-20"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1 w-full max-w-2xl mx-auto lg:mx-0"
        >
          <p className="mb-8 md:mb-10 text-sm sm:text-base font-Ovo text-gray-600 dark:text-gray-300 leading-relaxed sm:leading-loose">
            I am a Computer Science undergraduate at the University of Colombo School of Computing (UCSC) with a strong
            interest in Data Science, Full-Stack Software Engineering, and Machine Learning. I enjoy working across the entire
            development from designing secure and scalable backends to building user-friendly frontends. My experience
            spans web, mobile, and machine learning projects, where I focus on creating clean, efficient, and impactful
            solutions.
          </p>
             
          <motion.ul 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-2xl mx-auto lg:mx-0'
          >
            {infoList.map(({icon, iconDark, title, description}, index) => (
              <motion.li 
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: isDarkMode ? '0 10px 25px -5px rgba(255, 255, 255, 0.1)' : '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                }}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-[0.5px] border-gray-400 rounded-lg md:rounded-xl p-4 md:p-5 lg:p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-lg dark:border-white dark:hover:bg-darkHover/50 backdrop-blur-sm bg-white/30 dark:bg-gray-800/30"
                key={index}
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="flex justify-center md:justify-start"
                >
                  <Image 
                    src={isDarkMode ? iconDark : icon} 
                    alt={title} 
                    width={28}
                    height={28}
                    className='w-6 md:w-7 mt-2 md:mt-3'
                  />
                </motion.div>
                <h3 className='my-3 md:my-4 font-semibold text-sm md:text-base text-gray-700 dark:text-white text-center md:text-left'>{title}</h3>
                <p className="text-gray-600 text-xs md:text-sm dark:text-white/80 text-center md:text-left">{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.5 }}
            className='my-5 md:my-6 text-lg md:text-xl text-gray-700 font-Ovo dark:text-white/80 text-center lg:text-left'
          >
            Technologies & Tools
          </motion.h4>
          
          <motion.ul 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 md:gap-5'
          >
            {toolsData.map((tool, index) => (
              <motion.li 
                whileHover={{ 
                  scale: 1.1,
                  y: -5,
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
                }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                  delay: index * 0.05
                }}
                className='flex items-center justify-center w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 aspect-square rounded-md md:rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700'
                key={index}
              >
                <motion.div
                  whileHover={{ rotate: 15 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <Image 
                    src={tool} 
                    alt='Tool' 
                    width={32}
                    height={32}
                    className='w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 object-contain'
                  />
                </motion.div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;