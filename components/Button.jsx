import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
// import { Button } from "./Button";

const Button = (props) => {
  return (
    // <View style={styles.button}>
    <Button style={styles.button} title={props.title} onPress={() => {}} />
    // </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "40%",
  },
});
export default Button;
