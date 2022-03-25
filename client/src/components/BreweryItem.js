import React from 'react';


function BreweryItem({id, name, street, city, state, phone}){

    return (
        <div className = "brewery-table">
            <table>
                {/* <thead>
                    <tr>
                        <th>Brewery</th>
                        <th>Street</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Phone Number</th>
                    </tr>
                </thead> */}
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