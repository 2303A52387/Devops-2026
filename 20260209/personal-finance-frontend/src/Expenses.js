import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Expenses.css";

function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [newId, setNewId] = useState(null);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/expenses");
      setExpenses(res.data);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  const addExpense = async () => {
    if (!name || !amount) {
      alert("Please enter name and amount");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/expenses", {
        name,
        amount: Number(amount),
      });

      setExpenses(prev => [...prev, res.data]);
      setNewId(res.data.id);

      setTimeout(() => setNewId(null), 2000);

      setName("");
      setAmount("");
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  };

  return (
    <div className="container">
      <h2>Add Expense</h2>

      <input
        type="text"
        placeholder="Expense Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <h2>Expense List</h2>

      {expenses.map((exp) => (
        <div
          key={exp.id}
          className={`expense-card ${exp.id === newId ? "highlight" : ""}`}
        >
          {exp.name} - ₹{exp.amount}
        </div>
      ))}
    </div>
  );
}

export default Expenses;
