import React from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import styled from "@emotion/styled";
import TableHeader from "./TableHeader";
import {TableBody} from "@mui/material";
import MainTableBody from "./TableBody";

export const StyledTableBody = styled(TableBody)`
    line-height: 1.2;
`
export const StyledTableCell = styled(TableCell)`
  line-height: 1.2;
  text-align: center;
  padding: 1px;
  font-size: 2vh;
  width: 1vw;
  background-color: darkgray;
`


export default function TableD({rows}){
    return(
            <Table>
                <TableHeader/>
                <MainTableBody rowData={rows}/>
            </Table>
    )
}