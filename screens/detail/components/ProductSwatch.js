import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SHADOWS, SIZES} from '../../../common/Styles';

function SizeItem(item) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        margin: SIZES.margin / 2,
        borderColor: COLORS.primaryColor,
        borderWidth: 1,
        borderRadius: SIZES.radius * 10,
      }}
      onPress={() => console.log('size pressed')}>
      <Text style={{color: COLORS.primaryColor, fontFamily: FONTS.mediumFont}}>
        {item.item}
      </Text>
    </TouchableOpacity>
  );
}

export default function ProductSwatch(props) {
  const productInfo = props.productInfo;
  return (
    <View>
      {/* Product main info */}
      <View>
        <Text
          style={{
            fontFamily: FONTS.boldFont,
            fontSize: FONTS.h2,
            color: COLORS.primaryColor,
          }}>
          {productInfo.name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: FONTS.mediumFont,
              fontSize: FONTS.h6,
              textTransform: 'capitalize',
            }}>
            {productInfo.categories[0].category}
          </Text>
          <Text>Rating</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: FONTS.boldFont,
              fontSize: FONTS.h4,
              color: COLORS.primaryColor,
            }}>
            ${productInfo.price.toFixed(2)}
          </Text>
          <Text>Color</Text>
        </View>
      </View>

      {/* Size swatch */}
      <View>
        <Text style={{fontFamily: FONTS.boldFont, color: COLORS.primaryColor}}>
          Choose your size:
        </Text>
        <FlatList
          data={productInfo.size}
          horizontal
          renderItem={item => <SizeItem item={item.item} />}
        />
      </View>

      {/* Product description */}
      <View>
        <Text>{productInfo.description}</Text>
        <Text>{productInfo.shortDescription}</Text>
      </View>

      <View style={{padding: SIZES.margin*2}}>
        <TouchableOpacity
          style={{backgroundColor: COLORS.primaryColor}}
          onPress={() => console.log('add to bag pressed')}>
          <Text
            style={{
              color: COLORS.white,
              textAlign: 'center',
              padding: SIZES.margin,
            }}>
            Add to bag
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
