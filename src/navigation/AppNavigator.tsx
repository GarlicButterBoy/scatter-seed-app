import React from "react";
import HomePage from "../screens/Home";
import WeatherPage from "../screens/Weather";
import SettingsPage from "../screens/Settings";
import GardenPage from "../screens/Garden";
import CalendarPage from "../screens/Calendar";
// import LoginPage from "../screens/Login";
// import RegisterPage from "../screens/Register";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const Tab = createBottomTabNavigator<Navigation.AppTabsParamList>();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#fbf0e2",
        tabBarInactiveTintColor: "#7a4b0e",
        tabBarActiveBackgroundColor: "#7a4b0e",
        tabBarInactiveBackgroundColor: "#fbf0e2",
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
        },
        
        tabBarIcon: ({ focused }) => {
          let iconName = "building";
          switch (route.name) {
            case "Settings":
              iconName = "sun";
              break;
            case "Weather":
              iconName = "snowflake";
              break;
            case "Garden":
              iconName = "envira";
              break;
            case "Calendar":
              iconName = "calendar";
              break;
            default:
              iconName = "building";
          }

          return (
            <FontAwesome5
              name={iconName}
              size={focused ? 20 : 14}
              color={focused ? "#fbf0e2" : "#7a4b0e"}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Garden" component={GardenPage} />
      <Tab.Screen name="Weather" component={WeatherPage} />
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Calendar" component={CalendarPage} />
      <Tab.Screen name="Settings" component={SettingsPage} />
      {/* <Tab.Screen name="Login" component={LoginPage} /> */}
      {/* <Tab.Screen name="Register" component={RegisterPage} /> */}
    </Tab.Navigator>
  );
}
