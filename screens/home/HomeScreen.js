import {
  SafeAreaView,
  Image,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import CategoryList from './components/CategoryList';
import FeaturedProductList from './components/FeaturedProductList';
import LatestShoesList from './components/LatestShoesList';
import { COLORS, FONTS, SIZES } from '../../common/Styles';

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:COLORS.primaryColor}}>
      {/* Page title */}
      <Text style={{color: COLORS.white, fontFamily: FONTS.boldFont, fontSize: FONTS.h1, }}>Athletic Shoes Collection</Text>

      {/* Menu bar */}
      <CategoryList />

      {/* Featured product */}
      <FeaturedProductList />

      {/* Latest shoes */}
      <LatestShoesList />
    </SafeAreaView>
  );
}
