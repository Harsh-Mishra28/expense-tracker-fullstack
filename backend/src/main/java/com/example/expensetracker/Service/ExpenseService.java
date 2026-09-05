package com.example.expensetracker.service;

import com.example.expensetracker.entity.Expense;
import java.util.List;

public interface ExpenseService {
    List<Expense> getAllExpenses();
    Expense createExpense(Expense expense);
    boolean deleteExpense(Long id);
    void clearAllExpenses();
}
