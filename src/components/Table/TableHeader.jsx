import React from 'react'
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import {StyledTableCell} from "./Table";

export default function TableHeader(){

    return(
        <TableHead>
            <TableRow>
                <StyledTableCell>Филиал</StyledTableCell>
                <StyledTableCell>ЦБО</StyledTableCell>
                <StyledTableCell>Обслужены</StyledTableCell>
                <StyledTableCell>Средн. время обслуживания</StyledTableCell>
                <StyledTableCell>Средн. время ожидания</StyledTableCell>
                <StyledTableCell>В очереди <br/> сейчас</StyledTableCell>
            </TableRow>

        </TableHead>
    )
}