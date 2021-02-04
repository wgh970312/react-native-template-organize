import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import DetailsScreen from "@/pages/DetailsScreen";
import MainTabBar, { MainTabBarParamList } from "./MainTabBar";

export type ScreensParamList = RootStackParamList & MainTabBarParamList

export type RootStackParamList = {
  Main: undefined;
  Details: { title?: string } | undefined;
};

const Stack = createStackNavigator<RootStackParamList>()

const options: StackNavigationOptions = {
  headerShown: false
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainTabBar} options={options} />
        <Stack.Screen name="Details" component={DetailsScreen} options={({ route }) => ({ title: route.params?.title || '详情' })} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}