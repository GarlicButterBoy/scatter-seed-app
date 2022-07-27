import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  choreBlock: {
    flex: 1,
    width: "55%",
    height: "30%",
    alignItems: "flex-start",
    justifyContent: "space-around",
  },
  text: {
    fontSize: 14,
    alignItems: "center",
    fontWeight: "bold",
  },
  textInput: {
    fontSize: 14,
    height: "25%",
    width: "100%",
    fontWeight: "bold",
  },
  chore: {
    fontSize: 12,
    alignItems: "flex-start",
  },
  subheader: {
    fontSize: 20,
    alignItems: "center",
    fontWeight: "bold",
  },
  headerText: {
    fontSize: 34,
    alignItems: "center",
    fontWeight: "bold",
  },
  button: {
    width: 300,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    backgroundColor: "#fbf0e2",
    borderRadius: 10,
  },
});

export default styles;
