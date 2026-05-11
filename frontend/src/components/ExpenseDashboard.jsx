import React, { useEffect, useState, useMemo, useCallback } from "react";
import CreateExpense from "./CreateExpense";
import ExpenseCard from "./ExpenseCard";
import ExpenseChart from "./ExpenseChart";
import { 
  Search, 
  SortAsc, 
  SortDesc, 
  Download, 
  Trash2, 
  Moon, 
  Sun, 
  DollarSign, 
  IndianRupee,
  TrendingUp,
  PieChart as PieChartIcon,
  LayoutGrid,
  Info,
  Plus,
  Wallet
} from "lucide-react";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

const ExpenseDashboard = ({ TaskHandler, ShowForm, setShowForm }) => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currency, setCurrency] = useState("INR");
  const [showAnalytics, setShowAnalytics] = useState(false);

  const fetchExpenses = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/expenses`);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setExpenses(data);
    } catch (err) {
      console.error("Error fetching:", err);
      toast.error("Offline Mode: Using local data");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchExpenses();
  }, [fetchExpenses]);

  const addExpense = async (newExpense) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/expenses`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newExpense)
      });
      
      if (!res.ok) throw new Error("Failed to save");
      const data = await res.json();
      setExpenses(prev => [...prev, data]);
      toast.success("Expense Recorded");
    } catch (err) {
      const localExpense = { ...newExpense, id: Date.now() };
      setExpenses(prev => [...prev, localExpense]);
      toast.success("Saved Locally");
    }
  };

  const deleteExpense = async (id, index) => {
    try {
      if (id && typeof id === 'number' && id > 1000000) {
         // temp id
      } else if (id) {
        await fetch(`${import.meta.env.VITE_API_URL}/api/expenses/${id}`, { method: "DELETE" });
      }
      setExpenses(prev => prev.filter((exp, i) => exp.id !== id || (!id && i !== index)));
      toast.success("Removed");
    } catch (err) {
      toast.error("Sync Failed");
    }
  };

  const clearAllExpenses = async () => {
    if (!window.confirm("Delete all expense records permanently?")) return;
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/api/expenses/clear-all`, { method: "DELETE" });
      setExpenses([]);
      toast.success("Database Cleared");
    } catch (err) {
      setExpenses([]);
      toast.success("Cleared Locally");
    }
  };

  const exportToCSV = () => {
    if (expenses.length === 0) return toast.error("No data");
    const headers = ["Category,Amount,Description,Date\n"];
    const rows = expenses.map(e => `${e.category},${e.amount},"${e.description}",${e.date}\n`);
    const blob = new Blob([headers, ...rows], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `expense_report_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const filteredExpenses = useMemo(() => {
    return expenses
      .filter(exp => {
        return (exp.description?.toLowerCase().includes(searchQuery.toLowerCase()) || 
                exp.category?.toLowerCase().includes(searchQuery.toLowerCase()));
      })
      .sort((a, b) => {
        let valA = a[sortBy];
        let valB = b[sortBy];
        if (sortBy === "date") {
          valA = new Date(a.date);
          valB = new Date(b.date);
        }
        if (sortOrder === "asc") return valA > valB ? 1 : -1;
        return valA < valB ? 1 : -1;
      });
  }, [expenses, searchQuery, sortBy, sortOrder]);

  const totalAmount = useMemo(() => expenses.reduce((sum, item) => sum + Number(item.amount || 0), 0), [expenses]);
  const avgExpense = expenses.length > 0 ? (totalAmount / expenses.length).toFixed(2) : 0;
  const maxExpense = expenses.length > 0 ? Math.max(...expenses.map(e => Number(e.amount))) : 0;

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-[#0F1115] text-[#E2E8F0]' : 'bg-[#F1F5F9] text-[#1E293B]'}`}>
      
      <main className="w-full p-4 md:p-8 lg:p-12">
        
        {/* TOP NAVBAR */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
          <div className="flex items-center gap-4">
             <div className="bg-indigo-600 p-3 rounded-2xl text-white shadow-lg shadow-indigo-200">
               <TrendingUp size={28} />
             </div>
             <div>
               <h1 className="text-3xl md:text-4xl font-black tracking-tight">EXPENSER</h1>
               <p className="opacity-50 font-medium">Tracking {expenses.length} financial activities</p>
             </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl border transition-all ${isDarkMode ? 'bg-[#1A1D23] border-[#2D3748] focus-within:border-indigo-500' : 'bg-white border-[#E2E8F0] focus-within:border-indigo-500 shadow-sm'}`}>
              <Search size={18} className="opacity-30" />
              <input 
                type="text" 
                placeholder="Search everything..." 
                className="bg-transparent outline-none text-sm w-full md:w-64 font-medium"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2">
              <button 
                onClick={() => setShowForm(true)}
                className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-2xl font-bold shadow-lg shadow-indigo-200 active:scale-95 transition-all"
              >
                <Plus size={18} />
                <span>Add Expense</span>
              </button>

              <div className="h-8 w-px bg-gray-300 mx-1" />

              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2.5 rounded-2xl border ${isDarkMode ? 'bg-[#1A1D23] border-[#2D3748] text-yellow-400' : 'bg-white border-[#E2E8F0] text-gray-500'}`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button 
                onClick={() => setCurrency(currency === "INR" ? "USD" : "INR")}
                className={`px-3 py-2.5 rounded-2xl border font-bold text-xs ${isDarkMode ? 'bg-[#1A1D23] border-[#2D3748]' : 'bg-white border-[#E2E8F0]'}`}
              >
                {currency}
              </button>
            </div>
          </div>
        </div>

        {/* QUICK STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className={`p-6 rounded-3xl border transition-all hover:scale-[1.02] ${isDarkMode ? 'bg-indigo-600 text-white border-indigo-500 shadow-xl shadow-indigo-500/20' : 'bg-indigo-600 text-white border-indigo-500 shadow-xl shadow-indigo-200'}`}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-white/20 text-white">
              <Wallet size={20} />
            </div>
            <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-1">Total Tracked</p>
            <h2 className="text-3xl font-black">
              {currency === "INR" ? "₹" : "$"} {totalAmount.toLocaleString()}
            </h2>
          </div>

          {[
            { label: "Avg Transaction", value: avgExpense, icon: Info, color: "indigo" },
            { label: "Highest Spending", value: maxExpense, icon: TrendingUp, color: "rose" },
            { label: "Active Period", value: "May 2026", icon: LayoutGrid, color: "emerald", isText: true }
          ].map((stat, i) => (
            <div key={i} className={`p-6 rounded-3xl border transition-all hover:scale-[1.02] ${isDarkMode ? 'bg-[#1A1D23] border-[#2D3748]' : 'bg-white border-[#E2E8F0] shadow-sm'}`}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-${stat.color}-100 text-${stat.color}-600`}>
                <stat.icon size={20} />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest opacity-40 mb-1">{stat.label}</p>
              <h2 className="text-2xl font-black">
                {stat.isText ? stat.value : `${currency === "INR" ? "₹" : "$"} ${Number(stat.value).toLocaleString()}`}
              </h2>
            </div>
          ))}
        </div>

        {/* ANALYTICS TOGGLE */}
        <div className="mb-8">
           <button 
            onClick={() => setShowAnalytics(!showAnalytics)}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all ${showAnalytics ? 'bg-indigo-600 text-white shadow-xl' : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'}`}
           >
             <PieChartIcon size={20} />
             {showAnalytics ? "Hide Visual Analytics" : "View Visual Analytics"}
           </button>
           
           <AnimatePresence>
            {showAnalytics && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden mt-6"
              >
                <ExpenseChart expenses={expenses} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* LIST CONTROLS */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded-xl overflow-hidden shadow-sm">
              <select 
                className={`px-3 py-2 text-xs font-bold outline-none ${isDarkMode ? 'bg-[#1A1D23]' : 'bg-white'}`}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="date">Sort by Date</option>
                <option value="amount">Sort by Amount</option>
                <option value="category">Sort by Category</option>
              </select>
              <button 
                onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                className={`px-3 py-2 border-l transition-colors ${isDarkMode ? 'bg-[#2D3748] hover:bg-[#4A5568]' : 'bg-gray-50 hover:bg-gray-100'}`}
              >
                {sortOrder === "asc" ? <SortAsc size={16} /> : <SortDesc size={16} />}
              </button>
            </div>
            
            <button 
              onClick={exportToCSV}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl border transition-all ${isDarkMode ? 'hover:bg-gray-800 border-[#2D3748]' : 'hover:bg-gray-50 border-[#E2E8F0]'}`}
            >
              <Download size={14} />
              Export CSV
            </button>
          </div>

          <button onClick={clearAllExpenses} className="text-xs font-bold text-rose-500 hover:underline flex items-center gap-1">
            <Trash2 size={14} />
            Reset All Records
          </button>
        </div>

        {/* EXPENSE GRID */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24">
            <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mb-4" />
            <p className="font-bold text-sm tracking-widest opacity-30">SYNCHRONIZING...</p>
          </div>
        ) : filteredExpenses.length === 0 ? (
          <div className="py-24 text-center bg-gray-500/5 rounded-[40px] border-4 border-dashed border-gray-500/10">
            <LayoutGrid size={48} className="mx-auto mb-4 opacity-10" />
            <h3 className="text-xl font-bold opacity-40">No records found</h3>
            <p className="text-sm opacity-30">Start by adding your first expense</p>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredExpenses.map((expense, index) => (
                <ExpenseCard
                  key={expense.id || index}
                  {...expense}
                  isDarkMode={isDarkMode}
                  currency={currency}
                  onDelete={() => deleteExpense(expense.id, index)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </main>

      {/* FORM MODAL */}
      <AnimatePresence>
        {ShowForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setShowForm(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-md"
            >
              <CreateExpense 
                setShowForm={setShowForm} 
                addExpense={addExpense} 
                isDarkMode={isDarkMode} 
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default ExpenseDashboard;
