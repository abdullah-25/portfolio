import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import python from "../../Assets/python-3.svg";
import hack from "../../Assets/quickReceipts.png";
import Cnn from "../../Assets/CNN.png";
import structure from "../../Assets/Structure.png";
import QuickMealsImg from "../../Assets/QuickMeals.png";
import google from "../../Assets/Google.webp";
import FitBuddyImg from "../../Assets/FitBuddy.png";

export const WorkIcon = () => <></>;

export default function VerticalTimelineProjects() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#8ECAE6", color: "#023047" }}
        contentArrowStyle={{ borderRight: "7px solid  #8ECAE6" }}
        iconStyle={{ background: "#8ECAE6", color: "#8ECAE6" }}
        date={<span style={{ color: "#fff" }}>2019</span>}
        icon={<WorkIcon />}
      >
        <h2
          style={{
            color: "#023047",
            fontSize: "1.5rem",
            textAlign: "center",
            textDecoration: "underline",
          }}
        >
          Started Programming in Python
        </h2>

        <p>
          My programming journey began with a university course called
          'Introduction to Programming using Python.' This course introduced me
          to the world of coding and ignited my passion for technology. Python's
          simplicity and versatility captivated me, setting the foundation for
          my programming career.
        </p>
        <img style={{ marginTop: "1.5rem" }} src={python} />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#8ECAE6", color: "#023047" }}
        contentArrowStyle={{ borderRight: "7px solid  #8ECAE6" }}
        iconStyle={{ background: "#8ECAE6", color: "#8ECAE6" }}
        date={<span style={{ color: "#fff" }}>2019</span>}
        icon={<WorkIcon />}
      >
        <h2
          style={{
            color: "#023047",
            fontSize: "1.5rem",
            textAlign: "center",
            textDecoration: "underline",
          }}
        >
          First Hackathon!
        </h2>

        <p>
          My debut hackathon at 'Hack the North' was a memorable experience
          where I created 'Quick Receipts,' a React Native app. This app
          simplifies the task of digitally storing all your receipts in one
          place, promoting convenience and eco-friendliness. It marked the
          beginning of my journey into the world of hackathons and app
          development.
        </p>
        <img style={{ marginTop: "1.5rem" }} src={hack} />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#8ECAE6", color: "#023047" }}
        contentArrowStyle={{ borderRight: "7px solid  #8ECAE6" }}
        iconStyle={{ background: "#8ECAE6", color: "#8ECAE6" }}
        date={<span style={{ color: "#fff" }}>2019</span>}
        icon={<WorkIcon />}
      >
        <h2
          style={{
            color: "#023047",
            fontSize: "1.5rem",
            textAlign: "center",
            textDecoration: "underline",
          }}
        >
          First Exposure into the world of Machine Learning
        </h2>

        <p>
          In my 'Introduction to Artificial Intelligence' course, I did a team
          project where we leveraged machine learning to transform facial
          expressions into emojis. Emojis have become a vital part of digital
          communication, allowing us to express emotions more vividly in a
          social media context. Our model, based on a Convolutional Neural
          Network (CNN), aimed to categorize users' facial expressions and
          translate them into emojis. This innovative approach had practical
          applications, such as Apple's 'Memoji' feature. This project marked my
          introduction to the exciting world of AI and its potential to reshape
          digital expression.
        </p>
        <img style={{ marginTop: "1.5rem" }} src={Cnn} />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#8ECAE6", color: "#023047" }}
        contentArrowStyle={{ borderRight: "7px solid  #8ECAE6" }}
        iconStyle={{ background: "#8ECAE6", color: "#8ECAE6" }}
        date={<span style={{ color: "#fff" }}>2019</span>}
        icon={<WorkIcon />}
      >
        <h2
          style={{
            color: "#023047",
            fontSize: "1.5rem",
            textAlign: "center",
            textDecoration: "underline",
          }}
        >
          Used Python to solve structural engineering problems
        </h2>

        <p>
          In my third year design course, I tackled the design of a reinforced
          concrete pedestrian bridge. To ensure its structural integrity, I
          developed a Python class applying Object-Oriented Programming
          principles. This class allowed me to check for beam failure values and
          serviceability limits. I used Matplotlib to create informative
          diagrams that depicted the structural elements and the results of my
          checks. This experience showcased the powerful combination of
          engineering and programming, highlighting how Python and OOP
          principles can enhance civil engineering projects.
        </p>
        <img style={{ marginTop: "1.5rem" }} src={structure} />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#8ECAE6", color: "#023047" }}
        contentArrowStyle={{ borderRight: "7px solid  #8ECAE6" }}
        iconStyle={{ background: "#8ECAE6", color: "#8ECAE6" }}
        date={<span style={{ color: "#fff" }}>2019</span>}
        icon={<WorkIcon />}
      >
        <h2
          style={{
            color: "#023047",
            fontSize: "1.5rem",
            textAlign: "center",
            textDecoration: "underline",
          }}
        >
          First React App
        </h2>

        <p>
          In an exhilarating journey into web development, I embarked on the
          creation of my first React app. The project was not only a debut into
          the world of React but also a testament to the efficiency of my work,
          as I managed to complete it within the remarkable timeframe of under
          10 hours. The project presented an opportunity to explore the powerful
          capabilities of React, a popular JavaScript library for building user
          interfaces.
          <br />
          <br />
          With a blend of JavaScript, JSX, and component-based architecture, I
          crafted an interactive and responsive web application that met the
          project's objectives. This achievement underscored the rapid learning
          curve and adaptability that comes with web development and React in
          particular.
          <br />
          <br />
          It served as a pivotal moment in my journey, reinforcing my passion
          for creating dynamic and engaging web applications. With this
          experience, I stepped confidently into the world of front-end
          development, ready to tackle more complex and exciting projects.
        </p>
        <img style={{ marginTop: "1.5rem" }} src={QuickMealsImg} />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#8ECAE6", color: "#023047" }}
        contentArrowStyle={{ borderRight: "7px solid  #8ECAE6" }}
        iconStyle={{ background: "#8ECAE6", color: "#8ECAE6" }}
        date={<span style={{ color: "#fff" }}>2019</span>}
        icon={<WorkIcon />}
      >
        <h2
          style={{
            color: "#023047",
            fontSize: "1.5rem",
            textAlign: "center",
            textDecoration: "underline",
          }}
        >
          Google's hackathon
        </h2>

        <p>
          Participated in Google's 24-hour hackathon, my 3rd hackathon, where I
          used React, Node.js, and Express to redesign a responsive Gmail app. I
          inntegrated AI features and focused on user-friendliness based on
          feedback. This experience emphasized collaboration and the integration
          of cutting-edge technology into real-world applications.
        </p>
        <img style={{ marginTop: "1.5rem" }} src={google} />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#8ECAE6", color: "#023047" }}
        contentArrowStyle={{ borderRight: "7px solid  #8ECAE6" }}
        iconStyle={{ background: "#8ECAE6", color: "#8ECAE6" }}
        date={<span style={{ color: "#fff" }}>2019</span>}
        icon={<WorkIcon />}
      >
        <h2
          style={{
            color: "#023047",
            fontSize: "1.5rem",
            textAlign: "center",
            textDecoration: "underline",
          }}
        >
          First Saas Product
        </h2>

        <p>
          As I continue to expand my skillset in web development, I decided to
          solve a problem that I was facing currently which is to have an app
          that can store my workout progress in the form of chart. So I built
          Fitbuddy.
          <br />
          <br />
          It allows users to track their progress and visualize their workout
          data in the form of interactive charts. It helps users stay motivated
          and monitor their fitness journey effectively. Built using React,
          NodeJS, Firebase and MySQL.
        </p>
        <img
          style={{
            marginTop: "1.5rem",
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%",
          }}
          src={FitBuddyImg}
        />
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}
