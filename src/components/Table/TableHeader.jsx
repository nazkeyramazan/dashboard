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
                <StyledTableCell small="true">Средн. время обслуживания</StyledTableCell>
                <StyledTableCell small="true">Средн. время ожидания</StyledTableCell>
                <StyledTableCell small="true">В очереди сейчас</StyledTableCell>
            </TableRow>

        </TableHead>
    )
}