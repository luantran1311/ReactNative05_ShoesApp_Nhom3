import React from 'react'
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home/HomeScreen';
import CategoryScreen from './screens/category/CategoryScreen';
import CustomBottomTabNavigator from './navigations/Tab';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home_Stack" component={CustomBottomTabNavigator} />
        <Stack.Screen name="Category_Stack" component={CategoryScreen} />
        <Stack.Screen name="Detail_Stack" component={CategoryScreen} />
        <Stack.Screen name="Cart_Stack" component={CategoryScreen} />
        <Stack.Screen name="Checkout_Stack" component={CategoryScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}