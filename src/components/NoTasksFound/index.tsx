import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export default function NoTasksFound() {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/icons/Clipboard.png")} />
      <Text style={styles.textEmptyList}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.textEmptyList2}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
