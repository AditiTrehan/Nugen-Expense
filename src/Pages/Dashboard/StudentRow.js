import React from 'react';

const StudentRow = (props) => {
    const { id , student_name , course_name , created_at} = props;
    return (
        <tr >
            <td> { id } </td>
            <td> { student_name } </td>
            <td> { course_name } </td>
            <td> { created_at} </td>
        </tr>
    );

}

export default StudentRow;