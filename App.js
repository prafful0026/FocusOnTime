import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Focus } from "./src/features/focus/Focus";
export default function App() {
  const [focusSubject, setFocusSubject] = useState(false);
  return (
    <View style={styles.container}>
      {focusSubject ? <Text>on focus</Text> : <Focus />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#252250",
  },
});
