import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import './Experience.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Amenal  from '../media/Amenal.png';
import CGI from '../media/CGI.png';
import capgemini from '../media/capgemini.png';
import Ocp from '../media/OCP.png';
import Synergie from '../media/SynergieLogo.png';
import adria from '../media/AdriaLogo.png';
import Onee from '../media/OneLogo.png';
import experienceImg from '../media/experienceImg.png';
import experienceImg2 from '../media/experienceImg2.png';
import {withTranslation} from "react-i18next";

AOS.init({
    duration: 1500
});

class Experience extends Component {

    render() {
        const {t} = this.props;
        const experienceItems = [
            {
                id: 0,
                company: "Capgemini",
                title: t('experience.titleCap'),
                description: t('experience.descriptionCap').split('\n').map((line, index) => <p key={`0${index}`}>{line}</p>),
                year: 2022,
                icon: capgemini
            },
            {
                id: 1,
                company: "CGI",
                title: t('experience.title0'),
                description: t('experience.description0').split('\n').map((line, index) => <p key={`1${index}`}>{line}</p>),
                year: 2022,
                icon: CGI
            },
            {
                id: 2,
                company: "Adria Business & Technology",
                title: t('experience.title1'),
                description: t('experience.description1').split('\n').map((line, index) => <p key={`2${index}`}>{line}</p>),
                year: 2021,
                icon: adria
            },
            {
                id: 3,
                company: "AMENAL",
                title: t('experience.title2'),
                description: t('experience.description2').split('\n').map((line, index) => <p key={`3${index}`}>{line}</p>),
                year: 2020,
                icon: Amenal
            },
            {
                id: 4,
                company: "SYNERGIE MEDIA",
                title: t('experience.title3'),
                description: t('experience.description3').split('\n').map((line, index) => <p key={`4${index}`}>{line}</p>),
                year: 2019,
                icon: Synergie
            },
            {
                id: 5,
                company: "OCP GROUP",
                title: t('experience.title4'),
                description: t('experience.description4'),
                year: 2019,
                icon: Ocp
            },
            {
                id: 6,
                company: "ONEE",
                title: t('experience.title5'),
                description: t('experience.description5').split('\n').map((line, index) => <p key={`5${index}`}>{line}</p>),
                year: 2018,
                icon: Onee
            }
        ];
        const experiences = experienceItems.map((experience, index) =>
            <div className="ui divided items" key={`experience_${index}`}>
                <div className="item" data-aos="fade-right" data-aos-duration="1500">
                    <div className="image">
                        <img src={experience.icon} alt={`${experience.company} logo`} />
                    </div>
                    <div className="content">
                        <a className="header">{experience.title}</a>
                        <div className="meta">
                            <span className="cinema">{experience.company}, {experience.year}</span>
                        </div>
                        <div className="description">
                            {experience.description}
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
                        <div data-aos="fade-right"><h1>{t('title.Experiences')}</h1><hr/></div>
                        {experiences}
                    </div>
                    <div className="seven wide column">
                        <br/><br/><br/><br/><br/><br/>
                        <img src={experienceImg} alt="experienceImg"  />
                        <br/><br/><br/><br/><br/><br/>
                        <img src={experienceImg2} alt="experienceImg2"  />
                    </div>
                </div>
            </div>
        );
    }
}
Experience = withTranslation('common')(Experience);
export default Experience;

