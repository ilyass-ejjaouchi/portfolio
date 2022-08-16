import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import './Skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import javaee from '../media/skills/javaee.png';
import springboot from '../media/skills/springboot.png';
import springcloud from '../media/skills/springcloud.png';
import springsecurit from '../media/skills/springsecurit.png';
import apiRest from '../media/skills/API_REST.png';
import saop from '../media/skills/soap.png';
import hibernate from '../media/skills/hibernate.png';
import junit from '../media/skills/Junit.png';
import log4j from '../media/skills/log4j.png';
import angular from '../media/skills/angular.png';
import react from '../media/skills/react.png';
import redux from '../media/skills/Redux.png';
import js from '../media/skills/js.png';
import ts from '../media/skills/ts.png';
import html from '../media/skills/html.png';
import css from '../media/skills/css.png';
import laravel from '../media/skills/laravel.png';
import bootstrap from '../media/skills/bootstrap.png';
import jquery from '../media/skills/jquery.png';
import sonarqube from '../media/skills/sonarqube.png';
import docker from '../media/skills/docker.png';
import jenkins from '../media/skills/jenkins.png';
import java from '../media/skills/java.png';
import pl from '../media/skills/pl.png';
import php from '../media/skills/php.png';
import c from '../media/skills/c.png';
import csharp from '../media/skills/c#.png';
import cplus from '../media/skills/c++.png';
import uml from '../media/skills/uml.png';
import mysql from '../media/skills/mysql.png';
import oracle from '../media/skills/oracle.png';
import postgresql from '../media/skills/postgresql.png';
import ionic from '../media/skills/ionic.png';
import intellej from '../media/skills/intellej.png';
import webstorme from '../media/skills/webstorme.png';
import datagrip from '../media/skills/datagrip.png';
import eclipse from '../media/skills/eclipse.png';
import talend from '../media/skills/talend.png';
import {withTranslation} from "react-i18next";
import {ProgressBar} from "react-bootstrap";

AOS.init({
    duration: 1500
});

class Skills extends Component {

    render() {
        const {t} = this.props;
       const skillsItem = [
           {   id:1,
               title:t('skills.title1'),
               icons:[
                   {id:1, src: oracle},
                   {id:2, src: mysql},
                   {id:3, src: postgresql}
               ]
           },
           {   id:2,
               title:t('skills.title2'),
               icons:[
                   {id:1, src: uml}
               ]
           },
           {   id:3,
               title:t('skills.title3'),
               icons:[
                   {id:1, src: java},
                   {id:2, src: csharp},
                   {id:3, src: cplus},
                   {id:4, src: c},
                   {id:4, src: php},
                   {id:4, src: pl},
               ]
           },
           {   id:4,
               title:t('skills.title4'),
               icons:[
                   {id:1, src: javaee},
                   {id:2, src: springboot},
                   {id:3, src: springcloud},
                   {id:4, src: springsecurit},
                   {id:4, src: junit},
                   {id:4, src: apiRest},
                   {id:4, src: saop},
                   {id:4, src: hibernate},
                   {id:4, src: log4j},
                   {id:4, src: angular},
                   {id:4, src: react},
                   {id:4, src: redux},
                   {id:4, src: js},
                   {id:4, src: ts},
                   {id:4, src: html},
                   {id:4, src: css},
                   {id:4, src: php},
                   {id:4, src: laravel},
                   {id:4, src: bootstrap},
                   {id:4, src: jquery}
               ]
           },
           {   id:5,
               title:t('skills.title5'),
               icons:[
                   {id:1, src: ionic}
               ]
           },
           {   id:6,
               title:t('skills.title6'),
               icons:[
                   {id:1, src: talend}
               ]
           },
           {   id:7,
               title:t('skills.title7'),
               icons:[
                   {id:1, src: jenkins},
                   {id:1, src: sonarqube},
                   {id:1, src: docker}
               ]
           },
           {   id:8,
               title:t('skills.title8'),
               icons:[
                   {id:1, src: intellej},
                   {id:2, src: webstorme},
                   {id:3, src: datagrip},
                   {id:4, src: eclipse},
               ]
           }
       ]
        const mySkills = skillsItem.map((skill) =>
                <tr data-aos="fade-left" key={skill.id}>
                    <td>
                        <div className="content">
                            {skill.title}
                        </div>
                    </td>
                    <td>
                        {skill.icons.map((icon)=>{
                            return(<img className="icon" key={icon.id} src={icon.src} alt={icon.src}/>);
                            })}
                    </td>

                </tr>
        );
        return (
            <div className="container" data-aos="fade-left">
                <h1>{t('title.Skills')}</h1><hr/>
                <table className="ui very basic collapsing celled table">
                    <tbody>
                    {mySkills}
                    </tbody>
                </table>
                <h1>{t('label.Languages')}</h1>
                <hr/>
                <div>
                    <b>{t('label.French')}</b><ProgressBar now={80}/>
                    <b>{t('label.English')}</b><ProgressBar now={70}/>
                    <b>{t('label.Arabic')}</b><ProgressBar now={100}/>
                </div>
            </div>
        );
    }
}
Skills = withTranslation('common')(Skills)
export default Skills;

