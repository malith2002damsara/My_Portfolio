import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Work = ({ isDarkMode }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 0.8, ease: "easeOut" }} 
      id='work' 
      className='w-full px-[12%] py-20 scroll-mt-20 relative overflow-hidden'
    >
      {/* Background elements */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ 
          scale: 1, 
          opacity: 0.1,
          transition: { 
            duration: 1.5, 
            delay: 0.3,
            type: "spring",
            damping: 10
          } 
        }}
        className="absolute -z-10 top-1/3 right-1/4"
      >
        <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl opacity-20"></div>
      </motion.div>

      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ 
          scale: 1, 
          opacity: 0.1,
          transition: { 
            duration: 1.5, 
            delay: 0.5,
            type: "spring",
            damping: 10
          } 
        }}
        className="absolute -z-10 bottom-1/4 left-1/4"
      >
        <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500 to-teal-400 blur-3xl opacity-20"></div>
      </motion.div>

      {/* Section Header */}
      <motion.h4 
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ 
          y: 0, 
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2
          }
        }}
        className='text-center mb-2 text-lg font-Ovo text-gradient bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent'
      >
        {/* My Portfolio */}
      </motion.h4>
      
      <motion.h2 
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ 
          y: 0, 
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 80,
            damping: 10,
            delay: 0.4
          }
        }}
        className='text-center text-5xl font-Ovo font-bold'
      >
        My <span className="text-gradient bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">Works</span>
      </motion.h2>

      <motion.p 
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ 
          scale: 1, 
          opacity: 1,
          transition: {
            duration: 0.6,
            delay: 0.6,
            ease: "backOut"
          }
        }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-gray-300"
      >
        Welcome to my web development portfolio. Explore a collection of projects showcasing my expertise in front-end development.
      </motion.p>

      {/* Projects Grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ 
          opacity: 1,
          transition: {
            duration: 0.6,
            delay: 0.8,
            staggerChildren: 0.1,
            when: "beforeChildren"
          }
        }}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 gap-8'
      >
        {workData.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ y: 60, opacity: 0, rotateY: 15 }}
            whileInView={{ 
              y: 0, 
              opacity: 1,
              rotateY: 0,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.15
              }
            }}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3 }
            }}
            className="relative group cursor-pointer"
          >
            {/* Card Container with Glass Morphism Effect */}
            <motion.div 
              whileHover={{
                boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.2)',
              }}
              className="h-full w-full overflow-hidden rounded-2xl bg-white/10 dark:bg-gray-900/10 backdrop-blur-md border border-white/20 dark:border-gray-700/30 shadow-lg transition-all duration-300"
            >
              {/* Image Container */}
              <motion.div 
                style={{ backgroundImage: `url(${project.bgImage})` }}
                className="aspect-video bg-no-repeat bg-cover bg-center relative overflow-hidden"
              >
                {/* Gradient Overlay */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ 
                    opacity: 1,
                    transition: { duration: 0.3 }
                  }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                />
                
                {/* Tech Stack Badges */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ 
                    y: 0, 
                    opacity: 1,
                    transition: { delay: index * 0.15 + 0.2 }
                  }}
                  className="absolute top-4 left-4 flex gap-2 flex-wrap"
                >
                  {project.tech?.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-black/80 text-white backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>
              </motion.div>
              
              {/* Project Info - Enhanced */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ 
                  y: 0, 
                  opacity: 1,
                  transition: { delay: index * 0.15 + 0.3 }
                }}
                className="p-6"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Animated Action Button */}
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, 10, -5, 0],
                      backgroundColor: isDarkMode ? '#3b82f6' : '#2563eb',
                      transition: {
                        rotate: {
                          duration: 0.5,
                          repeat: 1,
                          repeatType: "reverse"
                        }
                      }
                    }}
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center shadow-md hover:shadow-lg transition-all"
                  >
                    <Image 
                      src={assets.send_icon} 
                      alt='send icon' 
                      className='w-5 invert'
                    />
                  </motion.div>
                </div>
                
                {/* Additional Info (dates, etc) */}
                {project.date && (
                  <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    {project.date}
                  </div>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Show More Button */}
      <motion.a 
        initial={{ y: 40, opacity: 0, scale: 0.9 }}
        whileInView={{ 
          y: 0, 
          opacity: 1,
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 1.2
          }
        }}
        whileHover={{
          scale: 1.05,
          backgroundColor: isDarkMode ? 'rgba(30, 41, 59, 0.8)' : 'rgba(241, 245, 249, 0.8)',
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.98 }}
        href="" 
        className="w-max flex items-center justify-center gap-2 text-gray-700 dark:text-white border-[0.5px] border-gray-700 dark:border-white rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover dark:hover:bg-darkHover hover:shadow-lg"
      >
        Show More
        <motion.div
          initial={{ x: 0 }}
          animate={{ 
            x: [0, 5, 0],
            rotate: [0, 10, 0],
            transition: { 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <Image 
            src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} 
            alt='Right arrow' 
            className='w-4' 
          />
        </motion.div>
      </motion.a>

      {/* Floating animated elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: 0,
            y: Math.random() * 200 - 100,
            x: Math.random() * 200 - 100,
            rotate: Math.random() * 360
          }}
          whileInView={{ 
            opacity: [0.2, 0.5, 0.2],
            y: [0, Math.random() * 80 - 40],
            x: [0, Math.random() * 80 - 40],
            rotate: [0, Math.random() * 180 - 90],
            transition: {
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: i * 0.3,
              ease: "easeInOut"
            }
          }}
          className={`absolute -z-10 rounded-full ${
            i % 3 === 0 ? 'bg-blue-400/30' : 
            i % 3 === 1 ? 'bg-purple-400/30' : 'bg-yellow-400/30'
          } blur-sm`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 24 + 8}px`,
            height: `${Math.random() * 24 + 8}px`
          }}
        />
      ))}
    </motion.div>
  )
}

export default Work