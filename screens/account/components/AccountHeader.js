import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
faAngleLeft
} from '@fortawesome/free-solid-svg-icons';
import { COLORS, FONTS, SIZES, PRODUCT_CONTAINER_SHADOWSDUCT_CONTAINER_SHADOWS } from '../../../common/Styles';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    container: {
        padding: SIZES.margin,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
    },
    btn: {
        flexDirection: 'row',
        alignItems:'center',
        flex: 1
    },
    btn__icon: {
        marginRight: SIZES.margin,
    },
    btn__text: {
        fontFamily: FONTS.boldFont,
        fontSize: FONTS.h6,
        color: COLORS.primaryColor
    },
    screen__title: {
        flex: 1,
        textAlign:'center',
        color: COLORS.primaryColor,
        fontFamily: FONTS.boldFont,
        fontSize: FONTS.h5
    }
})

export default function AccountHeader({screenTitle}) {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
            <FontAwesomeIcon height={20} width={10} style={styles.btn__icon} icon={faAngleLeft} />
            <Text style={styles.btn__text}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.screen__title}>{screenTitle}</Text>
        <View style={{flex: 1}}></View>
    </View>
  )
}