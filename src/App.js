import './App.css';
import Image from "./image/Image";
import Form from "./Form/Form";
import Footer from "./footer/Footer";
import Education from "./Education/Education";
import Ensa from "./media/Ensa.png";
import middleEducation from "./media/middleEducation.png";

function App() {
  return (
    <div className="App">
      <Image></Image>
      <Footer></Footer>
      <Form id="form"></Form>
        <div className="ui grid">
            <div className="row">
                <div className="eight wide column">
                    <Education></Education>
                </div>
                <div className="eight wide column">hh</div>
            </div>
        </div>
    </div>
  );
}

export default App;
