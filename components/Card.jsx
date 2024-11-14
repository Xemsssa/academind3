import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React from "react";
// import Button from "./Button";
import Colors from "../constants/color";
import Input from "./Input";
const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  
});
export default Card;
