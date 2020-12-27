import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default function ComponentsScreen() {
  const myName = 'Brendino'
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      <Text style={styles.text2}>My name is {myName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  text2: {
    fontSize: 20
  }
})