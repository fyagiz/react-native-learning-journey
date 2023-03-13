import { createContext, useReducer } from "react";
import { addExpenseObjectType, ExpensesContextType, ReducerActionType } from "../types/ContextTypes";
import ExpenseType from "../types/ExpenseType";

const DUMMY_EXPENSES: Array<ExpenseType> = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2023-03-02"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2023-03-09"),
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2023-01-01"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 14.99,
    date: new Date("2023-02-19"),
  },
  {
    id: "e5",
    description: "Another book",
    amount: 18.59,
    date: new Date("2023-02-18"),
  },
  {
    id: "e6",
    description: "Car",
    amount: 2999,
    date: new Date("2020-03-02"),
  },
  {
    id: "e7",
    description: "Laptop",
    amount: 3000,
    date: new Date("2023-03-09"),
  },
  {
    id: "e8",
    description: "House",
    amount: 45000,
    date: new Date("2000-01-01"),
  },
  {
    id: "e9",
    description: "A gift",
    amount: 29.99,
    date: new Date("2023-02-18"),
  },
  {
    id: "e10",
    description: "Keyboard",
    amount: 38.59,
    date: new Date("2023-02-15"),
  },
];

const initialExpensesContext: ExpensesContextType = {
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
};

export const ExpensesContext = createContext<ExpensesContextType>(initialExpensesContext);

type ExpensesContextProviderPropsType = { children: any };

function expensesReducer(expenses: Array<ExpenseType>, action: ReducerActionType) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ id: id, ...action.payload }, ...expenses];
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
  const [expenses, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData: addExpenseObjectType) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id: string) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id: string, expenseData: addExpenseObjectType) {
    dispatch({ type: "UPDATE", payload: { id, data: expenseData } });
  }

  const value: ExpensesContextType = {
    expenses,
    addExpense,
    deleteExpense,
    updateExpense,
  };

  return <ExpensesContext.Provider value={value}>{props.children}</ExpensesContext.Provider>;
}

export default ExpensesContextProvider;
