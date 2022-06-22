import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { COLORS, FONTS, SIZES } from '../common/Styles';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { fetchCategories, fetchProducts, fetchProductsByCategoryId } from '../screens/home/HomeThunks';

export default function CategoryList() {
  const navigation = useNavigation();
  const dataCategories = useSelector((state) => state.home.dataCategories)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories())
  }, [])
  //console.log(dataCategories)

  const renderItemCategories = (item) => (
    <TouchableOpacity
      style={{ margin: SIZES.margin }}
      onPress={() => {
        navigation.navigate('Category_Stack', {
          categoryId: item.category
        });
      }}
    >
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
  )
  return (
    <View>
      <FlatList
        horizontal
        data={dataCategories}
        renderItem={({ item }) => renderItemCategories(item)}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
