import {
    View,
    SafeAreaView,
    Text,
    TouchableOpacity,
    Image,
    FlatList,
    StyleSheet,
  } from 'react-native';
  import React from 'react';
  import {
    COLORS,
    FONTS,
    SIZES,
    PRODUCT_CONTAINER_SHADOWS,
  } from '../../../common/Styles';

  const styles = StyleSheet.create({
    order__summary: {
      paddingVertical: SIZES.margin * 2,
      borderTopColor: COLORS.secondaryColor,
      borderTopWidth: 2,
    },
    order__summary__title: {
      fontFamily: FONTS.boldFont,
      fontSize: FONTS.h4,
      color: COLORS.primaryColor,
    },
    order__summary__row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: SIZES.margin
    },
    order__summary__heading: {
      fontFamily: FONTS.boldFont,
      fontSize: FONTS.h6,
      color: COLORS.primaryColor,
    },
    order__summary__value: {
      fontFamily: FONTS.boldFont,
      fontSize: FONTS.h6,
      color: 'gray',
    },
  });
export default function CartSummary() {
  return (
    <View style={styles.order__summary}>
    <Text style={styles.order__summary__title}>Order summary</Text>
    <View style={styles.order__summary__row}>
      <Text style={styles.order__summary__heading}>Subtotal</Text>
      <Text style={styles.order__summary__value}>$699.99</Text>
    </View>
    <View style={styles.order__summary__row}>
      <Text style={styles.order__summary__heading}>Shipping</Text>
      <Text style={styles.order__summary__value}>$5.99</Text>
    </View>
    <View style={styles.order__summary__row}>
      <Text style={styles.order__summary__heading}>Discount</Text>
      <Text style={styles.order__summary__value}>-$12.99</Text>
    </View>
    <View
      style={[
        styles.order__summary__row,
        {borderTopColor: COLORS.primaryColor, borderTopWidth: 3},
      ]}>
      <Text style={styles.order__summary__heading}>Grandtotal</Text>
      <Text style={[styles.order__summary__value,{color: COLORS.primaryColor}]}>$699.99</Text>
    </View>
  </View>
  )
}