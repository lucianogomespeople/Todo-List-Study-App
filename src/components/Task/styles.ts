import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "100%",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: colors.gray600,
    borderColor: colors.gray400,
    borderWidth: 1,
    flexDirection: "row",
    marginBottom: 20,
  },

  taskDescription: {
    width: 240,
    fontSize: 16,
    color: colors.gray100,
  },
});
