import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { assets, serviceData } from '@/assets/assets'
import { motion } from 'framer-motion'

const Services = () => {
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
    color: i % 3 === 0 ? 'from-blue-400 to-cyan-400' : 
           i % 3 === 1 ? 'from-purple-400 to-pink-400' : 'from-yellow-400 to-orange-400'
  }));

  if (!isMounted) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 1 }} 
      id='services' 
      className='w-full px-[12%] py-20 scroll-mt-20 relative overflow-hidden'
    >
      {/* Animated background elements */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute -z-10 top-1/4 left-1/4"
      >
        <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500 to-teal-400 blur-3xl opacity-20"></div>
      </motion.div>

      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 2, delay: 0.7 }}
        className="absolute -z-10 bottom-1/4 right-1/4"
      >
        <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl opacity-20"></div>
      </motion.div>

      <motion.h2 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo font-bold mt-3'
      >
        My <span className="text-gradient bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">Services</span>
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-gray-300"
      >
        I am frontend developer from Colombo, SL with 3 years of experience in multiple companies like Google, WSO2, IFS.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10"
      >
        {serviceData.map(({icon, title, description, link}, index) => (
          <motion.div 
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}
            className="border border-gray-200 dark:border-gray-700 rounded-lg px-8 py-12 hover:shadow-lg cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white/20 relative overflow-hidden"
          >
            <motion.div
              whileHover={{ rotate: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Image 
                src={icon} 
                alt={title}
                width={40}
                height={40}
                className='w-10'
              />
            </motion.div>
            
            <h3 className='text-lg my-4 text-gray-700 dark:text-white font-semibold'>{title}</h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80 mb-6">
              {description}
            </p>
            
            <motion.a 
              href={link} 
              className='flex items-center gap-2 text-sm mt-5 text-blue-600 dark:text-blue-400'
              whileHover={{ x: 5 }}
            >
              Read More 
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity
                }}
              >
                <Image 
                  src={assets.right_arrow} 
                  alt="Arrow"
                  width={16}
                  height={16}
                  className='w-4'
                />
              </motion.span>
            </motion.a>
            
            <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-blue-500/10 dark:bg-blue-400/10 blur-lg"></div>
          </motion.div>
        ))}
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
            width: element.size,
            height: element.size
          }}
        />
      ))}
    </motion.div>
  )
}

export default Services