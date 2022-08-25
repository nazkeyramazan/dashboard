import React from 'react'
import TableRow from "@mui/material/TableRow";
import {StyledTableCell, StyledTableBody} from "./Table";


const colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66',
    '#66994D', '#B366CC', '#4D8000',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

export default function MainTableBody({rowData}){

    return(
        <StyledTableBody>
            {rowData.map((row, index) => (
                <TableRow key={index}>

                    {row.filiale.length>11 ?
                        <StyledTableCell style={{backgroundColor: `${colors[row.parentID]}`}} component="th" scope="row">
                            {row.filiale.substring(0,11)}.
                        </StyledTableCell>    :
                        <StyledTableCell style={{backgroundColor: `${colors[row.parentID]}`}} component="th" scope="row">{row.filiale}</StyledTableCell>

                    }

                    {row.cbo.length>5 ?
                        <StyledTableCell onClick={()=>console.log(row.parentID)} style={{backgroundColor: `${colors[row.parentID]}`}}>{row.cbo.substring(0,5)}.</StyledTableCell>:
                        <StyledTableCell onClick={()=>console.log(row.parentID)} style={{backgroundColor: `${colors[row.parentID]}`}}>{row.cbo}</StyledTableCell>
                    }

                    <StyledTableCell style={{backgroundColor: `${colors[row.parentID]}`}} >{row.served}</StyledTableCell>
                    <StyledTableCell style={{backgroundColor: `${colors[row.parentID]}`}} >{row.serviceAvgTime}</StyledTableCell>

                    {row.waitAvgTime<15?
                        <StyledTableCell style={{backgroundColor: `${colors[row.parentID]}`}}>{row.waitAvgTime}</StyledTableCell>:
                        <StyledTableCell style={{backgroundColor: '#ff3500'}}>{row.waitAvgTime}</StyledTableCell>
                    }
                    <StyledTableCell style={{backgroundColor: `${colors[row.parentID]}`}}>{row.queueCnt}</StyledTableCell>
                </TableRow>
            ))}
        </StyledTableBody>
    )
}