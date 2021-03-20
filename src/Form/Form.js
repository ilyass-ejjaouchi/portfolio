import React , {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import './Form.css'

class Form extends Component {

    render() {
        return (
            <div className="ui centered grid formulaire">
                <div className="six wide tablet eight wide computer column">
                    <h1>Contact</h1><hr/>
                    <form className="ui form">
                        <div className="two fields">
                            <div className="field">
                                <label>First Name</label>
                                <input placeholder="First Name" type="text"/>
                            </div>
                            <div className="field">
                                <label>Last Name</label>
                                <input placeholder="Last Name" type="text"/>
                            </div>
                        </div>
                        <div className="field">
                            <label>Email</label>
                            <input type="text" name="email" placeholder="email"/>
                        </div>
                        <div className="field">
                            <label>message</label>
                            <textarea rows="2" spellCheck="false" data-ms-editor="true"></textarea>
                        </div>
                        <div className="ui button" type="submit">Submit</div>
                    </form>
                </div>
            </div>

        );
    }
}
export default Form;

