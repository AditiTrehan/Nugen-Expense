import React,{ Component } from 'react'; 
import Helper from '../../components/Helper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class TableRowInstallments extends Component {


    constructor(props){
        super(props);
        this.state={
            pending:'Pending',
            paid:'Paid',
            front_status:'',
        };
    }

    checkStatus = (x) => {
        if(x===0){
            return(
                this.state.pending
            );
        }
        else if(x===1){
            return(
                this.state.paid
            );
        } 
    };

    notify = (msg) => {
        toast(msg);
    }

    updateStatus = (data) => {
        let body = JSON.stringify({
            installment_id: data.installment_id,
        });
        let url = "updateInstallmentStatus"
        let res = Helper(url, 'POST', body);

        res.then((res) => {
            if (res.msg === 1) {
                this.props.triggerParent(data.installment_id);
                this.notify("Installment Paid! ")
            }
            else {
                alert("Error while Receiving Payment");

            }

        });
    };

    buttonCheck=(data)=>{
        if(data.status==0){
            return(
                <button className="btn btn-primary" onClick={()=>{
                                
                    this.updateStatus(data);
                }
                     }> Accept installment </button>
            );           
        }
        else{
            return(
                <button className="btn btn-success disabled"> PAID </button>
                
            );
        }
    }
    
    render(){
        return (    
            this
            .props
            .data
            .map((data) => {
                        
                return (
                    
                    <tbody>
                    <tr>
                        <td>
                            {data.installment_id}
                        </td>
                        <td>
                            {data.amount}
                        </td>
                        <td>
                            {data.installment_date}
                        </td>
                        <td >
                            {
                                this.checkStatus(data.status)
                            }
                        </td>
                        <td>
                            { this.buttonCheck(data)}
                        </td>
                        <ToastContainer autoClose={4000} />
                    </tr>
                    </tbody>
                    
                );
            })


);
    } 

}

export default TableRowInstallments;