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
      <View style={styles.radioButtonContainer}>
        <TouchableOpacity onPress={() => {}} style={styles.radioButton}>
          <View style={styles.radioButtonIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.taskName}>{props.name}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={props.onRemove}>
        <Image source={require("../../../assets/trash.png")} />
      </TouchableOpacity>
    </View>
  );
}
