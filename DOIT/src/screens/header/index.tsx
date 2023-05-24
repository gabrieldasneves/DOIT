import React from "react";
import { styles } from "./styles";
import { View, Text } from "react-native";

export function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.to}>to</Text>
      <Text style={styles.do}>do</Text>
    </View>
  );
}
