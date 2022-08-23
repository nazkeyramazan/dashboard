import React from 'react'
import TableRow from "@mui/material/TableRow";
import {StyledTableCell, StyledTableBody} from "./Table";

export default function MainTableBody({rowData}){

    return(
        <StyledTableBody>
            {rowData.map((row, index) => (
                <TableRow key={index}>
                    <StyledTableCell parentId={row.parentID} component="th" scope="row">{row.filiale}</StyledTableCell>
                    <StyledTableCell align="center">{row.cbo}</StyledTableCell>
                    <StyledTableCell align="center">{row.served}</StyledTableCell>
                    <StyledTableCell align="center">{row.serviceAvgTime}</StyledTableCell>
                    {row.waitAvgTime<15?
                        <StyledTableCell data={row.waitAvgTime} align="center">{row.waitAvgTime}</StyledTableCell>:
                        <StyledTableCell align="center" style={{backgroundColor: 'red'}}>{row.waitAvgTime}</StyledTableCell>
                    }
                    <StyledTableCell align="center">{row.queueCnt}</StyledTableCell>
                </TableRow>
            ))}
        </StyledTableBody>
    )
}