import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Colors from '../styles/Colors'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesome } from '@expo/vector-icons'
import EquipamentSlot from '../components/EquipamentSlot'
import Helm from '../../assets/icons/helm.svg'
import Armor from '../../assets/icons/armor.svg'
import Legging from '../../assets/icons/legging.svg'
import Gloves from '../../assets/icons/gloves.svg'
import Boots from '../../assets/icons/boots.svg'
import Sword from '../../assets/icons/sword.svg'

export default function Bag ({ navigation, closeButtonFunction }) {
  const dispatch = useDispatch()
  const equipamentsOnChar = useSelector((state) => state.equipament)
  const items = useSelector((state) => state.items.equipaments)

  const [touchedItem, setTouchedItem] = useState(false)
  const [touchedItemKey, setTouchedItemKey] = useState(false)
  const [touchedItemType, setTouchedItemType] = useState(false)

  const equip = (slotType, equipament) => {
    untouchItem()
    dispatch({ type: 'GAIN_BONUS', bonus: equipament.bonus })
    dispatch({ type: 'EQUIP', slot: slotType, equipament: equipament })
    dispatch({ type: 'REMOVE_EQUIPAMENT', key: equipament.key })
  }

  const unequip = (slotType, equipament) => {
    if (!equipamentsOnChar[slotType]) { return }
    dispatch({ type: 'LOSE_BONUS', bonus: equipament.bonus })
    dispatch({ type: 'UNEQUIP', slot: slotType })
    dispatch({ type: 'ADD_EQUIPAMENT', equipament: equipament })
  }

  const untouchItem = () => {
    setTouchedItem(false)
    setTouchedItemKey(false)
    setTouchedItemType(false)
  }

  const touchItem = (item, itemKey, itemType) => {
    if (touchedItemKey) return untouchItem()

    setTouchedItem(item)
    setTouchedItemKey(itemKey)
    setTouchedItemType(itemType)
  }

  const pressEquipSlot = (slotType) => {
    if (!touchedItem) return unequip(slotType, equipamentsOnChar[slotType])

    if (touchedItemType !== slotType) return untouchItem()

    if (equipamentsOnChar[slotType]) return swapItens(slotType)

    equip(slotType, touchedItem)
  }

  const swapItens = (slotType) => {
    unequip(slotType, equipamentsOnChar[slotType])
    equip(slotType, touchedItem)
  }

  const equipamentIcon = (slot) => {
    if (slot === 'helm') return <Helm width={60} height={60} color={Colors.cyan} />
    if (slot === 'armor') return <Armor width={60} height={60} color={Colors.cyan} />
    if (slot === 'legging') return <Legging width={60} height={60} color={Colors.cyan} />
    if (slot === 'gloves') return <Gloves width={60} height={60} color={Colors.cyan} />
    if (slot === 'boots') return <Boots width={60} height={60} color={Colors.cyan} />
    if (slot === 'rightHand') return <Sword width={60} height={60} color={Colors.cyan} />
  }

  const equipamentList = Object.keys(items).map((obj) => {
    return (
      <TouchableOpacity key={items[obj].key} style={styles.slot} onPress={() => touchItem(items[obj], items[obj].key, items[obj].slot)} onLongPress={() => console.log('longaa')}>
        <EquipamentSlot active={touchedItemKey === items[obj].key}>
          {equipamentIcon(items[obj].slot)}
        </EquipamentSlot>
      </TouchableOpacity>
    )
  })

  return (
    <View>
      <View style={styles.row}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => pressEquipSlot('helm')}>
            <EquipamentSlot active={touchedItemType === 'helm'}>
              {equipamentsOnChar.helm && <Helm width={60} height={60} color={Colors.cyan}/>}
            </EquipamentSlot>
          </TouchableOpacity>
          <Helm width={60} height={60} color={Colors.cyan}/>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => pressEquipSlot('rightHand')}>
            <EquipamentSlot active={touchedItemType === 'rightHand'}>
              {equipamentsOnChar.rightHand && <Sword width={60} height={60} color={Colors.cyan}/>}
            </EquipamentSlot>
          </TouchableOpacity>
          <Sword width={60} height={60} color={Colors.cyan} />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => pressEquipSlot('armor')}>
            <EquipamentSlot active={touchedItemType === 'armor'}>
              {equipamentsOnChar.armor && <Armor width={60} height={60} color={Colors.cyan}/>}
            </EquipamentSlot>
          </TouchableOpacity>
          <Armor width={60} height={60} color={Colors.cyan} />
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => pressEquipSlot('gloves')}>
            <EquipamentSlot active={touchedItemType === 'gloves'}>
              {equipamentsOnChar.gloves && <Gloves width={60} height={60} color={Colors.cyan}/>}
            </EquipamentSlot>
          </TouchableOpacity>
          <Gloves width={60} height={60} color={Colors.cyan} />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => pressEquipSlot('legging')}>
            <EquipamentSlot active={touchedItemType === 'legging'}>
              {equipamentsOnChar.legging && <Legging width={60} height={60} color={Colors.cyan}/>}
            </EquipamentSlot>
          </TouchableOpacity>
          <Legging width={60} height={60} color={Colors.cyan} />
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => pressEquipSlot('boots')}>
            <EquipamentSlot active={touchedItemType === 'boots'}>
              {equipamentsOnChar.boots && <Boots width={60} height={60} color={Colors.cyan}/>}
            </EquipamentSlot>
          </TouchableOpacity>
          <Boots width={60} height={60} color={Colors.cyan} />
        </View>
      </View>
      <ScrollView>
        <View style={{ justifyContent: 'center', flexDirection: 'row', width: 400, flexWrap: 'wrap' }}>
          {equipamentList}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 140,
    padding: 4
  },
  slot: {
    margin: 3,
    borderRadius: 3,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
