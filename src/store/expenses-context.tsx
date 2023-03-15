import { createContext, useReducer } from "react";
import {
  addExpenseObjectType,
  ExpensesContextType,
  ReducerActionType,
  updateExpenseObjectType,
} from "../types/ContextTypes";
import { ExpenseType } from "../types/ExpenseType";

const initialExpensesContext: ExpensesContextType = {
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  setExpenses: (expenses) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
};

export const ExpensesContext = createContext<ExpensesContextType>(initialExpensesContext);

type ExpensesContextProviderPropsType = { children: any };

function expensesReducer(expenses: Array<ExpenseType>, action: ReducerActionType) {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...expenses];
    case "SET":
      const inverted = action.payload.reverse();
      return inverted;
    case "UPDATE":
      const updatableExpenseIndex = expenses.findIndex((expense) => expense.id === action.payload.id);
      const updatableExpense = expenses[updatableExpenseIndex];
      const updatedExpense = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...expenses];
      updatedExpenses[updatableExpenseIndex] = updatedExpense;
      return updatedExpenses;
    case "DELETE":
      return expenses.filter((expense) => expense.id !== action.payload);
    default:
      return expenses;
  }
}

function ExpensesContextProvider(props: ExpensesContextProviderPropsType) {
  const [expenses, dispatch] = useReducer(expensesReducer, []);

  function addExpense(expenseData: addExpenseObjectType) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function setExpenses(expenses: Array<ExpenseType>) {
    dispatch({ type: "SET", payload: expenses });
  }

  function deleteExpense(id: string) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id: string, expenseData: updateExpenseObjectType) {
    dispatch({ type: "UPDATE", payload: { id, data: expenseData } });
  }

  const value: ExpensesContextType = {
    expenses,
    addExpense,
    setExpenses,
    deleteExpense,
    updateExpense,
  };

  return <ExpensesContext.Provider value={value}>{props.children}</ExpensesContext.Provider>;
}

export default ExpensesContextProvider;
