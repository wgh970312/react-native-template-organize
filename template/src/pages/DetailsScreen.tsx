import React from "react";
import { View, Text, Button } from "react-native";
import { ScreensParamList } from "@/router";
import { ScreenProps } from "@/types/types";

interface Props extends ScreenProps<ScreensParamList, 'Details'> {
  extraData?: string | number
}

export default function DetailsScreen(props: Props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>title: {props.route.params?.title}</Text>
      <Button 
        title="返回"
        onPress={() => props.navigation.goBack()}
      />
    </View>
  );
}