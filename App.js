import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RootComponent from "./Views/index";
import { NavigationContainer } from "@react-navigation/native";
import { EventRegister } from "react-native-event-listeners";
import React, { useState, useEffect } from "react";
import themeContext from "./config/themeContext";
import theme from './config/theme';

export default function App() {
    const [mode, setMode] = useState(false);
    useEffect(() => {
        let eventListener = EventRegister.addEventListener("changeTheme", (data) => {
            setMode(data);
        });
        return () => {
            EventRegister.removeEventListener(eventListener);
        };
    });
    return (
        <themeContext.Provider value={mode === true ? theme.dark : theme.light}>
            <RootComponent />
        </themeContext.Provider>
    );
}
