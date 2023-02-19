import { Text, View, SafeAreaView, Dimensions, ImageBackground, Image, TouchableOpacity } from "react-native";
import React, { Component, useState, useEffect, useContext } from "react";
import { VictoryChart, VictoryGroup, VictoryBar, VictoryLegend, VictoryAxis } from "victory-native";
import tempData from "./../contain/tempData";
import color from "./../contain/color";
import stylesUser from "../styles/stylesUser";
import { FontAwesome } from "@expo/vector-icons";
import themeContext from "../config/themeContext";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebases";

const a = tempData.length;
const completecount = tempData.filter((todo) => todo.completed).length;
const remaincount = a - completecount;
const Data = {
    planned: [null, { x: "Mon", y: completecount }],
    actual: [
        { x: "Mon", y: a },
        { x: "Tue", y: 0 },
        { x: "Wed", y: 0 },
        { x: "Thur", y: 0 },
        { x: "Fri", y: 0 },
        { x: "Sat", y: 0 },
        { x: "Sun", y: 0 },
    ],
};

export default function User() {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const theme = useContext(themeContext)
    return (
        <SafeAreaView style={{backgroundColor: theme.background}}>
            <View style={stylesUser.userBody}>
                <Image source={require("../assets/bg_lightblue.png")} style={[stylesUser.img]} />
                <TouchableOpacity>
                    <View style={stylesUser.userText}>
                        <View style={stylesUser.userFrame}>
                            <FontAwesome name="user-o" style={stylesUser.userIcon} />
                        </View>
                        <Text style={[stylesUser.userText, {color: theme.color}]}>{auth.currentUser?.email}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={stylesUser.textHeader}>
                <Text style={[stylesUser.textHeader, {color: theme.color}]}> Mission Overview</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <View style={stylesUser.boxContent}>
                    <Text style={stylesUser.count}>{completecount}</Text>
                    <Text style={stylesUser.Text}>Completed</Text>
                </View>
                <View style={stylesUser.boxContent}>
                    <Text style={stylesUser.count}>{remaincount}</Text>
                    <Text style={stylesUser.Text}>Remaining</Text>
                </View>
            </View>
            <View style={{ backgroundColor: color.lightblue, borderRadius: 20, marginHorizontal: 10 }}>
                <VictoryChart
                    animate={{
                        duration: 2000,
                        onLoad: { duration: 100 },
                    }}>
                    {/* <VictoryAxis label={"Day"} style = {{ axisLabel:{ padding : 35 , fill: 'red'}}}/>
        <VictoryAxis dependentAxis label={"Misson"} style = {{ axisLabel:{ padding : 30 , fill: 'red' }}}/> */}
                    <VictoryGroup offset={10}>
                        <VictoryBar
                            data={Data.actual}
                            style={{
                                data: {
                                    fill: "blue",
                                },
                            }}
                        />
                        <VictoryBar
                            data={Data.planned}
                            style={{
                                data: {
                                    fill: "orange",
                                },
                            }}
                        />
                    </VictoryGroup>
                    <VictoryLegend
                        x={Dimensions.get("screen").width / 2 - 100}
                        orientation="horizontal"
                        gutter={20}
                        data={[
                            {
                                name: "Misson",
                                symbol: { fill: "blue" },
                            },
                            {
                                name: "Completed",
                                symbol: { fill: "orange" },
                            },
                        ]}
                    />
                </VictoryChart>
            </View>
        </SafeAreaView>
    );
}
