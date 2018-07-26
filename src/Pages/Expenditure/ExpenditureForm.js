import React, { Component } from "react";
import Helper from '../../components/Helper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { required } from '../../components/Validator';


class ExpenditureForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            paid_by: '',
            description: '',
            amount: '',

        };
    }

    notify = (msg) => {
        toast(msg);
    }

    setPaid_by = (e) => {
        this.setState({
            paid_by: e.target.value
        });

    }
    setDescription = (e) => {
        this.setState({
            description: e.target.value
        });

    }
    setAmount = (e) => {
        this.setState({
            amount: e.target.value
        });

    }



    addDetails = () => {
        let body = JSON.stringify({
            paid_by: this.state.paid_by,
            description: this.state.description,
            amount: this.state.amount
        });
        let url ="expenditures";
        let res = Helper(url, 'POST', body);

        res.then((res) => {
            if (res.msg === 1) {
                this.notify("Entry Added Successfully")

            }
            else {
                this.notify("Error While Adding New Entry")

            }


        });
    }
    render() {
        return (
            <div className="row">


                <div className="col-md-12">
                    <div className="card">
                        <div className="header">
                            <h4 className="title">Expenditure Details</h4>
                        </div>
                        <div className="content">
                            <form>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Paid By</label>
                                            <input type="text" className="form-control" onKeyUp={this.setPaid_by} placeholder="Paid By" validations={[required]} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Description</label>
                                            <input type="text" className="form-control" onKeyUp={this.setDescription} placeholder="Description" validations={[required]} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Amount</label>
                                            <input type="text" className="form-control" onKeyUp={this.setAmount} placeholder="Amount" validations={[required]} />
                                        </div>
                                    </div>
                                </div>
                                <button type="button" className="btn btn-success btn-fill pull-right" onClick={this.addDetails}>Add Details</button>
                                <div className="clearfix" />
                            </form>
                            
                        </div>
                        <ToastContainer autoClose={8000} />                        
                    </div>
                  
                </div>

            </div>

        );
    }
}

export default ExpenditureForm;