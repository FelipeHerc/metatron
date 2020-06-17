import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import CapitalizeFirstLetter from '../utils/CapitalizeFirstLetter'

const LEVEL_CAP = 50

const AttributeLevelUp = ({ attribute, touchAttribute, denyLevelUp, currentAttributeLevel, nextAttributeLevel }) => (
  <View style={styles.attributeLine}>
    <View style={styles.row}>
      <Text>{`${CapitalizeFirstLetter(attribute)}: ${currentAttributeLevel}`}</Text>
      <Text>{nextAttributeLevel ? `=>${nextAttributeLevel}` : ''}</Text>
    </View>
    <Button title="+" disabled={denyLevelUp || nextAttributeLevel === LEVEL_CAP || currentAttributeLevel === LEVEL_CAP} onPress={() => touchAttribute()} />
  </View>
)

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  attributeLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

export default AttributeLevelUp
