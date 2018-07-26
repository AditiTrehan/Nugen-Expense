import React, { Component } from "react";
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import AdmissionForm from './AdmissionForm';
import TableAdmissions from './TableAdmissions';
import './loader.css';
import 'whatwg-fetch';
import cookie from 'react-cookies';
import Modal from 'react-responsive-modal';


class Admission extends Component {

    constructor(props) {
        super(props);
        if(cookie.load('token')===undefined){
            this.props.history.push("/");
        }
        this.state =
            {
                loader: true,
                open:false
            };
    }

    componentDidMount = () =>{
        this.toggleLoader();
    }

    toggleLoader = () => {
        this.setState({
            loader: !this.state.loader
        });
    }

    onOpenModal = () => {
        this.setState({ open: true });
      };
     
      onCloseModal = () => {
        this.setState({ open: false });
      };

      

    render() {
        const {open}=this.state;
        return (
            <div className="wrapper">



                <Sidebar />
                <div className="main-panel">
                    <Navbar history={this.props.history} />
                    <div className="content">
                        <div className="container-fluid">
                            <div className={this.state.loader === true ? 'loader': 'hide-loader'}>
                            </div>

                            <ul className="nav navbar-nav navbar-right">
                            <li>
                            <button className="btn btn-success" style={margin} onClick={this.onOpenModal}>New Admission</button>
                            </li>
                            </ul>
                            
                    
                            <Modal open={open} onClose={this.onCloseModal} >
                            <div className="frame">
                            <div className="scroll">
                            <AdmissionForm />
                            </div>
                            </div>
                            </Modal>

                            
                            <TableAdmissions />

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

const margin ={
    marginBottom:'20%'
}

export default Admission;