import React from 'react'
import { View, StyleSheet } from 'react-native'
import Colors from '../styles/Colors'

export default function EquipamentSlot (props) {
  return (
    <View style={styles.slot}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  slot: {
    borderRadius: 3,
    width: 70,
    height: 70,
    backgroundColor: Colors.grayPurple,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
