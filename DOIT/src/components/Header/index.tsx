import React from "react";
import { styles } from "./styles";
import { View, Text, Image } from "react-native";

export function Header() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.rocket}
        source={require("../../../assets/rocket.png")}
      />
      <Text style={styles.to}>to</Text>
      <Text style={styles.do}>do</Text>
    </View>
  );
}
