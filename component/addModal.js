import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { React, useState } from "react";
import { AntDesign, Ionicons, Foundation, FontAwesome, Entypo } from "@expo/vector-icons";
import color from "../contain/color";
import { TextInput } from "react-native-gesture-handler";
import tempData from "./../contain/tempData";
import { useTranslation, initReactI18next } from "react-i18next";

const AddModaltodo = (props) => {
  const { t } = useTranslation("modal");
  const [state, setState] = useState({ name: "" });
  // push todo in data
  const creatTodo = () => {
    const { name, color } = state;
    tempData.push({
      name,
    });
    setState({ name: "" });
    props.closeModal();
  };

  // close modal
  const closeModal = () => {
    props.closeModal();
  };

  return (
    <View>
      {/* Icon close */}
      <TouchableOpacity onPress={closeModal}>
        <Ionicons name="md-close-outline" style={{ alignSelf: "flex-end", fontSize: 30 }} />
      </TouchableOpacity>

      {/* Text header */}
      <View style={{ alignItems: "center", justifyContent: "center", marginVertical: 200 }}>
        <Text style={style.title}>{t("translation.header")}</Text>
        {/* TextInput */}
        <TextInput style={[style.input]} placeholder={t("translation.placeholder")} onChangeText={(text) => setState({ name: text })} />

        {/* Create Button */}
        <View>
          <TouchableOpacity style={[style.create]} onPress={creatTodo}>
            <Text style={{ fontWeight: "800", color: "white", fontSize: 20 }}>{t("translation.create")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
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
    backgroundColor: "blue",
  },
  colorSheet: {
    width: 30,
    height: 30,
    borderRadius: 4,
    marginHorizontal: 10,
    marginBottom: 13,
  },
});
export default AddModaltodo;
