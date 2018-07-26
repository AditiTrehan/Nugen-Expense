import React, { Component } from "react";
import Helper from '../../components/Helper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TableSearchBatch from "./TableSearchBatch";
import { required } from '../../components/Validator';


class BatchSearchform extends Component{

    constructor(props){
        super(props);
        this.state={
            table_Data:[],
            batch_name:'',
            zero:0,
        };
    }

    notify = (msg) => {
        toast(msg);
    }

    setBatchName = (e) => {
        this.setState({
            batch_name : e.target.value,
        });
    }

    addDetails = () => {
        let body = {};
        const url=`getBatchesByName/${this.state.batch_name}`;
        let res = Helper(url, 'GET', body);

        res.then((res) => {
            if(res.msg===1){
            this.setState({table_Data: res});
            this.notify("successfully Receieved User Details ")
            }
            else{
                this.notify(res.content);
            }
        })
    }

    condition = () =>{
        if(this.state.table_Data.length===0){
            return(
                <TableSearchBatch data={this.state.zero}  />
            );
        }
        else{
            return(
            <TableSearchBatch data={this.state.table_Data}  />
            );
        }
    }
    render(){
        return(
            <div>
            <div className="row">


                <div className="col-md-12">
                    <div className="card">
                        <div className="header">
                            <h4 className="title">Batch Details</h4>
                        </div>
                        <div className="content">
                            <form>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Batch Name</label>
                                            <input type="text" className="form-control" onKeyUp={this.setBatchName} placeholder="Batch Name" validations={[required]} />
                                        </div>
                                    </div>
                                </div>
                                <button type="button" className="btn btn-info btn-fill pull-right" onClick = {this.addDetails}  >Search</button>
                                <div className="clearfix" />
                            </form>
                            
                        </div>
                        
                    </div>
                    <ToastContainer autoClose={8000} />
                </div>

            </div>
            { this.condition()}
            <ToastContainer autoClose={8000} />
            </div>
        );
    }
}

export default BatchSearchform;