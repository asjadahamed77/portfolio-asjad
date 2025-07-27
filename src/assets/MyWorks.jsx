import goAIimage from '../assets/works/goai.jpeg'
import ajjistore from '../assets/works/ajji-store.jpeg'


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
    
]