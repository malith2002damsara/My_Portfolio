import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const achievements = [
  {
    category: 'Certifications',
    items: [
      'AWS Educate Introduction to Cloud 101 - Amazon Web Services (2024)',
      'National Certificate in Computer Graphic Design (NVQ Level 4) - VTA Sri Lanka (2023)',
    ]
  },
  {
    category: 'Leadership Roles',
    items: [
      'Junior Treasurer - Colombo Beacon Club, University of Colombo (2025/2026)',
      'Middle Board Director, Sports & Recreation - Colombo Beacon Club (2024/2025)',
      'Vice President - Andromeda Astronomical Society, Piliyandala Central College (2019/2020)',
    ]
  },
  {
    category: 'Academic Achievements',
    items: [
      'Certificate of Appreciation as Top Board/Middle Board Director - Colombo Beacon (2024/2025)',
      'Merit Award, Sri Lankan Astronomy and Astrophysics Olympiad Competition (2019)',
      'Certificate of Credit, Australian National Chemistry Quiz (ANCQ) - Year 11 (2019)',
    ]
  },
  {
    category: 'Competitions & Events',
    items: [
      'Champion Team Member - "Cascading towards a greener future" Debating Competition (2023)',
      'Organized first annual night sky observation camp - Andromeda Astronomical Society',
      'Notable placements in astronomy quiz competitions',
    ]
  }
];

const educationData = [
  {
    institution: 'University of Colombo School of Computing (UCSC)',
    degree: 'Bachelor of Science in Computer Science',
    period: '2022 - Present',
    location: 'Colombo, Sri Lanka'
  },
  {
    institution: 'IMBS Green Campus',
    degree: 'Diploma in Human Resource Management',
    period: '2025 - Present',
    location: 'Gampaha, Sri Lanka'
  },
  {
    institution: 'Piliyandala Central College',
    degree: 'GCE A/L - Physics: A | Combined Mathematics: B | Chemistry: B',
    period: 'Completed',
    location: 'Z-Score: 1.67'
  }
];

const Achievements = ({ isDarkMode }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='achievements' 
      className='w-full px-[12%] py-20 scroll-mt-20 relative overflow-hidden'
    >
      {/* Background elements */}
      <motion.div
        initial={{ x: -100, y: -100, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-green-500 to-blue-400 blur-3xl -z-10"
      />
      <motion.div
        initial={{ x: 100, y: 100, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 0.1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 blur-3xl -z-10"
      />

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className='text-center text-5xl font-Ovo font-bold mb-8'>
          <span className="text-gradient bg-gradient-to-r from-green-500 to-blue-400 bg-clip-text text-transparent">Education</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-3 h-3 rounded-full bg-gradient-to-r from-green-500 to-blue-400 mt-2"></div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 dark:text-white mb-1">
                    {edu.institution}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {edu.degree}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {edu.period} • {edu.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Achievements Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className='text-center text-5xl font-Ovo font-bold mb-12'>
          Achievements & <span className="text-gradient bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Leadership</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              className="p-8 rounded-2xl bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: categoryIndex * 0.15 + 0.2 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
                  <Image 
                    src={assets.project_icon} 
                    alt="Achievement" 
                    width={16} 
                    height={16} 
                    className="w-4 invert"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {achievement.category}
                </h3>
              </motion.div>

              <ul className="space-y-3">
                {achievement.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.15 + itemIndex * 0.1 + 0.3 
                    }}
                    className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 mt-2"></div>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Achievements;
