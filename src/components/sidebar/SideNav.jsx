//Component responsible for the navigation part of the sidebar
import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import SideButton from "./SideButton.jsx";
import NavContext from "../../contexts/NavContext.js";

const sideButtons = [
  { name: "Uppgift 1", id: uuidv4() },
  { name: "Uppgift 2", id: uuidv4() },
  { name: "Uppgift 3", id: uuidv4() },
];

export default function SideNav() {
  const { sidebarShow, setSidebarShow } = useContext(NavContext);

  //Keeps track of the active buttons
  const [activeButton, setActiveButton] = useState("");

  //Changes active button depending on name
  function activeHandler(name) {
    setActiveButton(name);
    setSidebarShow(!sidebarShow);
  }

  return (
    <>
      <ul className="mb-7 flex h-50 flex-col gap-2 sm:row-start-5">
        {sideButtons.map((btn) => {
          return (
            <SideButton
              key={btn.id}
              name={btn.name}
              isActive={activeButton === btn.name ? true : false}
              onClick={activeHandler}
            />
          );
        })}
      </ul>
    </>
  );
}
