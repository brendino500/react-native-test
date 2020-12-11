import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

export default function ListScreen() {
  const names = [{ name: 'Opal' }, { name: 'Irene' },
    { name: 'Penny' },
    { name: 'Gary' },
    { name: 'Dominic' },
    { name: 'Wilbur' },
    { name: 'Erin' },
    { name: 'Jason' }
  ]
  return (
    <FlatList 
      data={names} 
      renderItem={({ item }) => {
        return <Text>{item.name}</Text>
      }} 
    />
  )
}

const styles = StyleSheet.create({})