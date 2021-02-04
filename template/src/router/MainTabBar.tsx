import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "@/pages/HomeScreen";
import MineScreen from "@/pages/MineScreen";

export type MainTabBarParamList = {
  Home: undefined;
  Mine: undefined;
};

const Tab = createBottomTabNavigator<MainTabBarParamList>()

export default function MainTabBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Mine" component={MineScreen} />
    </Tab.Navigator>
  )
}