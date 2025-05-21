//Component responsible for the sidebar to the left on the page
import { useState, useEffect, useContext } from "react";
import Figure from "./Figure.jsx";
import SideNav from "./SideNav.jsx";
import BottomText from "./BottomText.jsx";
import NavContext from "../../contexts/NavContext.js";

export default function Sidebar() {
  const { isSmall, sidebarShow, setSidebarShow } = useContext(NavContext);

  //Visible or not?
  const [isVisible, setVisible] = useState(false);

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
      className={`col-span-2 col-start-0 row-start-2 sm:col-span-1 sm:col-start-0 sm:row-span-full sm:row-start-1 ${
        !isVisible ? "hidden" : "grid"
      } bg-(--color-secondary-bg) sm:grid-cols-1 sm:grid-rows-10 ${
        isSmall && isVisible
          ? "absolute z-10 mt-[2vh] ml-[10%] h-auto w-[80%] rounded-4xl bg-(--color-secondary-bg) pt-[10%] text-center"
          : ""
      }`}
    >
      {/* Filler figure is only shown on larger screens */}
      {!isSmall && <Figure className="hidden" />}
      <SideNav />
      {!isSmall && <BottomText className="hidden" />}
    </aside>
  );
}
