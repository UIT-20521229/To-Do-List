import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, ImageBackground, StatusBar, Dimensions, TextInput, Image, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { isValidEmail, isValidPassword } from "../component/Validate";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebases";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Login() {
    const [getPasswordVisible, setPasswordVisible] = useState(false);
    const [getEmail, setEmail] = useState("");
    const [getPassWord, setPassWord] = useState("");
    const [getErrorEmail, setErrorEmail] = useState("");
    const [getErrorPassWord, setErrorPassWord] = useState("");
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const navigation = useNavigation();
    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, getEmail, getPassWord)
            .then(() => {
                alert("Account created!");
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, getEmail, getPassWord)
            .then(() => {
                console.log("Sign In!");
                navigation.navigate("BottomTabs");
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <ImageBackground style={{ height: "100%", width: "100%" }} source={require("../images/4882066.jpg")}>
            <StatusBar />
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ width: "100%", height: "100%" }}>
                    <View style={styles.container}>
                        {/* Email */}
                        <View style={styles.email}>
                            <Text style={styles.textEmail}>Email</Text>
                            <TextInput
                                style={styles.emailInput}
                                autoCapitalize="none"
                                value={getEmail}
                                onChangeText={(text) => {
                                    setErrorEmail(isValidEmail(text) == true ? "" : "Email not incorrect format");
                                    setEmail(text);
                                }}></TextInput>
                        </View>
                        <View style={styles.validate}>
                            <Text style={{ color: "red", alignSelf: "flex-end", fontWeight: 'bold', fontSize: 15 }}>{getErrorEmail}</Text>
                        </View>
                        {/* Password */}
                        <View style={styles.pass}>
                            <Text style={styles.textPassword}>Password</Text>
                            <TextInput
                                style={styles.passInput}
                                value={getPassWord}
                                secureTextEntry={getPasswordVisible ? false : true}
                                autoCapitalize="none"
                                onChangeText={(pass) => {
                                    setErrorPassWord(isValidPassword(pass) == true ? "" : "Password must be >= 6 characters");
                                    setPassWord(pass);
                                }}></TextInput>
                            {/* Hide & Show */}
                            <TouchableOpacity
                                style={{
                                    height: "100%",
                                    width: 30,
                                    position: "absolute",
                                    right: 0,
                                }}
                                onPress={() => {
                                    setPasswordVisible(!getPasswordVisible);
                                }}>
                                {getPasswordVisible ? (
                                    <Feather style={styles.showPassword} name="eye" size={24} color="black" />
                                ) : (
                                    <Feather style={styles.hidePassword} name="eye-off" size={24} color="black" />
                                )}
                            </TouchableOpacity>
                        </View>
                        <View style={styles.validate}>
                            <Text style={{ color: "red", alignSelf: "flex-end", fontWeight: 'bold', fontSize: 15 }}>{getErrorPassWord}</Text>
                        </View>
                        {/* Login & Register */}
                        <View style={styles.containerLoginRegister}>
                            <TouchableOpacity style={styles.login} onPress={handleSignIn}>
                                <Text style={{ fontWeight: "bold" }}>Sign In</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.register} onPress={handleSignUp}>
                                <Text style={{ fontWeight: "bold" }}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "20%",
        marginTop: 0.3 * windowHeight,
        alignItems: "center",
    },
    textEmail: {
        color: "white",
        fontWeight: "bold",
        fontSize: 17,
        alignSelf: "flex-start",
        marginBottom: 15,
        marginLeft: 30
    },
    textPassword: {
        color: "white",
        fontWeight: "bold",
        fontSize: 17,
        alignSelf: "flex-start",
        marginBottom: 15,
        marginLeft: 30
    },
    email: {
        width: "70%",
        height: 50,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
    },
    emailInput: {
        color: "white",
        height: "70%",
        width: "80%",
        borderColor: "white",
        borderWidth: 1.5,
        textAlign: "right",
        borderRadius: 10,
        paddingRight: 10,
        fontSize: 16
    },
    pass: {
        width: "70%",
        height: 50,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 5
    },
    passInput: {
        color: "white",
        height: "70%",
        width: "80%",
        borderColor: "white",
        borderWidth: 1.5,
        textAlign: "right",
        paddingRight: 40,
        borderRadius: 10,
        fontSize: 16
    },
    showPassword: {
        color: "white",
        fontWeight: "bold",
        height: "100%",
        width: "100%",
        position: "absolute",
        top: 43,
        right: 30
    },
    hidePassword: {
        color: "white",
        fontWeight: "bold",
        height: "100%",
        width: "100%",
        position: "absolute",
        top: 43,
        right: 30
    },
    containerLoginRegister: {
        width: "100%",
        height: "100%",
        borderColor: "white",
        marginTop: 0.02 * windowHeight,
        justifyContent: "center",
        alignItems: "center",
    },
    login: {
        width: "60%",
        height: "30%",
        borderColor: "white",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#97FFFF",
        borderRadius: 100,
    },
    register: {
        width: "60%",
        height: "30%",
        borderColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        backgroundColor: "#97FFFF",
        marginTop: 15,
    },
    validate: {
        width: "70%",
        height: "20%",
        marginTop: 40,
        marginRight: 55
    },
});
