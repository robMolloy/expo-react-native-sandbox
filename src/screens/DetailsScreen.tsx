import { TScreenProps, TScreenPropsMap } from "App";
import { Button, Text, View } from "react-native";

type TDetailsScreenProps = TScreenPropsMap["Details"];
export function DetailsScreen({ navigation, route }: TDetailsScreenProps) {
  const { itemId } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen, itemId: {itemId}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
