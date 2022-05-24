import React from 'react';
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

const Tab = createBottomTabNavigator();

export default function CustomBottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel: false}}>
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <FontAwesomeIcon icon={faHome} />,
        }}
      />

      <Tab.Screen
        name="SearchTab"
        component={CategoryScreen}
        options={{
          tabBarIcon: () => <FontAwesomeIcon icon={faMagnifyingGlass} />,
        }}
      />

      <Tab.Screen
        name="CategoryTab"
        component={CategoryScreen}
        options={{
          tabBarIcon: () => <FontAwesomeIcon icon={faPlus} />,
        }}
      />

      <Tab.Screen
        name="CartTab"
        component={CartScreen}
        options={{
          tabBarIcon: () => <FontAwesomeIcon icon={faCartShopping} />,
        }}
      />

      <Tab.Screen
        name="AccountTab"
        component={LoginScreen}
        options={{
          tabBarIcon: () => <FontAwesomeIcon icon={faUser} />,
        }}
      />
    </Tab.Navigator>
  );
}
