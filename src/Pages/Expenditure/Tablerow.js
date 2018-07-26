import React from 'react';

const Tablerow = (props) => {
    return (props.data.map((data ,i) => {
        return (
            <tr key={i}>
                <td> { data.id } </td>
                <td> { data.paid_by } </td>
                <td> { data.description } </td>
                <td> { data.amount } </td>
                <td> { data.created_at } </td>
            </tr>
        );
    }));

}

export default Tablerow;
