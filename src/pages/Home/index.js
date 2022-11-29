import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Reset, Settings } from '../../assets/icons'
import { fonts } from '../../utils'
import CountDown from 'react-native-countdown-component'


// TO DO
// 1. FIX PASSING PARAMS FROM SETTINGS SCREEN
// 2. START TIMER ONPRESS

const Home = ({ navigation, route }) => {

    const [buttonPressed, setButtonPressed] = useState(false)

    const [isWhiteTurn, setIsWhiteTurn] = useState(false)
    const [isBlackTurn, setIsBlackTurn] = useState(false)

    const whitePressed = () => {
        setIsWhiteTurn(false)
        setIsBlackTurn(true)
    }

    const blackPressed = () => {
        setIsWhiteTurn(true)
        setIsBlackTurn(false)
    }

  return (
    <View style={styles.page}>
    {/* <View style={styles.container}> */}
        <TouchableOpacity style={styles.upperButton}>
            {/* <Text style={styles.text}>{route.params.size}</Text> */}
            <CountDown
                size={50}
                until={600}
                onFinish={() => alert('Finished')}
                digitStyle={{backgroundColor: '#FFF'}}
                digitTxtStyle={{color: 'black', fontFamily: fonts.primary}}
                separatorStyle={{color: 'black'}}
                timeToShow={['M', 'S']}
                timeLabels={{m: null, s: null}}
                showSeparator
                onPress={blackPressed}
                running={!isWhiteTurn}
            />
        </TouchableOpacity>

        <View style={styles.icons}>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <Settings />
            </TouchableOpacity>
            <TouchableOpacity>
                <Reset />
            </TouchableOpacity>
        </View>


        <TouchableOpacity style={styles.button}>
            {/* <Text style={styles.text}>5:00</Text> */}
            <CountDown
                size={50}
                until={600}
                onFinish={() => alert('Finished')}
                digitStyle={{backgroundColor: '#FFF'}}
                digitTxtStyle={{color: 'black', fontFamily: fonts.primary}}
                separatorStyle={{color: 'black'}}
                timeToShow={['M', 'S']}
                timeLabels={{m: null, s: null}}
                showSeparator
                onPress={whitePressed}
                running={!isBlackTurn}
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
        justifyContent: 'space-around',
        backgroundColor: '#472D2D'
    },

    upperButton: {
        backgroundColor: '#D9D9D9',
        height: 224,
        width: '100%',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{ rotate: '180deg'}]
    },

    button: {
        backgroundColor: '#D9D9D9',
        height: 224,
        width: '100%',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        color: 'black',
        fontSize: 84,
        fontFamily: fonts.primary
    },

    icons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
    }
})