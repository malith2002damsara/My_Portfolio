import React, { useEffect, useState } from 'react';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    window.scrollTo(0, 0);
  }, []);

  // Generate stable random positions for floating elements
  const floatingElements = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    top: `${20 + i * 15}%`,
    left: `${10 + i * 15}%`,
    width: `${10 + i * 2}px`,
    height: `${10 + i * 2}px`,
    color: i % 3 === 0 ? 'from-blue-400 to-cyan-400' : 
           i % 3 === 1 ? 'from-purple-400 to-pink-400' : 'from-yellow-400 to-orange-400'
  }));

  if (!isMounted) return null;

  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 relative overflow-hidden'>
      {/* Animated background elements */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute -z-10"
      >
        <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl opacity-20"></div>
      </motion.div>

      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: 'spring',
          stiffness: 100,
          damping: 10,
          duration: 0.8
        }}
        whileHover={{ scale: 1.05 }}
        className="relative mt-20" // <-- Added margin-top here
      >
        <Image 
          src={assets.profile_img} 
          alt='Profile' 
          width={128}
          height={128}
          className='rounded-full w-32 border-4 border-white/20 shadow-lg'
        />
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 rounded-full border-2 border-pink-500/30 pointer-events-none"
        />
      </motion.div>

      <motion.h3 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo text-gradient bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent'
      >
        Hi, I'm Malith Damsara
        <motion.div
          animate={{ rotate: [0, 20, 0, -20, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3
          }}
        >
          {/* <Image src={assets.hand_icon} alt='Wave' width={24} height={24} className='w-6'/>   */}
        </motion.div>
      </motion.h3>

      <motion.h1 
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo font-bold leading-tight'
      >
        <span className="text-gradient bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
          FullStack
        </span> developer ,
        <span className="text-gradient bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
          Data Science
        </span> & CS undergraduate.
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo text-gray-600 dark:text-gray-300"
      >
      Computer Science undergraduate at the University of Colombo with a passion for building impactful software solutions across web, mobile, data science, and machine learning projects.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
        <motion.a 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact" 
          className='px-10 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'
        >
          Contact me
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity
            }}
          >
            <Image src={assets.right_arrow_white} alt='Arrow' width={16} height={16} className='w-4' />
          </motion.div>
        </motion.a>
        
        <motion.a            
          initial={{ y: 30, opacity: 0 }}           
          animate={{ y: 0, opacity: 1 }}           
          transition={{ duration: 0.6, delay: 1.2 }}           
          href="/Malith-Damsara.pdf"            
          download            
          className='px-10 py-3 rounded-full bg-white dark:bg-white-800 border border-gray-200 dark:border-white-700 flex items-center gap-2 shadow hover:shadow-md transition-all duration-300 hover:scale-105 text-black dark:text-black'         
        >           
          My resume           
          <motion.div             
            animate={{ y: [0, -3, 0] }}             
            transition={{                
              duration: 1,               
              repeat: Infinity             
            }}           
          >             
            <Image src={assets.download_icon} alt='Download' width={16} height={16} className='w-4' />           
          </motion.div>         
        </motion.a>
      </div>

      {/* Floating animated elements with stable positions */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            y: [0, Math.random() * 40 - 20],
            x: [0, Math.random() * 40 - 20]
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: element.id * 0.5
          }}
          className={`absolute -z-10 rounded-full bg-gradient-to-r ${element.color} blur-sm`}
          style={{
            top: element.top,
            left: element.left,
            width: element.width,
            height: element.height
          }}
        />
      ))}
    </div>
  );
};

export default Header;