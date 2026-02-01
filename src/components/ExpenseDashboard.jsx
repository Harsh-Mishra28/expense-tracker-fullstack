import CreateExpense from "./CreateExpense";
import { useEffect, useState } from "react";
import ExpenseCard from "./ExpenseCard";

const ExpenseDashboard = ({ TaskHandler, ShowForm, setShowForm }) => {

  const [expenses, setExpenses] = useState([]);

  // LOAD from localStorage (on refresh)
  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem("expenses"));
    if (Array.isArray(storedExpenses)) {
      setExpenses(storedExpenses);
    }
  }, []);

  // SAVE to localStorage (on change)
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // ADD expense
  const addExpense = (newExpense) => {
    setExpenses(prev => [...prev, newExpense]);
  };

  // DELETE expense
  const deleteExpense = (index) => {
    setExpenses(prev => prev.filter((_, i) => i !== index));
  };

  // TOTAL amount
  const totalAmount = expenses.reduce(
    (sum, item) => sum + Number(item.Price),
    0
  );

  // CATEGORY totals
  const categoryTotals = expenses.reduce((acc, item) => {
    acc[item.Category] = (acc[item.Category] || 0) + Number(item.Price);
    return acc;
  }, {});

  return (
    <section className="relative flex bg-[#EEF3F8] min-h-[calc(100vh-120px)]">

      {/* LEFT PANEL */}
      <div className="w-[320px] p-5">
        <button onClick={TaskHandler} type="button" className="button2">
          <span className="button2__text">Add Expense</span>
          <span className="button2__icon">+</span>
        </button>

        {ShowForm && (
          <CreateExpense
            setShowForm={setShowForm}
            addExpense={addExpense}
          />
        )}
      </div>

      {/* DIVIDER */}
      <div className="absolute top-0 left-80 h-full w-px bg-linear-to-b from-transparent via-gray-400 to-transparent" />

      {/* RIGHT SIDE */}
      <div className="flex-1 p-4">

        <h1 className="font-bold text-5xl text-center py-3 bg-[#a4a7a4bc] rounded">
          Your Expenses
        </h1>

        <p className="text-center text-xl font-semibold mt-2 text-gray-700">
          Total: ₹ {totalAmount}
        </p>

        {/* EMPTY STATE */}
        {expenses.length === 0 && (
          <p className="text-center mt-8 text-gray-600 text-lg">
            No expenses yet. Click <span className="font-semibold">Add Expense</span> to get started.
          </p>
        )}

        {/* CATEGORY SUMMARY */}
        {expenses.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-6 justify-center">
            {Object.entries(categoryTotals).map(([category, amount]) => (
              <div
                key={category}
                className="bg-white px-4 py-2 rounded-lg shadow text-sm font-semibold"
              >
                {category}: ₹ {amount}
              </div>
            ))}
          </div>
        )}

        {/* EXPENSE CARDS */}
        <div className="flex flex-wrap gap-4 mt-6">
          {expenses.map((expense, index) => (
            <ExpenseCard
              key={index}
              {...expense}
              onDelete={() => deleteExpense(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExpenseDashboard;
