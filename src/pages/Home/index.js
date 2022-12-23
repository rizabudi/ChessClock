import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Pause, Reset, Settings, Play } from '../../assets/icons'
import { fonts } from '../../utils'
import CountDown from 'react-native-countdown-component'
import KeepAwake from 'react-native-keep-awake'
import Sound from 'react-native-sound'


// TO DO
// 3. RESET TIMER
// 4. DEBUGGING CUSTOM TIMER (INSERT DURATION TWICE UNTIL DURATION SHOWN ON HOME)
// 6. TEMPLATE TIMER
// 7. ADD INCREMENT
// 8. ADD HOUR

const Home = ({ navigation, route }) => {

    Sound.setCategory('Playback', true)
    const tick = new Sound('tick.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('failed to load TICK sound', error)
            return
        }
        //console.log('TICK sound loaded successfully')
    })

    const bell = new Sound('bell.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('failed to load BELL sound', error)
            return
        }
        //console.log('BELL sound loaded successfully')
    })

    // useEffect(() => {
    //     if (route.params?.duration) {
    //         console.log('params passed successfully')
    //     }
    // }, [route.params?.duration])

    const [isWhiteTurn, setIsWhiteTurn] = useState(false)
    const [isBlackTurn, setIsBlackTurn] = useState(false)

    const [isPause, setIsPause] = useState(false)

    const [whiteDigitColor, setWhiteDigitColor] = useState('#D9D9D9')
    const [blackDigitColor, setBlackDigitColor] = useState('#D9D9D9')

    const [whiteBackgroundColor, setWhiteBackgroundColor] = useState('#D9D9D9')
    const [blackBackgroundColor, setBlackBackgroundColor] = useState('#D9D9D9')

    const [whiteTextColor, setWhiteTextColor] = useState('black')
    const [blackTextColor, setBlackTextColor] = useState('black')

    const initialDuration = 300
    //const increment = () => route.params?.incSecond ? route.params.incSecond : 0

    //const fixedDuration = () => route.params?.duration ? route.params.duration : initialDuration
    
    //const [duration, setDuration] = useState(route.params?.duration ? route.params.duration : initialDuration)

    const whitePressed = () => {
        setIsWhiteTurn(false)
        setIsBlackTurn(true)
        setWhiteDigitColor('#D9D9D9')
        setBlackDigitColor('#704F4F')
        setWhiteBackgroundColor('#D9D9D9')
        setBlackBackgroundColor('#704F4F')
        setWhiteTextColor('black')
        setBlackTextColor('white')
        setIsPause(false)
        // setDuration(duration + increment)
        // console.log(duration + increment + " " + typeof duration + " " + typeof increment)
        tick.play()
        console.log('white turn:', isWhiteTurn, 'black turn:', isBlackTurn)
    }

    const blackPressed = () => {
        setIsBlackTurn(false)
        setIsWhiteTurn(true)
        setBlackDigitColor('#D9D9D9')
        setWhiteDigitColor('#704F4F')
        setBlackBackgroundColor('#D9D9D9')
        setWhiteBackgroundColor('#704F4F')
        setBlackTextColor('black')
        setWhiteTextColor('white')
        setIsPause(false)
        tick.play()
        console.log('white turn:', isWhiteTurn, 'black turn:', isBlackTurn)
    }

    const pauseButtonPressed = () => {
        setIsWhiteTurn(false)
        setIsBlackTurn(false)
        setIsPause(true)
        console.log('pause -', 'is white turn: ' +isWhiteTurn, 'is black turn: ' +isBlackTurn)
    }

    const playButtonPressed = () => {
        if (whiteBackgroundColor === '#704F4F') {
            setIsWhiteTurn(true)
        } else if (blackBackgroundColor === '#704F4F') {
            setIsBlackTurn(true)
        }

        setIsPause(false)
        console.log('play -', 'is white turn: ' +isWhiteTurn, 'is black turn: ' +isBlackTurn)
    }

    const showResetAlert = () => {
        pauseButtonPressed()
        Alert.alert(
            'Reset Timer',
            'Are you sure you want to reset the timer?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                {
                    text: 'OK',
                    onPress: () => resetTimer()
                }
            ],
            { cancelable: true }
        )
    }

    const resetTimer = () => {
        setIsWhiteTurn(false)
        setIsBlackTurn(false)
        setIsPause(false)
        //setDuration(initialDuration)
        console.log('reset pressed', initialDuration, typeof initialDuration)
    }

  return (
    <View style={styles.page}>
        <KeepAwake />
        <TouchableOpacity >
            <CountDown
                size={77}
                style={{
                    backgroundColor: `${blackBackgroundColor}`,
                    width: '100%',
                    height: 300,
                    justifyContent: 'center',
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    transform: [{ rotate: '180deg'}]
                }}
                until={route.params?.duration ? route.params.duration : initialDuration}
                onFinish={() => {
                    alert('White wins!')
                    bell.play()
                }}
                digitStyle={{
                    backgroundColor: `${blackDigitColor}`,
                    height: 300,
                }}
                digitTxtStyle={{
                    color: `${blackTextColor}`,
                    fontFamily: fonts.primary
                }}
                separatorStyle={{
                    color: `${blackTextColor}`,
                }}
                timeToShow={['M', 'S']}
                timeLabels={{
                    m: null, s: null
                }}
                showSeparator
                onPress={blackPressed}
                running={isBlackTurn === false ? false : !isWhiteTurn}
            />
        </TouchableOpacity>

        <View style={styles.icons}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Settings')
                pauseButtonPressed()
            }}>
                <Settings />
            </TouchableOpacity>
            <TouchableOpacity onPress={isPause === false ? pauseButtonPressed : playButtonPressed}>
                {isPause === false ? <Pause /> : <Play />}
            </TouchableOpacity>
            <TouchableOpacity onPress={showResetAlert}>
                <Reset />
            </TouchableOpacity>
        </View>


        <TouchableOpacity >
            <CountDown
                size={77}
                style={{
                    backgroundColor: `${whiteBackgroundColor}`,
                    width: '100%',
                    height: 300,
                    justifyContent: 'center',
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12
                }}
                until={route.params?.duration ? route.params.duration : initialDuration}
                onFinish={() => {
                    alert('Black wins!')
                    bell.play()
                }}
                digitStyle={{
                    backgroundColor: `${whiteDigitColor}`,
                    height: 300
                }}
                digitTxtStyle={{
                    color: `${whiteTextColor}`,
                    fontFamily: fonts.primary
                }}
                separatorStyle={{
                    color: `${whiteTextColor}`,
                }}
                timeToShow={['M', 'S']}
                timeLabels={{
                    m: null,
                    s: null
                }}
                showSeparator
                onPress={whitePressed}
                running={isWhiteTurn === false ? false : !isBlackTurn}
            />
        </TouchableOpacity>
    {/* </View> */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#472D2D'
    },

    // blackButton: {
    //     backgroundColor: `${whiteBackgroundColor}`,
    //     width: '100%',
    //     height: 300,
    //     justifyContent: 'center',
    // },

    // whiteButton: {
    //     backgroundColor: `${blackBackgroundColor}`,
    //     width: '100%',
    //     height: 300,
    //     justifyContent: 'center',
    // },

    // upperButton: {
    //     backgroundColor: '#D9D9D9',
    //     flex: 1,
    //     height: 224,
    //     width: '100%',
    //     borderRadius: 12,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     transform: [{ rotate: '180deg'}]
    // },

    // button: {
    //     backgroundColor: '#D9D9D9',
    //     flex: 1,
    //     height: 224,
    //     width: '100%',
    //     borderRadius: 12,
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },

    text: {
        color: 'black',
        fontSize: 84,
        fontFamily: fonts.primary
    },

    icons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        marginVertical: 60
    }
})