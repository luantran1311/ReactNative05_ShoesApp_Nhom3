import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, FONTS, SIZES} from '../../../common/Styles';
import {ScrollView} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function SearchedProduct(props) {
  const item = props.item;
  const navigation = props.navigation;

  return (
    <View style={{borderColor: COLORS.secondaryColor, borderBottomWidth: 1}}>
      <TouchableOpacity
        onPress={() => {
          // console.log(`search product clicked id: ${item.id}`)}
            navigation.navigate('Detail_Stack', {productId: item.id})
        }}
        >
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={{uri: item.image}}
            style={{width: 80, height: 80, marginRight: SIZES.margin * 2}}
          />
          <View style={{flexDirection: 'column', justifyContent: 'center'}}>
            <Text
              style={{
                fontFamily: FONTS.boldFont,
                fontSize: FONTS.h5,
                color: COLORS.primaryColor,
              }}>
              {item.name}
            </Text>
            <Text style={{fontFamily: FONTS.mediumFont, fontSize: FONTS.h6}}>
              ${item.price.toFixed(2)}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

function SearchMessage({message}) {
  return <Text style={{fontFamily: FONTS.boldFont, textAlign:'center', padding: SIZES.margin, backgroundColor:'lightgrey'}}>{message}</Text>
}

export default function SearchMain(props) {
  const productList = props.product;
  const navigation = useNavigation();

  if (productList && productList.length > 0) {
    return (
      <View style={{height: '100%'}}>
        <SearchMessage message={`${productList.length} product(s) found.`} />
          <FlatList
            data={productList}
            keyExtractor={item => item.id}
            renderItem={item => <SearchedProduct item={item.item} navigation={navigation} />}
            showsVerticalScrollIndicator={true}
          />
      </View>
    );
  } else {
    return (
      <View style={{height: '100%'}}>
                <SearchMessage message={`No products found.`} />
      </View>
    );
  }
}
