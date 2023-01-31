import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MainScreen from './src/screens/MainScreen'
import IntroScreen from './src/screens/IntroScreen'

const App = () => {
  const [isloded, setIsLoded] = useState(false)
  setTimeout(() => {
    setIsLoded(true)
  }, 3000)
  return (
    <View style={styles.container}>
      {isloded ? <MainScreen /> : <IntroScreen />}
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})