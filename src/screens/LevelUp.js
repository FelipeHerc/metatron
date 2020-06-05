import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import CapitalizeFirstLetter from "../utils/CapitalizeFirstLetter";
import StatsOnLevelUp from "../char_specs/StatsOnLevelUp";

export default function LevelUp({ navigation }) {
  const charAttributes = useSelector((state) => state.charAttributes);
  const chakra = useSelector((state) => state.chakra);

  const dispatch = useDispatch();

  const [charLevel, changedCharLevel] = useState(charAttributes.level);

  const [vitality, changedVitality] = useState(false);
  const [energy, changedEnergy] = useState(false);
  const [strength, changedStrength] = useState(false);
  const [hability, changedHability] = useState(false);
  const [intelligence, changedIntelligence] = useState(false);
  const [faith, changedFaith] = useState(false);
  const [mystic, changedMystic] = useState(false);

  const [hp, changedHp] = useState(false);
  const [stamina, changedStamina] = useState(false);
  const [mana, changedMana] = useState(false);
  const [knowledge, changedKnowledge] = useState(false);
  const [defense, changedDefense] = useState(false);
  const [attack, changedAttack] = useState(false);
  const [luck, changedLuck] = useState(false);

  useEffect(() => {
    statsGainOnLevelUp();
  }, [vitality, energy, strength, hability, intelligence, faith, mystic]);

  function prepareToLevelUp() {
    if (vitality) {
      for (var i = 0; i < vitality - charAttributes.attributes.vitality; i++) levelUp("VITALITY");
      changedVitality(false);
    }

    if (energy) {
      for (var i = 0; i < energy - charAttributes.attributes.energy; i++) levelUp("ENERGY");
      changedEnergy(false);
    }

    if (strength) {
      for (var i = 0; i < strength - charAttributes.attributes.strength; i++) levelUp("STRENGTH");
      changedStrength(false);
    }

    if (hability) {
      for (var i = 0; i < hability - charAttributes.attributes.hability; i++) levelUp("HABILITY");
      changedHability(false);
    }

    if (intelligence) {
      for (var i = 0; i < intelligence - charAttributes.attributes.intelligence; i++) levelUp("INTELLIGENCE");
      changedIntelligence(false);
    }

    if (faith) {
      for (var i = 0; i < faith - charAttributes.attributes.faith; i++) levelUp("FAITH");
      changedFaith(false);
    }

    if (mystic) {
      for (var i = 0; i < mystic - charAttributes.attributes.mystic; i++) levelUp("MYSTIC");
      changedMystic(false);
    }
  }

  function levelUp(attribute) {
    dispatch({ type: `LVL_UP_${attribute}` });
    statsReset();
  }

  function statsReset() {
    changedHp(false);
    changedStamina(false);
    changedMana(false);
    changedKnowledge(false);
    changedDefense(false);
    changedAttack(false);
    changedLuck(false);
  }

  function attributesReset() {
    changedVitality(false);
    changedEnergy(false);
    changedStrength(false);
    changedHability(false);
    changedIntelligence(false);
    changedFaith(false);
    changedMystic(false);
    changedCharLevel(charAttributes.level);
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
          changedVitality(vitality + 1);
          changedCharLevel(charLevel + 1);
        } else {
          changedVitality(charAttributes.attributes.vitality + 1);
          changedCharLevel(charLevel + 1);
        }
        break;

      case "energy":
        if (energy) {
          changedEnergy(energy + 1);
          changedCharLevel(charLevel + 1);
        } else {
          changedEnergy(charAttributes.attributes.energy + 1);
          changedCharLevel(charLevel + 1);
        }
        break;

      case "strength":
        if (strength) {
          changedStrength(strength + 1);
          changedCharLevel(charLevel + 1);
        } else {
          changedStrength(charAttributes.attributes.strength + 1);
          changedCharLevel(charLevel + 1);
        }
        break;

      case "hability":
        if (hability) {
          changedHability(hability + 1);
          changedCharLevel(charLevel + 1);
        } else {
          changedHability(charAttributes.attributes.hability + 1);
          changedCharLevel(charLevel + 1);
        }
        break;

      case "intelligence":
        if (intelligence) {
          changedIntelligence(intelligence + 1);
          changedCharLevel(charLevel + 1);
        } else {
          changedIntelligence(charAttributes.attributes.intelligence + 1);
          changedCharLevel(charLevel + 1);
        }
        break;

      case "faith":
        if (faith) {
          changedFaith(faith + 1);
          changedCharLevel(charLevel + 1);
        } else {
          changedFaith(charAttributes.attributes.faith + 1);
          changedCharLevel(charLevel + 1);
        }
        break;

      case "mystic":
        if (mystic) {
          changedMystic(mystic + 1);
          changedCharLevel(charLevel + 1);
        } else {
          changedMystic(charAttributes.attributes.mystic + 1);
          changedCharLevel(charLevel + 1);
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

    changedHp(new_hp);
    changedStamina(new_stamina);
    changedDefense(new_defense);
    changedMana(new_mana);
    changedKnowledge(new_knowledge);
    changedDefense(new_defense);
    changedAttack(new_attack);
    changedLuck(new_luck);
  }

  return (
    <View>
      <View>
        <View style={styles.row}>
          <Text>Level: </Text>
          <Text>{charAttributes.level}</Text>
          <Text>{charLevel > charAttributes.level ? `=> ${charLevel}` : ""}</Text>
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
