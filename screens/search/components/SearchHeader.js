import { View, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import {COLORS, FONTS, PRODUCT_CONTAINER_SHADOWS, SIZES} from '../../../common/Styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faXmark,
  faEllipsis
} from '@fortawesome/free-solid-svg-icons';

export default function SearchHeader({navigation}) {
  return (
    <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: SIZES.margin * 2,
      backgroundColor: COLORS.primaryColor
    }}>
    {/* <TouchableOpacity onPress={() => navigation.goBack()}>
      <FontAwesomeIcon
        style={{color: COLORS.primaryColor}}
        icon={faXmark}
        size={24}
      />
    </TouchableOpacity> */}
    <View></View>
    <Text style={{textTransform:'capitalize', fontFamily: FONTS.boldFont, fontSize:16, color: COLORS.white}}>What are you looking for?</Text>
    <TouchableOpacity onPress={() => console.log('filter pressed')}>
      <FontAwesomeIcon
        style={{color: COLORS.white}}
        icon={faEllipsis}
        size={24}
      />
    </TouchableOpacity>
  </View>
  )
}