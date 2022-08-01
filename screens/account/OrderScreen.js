import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import React from 'react';
import AccountHeader from './components/AccountHeader';
import {COLORS, FONTS, SIZES} from '../../common/Styles';
import moment from 'moment';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';

const tempOrderDetailList = [
  {
    orderDetail: [
      {
        name: 'Adidas Prophere',
        alias: 'adidas-prophere',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-prophere.png',
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
      },
    ],
    id: 1205,
    date: '2022-06-06T08:46:35',
    status: null,
    email: 'tranthib@gmail.com',
    alias: '',
  },
  {
    orderDetail: [
      {
        name: 'Adidas Prophere',
        alias: 'adidas-prophere',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-prophere.png',
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
      },
    ],
    id: 1216,
    date: '2022-06-20T04:19:17',
    status: null,
    email: 'tranthib@gmail.com',
    alias: '',
  },
];

const styles = StyleSheet.create({
  order__row__wrapper: {
    backgroundColor: COLORS.secondaryColor,
    borderWidth: 1,
    borderColor: COLORS.primaryColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: SIZES.margin,
  },
  heading: {
    fontFamily: FONTS.boldFont,
    fontSize: FONTS.h6,
    color: COLORS.primaryColor,
  },
  order__product__image: {
    width: 60,
    height: 60,
  },
});

function renderOrderGrid(item) {
  let date = new Date(item.date);
  /* Date format you have */
  let dateMDY = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;
  /* Date converted to MM-DD-YYYY format */
  return (
    <View style={styles.order__row__wrapper}>
      <Text style={{flex: 1}}>{item.id}</Text>
      <View style={{flex: 2, textAlign: 'center'}}>
        <Image
          style={styles.order__product__image}
          source={{uri: item.orderDetail[0].image}}
        />
        <Text>{item.orderDetail[0].name}</Text>
      </View>

      <Text style={{flex: 1}}>{dateMDY}</Text>
    </View>
  );
}

export default function OrderScreen() {
  return (
    <View>
      {/* header */}
      <AccountHeader screenTitle={'My orders'} />

      <View>
        <View style={styles.order__row__wrapper}>
          <Text style={[styles.heading, {flex: 1}]}>Order ID</Text>
          <Text style={[styles.heading, {flex: 2}]}>Item</Text>
          <Text style={[styles.heading, {flex: 1}]}>Date placed</Text>
        </View>
        <FlatList
          data={tempOrderDetailList}
          keyExtractor={item => item.id}
          renderItem={item => renderOrderGrid(item.item)}
        />
      </View>
    </View>
  );
}
