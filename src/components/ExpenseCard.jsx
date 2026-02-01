const ExpenseCard = ({ Category, Price, Description, Date, onDelete }) => {
  return (
    <div
      className="bg-[#DDE2E7] w-52 p-3 rounded-xl shadow-md
                 transition-all duration-300 ease-out
                 animate-[fadeIn_0.3s_ease-out]"
    >

      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-lg underline">Expense</h1>
        <span className="text-xs text-gray-700">{Date}</span>
      </div>

      <div className="flex justify-between mt-3 text-sm font-semibold">
        <span className="bg-amber-100 px-2 py-1 rounded">
          {Category}
        </span>
        <span className="bg-amber-100 px-2 py-1 rounded">
          ₹ {Price}
        </span>
      </div>

      <p className="mt-2 text-sm text-gray-800">
        {Description}
      </p>

      <button
        onClick={onDelete}
        className="mt-3 w-full bg-red-500 text-white py-1 rounded active:scale-95"
      >
        Delete
      </button>

    </div>
  );
};

export default ExpenseCard;
