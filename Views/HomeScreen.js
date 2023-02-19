import React, { Component, useContext, useState } from "react";
import { View, Alert, Text, Modal, Animated, SafeAreaView, TouchableOpacity, TextInput, Image, Button, TextComponent, FlatList, ScrollView, BackHandler } from "react-native";
import { AntDesign, Ionicons, FontAwesome5, FontAwesome, Entypo, Feather } from "@expo/vector-icons";
import "react-native-reanimated";
import { MotiView } from "moti";
import stylesHome from "../styles/stylesHome";
import tempData from "../contain/tempData";
import Todolist from "./../component/todolist";
import AddModaltodo from "../component/addModal";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import color from "../contain/color";
import "./i18n";
import { useTranslation, initReactI18next } from "react-i18next";

import themeContext from "../config/themeContext";
const Tab = createBottomTabNavigator();

export default function HomeScreen({ navigation }) {
    BackHandler.addEventListener("hardwareBackPress", function () {
        return true;
    });

    const theme = useContext(themeContext);

    const [State, setState] = useState(tempData);
    const updatelist = (list) => {
        setState(
            tempData.map((item) => {
                return tempData.id === tempData.id ? list : item;
            })
        );
    };
    const a = tempData.length;
    const completecount = tempData.filter((todo) => todo.completed).length;
    const remaincount = a - completecount;
    const toggleAddModal = () => {
        setState(!State);
    };
    const toggletodocompleted = (index) => {
        tempData[index].completed = !tempData[index].completed;
        updatelist();
    };
    const deletetask = (index) => {
        Alert.alert(t("translation.title"), t("translation.text"), [
            {
                text: t("translation.ok"),
                onPress: () => {
                    let list = tempData;
                    tempData.splice(index, 1);
                    updatelist(tempData);
                },
            },
            {
                text: t("translation.cancel"),
                onPress: "",
            },
        ]);
    };
    const renderlist = (list, index) => {
        return (
            <View style={{ flexDirection: "row" }}>
                {/* handle CheckBox */}
                <TouchableOpacity
                    onPress={() => {
                        toggletodocompleted(index);
                    }}>
                    <FontAwesome5 name={list.completed ? "check-circle" : "circle"} style={[stylesHome.checkbox, { color: list.completed ? color.gray : color.lightblue }, { color: theme.color }]} />
                </TouchableOpacity>
                {/* Todolist */}
                <Todolist list={list} index={index} />
                {/* Delete box */}
                <TouchableOpacity
                    onPress={() => {
                        deletetask(index);
                    }}>
                    <AntDesign name="delete" style={[stylesHome.delete, { color: list.completed ? color.gray : color.red }]} />
                </TouchableOpacity>
            </View>
        );
    };
    // change Language options
    const { t, i18n } = useTranslation(["home", "alert"]);
    i18n.changeLanguage();
    return (
        <View style={[stylesHome.container, { backgroundColor: theme.background }]}>
            {/* Modal add task ---------------------------------*/}

            <Modal
                animationType="slide"
                visible={State}
                onRequestClose={() => {
                    toggleAddModal;
                }}>
                <AddModaltodo closeModal={toggleAddModal} />
            </Modal>

            {/* Switch Changelanguage ---------------------------------*/}

            {/* Text Header ---------------------------------*/}
            <View style={stylesHome.header}>
                <View style={stylesHome.backgroundheader}>
                    <Text style={[stylesHome.textHeader, { color: theme.color }]}>
                        ToDo <Text style={{ fontWeight: "800", color: color.lightblue }}>Lists</Text>
                    </Text>

                    {/* line */}
                </View>
                <Text style={stylesHome.line} />
            </View>

            {/* content */}

            <TouchableOpacity onPress={() => setState(true)}>
                <Ionicons name="add-circle-sharp" style={[stylesHome.addIcon]} />
            </TouchableOpacity>

            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={[stylesHome.textBody, { color: theme.color }]}>{t("translation.page")}</Text>
            </View>

            <View style={stylesHome.textfinish}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={[stylesHome.sub, { color: theme.color }]}>{t("translation.todo")}:</Text>
                    <Text style={[stylesHome.sub, { color: theme.color }]}>{a}</Text>
                </View>
                <Text style={stylesHome.sub}>|</Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={[stylesHome.sub, { color: theme.color }]}>{t("translation.completed")}:</Text>
                    <Text style={[stylesHome.sub, { color: theme.color }]}>{completecount}</Text>
                </View>
                <Text style={[stylesHome.sub, { color: theme.color }]}>|</Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={[stylesHome.sub, { color: theme.color }]}>{t("translation.remain")}:</Text>
                    <Text style={[stylesHome.sub, { color: theme.color }]}>{remaincount}</Text>
                </View>
            </View>
            {/* Show Task ---------------------------------*/}

            <View style={{ flex: 1 }}>
                <FlatList data={tempData} keyExtractor={(item) => item.name} renderItem={({ item, index }) => renderlist(item, index)} />
            </View>
        </View>
    );
}
