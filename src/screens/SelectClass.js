import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import Classes from '../char_specs/Classes'
import ClassCard from '../components/ClassCard'
import Styles from '../styles/Styles'
import Sizes from '../styles/Sizes'
import Colors from '../styles/Colors'
import { TouchableHighlight } from 'react-native-gesture-handler'
import Button from '../components/Button'

export default function SelectClass ({ navigation }) {
  const dispatch = useDispatch()

  const [selectedClass, setSelectedClass] = useState()

  function chooseClass (charClass) {
    const chosenClass = charClass.toLowerCase()
    for (var i = 0; i < Object.keys(Classes[chosenClass]).length; i++) {
      const stat = Object.keys(Classes[chosenClass])[i]
      const classLvlUpQuantity = Classes[chosenClass][stat]

      for (var j = 0; j < classLvlUpQuantity; j++) {
        dispatch({ type: `LVL_UP_${stat.toUpperCase()}` })
      }
    }
    dispatch({ type: 'CHOOSE_CLASS', class: chosenClass })
    navigation.navigate('Home')
  }

  function classText (className) {
    let text = ''
    if (className === 'Cultist') text = 'High Mystic, sacrifices his sanity to the Old Lords acquire power'
    if (className === 'Mercenary') text = 'Extreme high Hability, uses his high speed to land fast and deadly attacks'
    if (className === 'Priest') text = 'Extreme high Faith, call upon the power of the divine to burn the enemies with holy fire'
    if (className === 'Pyromancer') text = 'High Intelligence and Faith, consumes his own soul to generate fire spells'
    if (className === 'Sorcerer') text = 'Extreme high Intelligence, uses arcane magic as the main weapon'
    if (className === 'Warrior') text = 'High Strength and Vitality, uses heavy weapons to bash the enemies'

    return <Text style={[styles.text, { paddingBottom: 20 }]}>{text}</Text>
  }

  let classDescription
  if (selectedClass) {
    classDescription = (
      <View>
        <Text style={[styles.title, { marginTop: 5, marginBottom: 5 }]}>{selectedClass}</Text>
        {classText(selectedClass)}
        <View style={Styles.colCenter}>
          <Button text='BEGIN' textColor={Colors.white} width={110} height={70} fontSize={Sizes.big} backgroundColor={Colors.grayPurple} onPress={() => chooseClass(selectedClass)} />
        </View>
      </View>
    )
  }

  return (
    <View style={Styles.darkBackground}>
      <Text style={[styles.title, { marginTop: 20, marginBottom: 10 }]}>Choose your class</Text>
      <View style={Styles.colCenter}>
        <View style={Styles.rowCenter}>
          <TouchableHighlight onPress={() => setSelectedClass('Warrior')}>
            <ClassCard className='Warrior' />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => setSelectedClass('Mercenary')}>
            <ClassCard className='Mercenary' />
          </TouchableHighlight>
        </View>
        <View style={Styles.rowCenter}>
          <TouchableHighlight onPress={() => setSelectedClass('Pyromancer')}>
            <ClassCard className='Pyromancer' />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => setSelectedClass('Sorcerer')}>
            <ClassCard className='Sorcerer' />
          </TouchableHighlight>
        </View>
        <View style={Styles.rowCenter}>
          <TouchableHighlight onPress={() => setSelectedClass('Priest')}>
            <ClassCard className='Priest' />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => setSelectedClass('Cultist')}>
            <ClassCard className='Cultist' />
          </TouchableHighlight>
        </View>
      </View>
      {classDescription}
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: Sizes.big,
    fontFamily: 'Cinzel-Bold',
    color: Colors.white,
    textAlign: 'center'
  },
  text: {
    fontSize: Sizes.small,
    fontFamily: 'Cinzel-Regular',
    color: Colors.white,
    textAlign: 'center'
  }
})
