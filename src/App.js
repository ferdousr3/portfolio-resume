import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
// import Header from "./components/Header/Header";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Project from "./Pages/Project";
import Blogs from "./Pages/Blogs";
import { createContext, useState } from "react";
import AboutMe from "./Pages/AboutMe";
import Header from "./components/Header/Header1";

export const ProjectContext = createContext();

function App() {
  const [project, setProject] = useState([]);
  console.log(project);

  return (
    <>
      <ProjectContext.Provider value={[project, setProject]} >
        <header>
          {/* <Header /> */}
          <Header/>
        </header>
        <main className="container mx-auto ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/aboutMe" element={<AboutMe/>} />
            <Route path="/project/:id" element={<Project />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
        <ToastContainer />
      </ProjectContext.Provider>
    </>
  );
}

export default App;
