import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component, useState } from 'react'
import { fonts } from '../../utils'

const SmallButton = ({text, onPress}) => {

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

// // PRESSED BUTTON USING CLASS COMPONENT = SUCCEED
// // STILL NEED WORK ON PASSING ONPRESSOUT
// class SmallButton extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { colorId: 0 }
//     this.props.text
//   }
//   onPress = (id) => {
//     this.setState({colorId: id})
//   }

//   render() {
//     return (
//       <TouchableOpacity
//         style={this.state.colorId === 1 ? styles.buttonPressed : styles.button}
//         onPress={() => this.onPress(1)}
//         >
//         <Text style={styles.text}>{this.props.text}</Text>
//       </TouchableOpacity>
//     )
//   }
// }

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

    buttonPressed: {
      width: 104,
      height: 49,
      backgroundColor: '#D9D9D9',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 6,
      borderWidth: 2,
      borderColor: 'green'
  },
  
    text: {
        color: 'black',
        fontFamily: fonts.secondary
    },
})