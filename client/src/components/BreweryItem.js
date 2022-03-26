import React from 'react';
// import {Link} from "react-router-dom"
import { TableContainer, TableRow } from '@mui/material';
import { Table } from '@mui/material';
import { TableCell } from '@mui/material';
import { TableBody } from '@mui/material';
import { Paper } from '@mui/material';


function BreweryItem({id, name, street, city, state, phone}){

    return (
        <div className = "brewery-table">
            <TableContainer component={Paper}>
                <Table  aria-label="simple table">
                    <TableBody>
                        <TableRow   >
                            <TableCell >{name}</TableCell>
                            <TableCell >{street}</TableCell>
                            <TableCell >{city}</TableCell>
                            <TableCell >{state}</TableCell>
                            <TableCell >{phone}</TableCell>
                        </TableRow>
                    </TableBody>


                </Table>
            </TableContainer>
            {/* <table>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{street}</td>
                        <td>{city}</td>
                        <td>{state}</td>
                        <td>{phone}</td>
                    </tr>
                </tbody>
            </table> */}

        </div>
    )
}


export default BreweryItem;