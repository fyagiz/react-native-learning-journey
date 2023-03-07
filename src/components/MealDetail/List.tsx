import { View, Text, StyleSheet } from "react-native";

type ListProps = { data: Array<string> };

function List(props: ListProps) {
  const { data } = props;

  return (
    <>
      {data.map((dataPoint: any) => (
        <View key={dataPoint} style={styles.listItem}>
          <Text style={styles.itemText}>{dataPoint}</Text>
        </View>
      ))}
    </>
  );
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#3f2f25",
    textAlign: "center",
  },
});
