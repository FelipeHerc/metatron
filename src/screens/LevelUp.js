import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import CapitalizeFirstLetter from "../utils/CapitalizeFirstLetter";
import StatsOnLevelUp from "../char_specs/StatsOnLevelUp";

export default function LevelUp({ navigation }) {
  const charAttributes = useSelector((state) => state.charAttributes);
  const chakra = useSelector((state) => state.chakra);

  const dispatch = useDispatch();

  const [nextLevel, setNextLevel] = useState(charAttributes.level);

  const [vitality, setVitality] = useState(false);
  const [energy, setEnergy] = useState(false);
  const [strength, setStrength] = useState(false);
  const [hability, setHability] = useState(false);
  const [intelligence, setIntelligence] = useState(false);
  const [faith, setFaith] = useState(false);
  const [mystic, setMystic] = useState(false);

  const [hp, setHp] = useState(false);
  const [stamina, setStamina] = useState(false);
  const [mana, setMana] = useState(false);
  const [knowledge, setKnowledge] = useState(false);
  const [defense, setDefense] = useState(false);
  const [attack, setAttack] = useState(false);
  const [luck, setLuck] = useState(false);

  useEffect(() => {
    statsGainOnLevelUp();
  }, [vitality, energy, strength, hability, intelligence, faith, mystic]);

  function prepareToLevelUp() {
    if (vitality) {
      for (var i = 0; i < vitality - charAttributes.attributes.vitality; i++) levelUp("VITALITY");
      setVitality(false);
    }

    if (energy) {
      for (var i = 0; i < energy - charAttributes.attributes.energy; i++) levelUp("ENERGY");
      setEnergy(false);
    }

    if (strength) {
      for (var i = 0; i < strength - charAttributes.attributes.strength; i++) levelUp("STRENGTH");
      setStrength(false);
    }

    if (hability) {
      for (var i = 0; i < hability - charAttributes.attributes.hability; i++) levelUp("HABILITY");
      setHability(false);
    }

    if (intelligence) {
      for (var i = 0; i < intelligence - charAttributes.attributes.intelligence; i++) levelUp("INTELLIGENCE");
      setIntelligence(false);
    }

    if (faith) {
      for (var i = 0; i < faith - charAttributes.attributes.faith; i++) levelUp("FAITH");
      setFaith(false);
    }

    if (mystic) {
      for (var i = 0; i < mystic - charAttributes.attributes.mystic; i++) levelUp("MYSTIC");
      setMystic(false);
    }
  }

  function levelUp(attribute) {
    dispatch({ type: `LVL_UP_${attribute}` });
    statsReset();
  }

  function statsReset() {
    setHp(false);
    setStamina(false);
    setMana(false);
    setKnowledge(false);
    setDefense(false);
    setAttack(false);
    setLuck(false);
  }

  function attributesReset() {
    setVitality(false);
    setEnergy(false);
    setStrength(false);
    setHability(false);
    setIntelligence(false);
    setFaith(false);
    setMystic(false);
    setNextLevel(charAttributes.level);
  }

  function levelReset() {
    dispatch({ type: "LVL_RESET" });
    attributesReset();
    statsReset;
  }

  function touchAttribute(attribute) {
    switch (attribute) {
      case "vitality":
        if (vitality) {
          setVitality(vitality + 1);
          setNextLevel(nextLevel + 1);
        } else {
          setVitality(charAttributes.attributes.vitality + 1);
          setNextLevel(nextLevel + 1);
        }
        break;

      case "energy":
        if (energy) {
          setEnergy(energy + 1);
          setNextLevel(nextLevel + 1);
        } else {
          setEnergy(charAttributes.attributes.energy + 1);
          setNextLevel(nextLevel + 1);
        }
        break;

      case "strength":
        if (strength) {
          setStrength(strength + 1);
          setNextLevel(nextLevel + 1);
        } else {
          setStrength(charAttributes.attributes.strength + 1);
          setNextLevel(nextLevel + 1);
        }
        break;

      case "hability":
        if (hability) {
          setHability(hability + 1);
          setNextLevel(nextLevel + 1);
        } else {
          setHability(charAttributes.attributes.hability + 1);
          setNextLevel(nextLevel + 1);
        }
        break;

      case "intelligence":
        if (intelligence) {
          setIntelligence(intelligence + 1);
          setNextLevel(nextLevel + 1);
        } else {
          setIntelligence(charAttributes.attributes.intelligence + 1);
          setNextLevel(nextLevel + 1);
        }
        break;

      case "faith":
        if (faith) {
          setFaith(faith + 1);
          setNextLevel(nextLevel + 1);
        } else {
          setFaith(charAttributes.attributes.faith + 1);
          setNextLevel(nextLevel + 1);
        }
        break;

      case "mystic":
        if (mystic) {
          setMystic(mystic + 1);
          setNextLevel(nextLevel + 1);
        } else {
          setMystic(charAttributes.attributes.mystic + 1);
          setNextLevel(nextLevel + 1);
        }
        break;

      default:
        break;
    }
  }

  function statsGainOnLevelUp() {
    var new_hp = 0;
    var new_stamina = 0;
    var new_mana = 0;
    var new_knowledge = 0;
    var new_defense = 0;
    var new_attack = 0;
    var new_luck = 0;

    if (vitality) {
      for (var i = charAttributes.attributes.vitality + 1; i <= vitality; i++) {
        new_hp += StatsOnLevelUp.vitality[i].hp;
        new_defense += StatsOnLevelUp.vitality[i].defense;
      }
    }

    if (energy) {
      for (var i = charAttributes.attributes.energy + 1; i <= energy; i++) {
        new_stamina += StatsOnLevelUp.energy[i].stamina;
        new_defense += StatsOnLevelUp.energy[i].defense;
      }
    }

    if (strength) {
      for (var i = charAttributes.attributes.strength + 1; i <= strength; i++) {
        new_attack += StatsOnLevelUp.strength[i].attack;
        new_hp += StatsOnLevelUp.strength[i].hp;
      }
    }

    if (hability) {
      for (var i = charAttributes.attributes.hability + 1; i <= hability; i++) {
        new_attack += StatsOnLevelUp.hability[i].attack;
        new_stamina += StatsOnLevelUp.hability[i].stamina;
      }
    }

    if (intelligence) {
      for (var i = charAttributes.attributes.intelligence + 1; i <= intelligence; i++) {
        new_mana += StatsOnLevelUp.intelligence[i].mana;
        new_knowledge += StatsOnLevelUp.intelligence[i].knowledge;
      }
    }

    if (faith) {
      for (var i = charAttributes.attributes.faith + 1; i <= faith; i++) {
        new_luck += StatsOnLevelUp.faith[i].luck;
        new_mana += StatsOnLevelUp.faith[i].mana;
      }
    }

    if (mystic) {
      for (var i = charAttributes.attributes.mystic + 1; i <= mystic; i++) {
        new_knowledge += StatsOnLevelUp.mystic[i].knowledge;
        new_luck += StatsOnLevelUp.mystic[i].luck;
      }
    }

    setHp(new_hp);
    setStamina(new_stamina);
    setDefense(new_defense);
    setMana(new_mana);
    setKnowledge(new_knowledge);
    setDefense(new_defense);
    setAttack(new_attack);
    setLuck(new_luck);
  }

  return (
    <View>
      <View>
        <View style={styles.row}>
          <Text>Level: </Text>
          <Text>{charAttributes.level}</Text>
          <Text>{nextLevel > charAttributes.level ? `=> ${nextLevel}` : ""}</Text>
        </View>

        <View style={styles.row}>
          <Text>Class: {charAttributes.class}</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.row}>
            <Text>Vitality: {charAttributes.attributes.vitality}</Text>
            <Text>{vitality ? `=> ${vitality}` : ""}</Text>
          </View>
          <Button title="+" onPress={() => touchAttribute("vitality")} />
        </View>

        <View style={styles.row}>
          <View style={styles.row}>
            <Text>Energy: {charAttributes.attributes.energy}</Text>
            <Text>{energy ? `=> ${energy}` : ""}</Text>
          </View>
          <Button title="+" onPress={() => touchAttribute("energy")} />
        </View>

        <View style={styles.row}>
          <View style={styles.row}>
            <Text>Strength: {charAttributes.attributes.strength}</Text>
            <Text>{strength ? `=> ${strength}` : ""}</Text>
          </View>
          <Button title="+" onPress={() => touchAttribute("strength")} />
        </View>

        <View style={styles.row}>
          <View style={styles.row}>
            <Text>Hability: {charAttributes.attributes.hability}</Text>
            <Text>{hability ? `=> ${hability}` : ""}</Text>
          </View>
          <Button title="+" onPress={() => touchAttribute("hability")} />
        </View>

        <View style={styles.row}>
          <View style={styles.row}>
            <Text>Intelligence: {charAttributes.attributes.intelligence}</Text>
            <Text>{intelligence ? `=> ${intelligence}` : ""}</Text>
          </View>
          <Button title="+" onPress={() => touchAttribute("intelligence")} />
        </View>

        <View style={styles.row}>
          <View style={styles.row}>
            <Text>Faith: {charAttributes.attributes.faith}</Text>
            <Text>{faith ? `=> ${faith}` : ""}</Text>
          </View>
          <Button title="+" onPress={() => touchAttribute("faith")} />
        </View>

        <View style={styles.row}>
          <View style={styles.row}>
            <Text>Mystic: {charAttributes.attributes.mystic}</Text>
            <Text>{mystic ? `=> ${mystic}` : ""}</Text>
          </View>
          <Button title="+" onPress={() => touchAttribute("mystic")} />
        </View>

        <View style={styles.row}>
          <Text>
            hp: {charAttributes.stats.hp} {hp ? ` => +${hp}` : ""}
          </Text>
        </View>
        <View style={styles.row}>
          <Text>
            stamina: {charAttributes.stats.stamina} {stamina ? ` => +${stamina}` : ""}
          </Text>
        </View>
        <View style={styles.row}>
          <Text>
            mana: {charAttributes.stats.mana} {mana ? ` => +${mana}` : ""}
          </Text>
        </View>
        <View style={styles.row}>
          <Text>
            knowledge: {charAttributes.stats.knowledge} {knowledge ? ` => +${knowledge}` : ""}
          </Text>
        </View>
        <View style={styles.row}>
          <Text>
            defense: {charAttributes.stats.defense} {defense ? ` => +${defense}` : ""}
          </Text>
        </View>
        <View style={styles.row}>
          <Text>
            attack: {charAttributes.stats.attack} {attack ? ` => +${attack}` : ""}
          </Text>
        </View>
        <View style={styles.row}>
          <Text>
            luck: {charAttributes.stats.luck} {luck ? ` => +${luck}` : ""}
          </Text>
        </View>
        <Text>{chakra.chakra}</Text>
        <Button title="GANHAR DINHEIROS" onPress={() => dispatch({ type: "EARN_CURRENCY", quantity: 10000 })} />
        <Button title="perder DINHEIROS" onPress={() => dispatch({ type: "LOSE_CURRENCY", quantity: 10000 })} />
        <Button title="falir" onPress={() => dispatch({ type: "RESET_CURRENCY" })} />
      </View>

      <Button
        title="RESET ATTRIBUTES"
        onPress={() => {
          statsReset();
          attributesReset();
        }}
      />
      <Button title="LEVEL UP" onPress={() => prepareToLevelUp()} />
      <Button
        title="DEIXA EU ESCOLHE A CLASSE PO"
        onPress={() => {
          levelReset();
          navigation.navigate("SelectClass");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
