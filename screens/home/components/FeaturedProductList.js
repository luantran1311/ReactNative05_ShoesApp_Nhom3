import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { COLORS, FONTS, PRODUCT_CONTAINER_SHADOWS, SIZES } from '../../../common/Styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { fetchProducts } from '../HomeThunks';
// import { emptyHeart, fullHeart } from '../../../assets/images'


const emptyHeart = require('../../../assets/images/empty_heart.png')
const fullHeart = require('../../../assets/images/full_heart.png')

export default function FeaturedProductList() {

  const dataProduct = useSelector((state) => state.home.dataProduct)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  const renderItem = ({ item }) => (
    <View
      style={{
        margin: SIZES.margin,
        padding: SIZES.margin * 2,
        position: 'relative',
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius,
        width: 220,
        ...PRODUCT_CONTAINER_SHADOWS
      }}>
      <TouchableOpacity
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
        onPress={() => console.log('renderFeaturedItems pressed')}>
        {/* wish list icon */}
        <TouchableOpacity style={{ position: 'absolute', right: 0, top: 0 }}>
          <Image source={emptyHeart} style={{width: 16, height: 12}} />
        </TouchableOpacity>
        <Image style={{ width: 200, height: 150 }} source={{ uri: item.image }} />

        {/* product name */}
        <Text
          style={{
            color: COLORS.primaryColor,
            fontFamily: FONTS.boldFont,
            fontSize: FONTS.h3,

          }}>
          {item.name}
        </Text>

        {/* price */}
        <Text style={{ fontFamily: FONTS.boldFont, color: COLORS.primaryColor, fontSize: FONTS.h5 }}>${item.price.toFixed(2)}</Text>

        {/* variations */}
        <Text>SIZES</Text>
        <Text>{item.size}</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <FlatList
      horizontal
      data={dataProduct}
      renderItem={renderItem}
      keyExtractor={(item) => String(item.id)}
      showsHorizontalScrollIndicator={false}
    />
  );
}
