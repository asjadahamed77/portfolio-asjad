import goAIimage from "../assets/works/goai.jpeg";
import ajjistore from "../assets/works/ajji-store.jpeg";
import dtmedicalclient from "../assets/works/dt-medical-client.jpeg";
import ajjioo from "../assets/works/ajjiyoo.jpeg";
import medicaladmin from "../assets/works/admin-medical.jpeg";
import lwmc from "../assets/works/lwmc.jpeg";
import raafest from "../assets/works/raafest.jpeg";
import adminraafest from "../assets/works/admin-raafest.jpeg";
import foodio from "../assets/works/foodio.jpeg";

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
import gemini from "../assets/tools/gemini.svg";
import openai from "../assets/tools/openai.svg";
import paypal from "../assets/tools/paypal.svg";

export const myWorks = [
  {
    id: "go-ai",
    name: "goAI",
    subtitle: "AI-Powered Content & Image Platform – SaaS with Auth & Profiles",
    features: [
      {
        feature:
          "AI-powered content generation for articles, blog titles, and images.",
      },
      {
        feature:
          "Advanced image manipulation tools including background and object removal.",
      },
      {
        feature:
          "Secure authentication system supporting both free and premium subscribers.",
      },
      { feature: "Dynamic feature access based on user subscription level." },
      {
        feature:
          "AI-driven resume review tool providing personalized career feedback.",
      },
      {
        feature:
          "Activity history and creation library to easily revisit past work.",
      },
      {
        feature:
          "Modern, intuitive, and responsive UI for a seamless experience.",
      },
      {
        feature:
          "Securely deployed on Vercel ensuring global performance and reliability.",
      },
      {
        feature:
          "All-in-one AI toolkit built for content creators, designers, job seekers, and tech enthusiasts.",
      },
    ],
    imageFile: goAIimage,
    tools: [
      {
        tool: "React",
        toolIcon: vitejs,
      },
      {
        tool: "Tailwind CSS",
        toolIcon: tailwindcss,
      },
      {
        tool: "Node.js",
        toolIcon: nodejs,
      },
      {
        tool: "Express.js",
        toolIcon: expressjs,
      },
      {
        tool: "PostgreSQL",
        toolIcon: postgresql,
      },
      {
        tool: "Gemini",
        toolIcon: gemini,
      },
      {
        tool: "OpenAI",
        toolIcon: openai,
      },
      {
        tool: "Clerk",
        toolIcon: clerk,
      },
      {
        tool: "Cloudinary",
        toolIcon: cloudinary,
      },
      {
        tool: "Vercel",
        toolIcon: verceldark,
      },
    ],
    gitHub: "https://github.com/asjadahamed77/goAI",
    live: "https://go-ai-drab.vercel.app/",
  },
  {
    id: "ajji-store",
    name: "Ajji-Store",
    subtitle: "E-Commerce Web App for Mobile Store – Full Stack",
    features: [
      { feature: "Secure JWT-based authentication for users and admins." },
      {
        feature:
          "Dedicated admin dashboard for managing products, orders, and users.",
      },
      {
        feature:
          "Responsive UI with smooth navigation across all screen sizes.",
      },
      {
        feature:
          "PayPal payment integration for secure, real-time transactions.",
      },
      { feature: "Smart search and filtering for quick product discovery." },
      { feature: "Email verification for secure user onboarding." },
      {
        feature:
          "Order tracking with responsive notifications and user history.",
      },
      {
        feature: "Cloudinary integration for optimized product image handling.",
      },
      { feature: "Fast and reliable deployment with Vercel." },
    ],
    imageFile: ajjistore,
    tools: [
      {
        tool: "React",
        toolIcon: vitejs,
      },
      {
        tool: "Tailwind CSS",
        toolIcon: tailwindcss,
      },
      {
        tool: "Node.js",
        toolIcon: nodejs,
      },
      {
        tool: "Express.js",
        toolIcon: expressjs,
      },
      {
        tool: "MongoDB",
        toolIcon: mongodb,
      },
      {
        tool: "PayPal",
        toolIcon: paypal,
      },
      {
        tool: "Cloudinary",
        toolIcon: cloudinary,
      },
      {
        tool: "Vercel",
        toolIcon: verceldark,
      },
    ],
    gitHub: "https://github.com/asjadahamed77/Ajji-Store",
    live: "https://ajji-store-client.vercel.app/",
  },
  {
    id: "dt-medical-centre",
    name: "DT-Medical Centre",
    subtitle: "Doctor Appointment Booking System – Client Portal",
    features: [
      { feature: "Secure user authentication with profile management." },
      { feature: "Doctor appointment booking with real-time availability." },
      { feature: "Responsive UI optimized for mobile, tablet, and desktop." },
      { feature: "Online payment integration for seamless bookings." },
      { feature: "Real-time toast notifications for booking and updates." },
      {
        feature: "Search and filtering to easily find doctors and time slots.",
      },
      { feature: "Cloudinary image management for smooth media handling." },
      {
        feature:
          "Smooth, modern interface built for medical service workflows.",
      },
      { feature: "Deployed on Vercel for high performance and uptime." },
    ],
    imageFile: dtmedicalclient,
    tools: [
      {
        tool: "React",
        toolIcon: vitejs,
      },
      {
        tool: "Tailwind CSS",
        toolIcon: tailwindcss,
      },
      {
        tool: "Node.js",
        toolIcon: nodejs,
      },
      {
        tool: "Express.js",
        toolIcon: expressjs,
      },
      {
        tool: "MongoDB",
        toolIcon: mongodb,
      },
      {
        tool: "Cloudinary",
        toolIcon: cloudinary,
      },
      {
        tool: "Vercel",
        toolIcon: verceldark,
      },
    ],
    gitHub: "https://github.com/asjadahamed77/DT-Medical-Centre",
    live: "https://dt-medical-centre-c.vercel.app/",
  },
  {
    id: "dt-medical-centre-admin",
    name: "DT Medical Centre – Admin & Doctor Dashboard",
    subtitle:
      "Empowering healthcare professionals with control, insights, and seamless appointment management.",
    features: [
      { feature: "Role-based authentication for admins and doctors." },
      {
        feature:
          "Admins can manage doctors, appointments, payments, and patients.",
      },
      {
        feature:
          "Doctors can update availability, profile details, and appointment status.",
      },
      { feature: "Responsive dashboard layout for all device sizes." },
      {
        feature: "Real-time notifications for appointment and profile updates.",
      },
      { feature: "Secure data access with protected routes." },
      {
        feature:
          "Cloudinary integration for media handling and profile images.",
      },
      { feature: "Optimized workflow for clinic and patient management." },
    ],
    imageFile: medicaladmin,
    tools: [
      {
        tool: "React",
        toolIcon: vitejs,
      },
      {
        tool: "Tailwind CSS",
        toolIcon: tailwindcss,
      },
      {
        tool: "Node.js",
        toolIcon: nodejs,
      },
      {
        tool: "Express.js",
        toolIcon: expressjs,
      },
      {
        tool: "MongoDB",
        toolIcon: mongodb,
      },
      {
        tool: "Cloudinary",
        toolIcon: cloudinary,
      },
      {
        tool: "Vercel",
        toolIcon: verceldark,
      },
    ],
    gitHub: "https://github.com/asjadahamed77/DT-Medical-Centre",
    live: "https://admin-dt-medical-centre.vercel.app/",
  },
  {
    id: "foodio",
    name: "Foodio",
    subtitle: "Billing System for a Restaurant – Admin & User Panels",
    features: [
      {
        feature: "Secure authentication with role-based admin and user access.",
      },
      {
        feature:
          "Admin dashboard to manage users, orders, items, and system operations.",
      },
      { feature: "Category-based filtering and product search." },
      { feature: "Billing interface with printable receipts." },
      { feature: "Order history tracking for both users and admins." },
      { feature: "Modern, responsive UI for smooth restaurant workflow." },
      { feature: "Cloudinary integration for optimized image management." },
      { feature: "Spring Boot backend for secure and scalable operations." },
    ],
    imageFile: foodio,
    tools: [
      {
        tool: "React",
        toolIcon: vitejs,
      },
      {
        tool: "Tailwind CSS",
        toolIcon: tailwindcss,
      },
      {
        tool: "Spring Boot",
        toolIcon: spring,
      },
      {
        tool: "MySQL",
        toolIcon: mysql,
      },
      {
        tool: "Cloudinary",
        toolIcon: cloudinary,
      },
    ],
    gitHub: "https://github.com/asjadahamed77/Foodio",
    live: "",
  },
  {
    id: "ajjiyoo",
    name: "Ajjiyoo",
    subtitle: "Fashion E-Commerce Platform with Unified Admin/Client",
    features: [
      { feature: "Secure authentication for both users and admins." },
      { feature: "Product search, filtering, and category-wise browsing." },
      {
        feature:
          "Add to cart, checkout, and secure PayPal payment integration.",
      },
      { feature: "Admin dashboard to manage users, orders, and products." },
      { feature: "Redux-powered state management for smooth user actions." },
      { feature: "Fully responsive UI across desktop and mobile." },
      { feature: "Cloudinary image hosting for optimized product media." },
      { feature: "Vercel deployment for fast, global performance." },
    ],
    imageFile: ajjioo,
    tools: [
      {
        tool: "React",
        toolIcon: vitejs,
      },
      {
        tool: "Tailwind CSS",
        toolIcon: tailwindcss,
      },
      {
        tool: "Node.js",
        toolIcon: nodejs,
      },
      {
        tool: "Express.js",
        toolIcon: expressjs,
      },
      {
        tool: "MongoDB",
        toolIcon: mongodb,
      },
      {
        tool: "Redux",
        toolIcon: redux,
      },
      {
        tool: "PayPal",
        toolIcon: paypal,
      },
      {
        tool: "Cloudinary",
        toolIcon: cloudinary,
      },
      {
        tool: "Vercel",
        toolIcon: verceldark,
      },
    ],
    gitHub: "https://github.com/asjadahamed77/AjjiyooEcom",
    live: "https://ajjiyoo-ecom-2nkh.vercel.app/",
  },
  {
    id: "lwmc-media",
    name: "LWMC Media – Church Events & Management Platform",
    subtitle:
      "Streamlining church communication, media, and management through one unified platform.",
    features: [
      { feature: "Display upcoming, ongoing, and past church events." },
      { feature: "YouTube like-count integration for event visibility." },
      { feature: "Leadership and pastor introduction sections." },
      { feature: "Secure admin panel for user and event management." },
      { feature: "Real-time updates for events and community programs." },
      { feature: "Fully responsive layout optimized for all screen sizes." },
      { feature: "AWS integration for storage and scalability." },
      { feature: "Redux integration for smooth state management." },
    ],
    imageFile: lwmc,
    tools: [
      {
        tool: "React",
        toolIcon: vitejs,
      },
      {
        tool: "Tailwind CSS",
        toolIcon: tailwindcss,
      },
      {
        tool: "Node.js",
        toolIcon: nodejs,
      },
      {
        tool: "Express.js",
        toolIcon: expressjs,
      },
      {
        tool: "MongoDB",
        toolIcon: mongodb,
      },
      {
        tool: "Redux",
        toolIcon: redux,
      },
      {
        tool: "AWS",
        toolIcon: aws,
      },
    ],
    gitHub: "",
    live: "https://www.lwmcmedia.fr/",
  },
  {
    id: "raafest",
    name: "Raafest",
    subtitle:
      "Celebrate with ease – a secure and seamless cake ordering experience.",
    features: [
      { feature: "Secure user authentication with profile management." },
      { feature: "Complete cake ordering flow with customization options." },
      {
        feature:
          "Select cake, choose gift box, and add personalized card messages.",
      },
      { feature: "Real-time toast notifications for actions and updates." },
      { feature: "Responsive and modern UI for smooth ordering experience." },
      { feature: "Order history and user details management." },
      { feature: "Cloudinary-based image storage for high-quality visuals." },
      { feature: "Optimized checkout and user workflow." },
    ],
    imageFile: raafest,
    tools: [
      {
        tool: "React",
        toolIcon: vitejs,
      },
      {
        tool: "Tailwind CSS",
        toolIcon: tailwindcss,
      },
      {
        tool: "Node.js",
        toolIcon: nodejs,
      },
      {
        tool: "Express.js",
        toolIcon: expressjs,
      },
      {
        tool: "MongoDB",
        toolIcon: mongodb,
      },
      {
        tool: "Redux",
        toolIcon: redux,
      },
      {
        tool: "Cloudinary",
        toolIcon: cloudinary,
      },
      {
        tool: "Vercel",
        toolIcon: verceldark,
      },
    ],
    gitHub: "https://github.com/asjadahamed77/Raafath-tea-shop",
    live: "https://raafest.vercel.app/",
  },
  {
    id: "raafest-admin-dashboard",
    name: "Raafest – Admin Dashboard",
    subtitle:
      "Powerful administrative control for managing users, orders, and product listings with ease.",
    features: [
      { feature: "Secure admin authentication and protected routes." },
      { feature: "Full control over users, orders, and product listings." },
      { feature: "Manage cakes, gift boxes, and greeting cards easily." },
      { feature: "Responsive dashboard for desktop and mobile workflows." },
      { feature: "Real-time updates for order status and user management." },
      { feature: "Cloudinary integration for product media handling." },
      {
        feature:
          "Streamlined interface to reduce admin effort and improve accuracy.",
      },
    ],
    imageFile: adminraafest,
    tools: [
      {
        tool: "React",
        toolIcon: vitejs,
      },
      {
        tool: "Tailwind CSS",
        toolIcon: tailwindcss,
      },
      {
        tool: "Node.js",
        toolIcon: nodejs,
      },
      {
        tool: "Express.js",
        toolIcon: expressjs,
      },
      {
        tool: "MongoDB",
        toolIcon: mongodb,
      },
      {
        tool: "Redux",
        toolIcon: redux,
      },
      {
        tool: "Cloudinary",
        toolIcon: cloudinary,
      },
      {
        tool: "Vercel",
        toolIcon: verceldark,
      },
    ],
    gitHub: "https://github.com/asjadahamed77/Raafath-tea-shop",
    live: "https://admin-raafestt.vercel.app/login",
  },
];
