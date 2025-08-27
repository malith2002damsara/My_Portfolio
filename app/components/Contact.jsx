import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Contact = ({ isDarkMode }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  // Generate stable floating elements positions
  const floatingElements = [
    { id: 0, top: '20%', left: '10%', color: 'bg-blue-400/20' },
    { id: 1, top: '60%', left: '80%', color: 'bg-purple-400/20' },
    { id: 2, top: '40%', left: '50%', color: 'bg-pink-400/20' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='contact' 
      className='w-full px-[12%] py-20 scroll-mt-20 relative overflow-hidden'
    >
      {/* Background gradient */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-tl-[50%] rounded-br-[50%] blur-3xl"
      />

      <motion.h2 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='text-center text-5xl font-Ovo font-bold mt-3'
      >
        Get In <span className="text-gradient bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">Touch</span>
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-gray-300"
      >
        Feel free to reach out to me for any questions or opportunities. I'll get back to you as soon as possible!
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className='max-w-xl mx-auto bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-blue-100 dark:border-gray-700'
      >
        <div className="flex flex-col gap-8 items-center">
          <a
            href="mailto:malithdamsara76@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-4 px-6 rounded-xl bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-semibold text-lg shadow hover:bg-blue-200 dark:hover:bg-blue-800 transition-all duration-200"
          >
            Email
          </a>
          <a
            href="https://wa.me/+94776270882"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-4 px-6 rounded-xl bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 font-semibold text-lg shadow hover:bg-green-200 dark:hover:bg-green-800 transition-all duration-200"
          >
            WhatsApp
          </a>
          <a
            href="https://www.linkedin.com/in/malith-damsara-98686a336"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-4 px-6 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-800 dark:text-blue-200 font-semibold text-lg shadow hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-200"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>

      {/* Floating elements with stable positions */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          initial={{ 
            opacity: 0,
            scale: 0.5,
            x: Math.random() * 200 - 100,
            y: Math.random() * 200 - 100
          }}
          whileInView={{ 
            opacity: 0.3,
            scale: 1
          }}
          transition={{
            duration: 1,
            delay: element.id * 0.3
          }}
          className={`absolute -z-10 w-32 h-32 rounded-full ${element.color} blur-xl`}
          style={{
            top: element.top,
            left: element.left
          }}
        />
      ))}
    </motion.div>
  );
};

export default Contact;