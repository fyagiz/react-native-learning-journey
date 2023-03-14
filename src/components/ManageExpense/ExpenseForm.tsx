import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ExpenseType, { ExpenseTypeWithoutId } from "../../types/ExpenseType";
import { getFormattedDate } from "../../utils/dateUtil";
import Button from "../UI/Button";

import Input from "./Input";

type InputValuesType = {
  amount?: string;
  date?: string;
  description?: string;
};

type InputIdentifierType = "amount" | "date" | "description";

type ExpenseFormPropsType = {
  submitButtonLabel: string;
  defaultValues?: ExpenseType;
  onSubmit: (expenseData: ExpenseTypeWithoutId) => void;
  onCancel: () => void;
};

function ExpenseForm(props: ExpenseFormPropsType) {
  const { submitButtonLabel, defaultValues, onSubmit, onCancel } = props;

  const [inputValues, setInputValues] = useState<InputValuesType>({
    amount: defaultValues ? defaultValues.amount.toString() : "",
    date: defaultValues ? getFormattedDate(defaultValues.date) : "",
    description: defaultValues ? defaultValues.description : "",
  });

  function inputChangeHandler(inputIdentifier: InputIdentifierType, enteredValue: string) {
    setInputValues((currentInputValues) => {
      return {
        ...currentInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  function submitHandler() {
    const expenseData: ExpenseTypeWithoutId = {
      amount: +inputValues.amount!,
      date: new Date(inputValues.date!),
      description: inputValues.description!,
    };

    onSubmit(expenseData);
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(inputChangeHandler, "amount"),
            value: inputValues.amount,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(inputChangeHandler, "date"),
            value: inputValues.date,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangeHandler.bind(inputChangeHandler, "description"),
          value: inputValues.description,
        }}
      />
      <View style={styles.buttons}>
        <Button style={styles.button} mode={"flat"} onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
