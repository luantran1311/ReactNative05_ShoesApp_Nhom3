import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../common/Styles';
import {useNavigation, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const tempMenu = [
  {
    id: 'ADIDAS',
    category: 'ADIDAS',
    categoryParent:
      '[{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
    categoryChild: '[]',
    deleted: false,
    productList: '[1,2,3,4,5,6,7,8]',
    alias: 'adidas',
  },
  {
    id: 'MEN',
    category: 'MEN',
    categoryParent: '[]',
    categoryChild:
      '[{"id":"NIKE","category":"NIKE"},{"id":"ADIDAS","category":"ADIDAS"},{"id":"VANS_CONVERSE","category":"VANS CONVERSE"}]',
    deleted: false,
    productList: '[2,4,6,8,10,12,14,16,18,19]',
    alias: 'men',
  },
  {
    id: 'NIKE',
    category: 'NIKE',
    categoryParent:
      '[{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
    categoryChild: '[]',
    deleted: false,
    productList: '[9,10,11,12,13,14,15,16]',
    alias: 'nike',
  },
  {
    id: 'VANS_CONVERSE',
    category: 'VANS CONVERSE',
    categoryParent:
      '[{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
    categoryChild: '[]',
    deleted: false,
    productList: '[17,18,19]',
    alias: 'vans-converse',
  },
  {
    id: 'WOMEN',
    category: 'WOMEN',
    categoryParent: '[]',
    categoryChild:
      '[{"id":"NIKE","category":"NIKE"},{"id":"ADIDAS","category":"ADIDAS"},{"id":"VANS_CONVERSE","category":"VANS CONVERSE"}]',
    deleted: false,
    productList: '[1,3,5,7,9,10,11,13,15,17,18,19]',
    alias: 'women',
  },
];

// function navigateToCategory(categoryId) {
//   if(categoryId) {
//     const navigation = useNavigation();
//     navigation.navigate('')
//   }
//   else {
//     return 'No category id specified'
//   }
// }

function MenuItems(props) {
  const item = props.item;
  const navigation = props.navigation;
  return (
    <TouchableOpacity
      style={{margin: SIZES.margin}}
      onPress={() => {
        navigation.navigate('Category_Stack', {
          categoryId: item.category
        });
      }}>
      <Text
        style={{
          color: COLORS.white,
          fontFamily: FONTS.boldFont,
          fontSize: FONTS.h6,
          textTransform: 'capitalize',
        }}>
        {item.category}
      </Text>
    </TouchableOpacity>
  );
}

export default function CategoryList() {
  const navigation = useNavigation();
  return (
    <View>
    <FlatList
      horizontal
      data={tempMenu}
      renderItem={item => (
        <MenuItems navigation={navigation} item={item.item} />
      )}
      keyExtractor={item => item.id}
    />
    </View>
  );
}
