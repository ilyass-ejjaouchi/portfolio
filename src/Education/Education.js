import React , {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import './Education.css';
import Ensa from '../media/Ensa.png';
import UFR from '../media/UFR.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {withTranslation} from "react-i18next";
AOS.init({
    duration: 1500
});

class Education extends Component {

    render() {
        const {t} = this.props;
        const readMoreText = t('label.discover');
        return (
                <div className="row">
                    <h1 data-aos="fade-right">{t('label.Education')}</h1><hr/>
                    <div>
                        <img src={UFR} alt="ufr" data-aos="fade-right"/>
                        <div className="education" data-aos="fade-right">
                            <h2>{t('title.Education1')}</h2>
                            <p><b>{t('title.Formation1')}</b></p>
                        </div>
                    </div>
                    <hr/>
                    <div>
                        <img src={Ensa} alt="ensa" data-aos="fade-right"/>
                        <div className="education" data-aos="fade-right">
                            <h2>{t('title.Education2')}</h2>
                            <p><b>{t('title.Formation2')}</b></p>
                        </div>
                    </div>
                </div>
        );
    }
}
Education = withTranslation('common')(Education)
export default Education;

