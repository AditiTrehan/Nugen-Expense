import React from "react";

const Batchrow = (props) => {
    return (
            props.data.map((data ,i) => {
        return (
            <tr key={i}>
                <td>
                    {data.id}
                </td>
                <td>
                    {data.batch_name}
                </td>
                <td>
                    {data.courses.map((course,i)=>{
                        return(
                            <span key={i} > {course.course_name} </span>
                        );
                    })}
                </td>
                <td>
                    {data.batch_timings}
                </td>
                <td>
                    {data.total_students}
                </td>

                
            </tr>
        );
    })
    );

}
export default Batchrow;