import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Logo } from '../../assets/icons'
import { fonts } from '../../utils'

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home')
    }, 1500)
  }, [navigation])

  return (
    <View style={styles.page}>
        <Logo></Logo>
        <Text style={styles.text}>Chess Clock</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#472D2D'
    },

    text: {
        fontSize: 30,
        fontFamily: fonts.primary,
        color: 'white'
    }
})