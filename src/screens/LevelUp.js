import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import StatsOnLevelUp from '../char_specs/StatsOnLevelUp'
import ChakraOnLevelUp from '../char_specs/ChakraOnLevelUp'
import AttributeLevelUp from '../components/AttributeLevelUp'

export default function LevelUp ({ navigation }) {
  const charAttributes = useSelector((state) => state.charAttributes)
  const chakra = useSelector((state) => state.chakra)

  const dispatch = useDispatch()

  const [spentChackra, setSpentChackra] = useState(0)
  const [nextLevel, setNextLevel] = useState(charAttributes.level)
  const [nextLevelCost, setNextLevelCost] = useState(ChakraOnLevelUp[charAttributes.level + 1])

  const [vitality, setVitality] = useState(false)
  const [energy, setEnergy] = useState(false)
  const [strength, setStrength] = useState(false)
  const [hability, setHability] = useState(false)
  const [intelligence, setIntelligence] = useState(false)
  const [faith, setFaith] = useState(false)
  const [mystic, setMystic] = useState(false)

  const [hp, setHp] = useState(false)
  const [stamina, setStamina] = useState(false)
  const [mana, setMana] = useState(false)
  const [knowledge, setKnowledge] = useState(false)
  const [defense, setDefense] = useState(false)
  const [attack, setAttack] = useState(false)
  const [luck, setLuck] = useState(false)

  useEffect(() => {
    statsGainOnLevelUp()
  }, [vitality, energy, strength, hability, intelligence, faith, mystic])

  useEffect(() => {
    if (nextLevel === charAttributes.level) return
    var chakraCost = spentChackra
    chakraCost += ChakraOnLevelUp[nextLevel]
    setSpentChackra(chakraCost)
    setNextLevelCost(ChakraOnLevelUp[nextLevel])
  }, [nextLevel])

  const prepareToLevelUp = () => {
    if (vitality) {
      for (var i = 0; i < vitality - charAttributes.attributes.vitality; i++) levelUp('VITALITY')
      setVitality(false)
    }

    if (energy) {
      for (var i = 0; i < energy - charAttributes.attributes.energy; i++) levelUp('ENERGY')
      setEnergy(false)
    }

    if (strength) {
      for (var i = 0; i < strength - charAttributes.attributes.strength; i++) levelUp('STRENGTH')
      setStrength(false)
    }

    if (hability) {
      for (var i = 0; i < hability - charAttributes.attributes.hability; i++) levelUp('HABILITY')
      setHability(false)
    }

    if (intelligence) {
      for (var i = 0; i < intelligence - charAttributes.attributes.intelligence; i++) levelUp('INTELLIGENCE')
      setIntelligence(false)
    }

    if (faith) {
      for (var i = 0; i < faith - charAttributes.attributes.faith; i++) levelUp('FAITH')
      setFaith(false)
    }

    if (mystic) {
      for (var i = 0; i < mystic - charAttributes.attributes.mystic; i++) levelUp('MYSTIC')
      setMystic(false)
    }

    dispatch({ type: 'LOSE_CURRENCY', quantity: spentChackra })
    setSpentChackra(0)
  }

  const levelUp = (attribute) => {
    dispatch({ type: 'LEVEL_UP_USING_CURRENCY', level: charAttributes.level })
    dispatch({ type: `LVL_UP_${attribute}` })
    statsReset()
  }

  const statsReset = () => {
    setHp(false)
    setStamina(false)
    setMana(false)
    setKnowledge(false)
    setDefense(false)
    setAttack(false)
    setLuck(false)
  }

  const attributesReset = () => {
    setVitality(false)
    setEnergy(false)
    setStrength(false)
    setHability(false)
    setIntelligence(false)
    setFaith(false)
    setMystic(false)
    setNextLevel(charAttributes.level)
    setSpentChackra(0)
  }

  const levelReset = () => {
    dispatch({ type: 'LVL_RESET' })
    attributesReset()
    statsReset()
  }

  const touchAttribute = (attribute) => {
    switch (attribute) {
      case 'vitality':
        if (vitality) {
          setVitality(vitality + 1)
          setNextLevel(nextLevel + 1)
        } else {
          setVitality(charAttributes.attributes.vitality + 1)
          setNextLevel(nextLevel + 1)
        }
        break

      case 'energy':
        if (energy) {
          setEnergy(energy + 1)
          setNextLevel(nextLevel + 1)
        } else {
          setEnergy(charAttributes.attributes.energy + 1)
          setNextLevel(nextLevel + 1)
        }
        break

      case 'strength':
        if (strength) {
          setStrength(strength + 1)
          setNextLevel(nextLevel + 1)
        } else {
          setStrength(charAttributes.attributes.strength + 1)
          setNextLevel(nextLevel + 1)
        }
        break

      case 'hability':
        if (hability) {
          setHability(hability + 1)
          setNextLevel(nextLevel + 1)
        } else {
          setHability(charAttributes.attributes.hability + 1)
          setNextLevel(nextLevel + 1)
        }
        break

      case 'intelligence':
        if (intelligence) {
          setIntelligence(intelligence + 1)
          setNextLevel(nextLevel + 1)
        } else {
          setIntelligence(charAttributes.attributes.intelligence + 1)
          setNextLevel(nextLevel + 1)
        }
        break

      case 'faith':
        if (faith) {
          setFaith(faith + 1)
          setNextLevel(nextLevel + 1)
        } else {
          setFaith(charAttributes.attributes.faith + 1)
          setNextLevel(nextLevel + 1)
        }
        break

      case 'mystic':
        if (mystic) {
          setMystic(mystic + 1)
          setNextLevel(nextLevel + 1)
        } else {
          setMystic(charAttributes.attributes.mystic + 1)
          setNextLevel(nextLevel + 1)
        }
        break

      default:
        break
    }
  }

  const statsGainOnLevelUp = () => {
    var newHp = 0
    var newStamina = 0
    var newMana = 0
    var newKnowledge = 0
    var newDefense = 0
    var newAttack = 0
    var newLuck = 0

    if (vitality) {
      for (var i = charAttributes.attributes.vitality + 1; i <= vitality; i++) {
        newHp += StatsOnLevelUp.vitality[i].hp
        newDefense += StatsOnLevelUp.vitality[i].defense
      }
    }

    if (energy) {
      for (var i = charAttributes.attributes.energy + 1; i <= energy; i++) {
        newStamina += StatsOnLevelUp.energy[i].stamina
        newDefense += StatsOnLevelUp.energy[i].defense
      }
    }

    if (strength) {
      for (var i = charAttributes.attributes.strength + 1; i <= strength; i++) {
        newAttack += StatsOnLevelUp.strength[i].attack
        newHp += StatsOnLevelUp.strength[i].hp
      }
    }

    if (hability) {
      for (var i = charAttributes.attributes.hability + 1; i <= hability; i++) {
        newAttack += StatsOnLevelUp.hability[i].attack
        newStamina += StatsOnLevelUp.hability[i].stamina
      }
    }

    if (intelligence) {
      for (var i = charAttributes.attributes.intelligence + 1; i <= intelligence; i++) {
        newMana += StatsOnLevelUp.intelligence[i].mana
        newKnowledge += StatsOnLevelUp.intelligence[i].knowledge
      }
    }

    if (faith) {
      for (var i = charAttributes.attributes.faith + 1; i <= faith; i++) {
        newLuck += StatsOnLevelUp.faith[i].luck
        newMana += StatsOnLevelUp.faith[i].mana
      }
    }

    if (mystic) {
      for (var i = charAttributes.attributes.mystic + 1; i <= mystic; i++) {
        newKnowledge += StatsOnLevelUp.mystic[i].knowledge
        newLuck += StatsOnLevelUp.mystic[i].luck
      }
    }

    setHp(newHp)
    setStamina(newStamina)
    setDefense(newDefense)
    setMana(newMana)
    setKnowledge(newKnowledge)
    setDefense(newDefense)
    setAttack(newAttack)
    setLuck(newLuck)
  }

  const denyLevelUp = (attribute) => {
    return nextLevelCost + spentChackra > chakra.chakra
  }

  return (
    <View>
      <View style={styles.row}>
        <Text>Level: </Text>
        <Text>{charAttributes.level}</Text>
        <Text>{nextLevel > charAttributes.level ? `=> ${nextLevel}` : ''}</Text>
      </View>

      <View style={styles.row}>
        <Text>{`Seus dinheiros: ${chakra.chakra}`}</Text>
      </View>

      <View style={styles.row}>
        <Text>{`Custo para o proximo level: ${nextLevelCost}`}</Text>
      </View>

      <View style={styles.row}>
        <Text>Class: {charAttributes.class}</Text>
      </View>
      <View style={styles.row}>
        <View>
          <AttributeLevelUp
            currentAttributeLevel={charAttributes.attributes.vitality}
            nextAttributeLevel={vitality}
            attribute="vitality"
            denyLevelUp={denyLevelUp('vitality')}
            touchAttribute={() => touchAttribute('vitality')}
          />

          <AttributeLevelUp
            currentAttributeLevel={charAttributes.attributes.energy}
            nextAttributeLevel={energy}
            attribute="energy"
            denyLevelUp={denyLevelUp('energy')}
            touchAttribute={() => touchAttribute('energy')}
          />

          <AttributeLevelUp
            currentAttributeLevel={charAttributes.attributes.strength}
            nextAttributeLevel={strength}
            attribute="strength"
            denyLevelUp={denyLevelUp('strength')}
            touchAttribute={() => touchAttribute('strength')}
          />

          <AttributeLevelUp
            currentAttributeLevel={charAttributes.attributes.hability}
            nextAttributeLevel={hability}
            attribute="hability"
            denyLevelUp={denyLevelUp('hability')}
            touchAttribute={() => touchAttribute('hability')}
          />

          <AttributeLevelUp
            currentAttributeLevel={charAttributes.attributes.intelligence}
            nextAttributeLevel={intelligence}
            attribute="intelligence"
            denyLevelUp={denyLevelUp('intelligence')}
            touchAttribute={() => touchAttribute('intelligence')}
          />

          <AttributeLevelUp
            currentAttributeLevel={charAttributes.attributes.faith}
            nextAttributeLevel={faith}
            attribute="faith"
            denyLevelUp={denyLevelUp('faith')}
            touchAttribute={() => touchAttribute('faith')}
          />

          <AttributeLevelUp
            currentAttributeLevel={charAttributes.attributes.mystic}
            nextAttributeLevel={mystic}
            attribute="mystic"
            denyLevelUp={denyLevelUp('mystic')}
            touchAttribute={() => touchAttribute('mystic')}
          />
        </View>
        <View>
          <View style={styles.row}>
            <Text>
              hp: {charAttributes.stats.hp} {hp ? ` => +${hp}` : ''}
            </Text>
          </View>
          <View style={styles.row}>
            <Text>
              stamina: {charAttributes.stats.stamina} {stamina ? ` => +${stamina}` : ''}
            </Text>
          </View>
          <View style={styles.row}>
            <Text>
              mana: {charAttributes.stats.mana} {mana ? ` => +${mana}` : ''}
            </Text>
          </View>
          <View style={styles.row}>
            <Text>
              knowledge: {charAttributes.stats.knowledge} {knowledge ? ` => +${knowledge}` : ''}
            </Text>
          </View>
          <View style={styles.row}>
            <Text>
              defense: {charAttributes.stats.defense} {defense ? ` => +${defense}` : ''}
            </Text>
          </View>
          <View style={styles.row}>
            <Text>
              attack: {charAttributes.stats.attack} {attack ? ` => +${attack}` : ''}
            </Text>
          </View>
          <View style={styles.row}>
            <Text>
              luck: {charAttributes.stats.luck} {luck ? ` => +${luck}` : ''}
            </Text>
          </View>
        </View>
      </View>
      <Button title="GANHAR DINHEIROS" onPress={() => dispatch({ type: 'EARN_CURRENCY', quantity: 10000 })} />
      <Button title="perder DINHEIROS" onPress={() => dispatch({ type: 'LOSE_CURRENCY', quantity: 100 })} />
      <Button title="falir" onPress={() => dispatch({ type: 'RESET_CURRENCY' })} />

      <Text>custo: {spentChackra}</Text>

      <Button
        title="RESET ATTRIBUTES"
        onPress={() => {
          statsReset()
          attributesReset()
        }}
      />
      <Button title="LEVEL UP" onPress={() => prepareToLevelUp()} />
      <Button title="zerar custo" onPress={() => setSpentChackra(0)} />
      <Button
        title="DEIXA EU ESCOLHE A CLASSE PO"
        onPress={() => {
          levelReset()
          navigation.pop()
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
})
