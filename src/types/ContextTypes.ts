import { ExpenseType, ExpenseTypeWithoutId } from "./ExpenseType";

export type addExpenseObjectType = ExpenseType;
export type updateExpenseObjectType = ExpenseTypeWithoutId;

export type ExpensesContextType = {
  expenses: Array<ExpenseType>;
  addExpense: (addExpenseObject: addExpenseObjectType) => void;
  setExpenses: (expenses: Array<ExpenseType>) => void;
  deleteExpense: (id: string) => void;
  updateExpense: (id: string, updateExpenseObject: updateExpenseObjectType) => void;
};

type ReducerAddType = {
  type: "ADD";
  payload: addExpenseObjectType;
};

type ReducerSetType = {
  type: "SET";
  payload: Array<ExpenseType>;
};

type ReducerDeleteType = {
  type: "DELETE";
  payload: string;
};

type ReducerUpdateType = {
  type: "UPDATE";
  payload: { id: string; data: updateExpenseObjectType };
};

export type ReducerActionType = ReducerAddType | ReducerSetType | ReducerDeleteType | ReducerUpdateType;
