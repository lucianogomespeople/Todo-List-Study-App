import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type TaskProps = {
  description: string;
  onRemove: () => void;
  onChecked: () => void;
  isChecked: boolean;
};

export default function Task({
  description,
  onRemove,
  onChecked,
  isChecked,
}: TaskProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onChecked}>
        {isChecked ? (
          <Image
            style={{ width: 28, height: 28 }}
            source={require("../../../assets/icons/checked.png")}
          />
        ) : (
          <Image
            style={{ width: 28, height: 28 }}
            source={require("../../../assets/icons/check.png")}
          />
        )}
      </TouchableOpacity>
      <Text style={styles.taskDescription}>{description}</Text>

      <TouchableOpacity onPress={onRemove}>
        <Image
          style={{ width: 20, height: 20 }}
          source={require("../../../assets/icons/trash.png")}
        />
      </TouchableOpacity>
    </View>
  );
}
