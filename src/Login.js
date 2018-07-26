import React, { Component } from "react";
import './Login.css';
import cookie from 'react-cookies';
import Helper from './components/Helper';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import { required, email } from './components/Validator';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'whatwg-fetch';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loader: true
        };
    }

    componentDidMount = ()=>{
        this.toggleLoader();
    }

    notify = (msg) => {
        toast(msg);
    }

    toggleLoader = () => {
        this.setState({
            loader: !this.state.loader
        });
    }





    setEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    }
    setPassword = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    loginUser = () => {
        this.testing();
        let body = JSON.stringify({
            email: this.state.email,
            password: this.state.password
        });
        let url = "login";
        let res = Helper(url, 'POST', body);

        res.then((res) => {
            if (res.access_token !== undefined) {
                cookie.save('token', res.access_token);
                this.props.history.push('/dashboard');
                this.toggleLoader();
            }
            else {
                this.notify("Wrong Username/Password")
            }
        });
    }

    testing =() =>{
        return(
            <div className={this.state.loader === true ? 'loader' : 'hide-loader'}>

                                </div>

        );

    }


    render() {
        return (

            <div className="container">



                <div className="row">
                    <div className="col-sm-6 col-md-4 col-md-offset-4">
                        <h1 className="text-center login-title">Nugen IT Services</h1>
                        <div className="account-wall">
                            <img
                                className="profile-img"
                                src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                                alt="" />
                            <Form className="form-signin">
                                <Input
                                    type="text"
                                    className="form-control"
                                    placeholder="Email"
                                    autoFocus
                                    onChange={this.setEmail}
                                    validations={[required, email]} />
                                <Input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    onChange={this.setPassword}
                                    validations={[required]} />
                                <button className="btn btn-lg btn-success btn-block" type="button" onClick={this.loginUser} >
                                    Login</button>

                                
                            </Form>
                        </div>
                        <ToastContainer autoClose={8000} />
                    </div>
                </div>

            </div>

        );
    }
}

export default Login;