import React , { Component  } from "react";
import Batchrow from './Batchrow';
import Helper from '../../components/Helper';

class Batchtable extends Component{

    constructor(props){
        super(props);
        this.state={
            table_Data:[],
        };
    }


    componentWillMount = ()=>{
        this.fetchData();
    }
    fetchData = ()=> {
        let body={}
        let url = "batches";
        let res = Helper(url,'GET',body);

        res.then((res) => {
            this.setState({
                table_Data:res
            });
        })
    }

    condition = () => {
        if(this.state.table_Data.length===0){
            return(
                <tbody>

                </tbody>
            );
        }
        else{
            return(
                <tbody>
                <Batchrow data = {this.state.table_Data} />
                </tbody>
            );
        }
    }

    render(){
        return(
            <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="header">
                        <h4 className="title">Total Batches</h4>
                        <p className="category">Complete Details of all batches of different courses</p>
                    </div>
                    <div className="content table-responsive table-full-width">
                        <table className="table table-hover table-striped">
                            <thead>
                                <tr>
                                    <th>Batch ID</th>
                                    <th>Batch Name</th>
                                    <th>Courses Covered</th>
                                    <th>Batch Timing</th>
                                    <th>No. of Students</th>
                                </tr>
                            </thead>
                            { this.condition() }
                        </table>
                    </div>
                </div>
            </div>
        
        </div>
        );
    }
}
export default Batchtable;