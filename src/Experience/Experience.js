import React , {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import './Experience.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import experienceImg from '../media/experienceImg.png';
AOS.init();

class Experience extends Component {

    render() {
        const experienceItems =[
            {company:"AMENAL",
                title:"conception and creation of a mobile application for site management",
                description:"▪ Developed by a team of 2 peoples using the AGILE method\n" +
                    "▪ The front-end of the application is developed by IONIC 4 and Angular framework, the back-end is developed\n" +
                    "by Spring boot\n" +
                    "▪ Using Spring Security and JWT for application security",
                year:2019},
            {company:"SYNERGIE MEDIA",
                title:"conception and creation of a web application for managing csv files",
                description:"The application is developed in PHP (Laravel Framework)"+
                    "Creating an order using Laravel job that runs daily to read csv files from " +
                    "an FTP server and process them for\n" +
                    "the purpose of displaying statistics",
                year:2019},
            {company:"OCP GROUP",
                title:"conception and creation of a web application for stock management",
                description:"The application is developed in JAVA EE and Thymeleaf",
                year:2019},
        ];
        const experiences = experienceItems.map((experience) =>
             <div>
                 <h1>{experience.company}</h1>
                 <h2>{experience.title}</h2>
                 <p>{experience.description}</p><br/>
             </div>
        );
        return (
            <div className="ui grid celled">
                <h1>Experiences</h1><hr/>
                <div className="row">
                    <div className="two wide column"></div>
                    <div className="seven wide column">
                        {experiences}
                    </div>
                    <div className="seven wide column">
                        <img src={experienceImg} alt="experienceImg" />
                    </div>
                </div>
            </div>
        );
    }
}
export default Experience;

