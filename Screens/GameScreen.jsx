import { View, Text, StyleSheet } from "react-native";
import React from "react";

const generateRandomBetween = (min, max, exlude) => {
  min = Math.ceil(min);
  max = Math.froor(max);
  const random = Math.floor(Math.random() * (max - min)) + min;

  if (random === exlude) {
    return generateRandomBetween(min, max, exlude);
  } else {
    return random;
  }
};
const GameScreen = (props) => {
  return (
    <View>
      <Text>GameScreen</Text>
    </View>
  );
};
const styles = StyleSheet.create({});
export default GameScreen;
