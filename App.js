import React from 'react';
import {Text, View} from 'react-native';
// Redux
import {Provider} from 'react-redux';
import {store} from './stores';
// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CustomBottomTabNavigator from './navigations/Tab';
// Srceen
import HomeScreen from './screens/home/HomeScreen';
import CategoryScreen from './screens/category/CategoryScreen';
import DetailScreen from './screens/detail/DetailScreen';
import LoginScreen from './screens/account/LoginScreen';
import PasswordResetScreen from './screens/account/PasswordResetScreen';
import RegisterScreen from './screens/account/RegisterScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="Home_Stack"
            component={CustomBottomTabNavigator}
          />

          <Stack.Screen
            options={{headerShown: false}}
            name="Category_Stack"
            component={CustomBottomTabNavigator}
          />

          <Stack.Screen
            options={{headerShown: false}}
            name="Detail_Stack"
            component={CustomBottomTabNavigator}
          />

          <Stack.Screen name="Cart_Stack" component={CategoryScreen} />

          <Stack.Screen name="Checkout_Stack" component={CategoryScreen} />

          <Stack.Screen name="PasswordReset_Stack" component={PasswordResetScreen} />
          <Stack.Screen name="Register_Stack" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
