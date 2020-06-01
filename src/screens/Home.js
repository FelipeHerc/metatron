import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import StatusBar from "../components/StatusBar";
import { useSelector, useDispatch } from "react-redux";

export default function Home({ navigation }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  function levelUp(attribute) {
    dispatch({ type: `LVL_UP_${attribute}` });
  }

  function levelReset() {
    dispatch({ type: "LVL_RESET" });
  }

  return (
    <View>
      <View>
        <Text>Class: {state.charAttributes.class}</Text>
        <Text>Level: {state.charAttributes.level}</Text>
        <Text>Vitality: {state.charAttributes.attributes.vitality}</Text>
        <Text>Energy: {state.charAttributes.attributes.energy}</Text>
        <Text>Strength: {state.charAttributes.attributes.strength}</Text>
        <Text>Hability: {state.charAttributes.attributes.hability}</Text>
        <Text>
          Intelligence: {state.charAttributes.attributes.intelligence}
        </Text>
        <Text>Faith: {state.charAttributes.attributes.faith}</Text>
        <Text>Mystic: {state.charAttributes.attributes.mystic}</Text>
      </View>
      <View>
        <Text>hp: {state.charAttributes.stats.hp}</Text>
        <Text>stamina: {state.charAttributes.stats.stamina}</Text>
        <Text>mana: {state.charAttributes.stats.mana}</Text>
        <Text>knowledge: {state.charAttributes.stats.knowledge}</Text>
        <Text>defense: {state.charAttributes.stats.defense}</Text>
        <Text>attack: {state.charAttributes.stats.attack}</Text>
        <Text>luck: {state.charAttributes.stats.luck}</Text>
      </View>
      <Button title="LVL UP VITALITY" onPress={() => levelUp("VITALITY")} />
      <Button title="LVL UP ENERGY" onPress={() => levelUp("ENERGY")} />
      <Button title="LVL UP STRENGTH" onPress={() => levelUp("STRENGTH")} />
      <Button title="LVL UP HABILITY" onPress={() => levelUp("HABILITY")} />
      <Button
        title="LVL UP INTELLIGENCE"
        onPress={() => levelUp("INTELLIGENCE")}
      />
      <Button title="LVL UP FAITH" onPress={() => levelUp("FAITH")} />
      <Button title="LVL UP MYSTIC" onPress={() => levelUp("MYSTIC")} />
      <Button title="RESET" onPress={() => levelReset()} />
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
