import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";

export default function SelectClass({ navigation }) {
  const dispatch = useDispatch();

  function chooseClass(charClass) {
    dispatch({ type: "CHOOSE_CLASS", class: charClass });
    navigation.navigate("Home");
  }

  return (
    <View>
      <Button title="WARRIOR" onPress={() => chooseClass("warrior")} />
      <Button title="MERCENARY" onPress={() => chooseClass("mercenary")} />
      <Button title="PYROMANCER" onPress={() => chooseClass("pyromancer")} />
      <Button title="SORCERER" onPress={() => chooseClass("sorcerer")} />
      <Button title="PRIEST" onPress={() => chooseClass("priest")} />
      <Button title="CULTIST" onPress={() => chooseClass("cultist")} />
      <Button
        title="TANTO FAZ BIXO"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}
