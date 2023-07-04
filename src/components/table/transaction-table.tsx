import React from "react";
import { TableHead, TableBody, TableCell } from "@mui/material";
import { TransactionTableProps } from "./types";
import {
  NoTransactionsMessage,
  StyledTable,
  StyledTableRow,
  StyledTableCell,
} from "./styled-components";

const TransactionTable: React.FC<TransactionTableProps> = ({
  transactions,
}) => {
  if (!transactions || transactions.length === 0) {
    return (
      <NoTransactionsMessage>No transactions available.</NoTransactionsMessage>
    );
  }

  return (
    <StyledTable>
      <TableHead>
        <StyledTableRow>
          <StyledTableCell>Date</StyledTableCell>
          <StyledTableCell>Description</StyledTableCell>
          <StyledTableCell>Amount</StyledTableCell>
          <StyledTableCell>Category</StyledTableCell>
        </StyledTableRow>
      </TableHead>
      <TableBody>
        {transactions.map((transaction) => (
          <StyledTableRow key={transaction.id}>
            <TableCell>{transaction.date}</TableCell>
            <TableCell>{transaction.description}</TableCell>
            <TableCell>{transaction.amount}</TableCell>
            <TableCell>{transaction.category}</TableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default TransactionTable;
