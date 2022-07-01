import * as React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Typewriter from "typewriter-effect";


export default function Write() {
    return (
        <SafeAreaView>
            <View>
                <Typewriter
                    onInit={(type) => {
                        type.typeString("The Fashion Box")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Welcomes You")
                            .start();
                    }} />
            </View>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        textAlign: 'center'
    },

})