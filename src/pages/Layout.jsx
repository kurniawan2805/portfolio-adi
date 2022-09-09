import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosContact } from "react-icons/io";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import C57 from "../assets/c57.icon.png";

import "./layout.scss";

const Layout = () => {
  return (
    <IconContext.Provider
      value={{ className: "shared-class", size: 32, color: "gray" }}
    >
      <>
        <header className="header">
          <div className="header__content">
            <NavLink to="/">
              <img src={C57} alt="logo C57" />
            </NavLink>
          </div>
          <nav className="header__content__nav">
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "link-active" : undefined
                  }
                >
                  <AiOutlineHome />
                  <span className="nav__text">Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive ? "link-active" : undefined
                  }
                >
                  <BsFillJournalBookmarkFill />
                  <span className="nav__text">Project</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "link-active" : undefined
                  }
                >
                  <IoIosContact />
                  <span className="nav__text">About</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Outlet />
      </>
    </IconContext.Provider>
  );
};
export default Layout;
