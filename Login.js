import React, { Component } from "react";
import { Row, FormGroup, FormControl, ControlLabel, Button, HelpBlock } from 'react-bootstrap';
import './login.css';
import { isEmail, isEmpty, isLength, isContainWhiteSpace } from 'shared/validator';

class Login extends Component {

    constructor(props) {
       
        super(props)
        
        this.state = {
            formData: {}, // Contains login form data
            errors: {}, // Contains login field errors
            formSubmitted: false, // Indicates submit status of login form
            loading: false // Indicates in progress state of login form
        }
    }

    handleInputChange = (event) => {
       
        const target = event.target;
        const value = target.value;
        const name = target.name;

        let { formData } = this.state;
        formData[name] = value;

        this.setState({
            formData: formData
        });
    }

    validateLoginForm = (e) => {

        let errors = {};
        const { formData } = this.state;

        if (isEmpty(formData.email)) {
            errors.email = "Email can't be blank";
        } else if (!isEmail(formData.email)) {
            errors.email = "Please enter a valid email";
        }

        if (isEmpty(formData.password)) {
            errors.password = "Password can't be blank";
        }  else if (isContainWhiteSpace(formData.password)) {
            errors.password = "Password should not contain white spaces";
        } else if (!isLength(formData.password, { gte: 6, lte: 16, trim: true })) {
            errors.password = "Password's length must between 6 to 16";
        }

        if (isEmpty(errors)) {
            return true;
        } else {
            return errors;
        }
    }

    login = (e) => {

        e.preventDefault();

        let errors = this.validateLoginForm();

        if(errors === true){
            alert("You are successfully signed in...");
            window.location.reload()
        } else {
            this.setState({
                errors: errors,
                formSubmitted: true
            });
        }
    }

    render() {

        const { errors, formSubmitted } = this.state;

        return (
           
            <div className="Login">
              
                <Row>
                <div className="heading"><h2>Get back to your account</h2></div>
                    <form onSubmit={this.login}>
                        <FormGroup controlId="email" validationState={ formSubmitted ? (errors.email ? 'error' : 'success') : null }>
                            <ControlLabel>Email</ControlLabel>
                            <FormControl type="text" name="email" placeholder="Enter your email id" onChange={this.handleInputChange} />
                          
                        </FormGroup>
                        <FormGroup controlId="password" validationState={ formSubmitted ? (errors.password ? 'error' : 'success') : null }>
                            <ControlLabel>Password</ControlLabel>
                            <FormControl type="password" name="password" placeholder=" Please enter your password" onChange={this.handleInputChange} />
                       
                        
                        </FormGroup>
                        <ControlLabel>Forget your password?</ControlLabel>
                        <Button type="submit" bsStyle="primary" class="button" style={{boxSizing:"border-box",borderRadius:10,marginLeft:120,paddingLeft:20,marginBottom:20,paddingRight:20,paddingTop:5,marginTop:10,paddingBottom:5,color:"black",backgroundColor:'#99f0eb'}}>Log-In</Button>
                    </form>
                </Row>
            </div>
        )
    }
}

export default Login;