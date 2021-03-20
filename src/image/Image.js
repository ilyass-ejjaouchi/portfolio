import React , {Component} from 'react';
import "./image.css"
import WhiteFacebook from '../media/whiteFacebook.png';
import WhiteInsta from '../media/whiteInsta.png';
import WhiteLinkedin from '../media/whiteLinkedin.png';
import facebook from '../media/facebook.png';
import insta from '../media/insta.png';
import linkedin from '../media/linkedin.png';
import github from '../media/github.png';
import githubWhite from '../media/githubWhite.png';
import 'semantic-ui-css/semantic.min.css';
import {Link} from 'react-scroll'
import SocialMedia from "./SocialMedia/SocialMedia";
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
                    <SocialMedia></SocialMedia>
                </div>
            </div>
        );
    }
}
export default Image;
