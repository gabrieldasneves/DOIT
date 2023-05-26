import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    marginTop: 0,
    paddingBottom: 24,
    alignItems: "center",
  },
  header: {
    marginTop: 0,
    width: "100%",
  },
  body: {},
  inputContainer: {
    position: "absolute",
    marginTop: 162,
    width: 327,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#262626",
    borderRadius: 6,
    height: 54,
    width: 271,
    color: "#F2F2F2",
    fontSize: 16,
    padding: 16,
    flex: 1,
    marginRight: 12,
  },
  addButton: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },
});
