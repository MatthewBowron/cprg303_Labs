"use client"
import { SetStateAction, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import VACATION_LIST from "../../lib/vacationsDestinations";
import DisplayVacation from "../../components/display_vacation";


export default function Lab4() {

  const [displayId, setDisplayId] = useState(-1);

  return (
    <View style={styles.container}>

        {VACATION_LIST.map( (dest) => (
            <View key={dest.id}>
                <TouchableOpacity onPress={ () => dest.id == displayId? setDisplayId(-1):setDisplayId(dest.id) }>
                    <Text style={styles.list}>{dest.id==displayId?"▲":"▼"} {dest.location}</Text>
                </TouchableOpacity>
                {dest.id==displayId && <DisplayVacation destination={dest} />}
            </View>

        ))}        
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  list: {
    fontSize: 20,
    margin: 5,
    color: "#00f",
  },
  text: {
    fontSize: 20,
    margin: 5,
  }
});