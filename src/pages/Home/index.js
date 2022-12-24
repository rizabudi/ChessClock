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
    const [duration, setDuration] = useState(0)
    const [duration1, setDuration1] = useState(0)
    const [duration2, setDuration2] = useState(0)
    const [until1, setUntil1] = useState(0)
    const [until2, setUntil2] = useState(0)
    const [id1, setId1] = useState(undefined)
    const [id2, setId2] = useState(undefined)
    const [increment, setIncrement] = useState(0)

    useEffect(() => {
        console.log("duration: " + route.params?.duration)
        if (route.params?.duration) {
            setDuration(route.params.duration)
            setDuration1(route.params.duration)
            setDuration2(route.params.duration)
            setUntil1(route.params.duration)
            setUntil2(route.params.duration)

            setIsWhiteTurn(false)
            setIsBlackTurn(false)
            setIsPause(false)

            setBlackBackgroundColor("#D9D9D9")
            setWhiteBackgroundColor("#D9D9D9")
            setWhiteDigitColor("#D9D9D9")
            setBlackDigitColor("#D9D9D9")
            setWhiteTextColor("black")
            setBlackTextColor("black")
        } else {
            setDuration(initialDuration)
            setDuration1(initialDuration)
            setDuration2(initialDuration)
            setUntil1(initialDuration)
            setUntil2(initialDuration)
        }
    }, [route.params?.duration])
    
    useEffect(() => {
        console.log("increment: " + route.params?.increment)
        if (route.params?.increment) {
            setIncrement(route.params.increment)
        }
    }, [route.params?.increment])

    useEffect(() => {
        setId1("A"+new Date().getTime().toString())
    }, [duration1])

    useEffect(() => {
        setId2("B"+new Date().getTime().toString())
    }, [duration2])

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
        if(increment > 0) {
            setDuration2(until2 + increment)
        }
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
        if(increment > 0) {
            setDuration1(until1 + increment)
        }
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
        if(duration == duration1) {
            setId1("A"+new Date().getTime().toString())
        } else {
            setDuration1(duration)
        }
        if(duration == duration2) {
            setId2("B"+new Date().getTime().toString())
        } else {
            setDuration2(duration)
        }
        setUntil1(duration)
        setUntil2(duration)

        setBlackBackgroundColor("#D9D9D9")
        setWhiteBackgroundColor("#D9D9D9")
        setWhiteDigitColor("#D9D9D9")
        setBlackDigitColor("#D9D9D9")
        setWhiteTextColor("black")
        setBlackTextColor("black")

        console.log('reset pressed', duration, typeof duration)
    }

  return (
    <View style={styles.page}>
        <KeepAwake />
        <TouchableOpacity >
            <CountDown
                id={id1}
                size={duration < 3600 ? 77 : 55}
                style={{
                    backgroundColor: `${blackBackgroundColor}`,
                    width: '100%',
                    height: 300,
                    justifyContent: 'center',
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    transform: [{ rotate: '180deg'}]
                }}
                until={duration1}
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
                timeToShow={duration < 3600 ? ['M', 'S'] : ['H','M', 'S']}
                timeLabels={{
                    m: null, s: null
                }}
                showSeparator
                onPress={blackPressed}
                onChange={(until) => {
                    console.log("until1 :" + until)
                    setUntil1(until-1)
                }}
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
                id={id2}  
                size={duration < 3600 ? 77 : 55}
                style={{
                    backgroundColor: `${whiteBackgroundColor}`,
                    width: '100%',
                    height: 300,
                    justifyContent: 'center',
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12
                }}
                until={duration2}
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
                timeToShow={duration < 3600 ? ['M', 'S'] : ['H','M', 'S']}
                timeLabels={{
                    m: null,
                    s: null
                }}
                showSeparator
                onPress={whitePressed}
                onChange={(until) => {
                    console.log("until2 :" + until)
                    setUntil2(until-1)
                }}
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