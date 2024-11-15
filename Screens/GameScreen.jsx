import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  Alert,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

const generateRandomBetween = (min, max, exlude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const random = Math.floor(Math.random() * (max - min)) + min;

  if (random === exlude) {
    return generateRandomBetween(min, max, exlude);
  } else {
    return random;
  }
};
const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.user)
  );
  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === props.userChoice) {
      props.onGameOver(rounds);
    }
  }, [currentGuess, props.userChoice, props.onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Dont lie ", "You know that is wrong", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds((curRounds) => {
      curRounds + 1;
    });
  };
  return (
    <SafeAreaView>
      <View style={styles.screen}>
        <Text>Oponent's currentGuess</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card style={styles.buttonContainer}>
          <Button
            title="Lower"
            onPress={() => {
              // nextGuessHandle.bind(this, "lower");
              nextGuessHandler("lower");
            }}
          />
          <Button
            title="Greater"
            onPress={() => {
              // nextGuessHandle.bind(this, "Greater");
              nextGuessHandler("greater");
            }}
          />
        </Card>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    // padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});
export default GameScreen;
