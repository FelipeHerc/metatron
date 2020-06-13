import React from 'react'
import { View, StyleSheet, TouchableHighlight } from 'react-native'
import Styles from '../styles/Styles'
import Colors from '../styles/Colors'
import Sizes from '../styles/Sizes'
import Button from '../components/Button'
import Weapons from '../equipaments/weapons'
import { useDispatch, useSelector } from 'react-redux'
import EquipamentSlot from '../components/EquipamentSlot'
import Helm from '../../assets/icons/helm.svg'
import Armor from '../../assets/icons/armor.svg'
import Legging from '../../assets/icons/legging.svg'
import Gloves from '../../assets/icons/gloves.svg'
import Boots from '../../assets/icons/boots.svg'
import Sword from '../../assets/icons/sword.svg'

import { FontAwesome } from '@expo/vector-icons'

export default function Equipament ({ navigation, closeButtonFunction }) {
  const dispatch = useDispatch()
  const equipamentsOnChar = useSelector((state) => state.equipament)

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

  return (
    <View>
      <View style={styles.closeButton}>
        <TouchableHighlight onPress={() => closeButtonFunction()}>
          <FontAwesome name="close" size={26} color={Colors.grayPurple} />
        </TouchableHighlight>
      </View>
      <View style={styles.row}>
        <View style={styles.row}>
          <EquipamentSlot />
          <Helm width={60} height={60} color={Colors.cyan}/>
        </View>
        <View style={styles.row}>
          <EquipamentSlot />
          <Sword width={60} height={60} color={Colors.cyan} />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.row}>
          <EquipamentSlot />
          <Armor width={60} height={60} color={Colors.cyan} />
        </View>
        <View style={styles.row}>
          <EquipamentSlot />
          <Gloves width={60} height={60} color={Colors.cyan} />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.row}>
          <EquipamentSlot />
          <Legging width={60} height={60} color={Colors.cyan} />
        </View>
        <View style={styles.row}>
          <EquipamentSlot />
          <Boots width={60} height={60} color={Colors.cyan} />
        </View>
      </View>
      {/* <Button text="Equip 1" textColor={Colors.white} fontSize={Sizes.big} width={150} height={70} backgroundColor={Colors.grayPurple} onPress={() => equip('rightHand', Weapons.ShortSword)} />
      <Button text="UnEquip 1" textColor={Colors.white} fontSize={Sizes.big} width={150} height={70} backgroundColor={Colors.grayPurple} onPress={() => unequip('rightHand', Weapons.ShortSword)} />
      <Button text="Equip 2" textColor={Colors.white} fontSize={Sizes.big} width={150} height={70} backgroundColor={Colors.grayPurple} onPress={() => equip('rightHand', Weapons.BFB)} />
      <Button text="UnEquip 2" textColor={Colors.white} fontSize={Sizes.big} width={150} height={70} backgroundColor={Colors.grayPurple} onPress={() => unequip('rightHand', Weapons.BFB)} />
      <Button text="Voltar" textColor={Colors.white} fontSize={Sizes.big} width={150} height={70} backgroundColor={Colors.grayPurple} onPress={() => navigation.pop()} /> */}
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
  }
})
