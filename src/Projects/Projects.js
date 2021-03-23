import React , {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import './Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    duration: 1500
});

class Projects extends Component {

    render() {
       const projectItems = [
           {title:"Conception and creation of a REST API which manages publications within of a review scientist with spring boot,spring security and JWT",
           link1:"https://github.com/ilyass-ejjaouchi", link2:"https://github.com/ilyass-ejjaouchi/gestionRevue"},
           {title:"Conception and realisation of a mobile application for absence management with spring boot and IONIC 4",
           link1:"https://absence-application.herokuapp.com/", link2:"https://github.com/ilyass-ejjaouchi/gestionAbsenceFront"},
           {title:"Creation of pictures research engine with React, Redux, Semantic UI and Pixabay API",
           link1:"https://motorrecherchephotos.herokuapp.com/", link2:"https://github.com/ilyass-ejjaouchi/motorRecherchePhotos"},
           {title:"Creation of a desktop application for media library management with JAVA SE, MySQL and Swing",
           link1:"https://github.com/ilyass-ejjaouchi", link2:"https://github.com/ilyass-ejjaouchi"},
       ]
        const projects = projectItems.map((project) =>
                <tr data-aos="fade-left">
                    <td>
                        <div className="content">
                            {project.title}
                        </div>
                    </td>
                    <td><a href={project.link1} target="_blank"><i className="large eye icon"></i></a></td>
                    <td><a href={project.link2} target="_blank"><i className="large github icon"></i></a></td>
                </tr>
        );
        return (
            <div className="container" data-aos="fade-left">
                <h1>Projects</h1><hr/>
                <table className="ui very basic collapsing celled table">
                    <tbody>
                    {projects}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Projects;

