import React from 'react'
import { View } from 'react-native'
import Styles from '../styles/Styles'
import Colors from '../styles/Colors'
import Sizes from '../styles/Sizes'
import Button from '../components/Button'
import Weapons from '../equipaments/weapons'
import { useDispatch, useSelector } from 'react-redux'

function Equipament ({ navigation }) {
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
    <View style={Styles.darkBackground}>
      <Button text="Equip 1" textColor={Colors.white} fontSize={Sizes.big} width={150} height={70} backgroundColor={Colors.grayPurple} onPress={() => equip('rightHand', Weapons.ShortSword)} />
      <Button text="UnEquip 1" textColor={Colors.white} fontSize={Sizes.big} width={150} height={70} backgroundColor={Colors.grayPurple} onPress={() => unequip('rightHand', Weapons.ShortSword)} />
      <Button text="Equip 2" textColor={Colors.white} fontSize={Sizes.big} width={150} height={70} backgroundColor={Colors.grayPurple} onPress={() => equip('rightHand', Weapons.BFB)} />
      <Button text="UnEquip 2" textColor={Colors.white} fontSize={Sizes.big} width={150} height={70} backgroundColor={Colors.grayPurple} onPress={() => unequip('rightHand', Weapons.BFB)} />
      <Button text="Voltar" textColor={Colors.white} fontSize={Sizes.big} width={150} height={70} backgroundColor={Colors.grayPurple} onPress={() => navigation.pop()} />
    </View>
  )
}

export default Equipament
