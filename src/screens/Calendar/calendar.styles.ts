import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  plantPageHeader: {
    flex: 1, 
    flexDirection: "row",
    // justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: 35,
  },
  plantPageHeaderIcon: {
    flex: 1,
    width: 175,
    height: 175,
    alignItems: "center",
    justifyContent: "center",
  },
  plantPageHeaderText: {
    flex: 2, 
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  plantName: {
    fontSize: 24,
    textAlign: "left",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    fontWeight: "bold",
  },
  scientificText: {
    fontStyle: "italic",
    fontWeight: "400",
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: "#fbf0e2",
    color: "#7a4b0e",
  },
  plantModal: {
    width: "80%",
    height: "90%",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 30,
  },
  detailsText: {
    fontWeight: "600",
    fontSize: 16,
    marginLeft: 5,
  },
  buttonSpace: {
    margin: 10,
  },
  calendarMainBody: {
    width: 300,
    height: 110,
    backgroundColor: "#fbf0e2",
    borderRadius: 10,
  },
  calendarBody: {
    width: 300,
    height: 48,
    justifyContent: "space-evenly",
    flexDirection: "column",
    borderWidth: 1,
  },
  monthTextView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: -3,
    // padding: 5,
  },
  monthText: {
    fontSize: 9,
    fontWeight: "bold",
    justifyContent: "center",
  },
  sowingInfo: {
    flexDirection: "row",
  },
  sowingIndoors: {
    flexDirection: "row",
    marginLeft: 6,
    marginTop: 4,
    padding: 3,
    backgroundColor: "#85e085",
    borderRadius: 15,
  },
  sowingOutdoors: {
    flexDirection: "row",
    marginLeft: 6,
    marginTop: 4,
    padding: 3,
    backgroundColor: "#a64dff",
    borderRadius: 15,
  },
  transplant: {
    flexDirection: "row",
    marginLeft: 6,
    marginTop: 4,
    padding: 3,
    backgroundColor: "#ffd24d",
    borderRadius: 15,
  },
  componentBody: {
    flex: 1,
    flexDirection: "column",
  },
  sowIndoorView: {
    flex: 1,
    // borderWidth: 1,
    backgroundColor: "#7a4b0e",
  },
  sowIndoorRectangle: {
    height: "100%",
    width: "15%", //also needs to be dynamic, the width should be equal to the number of blocks (weeks) that is suggested (i.e. 2nd week of march to 3 week of april)
    backgroundColor: "#85e085",
    marginLeft: 45, //this needs to be dynamic. the view width should be broken into 52 equal portions, and depending on the starting week (determined by frost dates) the margin will increase that many blocks.
  },
  transplantRectangle: {
    height: "100%",
    width: "10%",
    backgroundColor: "#ffd24d",
    marginLeft: 80,
  },
  sowOutdoorRectangle: {
    height: "100%",
    width: "12%",
    backgroundColor: "#a64dff",
    marginLeft: 110,
  },
});


export default styles;
