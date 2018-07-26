import React, { Component } from "react";
import StudentRow from "./StudentRow";
import Helper from '../../components/Helper';

class Students extends Component{
    constructor(props){
        super(props);
        this.state={
            student_Data:[],
        }

    }

    componentWillMount = ()=>{
        this.fetchData();
    }
    fetchData = ()=> {
        let body={}
        let url = "admissions";
        let res = Helper(url,'GET',body);

        res.then((res) => {
            this.setState({
                student_Data:res
            });
        })
    }

   
    render(){
        return(
            <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="header">
                        
                        <h4 className="title">Registered Students</h4>
                    
                    
                    </div>
                    <div className="content table-responsive table-full-width">
                        <table className="table table-hover table-striped">
                            <thead>
                                <tr>
                                    <th>Registration ID</th>
                                    <th>Name</th>
                                    <th>Course</th>
                                    <th>Date/Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.student_Data.map((data,i)=>{
                                            return(
                                            <StudentRow {...data} key = {i} />
                                                );
                                            
                                    
                                    })
                                }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Students;