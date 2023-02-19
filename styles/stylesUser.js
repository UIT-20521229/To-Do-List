import { StyleSheet,Dimensions } from "react-native";
import color from "../contain/color";
const stylesUser = StyleSheet.create({
  userBody: {
    height: 200,
    borderBottomLeftRadius: 170,
    borderBottomRightRadius: 170,

  },
  img: {
    position: 'absolute',
    width: Dimensions.get('screen').width,
    height: 140,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20

  },
  userText: {
    alignItems: 'center',
    fontSize: 20,
    marginVertical: 15,
  },
  userFrame: {
    height: 80,
    width: 80,
    borderRadius: 80,
    borderWidth: 1,
    borderColor: color.lightblue,
    marginTop: 80,
    backgroundColor: color.lightblue,
    alignItems: 'center',
    justifyContent: 'center'
  },
  userIcon: {
    fontSize: 30
  },
  textHeader: {
    marginTop: 20,
    fontWeight: "800",
    color: "#666666",
    fontSize: 20,
    marginHorizontal: 5
  },
  boxContent: {
    width: 160,
    height: 100,
    backgroundColor: color.lightblue,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  count: {
    fontSize: 30,
    fontWeight: "600",
  },
  Text: {
    fontSize: 16,
    color: "#666666",
  },
});

export default stylesUser;
