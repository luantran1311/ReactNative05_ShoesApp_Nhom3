import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {
  COLORS,
  FONTS,
  PRODUCT_CONTAINER_SHADOWS,
  SIZES,
} from '../../../common/Styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import SearchMain from './SearchMain';
import { useNavigation } from '@react-navigation/native';

const tempProductSearchList = [
  {
    id: 9,
    name: 'Nike Adapt BB',
    alias: 'nike-adapt-bb',
    price: 630,
    description:
      "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
    size: '[36,37,38,39,40,41,42]',
    shortDescription: 'Paul George is the rare high-percentage shooter',
    quantity: 599,
    deleted: false,
    categories:
      '[{"id":"NIKE","category":"NIKE"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
    relatedProducts: '[10,11,13]',
    feature: true,
    image: 'http://svcy3.myclass.vn/images/nike-adapt-bb.png',
  },
  {
    id: 10,
    name: 'Nike Air Max 97',
    alias: 'nike-air-max-97',
    price: 650,
    description:
      "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
    size: '[36,37,38,39,40,41,42]',
    shortDescription: 'Paul George is the rare high-percentage shooter',
    quantity: 984,
    deleted: false,
    categories:
      '[{"id":"NIKE","category":"NIKE"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
    relatedProducts: '[9,14,15]',
    feature: false,
    image: 'http://svcy3.myclass.vn/images/nike-air-max-97.png',
  },
  {
    id: 11,
    name: 'Nike Air Max 97 Blue',
    alias: 'nike-air-max-97-blue',
    price: 450,
    description:
      "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
    size: '[36,37,38,39,40,41,42]',
    shortDescription: 'Paul George is the rare high-percentage shooter',
    quantity: 875,
    deleted: false,
    categories:
      '[{"id":"NIKE","category":"NIKE"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
    relatedProducts: '[10,12,17]',
    feature: true,
    image: 'http://svcy3.myclass.vn/images/nike-air-max-97-blue.png',
  },
  {
    id: 12,
    name: 'Nike Air Max 270 React',
    alias: 'nike-air-max-270-react',
    price: 750,
    description:
      "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
    size: '[36,37,38,39,40,41,42]',
    shortDescription: 'Paul George is the rare high-percentage shooter',
    quantity: 445,
    deleted: false,
    categories:
      '[{"id":"NIKE","category":"NIKE"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
    relatedProducts: '[11,9,15,16]',
    feature: false,
    image: 'http://svcy3.myclass.vn/images/nike-air-max-270-react.png',
  },
  {
    id: 13,
    name: 'Nike Flyknit',
    alias: 'nike-flyknit',
    price: 350,
    description:
      "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
    size: '[36,37,38,39,40,41,42]',
    shortDescription: 'Paul George is the rare high-percentage shooter',
    quantity: 367,
    deleted: false,
    categories:
      '[{"id":"NIKE","category":"NIKE"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
    relatedProducts: '[12,14,17,11]',
    feature: true,
    image: 'http://svcy3.myclass.vn/images/nike-flyknit.png',
  },
  {
    id: 14,
    name: 'Nike React Element',
    alias: 'nike-react-element',
    price: 480,
    description:
      "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
    size: '[36,37,38,39,40,41,42]',
    shortDescription: 'Paul George is the rare high-percentage shooter',
    quantity: 589,
    deleted: false,
    categories:
      '[{"id":"NIKE","category":"NIKE"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
    relatedProducts: '[16,15,13]',
    feature: false,
    image: 'http://svcy3.myclass.vn/images/nike-react-element.png',
  },
  {
    id: 15,
    name: 'Nike Shox TL',
    alias: 'nike-shox-tl',
    price: 990,
    description:
      "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
    size: '[36,37,38,39,40,41,42]',
    shortDescription: 'Paul George is the rare high-percentage shooter',
    quantity: 456,
    deleted: false,
    categories:
      '[{"id":"NIKE","category":"NIKE"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
    relatedProducts: '[16,14,12]',
    feature: true,
    image: 'http://svcy3.myclass.vn/images/nike-shox-tl.png',
  },
  {
    id: 16,
    name: 'Nike SP Dunk',
    alias: 'nike-sp-dunk',
    price: 450,
    description:
      "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
    size: '[36,37,38,39,40,41,42]',
    shortDescription: 'Paul George is the rare high-percentage shooter',
    quantity: 582,
    deleted: false,
    categories:
      '[{"id":"NIKE","category":"NIKE"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
    relatedProducts: '[15,14,13]',
    feature: false,
    image: 'http://svcy3.myclass.vn/images/nike-sp-dunk.png',
  },
];

function productSearch(query) {
  console.log('search pressed');

  let keyword = query.trim();
  console.log('len', keyword.length);
  if (keyword.length > 0) {
    //perform search
    return tempProductSearchList;
  } else {
    return [];
  }
}

export default function SearchBar() {

  const navigation = useNavigation();

  const searchBarRef = useRef(null);

  const [searchQuery, setSearchQuery] = useState('');

  const [productSearchList, setProductSearchList] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      // write your functions
      console.log('search query len', searchQuery.length);
      setProductSearchList(productSearch(searchQuery));
    }, 2000);
  }, [searchQuery]);

  return (
    <View>
      {/* search bar */}
      <View style={{backgroundColor: COLORS.primaryColor, padding: SIZES.margin}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.white,
          }}>
          <TextInput
            style={{flex: 11, paddingHorizontal: SIZES.margin * 2}}
            onChangeText={newText => setSearchQuery(newText)}
            placeholder={'Type in your search keyword'}
            ref={searchBarRef}
          />
          <TouchableOpacity
            style={{
              padding: SIZES.margin,
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              backgroundColor: COLORS.primaryColor,
              borderColor: COLORS.white,
              borderLeftColor: COLORS.primaryColor,
              borderWidth: 3,
              borderRadius: SIZES.radius,
            }}
            onPress={() => {
              // const productSearchList = productSearch(searchQuery)
              // setProductSearchList(productSearchList);
              navigation.navigate('Category_Stack', {
                isSearchResultPage: true,
                searchQuery: 'test'
              })
            }}>
            <FontAwesomeIcon
              style={{color: COLORS.white}}
              icon={faMagnifyingGlass}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* search autocomplete */}
      <View style={{backgroundColor: COLORS.white}}>
        <SearchMain product={productSearchList} />
      </View>
    </View>
  );
}
