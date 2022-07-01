// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashPage from './screens/SplashPage';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { UserContext } from './components/User';
import user from './components/Login'

const Stack = createNativeStackNavigator();

const splash = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="splash" component={SplashPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function App() {
  const user = React.createContext(UserContext)
  return (
    <UserContext.Provider value={user}>
      <SafeAreaProvider>
      {splash()}
      </SafeAreaProvider>
    </UserContext.Provider>


  );
}

export default App;