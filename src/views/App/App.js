import React from "react"
import MainTemplate from "../../components/MainTemplate/MainTemplate";
import Home from "../Home/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Games from "../Games/Games";
import About from "../About/About";
import GamesDetail from "../GamesDetail/GamesDetail";
import logo from "../../assets/images/logo.png";

function App() {

    const navItems = [
        {url: "/", text: "Home"},
        {url: "/games", text: "Games"},
        {url: "/about", text: "About"}
    ];

  return (

      <BrowserRouter>

        <MainTemplate
        footerCourseName=" Applicazioni Web: Progettazione e Sviluppo"
        footerCourseLink="https://elearning.unimib.it/course/view.php?id=44672"
        navItems={navItems}
        logo={logo}
        >

          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Games" element={<Games />}/>
            <Route path="/About" element={<About />}/>
            <Route path="/GamesDetail/:id" element={<GamesDetail />}/>
          </Routes>

        </MainTemplate>

      </BrowserRouter>
  );
}

export default App;
