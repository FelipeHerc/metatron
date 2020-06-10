import React from "react";
import { View, StatusBar, Text, StyleSheet, Image } from "react-native";
import Colors from "../styles/Colors";
import Sizes from "../styles/Sizes";
import Cultist from "../../assets/class_icons/cultist.svg";
import Mercenary from "../../assets/class_icons/mercenary.svg";
import Priest from "../../assets/class_icons/priest.svg";
import Pyromancer from "../../assets/class_icons/pyromancer.svg";
import Sorcerer from "../../assets/class_icons/sorcerer.svg";
import Warrior from "../../assets/class_icons/warrior.svg";

function ClassIcon(className) {
  if (className == "Cultist") return <Cultist width="140" height="140" />;
  if (className == "Mercenary") return <Mercenary width="140" height="140" />;
  if (className == "Priest") return <Priest width="140" height="140" />;
  if (className == "Pyromancer") return <Pyromancer width="140" height="140" />;
  if (className == "Sorcerer") return <Sorcerer width="140" height="140" />;
  if (className == "Warrior") return <Warrior width="140" height="140" />;
}

const ClassCard = ({ className }) => (
  <View style={styles.card}>
    {ClassIcon(className)}
    <Text style={styles.name}>{className}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    alignItems: "center",
    width: 150,
    height: 160,
    margin: 10,
  },
  name: {
    fontSize: Sizes.medium,
    fontFamily: "Cinzel-Bold",
    color: Colors.white,
  },
});

export default ClassCard;
