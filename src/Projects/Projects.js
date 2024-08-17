import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import './Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {withTranslation} from "react-i18next";

AOS.init({
    duration: 1500
});

class Projects extends Component {

    render() {
        const {t} = this.props;
       const projectItems = [
           {   id:1,
               title:t('title.project1'),
               link1:"https://github.com/ilyass-ejjaouchi",
               link2:"https://github.com/ilyass-ejjaouchi/gestionRevue"},

           {   id:2,
               title:t('title.project2'),
               link1:"https://absence-application.herokuapp.com/",
               link2:"https://github.com/ilyass-ejjaouchi/gestionAbsenceFront"},

           {   id:3,
               title:t('title.project3'),
               link1:"https://motorrecherchephotos.herokuapp.com/",
               link2:"https://github.com/ilyass-ejjaouchi/motorRecherchePhotos"},
           {   id:4,
               title:t('title.project4'),
               link1:"https://github.com/ilyass-ejjaouchi",
               link2:"https://github.com/ilyass-ejjaouchi"},
           {   id:5,
               title:t('title.project5'),
               link1:"https://github.com/ilyass-ejjaouchi",
               link2:"https://github.com/ilyass-ejjaouchi"},
       ]
        const projects = projectItems.map((project) =>
                <tr data-aos="fade-left" key={project.id}>
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
                <h1>{t('title.Projects')}</h1><hr/>
                <table className="ui very basic collapsing celled table">
                    <tbody>
                    {projects}
                    </tbody>
                </table>
            </div>
        );
    }
}
Projects = withTranslation('common')(Projects)
export default Projects;

