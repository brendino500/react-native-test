import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

export default function ListScreen() {
  const names = [{ name: 'Milly 🚣‍♂️', age: 54 }, { name: 'Lianne 🍞', age: 73 },
    { name: 'Luis ☄️', age: 34 },
    { name: 'Sophie', age: 3 },
    { name: 'Dominic', age: 67 },
    { name: 'Wilbur', age: 23 },
    { name: 'Erin', age: 34 },
    { name: 'Jason', age: 21 }
  ]
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      keyExtractor={(names) => names.name} 
      data={names} 
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
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