//Compontent responsible for the nav bar on top of the page

import NavLink from "./NavLink.jsx";
import Hamburger from "./Hamburger.jsx";
import { useState, useEffect } from "react";

//Separates the data from the logic
const links = [
  { text: "home", url: "" },
  { text: "about", url: "" },
  { text: "contact us", url: "" },
  { text: "our history", url: "" },
];

//takes states as props
export default function Navbar({
  isSmall = false,
  sidebarShow,
  setSidebarShow,
}) {
  //Keeping track of which button is active
  const [activeButton, setActiveButton] = useState("home");
  //Visibility of navbar
  const [navbarShow, setNavbarShow] = useState(false);
  const [isVisible, setVisible] = useState(
    isSmall && !navbarShow ? false : true
  );

  //Effect reacts to changes to window size and if the navbar should be shown
  useEffect(() => {
    if (isSmall && navbarShow) {
      setVisible(true);
      return;
    }
    if (!isSmall) {
      setVisible(true);
      return;
    }
    setVisible(false);
  }, [navbarShow, isSmall]);

  //Logic for handling the active button
  function activeHandler(text) {
    setActiveButton(text);
    if (isSmall && isVisible) {
      setVisible(false);
    }
  }

  return (
    <nav
      className={`col-start-1 col-span-2 bg-(--color-secondary-bg) h-[3rem] mt-[1rem] shadow-(<custom-property>) sm:col-start-2 sm:col-span-5 lg:pl-[5rem]`}>
      <ul
        className={`md:ml-[50px] mr-2 gap-8 justify-start items-center text-(length:--font-size-h3) ${
          !isVisible ? "hidden" : "flex flex-col sm:flex-row justify-between"
        } ${
          isSmall && isVisible
            ? "absolute ml-[10%] w-[80%] h-[80vh] mt-[10vh] rounded-4xl z-10 text-center bg-(--color-secondary-bg) pt-[10%] "
            : ""
        }`}>
        {/* Mapping over the array of links, creating a NavLink for each. Data as props, as well as states and clickhandling function */}
        {links.map((link) => {
          return (
            <NavLink
              url={link.url}
              text={link.text}
              key={link.text}
              active={activeButton === link.text}
              onMouseDown={activeHandler}
              isSmall={isSmall}
            />
          );
        })}
      </ul>
      {/* Collapsed menu icons are added if the window is small. States as props. */}
      {isSmall && (
        <Hamburger
          sidebarShow={sidebarShow}
          setSidebarShow={setSidebarShow}
          navbarShow={navbarShow}
          setNavbarShow={setNavbarShow}
          isSmall={isSmall}
        />
      )}
    </nav>
  );
}
