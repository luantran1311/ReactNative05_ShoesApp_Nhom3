import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SHADOWS, SIZES} from '../../../common/Styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCaretRight} from '@fortawesome/free-solid-svg-icons';

const tempLatestProductList = [
  {
    id: 1,
    name: 'Adidas Prophere',
    alias: 'adidas-prophere',
    price: 350,
    description:
      'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
    size: '[36,37,38,39,40,41,42]',
    shortDescription:
      'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
    quantity: 995,
    deleted: false,
    categories:
      '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
    relatedProducts: '[2,3,5]',
    feature: true,
    image: 'http://svcy3.myclass.vn/images/adidas-prophere.png',
  },
  {
    id: 2,
    name: 'Adidas Prophere Black White',
    alias: 'adidas-prophere-black-white',
    price: 450,
    description:
      'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
    size: '[36,37,38,39,40,41,42]',
    shortDescription:
      'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
    quantity: 990,
    deleted: false,
    categories:
      '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
    relatedProducts: '[1,4,6]',
    feature: false,
    image: 'http://svcy3.myclass.vn/images/adidas-prophere-black-white.png',
  },
  {
    id: 3,
    name: 'Adidas Prophere Customize',
    alias: 'adidas-prophere-customize',
    price: 375,
    description:
      'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
    size: '[36,37,38,39,40,41,42]',
    shortDescription:
      'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
    quantity: 415,
    deleted: false,
    categories:
      '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
    relatedProducts: '[4,5,7]',
    feature: true,
    image: 'http://svcy3.myclass.vn/images/adidas-prophere-customize.png',
  },
  {
    id: 4,
    name: 'Adidas Super Star Red',
    alias: 'adidas-super-star-red',
    price: 465,
    description:
      'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
    size: '[36,37,38,39,40,41,42]',
    shortDescription:
      'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
    quantity: 542,
    deleted: false,
    categories:
      '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
    relatedProducts: '[7,8,6]',
    feature: false,
    image: 'http://svcy3.myclass.vn/images/adidas-super-star-red.png',
  },
  {
    id: 5,
    name: 'Adidas Swift Run',
    alias: 'adidas-swift-run',
    price: 550,
    description:
      'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
    size: '[36,37,38,39,40,41,42]',
    shortDescription:
      'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
    quantity: 674,
    deleted: false,
    categories:
      '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
    relatedProducts: '[2,3,8]',
    feature: true,
    image: 'http://svcy3.myclass.vn/images/adidas-swift-run.png',
  },
];

function renderItemList({item}) {
  return (
    <View>
      <TouchableOpacity
        style={{
          padding: SIZES.margin,
          backgroundColor: COLORS.white,
          marginRight: SIZES.margin,
          borderRadius: SIZES.radius,
        }}>
        <Image style={{width: 60, height: 60}} source={{uri: item.image}} />
      </TouchableOpacity>
    </View>
  );
}

export default function LatestShoesList() {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: FONTS.boldFont,
            color: COLORS.primaryColor,
          }}>
          Latest Shoes
        </Text>
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: FONTS.text,
              fontFamily: FONTS.mediumFont,
              color: COLORS.primaryColor,
            }}>
            Show all
          </Text>
          <FontAwesomeIcon icon={faCaretRight} />
        </TouchableOpacity>
      </View>
      <FlatList
        style={{marginVertical: SIZES.margin * 2}}
        horizontal
        data={tempLatestProductList}
        keyExtractor={item => item.id}
        renderItem={renderItemList}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
