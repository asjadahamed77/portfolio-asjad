import goAIimage from '../assets/works/goai.jpeg'
import ajjistore from '../assets/works/ajji-store.jpeg'
import dtmedicalclient from '../assets/works/dt-medical-client.jpeg'
import ajjioo from '../assets/works/ajjiyoo.jpeg'
import medicaladmin from '../assets/works/admin-medical.jpeg'
import lwmc from '../assets/works/lwmc.jpeg'
import raafest from '../assets/works/raafest.jpeg'
import adminraafest from '../assets/works/admin-raafest.jpeg'


import aws from "../assets/tools/aws.svg";
import react from "../assets/tools/reactjs.svg";
import bootstrap from "../assets/tools/bootstrap5.svg";
import c from "../assets/tools/c.svg";
import canva from "../assets/tools/canva.svg";
import clerk from "../assets/tools/clerk.svg";
import cloudinary from "../assets/tools/cloudinary.svg";
import expressjs from "../assets/tools/expressjs-dark.svg";
import firebase from "../assets/tools/firebase.svg";
import framer from "../assets/tools/framer.svg";
import git from "../assets/tools/git.svg";
import github from "../assets/tools/github-light.svg";
import html5 from "../assets/tools/html5.svg";
import java from "../assets/tools/java.svg";
import javascript from "../assets/tools/javascript.svg";
import materialui from "../assets/tools/materialui.svg";
import mongodb from "../assets/tools/mongodb.svg";
import mysql from "../assets/tools/mysql.svg";
import nextjs from "../assets/tools/nextjs.svg";
import nodejs from "../assets/tools/nodejs.svg";
import photoshop from "../assets/tools/photoshop.svg";
import postgresql from "../assets/tools/postgresql.svg";
import postman from "../assets/tools/postman.svg";
import redux from "../assets/tools/redux.svg";
import spring from "../assets/tools/spring.svg";
import tailwindcss from "../assets/tools/tailwindcss.svg";
import typescript from "../assets/tools/typescript.svg";
import verceldark from "../assets/tools/vercel-dark.svg";
import vitejs from "../assets/tools/vitejs.svg";
import vscode from "../assets/tools/vscode.svg";
import gemini from '../assets/tools/gemini.svg'
import openai from '../assets/tools/openai.svg'
import paypal from '../assets/tools/paypal.svg'

