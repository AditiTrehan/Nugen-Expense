import React, {Component} from 'react';
// import './AddFee.css';
import Batchrow from './Batchrow';

class TableSearchBatch extends Component {


    passingBatchDetails = () => {
        if(this.props.data===0){
            return(<tbody></tbody>);
        }
        else{
        return(
            <tbody>
                <Batchrow data={this.props.data.content.batches} />
            </tbody>
        );
    }

    }


    render() {
        return (
            
                <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="header">
                            <h4 className="title">Search Results</h4>
                            <p className="category">Complete details of Searched Batches</p>
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
                            {this.passingBatchDetails()}
                        </table>
                                    
                    </div>
                    </div>
                </div>
                
            </div>

        );
    }
}

export default TableSearchBatch;