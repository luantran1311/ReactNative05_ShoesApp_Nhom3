import {
  SafeAreaView,
  Image,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SHADOWS, SIZES} from '../../common/Styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faXmark,
  faSliders,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import StaggeredList from '@mindinventory/react-native-stagger-view';
import {useNavigation} from '@react-navigation/native';
import CategoryList from '../../components/CategoryList';
import Svg, {Path} from 'react-native-svg';

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

function CategoryHeader({navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: SIZES.margin * 2,
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FontAwesomeIcon
          style={{color: COLORS.white}}
          icon={faXmark}
          size={24}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('filter pressed')}>
        <FontAwesomeIcon
          style={{color: COLORS.white}}
          icon={faSliders}
          size={24}
        />
      </TouchableOpacity>
    </View>
  );
}

function CategoryItems(props) {
  const item = props.item;
  const navigation = props.navigation;
  return (
    <View
      style={{
        padding: SIZES.margin,
      }}>
      <View
        style={{
          backgroundColor: COLORS.white,
          position: 'relative',
          borderRadius: SIZES.radius,
          padding: SIZES.margin,
          ...SHADOWS
        }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Detail_Stack', {productId: item.id})
          }>
          {/* wish list icon */}
          <TouchableOpacity style={{position: 'absolute', right: 0, top: 0}}>
            <FontAwesomeIcon icon={faHeart} />
          </TouchableOpacity>
          <Image style={{width: 175, height: 175}} source={{uri: item.image}} />

          {/* product name */}
          <Text
            style={{
              color: COLORS.primaryColor,
              fontFamily: FONTS.boldFont,
              fontSize: FONTS.h6,
            }}>
            {item.name}
          </Text>

          {/* price */}
          <Text
            style={{
              fontFamily: FONTS.mediumFont,
              color: COLORS.primaryColor,
              fontSize: FONTS.h6,
            }}>
            ${item.price.toFixed(2)}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function CategoryScreen({route, navigation}) {
  const categoryId = route.params.categoryId;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingBottom: 60,
        backgroundColor: COLORS.secondaryColor,
        position: 'relative',
      }}>
      <View
        style={{
          width: '100%',
          height: 150,
          position: 'absolute',
          top: 0,
          backgroundColor: COLORS.primaryColor,
        }}>
        <Svg
          viewBox="0 0 1440 320"
          style={{width: '100%', height: '100%', marginTop: SIZES.margin * 14}}>
          <Path
            fill="#111014"
            fill-opacity="1"
            d="M0,192L40,208C80,224,160,256,240,266.7C320,277,400,267,480,229.3C560,192,640,128,720,122.7C800,117,880,171,960,170.7C1040,171,1120,117,1200,122.7C1280,128,1360,192,1400,224L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></Path>
        </Svg>
      </View>
      {/* header */}
      <CategoryHeader navigation={navigation} />

      {/* Menu bar */}
      <CategoryList />

      {/* Product grid */}
      <StaggeredList
        data={tempProductByCategory}
        animationType={'FADE_IN_FAST'}
        renderItem={item => (
          <CategoryItems item={item.item} navigation={navigation} />
        )}
      />
      {/* <FlatList
        data={tempProductByCategory}
        keyExtractor={item => item.id}
        renderItem={item => (
          <CategoryItems item={item.item} navigation={navigation} />
        )}
        numColumns={2}
      /> */}
    </SafeAreaView>
  );
}
