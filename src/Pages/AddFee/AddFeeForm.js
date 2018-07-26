import React, {Component} from "react";
import Helper from '../../components/Helper';
import TableAddFee from "./TableAddFee";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { required } from '../../components/Validator';

class AddFeeForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            registration_number: '',
            table_Data:[],
            zero:0,
            test:'',
        };
    }

    notify = (msg) => {
        toast(msg);
    }

    condition = () =>{
        if(this.state.table_Data.length===0){
            return(
                <TableAddFee data={this.state.zero} triggerParent = {this.passingChild} />
            );
        }
        else{
            return(
            <TableAddFee data={this.state.table_Data} triggerParent = {this.passingChild} />
            );
        }
    }

    passingChild = ( childparameter ) => {
        let feeIndex = this.state.table_Data.findIndex((dt)=>{
            return parseInt(dt.installment_id) === parseInt(childparameter) 
        });
        this.state.table_Data[feeIndex].status = 1;
        
        // this.state.table_Data.map((data,i)=>{
            
        //     if(data.installment_id === childparameter){
        //         data.status=1;
        //     }
        // });
        this.setState({
            test:childparameter,
        });
        this.forceUpdate();
        
    }
    


    setRegistrationNo = (e) => {
        this.setState({registration_number: e.target.value});

    }

    addDetails = () => {
        let body = {};
        const url=`getStudentDetails/${this.state.registration_number}`;
        let res = Helper(url, 'GET', body);

        res.then((res) => {
            if(res.msg===1){
            this.setState({table_Data: res.content});
            this.notify("Student Details Received Successfully ! ")
            }
            else{
                this.notify(res.content);
            }
        })
    }
    render() {
        return (
            <div className="row">

                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="header">
                                <h4 className="title">Search Student Details</h4>
                            </div>
                            <div className="content">
                                <div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Registration No</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    onKeyUp={this.setRegistrationNo}
                                                    placeholder="Enter Registration Number"
                                                    validations={[required]} />
                                                    
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        className="btn btn-info btn-fill pull-right"
                                        onClick={this.addDetails}>Search</button>
                                    <div className="clearfix"/>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
                {this.condition()}
                <ToastContainer autoClose={4000} />

            </div>

        );
    }
}

export default AddFeeForm;