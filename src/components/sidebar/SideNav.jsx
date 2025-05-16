//Component responsible for the navigation part of the sidebar

import { useState } from "react";
import SideButton from "./SideButton.jsx";

export default function SideNav() {
  //Keeps track of the active buttons
  const [activeButton, setActiveButton] = useState("");

  //Changes active button depending on name
  function activeHandler(name) {
    setActiveButton(name);
  }

  return (
    <ul className="sm:row-start-5 flex flex-col gap-2 h-50">
      {/* Buttons! Next time around this will be mapped, and each will get a Key */}
      <SideButton
        name="part 1"
        isActive={activeButton === "part 1" ? true : false}
        onClick={activeHandler}
      />
      <SideButton
        name="part 2"
        isActive={activeButton === "part 2" ? true : false}
        onClick={activeHandler}
      />
      <SideButton
        name="part 3"
        isActive={activeButton === "part 3" ? true : false}
        onClick={activeHandler}
      />
    </ul>
  );
}
