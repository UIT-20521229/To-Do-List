import { StyleSheet } from "react-native";
import { View, Text } from 'react-native'
import color from "../contain/color";
const stylesModalTodo = StyleSheet.create ( {
    title: {
        fontSize: 28,
        fontWeight: "800",
        color: color.lightblue,
        alignSelfL: "center",
        marginBottom: 16,
      },
      input: {
        borderWidth: 2,
        borderColor: color.lightblue,
        paddingHorizontal: 10,
        width: 280,
        borderRadius: 6,
        height: 50,
        marginHorizontal: 16,
        fontSize: 18,
        marginBottom: 20,
      },
      create: {
        width: 280,
        height: 50,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        backgroundColor: 'blue'
      },
      colorSheet: {
        width: 30,
        height: 30,
        borderRadius: 4,
        marginHorizontal: 10,
        marginBottom: 13
      }
})

export default stylesModalTodo