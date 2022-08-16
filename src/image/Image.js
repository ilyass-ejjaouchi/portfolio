import React, {Component} from 'react';
import "./image.css"
import 'semantic-ui-css/semantic.min.css';
import {Link} from 'react-scroll'
import SocialMedia from "./SocialMedia/SocialMedia";
import {withTranslation} from "react-i18next";
import i18next from 'i18next';
import {Dropdown} from "semantic-ui-react";

class Image extends Component {
    render() {
        const {t} = this.props;
        const changeLanguage = (ev) => {
            i18next.changeLanguage(ev);
          }
        const handleChange = (e, { value }) => {
            changeLanguage(value)};

        const languageOptions = [
            { key: 'rf', value: 'fr', text: 'Francais' },
            { key: 'en', value: 'en', text: 'Anglais' },
            { key: 'es', value: 'es', text: 'Espagnol' },
            { key: 'ar', value: 'ar', text: 'Arabe' }
        ]
        return (
            <div className="ui grid division">
                <div className="row info">
                    <div className="ten wide column info1">
                        <div>
                            <Dropdown
                                onChange= {handleChange}
                                button
                                className='icon'
                                floating
                                labeled
                                icon='world'
                                options={languageOptions}
                                search
                                text='Select Language'
                            />
                        </div>
                        <h1 className="nom">EJJAOUCHI</h1>
                        <h1 className="prenom">ILYASS</h1>
                        <h2>{t('info.title')}</h2>
                        <button className="ui button large">
                            <Link to="form" spy={true} smooth={true} className="contactMe">{t('info.contactMe')}</Link></button>
                    </div>
                    <SocialMedia></SocialMedia>
                </div>
            </div>
        );
    }
}
Image = withTranslation('common')(Image)
export default Image;
