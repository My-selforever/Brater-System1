import React from "react";
import { StyleSheet,  View } from "react-native";
import Open from "./Screens/sign";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Open/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});


