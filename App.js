import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Splash } from "./Src/screens/Splash";
import { SignUp } from "./Src/screens/SignUp";
import { Registration } from "./Src/screens/Registration";
import { CustomAlert } from "./Src/screens/CustomAlert";
import { Posts } from "./Src/screens/flatlist";
import { DataPassing } from "./Src/screens/Datapassing";
import { Books } from "./Src/screens/Flatlisttonextpage";
import { FileStyle } from "./Src/screens/InfilesStyle";
import { useState } from "./Src/screens/UseState";
export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Splash" component={Splash} />
        <stack.Screen name="UseState" component={useState} />
        <stack.Screen
          name="InFile"
          component={FileStyle}
          options={{ title: "files" }}
        />
        <stack.Screen name="Books" component={Books} />
        <stack.Screen name="DataPassing" component={DataPassing} />

        <stack.Screen name="Post" component={Posts} />
        <stack.Screen name="Custom" component={CustomAlert} />
        <stack.Screen name="Registration" component={Registration} />
        <stack.Screen name="SignUp" component={SignUp} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
