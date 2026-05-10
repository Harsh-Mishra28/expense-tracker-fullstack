import React from 'react';
import { Calendar, Tag, IndianRupee, DollarSign, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

const ExpenseCard = ({ category, amount, description, date, onDelete, isDarkMode, currency }) => {
  const getCategoryColor = (cat) => {
    const colors = {
      Food: 'bg-orange-100 text-orange-600 border-orange-200',
      Travel: 'bg-blue-100 text-blue-600 border-blue-200',
      Shopping: 'bg-pink-100 text-pink-600 border-pink-200',
      Rent: 'bg-purple-100 text-purple-600 border-purple-200',
      Other: 'bg-gray-100 text-gray-600 border-gray-200'
    };
    return colors[cat] || colors.Other;
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      className={`group relative p-5 rounded-2xl border transition-all duration-300 ${
        isDarkMode 
          ? 'bg-[#1E1E1E] border-gray-800 hover:border-indigo-500 shadow-xl shadow-black/20' 
          : 'bg-white border-gray-100 hover:border-indigo-200 shadow-sm hover:shadow-xl'
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-2 rounded-xl border ${getCategoryColor(category)}`}>
          <Tag size={18} />
        </div>
        <button
          onClick={onDelete}
          className="opacity-0 group-hover:opacity-100 p-2 text-red-500 hover:bg-red-50 rounded-lg transition-all active:scale-90"
        >
          <Trash2 size={16} />
        </button>
      </div>

      <div className="space-y-1">
        <p className={`text-xs font-bold uppercase tracking-widest opacity-40`}>{category}</p>
        <h3 className="font-bold text-lg leading-tight truncate pr-4">{description}</h3>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div className="flex flex-col">
          <span className={`text-2xl font-black ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {currency === "INR" ? "₹" : "$"} {Number(amount).toLocaleString()}
          </span>
          <div className="flex items-center gap-1.5 opacity-40 mt-1">
            <Calendar size={12} />
            <span className="text-[10px] font-bold uppercase tracking-tighter">
              {new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
            </span>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient blur on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity pointer-events-none" />
    </motion.div>
  );
};

export default ExpenseCard;
