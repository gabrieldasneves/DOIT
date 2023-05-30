import React from "react";
import { styles } from "./styles";
import { TouchableOpacity, View, Image, Text } from "react-native";
import { Taskprops } from "../../screens/home";
interface Props {
  task: Taskprops;
  onRemove: () => void;
  onCheck: () => void;
}

export function Task(props: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.radioButtonContainer}>
        <TouchableOpacity onPress={props.onCheck} style={styles.radioButton}>
          {props.task.checked ? (
            <View style={styles.radioButtonIcon} />
          ) : (
            <View style={styles.radioEmpty} />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.taskName}>{props.task.name}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={props.onRemove}>
        <Image source={require("../../../assets/trash.png")} />
      </TouchableOpacity>
    </View>
  );
}
