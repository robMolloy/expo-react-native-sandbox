import { DetailsScreen } from "@/screens/DetailsScreen";
import { HomeScreen } from "@/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import * as React from "react";

type TStackNavigatorParamsGeneral = {
  [key: string]: { [key: string]: string | number } | undefined;
};
type createStackNavigatorParams<T extends TStackNavigatorParamsGeneral> = T;
type TScreenNavigationProps<
  T0 extends TStackNavigatorParamsGeneral,
  T1 extends keyof T0
> = NativeStackNavigationProp<T0, T1>;

type TScreenRouteProps<
  T0 extends TStackNavigatorParamsGeneral,
  T1 extends keyof T0
> = { params: T0[T1] };

export type TScreenProps<
  T0 extends TStackNavigatorParamsGeneral,
  T1 extends keyof T0
> = T0[T1] extends undefined
  ? { navigation: TScreenNavigationProps<T0, T1> }
  : {
      navigation: TScreenNavigationProps<T0, T1>;
      route: TScreenRouteProps<T0, T1>;
    };

type TCreateScreenPropsMap<T extends TStackNavigatorParamsGeneral> = {
  [k in keyof T]: TScreenProps<T, k>;
};

type TStackNavigatorParams = createStackNavigatorParams<{
  Home: undefined;
  Details: { itemId: number };
}>;
export type TScreenPropsMap = TCreateScreenPropsMap<TStackNavigatorParams>;

const Stack = createNativeStackNavigator<TStackNavigatorParams>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
