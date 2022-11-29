import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { SmallButton, LargeButton, Gap } from '../../components/'
import { fonts } from '../../utils'

// TEST onPress USING FUNCTIONAL COMPONENT
const Settings = ({ navigation }) => {

  return (
    <View style={styles.page}>
      <View style={styles.timerItem}>
        <Text style={styles.text}>Bullet</Text>
        <View style={styles.timerOptions}>
          <SmallButton text="1 min" onPress={() => navigation.navigate('Home', { size: 60 })}/>
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

// // TEST onPress USING CLASS COMPONENT
// const Settings = ({ navigation }) => {
//   return (
//     <View style={styles.page}>
//       <View style={styles.timerItem}>
//         <Text style={styles.text}>Bullet</Text>
//         <View style={styles.timerOptions}>
//           <SmallButton text="1 min"/>
//           {/* <SmallButton text="1 | 1"/>
//           <SmallButton text="2 | 1"/> */}
//         </View>
//       </View>

//       <View style={styles.timerItem}>
//         <Text style={styles.text}>Blitz</Text>
//         <View style={styles.timerOptions}>
//           {/* <SmallButton text="3 min"/>
//           <SmallButton text="3 | 2"/>
//           <SmallButton text="5 min"/> */}
//         </View>
//       </View>

//       <View style={styles.timerItem}>
//         <Text style={styles.text}>Rapid</Text>
//         <View style={styles.timerOptions}>
//           {/* <SmallButton text="10 min"/>
//           <SmallButton text="15 | 10"/>
//           <SmallButton text="30 min"/> */}
//         </View>
//       </View>

//       <View style={styles.navigationButton}>
//         <LargeButton text="Custom" onPress={() => navigation.navigate('Custom')}/>
//         <Gap height={14}/>
//         <LargeButton text="Done" onPress={() => navigation.navigate('Home')}/>
//       </View>
//     </View>
//   )
// }

// class Settings extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { colorId: 0 }
//   }
//   onPress = (id) => {
//     this.setState({colorId: id})
//   }

//   render() {
//   return (
//     <View style={styles.page}>
//       <View style={styles.timerItem}>
//         <Text style={styles.text}>Bullet</Text>
//         <View style={styles.timerOptions}>
//           <TouchableOpacity
//             style={this.state.colorId === 1 ? styles.buttonPressed : styles.button}
//             onPress={() => this.onPress(1)}
//           >
//             <Text style={styles.textButton}>1 min</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={this.state.colorId === 2 ? styles.buttonPressed : styles.button}
//             onPress={() => this.onPress(2)}
//           >
//             <Text style={styles.textButton}>1 | 1</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={this.state.colorId === 3 ? styles.buttonPressed : styles.button}
//             onPress={() => this.onPress(3)}
//           >
//             <Text style={styles.textButton}>2 | 1</Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//         <View style={styles.timerItem}>
//           <Text style={styles.text}>Blitz</Text>
//           <View style={styles.timerOptions}>
//             <TouchableOpacity
//               style={this.state.colorId === 4 ? styles.buttonPressed : styles.button}
//               onPress={() => this.onPress(4)}
//             >
//               <Text style={styles.textButton}>3 min</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={this.state.colorId === 5 ? styles.buttonPressed : styles.button}
//               onPress={() => this.onPress(5)}
//             >
//               <Text style={styles.textButton}>3 | 2</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={this.state.colorId === 6 ? styles.buttonPressed : styles.button}
//               onPress={() => this.onPress(6)}
//             >
//               <Text style={styles.textButton}>5 min</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         <View style={styles.timerItem}>
//           <Text style={styles.text}>Rapid</Text>
//           <View style={styles.timerOptions}>
//             <TouchableOpacity
//               style={this.state.colorId === 7 ? styles.buttonPressed : styles.button}
//               onPress={() => this.onPress(7)}
//             >
//               <Text style={styles.textButton}>10 min</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={this.state.colorId === 8 ? styles.buttonPressed : styles.button}
//               onPress={() => this.onPress(8)}
//             >
//               <Text style={styles.textButton}>15 | 10</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={this.state.colorId === 9 ? styles.buttonPressed : styles.button}
//               onPress={() => this.onPress(9)}
//             >
//               <Text style={styles.textButton}>30 min</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//       <View style={styles.navigationButton}>
//         <LargeButton text="Custom" onPress={() => this.props.navigation.navigate('Custom')}/>
//         <Gap height={14}/>
//         <LargeButton text="Done" onPress={() => this.props.navigation.navigate('Home')}/>
//       </View>
//     </View>
//   )
//   }
// }

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

  textButton: {
    color: 'black',
    fontFamily: fonts.secondary
  },
})