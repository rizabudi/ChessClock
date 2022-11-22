import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fonts } from '../../utils'

const LargeButton = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default LargeButton

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 58,
        backgroundColor: '#D9D9D9',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6
    },

    text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: fonts.primary
    }
})