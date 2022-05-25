import React from 'react';
import {SafeAreaView, Image, View, Text, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faMagnifyingGlass,
  faPlus,
  faCartShopping,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import CategoryScreen from '../screens/category/CategoryScreen';
import CartScreen from '../screens/checkout/CartScreen';
import LoginScreen from '../screens/account/LoginScreen';
import {SIZES, COLORS, FONTS} from '../common/Styles';

const Tab = createBottomTabNavigator();

export default function CustomBottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          margin: SIZES.margin * 2,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.primaryColor,
          position: 'absolute'
        },
        tabBarShowLabel: false
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesomeIcon
              style={{color: COLORS.secondaryColor}}
              icon={faHome}
            />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Search"
        component={CategoryScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesomeIcon
              style={{color: COLORS.secondaryColor}}
              icon={faMagnifyingGlass}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesomeIcon
              style={{color: COLORS.secondaryColor}}
              icon={faPlus}
            />
          ),
        }}
      />

      <Tab.Screen
        name="My Bag"
        component={CartScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesomeIcon
              style={{color: COLORS.secondaryColor}}
              icon={faCartShopping}
            />
          ),
        }}
      />

      <Tab.Screen
        name="My Account"
        component={LoginScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesomeIcon
              style={{color: COLORS.secondaryColor}}
              icon={faUser}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
