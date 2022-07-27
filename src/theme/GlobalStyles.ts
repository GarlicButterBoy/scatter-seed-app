import { StyleSheet } from "react-native";

// Consider using styled-components library for styles that will be on every View, Text, etc.
export default StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#bce1f6", //I like this colour as the main colour for the App - THOUGHTS?
    //secondary colour "#fbf0e2"
    //tertiary colour "#7a4b0e"
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    margin: 10,
  },
  closeText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#7a4b0e",
  },
  modal:{
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
});
