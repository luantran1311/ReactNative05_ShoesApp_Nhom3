import { View, Text } from 'react-native'
import React from 'react'
import SearchHeader from './components/SearchHeader'
import SearchBar from './components/SearchBar'
import SearchMain from './components/SearchMain'

export default function SearchScreen() {
  return (
    <View>
      <SearchHeader />
      <SearchBar />
    </View>
  )
}