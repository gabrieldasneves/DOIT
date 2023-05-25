import React from "react";
import { styles } from "./styles";
import { TouchableOpacity, View, Image, Text } from "react-native";

export function Button() {
  return (
    <View style={styles.container}>
      <Text style={styles.taskName}>Task name here</Text>
      <TouchableOpacity style={styles.button}>
        <Image source={require("../../../assets/plus.png")} />
      </TouchableOpacity>
    </View>
  );
}
