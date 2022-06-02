import { View, Text } from 'react-native'
import React from 'react'

export default function DetailScreen({route, navigation}) {
  const productId = route.params.productId
  return (
    <View>
      <Text>DetailScreen</Text>
      <Text>Product id {productId}</Text>
    </View>
  )
}