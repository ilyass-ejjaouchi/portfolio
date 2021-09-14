import React , {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import './Footer.css';
import {Link} from "react-scroll";
import {withTranslation} from "react-i18next";

class Footer extends Component {

    render() {
        const {t} = this.props;
        return (
                <div className="ui grid footer">
                    <div className="four wide column">
                        <h1 className="experience">+2</h1><h1 className="years">{t('experience.years')}</h1>
                    </div>
                    <div className="twelve wide column ">
                        <h1 className="titre">{t('experience.describeMe')}</h1>
                        <div className="ui equal width grid">
                                <div className="column card" ><br/><br/>
                                <i className="big edit outline icon"></i>
                                <h1>{t('label.Education')} </h1>
                                    <Link to="education" spy={true} smooth={true} className="link">
                                        <h4>{t('label.discover')}<i className="arrow alternate circle right outline icon"></i></h4>
                                    </Link>
                            </div>
                            <div className="column card"><br/><br/>
                                <i className="big tasks icon"></i>
                                <h1>{t('title.Experiences')}</h1>
                                <Link to="experiences" spy={true} smooth={true} className="link">
                                    <h4>{t('label.discover')}<i className="arrow alternate circle right outline icon"></i></h4>
                                </Link>
                            </div>
                            <div className="column card"><br/><br/>
                                <i className="big desktop icon"></i>
                                <h1>{t('title.Projects')}</h1>
                                <Link to="projects" spy={true} smooth={true} className="link">
                                    <h4>{t('label.discover')}<i className="arrow alternate circle right outline icon"></i></h4>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}
Footer = withTranslation('common')(Footer)
export default Footer;

