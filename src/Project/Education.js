import React , {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import './Education.css';
import Ensa from '../media/Ensa.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

class Education extends Component {

    render() {
        return (
                <div className="container">
                    <h1 data-aos="fade-right">Education</h1><hr/>
                    <img src={Ensa} alt="ensa" data-aos="fade-right"/>
                    <div className="education" data-aos="fade-right">
                        <h2>Software Engineering Student</h2>
                        <p><b>ENSA's Computer Engineering graduates are capable of working in a wide
                            variety of professions in virtually all sectors of the economy.
                            They have the necessary technical skills combined with good interpersonal
                            skills and an awareness of organizations and the functioning of companies.
                            From a technical point of view, he/she has the ability to design
                            (components or software architecture) as well as to integrate
                            (assembly of sub-assemblies whose functionalities and coordination are mastered).
                            The acquisition of these technical skills gives a large part to self-training,
                            so as to ensure a good adaptation to one's professional environment and to future developments.
                        </b></p>
                    </div>
                </div>
        );
    }
}
export default Education;

