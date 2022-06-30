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
  import {
    COLORS,
    FONTS,
    SIZES,
    PRODUCT_CONTAINER_SHADOWS,
  } from '../../../common/Styles';
  import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
  import {
    faMoneyBillTransfer
  } from '@fortawesome/free-solid-svg-icons';
  import {
  faCreditCard,
  } from '@fortawesome/free-regular-svg-icons';
  import RadioGroup from 'react-native-radio-buttons-group';
  
  const styles = StyleSheet.create({
    payment__row: {
      flexDirection: 'row',
      alignItems:'center'
    },
    payment__text: {
      fontFamily: FONTS.boldFont,
      fontSize: FONTS.text,
      color: COLORS.primaryColor,
      paddingLeft: SIZES.margin
    },
    payment__title: {
      fontFamily: FONTS.boldFont,
      fontSize: FONTS.h4,
      color: COLORS.primaryColor,
    }
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

  
export default function CheckoutPayment() {
    const [radioButtons, setRadioButtons] = useState(radioButtonsData);

    function onPressRadioButton(radioButtonsArray) {
      setRadioButtons(radioButtonsArray);
    }

  return (
    <View style={styles.payment__method}>
        <Text style={styles.payment__title}>Payment method</Text>
        <RadioGroup radioButtons={radioButtons} onPress={onPressRadioButton} layout='row' />
    </View>
  )
}