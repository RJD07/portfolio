import React, { useState } from "react";
import Style from "./Navbar.module.scss";
import Toggler from "./home/Toggler";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import FadeIn from "./FadeIn";

const links = [
  {
    name: "Home",
    to: "/",
    active: "home",
  },
  {
    name: "About Me",
    to: "/about",
    active: "about",
  },
  {
    name: "Portfolio",
    to: "/portfolio",
    active: "portfolio",
  },
  {
    name: "Experience",
    to: "/experience",
    active: "experience",
  },
];

const MobileNavbar = ({ active, setActive, darkMode, handleClick }) => {
  const isMobileView = window.innerWidth <= 450; // Adjust the breakpoint as needed

  return (
    <Box
      component={"ul"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"1rem"}
      fontSize={"1.5rem"}
    >
      {links.map((link, index) => (
        <Box
          key={index}
          component={"li"}
          className={`${link.active === active && !link.type && Style.active} ${
            link.name === "Experience" && isMobileView ? Style.hidden : ''
          }`}
        >
          <Link
            to={link.to}
            onClick={() => setActive(link.active)}
            className={Style.link}
          >
            {!link.type && (
              <p style={{ padding: "0.5rem 0" }}>{getEmojiForLink(link.name)}</p>
            )}
            {link.type && <h1>{link.name}</h1>}
          </Link>
        </Box>
      ))}
      <li>
        <Toggler darkMode={darkMode} handleClick={handleClick} />
      </li>
    </Box>
  );
};

const getEmojiForLink = (linkName) => {
  switch (linkName.toLowerCase()) {
    case "home":
      return "🏠";
    case "about me":
      return "👨🏻‍💼";
    case "portfolio":
      return "📂";
    default:
      return linkName;
  }
};


const DesktopNavbar = ({ active, setActive, darkMode, handleClick }) => (
  <Box
    component={"ul"}
    display={"flex"}
    justifyContent={"center"}
    alignItems={"center"}
    gap={{ xs: "2rem", md: "8rem" }}
    fontSize={"1rem"}
  >
    {links.map((link, index) => (
      <Box
        key={index}
        component={"li"}
        className={link.active === active && !link.type && Style.active}
      >
        <Link
          to={link.to}
          onClick={() => setActive(link.active)}
          className={Style.link}
        >
          {!link.type && <p style={{ padding: "0.5rem 0" }}>{link.name}</p>}
          {link.type && <h1>{link.name}</h1>}
        </Link>
      </Box>
    ))}
    <li>
      <Toggler darkMode={darkMode} handleClick={handleClick} />
    </li>
  </Box>
);


export default function Navbar({ darkMode, handleClick }) {
  const location = useLocation();
  const [active, setActive] = useState(
    location.pathname === "/"
      ? "home"
      : location.pathname.slice(1, location.pathname.length)
  );

  const isMobileView = window.innerWidth <= 450; 

  return (
    <FadeIn>
      <Box component={"nav"} width={"100%"}>
        {isMobileView ? (
          <MobileNavbar
            active={active}
            setActive={setActive}
            darkMode={darkMode}
            handleClick={handleClick}
          />
        ) : (
          <DesktopNavbar
            active={active}
            setActive={setActive}
            darkMode={darkMode}
            handleClick={handleClick}
          />
        )}
      </Box>
    </FadeIn>
  );
}
