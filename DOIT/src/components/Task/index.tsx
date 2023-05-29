import React from "react";
import { styles } from "./styles";
import { TouchableOpacity, View, Image, Text } from "react-native";

interface Props {
  name: string;
  onRemove: () => void;
}

export function Task(props: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.radio}></View>
      <Text style={styles.taskName}>{props.name}</Text>
      <TouchableOpacity style={styles.button}>
        <Image source={require("../../../assets/trash.png")} />
      </TouchableOpacity>
    </View>
  );
}
