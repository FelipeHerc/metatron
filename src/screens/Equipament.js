import React, { useState } from 'react'
import { Crypto, View, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
import Styles from '../styles/Styles'
import Colors from '../styles/Colors'
import Sizes from '../styles/Sizes'
import Button from '../components/Button'
import Weapons from '../equipaments/weapons'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesome } from '@expo/vector-icons'
import EquipamentSlot from '../components/EquipamentSlot'
import Helm from '../../assets/icons/helm.svg'
import Armor from '../../assets/icons/armor.svg'
import Legging from '../../assets/icons/legging.svg'
import Gloves from '../../assets/icons/gloves.svg'
import Boots from '../../assets/icons/boots.svg'
import Sword from '../../assets/icons/sword.svg'

export default function Equipament ({ navigation, closeButtonFunction }) {
  const dispatch = useDispatch()
  const equipamentsOnChar = useSelector((state) => state.equipament)
  const items = useSelector((state) => state.items.equipaments)

  const [touchedItem, setTouchedItem] = useState(false)
  const [touchedItemKey, setTouchedItemKey] = useState(false)
  const [touchedItemType, setTouchedItemType] = useState(false)

  console.log(touchedItemType)
  console.log(touchedItem)

  function equip (slot, equipament) {
    if (equipamentsOnChar[slot]) { unequip(slot, Weapons[equipamentsOnChar[slot]]) }

    dispatch({ type: 'EQUIP_RIGHT_HAND', equipament: equipament })
    dispatch({ type: 'GAIN_BONUS', bonus: equipament.bonus })
  }

  function unequip (slot, equipament) {
    if (!equipamentsOnChar[slot]) { return }
    dispatch({ type: 'UNEQUIP_RIGHT_HAND' })
    dispatch({ type: 'LOSE_BONUS', bonus: equipament.bonus })
  }

  function untouchItem () {
    setTouchedItem(false)
    setTouchedItemKey(false)
    setTouchedItemType(false)
  }

  function touchItem (item, itemKey, itemType) {
    if (touchedItemKey) return untouchItem()

    setTouchedItem(item)
    setTouchedItemKey(itemKey)
    setTouchedItemType(itemType)
  }

  function equipItem (slotType) {
    if (touchedItemType !== slotType) return untouchItem()

    else console.log('foi')
  }

  function equipamentIcon (slot) {
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
      <View style={styles.closeButton}>
        <TouchableHighlight onPress={() => closeButtonFunction()}>
          <FontAwesome name="close" size={26} color={Colors.grayPurple} />
        </TouchableHighlight>
      </View>
      <View style={styles.row}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => equipItem('helm')}>
            <EquipamentSlot active={touchedItemType === 'helm'}/>
          </TouchableOpacity>
          <Helm width={60} height={60} color={Colors.cyan}/>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => equipItem('rightHand')}>
            <EquipamentSlot active={touchedItemType === 'rightHand'}/>
          </TouchableOpacity>
          <Sword width={60} height={60} color={Colors.cyan} />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => equipItem('armor')}>
            <EquipamentSlot active={touchedItemType === 'armor'}/>
          </TouchableOpacity>
          <Armor width={60} height={60} color={Colors.cyan} />
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => equipItem('gloves')}>
            <EquipamentSlot active={touchedItemType === 'gloves'}/>
          </TouchableOpacity>
          <Gloves width={60} height={60} color={Colors.cyan} />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => equipItem('legging')}>
            <EquipamentSlot active={touchedItemType === 'legging'}/>
          </TouchableOpacity>
          <Legging width={60} height={60} color={Colors.cyan} />
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => equipItem('boots')}>
            <EquipamentSlot active={touchedItemType === 'boots'}/>
          </TouchableOpacity>
          <Boots width={60} height={60} color={Colors.cyan} />
        </View>
      </View>
      {/* <Button text="Equip 1" textColor={Colors.white} fontSize={Sizes.big} width={150} height={70} backgroundColor={Colors.grayPurple} onPress={() => equip('rightHand', Weapons.ShortSword)} />
      <Button text="UnEquip 1" textColor={Colors.white} fontSize={Sizes.big} width={150} height={70} backgroundColor={Colors.grayPurple} onPress={() => unequip('rightHand', Weapons.ShortSword)} />
      <Button text="Equip 2" textColor={Colors.white} fontSize={Sizes.big} width={150} height={70} backgroundColor={Colors.grayPurple} onPress={() => equip('rightHand', Weapons.BFB)} />
      <Button text="UnEquip 2" textColor={Colors.white} fontSize={Sizes.big} width={150} height={70} backgroundColor={Colors.grayPurple} onPress={() => unequip('rightHand', Weapons.BFB)} />
      <Button text="Voltar" textColor={Colors.white} fontSize={Sizes.big} width={150} height={70} backgroundColor={Colors.grayPurple} onPress={() => navigation.pop()} /> */}
      <View style={{ justifyContent: 'center', flexDirection: 'row', width: 400, flexWrap: 'wrap' }}>
        {equipamentList}
      </View>
      {/* { items.equipaments.map(item => (
        console.log(item)
        // <TouchableOpacity key={item.key} style={styles.slot} onPress={() => touchItem(item.key)} onLongPress={() => console.log('long')}>
        //   <EquipamentSlot active={touchedItemKey === item}/>
        // </TouchableOpacity>
      )) } */}

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
  closeButton: {
    position: 'absolute',
    right: 10
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
