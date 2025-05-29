import { View, Text, StyleSheet } from 'react-native';

import DisplayFruit from "../components/display-fruit";

export default function apple() {
    
    return (
        <View style={styles.container}>
            <DisplayFruit fruit={'Apple'} />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});