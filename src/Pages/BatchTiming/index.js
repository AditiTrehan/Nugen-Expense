import React, { Component } from "react";
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import BatchSearchform from './BatchSearchform';
import Modal from 'react-responsive-modal';
import cookie from 'react-cookies';
import Createbatch from './Createbatch';
import Batchtable from './Batchtable';

class BatchTiming extends Component {


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
    componentDidMount=()=>{
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
                                    <button className="btn btn-success" style={margin} onClick={this.onOpenModal}>Create Batch</button>
                                </li>
                            </ul>
                            <Modal open={open}  onClose={this.onCloseModal} >
                            <Createbatch />
                            </Modal>
                            <BatchSearchform />
                            <Batchtable/>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}


const margin={
    marginBottom:'20%'
}

export default BatchTiming;