import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import CheckoutHeader from './components/CheckoutHeader';
import {useNavigation} from '@react-navigation/native';
import {
  COLORS,
  FONTS,
  SIZES,
  PRODUCT_CONTAINER_SHADOWS,
} from '../../common/Styles';
import {Dimensions} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faMoneyBillTransfer
} from '@fortawesome/free-solid-svg-icons';
import {
faCreditCard,
} from '@fortawesome/free-regular-svg-icons';
import {ScrollView} from 'react-native-gesture-handler';
import CartSummary from './components/CartSummary';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
import RadioGroup from 'react-native-radio-buttons-group';
import CheckoutPayment from './components/CheckoutPayment';

const styles = StyleSheet.create({
  payment__row: {
    flexDirection: 'row',
    alignItems:'center'
  },
  payment__text: {
    fontFamily: FONTS.boldFont,
    fontSize: FONTS.text,
    color: COLORS.primaryColor
  },
  btn: {
    backgroundColor: COLORS.primaryColor,
    borderRadius: SIZES.radius,
    width: '100%',
    marginBottom: SIZES.margin,
    ...PRODUCT_CONTAINER_SHADOWS,
  },
  btn__text: {
    color: COLORS.white,
    padding: SIZES.margin * 2,
    textTransform: 'uppercase',
    fontFamily: FONTS.boldFont,
    fontSize: FONTS.h6,
    textAlign: 'center',
  },
  btn__secondary: {
    backgroundColor: COLORS.white,
  },
  btn__text__secondary: {
    color: COLORS.primaryColor,
  },
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
    paddingVertical: SIZES.margin,
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

const radioButtonsData = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: (
      <View style={styles.payment__row}>
        <FontAwesomeIcon icon={faMoneyBillTransfer} size={40} />
        <Text style={styles.payment__text}>Bank deposit</Text>
      </View>
    ),
    value: 'bankdeposit',
  },
  {
    id: '2',
    label: (
      <View style={styles.payment__row}>
        <FontAwesomeIcon icon={faCreditCard} size={40} />
        <Text style={styles.payment__text}>Credit card</Text>
      </View>
    ),
    value: 'creditcard',
  },
];


export default function CheckoutScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <CheckoutHeader screenTitle={'Checkout'} />
      <ScrollView style={{padding: SIZES.margin}}>

        <CheckoutPayment />
        <CartSummary />

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('OrderSuccess_Stack')}>
          <Text style={styles.btn__text}>Place order</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
