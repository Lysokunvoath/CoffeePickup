
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from './pages/LandingScreen';
import LoginScreen from './pages/LoginScreen';
import CusHomeScreen from './pages/Customer/CusHomeScreen';
import MenuScreen from './pages/Customer/MenuScreen';
import ItemCustomize from './pages/Customer/ItemCustomize';
import PayScreen from './pages/Customer/PayScreen';
import PickupScreen from './pages/Customer/PickupScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CusHome" component={CusHomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Menu" component={MenuScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ItemCustomize" component={ItemCustomize} options={{ headerShown: false }} />
        <Stack.Screen name="Pay" component={PayScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Pickup" component={PickupScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
