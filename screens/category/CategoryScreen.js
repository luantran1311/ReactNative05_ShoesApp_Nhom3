import {
  SafeAreaView,
  Image,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, PRODUCT_CONTAINER_SHADOWS, SIZES} from '../../common/Styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faXmark,
  faSliders,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import CategoryList from '../../components/CategoryList';
import CategoryHeader from './components/CategoryHeader';
import CategoryProductGrid from './components/CategoryProductGrid';
import BackgroundHeader from '../../components/BackgroundHeader';

const tempProductByCategory = [
  {
    id: 1,
    name: 'Adidas Prophere',
    alias: 'adidas-prophere',
    price: 350,
    feature: false,
    description:
      'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
    size: ['36', '37', '38', '39', '40', '41', '42'],
    shortDescription:
      'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
    quantity: 995,
    image: 'http://svcy3.myclass.vn/images/adidas-prophere.png',
    categories: [
      {
        id: 'ADIDAS',
        category: 'ADIDAS',
      },
      {
        id: 'MEN',
        category: 'MEN',
      },
      {
        id: 'WOMEN',
        category: 'WOMEN',
      },
    ],
    relatedProducts: [
      {
        id: 2,
        name: 'Adidas Prophere Black White',
        alias: 'adidas-prophere-black-white',
        feature: false,
        price: 450,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-prophere-black-white.png',
      },
      {
        id: 3,
        name: 'Adidas Prophere Customize',
        alias: 'adidas-prophere-customize',
        feature: false,
        price: 375,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-prophere-customize.png',
      },
      {
        id: 5,
        name: 'Adidas Swift Run',
        alias: 'adidas-swift-run',
        feature: false,
        price: 550,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-swift-run.png',
      },
    ],
  },
  {
    id: 2,
    name: 'Adidas Prophere Black White',
    alias: 'adidas-prophere-black-white',
    price: 450,
    feature: false,
    description:
      'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
    size: ['36', '37', '38', '39', '40', '41', '42'],
    shortDescription:
      'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
    quantity: 990,
    image: 'http://svcy3.myclass.vn/images/adidas-prophere-black-white.png',
    categories: [
      {
        id: 'ADIDAS',
        category: 'ADIDAS',
      },
      {
        id: 'MEN',
        category: 'MEN',
      },
      {
        id: 'WOMEN',
        category: 'WOMEN',
      },
    ],
    relatedProducts: [
      {
        id: 1,
        name: 'Adidas Prophere',
        alias: 'adidas-prophere',
        feature: false,
        price: 350,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-prophere.png',
      },
      {
        id: 4,
        name: 'Adidas Super Star Red',
        alias: 'adidas-super-star-red',
        feature: false,
        price: 465,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-super-star-red.png',
      },
      {
        id: 6,
        name: 'Adidas Tenisky Super Star',
        alias: 'adidas-tenisky-super-star',
        feature: false,
        price: 250,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png',
      },
    ],
  },
  {
    id: 3,
    name: 'Adidas Prophere Customize',
    alias: 'adidas-prophere-customize',
    price: 375,
    feature: false,
    description:
      'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
    size: ['36', '37', '38', '39', '40', '41', '42'],
    shortDescription:
      'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
    quantity: 415,
    image: 'http://svcy3.myclass.vn/images/adidas-prophere-customize.png',
    categories: [
      {
        id: 'ADIDAS',
        category: 'ADIDAS',
      },
      {
        id: 'MEN',
        category: 'MEN',
      },
      {
        id: 'WOMEN',
        category: 'WOMEN',
      },
    ],
    relatedProducts: [
      {
        id: 4,
        name: 'Adidas Super Star Red',
        alias: 'adidas-super-star-red',
        feature: false,
        price: 465,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-super-star-red.png',
      },
      {
        id: 5,
        name: 'Adidas Swift Run',
        alias: 'adidas-swift-run',
        feature: false,
        price: 550,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-swift-run.png',
      },
      {
        id: 7,
        name: 'Adidas Ultraboost 4',
        alias: 'adidas-ultraboost-4',
        feature: false,
        price: 450,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-ultraboost-4.png',
      },
    ],
  },
  {
    id: 4,
    name: 'Adidas Super Star Red',
    alias: 'adidas-super-star-red',
    price: 465,
    feature: false,
    description:
      'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
    size: ['36', '37', '38', '39', '40', '41', '42'],
    shortDescription:
      'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
    quantity: 542,
    image: 'http://svcy3.myclass.vn/images/adidas-super-star-red.png',
    categories: [
      {
        id: 'ADIDAS',
        category: 'ADIDAS',
      },
      {
        id: 'MEN',
        category: 'MEN',
      },
      {
        id: 'WOMEN',
        category: 'WOMEN',
      },
    ],
    relatedProducts: [
      {
        id: 7,
        name: 'Adidas Ultraboost 4',
        alias: 'adidas-ultraboost-4',
        feature: false,
        price: 450,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-ultraboost-4.png',
      },
      {
        id: 8,
        name: 'Adidas Yeezy 350',
        alias: 'adidas-yeezy-350',
        feature: false,
        price: 750,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-yeezy-350.png',
      },
      {
        id: 6,
        name: 'Adidas Tenisky Super Star',
        alias: 'adidas-tenisky-super-star',
        feature: false,
        price: 250,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png',
      },
    ],
  },
  {
    id: 5,
    name: 'Adidas Swift Run',
    alias: 'adidas-swift-run',
    price: 550,
    feature: false,
    description:
      'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
    size: ['36', '37', '38', '39', '40', '41', '42'],
    shortDescription:
      'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
    quantity: 674,
    image: 'http://svcy3.myclass.vn/images/adidas-swift-run.png',
    categories: [
      {
        id: 'ADIDAS',
        category: 'ADIDAS',
      },
      {
        id: 'MEN',
        category: 'MEN',
      },
      {
        id: 'WOMEN',
        category: 'WOMEN',
      },
    ],
    relatedProducts: [
      {
        id: 2,
        name: 'Adidas Prophere Black White',
        alias: 'adidas-prophere-black-white',
        feature: false,
        price: 450,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-prophere-black-white.png',
      },
      {
        id: 3,
        name: 'Adidas Prophere Customize',
        alias: 'adidas-prophere-customize',
        feature: false,
        price: 375,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-prophere-customize.png',
      },
      {
        id: 8,
        name: 'Adidas Yeezy 350',
        alias: 'adidas-yeezy-350',
        feature: false,
        price: 750,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-yeezy-350.png',
      },
    ],
  },
  {
    id: 6,
    name: 'Adidas Tenisky Super Star',
    alias: 'adidas-tenisky-super-star',
    price: 250,
    feature: false,
    description:
      'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
    size: ['36', '37', '38', '39', '40', '41', '42'],
    shortDescription:
      'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
    quantity: 456,
    image: 'http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png',
    categories: [
      {
        id: 'ADIDAS',
        category: 'ADIDAS',
      },
      {
        id: 'MEN',
        category: 'MEN',
      },
      {
        id: 'WOMEN',
        category: 'WOMEN',
      },
    ],
    relatedProducts: [
      {
        id: 4,
        name: 'Adidas Super Star Red',
        alias: 'adidas-super-star-red',
        feature: false,
        price: 465,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-super-star-red.png',
      },
      {
        id: 2,
        name: 'Adidas Prophere Black White',
        alias: 'adidas-prophere-black-white',
        feature: false,
        price: 450,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-prophere-black-white.png',
      },
      {
        id: 3,
        name: 'Adidas Prophere Customize',
        alias: 'adidas-prophere-customize',
        feature: false,
        price: 375,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-prophere-customize.png',
      },
    ],
  },
  {
    id: 7,
    name: 'Adidas Ultraboost 4',
    alias: 'adidas-ultraboost-4',
    price: 450,
    feature: false,
    description:
      'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
    size: ['36', '37', '38', '39', '40', '41', '42'],
    shortDescription:
      'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
    quantity: 854,
    image: 'http://svcy3.myclass.vn/images/adidas-ultraboost-4.png',
    categories: [
      {
        id: 'ADIDAS',
        category: 'ADIDAS',
      },
      {
        id: 'MEN',
        category: 'MEN',
      },
      {
        id: 'WOMEN',
        category: 'WOMEN',
      },
    ],
    relatedProducts: [
      {
        id: 8,
        name: 'Adidas Yeezy 350',
        alias: 'adidas-yeezy-350',
        feature: false,
        price: 750,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-yeezy-350.png',
      },
      {
        id: 2,
        name: 'Adidas Prophere Black White',
        alias: 'adidas-prophere-black-white',
        feature: false,
        price: 450,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-prophere-black-white.png',
      },
      {
        id: 1,
        name: 'Adidas Prophere',
        alias: 'adidas-prophere',
        feature: false,
        price: 350,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-prophere.png',
      },
    ],
  },
  {
    id: 8,
    name: 'Adidas Yeezy 350',
    alias: 'adidas-yeezy-350',
    price: 750,
    feature: false,
    description:
      'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
    size: ['36', '37', '38', '39', '40', '41', '42'],
    shortDescription:
      'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
    quantity: 524,
    image: 'http://svcy3.myclass.vn/images/adidas-yeezy-350.png',
    categories: [
      {
        id: 'ADIDAS',
        category: 'ADIDAS',
      },
      {
        id: 'MEN',
        category: 'MEN',
      },
      {
        id: 'WOMEN',
        category: 'WOMEN',
      },
    ],
    relatedProducts: [
      {
        id: 1,
        name: 'Adidas Prophere',
        alias: 'adidas-prophere',
        feature: false,
        price: 350,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-prophere.png',
      },
      {
        id: 4,
        name: 'Adidas Super Star Red',
        alias: 'adidas-super-star-red',
        feature: false,
        price: 465,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-super-star-red.png',
      },
      {
        id: 6,
        name: 'Adidas Tenisky Super Star',
        alias: 'adidas-tenisky-super-star',
        feature: false,
        price: 250,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png',
      },
    ],
  },
];


export default function CategoryScreen({route, navigation}) {
  const categoryId = route.params.categoryId;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingBottom: 0,
        backgroundColor: COLORS.secondaryColor,
        position: 'relative',
      }}>

      {/* black background header */}
      <BackgroundHeader />

      {/* header */}
      <CategoryHeader navigation={navigation} />

      {/* Menu bar */}
      <CategoryList />

      {/* Product grid */}
      {/* <StaggeredList
        data={tempProductByCategory}
        animationType={'FADE_IN_FAST'}
        showsHorizontalScrollIndicator={false}
        renderItem={item => (
          <CategoryItems item={item.item} navigation={navigation} />
        )}
      /> */}
      <CategoryProductGrid data={tempProductByCategory} navigation={navigation} />
    </SafeAreaView>
  );
}
