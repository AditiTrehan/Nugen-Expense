import React, { Component } from "react";
import cookie from "react-cookies";

class Navbar extends Component {



    logout = () => {
        cookie.remove('token');
        this.props.history.push("/");
    }

    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button
                            type="button"
                            className="navbar-toggle"
                            data-toggle="collapse"
                            data-target="#navigation-example-2">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <a className="navbar-brand">Dashboard</a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-left">
                            
                            
                            
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                           
                   
                            <li>
                                    <button className="btn btn-success"onClick={this.logout}>Log Out</button>
                            </li>
                            <li className="separator hidden-lg"/>
                        </ul>
                    </div>
                    
                    
                    
                </div>
            </nav>

        );
    }
}

export default Navbar;