export type ExpenseType = {
  id: string;
  description: string;
  amount: number;
  date: Date;
};

export type ExpenseTypeWithoutId = Omit<ExpenseType, "id">;
