import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/home/HomeScreen';
import CategoryScreen from './screens/category/CategoryScreen';
import DetailScreen from './screens/detail/DetailScreen';
import CustomBottomTabNavigator from './navigations/Tab';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          options={{headerShown: false}}
          name="Home_Stack"
          component={CustomBottomTabNavigator}
        />

        <Stack.Screen options={{headerShown: false}} name="Category_Stack" component={CategoryScreen} />

        <Stack.Screen options={{headerShown: false}} name="Detail_Stack" component={DetailScreen} />

        <Stack.Screen name="Cart_Stack" component={CategoryScreen} />

        <Stack.Screen name="Checkout_Stack" component={CategoryScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
