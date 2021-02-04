import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ScreensParamList } from "@/router";

export interface ScreenProps<
  T extends ScreensParamList,
  N extends keyof ScreensParamList
> {
  navigation: StackNavigationProp<T, N>;
  route: RouteProp<T, N>;
}

export type StackNavigationProps = StackNavigationProp<ScreensParamList>