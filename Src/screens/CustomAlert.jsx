import React from "react";
import { View, Button, Alert } from "react-native";

function CustomAlert() {
  const gotoRegister = () => {
    Alert.alert("title", "subtitle", [
      {
        text: "hie",
        onPress: () => {
          alert("Make Account");
        },
      },
      {
        text: "by",
        onPress: () => {
          alert("Request Declined");
        },
      },
    ]);
  };

  return (
    <View>
      <Button title={"my button"} onPress={gotoRegister} />
    </View>
  );
}
export { CustomAlert };
