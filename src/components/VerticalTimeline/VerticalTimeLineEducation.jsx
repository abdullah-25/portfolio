import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import uoft from "../../Assets/uoft.webp";
import bs from "../../Assets/brainStation.png";

export const WorkIcon = () => <></>;

export default function VerticalTimelineEducation() {
  return (
    <>
      <div className="container">
        <div className="container-rest">Education</div>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date={<span style={{ color: "#fff" }}>Sep 2018 - May 2023</span>}
          contentStyle={{ background: "#8ecae6", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  #8ecae6" }}
          iconStyle={{ background: "#8ecae6", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h2
            style={{
              color: "black",
              fontSize: "1.5rem",
              textAlign: "center",
              textDecoration: "underline",
            }}
          >
            University of Toronto
          </h2>

          <p>
            Completed Bachelors in Civil Enginner with minor in Engineering
            Business. Over the course of 4 years I took many programming courses
            such as Fundamentals of Computer Programming, Data Structures and
            Analysis, Applied Fundamentals of Artifcial Intelligence, Data
            Sciene for Civil and Mineral Engineering
          </p>
          <img style={{ marginTop: "1.5rem" }} src={uoft} />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date={<span style={{ color: "#fff" }}>May 2023 - Sep 2023</span>}
          contentStyle={{ background: "#8ecae6", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  #8ecae6" }}
          iconStyle={{ background: "#8ecae6", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h2
            style={{
              color: "black",
              fontSize: "1.5rem",
              textAlign: "center",
              textDecoration: "underline",
            }}
          >
            BrainStation
          </h2>

          <p>
            Attended a 12 week Bootcamp at Lighthouse Labs to enhance my
            programming skillset with modern technologies. Built responsive and
            user-friendly full stack applications using Javascript, React, HTML,
            and CSS. Explored the test-driven development methodology by
            focusing on creating unit tests to drive code development.
          </p>
          <img style={{ marginTop: "1.5rem" }} src={bs} />
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
}
