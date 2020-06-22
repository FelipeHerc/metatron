import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import Styles from '../styles/Styles'
import Colors from '../styles/Colors'
import Sizes from '../styles/Sizes'
import { FontAwesome } from '@expo/vector-icons'

export default function EquipametModal ({ closeButtonFunction, equipament }) {
  console.log(equipament)

  return (
    <View style={Styles.darkBackground}>
      <View style={styles.closeButton}>
        <TouchableOpacity onPress={() => closeButtonFunction()}>
          <FontAwesome name="close" size={26} color={Colors.grayPurple} />
        </TouchableOpacity>
      </View>
      <View style={{ backgroundColor: '#a0f', width: 250, height: 250, alignSelf: 'center', marginBottom: 3 }}/>
      <View style={Styles.colCenter}>
        <Text style={styles.title}>{equipament.name}</Text>
        <Text>a</Text>
        <Text>a</Text>
        <Text>a</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  closeButton: {
    position: 'absolute',
    right: 10
  },
  title: {
    fontFamily: 'Cinzel-Bold',
    color: Colors.white,
    fontSize: Sizes.medium
  }
})
