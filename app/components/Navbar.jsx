import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from 'framer-motion';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const sideMenuRef = useRef();

  useEffect(() => {
    setIsMounted(true);
    
    // Restore dark mode from localStorage on mount
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      const isDark = savedTheme === 'dark';
      setIsDarkMode(isDark);
      // Apply theme immediately to prevent flash
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      // Check system preference if no saved theme
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add('dark');
      }
    }
    
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setIsDarkMode]);

  // Persist dark mode changes
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [isDarkMode, isMounted]);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(16rem)';
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', href: '#top' },
    { id: 'about', label: 'About me', href: '#about' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'work', label: 'My Work', href: '#work' },
    { id: 'contact', label: 'Contact me', href: '#contact' },
  ];

  const handleThemeToggle = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!isMounted) {
    return (
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <div className="w-28 h-28"></div> {/* Placeholder to prevent layout shift */}
      </nav>
    );
  }

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image 
          src={assets.header_bg_color} 
          alt="Header background"
          width={1200}
          height={200}
          className="w-full" 
        />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        <motion.a
          href="#top"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            width={112}
            height={112}
            className="w-28 cursor-pointer mr-14"
            alt="Logo"
          />
        </motion.a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-all duration-300 ${
            isScroll
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          {navItems.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <a
                className="font-Ovo hover:text-gradient bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent transition-all duration-300"
                href={item.href}
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <motion.button
            onClick={handleThemeToggle}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1, rotate: 15 }}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              width={24}
              height={24}
              alt="Theme toggle"
              className="w-6"
            />
          </motion.button>

          <motion.a
            href="#contact"
            className="font-Ovo hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 hover:bg-gradient-to-r from-purple-600 to-pink-500 hover:text-white hover:border-transparent transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Image
                src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
                width={12}
                height={12}
                alt="Arrow"
                className="w-3"
              />
            </motion.div>
          </motion.a>

          <motion.button
            className="block md:hidden ml-3 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            onClick={openMenu}
            whileTap={{ scale: 0.9 }}
            aria-label="Open menu"
          >
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              width={24}
              height={24}
              alt="Menu"
              className="w-6"
            />
          </motion.button>
        </div>

        {/* Mobile menu */}
        <motion.ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-8 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white shadow-lg"
          initial={{ x: 0 }}
        >
          <motion.div
            className="absolute right-6 top-6 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            onClick={closeMenu}
            whileHover={{ rotate: 90, scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              width={20}
              height={20}
              alt="Close menu"
              className="w-5 cursor-pointer"
            />
          </motion.div>

          {navItems.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: 5 }}
            >
              <a
                className="font-Ovo text-lg hover:text-gradient bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent transition-all duration-300"
                onClick={closeMenu}
                href={item.href}
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </>
  );
};

export default Navbar;