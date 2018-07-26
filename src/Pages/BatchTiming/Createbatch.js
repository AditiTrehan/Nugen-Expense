import React, { Component } from "react";
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import AutoSuggest from "../../components/AutoSuggest";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Helper from '../../components/Helper';
import { required } from '../../components/Validator';


class Createbatch extends Component{
    constructor(props){
        super(props);
        this.state={
            total_students:0,
            batch_name:'',
            batch_timing:'',
            course_ids:[],
            course_names:[],
        }
    }
    notify = (msg) => {
        toast(msg);
    }

    setTotalStudents = (e) => {
        this.setState({
            total_students: e.target.value
        });
    }

    setbatch_name = (e) => {
        this.setState({
            batch_name: e.target.value
        });
    }

    setbatch_timing = (e) => {
        this.setState({
            batch_timing: e.target.value
        });
    }

    createBatch=()=>{
        let body = JSON.stringify({
            total_students:this.state.total_students,
            batch_name:this.state.batch_name,
            batch_timings:this.state.batch_timing,
            course_ids:this.state.course_ids
        });
        let url = "batches";
        let res = Helper(url, 'POST', body);

        res.then((res) => {
            if (res.msg === 1) {
                this.notify("New Batch Created Successfully !")

            }
            else {
                this.notify("Error While Creating New Batch !")

            }

        });
    }

    childParams = (param_course_ids,param_course_name)=>{
        
        this.setState({
            course_ids:param_course_ids,
            course_names:param_course_name,
        })
    }
    render(){
        return(
            <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="header">
                        <h4 className="title">Create Batch</h4>
                    </div>

                    <div className="content">
                        <Form>
                            <div className="row-12">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Total Students</label>
                                        <Input type="text" className="form-control" placeholder="Total Students" 
                                         onKeyUp={this.setTotalStudents} validations={[required]} />
                                    </div>
                                </div>
                            </div>
                            <div className="row-12">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Batch Name</label>
                                        <Input type="text" className="form-control" placeholder="Batch Name" 
                                         onKeyUp={this.setbatch_name} validations={[required]}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row-12">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Course Name</label>
                                        <AutoSuggest triggerparent = {this.childParams} validations={[required]} />
                                    </div>
                                </div>
                            </div>
                            {/* <div className="row-12">
                                <div className="col-md-12">
                                    {
                                        this.state.course_names.map((name,i)=>{
                                            return(
                                                <span key = {i} className = "badge badge-warning" >{name}</span>
                                            )
                                        })
                                    }        
                                </div>
                            </div> */}
                            <div className="row-12">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label> Batch Timing</label>
                                        <Input type="text" className="form-control" placeholder="Timing" 
                                         onKeyUp={this.setbatch_timing} validations={[required]}/>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="btn btn-success btn-fill pull-right" onClick={this.createBatch}>Create</button>
                            <div className="clearfix" />
                        </Form>
                    </div>
                    <ToastContainer autoClose={4000} />    
                </div>
            </div>
        </div>
        );
    }
}

export default Createbatch;