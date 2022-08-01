import { SafeAreaView, View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import {COLORS, FONTS, SIZES} from '../../common/Styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import DetailHeader from './components/DetailHeader';
import ProductCarousel from './components/ProductCarousel';
import ProductSwatch from './components/ProductSwatch';

const tempProduct = {
    "id": 1,
    "name": "Adidas Prophere",
    "alias": "adidas-prophere",
    "price": 350,
    "feature": false,
    "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    "size": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42"
    ],
    "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    "quantity": 995,
    "image": "http://svcy3.myclass.vn/images/adidas-prophere.png",
    "categories": [
      {
        "id": "ADIDAS",
        "category": "ADIDAS"
      },
      {
        "id": "MEN",
        "category": "MEN"
      },
      {
        "id": "WOMEN",
        "category": "WOMEN"
      }
    ],
    "relatedProducts": [
      {
        "id": 2,
        "name": "Adidas Prophere Black White",
        "alias": "adidas-prophere-black-white",
        "feature": false,
        "price": 450,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "image": "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png"
      },
      {
        "id": 3,
        "name": "Adidas Prophere Customize",
        "alias": "adidas-prophere-customize",
        "feature": false,
        "price": 375,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "image": "http://svcy3.myclass.vn/images/adidas-prophere-customize.png"
      },
      {
        "id": 5,
        "name": "Adidas Swift Run",
        "alias": "adidas-swift-run",
        "feature": false,
        "price": 550,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "image": "http://svcy3.myclass.vn/images/adidas-swift-run.png"
      }
    ]
  }

  var styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5
    },
    buttonText: {
      fontSize: 18,
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
      backgroundColor: 'transparent',
    },
  });

export default function DetailScreen({route, navigation}) {
  const productId = route.params.productId
  return (
    <SafeAreaView style={{backgroundColor:'#F0F4F7', flex: 1}}>
      <DetailHeader categoryName={tempProduct.categories[0].category} navigation={navigation} />
      <ProductCarousel imageList={tempProduct.image} />
      <ProductSwatch productInfo={tempProduct} />
    </SafeAreaView>
  )
}