import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
faAngleLeft
} from '@fortawesome/free-solid-svg-icons';
import { COLORS, FONTS, SIZES } from '../../../common/Styles';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    container: {
        padding: SIZES.margin
    },
    btn: {
        flexDirection: 'row',
        alignItems:'center'
    },
    btn__icon: {
        marginRight: SIZES.margin,
    },
    btn__text: {
        fontFamily: FONTS.boldFont,
        fontSize: FONTS.h6,
        color: COLORS.primaryColor
    }
})

export default function AccountHeader() {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
            <FontAwesomeIcon height={20} width={10} style={styles.btn__icon} icon={faAngleLeft} />
            <Text style={styles.btn__text}>Go Back</Text>
        </TouchableOpacity>
    </View>
  )
}