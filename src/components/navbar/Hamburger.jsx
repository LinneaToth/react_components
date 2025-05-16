//Takes states about shown sidebar and navbar as props
export default function Hamburger({
  sidebarShow,
  setSidebarShow,
  setNavbarShow,
  navbarShow,
}) {
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
    <div className="flex flex-row ml-[75vw]">
      <img
        className="self-center pr-(--gap) h-[40px] w-[40px]"
        src="../../src/assets/icons/hamburger.svg"
        onMouseDown={clickHandlerNavbar}></img>
      <img
        className="self-center pr-(--gap) h-[40px] w-[40px]"
        src="../../src/assets/icons/extramenu.svg"
        onMouseDown={clickHandlerSide}></img>
    </div>
  );
}
