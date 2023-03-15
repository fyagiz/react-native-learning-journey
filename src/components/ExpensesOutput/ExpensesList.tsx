import { FlatList, ListRenderItemInfo, Text } from "react-native";

import { ExpenseType } from "../../types/ExpenseType";
import ExpenseItem from "./ExpenseItem";

type ExpensesListPropsType = { expenses: Array<ExpenseType> };

function renderExpenseItem(itemData: ListRenderItemInfo<ExpenseType>) {
  const item = itemData.item;

  return <ExpenseItem {...item} />;
}

function ExpensesList(props: ExpensesListPropsType) {
  const { expenses } = props;
  return <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item) => item.id} />;
}

export default ExpensesList;
