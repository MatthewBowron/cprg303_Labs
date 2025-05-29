import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router'; 

import { FRUIT_LIST } from '../components/fruitList';

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Welcome to Our CPRG-303 Lab Assignment!</Text>

      {FRUIT_LIST.map((item) => (
        <View key={item.name}>
          <Text>{"\n"}</Text>
          <TouchableOpacity onPress={() => router.push(item.page)}>
            <Text style={styles.ListButtons}>{item.name}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ListButtons: {
    fontSize: 20,
    padding: 5,
    borderWidth: 1,
  }
});
