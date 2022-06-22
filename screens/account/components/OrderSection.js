import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faWallet,
  faBox,
  faTruck,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import {COLORS, SIZES, FONTS} from '../../../common/Styles';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    paddingTop: SIZES.margin * 2,
  },
  order__text: {
    borderTopColor: COLORS.secondaryColor,
    borderTopWidth: 1,
    paddingVertical: SIZES.margin * 2,
    fontFamily: FONTS.boldFont,
    color: COLORS.primaryColor,
    fontSize: FONTS.h6,
  },
  order__status__wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btn: {
    borderRightColor: COLORS.secondaryColor,
    borderRightWidth: 2,
    paddingHorizontal: SIZES.margin
  },
  icon: {
    alignSelf: 'center',
    color: COLORS.active
  },
  text: {
    fontFamily: FONTS.boldFont,
    fontSize: FONTS.text,
    color: COLORS.primaryColor,
    paddingVertical: SIZES.margin
  },
  no__border: {
    borderRightWidth: 0
  }
});

export default function OrderSection() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.order__text}>My Orders</Text>
      {/* order status */}

      <View style={styles.order__status__wrapper}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Order_Stack')}>
          <FontAwesomeIcon style={styles.icon} icon={faWallet} />
          <Text style={styles.text}>Pending</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}  onPress={() => navigation.navigate('Order_Stack')}>
          <FontAwesomeIcon style={styles.icon} icon={faBox} />
          <Text style={styles.text}>Processing</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}  onPress={() => navigation.navigate('Order_Stack')}>
          <FontAwesomeIcon style={styles.icon} icon={faTruck} />
          <Text style={styles.text}>Shipping</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn,styles.no__border]}  onPress={() => navigation.navigate('Order_Stack')}>
          <FontAwesomeIcon style={styles.icon} icon={faCircleCheck} />
          <Text style={styles.text}>Completed</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
