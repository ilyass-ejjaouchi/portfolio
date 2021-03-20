import React , {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import './Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

class Projects extends Component {

    render() {
       const projectItems = [
           {title:"Conception and creation of a REST API which manages publications within of a review scientist with spring boot,spring security and JWT"},
           {title:"Conception and of a mobile application for absence management with spring boot and IONIC 4"},
           {title:"Creation of pictures research engine with React, Redux, Semantic UI and Pixabay API"},
           {title:"Creation of a desktop application for media library management with JAVA SE, MySQL and Swing"},
       ]
        const projects = projectItems.map((project) =>
                <tr data-aos="fade-left">
                    <td>
                        <div className="content">
                            {project.title}
                        </div>
                    </td>
                    <td>
                        <i className="large eye icon"></i>
                    </td>
                    <td>
                        <i className="large github icon"></i>
                    </td>
                </tr>
        );
        return (
            <div className="container">
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

