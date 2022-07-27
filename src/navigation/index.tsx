import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AppNavigator from "./AppNavigator";
import LoginPage from "../screens/Login";

const Stack = createStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <AppNavigator />
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginPage} 
        />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}
