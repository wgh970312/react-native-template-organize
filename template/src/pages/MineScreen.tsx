import React, { useCallback } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProps } from "@/types/types";
import { ScreensParamList } from "@/router";

export default function MineScreen() {
  const naviagtion = useNavigation<StackNavigationProps>()
  const goto = useCallback(<T extends keyof ScreensParamList>(route: T, params?: ScreensParamList[T]) => {
    naviagtion.push(route as keyof ScreensParamList, params)
  }, [])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>我的</Text>
      <TouchableOpacity onPress={() => goto('Details', { title: '111' })}>
        <Text>跳转详情</Text>
      </TouchableOpacity>
    </View>
  )
}