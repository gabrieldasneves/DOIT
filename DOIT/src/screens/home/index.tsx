import React, { useState } from "react";
import { styles } from "./styles";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  FlatList,
} from "react-native";
import { Header } from "../../components/Header";
import { EmptyTasks } from "../../components/EmptyTasks";
import { Task } from "../../components/Task";

export function Home() {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  function handleTaskAdd() {
    if (tasks.includes(taskName)) {
      return Alert.alert("This task already exists", "");
    }
    if (taskName == "") {
      return Alert.alert("Invalid participant", "");
    }
    setTasks((prevState) => [...prevState, taskName]);

    setTaskName("");
  }

  function handleRemoveTask(name: string) {
    setTasks((prevState) => prevState.filter((task) => task !== name));
    console.log(tasks);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholderTextColor="#808080"
          placeholder="Add your new task"
          style={styles.input}
          onChangeText={setTaskName}
          value={taskName}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleTaskAdd}>
          <Image source={require("../../../assets/plus.png")} />
        </TouchableOpacity>
      </View>

      <View style={styles.taskContainer}>
        <View style={styles.counterContainer}>
          <View>
            <Text style={styles.createdText}>Created</Text>
          </View>
          <View>
            <Text style={styles.doneText}>Done</Text>
          </View>
        </View>

        <View style={styles.tasks}>
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <Task
                key={item}
                name={item}
                onRemove={() => handleRemoveTask(item)}
              />
            )}
          />
          <EmptyTasks />
        </View>
      </View>
    </View>
  );
}
