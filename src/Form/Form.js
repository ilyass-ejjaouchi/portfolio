import React , {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import './Form.css'
import {withTranslation} from "react-i18next";
import emailjs from 'emailjs-com';

class Form extends Component {
    initialState = {
        firstName: '',
        lastName: '',
        message: '',
        email: '',
    }
constructor() {
    super();
    this.state = this.initialState;
}
    handleFirstNameChange = (e)=> {
        this.setState({firstName: e.target.value});
    }
    handleLastNameChange = (e)=> {
        this.setState({lastName: e.target.value});
    }
    handleMessageChange = (e)=> {
        this.setState({message: e.target.value});
    }
    handleEmailChange = (e)=> {
        this.setState({email: e.target.value});
    }
    submit = ()=> {
        emailjs.send("service_qitv8og","template_9zmjdc3", this.state,"user_5HWFh3miaxgyWCJMlwGKJ")
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
            });
       this.myFormRef.reset();
    }
    render() {
        const {t} = this.props;
        return (
            <div className="ui centered grid formulaire">
                <div className="six wide tablet eight wide computer column">
                    <h1>{t('label.Contact')}</h1><hr/>
                    <form className="ui form" ref={(el) => this.myFormRef = el}>
                        <div className="two fields">
                            <div className="field">
                                <label>{t('label.FirstName')}</label>
                                <input placeholder={t('label.FirstName')}
                                       type="text"
                                       onChange={this.handleFirstNameChange}/>
                            </div>
                            <div className="field">
                                <label>{t('label.LastName')}</label>
                                <input placeholder={t('label.LastName')}
                                       type="text"
                                        onChange={this.handleLastNameChange}/>
                            </div>
                        </div>
                        <div className="field">
                            <label>{t('label.Email')}</label>
                            <input type="text" name="email"
                                   placeholder={t('label.Email')}
                                   onChange={this.handleEmailChange}/>
                        </div>
                        <div className="field">
                            <label>{t('label.Message')}</label>
                            <textarea rows="2" spellCheck="false"
                                      data-ms-editor="true"
                                      onChange={this.handleMessageChange}></textarea>
                        </div>
                        <div className="ui button" type="submit"
                            onClick={this.submit}>{t('label.Submit')}</div>
                    </form>
                </div>

            </div>

        );
    }
}
Form = withTranslation('common')(Form);
export default Form;

