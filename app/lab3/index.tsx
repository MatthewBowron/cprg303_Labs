"use client"

import { useState } from "react"
import { View, Text, StyleSheet } from "react-native";

import Increment from "../../components/increment";
import Decrement from "../../components/decrement"

export default function App() {

    let [counter, setCounter] = useState(0);
    
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Count: {counter}</Text>
        <Increment counter={counter} setCounter={setCounter} />
        <Decrement counter={counter} setCounter={setCounter} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    margin: 5,
  }
});