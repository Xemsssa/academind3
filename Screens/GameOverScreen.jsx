import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

const GameOverScreen = (props) => {
  return (
    <View>
      <Text>GameOverScreen</Text>
      <Text>Number of rounds {props.numberOfRounds}</Text>
      <Text>Number was: {props.userNumberWas}</Text>
      <Button title="Restart the Game" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default GameOverScreen;
