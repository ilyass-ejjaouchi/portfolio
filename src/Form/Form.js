import React , {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import './Form.css'
import {withTranslation} from "react-i18next";

class Form extends Component {

    render() {
        const {t} = this.props;
        return (
            <div className="ui centered grid formulaire">
                <div className="six wide tablet eight wide computer column">
                    <h1>{t('label.Contact')}</h1><hr/>
                    <form className="ui form">
                        <div className="two fields">
                            <div className="field">
                                <label>{t('label.FirstName')}</label>
                                <input placeholder={t('label.FirstName')} type="text"/>
                            </div>
                            <div className="field">
                                <label>{t('label.LastName')}</label>
                                <input placeholder={t('label.LastName')} type="text"/>
                            </div>
                        </div>
                        <div className="field">
                            <label>{t('label.Email')}</label>
                            <input type="text" name="email" placeholder={t('label.Email')}/>
                        </div>
                        <div className="field">
                            <label>{t('label.Message')}</label>
                            <textarea rows="2" spellCheck="false" data-ms-editor="true"></textarea>
                        </div>
                        <div className="ui button" type="submit">{t('label.Submit')}</div>
                    </form>
                </div>

            </div>

        );
    }
}
Form = withTranslation('common')(Form);
export default Form;

