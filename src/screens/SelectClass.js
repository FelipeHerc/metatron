import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Classes from "../char_specs/Classes";

export default function SelectClass({ navigation }) {
  const dispatch = useDispatch();

  function chooseClass(charClass) {
    for (var i = 0; i < Object.keys(Classes[charClass]).length; i++) {
      const stat = Object.keys(Classes[charClass])[i];
      const classLvlUpQuantity = Classes[charClass][stat];

      for (var j = 0; j < classLvlUpQuantity; j++) {
        dispatch({ type: `LVL_UP_${stat.toUpperCase()}` });
      }
    }
    dispatch({ type: "CHOOSE_CLASS", class: charClass });
    navigation.navigate("LevelUp");
  }

  return (
    <View>
      <Button title="WARRIOR" onPress={() => chooseClass("warrior")} />
      <Button title="MERCENARY" onPress={() => chooseClass("mercenary")} />
      <Button title="PYROMANCER" onPress={() => chooseClass("pyromancer")} />
      <Button title="SORCERER" onPress={() => chooseClass("sorcerer")} />
      <Button title="PRIEST" onPress={() => chooseClass("priest")} />
      <Button title="CULTIST" onPress={() => chooseClass("cultist")} />
      <Button title="TANTO FAZ BIXO" onPress={() => navigation.navigate("LevelUp")} />
    </View>
  );
}
