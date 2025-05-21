import { useState, useContext } from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import MainContent from "./components/main/MainContent.jsx";
import { postsData } from "./assets/data/data.js";
import PostsContext from "./contexts/PostsContext.js";
import NavContext from "./contexts/NavContext.js";
import Footer from "./components/footer/Footer.jsx";

function App() {
  const [active, setActive] = useState({ user: null, tags: null });
  const [sidebarShow, setSidebarShow] = useState(false);

  const [isSmall, setIsSmall] = useState(
    window.innerWidth < 640 ? true : false,
  );

  window.addEventListener("resize", () => {
    setIsSmall(window.innerWidth < 640 ? true : false);
  });

  return (
    <div className="absolute grid h-screen w-screen grid-cols-2 grid-rows-10 overflow-hidden bg-(--color-main-bg) text-(--color-text-main) sm:min-h-[600px] sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
      <NavContext.Provider
        value={{
          isSmall: isSmall,
          sidebarShow: sidebarShow,
          setSidebarShow: setSidebarShow,
        }}
      >
        <Navbar />
        <Sidebar />
        <PostsContext.Provider value={{ active: active, setActive: setActive }}>
          <MainContent postsData={postsData} />
        </PostsContext.Provider>
      </NavContext.Provider>
    </div>
  );
}

export default App;
