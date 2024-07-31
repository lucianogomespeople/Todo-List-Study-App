import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";
import { fontSize, fontWeight } from "../../../theme/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray600,
  },
  topBar: {
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.gray700,
  },

  header: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 24,
    marginTop: -54,
  },

  input: {
    height: 60,
    flex: 1,
    borderRadius: 8,
    marginRight: 10,
    backgroundColor: colors.gray400,
    padding: 10,
    fontSize: fontSize.lg,
    color: colors.gray200,
  },

  btnAddTask: {
    backgroundColor: colors.blue,
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    width: 60,
    borderRadius: 8,
  },

  tasksInfoContainer: {
    width: "100%",
    padding: 24,
    justifyContent: "space-between",
    flexDirection: "row",
  },

  tasksInfo: {
    flexDirection: "row",
    gap: 10,
    alignContent: "center",
    alignItems: "center",
  },

  textCreated: {
    fontSize: fontSize.lg,
    color: colors.blue,
    fontWeight: fontWeight.bold,
  },

  textCompleted: {
    fontSize: fontSize.lg,
    color: colors.purple,
    fontWeight: fontWeight.bold,
  },

  textTasksCount: {
    backgroundColor: colors.gray400,
    padding: 4,
    height: 30,
    width: 35,
    borderRadius: 10,
    fontSize: fontSize.lg,
    color: colors.gray100,
    textAlign: "center",
  },

  tasksBottomBorder: {
    width: "100%",
    height: 1,
    backgroundColor: colors.gray400,
  },

  tasksBottomBorderContainer: {
    padding: 24,
  },

  tasksList: {
    width: "100%",
    padding: 24,
  },
});
