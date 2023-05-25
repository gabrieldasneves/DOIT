import React from "react";
import { styles } from "./styles";
import { View, Text } from "react-native";
import { Header } from "../../components/Header";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.body}></View>
    </View>
  );
}
