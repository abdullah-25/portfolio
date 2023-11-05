import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import yorkRegion from "../../Assets/yorkRegion.png";
import ihsa from "../../Assets/ihsa.jpeg";
import multiplai from "../../Assets/MultiplAI.png";

export const WorkIcon = () => <></>;

export default function VerticalTimelineWork() {
  return (
    <>
      <div className="container">
        <div className="container-rest">Work Experience</div>
      </div>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="May 2022 - Sep 2022"
          contentStyle={{ background: "#023e8a", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #023e8a" }}
          iconStyle={{ background: "#023e8a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h2
            style={{
              color: "#fff",
              fontSize: "1.5rem",
              textAlign: "center",
              textDecoration: "underline",
            }}
          >
            Software Developer Intern
          </h2>

          <p>
            Redesigned ETL jobs in the latest SQL Server Integration Services,
            transformed 15+ stored procedures with continuous integration,
            optimized performance, and orchestrated successful collaboration
            within an agile team, resulting in streamlined processes and
            recognition for exceptional teamwork and project success.
          </p>
          <img
            style={{
              marginTop: "1.5rem",
              marginLeft: "auto",
              marginRight: "auto",
              width: "100%",
            }}
            src={yorkRegion}
          />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Sep 2022 - May 2023"
          contentStyle={{ background: "#023e8a", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #023e8a" }}
          iconStyle={{ background: "#023e8a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h2
            style={{
              color: "#fff",
              fontSize: "1.5rem",
              textAlign: "center",
              textDecoration: "underline",
            }}
          >
            Machine Learning Engineer at Infrasture Health and Safety
            (University contract work)
          </h2>

          <p>
            Led a team of data scientists in Python to develop a predictive
            model using an advanced random forest regressor algorithm,
            performing in-depth accident causality analysis. Conducted feature
            selection, hyperparameter tuning, and rigorous testing on datasets
            exceeding 100,000 entries each to ensure adaptability across diverse
            scenarios and data distributions.
          </p>
          <img
            style={{
              marginTop: "1.5rem",
              marginLeft: "auto",
              marginRight: "auto",
              width: "100%",
            }}
            src={ihsa}
          />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Sep 2023 - Present"
          contentStyle={{ background: "#023e8a", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #023e8a" }}
          iconStyle={{ background: "#023e8a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h2
            style={{
              color: "#fff",
              fontSize: "1.5rem",
              textAlign: "center",
              textDecoration: "underline",
            }}
          >
            Software Engineer at MultiplAI (Stealth Startup)
          </h2>

          <p>
            Currently working on the AI/ML team building automated job platform
            leveraging AWS, Lambda and DynamoDB.
          </p>
          <img
            style={{
              marginTop: "1.5rem",
              marginLeft: "auto",
              marginRight: "auto",
              width: "100%",
            }}
            src={multiplai}
          />
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
}
