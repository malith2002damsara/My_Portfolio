// Contact.js
import React, { useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from 'framer-motion';

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

     formData.append("access_key", "6228d079-7210-4318-bdc2-0cdd7085cc21");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

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

      <motion.h4 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className='text-center mb-2 text-lg font-Ovo text-gradient bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent'
      >
        {/* Contact With Me */}
      </motion.h4>
      
      <motion.h2 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='text-center text-5xl font-Ovo font-bold'
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

      <motion.form 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        onSubmit={onSubmit} 
        className='max-w-2xl mx-auto bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg'
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            <input 
              type="text" 
              placeholder="Enter your name" 
              required 
              className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-lg bg-white/80 dark:bg-darkHover/30 dark:border-white/90 transition-all focus:ring-2 focus:ring-purple-500 focus:border-transparent'
              name='name'
            />
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            <input 
              type="email" 
              placeholder="Enter your email" 
              required 
              className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-lg bg-white/80 dark:bg-darkHover/30 dark:border-white/90 transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              name='email' 
            />
          </motion.div>
        </div>
        
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <textarea 
            rows='6' 
            placeholder='Enter your message' 
            required 
            className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-lg bg-white/80 dark:bg-darkHover/30 dark:border-white/90 mb-6 transition-all focus:ring-2 focus:ring-teal-500 focus:border-transparent'
            name='message'
          ></textarea>
        </motion.div>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          type='submit' 
          className='py-4 px-10 w-full md:w-max flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full mx-auto shadow-lg hover:shadow-xl transition-all'
        >
          Submit Now
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Image src={assets.right_arrow_white} alt='' className='w-4'/>
          </motion.div>
        </motion.button>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: result ? 1 : 0 }}
          className="mt-4 text-center text-sm text-gray-600 dark:text-gray-300"
        >
          {result}
        </motion.p>
      </motion.form>

      {/* Floating elements */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
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
            delay: i * 0.3
          }}
          className={`absolute -z-10 w-32 h-32 rounded-full ${
            i % 3 === 0 ? 'bg-blue-400/20' : 
            i % 3 === 1 ? 'bg-purple-400/20' : 'bg-pink-400/20'
          } blur-xl`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`
          }}
        />
      ))}
    </motion.div>
  );
};

export default Contact;