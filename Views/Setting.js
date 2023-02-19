import { React, useState, useContext } from "react";
import { StyleSheet, SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, Switch } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { EventRegister } from "react-native-event-listeners";
import themeContext from "../config/themeContext";
import { useTranslation, initReactI18next } from "react-i18next";
import SelectDropdown from "react-native-select-dropdown";
import "../Views/i18n";
import SwitchSelector from "react-native-switch-selector";

export default function Example() {
    const { t, i18n } = useTranslation("Setting");
    // options switch change language
    const options = [
        { label: "english", value: "English" },
        { label: "vietnam", value: "Vietnamese" },
    ];
    const language = [options[0].value, options[1].value]
    const SECTIONS = [
        {
            header: t("translation.pre"),
            items: [
                { id: "language", icon: "globe", label: t("translation.lang"), type: "select" },
                { id: "darkMode", icon: "moon", label: t("translation.mode"), type: "toggle" },
            ],
        },
        {
            header: t("translation.help"),
            items: [
                { id: "bug", icon: "flag", label: t("translation.report"), type: "link" },
                { id: "contact", icon: "mail", label: t("translation.contact"), type: "link" },
            ],
        },
        {
            header: t("translation.content"),
            items: [
                { id: "save", icon: "save", label: t("translation.save"), type: "link" },
                { id: "download", icon: "download", label: t("translation.down"), type: "link" },
            ],
        },
    ];

    const theme = useContext(themeContext);

    const [mode, setMode] = useState(false);

    return (
        <SafeAreaView style={{ backgroundColor: theme.background, height: "100%" }}>          
            <ScrollView contentContainerStyle={[styles.container]}>
                <View style={styles.header}>
                    <Text style={[styles.title, { color: theme.color }]}>{t("translation.setting")}</Text>
                </View>

                {SECTIONS.map(({ header, items }) => (
                    <View style={styles.section} key={header}>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionHeaderText}>{header}</Text>
                        </View>
                        <View style={styles.sectionBody}>
                            {items.map(({ id, label, icon, type, value }, index) => {
                                return (
                                    <View key={id} style={[styles.rowWrapper, { backgroundColor: theme.background }, index === 0 && { borderTopWidth: 0 }]}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                // handle onPress
                                            }}>
                                            <View style={styles.row}>
                                                <FeatherIcon color="#616161" name={icon} style={styles.rowIcon} size={22} />

                                                <Text style={[styles.rowLabel, { color: theme.color }]}>{label}</Text>

                                                <View style={styles.rowSpacer} />

                                                {type === "select" && (
                                                    <SelectDropdown
                                                        data={language}
                                                        buttonStyle={{ backgroundColor: theme.background }}
                                                        buttonTextStyle={{ color: theme.color }}
                                                        onSelect={(language) => {
                                                            i18n.changeLanguage(language);
                                                        }}
                                                        buttonTextAfterSelection={(selectedItem, index) => {   
                                                            // text represented after item is selected
                                                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                                                            return selectedItem;
                                                        }}
                                                        rowTextForSelection={(item, index) => {
                                                            // text represented for each item in dropdown
                                                            // if data array is an array of objects then return item.property to represent item in dropdown
                                                            return item;
                                                        }}
                                                    />
                                                )}

                                                {type === "toggle" && (
                                                    <Switch
                                                        value={mode}
                                                        onValueChange={(value) => {
                                                            setMode(value);
                                                            EventRegister.emit("changeTheme", value);
                                                        }}
                                                    />
                                                )}

                                                {(type === "select" || type === "link") && <FeatherIcon color="#ababab" name="chevron-right" size={22} />}
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                );
                            })}
                        </View>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 24,
    },
    switchLanguage: {
        width: 100,
    },
    section: {
        paddingTop: 12,
    },
    sectionHeader: {
        paddingHorizontal: 24,
        paddingVertical: 8,
    },
    sectionHeaderText: {
        fontSize: 14,
        fontWeight: "600",
        color: "#a7a7a7",
        textTransform: "uppercase",
        letterSpacing: 1.2,
    },
    sectionBody: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#e3e3e3",
    },
    header: {
        paddingLeft: 24,
        paddingRight: 24,
        marginBottom: 12,
    },
    title: {
        fontSize: 32,
        fontWeight: "700",
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 15,
        fontWeight: "500",
        color: "#929292",
    },
    profile: {
        padding: 16,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#e3e3e3",
    },
    profileAvatar: {
        width: 60,
        height: 60,
        borderRadius: 9999,
    },
    profileName: {
        marginTop: 12,
        fontSize: 20,
        fontWeight: "600",
        color: "#090909",
    },
    profileEmail: {
        marginTop: 6,
        fontSize: 16,
        fontWeight: "400",
        color: "#848484",
    },
    profileAction: {
        marginTop: 12,
        paddingVertical: 10,
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#007bff",
        borderRadius: 12,
    },
    profileActionText: {
        marginRight: 8,
        fontSize: 15,
        fontWeight: "600",
        color: "#fff",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingRight: 24,
        height: 50,
    },
    rowWrapper: {
        paddingLeft: 24,
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderColor: "#e3e3e3",
    },
    rowIcon: {
        marginRight: 12,
    },
    rowLabel: {
        fontSize: 17,
        fontWeight: "500",
        color: "#000",
    },
    rowValue: {
        fontSize: 17,
        color: "#616161",
        marginRight: 4,
    },
    rowSpacer: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
});
