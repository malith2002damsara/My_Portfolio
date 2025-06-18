
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
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/work-1.png',
        slug: 'frontend-project',
        tech: ['React', 'Next.js', 'Tailwind'],
        date: 'Jan 2023',
        details: {
            overview: 'A modern frontend project built with React and Next.js, featuring responsive design and interactive UI components.',
            challenges: 'Implementing smooth animations while maintaining performance.',
            solution: 'Used Framer Motion for animations and optimized images for fast loading.',
            features: ['Responsive design', 'Dark mode', 'Interactive elements'],
            liveUrl: 'https://frontend-project.example.com',
            githubUrl: 'https://github.com/example/frontend-project'
        }
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/work-2.png',
        slug: 'geo-app',
        tech: ['React Native', 'Firebase', 'Mapbox'],
        date: 'Mar 2023',
        details: {
            overview: 'A location-based mobile application that helps users discover nearby points of interest.',
            challenges: 'Handling real-time location updates and optimizing battery usage.',
            solution: 'Implemented geofencing and optimized location polling intervals.',
            features: ['Real-time location', 'Custom markers', 'Offline support'],
            liveUrl: 'https://geo-app.example.com',
            githubUrl: 'https://github.com/example/geo-app'
        }
    },
    {
        title: 'E-Commerce site',
        description: 'Web Design',
        bgImage: '/work-3.png',
        slug: 'ecommerce-site',
        tech: ['Next.js', 'Stripe', 'MongoDB'],
        date: 'Jun 2023',
        details: {
            overview: 'A full-featured e-commerce platform with product listings, cart functionality, and secure checkout.',
            challenges: 'Implementing a seamless checkout flow with multiple payment options.',
            solution: 'Integrated Stripe for payments and optimized the checkout process.',
            features: ['Product catalog', 'Shopping cart', 'User accounts'],
            liveUrl: 'https://ecommerce.example.com',
            githubUrl: 'https://github.com/example/ecommerce'
        }
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
        slug: 'ui-ux-design',
        tech: ['Figma', 'Adobe XD', 'Illustrator'],
        date: 'Sep 2023',
        details: {
            overview: 'A collection of UI/UX design projects including wireframes, prototypes, and design systems.',
            challenges: 'Creating consistent design language across multiple platforms.',
            solution: 'Developed a comprehensive design system with reusable components.',
            features: ['Wireframes', 'Interactive prototypes', 'Design system'],
            liveUrl: 'https://design.example.com',
            githubUrl: 'https://github.com/example/ui-ux'
        }
    },
];

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js , Scala ,C ' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];