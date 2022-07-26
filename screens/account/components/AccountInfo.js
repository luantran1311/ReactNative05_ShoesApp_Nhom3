import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {
  COLORS,
  SIZES,
  PRODUCT_CONTAINER_SHADOWS,
  FONTS,
} from '../../../common/Styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: COLORS.secondaryColor,
    paddingVertical: SIZES.margin
  },
  avatar__wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 64,
    height: 64,
    resizeMode: 'cover',
    borderColor: COLORS.secondaryColor,
    borderWidth: 5,
    borderRadius: SIZES.radius * 10,
    marginBottom: SIZES.margin,
  },
  info__wrapper: {
    flex: 3,
  },
  name: {
    color: COLORS.primaryColor,
    textTransform: 'uppercase',
    fontFamily: FONTS.boldFont,
    fontSize: FONTS.h4,
  },
  email: {
    fontFamily: FONTS.boldFont,
    fontSize: FONTS.h6,
  },
  log__out__btn: {
    backgroundColor: COLORS.primaryColor,
    padding: SIZES.margin,
    borderRadius: SIZES.radius,
  },
  log__out__text: {
    color: COLORS.white,
    textTransform: 'uppercase',
    fontFamily: FONTS.boldFont,
    fontSize: FONTS.text,
  },
  edit__profile__btn: {
    marginTop: SIZES.margin * 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  edit__profile__text: {
    color: COLORS.primaryColor
  },
  edit__profile__icon: {
    color: COLORS.primaryColor
  }
});

export default function AccountInfo(props) {
    const navigation = useNavigation();
  const userInfo = props.userInfo;
  //console.log('user', userInfo);
  return (
    <View style={styles.container}>
      <View style={styles.avatar__wrapper}>
        <Image
          style={styles.avatar}
          source={{
            uri: `https://www.mail-signatures.com/wp-content/uploads/2019/02/How-to-find-direct-link-to-image_Blog-Picture.png`,
          }}
        />
        <TouchableOpacity
          style={styles.log__out__btn}
          onPress={() => console.log('Log out pressed')}>
          <Text style={styles.log__out__text}>Log out</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.info__wrapper}>
        <Text style={styles.name}>{userInfo.name}</Text>
        <Text style={styles.email}>{userInfo.email}</Text>
        <TouchableOpacity style={styles.edit__profile__btn} onPress={() => navigation.navigate("Profile_Stack")}>
          <Text style={styles.edit__profile__text}>View profile</Text>
          <FontAwesomeIcon style={styles.edit__profile__icon} icon={faAngleRight} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
