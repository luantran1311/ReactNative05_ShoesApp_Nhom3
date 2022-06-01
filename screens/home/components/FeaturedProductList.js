import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SHADOWS, SIZES} from '../../../common/Styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

const tempFeaturedProductList = [
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

function renderItemSizes({sizes}) {}

function renderFeaturedItems({item}) {
  return (
    <View
      style={{
        margin: SIZES.margin,
        padding: SIZES.margin * 2,
        position: 'relative',
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius,
        width: 220
      }}>
      <TouchableOpacity
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
        onPress={() => console.log('renderFeaturedItems pressed')}>
        {/* wish list icon */}
        <TouchableOpacity style={{position: 'absolute', right: 0, top: 0}}>
          <FontAwesomeIcon icon={faHeart} />
        </TouchableOpacity>
        <Image style={{width: 200, height: 150}} source={{uri: item.image}} />

        {/* product name */}
        <Text
          style={{
            color: COLORS.primaryColor,
            fontFamily: FONTS.boldFont,
            fontSize: FONTS.h3,

          }}>
          {item.name}
        </Text>

        {/* price */}
        <Text style={{fontFamily: FONTS.boldFont, color: COLORS.primaryColor, fontSize: FONTS.h5}}>${item.price.toFixed(2)}</Text>

        {/* variations */}
        <Text>SIZES</Text>
        <Text>{item.size}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function FeaturedProductList() {
  return (
    <FlatList
      horizontal
      data={tempFeaturedProductList}
      keyExtractor={item => item.id}
      renderItem={renderFeaturedItems}
      showsHorizontalScrollIndicator={false}
    />
  );
}
