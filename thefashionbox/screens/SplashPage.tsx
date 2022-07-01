import * as React from 'react'
import {StyleSheet, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

//Components
import Login from '../components/Login'
import Write from '../components/Typewriter'

export default function SplashPage() {

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <Write/>
                <Login />
            </View>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f67978'},
 
})