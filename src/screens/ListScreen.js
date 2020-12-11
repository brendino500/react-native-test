import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

export default function ListScreen() {
  const names = [{ name: 'Milly 🚣‍♂️' }, { name: 'Lianne 🍞' },
    { name: 'Luis ☄️' },
    { name: 'Sophie' },
    { name: 'Dominic' },
    { name: 'Wilbur' },
    { name: 'Erin' },
    { name: 'Jason' }
  ]
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(names) => names.name} 
      data={names} 
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name}</Text>
      }} 
    />
  )
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 20,
    fontSize: 40
  }
})