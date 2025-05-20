import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const handlePress = () => {
    alert("Lab 1 Done!")
  }

  const sampleList = [
    { name: "Matthew Bowron", github_repo: "https://github.com/MatthewBowron/cprg303_Labs", group_no: "1" },
    { name: "Vinicius Berger Gilles", github_repo: "https://github.com/MatthewBowron/cprg303_Labs", group_no: "1" },
    { name: "Rishi Yogesh Chaudhari", github_repo: "https://github.com/MatthewBowron/cprg303_Labs", group_no: "1" },
  ]


  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>

      {sampleList.map((item) => (
        <Text>Group {item.group_no} Member: {item.name}</Text>
      ))}

      <Text style={styles.text}>Group GitHub: {sampleList[0].github_repo}</Text>

      <Pressable>
        <Text style={styles.text} onPress={handlePress}>Click Me</Text>
      </Pressable>
      <StatusBar style="auto" />
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
  text: {
    color: 'black',
    textAlign: 'center',
  },
});
