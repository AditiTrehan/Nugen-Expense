import React, { Component } from "react";
import Helper from '../../components/Helper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { required } from '../../components/Validator';


class CourseForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            course_name: '',
            course_content: '',
        };
    }

    setCourseName = (e) => {
        this.setState({
            course_name: e.target.value
        });

    }
    setCourseDescription = (e) => {
        this.setState({
            course_content: e.target.value
        });

    }



    addCourse = () => {
        let body = JSON.stringify({
            course_name: this.state.course_name,
            course_content: this.state.course_content,
        });
        let url = "courses";
        let res = Helper(url, 'POST', body);

        res.then((res) => {
            if (res.msg === 1) {
                this.notify("New Course Added Successfully !");

            }
            else {
                this.notify("Error While Adding NewCourse !");

            }

        });
    }

    notify = (msg) => {
        toast(msg);
    }

    fetchCourse = () => {
        let body = JSON.stringify({
            paid_by: this.state.paid_by,
            description: this.state.description,
            amount: this.state.amount
        });
        let url = "expenditures";
        let res = Helper(url, 'GET', body);

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
            <div>
            <div className="row">


                <div className="col-md-12">
                    <div className="card">
                        <div className="header">
                            <h4 className="title">Add New Course</h4>
                        </div>
                        <div className="content">
                            <form>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Course Name</label>
                                            <input type="text" className="form-control" onKeyUp={this.setCourseName} placeholder="Course Name" validations={[required]} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Description</label>
                                            <input type="text" className="form-control" onKeyUp={this.setCourseDescription} placeholder="Description" validations={[required]} />
                                        </div>
                                    </div>
                                </div>
                                <button type="button" className="btn btn-info btn-fill pull-right" onClick={this.addCourse}>Add New Course</button>
                                <div className="clearfix" />
                            </form>
                            
                        </div>
                        
                    </div>
                    <ToastContainer autoClose={8000} />
                </div>

            </div>
            <div className="row">
                
            </div>
            </div>

        );
    }
}

export default CourseForm;