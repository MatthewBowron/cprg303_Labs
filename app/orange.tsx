import { View, StyleSheet } from 'react-native';

import DisplayFruit from "../components/display-fruit";

export default function orange() {
    
    return (
        <View style={styles.container}>
            <DisplayFruit fruit='Orange' />
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