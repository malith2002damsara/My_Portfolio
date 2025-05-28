// Footer.js
import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Footer = ({isDarkMode}) => {
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
          alt='' 
          className='w-36 mx-auto mb-2 hover:scale-105 transition-transform duration-300'
        />
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="w-max flex items-center gap-2 mx-auto p-3 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-sm"
        >
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/>
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
              key={index}
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

      {/* Floating animated elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
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
            delay: i * 0.3
          }}
          className={`absolute -z-10 w-4 h-4 rounded-full ${
            i % 3 === 0 ? 'bg-blue-400' : 
            i % 3 === 1 ? 'bg-purple-400' : 'bg-pink-400'
          } blur-sm`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 20 + 10}px`,
            height: `${Math.random() * 20 + 10}px`
          }}
        />
      ))}
    </div>
  );
};

export default Footer;