import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Footer = ({ isDarkMode }) => {
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
    color:
      i % 3 === 0
        ? 'bg-blue-400'
        : i % 3 === 1
        ? 'bg-purple-400'
        : 'bg-pink-400',
  }));

  if (!isMounted) return null;

  return (
    <div className='mt-20 relative overflow-hidden'>
      {/* Background elements */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className='absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-tl-[50%] rounded-br-[50%] blur-3xl'
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='text-center'
      ></motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] py-10 mt-10'
      >
        <p className='text-gray-600 dark:text-gray-300'>
          © 2025 Malith Damsara. All rights reserved
        </p>

        <motion.ul className='flex items-center gap-6 justify-center mt-4 sm:mt-0'>
          {[{
            name: 'GitHub',
            url: 'https://github.com/malith2002damsara',
          },
          {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/malith-damsara-98686a336',
          },
          {
            name: 'Instagram',
            url: 'https://www.instagram.com/_damsara_wild_life_photography',
          },
          { name: 'Email', 
            url: 'mailto:malithdamsara76@gmail.com' },
            
          { name: 'WhatsApp',
             url: 'https://wa.me/+94776270882' },
             
          ].map((item, index) => (
            <motion.li
              key={item.name}
              whileHover={{
                y: -5,
                scale: 1.1,
                color:
                  item.name === 'GitHub'
                    ? '#6e5494'
                    : item.name === 'LinkedIn'
                    ? '#0a66c2'
                    : item.name === 'Instagram'
                    ? '#e1306c'
                    : item.name === 'Email'
                    ? '#ea4335'
                    : item.name === 'WhatsApp'
                    ? '#25d366'
                    : undefined,
              }}
              transition={{ duration: 0.3 }}
              className='text-gray-600 dark:text-gray-300 hover:text-current cursor-pointer'
            >
              <a
                href={item.url}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={item.name}
              >
                {item.name}
              </a>
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
            x: Math.random() * 100 - 50,
          }}
          whileInView={{
            opacity: 0.4,
            y: [0, Math.random() * 40 - 20],
            x: [0, Math.random() * 40 - 20],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: element.id * 0.3,
          }}
          className={`absolute -z-10 rounded-full ${element.color} blur-sm`}
          style={{
            top: element.top,
            left: element.left,
            width: element.size,
            height: element.size,
          }}
        />
      ))}
    </div>
  );
};

export default Footer;