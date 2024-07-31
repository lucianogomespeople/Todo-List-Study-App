import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { colors } from "../../../theme/colors";
import { useState } from "react";
import NoTasksFound from "../../components/NoTasksFound";
import Task from "../../components/Task";

type TaskItem = {
  id: string;
  description: string;
  isChecked: boolean;
};

export default function Home() {
  const [tasksCreated, setTasksCreated] = useState(0);
  const [tasksCompleted, setTasksCompleted] = useState(0);
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [textDescription, setTextDescription] = useState("");

  function handleAddTask() {
    if (textDescription === "") return;
    const newTask: TaskItem = {
      id: `${tasks.length + 1}`,
      description: textDescription,
      isChecked: false,
    };
    setTasks([...tasks, newTask]);
    setTasksCreated(tasksCreated + 1);
    setTextDescription("");
  }

  function handleRemoveTask(taskId: string) {
    Alert.alert(
      "Remover Task",
      "Você realmente deseja remover esta tarefa do board?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Ok",
          onPress: () => {
            const taskToRemove = tasks.find((task) => task.id === taskId);
            if (taskToRemove?.isChecked) {
              setTasksCompleted(tasksCompleted - 1);
            }
            setTasks((prevState) =>
              prevState.filter((task) => task.id !== taskId)
            );
            setTasksCreated(tasksCreated - 1);
          },
        },
      ]
    );
  }

  function handleCheckTask(taskId: string) {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === taskId
          ? {
              ...task,
              isChecked: !task.isChecked,
            }
          : task
      )
    );
    setTasksCompleted((prevCount) =>
      tasks.find((task) => task.id === taskId)?.isChecked
        ? prevCount - 1
        : prevCount + 1
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <Image source={require("../../../assets/Logo.png")} />
      </View>
      <View style={styles.header}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={colors.gray300}
          onChangeText={setTextDescription}
          value={textDescription}
        />
        <TouchableOpacity onPress={handleAddTask} style={styles.btnAddTask}>
          <Image source={require("../../../assets/icons/plus.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.tasksInfoContainer}>
        <View style={styles.tasksInfo}>
          <Text style={styles.textCreated}>Criadas</Text>
          <Text style={styles.textTasksCount}>{tasksCreated}</Text>
        </View>
        <View style={styles.tasksInfo}>
          <Text style={styles.textCompleted}>Concluídas</Text>
          <Text style={styles.textTasksCount}>{tasksCompleted}</Text>
        </View>
      </View>
      <View style={styles.tasksBottomBorderContainer}>
        <View style={styles.tasksBottomBorder}></View>
      </View>

      <FlatList
        style={styles.tasksList}
        data={tasks}
        ListEmptyComponent={<NoTasksFound />}
        renderItem={({ item }) => (
          <Task
            description={item.description}
            isChecked={item.isChecked}
            onChecked={() => handleCheckTask(item.id)}
            onRemove={() => handleRemoveTask(item.id)}
          />
        )}
      />
    </SafeAreaView>
  );
}
