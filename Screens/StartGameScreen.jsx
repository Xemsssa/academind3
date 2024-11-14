import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Card from "./../components/Card";
import Colors from "../constants/color";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";

const StartGameScreen = () => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (inputText) => {
    // setEnteredNumber(inputText.replace(/[^0-9]/g, "") );
    // console.log(inputText);
    setEnteredNumber(inputText);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chousenNumber = parseInt(enteredNumber);
    if (isNaN(chousenNumber) || chousenNumber <= 0 || chousenNumber > 99) {
      Alert.alert("Invalid number", "Enter valid number between 1-99", [
        { text: "Ok", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chousenNumber);
    setEnteredNumber("");
    Keyboard.dismiss();
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You select</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button t itle="Start Game " />
      </Card>
    );
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game</Text>
        <Card setEnteredNumber={enteredNumber}>
          <View style={styles.inputContainer}>
            <Text>Select an Number</Text>
            <Input
              style={styles.input}
              keyboardType="number-pad"
              maxLength={2}
              onChangeText={(enteredNumber) => {
                numberInputHandler(enteredNumber);
              }}
              value={enteredNumber}
            />
            <View style={styles.buttonContiner}>
              <View style={styles.button}>
                <Button
                  title="Cancel"
                  onPress={() => {
                    resetInputHandler();
                  }}
                  color={Colors.primary}
                />
              </View>
              <View style={styles.button}>
                <Button
                  title="Ok"
                  onPress={() => {
                    confirmInputHandler();
                  }}
                  color={Colors.accent}
                />
              </View>
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    padding: 10,
    alignItems: "center",
  },

  title: {
    fontSize: 24,
  },

  button: {
    flex: 1,
    width: "40%",
  },
  inputContainer: {
    width: "80%",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    elevation: 5,
    padding: 20,
  },
  buttonContiner: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },

  button: {
    width: "40%",
  },

  input: {
    width: "40%",
  },

  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});
export default StartGameScreen;
