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
import experienceImg2 from '../media/experienceImg2.png';
import {withTranslation} from "react-i18next";
AOS.init({
    duration: 1500
});

class Experience extends Component {

    render() {
        const {t} = this.props;
        const experienceItems =[
            {   id:1,
                company:"Adria Business & Technology",
                title:t('experience.title1'),
                description:t('experience.description1').split('\n').map(line => <p>{line}</p>),
                year:2021,
                icon: adria},
            {
                id:2,
                company:"AMENAL",
                title:t('experience.title2'),
                description:t('experience.description2').split('\n').map(line => <p>{line}</p>),
                year:2020,
                icon: Amenal},
            {
                id:3,
                company:"SYNERGIE MEDIA",
                title:t('experience.title3'),
                description:t('experience.description3').split('\n').map(line => <p>{line}</p>),
                year:2019,
                icon: Synergie},
            {
                id:4,
                company:"OCP GROUP",
                title:t('experience.title4'),
                description:t('experience.description4'),
                year:2019,
                icon: Ocp},
            {
                id:5,
                company:"ONEE",
                title:t('experience.title4'),
                description:t('experience.description5'),
                year:2018,
                icon: Onee}
        ];
        const experiences = experienceItems.map((experience) =>
            <div className="ui divided items" key={experience.id}>
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
                                {t('label.discover')}
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

