import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import Equipament from './Equipament'
import Colors from '../styles/Colors'
import { FontAwesome } from '@expo/vector-icons'
import Gear from '../../assets/icons/gear.svg'
import Potion from '../../assets/icons/potion.svg'
import Key from '../../assets/icons/key.svg'

export default function Bag ({ closeButtonFunction }) {
  const EQUIPAMENT = 0
  const CONSUMABLES = 1
  const KEYITEMS = 2
  const [tabSelected, setTabSelected] = useState(EQUIPAMENT)

  const tabContent = () => {
    if (tabSelected === EQUIPAMENT) { return <Equipament/> }
    if (tabSelected === CONSUMABLES) { return <Text>CONSUMABLES</Text> }
    if (tabSelected === KEYITEMS) { return <Text>KEYITEMS</Text> }
  }

  return (
    <View>
      <View style={styles.tabArea}>
        <TouchableOpacity onPress={() => setTabSelected(EQUIPAMENT)}>
          <View style={[styles.tabSlot, { backgroundColor: tabSelected === EQUIPAMENT ? Colors.magenta : Colors.grayPurple }]}>
            <Gear width={40} height={40} color={tabSelected === EQUIPAMENT ? Colors.black : Colors.pink} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTabSelected(CONSUMABLES)}>
          <View style={[styles.tabSlot, { backgroundColor: tabSelected === CONSUMABLES ? Colors.magenta : Colors.grayPurple }]}>
            <Potion width={40} height={40} color={tabSelected === CONSUMABLES ? Colors.black : Colors.pink} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTabSelected(KEYITEMS)}>
          <View style={[styles.tabSlot, { backgroundColor: tabSelected === KEYITEMS ? Colors.magenta : Colors.grayPurple }]}>
            <Key width={40} height={40} color={tabSelected === KEYITEMS ? Colors.black : Colors.pink} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.closeButton}>
        <TouchableOpacity onPress={() => closeButtonFunction()}>
          <FontAwesome name="close" size={26} color={Colors.grayPurple} />
        </TouchableOpacity>
      </View>
      {tabContent()}
    </View>
  )
}

const styles = StyleSheet.create({
  closeButton: {
    position: 'absolute',
    right: 10
  },
  tabSlot: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 65,
    height: 50,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    backgroundColor: Colors.grayPurple,
    marginHorizontal: 3
  },
  tabArea: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
})
