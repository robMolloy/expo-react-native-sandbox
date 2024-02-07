import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export type TCounter = React.FC;

export const Counter: TCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Counter: {count}</Text>
      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={() => setCount((count) => count + 1)}
        >
          click me
        </Text>
      </TouchableOpacity>
    </View>
  );
};
