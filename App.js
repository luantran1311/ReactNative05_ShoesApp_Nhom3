import React from 'react';
import {Text, View} from 'react-native';
// Redux
import {Provider} from 'react-redux';
import {store} from './stores';
// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CustomBottomTabNavigator,
  HomeTabs,
  CategoryTabs,
} from './navigations/Tab';
// Srceen
import HomeScreen from './screens/home/HomeScreen';
import CategoryScreen from './screens/category/CategoryScreen';
import DetailScreen from './screens/detail/DetailScreen';
import LoginScreen from './screens/account/LoginScreen';
import PasswordResetScreen from './screens/account/PasswordResetScreen';
import RegisterScreen from './screens/account/RegisterScreen';
import {
  AccountStack,
  CartStack,
  HomeStack,
  SearchStack,
} from './navigations/Stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchScreen from './screens/search/SearchScreen';
import CartScreen from './screens/checkout/CartScreen';
import {SIZES, COLORS, FONTS} from './common/Styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faMagnifyingGlass,
  faPlus,
  faCartShopping,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              backgroundColor: COLORS.primaryColor,
              paddingBottom: SIZES.margin / 2,
            },
            tabBarLabelStyle: {
              fontFamily: FONTS.boldFont,
            }
          }}>
          <Tab.Screen
            options={{
              tabBarIcon: () => (
                <FontAwesomeIcon
                  style={{color: COLORS.secondaryColor}}
                  icon={faHome}
                />
              ),
              headerShown: false,
            }}
            name="Home"
            component={HomeStack}
          />
          <Tab.Screen
            options={{
              tabBarIcon: () => (
                <FontAwesomeIcon
                  style={{color: COLORS.secondaryColor}}
                  icon={faMagnifyingGlass}
                />
              ),
              headerShown: false,
            }}
            name="Search"
            component={SearchStack}
          />
          <Tab.Screen
            options={{
              tabBarIcon: () => (
                <FontAwesomeIcon
                  style={{color: COLORS.secondaryColor}}
                  icon={faCartShopping}
                />
              ),
              headerShown: false,
            }}
            name="My Cart"
            component={CartStack}
          />
          <Tab.Screen
            options={{
              tabBarIcon: () => (
                <FontAwesomeIcon
                  style={{color: COLORS.secondaryColor}}
                  icon={faUser}
                />
              ),
              headerShown: false,
            }}
            name="My Account"
            component={AccountStack}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
