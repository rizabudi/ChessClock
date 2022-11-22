import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SmallButton = ({text}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default SmallButton

const styles = StyleSheet.create({
    button: {
        width: 104,
        height: 49,
        backgroundColor: '#D9D9D9',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6
    },

    text: {
        color: 'black',
        fontWeight: 'bold'
    }
})