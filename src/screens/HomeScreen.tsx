import { TScreenProps, TScreenPropsMap } from "App";
import { Button, Text, View } from "react-native";

type THomeScreenProps = TScreenPropsMap["Home"];
export function HomeScreen({ navigation }: THomeScreenProps) {
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
