import axios from "axios";

import { DATABASE_URL } from "@env";
import { ExpenseType, ExpenseTypeWithoutId } from "../types/ExpenseType";

export async function storeExpense(expenseData: ExpenseTypeWithoutId) {
  const response = await axios.post(DATABASE_URL + "/expenses.json", expenseData);
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(DATABASE_URL + "/expenses.json");

  const expenses: Array<ExpenseType> = [];

  for (const key in response.data) {
    const expenseObject: ExpenseType = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObject);
  }

  return expenses;
}

export function updateExpense(id: string, expenseData: ExpenseTypeWithoutId) {
  return axios.put(DATABASE_URL + `/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id: string) {
  return axios.delete(DATABASE_URL + `/expenses/${id}.json`);
}
