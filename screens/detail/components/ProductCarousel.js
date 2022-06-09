import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {COLORS, FONTS, SHADOWS, SIZES} from '../../../common/Styles';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

const tempImageList = [
'http://svcy3.myclass.vn/images/adidas-prophere-black-white.png',
'http://svcy3.myclass.vn/images/adidas-prophere-black-white.png',
'http://svcy3.myclass.vn/images/adidas-prophere-black-white.png',
];

const styles = StyleSheet.create({
  container: {
    width: SLIDER_WIDTH,
    flexDirection:'row',
    justifyContent:'center',
    padding: SIZES.margin
  },
  image: {
    width: '80%',
    height: 200,
  },
  pagination: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.92)',
  }
});

const CarouselCardItem = ({item, index}) => {
  return (
    <View style={styles.container} key={index}>
      <Image source={{uri: item}} style={styles.image} />
    </View>
  );
};

export default function ProductCarousel(props) {
  const isCarousel = React.useRef(null);
  const [index, setIndex] = React.useState(0);

  return (
    <View>
      <Carousel
        layout={'default'} 
        layoutCardOffset={0}
        ref={isCarousel}
        data={tempImageList}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={index => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={tempImageList.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={styles.pagination}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
}
