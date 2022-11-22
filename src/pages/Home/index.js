import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Reset, Settings } from '../../assets/icons'
import { fonts } from '../../utils'

const Home = ({ navigation }) => {
  return (
    <View style={styles.page}>
    {/* <View style={styles.container}> */}
        <TouchableOpacity style={styles.upperButton}>
            <Text style={styles.text}>5:00</Text>
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
            <Text style={styles.text}>5:00</Text>
        </TouchableOpacity>
    {/* </View> */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 30,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#472D2D'
    },

    upperButton: {
        backgroundColor: '#D9D9D9',
        height: 224,
        width: 298,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{ rotate: '180deg'}]
    },

    button: {
        backgroundColor: '#D9D9D9',
        height: 224,
        width: 298,
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