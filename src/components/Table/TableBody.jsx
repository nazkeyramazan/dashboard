import React from 'react'
import TableRow from "@mui/material/TableRow";
import {StyledTableCell, StyledTableBody} from "./Table";


const colors = ['#c4c4c4', '#009999', '#ffad40', '#ec6aa1', 'green']


export default function MainTableBody({rowData}){

    return(
        <StyledTableBody>
            {rowData.map((row, index) => (
                <TableRow key={index}>

                    <StyledTableCell style={{backgroundColor: `${colors[row.parentID]}`}} component="th" scope="row">{row.filiale}</StyledTableCell>

                    {row.cbo==='Центральный'?
                        <StyledTableCell style={{backgroundColor: `${colors[row.parentID]}`}}>Центр.</StyledTableCell>:
                        <StyledTableCell style={{backgroundColor: `${colors[row.parentID]}`}}>{row.cbo}</StyledTableCell>
                    }

                    <StyledTableCell style={{backgroundColor: `${colors[row.parentID]}`}} >{row.served}</StyledTableCell>
                    <StyledTableCell style={{backgroundColor: `${colors[row.parentID]}`}} >{row.serviceAvgTime}</StyledTableCell>

                    {row.waitAvgTime<15?
                        <StyledTableCell style={{backgroundColor: `${colors[row.parentID]}`}}>{row.waitAvgTime}</StyledTableCell>:
                        <StyledTableCell style={{backgroundColor: 'red'}}>{row.waitAvgTime}</StyledTableCell>
                    }
                    <StyledTableCell style={{backgroundColor: `${colors[row.parentID]}`}}>{row.queueCnt}</StyledTableCell>
                </TableRow>
            ))}
        </StyledTableBody>
    )
}