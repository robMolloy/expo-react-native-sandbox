import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

type TStackNavigatorParams = { Home: undefined; Details: { itemId: number } };

type TScreenNavigationProps<T extends keyof TStackNavigatorParams> =
  NativeStackNavigationProp<TStackNavigatorParams, T>;
type TScreenRouteProps<T extends keyof TStackNavigatorParams> = {
  params: TStackNavigatorParams[T];
};

type TScreenProps<T extends keyof TStackNavigatorParams> =
  TStackNavigatorParams[T] extends undefined
    ? { navigation: TScreenNavigationProps<T> }
    : { navigation: TScreenNavigationProps<T>; route: TScreenRouteProps<T> };

type THomeScreenProps = TScreenProps<"Home">;
function HomeScreen({ navigation }: THomeScreenProps) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details", { itemId: 10 })}
      />
    </View>
  );
}

type TDetailsScreenProps = {
  navigation: TScreenNavigationProps<"Details">;
  route: TScreenRouteProps<"Details">;
};
function DetailsScreen({ navigation, route }: TDetailsScreenProps) {
  const { itemId } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen, itemId: {itemId}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

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
