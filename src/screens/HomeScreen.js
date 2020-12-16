import React from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'

const HomeScreen = (props) => {

  return (
    <View>
      <Text style={styles.text}>Brendino500</Text>
      <Button
        onPress={() => {
          props.navigation.navigate('Components')
        }}
        title="Go to Components Demo"
      />
      <TouchableOpacity onPress={() => {
        props.navigation.navigate('List')
      }}>
        <Text style={styles.list}>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  list: {
    fontSize: 35,
    color: 'blue'
  }
})

export default HomeScreen
