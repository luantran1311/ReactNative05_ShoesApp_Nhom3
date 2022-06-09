import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import StaggeredList from '@mindinventory/react-native-stagger-view';
import {COLORS, FONTS, PRODUCT_CONTAINER_SHADOWS, SIZES} from '../../../common/Styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faXmark,
  faSliders,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
// import { emptyHeart, fullHeart } from '../../../assets/images'

const emptyHeart = require('../../../assets/images/empty_heart.png')
const fullHeart = require('../../../assets/images/full_heart.png')

function CategoryItems(props) {
    const item = props.item;
    const navigation = props.navigation;
    return (
      <View
        style={{
          padding: SIZES.margin,
        }}>
        <View
          style={{
            backgroundColor: COLORS.white,
            position: 'relative',
            borderRadius: SIZES.radius,
            padding: SIZES.margin,
            ...PRODUCT_CONTAINER_SHADOWS
          }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Detail_Stack', {productId: item.id})
            }>
            {/* wish list icon */}
            <TouchableOpacity style={{position: 'absolute', right: 0, top: 0}}>
            <Image source={emptyHeart} style={{width: 16, height: 12}} />
            </TouchableOpacity>
            <Image style={{width: 175, height: 175}} source={{uri: item.image}} />
  
            {/* product name */}
            <Text
              style={{
                color: COLORS.primaryColor,
                fontFamily: FONTS.boldFont,
                fontSize: FONTS.h6,
              }}>
              {item.name}
            </Text>
  
            {/* price */}
            <Text
              style={{
                fontFamily: FONTS.mediumFont,
                color: COLORS.primaryColor,
                fontSize: FONTS.h6,
              }}>
              ${item.price.toFixed(2)}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

export default function CategoryProductGrid(props) {

    const productList = props.data;
    const navigation = props.navigation;
  return (
    <StaggeredList
    data={productList}
    animationType={'FADE_IN_FAST'}
    showsHorizontalScrollIndicator={false}
    renderItem={item => (
      <CategoryItems item={item.item} navigation={navigation} />
    )}
  />
  )
}