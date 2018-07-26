import React,{Component} from 'react';




class TableRowAdmissions extends Component{
   
    passParams = (data) =>{
        this.props.triggerParent(data);
        }
    render(){
        
        return (this.props.data.map((data ,i) => {
            return (
                <tr key={i}>
                    <td> { data.id } </td>
                    <td> { data.registration_number } </td>
                    <td> { data.student_name } </td>
                    <td> { data.email } </td>
                    <td> { data.batch_id } </td>
                    <td> { data.total_fee } </td>
                    <td> { data.advance_payment } </td>
                    <td> { data.total_installments } </td>
                    <td> { data.created_at } </td>
                    <td> <div className="btn btn-success" onClick={()=>{this.passParams(data)}} >View Details</div></td>
                </tr>
            );
        }));    
    }
}
export default TableRowAdmissions;