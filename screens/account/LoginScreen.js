import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Animated
} from 'react-native';
import React, { useState } from 'react';
import { icon_check, logo } from '../../common/Images';
import {
  SIZES,
  COLORS,
  FONTS,
  PRODUCT_CONTAINER_SHADOWS,
} from '../../common/Styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faEnvelope,
  faLock,
  faSquareCheck,
  faSquare,
} from '@fortawesome/free-solid-svg-icons';
import { faSquare as regFaSquare } from '@fortawesome/free-regular-svg-icons';
import { loginBackground } from '../../common/Images';
import { useNavigation } from '@react-navigation/native';
import AccountHeader from './components/AccountHeader';
//Redux
import { checkLogin, getLocalAccessToken } from './LoginThunk';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { iconCheck } from '../../common/Images';


const styles = StyleSheet.create({
  dflex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dcol: {
    flexDirection: 'column',
    alignItems: 'flex-start',
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SIZES.margin * 5,
  },
  logo__wrapper: {
    height: 100,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: SIZES.margin * 2,
  },
  logo: {
    height: '100%',
    resizeMode: 'contain',
  },
  account__actions: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    ...PRODUCT_CONTAINER_SHADOWS,
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
    color: COLORS.primaryColor,
  },
  reset__pw__btn: {
    fontFamily: FONTS.boldFont,
    fontSize: FONTS.h6,
    color: COLORS.primaryColor,
    marginBottom: SIZES.margin * 5,
  },
  remember__me: {
    fontFamily: FONTS.mediumFont,
    fontSize: FONTS.h6,
    color: COLORS.primaryColor,
  },
  btn: {
    backgroundColor: COLORS.primaryColor,
    borderRadius: SIZES.radius,
    width: '100%',
    marginBottom: SIZES.margin,
    ...PRODUCT_CONTAINER_SHADOWS,
  },
  btn__text: {
    color: COLORS.white,
    padding: SIZES.margin * 2,
    textTransform: 'uppercase',
    fontFamily: FONTS.boldFont,
    fontSize: FONTS.h6,
    textAlign: 'center',
  },
  btn__secondary: {
    backgroundColor: COLORS.white,
  },
  btn__text__secondary: {
    color: COLORS.primaryColor,
  },
});

export default function LoginScreen() {
  let icon_check = iconCheck;
  // Animation
  const animWidthValue = new Animated.Value(100)
  const animInter = animWidthValue.interpolate({
    inputRange: [0, 100],
    outputRange: ['100%', '100%']
  })
  const navigation = useNavigation();
  const [rememberMe, setRememberMe] = useState(0);

  function toggleRememberMe() {
    setRememberMe(!rememberMe);
  }

  const accessToken = useSelector((state) => state.login.accessToken)
  let email = '';
  let password = '';
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getLocalAccessToken())
    console.log(accessToken)
    if (accessToken !== undefined && accessToken != "") {
      Animated.timing(
        animWidthValue,
        {
          toValue: 20,
          duration: 500,
          useNativeDriver: false
        }
      ).start()
    }
  }, [accessToken])

  const onPressLogin = () => {
 
    dispatch(checkLogin({ email: email, password: password }))
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={loginBackground}
        style={styles.background__image}
        imageStyle={{ opacity: 0.25 }}>
        {/* form content */}
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
              <TextInput style={styles.form__input__text} onChangeText={(text) => email = text} placeholder="Email" />
            </View>
            <View style={styles.form__input}>
              <FontAwesomeIcon style={styles.form__input__icon} icon={faLock} />
              <TextInput
                secureTextEntry={true}
                style={styles.form__input__text}
                placeholder="Password"
                onChangeText={(text) => password = text}
              />
            </View>
          </View>
          <View style={styles.account__actions}>
            <TouchableOpacity
              onPress={() => navigation.navigate('PasswordReset_Stack')}>
              <Text style={styles.reset__pw__btn}>Reset your password!</Text>
            </TouchableOpacity>
          </View>
          {/* <View style={styles.account__actions}>
            <TouchableOpacity onPress={() => toggleRememberMe()} style={styles.dflex}>
              <FontAwesomeIcon icon={(rememberMe) ? faSquareCheck : regFaSquare} style={{marginRight: SIZES.margin / 2}}/>
              <Text style={styles.remember__me}>Remember me</Text>
            </TouchableOpacity>
          </View> */}
          <View style={styles.account__actions}>
            <Animated.View
              style={{
                backgroundColor: '#000',
                borderRadius: 40,
                width: animInter
              }}
            >
              <TouchableOpacity
                style={styles.btn}
                onPress={() => onPressLogin()}>
                {
                  (accessToken !== undefined && accessToken != "") ? 
                    <Image source={icon_check} style={{ width: 24, height: 24 }} /> : <Text style={styles.btn__text}>Sign In</Text> 
                }

              </TouchableOpacity>
            </Animated.View>
          </View>
          <View style={styles.account__actions}>
            <TouchableOpacity
              style={[styles.btn, styles.btn__secondary]}
              onPress={() => navigation.navigate('Register_Stack')}>
              <Text style={[styles.btn__text, styles.btn__text__secondary]}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