export const myWorks = [
    {
        name: "goAI",
        subtitle: "AI-Powered Content & Image Platform – SaaS with Auth & Profiles",
        description: "GoAI is an advanced AI-powered web application designed to boost creativity and productivity through a suite of intelligent tools — all packed into a beautifully designed and secure platform. Built with secure authentication, GoAI supports both free and premium subscribers, offering tailored access to features based on subscription level. Users can generate AI-written articles, blog titles, images, and even perform image manipulation tasks like background removal and object removal — all powered by cutting-edge AI APIs. For professionals, GoAI also includes AI-driven resume reviews, helping users enhance their CVs with personalized feedback. Every user has access to their activity history and creation library, making it easy to revisit or reuse past work. With its ultimate UI and seamless experience, GoAI delivers an intuitive and responsive interface that feels fast, polished, and modern. The entire application is securely deployed on Vercel, ensuring global availability and performance. Whether you’re a content creator, designer, job seeker, or tech enthusiast, GoAI empowers you with a smart, all-in-one AI toolkit — right in your browser.",
        imageFile: goAIimage ,
        tools: [
            {
                tool: "React",
                toolIcon: vitejs
            },
            {
                tool: "Tailwind CSS",
                toolIcon: tailwindcss
            },
            {
                tool: "Node.js",
                toolIcon: nodejs
            },
            {
                tool: "Express.js",
                toolIcon: expressjs
            },
            {
                tool: "PostgreSQL",
                toolIcon: postgresql
            },
            {
                tool: "Gemini",
                toolIcon: gemini
            },
            {
                tool: "OpenAI",
                toolIcon: openai
            },
            {
                tool: "Clerk",
                toolIcon: clerk
            },
        ],
        gitHub: "https://github.com/asjadahamed77/goAI",
        live: "https://go-ai-drab.vercel.app/"
    },
    {
        name: "Ajji-Store",
        subtitle: "E-Commerce Web App for Mobile Store – Full Stack",
        description: "Ajji-Store is a modern, full-featured e-commerce platform built with a focus on security, performance, and user experience. It includes a dedicated client-side shopping interface and a powerful admin dashboard, both designed with an awesome, responsive UI that works flawlessly across all screen sizes. Users enjoy a secure and seamless shopping experience powered by JWT-based authentication, PayPal integration for secure payments, and real-time toast notifications for actions like adding to cart or placing orders. The store also supports smart search and filtering, allowing users to find products quickly and easily. Customers can track their orders, receive email verification, and manage their profile securely. Meanwhile, admins have complete control over the platform — they can manage products, orders, and user accounts, all from an intuitive dashboard. Ajji-Store combines functionality and design into a sleek, production-ready system that brings together the best of modern web technologies to create a high-performance online shopping experience.",
        imageFile: ajjistore,
        tools: [
            {
                tool: "React",
                toolIcon: vitejs
            },
            {
                tool: "Tailwind CSS",
                toolIcon: tailwindcss
            },
            {
                tool: "Node.js",
                toolIcon: nodejs
            },
            {
                tool: "Express.js",
                toolIcon: expressjs
            },
            {
                tool: "MongoDB",
                toolIcon: mongodb
            },
            {
                tool: "PayPal",
                toolIcon: paypal
            },
        ],
        gitHub: "https://github.com/asjadahamed77/Ajji-Store",
        live: "https://ajji-store-client.vercel.app/"
    },
    {
        name: "DT-Medical Centre",
        subtitle: "Doctor Appointment Booking System – Client Portal",
        description: "DT Medical Centre is a modern, secure, and fully responsive web application designed to streamline doctor appointments and healthcare service management. Built with a focus on user experience, security, and efficiency, the platform empowers patients and admins to seamlessly interact in a digital medical environment. Users can securely authenticate, manage their personal profiles, book appointments with doctors, and complete online payments through an intuitive interface. The system includes real-time toast notifications for instant feedback on booking, cancellation, or payment status. Features like search and filtering help patients easily find the right doctor or time slot, while the booking management system ensures clarity and control for both patients and administrators. Designed to adapt across all devices, DT Medical Centre is fully responsive and optimized for performance on mobile, tablet, and desktop.",
        imageFile: dtmedicalclient,
        tools: [
            {
                tool: "React",
                toolIcon: vitejs
            },
            {
                tool: "Tailwind CSS",
                toolIcon: tailwindcss
            },
            {
                tool: "Node.js",
                toolIcon: nodejs
            },
            {
                tool: "Express.js",
                toolIcon: expressjs
            },
            {
                tool: "MongoDB",
                toolIcon: mongodb
            },
            
        ],
        gitHub: "https://github.com/asjadahamed77/DT-Medical-Centre",
        live: "https://dt-medical-centre-c.vercel.app/"
    },
    {
        name: "DT Medical Centre – Admin & Doctor Dashboard",
        subtitle: "Empowering healthcare professionals with control, insights, and seamless appointment management.",
        description: "The Admin & Doctor Dashboard of DT Medical Centre is a powerful, secure backend interface built for healthcare professionals and clinic administrators to efficiently manage operations. Featuring secure authentication for both doctors and admins, the system ensures only authorized users can access sensitive patient and clinic data. Admins have complete control — they can add doctors, manage appointments, view payments, and oversee patient activity. Doctors can manage their own profiles, availability, payment status, and more, providing a personalized experience while staying connected to patient appointments. The dashboard is built with a responsive design, ensuring a smooth experience across desktops, tablets, and mobile devices. Real-time toast notifications give immediate feedback on updates like appointment status, profile edits, and payment updates — enhancing the user experience with clarity and speed.",
        imageFile: medicaladmin,
        tools: [
            {
                tool: "React",
                toolIcon: vitejs
            },
            {
                tool: "Tailwind CSS",
                toolIcon: tailwindcss
            },
            {
                tool: "Node.js",
                toolIcon: nodejs
            },
            {
                tool: "Express.js",
                toolIcon: expressjs
            },
            {
                tool: "MongoDB",
                toolIcon: mongodb
            },
            
            
        ],
        gitHub: "https://github.com/asjadahamed77/DT-Medical-Centre",
        live: "https://admin-dt-medical-centre.vercel.app/"
    },
    {
        name: "Ajjiyoo",
        subtitle: "Fashion E-Commerce Platform with Unified Admin/Client",
        description: "Ajjiyoo is a fully responsive, modern e-commerce platform tailored for a textile shop, offering a seamless shopping and management experience for both users and administrators. The platform supports secure authentication, allowing both users and admins to log in and perform their respective actions. Customers can browse products using multiple filters and search capabilities, add items to cart, and securely complete purchases via PayPal payment integration. On the admin side, Ajjiyoo includes a dedicated dashboard to manage users, orders, and product listings, ensuring smooth store operations. Designed with usability and performance in mind, Ajjiyoo adapts beautifully to all screen sizes, providing a smooth experience on desktop and mobile devices alike.",
        imageFile: ajjioo,
        tools: [
            {
                tool: "React",
                toolIcon: vitejs
            },
            {
                tool: "Tailwind CSS",
                toolIcon: tailwindcss
            },
            {
                tool: "Node.js",
                toolIcon: nodejs
            },
            {
                tool: "Express.js",
                toolIcon: expressjs
            },
            {
                tool: "MongoDB",
                toolIcon: mongodb
            },
            {
                tool: "Redux",
                toolIcon: redux
            },
            {
                tool: "PayPal",
                toolIcon: paypal
            },
            
        ],
        gitHub: "https://github.com/asjadahamed77/AjjiyooEcom",
        live: "https://ajjiyoo-ecom-2nkh.vercel.app/"
    },
    {
        name: "LWMC Media – Church Events & Management Platform",
        subtitle: "Streamlining church communication, media, and management through one unified platform.",
        description: "LWMC Media is a fully responsive and visually engaging platform designed to showcase and manage the dynamic life of a church community. From event displays to church leadership visibility and media integration, LWMC Media offers an all-in-one solution for churches to stay connected and organized. The platform displays upcoming events, ongoing programs, and recently held activities, complete with YouTube like-count integration for past events to boost visibility and engagement. Visitors can learn more about the community through a dedicated section that highlights pastors and church leadership team members. A secure admin panel allows authorized personnel to manage users, update event data, and oversee the system in real time — making LWMC Media a reliable and efficient church management system. With an awesome UI, modern architecture, and real-time updates, LWMC Media ensures a smooth experience across all screen sizes.",
        imageFile: lwmc,
        tools: [
            {
                tool: "React",
                toolIcon: vitejs
            },
            {
                tool: "Tailwind CSS",
                toolIcon: tailwindcss
            },
            {
                tool: "Node.js",
                toolIcon: nodejs
            },
            {
                tool: "Express.js",
                toolIcon: expressjs
            },
            {
                tool: "MongoDB",
                toolIcon: mongodb
            },
            {
                tool: "Redux",
                toolIcon: redux
            },
            
            
        ],
        gitHub: "",
        live: "https://www.lwmcmedia.fr/"
    },
    {
        name: "Raafest",
        subtitle: "Celebrate with ease – a secure and seamless cake ordering experience.",
        description: "Raafest Client is a secure, user-focused web platform designed to make cake ordering an easy, personalized, and joyful experience. Built with a modern UI and fully responsive design, users can interact smoothly across devices. The platform includes secure user authentication and profile management, allowing users to save preferences and track past orders. Users can place custom cake orders by selecting a cake, choosing a gift box, adding a personalized card, and even sending heartfelt wishes — all through an intuitive interface. The system ensures secure order placement and uses real-time toast notifications to confirm actions and keep users informed every step of the way. Whether it’s a birthday, anniversary, or celebration, Raafest Client makes thoughtful gifting simple, safe, and delightful.",
        imageFile: raafest,
        tools: [
            {
                tool: "React",
                toolIcon: vitejs
            },
            {
                tool: "Tailwind CSS",
                toolIcon: tailwindcss
            },
            {
                tool: "Node.js",
                toolIcon: nodejs
            },
            {
                tool: "Express.js",
                toolIcon: expressjs
            },
            {
                tool: "MongoDB",
                toolIcon: mongodb
            },
            {
                tool: "Redux",
                toolIcon: redux
            },
            
            
        ],
        gitHub: "https://github.com/asjadahamed77/Raafath-tea-shop",
        live: "https://raafest.vercel.app/"
    },
    {
        name: "Raafest – Admin Dashboard",
        subtitle: "Powerful administrative control for managing users, orders, and product listings with ease.",
        description: "Raafest Admin is a secure and responsive dashboard built for administrators to efficiently manage the operations of the Raafest platform. Designed with a clean, modern UI, the admin panel works seamlessly across all screen sizes, offering full control from desktop or mobile. Admins can securely log in and access key modules to manage users, update customer orders, and oversee all aspects of the product catalog including cakes, gift boxes, and greeting cards. The dashboard provides a clear and organized interface to streamline workflow, reduce manual effort, and ensure accurate, real-time management of order statuses and user details. With a focus on security and usability, Raafest Admin empowers platform managers to maintain smooth and reliable operations across the entire ordering process.",
        imageFile: adminraafest,
        tools: [
            {
                tool: "React",
                toolIcon: vitejs
            },
            {
                tool: "Tailwind CSS",
                toolIcon: tailwindcss
            },
            {
                tool: "Node.js",
                toolIcon: nodejs
            },
            {
                tool: "Express.js",
                toolIcon: expressjs
            },
            {
                tool: "MongoDB",
                toolIcon: mongodb
            },
            {
                tool: "Redux",
                toolIcon: redux
            },
            
            
        ],
        gitHub: "https://github.com/asjadahamed77/Raafath-tea-shop",
        live: "https://admin-raafestt.vercel.app/login"
    },


    
]