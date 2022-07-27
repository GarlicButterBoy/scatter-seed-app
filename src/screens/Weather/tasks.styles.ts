import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  weatherTop: {
    flex: 1,
    width: "80%",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 20,
    justifyContent: "space-around",
    backgroundColor: "#fbf0e2",
    borderRadius: 15,
    elevation: 15,
    borderColor: "black",
    borderWidth: 1,
  },
  iconTemp: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "row",
    padding: 25,
    marginBottom: 10,
    // justifyContent: "center",
  }, 
  weatherBottom: {
    flex: 1,
    width: "90%",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 20,
    justifyContent: "space-around",
    backgroundColor: "#fbf0e2",
    borderRadius: 15,
    elevation: 15,
    borderColor: "black",
    borderWidth: 1,
  },
  topWeatherDetails: {
    flex: 1,
    width: "100%",
    // alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  bottomWeatherDetails: {
    flex: 1,
    width: "100%",
    // alignItems: "center",
    marginLeft: 15,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  rowView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  weatherLogo: {
    flex: 1,
    resizeMode: "contain",
    width: 150,
    height: 150,
  },
  degreesHeader: {
    fontSize: 55,
    alignItems: "center",
    fontWeight: "bold",
  },
  text: {
    fontSize: 14,
    alignItems: "center",
    fontWeight: "bold",
  },
  chore: {
    fontSize: 12,
    alignItems: "flex-start",
    padding: 23,
    margin: 10,
    backgroundColor: "#d2ebf9",
  },
  chore1: {
    fontSize: 12,
    alignItems: "flex-start",
    padding: 13,
    margin: 10,
    backgroundColor: "#78c2ed",
  },
  subheader: {
    fontSize: 20,
    alignItems: "center",
    fontWeight: "bold",
  },
  choreBlock: {
    flex: 1,
    width: "60%",
    height: "30%",
    // alignItems: "flex-start",
    backgroundColor: "#fbf0e2",
  },
});

export default styles;
