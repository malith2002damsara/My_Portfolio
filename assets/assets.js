import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import node from './node.png';
import flutter from './flutter.png';
import postman from './postman.png';
import tailwind from './tailwind.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import react from './react.svg';
import leadership_icon from './leadership-icon.png';
import leadership_icon_dark from './leadership-icon-dark.png';

export const assets = {
   
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    node,
    react,
    tailwind,
    flutter,
    postman,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    leadership_icon,
    leadership_icon_dark
};

export const workData = [
    {
        title: 'Serandip Clothing E-commerce Platform',
        description: 'MERN Stack | E-commerce',
        bgImage: '/serandip.png',
        slug: 'serandip-ecommerce',
        tech: ['MERN Stack', 'Cloudinary', 'JWT'],
        date: 'Completed - 2025',
        category: 'web', // Add category
        details: {
            overview: 'Developed a full-scale e-commerce platform single-handedly, taking charge of the entire user journey from account creation and product discovery to a secure, integrated payment checkout.',
            challenges: 'Building a comprehensive platform with admin dashboard, seller management, and secure payment integration.',
            solution: 'Implemented JWT-based authentication with encryption and integrated Cloudinary for image storage. Built comprehensive admin dashboard for managing sellers, listings, orders, and visualizing sales analytics.',
            features: ['Full e-commerce functionality', 'Admin dashboard', 'Seller management', 'Sales analytics', 'Secure authentication'],
            liveUrl: 'https://ceylonfrontend.vercel.app',
            githubUrl: 'https://github.com/malith2002damsara/Serandip.git'
        }
    },
    {
        title: 'Miracle Lighting Services Website',
        description: 'Professional Service Website',
        bgImage: '/miracle.png',
        slug: 'miracle-lighting',
        tech: ['React.js', 'Vercel', 'LankaHost'],
        date: 'Completed - 2024',
        category: 'web',
        details: {
            overview: 'Developed a professional website for decorative lighting services for weddings, Kathina festivals, Christmas parties, and birthday parties.',
            challenges: 'Creating a responsive design with custom domain deployment and complementary link-in-bio functionality.',
            solution: 'Implemented fully responsive modern UI/UX design with custom domain deployment and created complementary link-in-bio page with QR code access capability.',
            features: ['Responsive design', 'Custom domain', 'Link-in-bio page', 'QR code access'],
            liveUrl: 'https://www.miraclelighting.lk',
            githubUrl: 'https://github.com/malith2002damsara/Miracle_Lighting.git'
        }
    },
    {
        title: 'Real-time Group Chat Application',
        description: 'MERN Stack | Real-time Messaging',
        bgImage: '/mern-chatapp.png',
        slug: 'group-chat-app',
        tech: ['MERN Stack', 'Socket.io', 'Cloudinary'],
        date: 'Completed - 2025',
        category: 'web',
        details: {
            overview: 'Developed real-time messaging application with community group chat functionality and secure message encryption.',
            challenges: 'Implementing real-time messaging with secure authentication and image sharing capabilities.',
            solution: 'Used Socket.io for real-time communication, JWT encryption for securing messages and passwords, and integrated Cloudinary for storing profile pictures and chat images.',
            features: ['Real-time messaging', 'Community groups', 'Image sharing', 'Mobile-responsive', 'Secure authentication'],
            liveUrl: 'https://mongochatfrontend.vercel.app',
            githubUrl: 'https://github.com/malith2002damsara/MongoChat.git'
        }
    },
    {
        title: 'QrChat - Mobile Chat Application',
        description: 'React Native | Mobile App',
        bgImage: '/qrchat.png',
        slug: 'qrchat-mobile',
        tech: ['React Native', 'Firebase', 'SQLite'],
        date: 'Completed - 2025',
        category: 'mobile',
        details: {
            overview: 'Developed mobile chat application with QR code scanning for instant peer-to-peer chat initiation across iOS and Android platforms.',
            challenges: 'Implementing QR code scanning, real-time messaging, and offline synchronization for mobile platforms.',
            solution: 'Used Firebase Firestore for real-time messaging, Firebase Authentication for security, and SQLite for local data persistence and offline message synchronization.',
            features: ['QR code chat initiation', 'Cross-platform compatibility', 'Offline synchronization', 'Real-time messaging'],
            liveUrl: null,
            githubUrl: 'https://github.com/malith2002damsara/QrChat.git'
        }
    },
    {
        title: 'Sameepa - Social Connectivity Platform',
        description: 'Community Platform',
        bgImage: '/sameepa.png',
        slug: 'sameepa-platform',
        tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
        date: 'Completed - 2024',
        category: 'web',
        details: {
            overview: 'Developed a community-driven platform to connect residents, businesses, and local public organizations with comprehensive marketplace and community features.',
            challenges: 'Building a complex platform with multiple modules including marketplace, job center, event management, and community forums.',
            solution: 'Implemented comprehensive modules with user interaction features, admin dashboards, and ensured security and performance optimization.',
            features: ['Product/service marketplace', 'Job center', 'Event management', 'Community forums', 'Admin dashboard'],
            liveUrl: null,
            githubUrl: 'https://github.com/MurshidAkram/sameepa.git'
        }
    },
    {
        title: 'LittleSteps - Daycare Management System',
        description: 'Full-stack Management System',
        bgImage: '/littlesteps.png',
        slug: 'littlesteps-daycare',
        tech: ['ReactJS', 'React Native', 'Node.js', 'PostgreSQL'],
        date: '2025',
        category: 'web',
        details: {
            overview: 'Developed a secure, professional daycare management system to enhance childcare efficiency and parent–caregiver communication with web and mobile applications.',
            challenges: 'Creating a comprehensive system for multiple user roles with real-time notifications and secure data handling.',
            solution: 'Built responsive applications for different user roles, implemented JWT-based authentication, and ensured compliance with data protection standards.',
            features: ['Child registration', 'Attendance tracking', 'Daily logs', 'Parent notifications', 'Admin panel'],
            liveUrl: null,
            githubUrl: 'https://github.com/LittleSteps2025'
        }
    },
    {
        title: 'Sri Lanka Travel Platform',
        description: 'Travel & Tourism Platform',
        bgImage: '/sltour.png',
        slug: 'srilanka-travel',
        tech: ['React', 'Node.js', 'React Native', 'PostgreSQL'],
        date: '2025 - In Development',
        category: 'web',
        details: {
            overview: 'Developing comprehensive travel platform with mobile apps and web applications connecting tourists, hotels, guides, and vehicle services.',
            challenges: 'Managing complex relationships between multiple services and implementing location-based functionality.',
            solution: 'Using PostgreSQL for relational data management, Firebase Authentication for security, and implementing location-based services for tour planning.',
            features: ['Location-based services', 'Booking system', 'Itinerary planning', 'Multi-platform support'],
            liveUrl: null,
            githubUrl: 'https://github.com/SL-TOUR/Tourist-Mobile-App.git'
        }
    },
    {
        title: 'Bloom - Flower E-commerce Platform',
        description: 'MERN Stack | E-commerce',
        bgImage: '/bloomgrad.png',
        slug: 'bloom-flowers',
        tech: ['MERN Stack', 'Cloudinary', 'JWT'],
        date: '2025 - 80% Complete',
        category: 'web',
        details: {
            overview: 'Building a full-stack e-commerce platform specializing in flower bouquets and graduation bears with complete shopping functionality.',
            challenges: 'Implementing specialized e-commerce features for flower delivery and graduation items.',
            solution: 'Using MERN stack with JWT authentication and Cloudinary for image storage, focusing on user-friendly shopping experience.',
            features: ['Specialized product catalog', 'Shopping cart', 'Payment processing', 'User authentication'],
            liveUrl: 'https://bloom-f4qt.vercel.app',
            githubUrl: 'https://github.com/malith2002damsara/Bloom.git'
        }
    },
    {
        title: 'MediMap App',
        description: 'Flutter | Healthcare App',
        bgImage: '/medimap.png',
        slug: 'medimap-app',
        tech: ['Flutter', 'Firebase'],
        date: '2025 - 60% Complete',
        category: 'mobile',
        details: {
            overview: 'Developing a healthcare application for finding pharmacies with specific medicine stock availability and booking doctor appointments.',
            challenges: 'Implementing real-time inventory tracking and secure patient-doctor communication system.',
            solution: 'Using Firebase Firestore for real-time data, Firebase Authentication for security, and planning digital prescription system for direct doctor-patient communication.',
            features: ['Pharmacy finder', 'Medicine stock tracking', 'Doctor appointments', 'Digital prescriptions', 'Real-time inventory'],
            liveUrl: null,
            githubUrl: 'https://github.com/malith2002damsara/medimap.git'
        }
    },
    {
        title: 'Iris Flower Classification Model',
        description: 'Machine Learning | Data Science',
        bgImage: '/iris.png',
        slug: 'iris-classification',
        tech: ['Python', 'Scikit-learn', 'Pandas'],
        date: 'Completed - 2025',
        category: 'ml',
        details: {
            overview: 'Built a machine learning model to classify iris flowers into species based on petal and sepal measurements using multiple algorithms.',
            challenges: 'Implementing and comparing multiple classification algorithms to achieve optimal accuracy.',
            solution: 'Implemented multiple algorithms including Logistic Regression, KNN, Naive Bayes, Decision Trees, Random Forests, and SVM for comprehensive model comparison.',
            features: ['Multiple ML algorithms', 'Feature analysis', 'Model comparison', 'Data preprocessing', 'Classification accuracy'],
            liveUrl: null,
            githubUrl: 'https://github.com/malith2002damsara/Machine-Learning'
        }
    }
];

