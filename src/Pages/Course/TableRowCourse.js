import React from 'react';

const TableRowCourse = (props) => {
    return (props.data.map((data ,i) => {
        return (
            <tr key={i}>
                <td>
                    {data.id}
                </td>
                <td>
                    {data.course_name}
                </td>
                <td>
                    {data.course_content}
                </td>
                
            </tr>
        );
    }));

}

export default TableRowCourse;