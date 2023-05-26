import React, { useState } from "react";
import { styles } from "./styles";
import { View, Image, Text, TouchableOpacity, TextInput } from "react-native";
import { Header } from "../../components/Header";

export function Home() {
  const [taskName, setTaskName] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholderTextColor="#808080"
          placeholder="Participant"
          style={styles.input}
          onChangeText={setTaskName}
          value={taskName}
        />
        <TouchableOpacity style={styles.addButton}>
          <Image source={require("../../../assets/plus.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
