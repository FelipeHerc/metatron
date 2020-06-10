import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Classes from "../char_specs/Classes";
import ClassCard from "../components/ClassCard";
import Styles from "../styles/Styles";
import Sizes from "../styles/Sizes";
import Colors from "../styles/Colors";
import { TouchableHighlight } from "react-native-gesture-handler";

export default function SelectClass({ navigation }) {
  const dispatch = useDispatch();

  const [selectedClass, setSelectedClass] = useState();

  function chooseClass(charClass) {
    let chosenClass = charClass.toLowerCase();
    for (var i = 0; i < Object.keys(Classes[chosenClass]).length; i++) {
      const stat = Object.keys(Classes[chosenClass])[i];
      const classLvlUpQuantity = Classes[chosenClass][stat];

      for (var j = 0; j < classLvlUpQuantity; j++) {
        dispatch({ type: `LVL_UP_${stat.toUpperCase()}` });
      }
    }
    dispatch({ type: "CHOOSE_CLASS", class: chosenClass });
    navigation.navigate("LevelUp");
  }

  function classText(className) {
    if (className == "Cultist") return <Text style={styles.text}>High Mystic, sacrifices his sanity to the Old Lords acquire power</Text>;
    if (className == "Mercenary") return <Text style={styles.text}>Extreme high Hability, uses his high speed to land fast and deadly attacks</Text>;
    if (className == "Priest") return <Text style={styles.text}>Extreme high Faith, call upon the power of the divine to burn the enemies with holy fire</Text>;
    if (className == "Pyromancer") return <Text style={styles.text}>High Intelligence and Faith, consumes his own soul to generate fire spells</Text>;
    if (className == "Sorcerer") return <Text style={styles.text}>Extreme high Intelligence, uses arcane magic as the main weapon</Text>;
    if (className == "Warrior") return <Text style={styles.text}>High Strength and Vitality, uses heavy weapons to bash the enemies</Text>;
  }

  let classDescription;
  if (selectedClass) {
    classDescription = (
      <View>
        <Text style={[styles.title, { marginTop: 5, marginBottom: 5 }]}>{selectedClass}</Text>
        {classText(selectedClass)}
        <View style={Styles.colCenter}>
          <TouchableHighlight onPress={() => chooseClass(selectedClass)} style={styles.button}>
            <Text style={[styles.title, { marginTop: 20, marginBottom: 10 }]}>BEGIN</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  return (
    <View style={Styles.darkBackground}>
      <Text style={[styles.title, { marginTop: 20, marginBottom: 10 }]}>Choose your class</Text>
      {/* <Button title="WARRIOR" onPress={() => chooseClass("warrior")} />
      <Button title="MERCENARY" onPress={() => chooseClass("mercenary")} />
      <Button title="PYROMANCER" onPress={() => chooseClass("pyromancer")} />
      <Button title="SORCERER" onPress={() => chooseClass("sorcerer")} />
      <Button title="PRIEST" onPress={() => chooseClass("priest")} />
      <Button title="CULTIST" onPress={() => chooseClass("cultist")} />
      <Button title="TANTO FAZ BIXO" onPress={() => navigation.navigate("LevelUp")} /> */}
      <View style={Styles.colCenter}>
        <View style={Styles.rowCenter}>
          <TouchableHighlight onPress={() => setSelectedClass("Warrior")}>
            <ClassCard className="Warrior" />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => setSelectedClass("Mercenary")}>
            <ClassCard className="Mercenary" />
          </TouchableHighlight>
        </View>
        <View style={Styles.rowCenter}>
          <TouchableHighlight onPress={() => setSelectedClass("Pyromancer")}>
            <ClassCard className="Pyromancer" />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => setSelectedClass("Sorcerer")}>
            <ClassCard className="Sorcerer" />
          </TouchableHighlight>
        </View>
        <View style={Styles.rowCenter}>
          <TouchableHighlight onPress={() => setSelectedClass("Priest")}>
            <ClassCard className="Priest" />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => setSelectedClass("Cultist")}>
            <ClassCard className="Cultist" />
          </TouchableHighlight>
        </View>
      </View>
      {classDescription}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: Sizes.big,
    fontFamily: "Cinzel-Bold",
    color: Colors.white,
    textAlign: "center",
  },
  text: {
    fontSize: Sizes.small,
    fontFamily: "Cinzel-Regular",
    color: Colors.white,
    textAlign: "center",
  },
  button: {
    marginTop: 10,
    width: 100,
    height: 70,
  },
});
