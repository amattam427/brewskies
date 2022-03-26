import React from 'react';
import { TableContainer } from '@mui/material';
import { Table } from '@mui/material';
import { TableRow } from '@mui/material';
import { TableCell } from '@mui/material';
import { TableHead } from '@mui/material';
import BreweryItem from './BreweryItem';


function BreweryList({brewery}){

    return (
        <div>
            <h1>Find a Brewery</h1>
            <div className = "table-header">
                <TableContainer>
                    <Table sx={{minWidth: 500}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell >Brewery</TableCell>
                                <TableCell >Street</TableCell>
                                <TableCell >City</TableCell>
                                <TableCell >State</TableCell>
                                <TableCell >Phone Number</TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            {/* <table>
                <thead>
                        <tr>
                            <th>Brewery</th>
                            <th>Street</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                </table> */}

            </div>
            {brewery.map((brew)=>{
                return (
                    <BreweryItem
                        key = {brew.id}
                        id = {brew.id}
                        name = {brew.name}
                        street = {brew.street}
                        city = {brew.city}
                        state = {brew.state}
                        phone = {brew.phone_number}
                        />
                )
            })}

        </div>
    )
}


export default BreweryList;