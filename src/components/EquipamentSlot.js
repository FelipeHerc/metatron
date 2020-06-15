import React from 'react'
import { View, StyleSheet } from 'react-native'
import Colors from '../styles/Colors'

export default function EquipamentSlot (props) {
  const backgroundColor = props.active ? Colors.orange : Colors.grayPurple
  const styles = StyleSheet.create({
    slot: {
      borderRadius: 3,
      width: 70,
      height: 70,
      backgroundColor: backgroundColor,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })

  return (
    <View style={styles.slot}>
      {props.children}
    </View>
  )
}
