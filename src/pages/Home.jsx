import {
  FaFreeCodeCamp,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import "./home.scss";

const Home = () => {
  return (
    <>
      <div className="jumbotron mb-0">
        <h1 className="display-4 jumbotron-title">Hi, I am Adi!</h1>
        <p className="lead jumbotron-subtitle">
          Electronics Engineer | Front End Developer
        </p>
        <div className="contact">
          <a
            href="https://github.com/kurniawan2805/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:kurniawan2805@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGmail />
          </a>
          <a
            href="https://twitter.com/kurniawan2805"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/kurniawan2805/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.freecodecamp.org/kurniawan2805"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFreeCodeCamp />
          </a>
        </div>
      </div>
    </>
  );
};
export default Home;
