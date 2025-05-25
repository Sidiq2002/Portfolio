import Html from "../assets/html5.png";
import Css from "./css.png";
import Bootstrap from "./bootst.png";
import Javascript from "./javascript.png";
import React from "./reactjs.png";
import Python from "./python.png";
import Mysql from "./mysql.png";
import Django from "./django.png";
import Git from "./Git-1.png";
import Vscode from "./vs.png";
import Json from "./json.png";
import Github from "./github.png";

export const skills = [
  { id: 1, icon: Html },
  { id: 2, icon: Css },
  { id: 3, icon: Bootstrap },
  { id: 4, icon: Javascript },
  { id: 5, icon: React },
  { id: 6, icon: Json },
  { id: 7, icon: Python },
  { id: 8, icon: Mysql },
  { id: 9, icon: Django },
];

export const tools = [
  { id: 1, icon: Git },
  { id: 2, icon: Github },
  { id: 3, icon: Vscode },
];

import Picture from "./Picture.png";
import Food1 from "./Food1.jpg";
import Food2 from "./Food2.png";
import Travel1 from "./travel-1.jpg";
import Travel2 from "./Travel2.jpg";
import Movie from "./Movie.jpg";
import weatherImage from "./WeatherImage.jpg";
import Todo from "./Todo.jpg";

export const Frontend = [
  {
    image: Picture,
    projectName: "Portfolio",
    description:
      "A personal portfolio website showcasing my projects, skills, and experiences, built with React and styled with CSS.",
    technologies: "HTML / CSS, JavaScript, React",
    githubLink: "https://github.com/Sidiq2002/Portfolio",
    liveLink: "https://myportfolio-website-react-js.netlify.app/",
  },
  {
    image: Food1,
    projectName: "Food Order Web App",
    description:
      "A React-based online platform for customers to browse and order food with features like cart management and order tracking.",
    technologies: "HTML / CSS, JavaScript, React",
    githubLink: "https://github.com/Sidiq2002/Food-Order-App",
    liveLink: "https://food-order-app-ten-lake.vercel.app/",
  },

  {
    image: Travel2,
    projectName: "Travel Blog Web App",
    description:
      "A dynamic React platform showcasing travel experiences, destinations, and stories through engaging blog posts and stunning visuals.",
    technologies: "HTML / CSS, JavaScript, React",
    githubLink: "https://github.com/Sidiq2002/Travel-Blog",
    liveLink: "https://travel-blog-reactjs.netlify.app/",
  },

  {
    image: Movie,
    projectName: "MovieHUB Web App",
    description:
      "A React-based movie library platform for browsing, searching, and discovering movies with ratings, reviews, and recommendations.",
    technologies: "HTML / CSS, JavaScript, React",
    githubLink: "https://github.com/Sidiq2002/MovieHUB",
    liveLink: "https://movie-hub-iota-jade.vercel.app/login",
  },
  {
    image: weatherImage,
    projectName: "Weather App",
    description:
      "A JavaScript-based app providing real-time weather updates and forecasts for locations worldwide.",
    technologies: "HTML / CSS, JavaScript",
    githubLink: "https://github.com/Sidiq2002/Weather-App",
    liveLink: "https://weather-app-javascript-live.netlify.app/",
  },
  {
    image: Todo,
    projectName: "To-Do App",
    description:
      "A JavaScript-based task management tool for creating, editing, and managing to-do lists.",
    technologies: "HTML / CSS, JavaScript",
    githubLink: "https://github.com/Sidiq2002/To-Do-App",
    liveLink: "https://to-do-application-task-management.netlify.app/",
  },
];
export const Backend = [
  {
    image: Food2,
    projectName: "FoodHUB Web App",
    description:
      "A Django-based food order platform for browsing menus, placing orders, and tracking delivery.",
    technologies: "HTML / CSS, JavaScript, Python, Django",
    githubLink: "https://github.com/Sidiq2002/Food-Plazza",
  },

  {
    image: Travel1,
    projectName: "Travel Blog Web App",
    description:
      "A Django-based platform for showcasing travel experiences, destinations, and stories.",
    technologies: "HTML / CSS, JavaScript, Python, Django",
    githubLink: "https://github.com/Sidiq2002/Travel-World",
  },
];
