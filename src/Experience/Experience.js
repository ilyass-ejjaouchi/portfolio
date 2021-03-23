import React , {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import './Experience.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Amenal from '../media/Amenal.png';
import Ocp from '../media/OCP.png';
import Synergie from '../media/SynergieLogo.png';
import adria from '../media/AdriaLogo.png';
import Onee from '../media/OneLogo.png';
import experienceImg from '../media/experienceImg.png';
AOS.init({
    duration: 1500
});

class Experience extends Component {

    render() {
        const experienceItems =[
            {company:"Adria Business & Technology",
                title:"INTERNATIONAL TRANSFER (MIGRATION BCP & AWB AFRICA)",
                description:"In progress ...",
                year:2021,
                icon: adria},
            {company:"AMENAL",
                title:"CONCEPTION AND CREATION OF A MOBILE APPLICATION FOR SITE MANAGEMENT",
                description:"▪ Developed by a team of 2 peoples using the AGILE method\n" +
                    "▪ The front-end of the application is developed by IONIC 4 and Angular framework, the back-end is developed\n" +
                    "by Spring boot\n" +
                    "▪ Using Spring Security and JWT for application security",
                year:2020,
                icon: Amenal},
            {company:"SYNERGIE MEDIA",
                title:"CONCEPTION AND CREATION OF A WEB APPLICATION FOR MANAGING CSV FILES",
                description:"The application is developed in PHP (Laravel Framework)"+
                    "Creating an order using Laravel job that runs daily to read csv files from " +
                    "an FTP server and process them for\n" +
                    "the purpose of displaying statistics",
                year:2019,
                icon: Synergie},
            {company:"OCP GROUP",
                title:"CONCEPTION AND CREATION OF A WEB APPLICATION FOR STOCK MANAGEMENT",
                description:"The project is a monolithic application designed on the basis of the MVC design pattern on the server side, the presentation part is developed by the template engine Thymeleaf",
                year:2019,
                icon: Ocp},
            {company:"ONEE",
                title:"OBSERVATION INTERNSHIP",
                description:"Upgrade of the LAN network of the provincial service agency of Beni Mellal and installation of secure access routers via a 4G/3G mobile network",
                year:2018,
                icon: Onee}
        ];
        const experiences = experienceItems.map((experience) =>
            <div className="ui divided items">
                <div className="item" data-aos="fade-right" data-aos-duration="1500">
                    <div className="image">
                        <img src={experience.icon}/>
                    </div>
                    <div className="content">
                        <a className="header">{experience.title}</a>
                        <div className="meta">
                            <span className="cinema">{experience.company}, {experience.year}</span>
                        </div>
                        <div className="description">
                            <p>{experience.description}</p>
                        </div>
                        <div className="extra">
                            <div className="ui right floated primary button">
                                more details
                                <i className="right chevron icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        return (
            <div className="ui grid">
                <div className="row">
                    <div className="one wide column">
                    </div>
                    <div className="eight wide column">
                        <div data-aos="fade-right"><h1>Experiences</h1><hr/></div>
                        {experiences}
                    </div>
                    <div className="seven wide column">
                        <br/><br/><br/><br/><br/><br/>
                        <img src={experienceImg} alt="experienceImg"  />
                    </div>
                </div>
            </div>
        );
    }
}
export default Experience;

