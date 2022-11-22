import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SmallButton, LargeButton, Gap } from '../../components/'
import { fonts } from '../../utils'

const Settings = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <View style={styles.timerItem}>
        <Text style={styles.text}>Bullet</Text>
        <View style={styles.timerOptions}>
          <SmallButton text="1 min"/>
          <SmallButton text="1 | 1"/>
          <SmallButton text="2 | 1"/>
        </View>
      </View>

      <View style={styles.timerItem}>
        <Text style={styles.text}>Blitz</Text>
        <View style={styles.timerOptions}>
          <SmallButton text="3 min"/>
          <SmallButton text="3 | 2"/>
          <SmallButton text="5 min"/>
        </View>
      </View>

      <View style={styles.timerItem}>
        <Text style={styles.text}>Rapid</Text>
        <View style={styles.timerOptions}>
          <SmallButton text="10 min"/>
          <SmallButton text="15 | 10"/>
          <SmallButton text="30 min"/>
        </View>
      </View>

      <View style={styles.navigationButton}>
        <LargeButton text="Custom" onPress={() => navigation.navigate('Custom')}/>
        <Gap height={14}/>
        <LargeButton text="Done" onPress={() => navigation.navigate('Home')}/>
      </View>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#472D2D',
    padding: 14
  },

  timerItem: {
    alignItems: 'center',
    marginBottom: 40
  },

  text: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: fonts.secondary
  },

  timerOptions: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },
  
  navigationButton: {
    flex: 1,
    justifyContent: 'flex-end',
  },
})