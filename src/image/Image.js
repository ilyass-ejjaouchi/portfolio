import React , {Component} from 'react';
import "./image.css"
import 'semantic-ui-css/semantic.min.css';
import {Link} from 'react-scroll'
import SocialMedia from "./SocialMedia/SocialMedia";
import {withTranslation} from "react-i18next";
class Image extends Component {
    render() {
        const {t} = this.props;
        return (
            <div className="ui grid division">
                <div className="row info">
                    <div className="ten wide column info1">
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
