import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { LargeButton } from '../../components'
import { fonts } from '../../utils'
import * as yup from 'yup'

const Custom = ({ navigation }) => {

  // const TimersSchema = yup.object().shape({
  //   whiteHoursTimer: yup.number().integer().min(0,"Number too small").max(11,"Number too big").typeError("Provide a positive number, less than 11"),
  //   whiteMinutesTimer: yup.number().integer().min(0,"Number too small").max(59,"Number too big").typeError("Provide a positive number, less than 60"),
  //   blackHoursTimer: yup.number().integer().min(0,"Number too small").max(11,"Number too big").typeError("Provide a positive number, less than 11"),
  //   blackMinutesTimer: yup.number().integer().min(0,"Number too small").max(59,"Number too big").typeError("Provide a positive number, less than 60"),
  // })

  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)

  const [incSecond, setIncSecond] = useState(0)

  const Submit = () => {
    navigation.navigate({
      name: 'Home',
      params: {
        duration: (hour * 3600) + (minute * 60),
        increment: incSecond
      },
      //merge: true
    })
    console.log('Succeed. Hour: ' + hour + ' Minute: ' + minute + ' Increment: ' + incSecond +typeof hour + typeof minute + typeof incSecond)
  }

  return (
    <View style={styles.page}>
      <Text style={styles.title}>Custom Timer</Text>

      <View style={styles.timer}>
        <Text style={styles.smallerTitle}>Time</Text>
        <View style={styles.timerContainer}>
          <View style={styles.timerItem}>
            <TextInput
              style={styles.input}
              value={hour}
              onChangeText={(val) => setHour(parseInt(val))}
              keyboardType='numeric'
              maxLength={2}
              placeholder={'00'}>
            </TextInput>
            <Text style={styles.label}>hour(s)</Text>
          </View>
          <Text style={styles.separator}>:</Text>
          <View style={styles.timerItem}>
            <TextInput
              style={styles.input}
              value={minute}
              onChangeText={(val) => setMinute(parseInt(val))}
              keyboardType='numeric'
              maxLength={2}
              placeholder={'00'}>
            </TextInput>
            <Text style={styles.label}>minute(s)</Text>
          </View>
        </View>
      </View>

      <View style={styles.timer}>
        <Text style={styles.smallerTitle}>Increments</Text>
        <View style={styles.incrementsContainer}>
          <View style={styles.timerItem}>
            <TextInput
              style={styles.input}
              value={incSecond}
              onChangeText={(val) => setIncSecond(parseInt(val))}
              keyboardType='numeric'
              maxLength={2}
              placeholder={'00'}>
            </TextInput>
            <Text style={styles.label}>second(s)</Text>
          </View>
        </View>
      </View>

      <View style={styles.navigationButton}>
        <LargeButton text="Done" onPress={Submit} />
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
    alignItems: 'center',
  },

  title: {
    fontFamily: fonts.primary,
    fontSize: 28,
    marginBottom: 52,
    marginTop: 61-14,
    color: 'white'
  },

  smallerTitle: {
    fontFamily: fonts.primary,
    fontSize: 20,
    marginBottom: 14,
    color: 'white'
  },

  timer: {
    marginBottom: 33,
    alignItems: 'center',
    width: '100%'
  },

  navigationButton: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end'
  },

  input: {
    width: 80,
    height: 80,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    fontSize: 40,
    textAlign: 'center',
    color: 'black',
    fontFamily: fonts.secondary
  },

  timerContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },

  incrementsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly'
  },

  separator: {
    fontFamily: fonts.secondary,
    fontSize: 50,
  },

  label: {
    fontFamily: fonts.primary,
    marginTop: 9,
    textAlign: 'center'
  }
})