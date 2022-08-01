import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import {COLORS, FONTS, PRODUCT_CONTAINER_SHADOWS, SIZES} from '../../../common/Styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faXmark,
  faSliders,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

export default function CategoryHeader({navigation}) {
    return (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: SIZES.margin * 2,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesomeIcon
              style={{color: COLORS.white}}
              icon={faXmark}
              size={24}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('filter pressed')}>
            <FontAwesomeIcon
              style={{color: COLORS.white}}
              icon={faSliders}
              size={24}
            />
          </TouchableOpacity>
        </View>
      );
}