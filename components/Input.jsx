import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

const Input = (props) => {
  return (
    <View>
      {/* <Text>Input</Text> */}
      <TextInput {...props} style={{ ...styles.input, ...props.style }} />
    </View>
  );
};

export default Input;
const styles = StyleSheet.create({
  input: {
    height: 50,
    border: "gray",
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
  },
});
