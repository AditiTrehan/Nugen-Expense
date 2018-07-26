import React, {Component} from 'react';
import TableRowAddFee from './TableRowAddFee';
import TableRowInstallments from './TableRowInstallments';

class TableAddFee extends Component {

    

    passingStudentDetails = () => {
        if(this.props.data===0){
            return("");
        }
        else{
            return <TableRowAddFee data={this.props.data[0]} />;
    }

    }

    

    passingInstallments = () => {
        if(this.props.data===0){
            return(<tbody></tbody>);
        }
        else{
            return <TableRowInstallments data={this.props.data} triggerParent={this.props.triggerParent}/>
    }

    }

    render() {
        return (
            <div>
                <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="header">
                            <h4 className="title">Student Details</h4>
                            <p className="category">Complete details of student</p>
                        </div>
                        
                        <div className="content table-responsive table-full-width">
                            {this.passingStudentDetails()}        
                    </div>
                    </div>
                </div>
                
            </div>
                
                <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="header">
                        <h4 className="title">Installment Details</h4>
                        <p className="category">Complete details of all Installment</p>
                    </div>
                    <div className="content table-responsive table-full-width">
                        <table className="table table-hover table-striped">
                            <thead>
                                <tr>
                                    <th>Installment ID</th>
                                    <th>Installment Amount</th>
                                    <th>Installment due Date</th>
                                    <th>Installment status</th>
                                    <th>Receive Payment</th>
                                    
                                </tr>
                            </thead>
                            
                                {
                                    this.passingInstallments()
                                }
                                
                            
                        </table>
                    </div>
                </div>
            </div>

        </div>
            </div>

        );
    }
}

export default TableAddFee;