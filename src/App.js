import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Form from "./components/Form/Form";
import { ChakraProvider, Text } from "@chakra-ui/react";
import CardComponent from "./components/Card/Card";
import React from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import FitBuddyImg from "./Assets/FitBuddy.png";
import QuickMealsImg from "./Assets/QuickMeals.png";
import InStockImg from "./Assets/inStock.png";
import BrainFlixImg from "./Assets/BrainFlix.png";
import me from "./Assets/Abdullah.jpg";
import react from "./Assets/Icons/react.svg";
import typescript from "./Assets/Icons/typescript-icon.svg";
import python from "./Assets/Icons/python.svg";
import nodejs from "./Assets/Icons/nodejs.svg";
import mysql from "./Assets/Icons/mysql.svg";
import postgres from "./Assets/Icons/postgresql.svg";
import graphql from "./Assets/Icons/graphql.svg";
import prisma from "./Assets/Icons/prisma.svg";

function App() {
  return (
    <ChakraProvider>
      <Navigation />
      <Introduction />
      <ProjectsHeading />

      <Card
        title="FitBuddy"
        img={FitBuddyImg}
        description="Workout tracker app that allows users to track their progress and visualize their workout data in the form of interactive charts. It helps users stay motivated and monitor their fitness journey effectively. Built using React, NodeJS, Firebase and MySQL."
        link="https://fitbuddy.ca"
      />
      <Card
        title="QuickMeals"
        img={QuickMealsImg}
        description="Built a React front-end app that uses a public API key to fetch information regarding meals. The project aims to help users find delicious meals by only providing it an ingredient."
        link="https://github.com/abdullah-25/pair-programming"
      />
      <Card
        title="InStock"
        img={InStockImg}
        description="Worked as a full-stack developer for this inventory management project. Used GitHub, Jira and the Scrum methodology to manage collaborative workflow."
        link="https://github.com/abdullah-25/InStock"
      />
      <Card
        title="BrainFlix"
        img={BrainFlixImg}
        description="Created a functioning and responsive app prototype from the project designs provided. The app features responsive design, video upload and dynamic comments feature."
        link="https://github.com/abdullah-25/muhammad-abdullah-brainflix"
      />
      <About />
      <Form />
    </ChakraProvider>
  );
}

function Introduction() {
  return (
    <div className="container">
      <div className="Introduction">
        <div className="center">
          <div className="centered-intro">
            <div>&#128075; Hi there, I'm</div>
            <div className="name">Muhammad Abdullah</div>
          </div>
        </div>
        <div className="center">
          <div className="fixed-paragraph">
            <p>
              A software engineer with a unique background in civil engineering.
              In my role as an Associate Machine Learning Developer at the{" "}
              <mark>Infrastructure Health and Safety Association,</mark> I led a
              team in building a predictive model for construction worker injury
              costs, potentially saving insurers thousands yearly.
            </p>
            <p>
              I have also worked at{" "}
              <mark>York Region District School Board </mark> as a back end
              developer helping the team convert legacy code into new software
              using Microsoft SQL server.
            </p>
            <p>
              One of my proudest achievements is <mark>FitBuddy, </mark> a React
              and Node.js-based workout tracking app. With Firebase
              authentication and intuitive UI/UX, FitBuddy increased user
              retention and garnered daily active users. My journey showcases my
              commitment to innovation and impactful solutions in software
              engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div id="about-me" className="container">
      <div className="about">
        <h3 className="about__title">About</h3>
        <div className="about__wrapper">
          <div className="about__divimg">
            <img className="about__img" src={me} alt="My Image" />
          </div>
          <div className="about__description">
            <p>
              <ArrowForwardIcon />
              Nothing excites me more than solving challenging problems with
              technology. I have worked on numerous full-stack projects and
              always learning new technologies and frameworks to keep myself up
              to date with industry standards.
            </p>
            <p>
              <ArrowForwardIcon />
              In my free time, I love to workout and listen to podcasts.
              Occasionally, I also play Tennis.
            </p>
            <p>
              <ArrowForwardIcon />
              Feel free to reach out to me through my LinkedIn for any
              opportunity or just to talk about any new cool ideas.
            </p>
          </div>
        </div>
        <div className="footer__socials">
          <img className="icon" src={react} alt="React" />
          <img className="icon" src={typescript} alt="TypeScript" />
          <img className="icon" src={python} alt="Python" />
          <img className="icon" src={nodejs} alt="Node.js" />
          <img className="icon" src={mysql} alt="MySQL" />
          <img className="icon" src={postgres} alt="PostgreSQL" />
          <img className="icon" src={graphql} alt="GraphQL" />
          <img className="icon" src={prisma} alt="Prisma" />
        </div>
      </div>
    </div>
  );
}

function ProjectsHeading() {
  return (
    <div>
      <div id="projects" className="outer">
        <div className="projects__heading">I've worked on...</div>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="outer">
      <div className="card">
        <div className="card__content">
          <a href={props.link} target="_blank">
            <img className="card__image" src={props.img} alt={props.img} />
          </a>
        </div>
        <div className="card__info">
          <h2 className="card__title">{props.title}</h2>
          <p className="card__description">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
