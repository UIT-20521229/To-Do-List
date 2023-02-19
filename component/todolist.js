import { View, Animated, Text, StyleSheet, Dimensions, TouchableOpacity, Modal } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import tempData from "../contain/tempData";
import { React, useState } from "react";
import { set } from "react-native-reanimated";
import color from "../contain/color";
import ModalTodo from "./ModalTodo";

const Todolist = ({ list , index }) => {
  const [Showlist, setShowlist] = useState({ Showlist: false });
  //Handle close 
  const togglelistmodal = () => {
    setShowlist(!Showlist);
  };
  
  return (
    <View>
      <Modal
        animationType="slide"
        visible={Showlist}
        onRequestClose={() => {
          togglelistmodal;
        }}
      >
        <ModalTodo list = {list} index = {index}   closeModal={ () => togglelistmodal()} />
      </Modal>
      {/* Handle Textline-through and background task */}
      <TouchableOpacity style={[style.listcontainer, { backgroundColor: list.completed ? color.lightgray : color.lightblue }]} onPress={() => setShowlist(true)}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={[style.textlist, { textDecorationLine: list.completed ? "line-through" : "none", color: list.completed ? color.gray : color.black }]}>{list.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  listcontainer: {
    backgroundColor: color.lightblue,
    marginBottom: 5,
    marginTop: 6,
    marginHorizontal: 5,
    borderRadius: 20,
    justifyContent: "center",
    width: 275,
    shadowColor: color.black,
    shadowOffset: { width: 22, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 8,
    height: 60,
  },
  textlist: {
    height: 40,
    marginHorizontal: 5,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginVertical: 10,

    fontSize: 15,
  },
});
export default Todolist;
