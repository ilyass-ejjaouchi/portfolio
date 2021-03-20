import './App.css';
import Image from "./image/Image";
import Form from "./Form/Form";
import Footer from "./footer/Footer";
import Education from "./Education/Education";
import Projects from "./Projects/Projects";

function App() {
  return (
    <div className="App">
      <Image></Image>
      <Footer></Footer>
        <div className="ui grid">
            <div className="row">
                <div className="one wide column"></div>
                <div className="seven wide column">
                    <Education ></Education>
                </div>
                <div className="one wide column"></div>
                <div className="seven wide column">
                    <Projects></Projects>
                </div>
            </div>
        </div>
        <Form id="form"></Form>
    </div>
  );
}

export default App;
