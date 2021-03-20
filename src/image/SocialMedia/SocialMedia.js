import React , {Component} from 'react';
import WhiteFacebook from '../../media/whiteFacebook.png';
import WhiteInsta from '../../media/whiteInsta.png';
import WhiteLinkedin from '../../media/whiteLinkedin.png';
import facebook from '../../media/facebook.png';
import insta from '../../media/insta.png';
import linkedin from '../../media/linkedin.png';
import github from '../../media/github.png';
import githubWhite from '../../media/githubWhite.png';
import 'semantic-ui-css/semantic.min.css';
import './SocialMedia.css';
class SocialMedia extends Component {
    render() {
        return (
            <div className="six wide column socialMedia">
                <div className="right floated">
                    <a href="https://www.facebook.com/profile.php?id=100008194386790" target="_blank">
                        <img className="Socialicon" src={WhiteFacebook} alt="whiteFacebook"
                             onMouseOver={e => e.currentTarget.src = facebook}
                             onMouseLeave={e => e.currentTarget.src = WhiteFacebook}/>
                    </a><br/>
                    <a href="https://www.instagram.com/ilyass_ezzaouchi/" target="_blank">
                        <img className="Socialicon" src={WhiteInsta} alt="WhiteFacebook"
                             onMouseOver={e => e.currentTarget.src =insta }
                             onMouseLeave={e => e.currentTarget.src = WhiteInsta}/>
                    </a><br/>
                    <a href="https://www.linkedin.com/in/ilyass-ejjaouchi/" target="_blank">
                        <img className="Socialicon" src={WhiteLinkedin} alt="WhiteLinkedin"
                             onMouseOver={e => e.currentTarget.src =linkedin }
                             onMouseLeave={e => e.currentTarget.src = WhiteLinkedin}/>
                    </a><br/>
                    <a href="https://github.com/ilyass-ejjaouchi" target="_blank">
                        <img className="Socialicon" src={githubWhite} alt="WhiteLinkedin"
                             onMouseOver={e => e.currentTarget.src =github }
                             onMouseLeave={e => e.currentTarget.src = githubWhite}/>
                    </a><br/>
                </div>
            </div>
        );
    }
}
export default SocialMedia;
