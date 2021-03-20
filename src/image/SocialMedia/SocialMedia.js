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
        const socialMedias = [
            {src1:WhiteFacebook,
                src2: facebook,
                link:"https://www.facebook.com/profile.php?id=100008194386790"},
            {src1:WhiteInsta,
                src2: insta,
                link:"https://www.instagram.com/ilyass_ezzaouchi/"},
            {src1:WhiteLinkedin,
                src2: linkedin,
                link:"https://www.linkedin.com/in/ilyass-ejjaouchi/"
            },
            {src1: githubWhite,
                src2: github,
                link:"https://www.linkedin.com/in/ilyass-ejjaouchi/"
            }
        ]
        const listicons = socialMedias.map((icon) =>
            <div>
                <a href={icon.link} target="_blank">
                    <img className="Socialicon" src={icon.src1} alt={icon.src1}
                         onMouseOver={e => e.currentTarget.src = icon.src2}
                         onMouseLeave={e => e.currentTarget.src = icon.src1}/>
                </a><br/>
            </div>
        );
        return (
            <div className="six wide column socialMedia">
                <div className="right floated">
                    {listicons}
                </div>
            </div>
        );
    }
}
export default SocialMedia;
