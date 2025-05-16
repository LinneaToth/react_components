import { useState } from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import MainContent from "./components/main/MainContent.jsx";

function App() {
  const [sidebarShow, setSidebarShow] = useState(false);

  const [isSmall, setIsSmall] = useState(
    window.innerWidth < 640 ? true : false
  );

  window.addEventListener("resize", () => {
    setIsSmall(window.innerWidth < 640 ? true : false);
  });

  return (
    <div
      className="bg-(--color-main-bg) text-(--color-text-main)
    w-screen h-screen sm:min-h-[600px] absolute 
    grid grid-cols-2 sm:grid-cols-3 grid-rows-10 lg:grid-cols-5 xl:grid-cols-6">
      <Navbar
        isSmall={isSmall}
        sidebarShow={sidebarShow}
        setSidebarShow={setSidebarShow}
      />
      <Sidebar isSmall={isSmall} sidebarShow={sidebarShow} />
      <MainContent />
    </div>
  );
}

export default App;
