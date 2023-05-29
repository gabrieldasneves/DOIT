import React from "react";
import { styles } from "./styles";
import { View, Text, Image } from "react-native";

export function EmptyTasks() {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/Clipboard.png")} />
      <Text style={styles.emptyTasksH1}>You don't have any tasks</Text>
      <Text style={styles.emptyTasksH2}>Create your to-do items</Text>
    </View>
  );
}
