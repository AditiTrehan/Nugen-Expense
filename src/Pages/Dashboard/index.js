import React, { Component } from "react";
import Sidebar from '../../components/Sidebar';
import Navbar from "../../components/Navbar";
import cookie from 'react-cookies';
import Cards from "./Cards";
import Students from './Students';
import Bigcard from './Bigcard';
import 'whatwg-fetch';
import Helper from '../../components/Helper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Dashboard extends Component {

    
    notify = (msg) => toast(msg);
    constructor(props) {
        super(props);
        if (cookie.load('token') === undefined) {
            this.props.history.push("/");
        }
        this.state = {
            loader: true,
            contents: [],
            admissions: '',
            projects: '',
            expenditures: '',
            income: ''
        };    
    }
    componentWillMount = () => {
        
        this.fetchData();

    }
    componentDidMount = () =>{
        this.toggleLoader();

    }

    fetchData = () => {
        let body = {}
        let url = "dashboardDetails";
        let res = Helper(url, 'GET', body);

        res.then((res) => {
            this.setState({
                contents: res.contents
            });
        })
    }

    toggleLoader = () => {
    
        this.setState({
            loader: !this.state.loader
        });
    }

    


    render() {
        
        return (
            <div className="wrapper">
               
                <Sidebar />
                <div className="main-panel">
                    <Navbar history={this.props.history} />


                    <div className={this.state.loader === true ? 'loader' : 'hide-loader'}>
                    </div>

                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <Cards background="danger" number={this.state.contents.admissions} heading="ADMISSIONS" icon="user" link="/Admission" />
                                <Cards background="success" number={this.state.contents.projects} heading="PROJECTS" icon="desktop" link="/Dashboard" />
                                <Cards background="warning" number={this.state.contents.expenditures} heading="EXPENDITURES" icon="inr" link="/Expenditure" />
                                <Cards background="primary" number="Savings" heading="SAVINGS" icon="key" link="/Dashboard" />
                            </div>
                            <div className="row">
                                <Bigcard background="primary" number="COURSE DETAILS" heading="Add new course" icon="list" link="/courses" />
                                <Bigcard background="danger" number="INSTALLMENT DETAILS" heading="Student details & Installments" icon="money" link="/addfee" />
                            </div>
                        </div>


                        <Students />
                    </div>
                </div>
                <ToastContainer/>
            </div>
        );
    }
}

export default Dashboard;