import { StyleSheet } from "react-native";
import color from "../contain/color";

const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },

  backgroundheader: {
  
     justifyContent: "center",
     alignItems: "center" 
  },

  textHeader: {
    fontSize: 30,
    fontWeight: "800"
  },
  textBody: {
    fontSize: 20,
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "800",
    
  },
line : {
  backgroundColor: color.lightblue,
  height: 2,
  marginVertical: 10,
  borderRadius: 20,
  marginHorizontal: 5

},
  textInput: {
    // borderColor: 'lightblue',
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderWidth: 2,
    borderRadius: 20,
    height: 30,
    width: 300,
    marginTop: 10,
  },

  addIcon: {
    fontSize: 60,
    color: color.lightblue,
    position: "absolute",
    right: 10,
    top: 20,
    shadowColor: color. lightblue,
    shadowOffset: {width: 0 , height: 0},
    shadowOpacity: 1,
    shadowRadius: 10,  
    elevation: 10,
    borderRadius: 100
  },
 
  box: {
    height: 50,
    width: 50,
    backgroundColor: 'red'
  },

  checkbox: {
    fontSize: 25,
    color: "blue",
    marginVertical: 20,
    marginHorizontal: 8,
  },
  textfinish: {
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: "row",
  },
  sub: {
    marginRight: 5,
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 30,
  },
  delete: {
    fontSize: 25,
    paddingVertical: 10,
    marginVertical: 15,
  },
});

export default stylesHome;
