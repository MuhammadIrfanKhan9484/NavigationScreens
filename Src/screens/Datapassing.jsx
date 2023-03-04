import { View, Button } from "react-native";
import React from "react";
function DataPassing({ navigation }) {
  const gotoRegister = () => {
    const dataForRegisterPage = "Irfan";

    navigation.navigate("Registration", { data: dataForRegisterPage });
  };
  return (
    <View>
      <Button title="My Button" onPress={gotoRegister} />
    </View>
  );
}
export { DataPassing };
