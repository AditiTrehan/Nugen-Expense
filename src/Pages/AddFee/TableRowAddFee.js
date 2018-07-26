import React from 'react';
import './AddFee.css';

const TableRowAddFee = (props) => {
    const {
        id,
        student_name,
        email,
        mobile_number,
        school_college,
        stream,
        father_mother_name,
        parent_mobile_number,
        permanent_address,
        total_fee,
        advance_payment,
        total_installments,
        referred_by,
        dob,
        course_name,
        course_content,
    } = props.data;
    return (
        <div className="row">
        <div className="col-xs-6">
            <table className="table table-hover table-striped">
            <thead>
                    <tr className="testing" >
                        <th>Id</th>
                        <td>{id}</td>
                    </tr>
                    <tr className="testing" >
                        <th>Student Name</th>
                        <td>{student_name}</td>
                    </tr>
                    <tr className="testing" >
                        <th>Email</th>
                        <td>{email}</td>
                    </tr>
                    <tr className="testing" >
                        <th>Date of Birth</th>
                        <td>{dob}</td>
                    </tr>
                    <tr className="testing" >
                        <th>Mobile number</th>
                        <td>{mobile_number}</td>
                    </tr>
                    <tr className="testing" >
                        <th>School/College</th>
                        <td>{school_college}</td>
                    </tr>
                    <tr className="testing" >
                        <th>Stream</th>
                        <td>{stream}</td>
                    </tr>
                    <tr className="testing" >
                        <th>Father/Mother Name</th>
                        <td>{father_mother_name}</td>
                    </tr>

                </thead>

            </table>
            {/* </div> */}
        </div>
        
        <div className="col-xs-6">
        {/* <div className="card"> */}
            <table className="table table-hover table-striped">
            <thead>
                    
                    <tr className="testing" >
                        <th>Father/Mother Number</th>
                        <td>{parent_mobile_number}</td>
                    </tr>
                    <tr className="testing" >
                        <th>Permanent Address</th>
                        <td>{permanent_address}</td>
                    </tr>
                    <tr className="testing" >
                        <th>Total Fee</th>
                        <td>{total_fee}</td>
                    </tr>
                    <tr className="testing" >
                        <th>Advance Payment</th>
                        <td>{advance_payment}</td>
                    </tr>
                    <tr className="testing" >
                        <th>Total Installment</th>
                        <td>{total_installments}</td>
                    </tr>
                    <tr className="testing" >
                        <th>Referred by</th>
                        <td>{referred_by}</td>
                    </tr>
                    <tr className="testing" >
                        <th>Course Name</th>
                        <td>{course_name}</td>
                    </tr>
                    <tr className="testing" >
                        <th>Course content</th>
                        <td>{course_content}</td>
                        
                    </tr>

                </thead>

            </table>
            {/* </div> */}
        </div>
        </div>

            );

}

export default TableRowAddFee ;