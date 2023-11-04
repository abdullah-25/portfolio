import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Form from "./components/Form/Form";
import { ChakraProvider } from "@chakra-ui/react";
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
import Socials from "./components/Socials/Socials";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "./components/Theme/Theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Navigation />
      <Introduction />
      <ProjectsHeading title="Projects" />
      <VerticalTimelineProjects />
      <ProjectsHeading title="Work Experience" />
      <VerticalTimeLineWork />
      <ProjectsHeading title="Education" />
      <VerticalTimelineEducation />
      <ProjectsHeading title="Tech Stack" />
      <About />
      <Form />
    </ChakraProvider>
  );
}

function Introduction() {
  return (
    <div className="container">
      <div className="Introduction">
        <div className="hi">&#128075; Hi there, I'm</div>
        <div className="name">Muhammad Abdullah</div>
      </div>

      <div className="description">
        <p>
          A software engineer with a unique background in civil engineering. I
          love bringing innovative ideas come to life through code.
        </p>
        <br />
        <p>Let's learn about my personal journey to coding!</p>
        <br />
        <Socials />
      </div>
    </div>
  );
}

function About() {
  return (
    <div id="tech-stack" className="footer-container">
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
