import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import OrderSection from './components/OrderSection';
import AccountInfo from './components/AccountInfo';
import {SIZES} from '../../common/Styles';
import AccountHeader from './components/AccountHeader';

const tempAccountDashboardInfo = {
  "ordersHistory": [
    {
      "orderDetail": [
        {
          "name": "Adidas Prophere",
          "alias": "adidas-prophere",
          "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
          "image": "http://svcy3.myclass.vn/images/adidas-prophere.png",
          "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n"
        }
      ],
      "id": 1205,
      "date": "2022-06-06T08:46:35",
      "status": null,
      "email": "tranthib@gmail.com",
      "alias": ""
    },
    {
      "orderDetail": [
        {
          "name": "Adidas Prophere",
          "alias": "adidas-prophere",
          "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
          "image": "http://svcy3.myclass.vn/images/adidas-prophere.png",
          "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n"
        }
      ],
      "id": 1216,
      "date": "2022-06-20T04:19:17",
      "status": null,
      "email": "tranthib@gmail.com",
      "alias": ""
    }
  ],
  email: 'tranthib@gmail.com',
  name: 'Trần Thị B',
  password: null,
  gender: false,
  phone: '09076836433',
  facebookId: '',
  deleted: false,
  avatar: 'http://svcy3.myclass.vn/images/user-icon.png',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.margin,
  },
});

export default function DashboardScreen() {
  const userInfo = {
    email: tempAccountDashboardInfo.email,
    name: tempAccountDashboardInfo.name,
    password: tempAccountDashboardInfo.password,
    gender: tempAccountDashboardInfo.gender,
    phone: tempAccountDashboardInfo.phone,
    facebookId: tempAccountDashboardInfo.facebookId,
    deleted: tempAccountDashboardInfo.deleted,
    avatar: tempAccountDashboardInfo.avatar,
  };

  const ordersHistory = tempAccountDashboardInfo.ordersHistory;

  return (
    <View style={styles.container}>
      {/* header */}
      <AccountHeader screenTitle={'Dashboard'} />

      {/* account info */}
      <AccountInfo userInfo={userInfo} />

      {/* account orders */}
      <OrderSection/>
    </View>
  );
}
