import React, { useEffect, useState } from "react";
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

export interface Taskprops {
  name: string;
  checked: boolean;
}

export function Home() {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState<Taskprops[]>([]);
  const [check, setCheck] = useState<Number>(0);

  useEffect(() => {
    setCheck(tasks.filter((item) => item.checked).length);
  }, [tasks]);

  function handleTaskAdd() {
    if (
      tasks.find(
        (task) => task.name.toLocaleLowerCase() === taskName.toLocaleLowerCase()
      )
    ) {
      return;
    }
    if (taskName == "") {
      return Alert.alert("Invalid participant", "");
    }
    const data = { name: taskName, checked: false };
    setTasks((prevState) => [...prevState, data]);

    setTaskName("");
  }

  function handleRemoveTask(name: string) {
    setTasks((prevState) => prevState.filter((task) => task.name !== name));
    console.log(tasks);
  }

  function handleCheckTask(task: Taskprops) {
    const currentTasks = [...tasks];
    setTasks(currentTasks);
    task.checked = !task.checked;

    return task.checked;
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
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text style={styles.createdText}>Created </Text>
            <View
              style={{
                backgroundColor: "#333333",
                width: 25,
                height: 19,
                alignItems: "center",
                borderRadius: 999,
              }}
            >
              <Text style={{ color: "#D9D9D9" }}>{tasks.length}</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text style={styles.doneText}>Done </Text>
            <View
              style={{
                backgroundColor: "#333333",
                width: 25,
                height: 19,
                alignItems: "center",
                borderRadius: 999,
              }}
            >
              <Text style={{ color: "#D9D9D9" }}>{String(check)}</Text>
            </View>
          </View>
        </View>
        <View style={styles.tasks}>
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <Task
                key={item.name}
                task={item}
                onRemove={() => handleRemoveTask(item.name)}
                onCheck={() => handleCheckTask(item)}
              />
            )}
            ListEmptyComponent={() => <EmptyTasks />}
          />
        </View>
      </View>
    </View>
  );
}