export const serviceData = [
    { 
        icon: assets.web_icon, 
        title: 'Web Development', 
        description: 'Full-stack web applications using modern frameworks like React, Node.js, and database management systems.',
        link: '',
        category: 'web'
    },
    { 
        icon: assets.mobile_icon, 
        title: 'Mobile Development', 
        description: 'Cross-platform mobile applications using React Native, Flutter with real-time features and cloud integration.',
        link: '',
        category: 'mobile'
    },
    { 
        icon: assets.ui_icon, 
        title: 'UI/UX Design', 
        description: 'User-centered design solutions with modern interfaces, responsive layouts, and seamless user experiences.',
        link: '',
        category: 'design'
    },
    { 
        icon: assets.code_icon, 
        title: 'Machine Learning', 
        description: 'Data science and machine learning models for classification, prediction, and intelligent automation solutions.',
        link: '',
        category: 'ml'
    }
];

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Programming Languages', description: 'C, C++, Python, JavaScript, TypeScript, PHP, Scala, R, Dart, MATLAB/Octave' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'BSc Computer Science - University of Colombo (2022-Present) | Diploma in HR Management - IMBS Green Campus (2025-Present)' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Development Experience', description: 'Full-stack web, mobile, and machine learning projects with focus on scalable, secure applications' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb,assets.node, assets.figma, assets.git, assets.react,assets.postman,assets.flutter,assets.tailwind
];