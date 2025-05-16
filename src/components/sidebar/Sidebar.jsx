//Component responsible for the sidebar to the left on the page

import Figure from "./Figure.jsx";
import SideNav from "./SideNav.jsx";
import BottomText from "./BottomText.jsx";
import { useState, useEffect } from "react";

export default function Sidebar({ isSmall = false, sidebarShow }) {
  //Visible or not?
  const [isVisible, setVisible] = useState(
    isSmall && !sidebarShow ? false : true
  );

  //Listens to changes to window size or if the sidebar should be shown or not
  useEffect(() => {
    if (isSmall && sidebarShow) {
      setVisible(true);
      return;
    }
    if (!isSmall) {
      setVisible(true);
      return;
    }
    setVisible(false);
  }, [sidebarShow, isSmall]);

  return (
    //conditional styling
    <aside
      className={`col-start-0 col-span-2 row-start-2 sm:col-start-0 sm:col-span-1 sm:row-start-1 sm:row-span-full ${
        !isVisible ? "hidden" : "grid"
      } sm:grid-cols-1 sm:grid-rows-10 bg-(--color-secondary-bg)`}>
      {/* Filler figure is only shown on larger screens */}
      {!isSmall && <Figure className="hidden" />}
      <SideNav />
      <BottomText />
    </aside>
  );
}
