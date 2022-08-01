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
  faTrashCan,
  faMinusCircle,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
import {ScrollView} from 'react-native-gesture-handler';
import CartSummary from './components/CartSummary';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const tempCartItemList = [
  {
    id: 1,
    name: 'Adidas Shoes',
    price: 69.99,
    qty: 1,
  },
  {
    id: 2,
    name: 'Adidas Shoes',
    price: 69.99,
    qty: 2,
  },
  {
    id: 3,
    name: 'Adidas Shoes',
    price: 69.99,
    qty: 1,
  },
  {
    id: 4,
    name: 'Adidas Shoes',
    price: 69.99,
    qty: 3,
  },
];

const styles = StyleSheet.create({
  gridRow: {
    width: width,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    borderBottomColor: COLORS.secondaryColor,
    borderBottomWidth: 1,
    paddingVertical: SIZES.margin,
  },
  gridRowItem: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
  },
  bold: {
    fontFamily: FONTS.boldFont,
    fontSize: 14,
    color: COLORS.primaryColor,
  },
  remove__btn: {},
  remove__btn__text: {
    color: 'red',
  },
  image: {
    width: 60,
    height: 60,
    marginRight: SIZES.margin,
  },
  itemCell: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemName: {
    fontFamily: FONTS.boldFont,
    fontSize: FONTS.h6,
    color: COLORS.primaryColor,
  },
  qty__box: {
    marginVertical: SIZES.margin,
  },
  qty__btn: {
    fontSize: 24,
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

function RenderItemGrid({item}) {
  let subTotal = item.qty * item.price;
  subTotal = subTotal.toFixed(2);

  return (
    <View style={[styles.gridRow, {paddingVertical: SIZES.margin * 3}]}>
      <View style={[{flex: 3}, styles.gridRowItem, styles.itemCell]}>
        <View>
          <Image
            style={styles.image}
            source={{uri: 'https://via.placeholder.com/150'}}
          />
        </View>
        <View>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text>${item.price}</Text>
        </View>
      </View>
      <View
        style={[
          styles.gridRowItem,
          {flex: 1, flexDirection: 'column', alignItems: 'center'},
        ]}>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faPlusCircle} size={20} />
        </TouchableOpacity>
        <Text style={styles.qty__box}>{item.qty}</Text>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faMinusCircle} size={20} />
        </TouchableOpacity>
      </View>
      <View style={[{flex: 1}, styles.gridRowItem]}>
        <Text>${subTotal}</Text>
      </View>
      <View style={[{flex: 1}, styles.gridRowItem]}>
        <TouchableOpacity>
          <FontAwesomeIcon style={styles.remove__btn__text} icon={faTrashCan} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function CartScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <CheckoutHeader screenTitle={'My Cart'} />
      <ScrollView style={{padding: SIZES.margin}}>
        <View style={styles.gridRow}>
          <Text style={[{flex: 3}, styles.gridRowItem, styles.bold]}>Item</Text>
          <Text style={[{flex: 1}, styles.gridRowItem, styles.bold]}>Qty</Text>
          <Text style={[{flex: 1}, styles.gridRowItem, styles.bold]}>
            Subtotal
          </Text>
          <Text style={[{flex: 1}, styles.gridRowItem, styles.bold]}>
            Action
          </Text>
        </View>

        <FlatList
          data={tempCartItemList}
          renderItem={item => <RenderItemGrid item={item.item} />}
          keyExtractor={item => item.id}
        />

        <TouchableOpacity
          style={[styles.btn, styles.btn__secondary]}
          onPress={() => navigation.navigate('Checkout_Stack')}>
          <Text style={[styles.btn__text, styles.btn__text__secondary]}>
            Refresh cart
          </Text>
        </TouchableOpacity>

        <CartSummary />

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Checkout_Stack')}>
          <Text style={styles.btn__text}>Continue to checkout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
