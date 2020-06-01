import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import CapitalizeFirstLetter from "../utils/CapitalizeFirstLetter";

export default function LevelUp({ navigation }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [charLevel, changedCharLevel] = React.useState(
    state.charAttributes.level
  );
  const [vitality, changedVitality] = React.useState(false);
  const [energy, changedEnergy] = React.useState(false);
  const [strength, changedStrength] = React.useState(false);
  const [hability, changedHability] = React.useState(false);
  const [intelligence, changedIntelligence] = React.useState(false);
  const [faith, changedFaith] = React.useState(false);
  const [mystic, changedMystic] = React.useState(false);

  function prepareToLevelUp() {
    console.log(vitality);
    if (vitality) {
      for (
        var i = 0;
        i < vitality - state.charAttributes.attributes.vitality;
        i++
      )
        levelUp("VITALITY");
      changedVitality(false);
    }

    if (energy) {
      for (var i = 0; i < energy - state.charAttributes.attributes.energy; i++)
        levelUp("ENERGY");
      changedEnergy(false);
    }

    if (strength) {
      for (
        var i = 0;
        i < strength - state.charAttributes.attributes.strength;
        i++
      )
        levelUp("STRENGTH");
      changedStrength(false);
    }

    if (hability) {
      for (
        var i = 0;
        i < hability - state.charAttributes.attributes.energy;
        i++
      )
        levelUp("HABILITY");
      changedHability(false);
    }

    if (intelligence) {
      for (
        var i = 0;
        i < intelligence - state.charAttributes.attributes.intelligence;
        i++
      )
        levelUp("INTELLIGENCE");
      changedIntelligence(false);
    }

    if (faith) {
      for (var i = 0; i < faith - state.charAttributes.attributes.faith; i++)
        levelUp("FAITH");
      changedFaith(false);
    }

    if (mystic) {
      for (var i = 0; i < mystic - state.charAttributes.attributes.mystic; i++)
        levelUp("MYSTIC");
      changedMystic(false);
    }
  }

  function levelUp(attribute) {
    dispatch({ type: `LVL_UP_${attribute}` });
  }

  function attributeReset() {
    changedVitality(false);
    changedEnergy(false);
    changedStrength(false);
    changedHability(false);
    changedIntelligence(false);
    changedFaith(false);
    changedMystic(false);
    changedCharLevel(1);
  }

  function levelReset() {
    dispatch({ type: "LVL_RESET" });
    attributeReset();
  }

  function touchAttribute(attribute) {
    switch (attribute) {
      case "vitality":
        if (vitality) {
          changedVitality(vitality + 1);
          changedCharLevel(charLevel + 1);
        } else {
          changedVitality(state.charAttributes.attributes.vitality + 1);
          changedCharLevel(charLevel + 1);
        }
        break;

      case "energy":
        if (energy) {
          changedEnergy(energy + 1);
          changedCharLevel(charLevel + 1);
        } else {
          changedEnergy(state.charAttributes.attributes.energy + 1);
          changedCharLevel(charLevel + 1);
        }
        break;

      case "strength":
        if (strength) {
          changedStrength(strength + 1);
          changedCharLevel(charLevel + 1);
        } else {
          changedStrength(state.charAttributes.attributes.strength + 1);
          changedCharLevel(charLevel + 1);
        }
        break;

      case "hability":
        if (hability) {
          changedHability(hability + 1);
          changedCharLevel(charLevel + 1);
        } else {
          changedHability(state.charAttributes.attributes.hability + 1);
          changedCharLevel(charLevel + 1);
        }
        break;

      case "intelligence":
        if (intelligence) {
          changedIntelligence(intelligence + 1);
          changedCharLevel(charLevel + 1);
        } else {
          changedIntelligence(state.charAttributes.attributes.intelligence + 1);
          changedCharLevel(charLevel + 1);
        }
        break;

      case "faith":
        if (faith) {
          changedFaith(faith + 1);
          changedCharLevel(charLevel + 1);
        } else {
          changedFaith(state.charAttributes.attributes.faith + 1);
          changedCharLevel(charLevel + 1);
        }
        break;

      case "mystic":
        if (mystic) {
          changedMystic(mystic + 1);
          changedCharLevel(charLevel + 1);
        } else {
          changedMystic(state.charAttributes.attributes.mystic + 1);
          changedCharLevel(charLevel + 1);
        }
        break;

      default:
        break;
    }
  }

  return (
    <View>
      <View>
        <View style={styles.row}>
          <Text>Level: </Text>
          <Text>{state.charAttributes.level}</Text>
          <Text>
            {charLevel > state.charAttributes.level ? `=> ${charLevel}` : ""}
          </Text>
        </View>

        <View style={styles.row}>
          <Text>Class: {state.charAttributes.class}</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.row}>
            <Text>Vitality: {state.charAttributes.attributes.vitality}</Text>
            <Text>{vitality ? `=> ${vitality}` : ""}</Text>
          </View>
          <Button title="+" onPress={() => touchAttribute("vitality")} />
        </View>

        <View style={styles.row}>
          <View style={styles.row}>
            <Text>Energy: {state.charAttributes.attributes.energy}</Text>
            <Text>{energy ? `=> ${energy}` : ""}</Text>
          </View>
          <Button title="+" onPress={() => touchAttribute("energy")} />
        </View>

        <View style={styles.row}>
          <View style={styles.row}>
            <Text>Strength: {state.charAttributes.attributes.strength}</Text>
            <Text>{strength ? `=> ${strength}` : ""}</Text>
          </View>
          <Button title="+" onPress={() => touchAttribute("strength")} />
        </View>

        <View style={styles.row}>
          <View style={styles.row}>
            <Text>Hability: {state.charAttributes.attributes.hability}</Text>
            <Text>{hability ? `=> ${hability}` : ""}</Text>
          </View>
          <Button title="+" onPress={() => touchAttribute("hability")} />
        </View>

        <View style={styles.row}>
          <View style={styles.row}>
            <Text>
              Intelligence: {state.charAttributes.attributes.intelligence}
            </Text>
            <Text>{intelligence ? `=> ${intelligence}` : ""}</Text>
          </View>
          <Button title="+" onPress={() => touchAttribute("intelligence")} />
        </View>

        <View style={styles.row}>
          <View style={styles.row}>
            <Text>Faith: {state.charAttributes.attributes.faith}</Text>
            <Text>{faith ? `=> ${faith}` : ""}</Text>
          </View>
          <Button title="+" onPress={() => touchAttribute("faith")} />
        </View>

        <View style={styles.row}>
          <View style={styles.row}>
            <Text>Mystic: {state.charAttributes.attributes.mystic}</Text>
            <Text>{mystic ? `=> ${mystic}` : ""}</Text>
          </View>
          <Button title="+" onPress={() => touchAttribute("mystic")} />
        </View>
      </View>
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
