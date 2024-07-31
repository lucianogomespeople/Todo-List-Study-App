import { StyleSheet } from "react-native";
import { fontSize } from "../../../theme/fonts";
import { colors } from "../../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },

  textEmptyList: {
    marginTop: 20,
    fontSize: fontSize.lg,
    color: colors.gray300,
    fontWeight: fontSize.bold,
  },
  textEmptyList2: {
    fontSize: fontSize.lg,
    color: colors.gray300,
  },
});
