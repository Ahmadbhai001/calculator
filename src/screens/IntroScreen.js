import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
      <Image style={styles.logo} source={require('../images/CalculatorLogo.png')}/>
      </View>
      
    </View>
  )
}

export default IntroScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    height:'100%',
    width:'100%',
    justifyContent: 'center',
    alignItems:'center', 
    backgroundColor:'black'   
  },
  
})