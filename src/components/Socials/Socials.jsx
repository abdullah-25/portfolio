import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsFillCalendarDayFill } from "react-icons/bs";
import { AttachmentIcon } from "@chakra-ui/icons";
import { Button, HStack } from "@chakra-ui/react";
import "../../App.css";
export default function Socials() {
  const GitHubIcon = () =>
    window.open(" https://github.com/abdullah-25", "_blank");
  const LinkedIcon = () =>
    window.open("https://www.linkedin.com/in/abdullahim/", "_blank");
  const CalendlyIcon = () =>
    window.open("https://calendly.com/abdullahimv25", "_blank");
  const ResumeIcon = () =>
    window.open(
      "https://drive.google.com/file/d/1sPA5Tp8mfP34hiEjK7PrNXMoLwAlUZ5Y/view",
      "_blank"
    );
  return (
    <HStack>
      <div className="social-top">
        <Button
          mb={5}
          mr={2}
          onClick={ResumeIcon}
          leftIcon={<AttachmentIcon />}
        >
          Resume
        </Button>
        <Button mb={5} onClick={LinkedIcon} leftIcon={<AiFillLinkedin />}>
          LinkedIn
        </Button>
      </div>
      <div className="social-bottom">
        <Button mr={2} mb={5} onClick={GitHubIcon} leftIcon={<AiFillGithub />}>
          Github
        </Button>
        <Button
          mb={5}
          mr={2}
          onClick={CalendlyIcon}
          leftIcon={<BsFillCalendarDayFill />}
        >
          Calendly
        </Button>
      </div>
    </HStack>
  );
}
