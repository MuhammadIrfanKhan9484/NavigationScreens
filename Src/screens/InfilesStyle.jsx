import { View, StyleSheet } from "react-native";

function FileStyle() {
  return (
    <View style={style.container}>
      <View style={style.LoginForm}></View>
      <View style={style.BotomBox}></View>
    </View>
  );
}
export { FileStyle };
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  LoginForm: {
    flex: 1,
    backgroundColor: "red",
  },
  BotomBox: {
    flex: 1,
    backgroundColor: "purple",
  },
});
