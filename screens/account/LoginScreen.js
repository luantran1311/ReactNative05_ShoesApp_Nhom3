import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {logo} from '../../common/Images';
import {SIZES, COLORS, FONTS, PRODUCT_CONTAINER_SHADOWS} from '../../common/Styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope, faLock, faSquareCheck, faSquare} from '@fortawesome/free-solid-svg-icons';
import {faSquare as regFaSquare} from '@fortawesome/free-regular-svg-icons';
import {loginBackground} from '../../common/Images';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  dflex: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'center'
  },
  dcol: {
    flexDirection:'column',
    alignItems:'flex-start'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  background__image: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  wrapper: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal: SIZES.margin * 5
  },
  logo__wrapper: {
    height: 100,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: SIZES.margin * 2
  },
  logo: {
    height: '100%',
    resizeMode: 'contain',
  },
  account__actions: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  form__wrapper: {
    width: '100%',
  },
  form__input: {
    backgroundColor: COLORS.white,
    marginVertical: SIZES.margin,
    borderRadius: SIZES.radius,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    ...PRODUCT_CONTAINER_SHADOWS
  },
  form__input__icon: {
    flex: 1,
    marginHorizontal: SIZES.margin,
  },
  form__input__text: {
    flex: 11,
  },
  reset__pw__text: {
    fontFamily: FONTS.mediumFont,
    fontSize: FONTS.h6,
    color: COLORS.primaryColor
  },
  reset__pw__btn: {
    fontFamily: FONTS.boldFont,
    fontSize: FONTS.h6,
    color: COLORS.primaryColor,
    marginBottom: SIZES.margin * 5
  },
  remember__me: {
    fontFamily: FONTS.mediumFont,
    fontSize: FONTS.h6,
    color: COLORS.primaryColor
  },
  btn: {
    backgroundColor: COLORS.primaryColor,
    borderRadius: SIZES.radius,
    width: '100%',
    marginBottom: SIZES.margin,
    ...PRODUCT_CONTAINER_SHADOWS
  },
  btn__text: {
    color: COLORS.white,
    padding: SIZES.margin * 2,
    textTransform: 'uppercase',
    fontFamily: FONTS.boldFont,
    fontSize: FONTS.h6,
    textAlign:'center'
  },
  btn__secondary: {
    backgroundColor: COLORS.white,
  },
  btn__text__secondary: {
    color: COLORS.primaryColor,
  }
});

export default function LoginScreen() {
  const navigation = useNavigation();
  const [rememberMe, setRememberMe] = useState(0);

  function toggleRememberMe() {
    setRememberMe(!rememberMe)
  }
  
  return (
    <View style={styles.container}>
      <ImageBackground
        source={loginBackground}
        style={styles.background__image}
        imageStyle={{opacity: 0.25}}>
        <View style={styles.wrapper}>
          <View style={styles.logo__wrapper}>
            <Image source={logo} style={styles.logo} />
          </View>
          <View style={styles.form__wrapper}>
            <View style={styles.form__input}>
              <FontAwesomeIcon
                style={styles.form__input__icon}
                icon={faEnvelope}
              />
              <TextInput style={styles.form__input__text} placeholder="Email" />
            </View>
            <View style={styles.form__input}>
              <FontAwesomeIcon style={styles.form__input__icon} icon={faLock} />
              <TextInput secureTextEntry={true} style={styles.form__input__text} placeholder="Password" />
            </View>
          </View>
          <View style={styles.account__actions}>
            <TouchableOpacity
              onPress={() => navigation.navigate('PasswordReset_Stack')}>
              <Text style={styles.reset__pw__btn}>Reset your password now!</Text>
            </TouchableOpacity>
          </View>
          {/* <View style={styles.account__actions}>
            <TouchableOpacity onPress={() => toggleRememberMe()} style={styles.dflex}>
              <FontAwesomeIcon icon={(rememberMe) ? faSquareCheck : regFaSquare} style={{marginRight: SIZES.margin / 2}}/>
              <Text style={styles.remember__me}>Remember me</Text>
            </TouchableOpacity>
          </View> */}
          <View style={styles.account__actions}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btn__text}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.account__actions}>
            <TouchableOpacity style={[styles.btn, styles.btn__secondary]}
              onPress={() => navigation.navigate('Register_Stack')}>
              <Text style={[styles.btn__text, styles.btn__text__secondary]}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
