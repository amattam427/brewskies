import React from 'react';


function BreweryItem({id, name, street, city, state, phone}){

    return (
        <div className = "brewery-table">
            <table>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{street}</td>
                        <td>{city}</td>
                        <td>{state}</td>
                        <td>{phone}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}


export default BreweryItem;