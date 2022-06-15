import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  COLORS,
  FONTS,
  PRODUCT_DETAIL_SWATCH_SHADOW,
  SIZES,
} from '../../../common/Styles';
import {fullStar, halfStar, emptyStar} from '../../../common/Images';

function Rating({score}) {
  let stars = [];

  const integerPart = Math.floor(score);
  const decimalPart = score - integerPart;
  const zeroPart = Math.floor(5 - score);

  for (var i = 0; i < integerPart; i++) {
    stars.push(fullStar);
  }

  for (var i = 0; i < decimalPart; i++) {
    stars.push(halfStar);
  }

  for (var i = 0; i < zeroPart; i++) {
    stars.push(emptyStar);
  }

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{flexDirection: 'row'}}>
        {stars.map((item, index) => (
          <Image source={item} style={{width: 20, height: 20}} />
        ))}
      </View>
      <Text
        style={{
          marginLeft: SIZES.margin,
          fontFamily: FONTS.mediumFont,
          fontSize: FONTS.h6,
        }}>
        {score}
      </Text>
    </View>
  );
}

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
    <ScrollView
      style={{
        ...PRODUCT_DETAIL_SWATCH_SHADOW,
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: SIZES.margin * 2,
      }}>
      <View>
        {/* Product main info */}
        <View>
          <Text
            style={{
              fontFamily: FONTS.boldFont,
              fontSize: FONTS.h2,
              color: COLORS.primaryColor,
              marginBottom: SIZES.margin,
            }}>
            {productInfo.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: FONTS.mediumFont,
                fontSize: FONTS.h6,
                textTransform: 'capitalize',
                marginRight: SIZES.margin,
              }}>
              {productInfo.categories[0].category}
            </Text>
            {/* <Text>Rating</Text> */}
            <Rating score={3.5} />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: SIZES.margin,
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
        <View style={{marginVertical: SIZES.margin}}>
          <Text
            style={{
              fontFamily: FONTS.boldFont,
              color: COLORS.primaryColor,
              marginBottom: SIZES.margin,
            }}>
            Choose your size:
          </Text>
          <FlatList
            data={productInfo.size}
            horizontal
            renderItem={item => <SizeItem item={item.item} />}
          />
        </View>

        {/* Product description */}
        <View
          style={{
            borderTopWidth: 1,
            borderColor: COLORS.secondaryColor,
          }}>
          <Text
            style={{
              fontFamily: FONTS.boldFont,
              fontSize: FONTS.h5,
              color: COLORS.primaryColor,
              marginTop: SIZES.margin * 2,
              marginBottom: 0,
            }}>
            {productInfo.description}
          </Text>
          <Text
            style={{
              fontFamily: FONTS.mediumFont,
              fontSize: FONTS.h6,
              marginTop: 0,
            }}>
            {productInfo.shortDescription}
          </Text>
        </View>

        <View style={{padding: SIZES.margin * 2}}>
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
    </ScrollView>
  );
}
