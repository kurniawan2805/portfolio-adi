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
      </div>
    </>
  );
};
export default Home;
