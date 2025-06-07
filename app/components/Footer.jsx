import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Footer = ({isDarkMode}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Generate stable floating elements
  const floatingElements = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    top: `${10 + i * 15}%`,
    left: `${10 + i * 15}%`,
    size: `${10 + i * 2}px`,
    color: i % 3 === 0 ? 'bg-blue-400' : 
           i % 3 === 1 ? 'bg-purple-400' : 'bg-pink-400'
  }));

  if (!isMounted) return null;

  return (
    <div className='mt-20 relative overflow-hidden'>
      {/* Background elements */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-tl-[50%] rounded-br-[50%] blur-3xl"
      />

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <Image 
          src={isDarkMode ? assets.logo_dark : assets.logo} 
          alt='Logo'
          width={144}
          height={144}
          className='w-36 mx-auto mb-2 hover:scale-105 transition-transform duration-300'
        />
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="w-max flex items-center gap-2 mx-auto p-3 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-sm"
        >
          <Image 
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} 
            alt='Email'
            width={24}
            height={24}
            className='w-6'
          />
          <span className="text-gradient bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent font-medium">
            malithdamsara87@gmail.com
          </span>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] py-10 mt-10"
      >
        <p className="text-gray-600 dark:text-gray-300">© 2025 Malith Damsara. All rights reserved</p>
        
        <motion.ul className="flex items-center gap-6 justify-center mt-4 sm:mt-0">
          {['GitHub', 'LinkedIn', 'Instagram'].map((item, index) => (
            <motion.li 
              key={item}
              whileHover={{ 
                y: -5,
                scale: 1.1,
                color: index === 0 ? '#6e5494' : 
                       index === 1 ? '#0a66c2' : '#e1306c'
              }}
              transition={{ duration: 0.3 }}
              className="text-gray-600 dark:text-gray-300 hover:text-current cursor-pointer"
            >
              <a href={`https://${item.toLowerCase()}.com/malithdamsara`}>{item}</a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Floating animated elements with stable positions */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          initial={{ 
            opacity: 0,
            y: Math.random() * 100 - 50,
            x: Math.random() * 100 - 50
          }}
          whileInView={{ 
            opacity: 0.4,
            y: [0, Math.random() * 40 - 20],
            x: [0, Math.random() * 40 - 20]
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: element.id * 0.3
          }}
          className={`absolute -z-10 rounded-full ${element.color} blur-sm`}
          style={{
            top: element.top,
            left: element.left,
            width: element.size,
            height: element.size
          }}
        />
      ))}
    </div>
  );
};

export default Footer;