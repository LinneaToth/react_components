//Compontent responsible for the nav bar on top of the page
import { useState, useEffect, useContext } from "react";

import NavLink from "./NavLink.jsx";
import Hamburger from "./Hamburger.jsx";
import NavContext from "../../contexts/NavContext.js";

//Separates the data from the logic
const links = [
  { text: "home", url: "" },
  { text: "about", url: "" },
  { text: "contact us", url: "" },
];
//takes states as props
export default function Navbar() {
  const { isSmall } = useContext(NavContext);

  //Keeping track of which button is active
  const [activeButton, setActiveButton] = useState("home");
  //Visibility of navbar
  const [navbarShow, setNavbarShow] = useState(false);
  const [isVisible, setVisible] = useState(
    isSmall && !navbarShow ? false : true,
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
      className={`shadow-(<custom-property>) col-span-2 col-start-1 mt-[1rem] h-[3rem] bg-(--color-secondary-bg) sm:col-span-5 sm:col-start-2 lg:pl-[5rem]`}
    >
      <ul
        className={`mr-2 items-center justify-start gap-8 text-(length:--font-size-h3) md:ml-[50px] ${
          !isVisible ? "hidden" : "flex flex-col justify-between sm:flex-row"
        } ${
          isSmall && isVisible
            ? "absolute z-10 mt-[10vh] ml-[10%] h-[60vh] w-[80%] rounded-4xl bg-(--color-secondary-bg) pt-[10%] text-center"
            : ""
        }`}
      >
        {/* Mapping over the array of links, creating a NavLink for each. Data as props, as well as states and clickhandling function */}
        {links.map((link) => {
          return (
            <NavLink
              url={link.url}
              text={link.text}
              key={link.text}
              active={activeButton === link.text}
              onMouseDown={activeHandler}
            />
          );
        })}
      </ul>
      {/* Collapsed menu icons are added if the window is small. States as props. */}
      {isSmall && (
        <Hamburger navbarShow={navbarShow} setNavbarShow={setNavbarShow} />
      )}
    </nav>
  );
}
