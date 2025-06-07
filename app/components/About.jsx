import { assets, infoList, toolsData } from '@/assets/assets';
import React, { useState,useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = ({isDarkMode}) => {
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
      className='w-full px-[12%] py-20 scroll-mt-20 relative overflow-hidden'
    >
      {/* Background elements */}
      <motion.div
        initial={{ x: -100, y: -100, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-blue-500 to-teal-400 blur-3xl -z-10"
      />
      <motion.div
        initial={{ x: 100, y: 100, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 0.1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl -z-10"
      />

      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo font-bold mt-3'
      >
        About <span className="text-gradient bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">Me</span>
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="relative w-64 sm:w-80 rounded-3xl max-w-none overflow-hidden shadow-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl -z-10" />
          <Image 
            src={assets.profile_img}  
            alt='Profile'
            width={320}
            height={320}
            className='w-full rounded-3xl hover:scale-105 transition-transform duration-500'
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
            className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 blur-2xl opacity-30 -z-20"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="mb-10 max-w-2xl font-Ovo text-gray-600 dark:text-gray-300 leading-relaxed">
            Cloud computing is a technology that uses the internet and central remote servers to maintain data and applications.
            Cloud computing allows consumers and businesses to use applications without installation and access their personal files
            at any computer with internet access. This technology allows for much more efficient computing by centralizing storage,
            memory, processing and bandwidth.
          </p>
             
          <motion.ul 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'
          >
            {infoList.map(({icon,iconDark,title,description},index) => (
              <motion.li 
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: isDarkMode ? '0 10px 25px -5px rgba(255, 255, 255, 0.1)' : '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                }}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-lg dark:border-white dark:hover:bg-darkHover/50 backdrop-blur-sm bg-white/30 dark:bg-gray-800/30"
                key={index}
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Image 
                    src={isDarkMode ? iconDark : icon} 
                    alt={title} 
                    width={28}
                    height={28}
                    className='w-7 mt-3'
                  />
                </motion.div>
                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                <p className="text-gray-600 text-sm dark:text-white/80">{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.5 }}
            className='my-6 text-gray-700 font-Ovo dark:text-white/80'
          >
            Tools I use
          </motion.h4>
          
          <motion.ul 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-wrap items-center gap-3 sm:gap-5'
          >
            {toolsData.map((tool,index) => (
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
                className='flex items-center justify-center w-12 sm:w-14 aspect-square rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700'
                key={index}
              >
                <motion.div
                  whileHover={{ rotate: 15 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <Image 
                    src={tool} 
                    alt='Tool' 
                    width={28}
                    height={28}
                    className='w-5 sm:w-7'
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