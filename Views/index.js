import React, { Component, useContext } from "react";
import { View, Text, SafeAreaView } from "react-native";
import Login from "./Login";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import Setting from "./Setting";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import User from "./User";
import Calendar from "./Calendar";
import { AntDesign, Ionicons, Foundation, FontAwesome, Entypo } from "@expo/vector-icons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useTranslation, initReactI18next } from "react-i18next";
import themeContext from "../config/themeContext";

const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// const HomeDrawer = () => {
//   return (
//     <Drawer.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
//       <Drawer.Screen name="HomeScreen" component={HomeScreen}></Drawer.Screen>
//       <Drawer.Screen name="Setting" component={Setting}></Drawer.Screen>
//     </Drawer.Navigator>
//   );
// };

const BottomTabs = () => {
    const { t, i18n } = useTranslation("Index");
    const language = i18n.changeLanguage(language)
    const theme = useContext(themeContext)
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: {backgroundColor: theme.background}}}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: t("translation.home"),
                    tabBarLabelStyle: {color: theme.color},
                    tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={theme.color} size={size} />,
                }}
            />
            <Tab.Screen
                name="Calendar"
                component={Calendar}
                options={{
                    tabBarLabel: t("translation.cal"),
                    tabBarLabelStyle: {color: theme.color},
                    tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="calendar-month-outline" color={theme.color} size={size} />,
                }}
            />

            <Tab.Screen
                name="User"
                component={User}
                options={{
                    tabBarLabel: t("translation.user"),
                    tabBarLabelStyle: {color: theme.color},
                    tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account" color={theme.color} size={size} />,
                }}
            />
            <Tab.Screen
                name="Setting"
                component={Setting}
                options={{
                    tabBarLabel: t("translation.setting"),
                    tabBarLabelStyle: {color: theme.color},
                    tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="cog" color={theme.color} size={size} />,
                }}
            />
        </Tab.Navigator>
    );
};
export default function RootComponent() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                {/* <Stack.Screen name="HomeDrawer" component={HomeDrawer} /> */}
                <Stack.Screen name="BottomTabs" component={BottomTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
