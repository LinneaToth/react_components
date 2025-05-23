import { useContext } from "react";
import NavContext from "../../contexts/NavContext";
import burgerIcon from "../../../src/assets/icons/hamburger.svg";
import extraIcon from "../../../src/assets/icons/extramenu.svg";

//Takes states about shown sidebar and navbar as props
export default function Hamburger({ setNavbarShow, navbarShow }) {
  const { sidebarShow, setSidebarShow } = useContext(NavContext);

  //Toggles visibility of sidebar (and ensures both menus aren't expanded at the same time)
  function clickHandlerSide() {
    setSidebarShow(!sidebarShow);
    navbarShow && setNavbarShow(false);
  }

  //Toggles visibility of navbar (and ensures both menus aren't expanded at the same time)
  function clickHandlerNavbar() {
    setNavbarShow(!navbarShow);
    sidebarShow && setSidebarShow(false);
  }

  //Returns two icons for navbar / sidebar
  return (
    <div className="ml-[75vw] flex flex-row">
      <img
        className="h-[40px] w-[40px] self-center pr-(--gap)"
        src={burgerIcon}
        onMouseDown={clickHandlerNavbar}
      ></img>
      <img
        className="h-[40px] w-[40px] self-center pr-(--gap)"
        src={extraIcon}
        onMouseDown={clickHandlerSide}
      ></img>
    </div>
  );
}
