import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS, SIZES, FONTS, PRODUCT_CONTAINER_SHADOWS} from '../../../common/Styles';
import { useState } from 'react';

const styles = StyleSheet.create({
  wrapper: {},
  popup: {
    backgroundColor: COLORS.white,
    padding: SIZES.margin * 5,
    borderRadius: SIZES.radius * 2,
    ...PRODUCT_CONTAINER_SHADOWS,
  },
  title: {
    fontFamily: FONTS.boldFont,
    fontSize: FONTS.h5,
    color: COLORS.primaryColor,
    marginBottom: SIZES.margin * 2
  },
  btn: {
    backgroundColor: COLORS.primaryColor, borderRadius: SIZES.radius
  },
  btn__text: {
    color: COLORS.white,
    textAlign: 'center',
    padding: SIZES.margin,
    fontFamily: FONTS.boldFont,
    textTransform: 'uppercase',
    padding: SIZES.margin
  },
});

export default function CartPopup({open}) {

    const [isOpened, setOpen] = useState(open)

  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        elevation: 10,
        zIndex: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        display: isOpened ? 'flex' : 'none'
      }}>
      <View style={styles.popup}>
        <Text style={styles.title}>Product Added To Cart!</Text>
        <TouchableOpacity
            style={styles.btn}
            onPress={() => setOpen(0)}>
            <Text
              style={styles.btn__text}>
              Continue Shopping
            </Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}
