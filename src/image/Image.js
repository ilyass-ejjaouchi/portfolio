import React , {Component} from 'react';
import "./image.css"
import WhiteFacebook from '../media/whiteFacebook.png';
import WhiteInsta from '../media/whiteInsta.png';
import WhiteLinkedin from '../media/whiteLinkedin.png';
import facebook from '../media/facebook.png';
import insta from '../media/insta.png';
import linkedin from '../media/linkedin.png';
import 'semantic-ui-css/semantic.min.css';
import {Link} from 'react-scroll'
class Image extends Component {
    render() {
        return (
            <div className="ui grid division">
                <div className="row info">
                    <div className="ten wide column info1">
                        <h1 className="nom">EJJAOUCHI</h1>
                        <h1 className="prenom">ILYASS</h1>
                        <h2>Software engineer (JavaEE, react/Angular), freelancer based in morocco</h2>
                        <button className="ui button large">
                            <Link to="form" spy={true} smooth={true} className="contactMe">Contact me</Link></button>
                    </div>
                    <div className="six wide column socialMedia">
                        <div className="right floated">
                            <img className="Socialicon" src={WhiteFacebook} alt="whiteFacebook"
                                 onMouseOver={e => e.currentTarget.src = facebook}
                                 onMouseLeave={e => e.currentTarget.src = WhiteFacebook}/> <br/>
                            <img className="Socialicon" src={WhiteInsta} alt="WhiteFacebook"
                                 onMouseOver={e => e.currentTarget.src =insta }
                                 onMouseLeave={e => e.currentTarget.src = WhiteInsta}/><br/>
                            <img className="Socialicon" src={WhiteLinkedin} alt="WhiteLinkedin"
                                 onMouseOver={e => e.currentTarget.src =linkedin }
                                 onMouseLeave={e => e.currentTarget.src = WhiteLinkedin}/> <br/>
                            <i className=" github icon Socialicon"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Image;
