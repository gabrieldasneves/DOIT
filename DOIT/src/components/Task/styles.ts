import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#262626",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    height: 64,
    justifyContent: "space-between",
    marginBottom: 8,
  },
  taskName: {
    fontSize: 14,
    color: "#F2F2F2",
    marginRight: 8,
    backgroundColor: "#262626",
    marginLeft: 8,
  },
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 45,
  },
  radioButton: {
    height: 17,
    width: 17,
    borderRadius: 10,
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 12,
  },
  radioButtonIcon: {
    height: 17,
    width: 17,
    borderRadius: 10,
    backgroundColor: "#5E60CE",
    borderColor: "#5E60CE",
    marginLeft: 12,
  },
  radioButtonEmpty: {
    height: 17,
    width: 17,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#5E60CE",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 12,
  },
  radioEmpty: {
    height: 17,
    width: 17,
    borderRadius: 10,
    borderColor: "#5E60CE",
  },
  button: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
});
