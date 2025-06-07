'use client'
import React from 'react'
import { workData } from '@/assets/assets'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { assets } from '@/assets/assets'

const WorkDetails = ({ params }) => {
  // Unwrap the params promise
  const { slug } = React.use(params)
  const project = workData.find(work => work.slug === slug)

  // Navigation item for back button
 
  if (!project) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
      >
        <div className="text-center p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Project not found</h2>
          <p className="text-gray-600 dark:text-gray-300">The project you're looking for doesn't exist.</p>
        </div>
      </motion.div>
    )
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const techTagVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  }

  // Enhanced Navigation Link Component
  const NavLink = ({ item, children }) => (
    <Link
      href={item.href}
      className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      {children}
    </Link>
  )

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen py-20 px-[8%] bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/10 dark:to-indigo-900/10"
    >
      <div className="max-w-6xl mx-auto">
      

        {/* Main Content Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Title Section */}
            <motion.div variants={itemVariants}>
              <motion.h1 
                className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              >
                {project.title}
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
                variants={itemVariants}
              >
                {project.description}
              </motion.p>
            </motion.div>

            {/* Detail Sections */}
            <div className="space-y-8">
              {/* Overview */}
              <motion.div 
                variants={itemVariants}
                className="relative p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-200/50 dark:border-blue-700/30 shadow-lg"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-500 rounded-l-2xl" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse" />
                  Overview
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.details.overview}</p>
              </motion.div>

              {/* Challenges */}
              <motion.div 
                variants={itemVariants}
                className="relative p-6 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl border border-orange-200/50 dark:border-orange-700/30 shadow-lg"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-500 to-red-500 rounded-l-2xl" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse" />
                  Challenges
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.details.challenges}</p>
              </motion.div>

              {/* Solution */}
              <motion.div 
                variants={itemVariants}
                className="relative p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border border-green-200/50 dark:border-green-700/30 shadow-lg"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-500 to-emerald-500 rounded-l-2xl" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse" />
                  Solution
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.details.solution}</p>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Image and Details */}
          <div className="space-y-8">
            {/* Project Image */}
            <motion.div 
              variants={imageVariants}
              whileHover={{ scale: 1.02, rotateY: 5 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <div 
                className="aspect-video bg-no-repeat bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url(${project.bgImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent" />
            </motion.div>

            {/* Project Details Card */}
            <motion.div 
              variants={itemVariants}
              className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-8 rounded-2xl border border-white/20 dark:border-gray-700/30 shadow-2xl"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl animate-pulse" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <span className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-spin" />
                  Project Details
                </h3>
                
                <div className="space-y-6">
                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 text-lg">Technologies</h4>
                    <motion.div 
                      className="flex flex-wrap gap-2"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.1
                          }
                        }
                      }}
                    >
                      {project.tech.map((tech, index) => (
                        <motion.span 
                          key={index}
                          variants={techTagVariants}
                          whileHover={{ scale: 1.1, rotate: 2 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 text-blue-800 dark:text-blue-200 border border-blue-200/50 dark:border-blue-700/30 shadow-md hover:shadow-lg transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 text-lg">Features</h4>
                    <ul className="space-y-2">
                      {project.details.features.map((feature, index) => (
                        <motion.li 
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start text-gray-600 dark:text-gray-300 group"
                        >
                          <motion.span 
                            className="mr-3 text-blue-500 font-bold text-lg group-hover:text-purple-500 transition-colors duration-300"
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          >
                            •
                          </motion.span>
                          <span className="group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Date */}
                  <div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 text-lg">Date</h4>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">{project.date}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <motion.div 
                  className="flex gap-4 mt-8"
                  variants={itemVariants}
                >
                  {project.details.liveUrl && (
                    <motion.a 
                      href={project.details.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl transition-all duration-300 flex items-center gap-3 font-semibold shadow-lg group"
                    >
                      <span>Live Demo</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <Image 
                          src={assets.right_arrow_white} 
                          alt="Arrow" 
                          width={16} 
                          height={16}
                          className="group-hover:rotate-12 transition-transform duration-300"
                        />
                      </motion.div>
                    </motion.a>
                  )}
                  
                  {project.details.githubUrl && (
                    <motion.a 
                      href={project.details.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 dark:from-gray-700 dark:to-gray-600 dark:hover:from-gray-600 dark:hover:to-gray-500 text-gray-800 dark:text-gray-200 rounded-xl transition-all duration-300 font-semibold shadow-lg"
                    >
                      View Code
                    </motion.a>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default WorkDetails