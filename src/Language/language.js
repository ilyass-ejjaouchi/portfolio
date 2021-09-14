import React , {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import './language.css';
import Translate from '../media/translate.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {withTranslation} from "react-i18next";
import Education from "../Education/Education";
AOS.init({
    duration: 1500
});

class Language extends Component {
    render() {
        const {t,i18n} = this.props;
        return (
            <div className="ui centered grid">
                <div className="six wide tablet eight wide computer column">
                    <hr/>
                    <div className="ui grid">
                        <div className="two wide column">
                            <img src={Translate} className="Socialicon"/>
                        </div>
                        <div className="fourteen wide column">
                            <b><a className="padd" onClick={() => i18n.changeLanguage('fr')}>{t('label.French')}</a></b>
                            <b><a className="padd" onClick={() => i18n.changeLanguage('en')}>{t('label.English')}</a></b>
                            <b><a className="padd" onClick={() => i18n.changeLanguage('es')}>{t('label.Spanish')}</a></b>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
Language = withTranslation('common')(Language)
export default Language;

