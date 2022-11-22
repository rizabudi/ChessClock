import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LargeButton } from '../../components'
import { fonts } from '../../utils'

const Custom = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Custom Timer</Text>

      <View style={styles.timer}>
        <Text style={styles.smallerTitle}>Time</Text>
      </View>

      <View style={styles.increments}>
        <Text style={styles.smallerTitle}>Increments</Text>
      </View>

      <View style={styles.navigationButton}>
        <LargeButton text="Done" onPress={() => navigation.navigate('Home')}/>
      </View>
    </View>
  )
}

export default Custom

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#472D2D',
    padding: 14,
    alignItems: 'center'
  },

  title: {
    fontFamily: fonts.primary,
    fontSize: 28,
    marginBottom: 52
  },

  smallerTitle: {
    fontFamily: fonts.primary,
    fontSize: 20
  },

  timer: {
    marginBottom: 33
  },

  navigationButton: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end'
  }
})