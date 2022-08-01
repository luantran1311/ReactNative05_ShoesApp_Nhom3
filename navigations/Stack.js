import {View, Text} from 'react-native';
import React from 'react';
// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';
import SearchScreen from '../screens/search/SearchScreen';
import CartScreen from '../screens/checkout/CartScreen';
import CheckoutScreen from '../screens/checkout/CheckoutScreen';
import LoginScreen from '../screens/account/LoginScreen';
import CategoryScreen from '../screens/category/CategoryScreen';
import DetailScreen from '../screens/detail/DetailScreen';
import RegisterScreen from '../screens/account/RegisterScreen';
import PasswordResetScreen from '../screens/account/PasswordResetScreen';
import DashboardScreen from '../screens/account/DashboardScreen';
import OrderScreen from '../screens/account/OrderScreen';
import ProfileScreen from '../screens/account/ProfileScreen';
import OrderSuccessScreen from '../screens/checkout/OrderSuccessScreen';

const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home_Stack" component={HomeScreen} />
      <Stack.Screen name="Category_Stack" component={CategoryScreen} />
      <Stack.Screen name="Detail_Stack" component={DetailScreen} />
    </Stack.Navigator>
  );
}

export function SearchStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Search_Stack" component={SearchScreen} />
    </Stack.Navigator>
  );
}

export function CartStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Cart_Stack" component={CartScreen} />
      <Stack.Screen name="Checkout_Stack" component={CheckoutScreen} />
      <Stack.Screen name="OrderSuccess_Stack" component={OrderSuccessScreen} />
      <Stack.Screen name="Home_Stack" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export function AccountStack() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login_Stack" component={LoginScreen} />
        <Stack.Screen name="Register_Stack" component={RegisterScreen} />
        <Stack.Screen name="PasswordReset_Stack" component={PasswordResetScreen} />
        <Stack.Screen name="Dashboard_Stack" component={DashboardScreen} />
        <Stack.Screen name="Order_Stack" component={OrderScreen} />
        <Stack.Screen name="Profile_Stack" component={ProfileScreen} />
      </Stack.Navigator>
    );
  }
  