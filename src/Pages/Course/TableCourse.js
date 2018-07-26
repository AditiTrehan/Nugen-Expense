import React,{ Component } from 'react';
import Helper from '../../components/Helper';
import TableRowCourse from './TableRowCourse';


class TableCourse extends Component {

    constructor(props){
        super(props);
        this.state={
            table_Data :[],
        }

    }
    componentWillMount = ()=>{
        this.fetchData();
    }
    fetchData = ()=> {
        let body={}
        let url = "courses";
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
                <TableRowCourse data = {this.state.table_Data} />
                </tbody>
            );
        }
    }


    render(){
        return (
        
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="header">
                        
                        <h4 className="title">Course Table</h4>
                        <p className="category">Complete detail of all Courses</p>
                    
                    </div>
                    <div className="content table-responsive table-full-width">
                        <table className="table table-hover table-striped">
                            <thead>
                                <tr>
                                    <th>Course ID</th>
                                    <th>Course Name</th>
                                    <th>Course Description</th>
                                    
                                </tr>
                            </thead>
                            
                                {
                                    this.condition()                                        
                                }
                                
                            
                        </table>
                    </div>
                </div>
            </div>
        </div>

    );
}
}

export default TableCourse;