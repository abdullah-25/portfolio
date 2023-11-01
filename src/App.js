import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Form from "./components/Form/Form";
import { ChakraProvider, Text } from "@chakra-ui/react";
import react from "./Assets/Icons/react.svg";
import typescript from "./Assets/Icons/typescript-icon.svg";
import python from "./Assets/Icons/python.svg";
import nodejs from "./Assets/Icons/nodejs.svg";
import mysql from "./Assets/Icons/mysql.svg";
import postgres from "./Assets/Icons/postgresql.svg";
import graphql from "./Assets/Icons/graphql.svg";
import prisma from "./Assets/Icons/prisma.svg";
import VerticalTimelineProjects from "./components/VerticalTimeline/VerticalTimeLineProjects";
import VerticalTimeLineWork from "./components/VerticalTimeline/VerticalTimeLineWork";
import VerticalTimelineEducation from "./components/VerticalTimeline/VerticalTimeLineEducation";

function App() {
  return (
    <ChakraProvider>
      <Navigation />
      <Introduction />

      <ProjectsHeading title="Projects" />
      <VerticalTimelineProjects />
      <ProjectsHeading title="Work Experience" />
      <VerticalTimeLineWork />
      <ProjectsHeading title="Education" />
      <VerticalTimelineEducation />
      <ProjectsHeading title="Tech Stack" />
      {/* <Card
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
      /> */}
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
              I love bringing innovative ideas come to life through code.
            </p>
            <br />
            <p>Let's learn about my personal journey to coding!</p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div id="about-me" className="container">
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
  );
}

function ProjectsHeading({ title }) {
  return (
    <div>
      <div id="projects" className="outer">
        <div className="projects__heading">{title}</div>
      </div>
    </div>
  );
}

export default App;
