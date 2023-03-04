import React from "react";
import { Text, FlatList, TouchableOpacity } from "react-native";
const bookData = [
  { Title: "Pak", Subtitle: "Heros" },
  { Title: "Pak1", Subtitle: "Heros1" },
  { Title: "Pak2 ", Subtitle: "Heros2" },
  { Title: "Pak3", Subtitle: "Heros3" },
  { Title: "Pak5", Subtitle: "Heros5" },
  { Title: "Pak6", Subtitle: "Heros6" },
  { Title: "Pak7", Subtitle: "Heros7" },
];
function Books({ navigation }) {
  const __renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        padding: 10,
        margin: 10,
        backgroundColor: "rgba(212,22,40,0.5)",
        borderRadius: 10,
      }}
      onPress={() => navigation.navigate("bookDetails", { data: item })}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
        {item.Title}
      </Text>
      <Text style={{ fontSize: 20, fontWeight: "medium", color: "white" }}>
        {item.Subtitle}
      </Text>
    </TouchableOpacity>
  );
  return <FlatList data={bookData} renderItem={__renderItem}></FlatList>;
}
export { Books };
