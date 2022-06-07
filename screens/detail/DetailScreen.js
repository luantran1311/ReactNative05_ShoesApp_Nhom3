import { SafeAreaView, View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
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

export default function DetailScreen({route, navigation}) {
  const productId = route.params.productId
  return (
    <SafeAreaView>
      <DetailHeader navigation={navigation} />
      <ProductCarousel />
      <ProductSwatch />
      {/* <Text>DetailScreen</Text>
      <Text>Product id {productId}</Text>
      <Text>Product name {tempProduct.name}</Text>
      <Image source={{uri: tempProduct.image}} style={{width:40,height:40}} />
      <Text>Product price {tempProduct.price}</Text>
      <Text>Description {tempProduct.description}</Text>
      <Text>Size</Text>
      <FlatList 
        data={tempProduct.size}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <Text>{item} - </Text>}
      />
      <Text>Short description {tempProduct.shortDescription}</Text>
      <Text>Qty {tempProduct.quantity}</Text>
      <Text>Category</Text>
      <FlatList 
        data={tempProduct.categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <Text>{item.category} - </Text>}
      />
      <Text>Related products</Text>
      <FlatList 
        data={tempProduct.relatedProducts}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <Text>{item.name} - </Text>}
      /> */}
    </SafeAreaView>
  )
}