import React, { useState } from "react"
import { X, Check, IndianRupee, FileText, Calendar, Layers } from "lucide-react"

const CreateExpense = ({ setShowForm, addExpense, isDarkMode }) => {
    const [Price, setPrice] = useState('')
    const [Description, setDescription] = useState('')
    const [DateValue, setDateValue] = useState('')
    const [Category, setCategory] = useState("")

    function createHandler(e) {
        e.preventDefault()
        addExpense({
            category: Category,
            amount: Price,
            description: Description,
            date: DateValue
        })
        setPrice('')
        setDescription('')
        setDateValue('')
        setCategory('')
        setShowForm(false)
    }

    const inputWrapperClass = `flex items-center gap-3 px-4 py-3 rounded-2xl border transition-all focus-within:ring-4 focus-within:ring-indigo-500/10 ${
        isDarkMode 
        ? 'bg-[#1A1D23] border-[#2D3748] focus-within:border-indigo-500' 
        : 'bg-gray-50 border-gray-200 focus-within:border-indigo-500'
    }`

    const inputClass = "bg-transparent outline-none flex-1 text-sm font-medium placeholder-gray-400"

    return (
        <div className={`w-full overflow-hidden rounded-[32px] shadow-2xl ${isDarkMode ? 'bg-[#121418] text-white' : 'bg-white text-gray-900'}`}>
            <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h3 className="text-2xl font-black tracking-tight">Add Transaction</h3>
                        <p className="text-xs font-bold opacity-40 uppercase tracking-widest mt-1">New Entry Details</p>
                    </div>
                    <button 
                        onClick={() => setShowForm(false)} 
                        className={`p-2 rounded-xl transition-colors ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
                    >
                        <X size={24} />
                    </button>
                </div>

                <form onSubmit={createHandler} className='space-y-6'>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 ml-1">Category</label>
                        <div className={inputWrapperClass}>
                            <Layers size={18} className="opacity-30" />
                            <select
                                value={Category}
                                onChange={(e) => setCategory(e.target.value)}
                                required
                                className={inputClass}
                            >
                                <option value="" disabled>Select a category</option>
                                <option value="Food">Food & Dining</option>
                                <option value="Travel">Travel & Commute</option>
                                <option value="Shopping">Shopping & Lifestyle</option>
                                <option value="Rent">Rent & Utilities</option>
                                <option value="Other">Miscellaneous</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 ml-1">Amount</label>
                        <div className={inputWrapperClass}>
                            <IndianRupee size={18} className="opacity-30" />
                            <input
                                value={Price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                                className={inputClass}
                                type="number"
                                min="0"
                                step="0.01"
                                placeholder="0.00"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 ml-1">Description</label>
                        <div className={inputWrapperClass}>
                            <FileText size={18} className="opacity-30" />
                            <input
                                value={Description}
                                onChange={(e) => setDescription(e.target.value)}
                                type="text"
                                placeholder='What was this for? (Optional)'
                                className={inputClass}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 ml-1">Date</label>
                        <div className={inputWrapperClass}>
                            <Calendar size={18} className="opacity-30" />
                            <input
                                value={DateValue}
                                onChange={(e) => setDateValue(e.target.value)}
                                required
                                type="date"
                                className={inputClass}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className='w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-2xl transition-all active:scale-95 shadow-xl shadow-indigo-200/50 flex items-center justify-center gap-3 mt-4'
                    >
                        <Check size={20} />
                        RECORD EXPENSE
                    </button>
                </form>
            </div>
            
            <div className={`px-8 py-4 text-center text-[10px] font-bold opacity-30 uppercase tracking-widest ${isDarkMode ? 'bg-black/20' : 'bg-gray-50'}`}>
                Secured transaction logging
            </div>
        </div>
    )
}

export default CreateExpense
