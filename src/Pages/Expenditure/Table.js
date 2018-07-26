import React,{ Component } from 'react';
import Helper from '../../components/Helper';
import Tablerow from './Tablerow';


class Table extends Component {

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
        let url = "expenditures";
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
                    <Tablerow data = {this.state.table_Data} />
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
                        
                        <h4 className="title">Expenditures Table</h4>
                        <p className="category">Complete details of all Expenditures</p>
                    
                    </div>
                    <div className="content table-responsive table-full-width">
                        <table className="table table-hover table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Paid By</th>
                                    <th>Description</th>
                                    <th>Amount</th>
                                    <th>Date/Time</th>
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

export default Table;