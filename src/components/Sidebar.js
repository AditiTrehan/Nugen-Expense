import React, {Component} from "react";
import {Link} from 'react-router-dom';

class Sidebar extends Component {
    render() {
        return (
            <div
                className="sidebar"
                data-color="purple"
                data-image="assets/img/sidebar-5.jpg">
                <div className="sidebar-wrapper">
                    <div className="logo">
                        <Link to="/dashboard" className="simple-text">
                            Nugen I.T Services
                        </Link>
                    </div>
                    <ul className="nav">
                        <li className = "nav-item-active" >
                            <Link to="/dashboard">
                                <i className="fa fa-pie-chart"/>
                                <p>Dashboard</p>
                            </Link>
                        </li>
                        <li className = "nav-item-active">
                            <Link to="/Admission">
                                <i className="fa fa-user"/>
                                <p>Student Admission</p>
                            </Link>
                        </li>
                        <li className = "nav-item-active">
                            <Link to="/Expenditure">
                                <i className="fa fa-inr"/>
                                <p>Expenditure</p>
                            </Link>
                        </li>
                        <li className = "nav-item-active">
                            <Link to="/dashboard" >
                                <i className="fa fa-desktop"/>
                                <p>Projects</p>
                            </Link>
                        </li>
                        <li className = "nav-item-active">
                            <Link to ="/addfee" >
                                <i className="fa fa-money"/>
                                <p>Installment Details</p>
                            </Link>
                        </li>
                        <li className = "nav-item-active">
                            <Link to ="/batchtiming" >
                                <i className="fa fa-users"/>
                                <p>Batch Details</p>
                            </Link>
                        </li>
                        <li className = "nav-item-active">
                            <Link to ="/courses">
                                <i className="fa fa-list"/>
                                <p>Course Details</p>
                            </Link>
                        </li>
                        <li className = "nav-item-active">
                            <Link to ="/dashboard">
                                <i className="fa fa-key"/>
                                <p>Savings</p>
                            </Link>
                        </li>
                       
                     
                    </ul>
                </div>
            </div>

        );
    }
}

export default Sidebar;