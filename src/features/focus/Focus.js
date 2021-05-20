import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
// import {TextInput} from "react-native-paper"
import { RoundedButton } from "../../components/RoundedButton";

export const Focus = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} />
          <RoundedButton title="+"  size={50}  />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    paddingVertical: 50,
    paddingHorizontal: 16,
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  inputContainer: {
    flexDirection:"row",
    paddingTop: 20,
    alignItems:"center"
  },
  input: {
    flex:1,
    marginRight:10,
    paddingHorizontal: 10,
    backgroundColor: "white",
    height: 70,
    borderRadius: 5,
  },
});
