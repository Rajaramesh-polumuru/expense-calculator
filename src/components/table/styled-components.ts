import { Table, TableCell, TableRow } from "@mui/material";
import styled from "styled-components";

export const StyledTable = styled(Table)`
  margin-bottom: 16px;
`;

export const StyledTableCell = styled(TableCell)`
  font-weight: bold;
`;

export const StyledTableRow = styled(TableRow)`
  &:nth-of-type(even) {
    background-color: #f9f9f9;
  }
`;

export const NoTransactionsMessage = styled.div`
  padding: 16px;
  font-weight: bold;
  color: #777777;
`;
