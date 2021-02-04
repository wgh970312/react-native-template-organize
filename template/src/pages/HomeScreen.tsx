import React from "react";
import { View, Text } from "react-native";
import { ScreensParamList } from "@/router";
import { ScreenProps } from "@/types/types";

export default function HomeScreen({ navigation }: ScreenProps<ScreensParamList, 'Home'>) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  )
}