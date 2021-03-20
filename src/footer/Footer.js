import React , {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import './Footer.css';

class Footer extends Component {

    render() {
        return (
                <div className="ui grid footer">
                    <div className="four wide column">
                        <h1 className="experience">+2</h1><h1 className="years">years of experience</h1>
                    </div>
                    <div className="twelve wide column ">
                        <h1 className="titre">web and mobile developer, specialized in microservices with java and front-end with Angular/react</h1>
                        <div className="ui equal width grid">
                            <div className="column card"><br/><br/>
                                <i className="big edit outline icon"></i>
                                <h1>Education </h1>
                                <h4>discover more <i className="arrow alternate circle right outline icon"></i></h4>
                            </div>
                            <div className="column card"><br/><br/>
                                <i className="big tasks icon"></i>
                                <h1>Experiences</h1>
                                <h4>discover more <i className="arrow alternate circle right outline icon"></i></h4>
                            </div>
                            <div className="column card"><br/><br/>
                                <i className="big desktop icon"></i>
                                <h1>Projects</h1>
                                <h4>discover more <i className="arrow alternate circle right outline icon"></i></h4>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}
export default Footer;

