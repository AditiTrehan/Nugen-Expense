import React,{ Component } from 'react';
import Helper from '../../components/Helper';
import TableRowAdmissions from './TableRowAdmissions';
import Modal from 'react-responsive-modal';
import StudentDetails from './StudentDetails';

class TableAdmissions extends Component {

    constructor(props){
        super(props);
        this.state={
            open:false,
            table_Data :[],
            child_data:[],
        }

    }


    onOpenModal = () => {
        this.setState({
            open:true,
        })
    }

    onCloseModal = () => {
        this.setState({
            open:false,
        })
    }

    componentWillMount = ()=>{
        this.fetchData();
    }


    fetchData = ()=> {
        let body={}
        let url = "admissions"
        let res = Helper(url,'GET',body);

        res.then((res) => {
            this.setState({
                table_Data:res
            });
        })
    }

    ChildData = (childparameters) =>{
        this.setState({
            child_data:childparameters,
        });
        this.onOpenModal();
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
                <TableRowAdmissions data = {this.state.table_Data} triggerParent={this.ChildData} />
                </tbody>
            );
        }
    }


    render(){
        const{ open } = this.state;
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="header">
                        <h4 className="title">Admissions Table</h4>
                        <p className="category">Complete Details of all Admissions</p>
                    </div>
                    <div className="content table-responsive table-full-width">
                        <table className="table table-hover table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Registration Number</th>
                                    <th>Name</th>
                                    <th>Email Id</th>
                                    <th>batch Id</th>
                                    <th>Total Fee</th>
                                    <th>Advance Payment</th>
                                    <th>Total Installments</th>
                                    <th>Date/Time</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            
                                {
                                    this.condition()
                                }
                                
                        </table>
                    </div>
                </div>
            </div>
            <Modal open={open} onClose={this.onCloseModal} center >
                        <StudentDetails data={this.state.child_data} />
                    </Modal>
        </div>

    );
}
}

export default TableAdmissions;