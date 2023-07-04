import "./App.css";
import Layout from "./components/layout";
import ModalComponent from "./components/modal/add-new-transaction";
import { useState } from "react";
import { Transaction } from "./components/table/types";
import TransactionTable from "./components/table/transaction-table";

function App() {
  const [open, setOpen] = useState(false);

  const onAddTransactionClose = () => {
    setOpen(false);
  };
  const dummyTransactions: Transaction[] = [
    {
      id: 1,
      date: "2023-06-28",
      description: "Groceries",
      amount: 50.0,
      category: "Groceries",
    },
    {
      id: 2,
      date: "2023-06-29",
      description: "Rent",
      amount: 1000.0,
      category: "Rent",
    },
    {
      id: 3,
      date: "2023-06-30",
      description: "Salary",
      amount: 2500.0,
      category: "Income",
    },
  ];

  return (
    <Layout title={"Expense Tracker"}>
      <TransactionTable transactions={dummyTransactions} />
      <button onClick={() => setOpen(true)}>Add Transaction</button>
      <ModalComponent open={open} onClose={onAddTransactionClose} />
    </Layout>
  );
}

export default App;
