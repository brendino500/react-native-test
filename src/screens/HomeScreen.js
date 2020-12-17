import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

const HomeScreen = ({ navigation }) => {

  return (
    <View>
      <Text style={styles.text}>Brendino500</Text>
      <Button
        onPress={() => {
          navigation.navigate('Components')
        }}
        title="Go to Components Demo"
      />
      <Button 
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')} 
      />

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
