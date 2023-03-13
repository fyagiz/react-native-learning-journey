import ExpenseType from "./ExpenseType";

export type addExpenseObjectType = {
  description: string;
  amount: number;
  date: Date;
};

export type ExpensesContextType = {
  expenses: Array<ExpenseType>;
  addExpense: (addExpenseObject: addExpenseObjectType) => void;
  deleteExpense: (id: string) => void;
  updateExpense: (id: string, updateExpenseObject: addExpenseObjectType) => void;
};

type ReducerAddType = {
  type: "ADD";
  payload: addExpenseObjectType;
};

type ReducerDeleteType = {
  type: "DELETE";
  payload: string;
};

type ReducerUpdateType = {
  type: "UPDATE";
  payload: { id: string; data: addExpenseObjectType };
};

export type ReducerActionType = ReducerAddType | ReducerDeleteType | ReducerUpdateType;
