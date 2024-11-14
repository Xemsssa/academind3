import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./Screens/StartGameScreen";

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.screen}>
        <Header title="Guess a Number" />
        <StartGameScreen />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
  },
});
