import { useState } from "react"

const CreateExpense = ({ setShowForm, addExpense }) => {

    const [Price, setPrice] = useState('')
    const [Description, setDescription] = useState('')
    const [Date, setDate] = useState('')
    const [Category, setCategory] = useState("")

    function createHandler(e) {
        e.preventDefault()

        addExpense({
            Category,
            Price,
            Description,
            Date
        })

        setPrice('')
        setDescription('')
        setDate('')
        setCategory('')
        setShowForm(false)
    }

    return (
        <div className='h-80 mt-3 w-70 border p-5 rounded-2xl bg-[#FAF7F2]'>
            <form
                onSubmit={createHandler}
                className='flex flex-col gap-4'>

                <select
                    value={Category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                    className='bg-gray-300 p-2 rounded outline-none shadow-2xl border-gray-400 text-gray-500'
                >
                    <option value="">Select category</option>
                    <option value="Food">Food</option>
                    <option value="Travel">Travel</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Rent">Rent</option>
                    <option value="Other">Other</option>
                </select>

                <input
                    value={Price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                    className='bg-gray-300 rounded p-2 outline-none border-gray-400'
                    type="number"
                    min="0"
                    step="1"
                    placeholder="₹ 0.00"
                />

                <input
                    value={Description}
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    placeholder='Expense description'
                    className='bg-gray-300 rounded p-2 outline-none border-gray-400'
                />

                <input
                    value={Date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    type="date"
                    className='bg-gray-300 p-2 rounded outline-none border-gray-400 text-gray-500'
                />

                <button
                    className='create-btn bg-red-600 text-white py-1 font-semibold text-xl cursor-pointer rounded active:scale-95'>
                    Create
                </button>

            </form>
        </div>
    )
}

export default CreateExpense
