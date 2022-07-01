import React from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { UserContext } from "./User";



export default function Login() {
    const user = React.useContext<string>(UserContext)
    return (
        <SafeAreaProvider>
            <View style={styles.container}>
            </View>
        </SafeAreaProvider>
    )
}


const styles = StyleSheet.create({
    container: {
    },
    button: {


    }
})