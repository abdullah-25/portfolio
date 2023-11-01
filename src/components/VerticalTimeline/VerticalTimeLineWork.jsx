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
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="May 2022 - Sep 2022"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h2>Software Developer Intern</h2>

        <p>
          Redesigned ETL jobs in the latest SQL Server Integration Services,
          transformed 15+ stored procedures with continuous integration,
          optimized performance, and orchestrated successful collaboration
          within an agile team, resulting in streamlined processes and
          recognition for exceptional teamwork and project success.
        </p>
        <img style={{ marginTop: "1.5rem" }} src={yorkRegion} />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Sep 2022 - May 2023"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h2>
          Machine Learning Engineer at Infrasture Health and Safety (University
          contract work)
        </h2>

        <p>
          Led a team of data scientists in Python to develop a predictive model
          using an advanced random forest regressor algorithm, performing
          in-depth accident causality analysis. Conducted feature selection,
          hyperparameter tuning, and rigorous testing on datasets exceeding
          100,000 entries each to ensure adaptability across diverse scenarios
          and data distributions.
        </p>
        <img style={{ marginTop: "1.5rem" }} src={ihsa} />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Sep 2023 - Present"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h2>Software Engineer at MultiplAI (Stealth Startup)</h2>

        <p>
          Currently working on the AI/ML team building automated job platform
          leveraging AWS, Lambda and DynamoDB.
        </p>
        <img style={{ marginTop: "1.5rem" }} src={multiplai} />
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}
