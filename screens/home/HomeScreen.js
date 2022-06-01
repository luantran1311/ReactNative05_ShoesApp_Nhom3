import {
  SafeAreaView,
  Image,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import CategoryList from '../../components/CategoryList';
import FeaturedProductList from './components/FeaturedProductList';
import LatestShoesList from './components/LatestShoesList';
import {COLORS, FONTS, SIZES} from '../../common/Styles';

import Svg, {Path} from 'react-native-svg';

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingBottom: 60,
        backgroundColor: COLORS.secondaryColor,
        position: 'relative',
      }}>
      <View
        style={{
          width: '100%',
          height: 150,
          position: 'absolute',
          top: 0,
          backgroundColor: COLORS.primaryColor,
        }}>
        <Svg
          viewBox="0 0 1440 320"
          style={{width: '100%', height: '100%', marginTop: SIZES.margin * 14}}>
          <Path
            fill="#111014"
            fill-opacity="1"
            d="M0,192L40,208C80,224,160,256,240,266.7C320,277,400,267,480,229.3C560,192,640,128,720,122.7C800,117,880,171,960,170.7C1040,171,1120,117,1200,122.7C1280,128,1360,192,1400,224L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></Path>
        </Svg>
      </View>

      {/* Page title */}
      <Text
        style={{
          color: COLORS.white,
          fontFamily: FONTS.boldFont,
          fontSize: FONTS.h1,
        }}>
        Athletic Shoes Collection
      </Text>

      {/* Menu bar */}
      <CategoryList />

      {/* Featured product */}
      <FeaturedProductList />

      {/* Latest shoes */}
      <LatestShoesList />
    </SafeAreaView>
  );
}
