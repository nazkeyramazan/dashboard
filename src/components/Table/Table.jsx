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
  padding: 0;
  width: 1vw;
  font-weight: 300;
  background-color: darkgray;
  border-bottom: 1px solid rgba(224, 224, 224, 0);
  font-size: ${props => props.small ? "1.5vh" : "1.9vh"};
`


export default function TableD({rows}){
    return(
            <Table>
                <TableHeader/>
                <MainTableBody rowData={rows}/>
            </Table>
    )
}