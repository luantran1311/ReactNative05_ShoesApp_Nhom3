import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}) {
  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Category")}>
        <Text>Go to category</Text>
      </TouchableOpacity>
    </View>
  )
}