import './App.css';
import Image from "./image/Image";
import Form from "./Form/Form";
import Footer from "./footer/Footer";
import Education from "./Education/Education";
import Projects from "./Projects/Projects";
import Experience from "./Experience/Experience";
import React from "react";
import Language from "./Language/language";
import {withTranslation} from "react-i18next";
import education from "./media/education.png";

function App() {
  return (
    <div className="App">
      <div id="image"><Image></Image></div>
      <Footer></Footer>
        <div className="ui grid">
            <div className="row">
                <div className="one wide column"></div>
                <div className="seven wide column" id="education">
                    <Education ></Education>
                </div>
                <div className="one wide column"></div>
                <div className="seven wide column" id="projects">
                    <Projects></Projects>
                    <img className="paddTop" src={education} alt="educationImg"/>
                </div>
            </div>
        </div>
        <div id="experiences"><Experience></Experience></div>
        <Form id="form"></Form>
        <div id="language"><Language></Language></div>
    </div>
  );
}
App = withTranslation('common')(App);
export default App;
