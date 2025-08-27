import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { assets, serviceData, workData } from '@/assets/assets'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Services = ({ isDarkMode }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [showProjectsModal, setShowProjectsModal] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setShowProjectsModal(true);
  };

  const closeProjectsModal = () => {
    setShowProjectsModal(false);
    setSelectedService(null);
  };

  const getProjectsByCategory = (category) => {
    return workData.filter(project => project.category === category);
  };

  if (!isMounted) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 0.8, ease: "easeOut" }} 
      id='services' 
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
        className="absolute -z-10 top-1/4 left-1/4"
      >
        <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl opacity-20"></div>
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
        className="absolute -z-10 bottom-1/4 right-1/4"
      >
        <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 blur-3xl opacity-20"></div>
      </motion.div>

      <motion.h2 
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ 
          y: 0, 
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 80,
            damping: 10,
            delay: 0.4,
          }
        }}
        className='text-center text-5xl font-Ovo font-bold mt-3'
      >
        My <span className="text-gradient bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Services</span>
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
        I offer a comprehensive range of development services. Click on any service to explore my related projects.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ 
          opacity: 1,
          transition: {
            duration: 0.6,
            delay: 0.8,
            staggerChildren: 0.2,
            when: "beforeChildren"
          }
        }}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-10'
      >
        {serviceData.map((service, index) => (
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
            onClick={() => handleServiceClick(service)}
            className="group cursor-pointer"
          >
            <motion.div 
              whileHover={{
                boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.2)',
                scale: 1.02,
              }}
              className="h-full p-8 rounded-2xl bg-white/10 dark:bg-gray-900/10 backdrop-blur-md border border-white/20 dark:border-gray-700/30 shadow-lg transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-50/50 hover:to-purple-50/50 dark:hover:from-gray-800/50 dark:hover:to-gray-700/50"
            >
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ 
                  scale: 1, 
                  opacity: 1,
                  transition: { delay: index * 0.15 + 0.2 }
                }}
                whileHover={{ 
                  rotate: 360,
                  transition: { duration: 0.6 }
                }}
                className="mb-6"
              >
                <Image 
                  src={isDarkMode ? service.iconDark || service.icon : service.icon} 
                  alt={service.title}
                  width={64}
                  height={64}
                  className="w-16 h-16 mx-auto"
                />
              </motion.div>

              <motion.h3 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ 
                  y: 0, 
                  opacity: 1,
                  transition: { delay: index * 0.15 + 0.3 }
                }}
                className="text-xl font-bold text-center text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-4"
              >
                {service.title}
              </motion.h3>

              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ 
                  y: 0, 
                  opacity: 1,
                  transition: { delay: index * 0.15 + 0.4 }
                }}
                className="text-center text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
              >
                {service.description}
              </motion.p>

              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ 
                  scale: 1, 
                  opacity: 1,
                  transition: { delay: index * 0.15 + 0.5 }
                }}
                className="flex justify-center"
              >
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  <span className="mr-2">View Projects</span>
                  <Image 
                    src={assets.right_arrow} 
                    alt="Arrow"
                    width={16}
                    height={16}
                    className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300"
                  />
                </div>
              </motion.div>

              <motion.div 
                initial={{ scaleX: 0 }}
                whileHover={{ 
                  scaleX: 1,
                  transition: { duration: 0.3 }
                }}
                className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4 origin-left"
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Projects Modal */}
      {showProjectsModal && selectedService && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={closeProjectsModal}
        >
          <motion.div 
            initial={{ scale: 0.5, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.5, opacity: 0, y: 50 }}
            className="relative max-w-6xl w-full max-h-[90vh] bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
              <div className="flex items-center">
                <Image 
                  src={isDarkMode ? selectedService.iconDark || selectedService.icon : selectedService.icon} 
                  alt={selectedService.title}
                  width={40}
                  height={40}
                  className="w-10 h-10 mr-4"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedService.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {getProjectsByCategory(selectedService.category).length} Projects
                  </p>
                </div>
              </div>
              <button 
                onClick={closeProjectsModal}
                className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-full hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getProjectsByCategory(selectedService.category).map((project, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: index * 0.1 }
                    }}
                    whileHover={{ y: -5 }}
                    className="group cursor-pointer"
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                      <div 
                        style={{ backgroundImage: `url(${project.bgImage})` }}
                        className="aspect-video bg-cover bg-center relative"
                      >
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                        <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                          {project.tech.slice(0, 2).map((tech, i) => (
                            <span 
                              key={i}
                              className="px-2 py-1 text-xs font-medium rounded-full bg-black/70 text-white backdrop-blur-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                          {project.description}
                        </p>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {project.date}
                          </span>
                          <Link href={`/works/${project.slug}`} className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
                            View Details →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {getProjectsByCategory(selectedService.category).length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-500 dark:text-gray-400 mb-4">
                    <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                    </svg>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    No projects found for this service category.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Services